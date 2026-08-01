#!/usr/bin/env node
/**
 * scripts/translate-pages.mjs
 *
 * Translates i18n TypeScript files using the Anthropic API (claude-sonnet-4-6).
 * Reads the German source const and writes back EN/FR/ES translations in-place.
 *
 * Usage:
 *   node scripts/translate-pages.mjs                      # all files, all locales
 *   node scripts/translate-pages.mjs --file i18n-pages   # specific file
 *   node scripts/translate-pages.mjs --locale en          # specific locale only
 *   node scripts/translate-pages.mjs --file i18n --locale fr
 *
 * Requires: ANTHROPIC_API_KEY env var
 */

import { readFileSync, writeFileSync, existsSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import Anthropic from '@anthropic-ai/sdk'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const projectRoot = join(__dirname, '..')

// ---------------------------------------------------------------------------
// CLI args
// ---------------------------------------------------------------------------

const args = process.argv.slice(2)

function getArg(name) {
  const idx = args.indexOf(name)
  return idx !== -1 && idx + 1 < args.length ? args[idx + 1] : null
}

const fileFilter = getArg('--file')    // 'i18n' | 'i18n-pages'
const localeFilter = getArg('--locale') // 'en' | 'fr' | 'es'

// ---------------------------------------------------------------------------
// File configuration
// ---------------------------------------------------------------------------

const FILE_CONFIGS = [
  {
    name: 'i18n',
    path: join(projectRoot, 'src/lib/i18n.ts'),
    sourceConst: 'de',
    targetLocales: [
      { locale: 'en', constName: 'en',  langName: 'English' },
      { locale: 'fr', constName: 'fr',  langName: 'French'  },
      { locale: 'es', constName: 'es',  langName: 'Spanish' },
    ],
  },
  {
    name: 'i18n-pages',
    path: join(projectRoot, 'src/lib/i18n-pages.ts'),
    sourceConst: 'dePage',
    targetLocales: [
      { locale: 'en', constName: 'enPage', langName: 'English' },
      { locale: 'fr', constName: 'frPage', langName: 'French'  },
      { locale: 'es', constName: 'esPage', langName: 'Spanish' },
    ],
  },
]

// ---------------------------------------------------------------------------
// String / brace utilities
// ---------------------------------------------------------------------------

/**
 * Given a string opening quote at `startIdx`, returns the index immediately
 * AFTER the matching closing quote (skipping escape sequences and template
 * literal expressions). Handles ', ", and ` quotes.
 */
function skipString(content, startIdx) {
  const quote = content[startIdx]
  let i = startIdx + 1

  if (quote === '`') {
    // Template literal — also skip ${...} expressions
    while (i < content.length) {
      if (content[i] === '\\') { i += 2; continue }
      if (content[i] === '`') return i + 1
      if (content[i] === '$' && content[i + 1] === '{') {
        i += 2
        let depth = 1
        while (i < content.length && depth > 0) {
          const ch = content[i]
          if (ch === '{') depth++
          else if (ch === '}') depth--
          i++
        }
        continue
      }
      i++
    }
  } else {
    while (i < content.length) {
      if (content[i] === '\\') { i += 2; continue }
      if (content[i] === quote) return i + 1
      i++
    }
  }
  return i // unterminated string — return end of content
}

function escapeForRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

/**
 * Locate a `const <constName>...= {` block in `content`.
 * Returns { start, end, prefix, objectContent } or null.
 *
 * - start/end: character offsets of the entire const declaration
 * - prefix: text from "const ..." up to (not including) the opening {
 * - objectContent: the { ... } block (including the braces)
 */
function findConstBlock(content, constName) {
  // Match: const <name> optionally with type annotation, then = {
  const pattern = new RegExp(
    `const ${escapeForRegex(constName)}(:\\s*[^=]+?)?\\s*=\\s*\\{`,
    'm',
  )
  const match = pattern.exec(content)
  if (!match) return null

  const startIdx = match.index
  // The { is the last character of the match
  const openBraceIdx = match.index + match[0].length - 1

  // Walk forward to find the matching closing brace, respecting strings
  let depth = 1
  let i = openBraceIdx + 1

  while (i < content.length && depth > 0) {
    const ch = content[i]
    if (ch === "'" || ch === '"' || ch === '`') {
      i = skipString(content, i) // i now points past the closing quote
      continue
    }
    if (ch === '{') depth++
    else if (ch === '}') depth--
    i++
  }

  if (depth !== 0) return null // unmatched braces

  const endIdx = i // character immediately after the closing }

  return {
    start: startIdx,
    end: endIdx,
    prefix: content.slice(startIdx, openBraceIdx), // "const en: Translations = "
    objectContent: content.slice(openBraceIdx, endIdx), // "{ ... }"
  }
}

/**
 * Return the { ... } object literal for `constName` inside `content`.
 */
function extractSourceObject(content, constName) {
  const block = findConstBlock(content, constName)
  if (!block) throw new Error(`Could not find "const ${constName}" in file`)
  return block.objectContent
}

/**
 * Replace the entire `const <constName> ... = { ... }` block with the same
 * prefix but a new object body.
 */
function replaceConstBlock(content, constName, newObjectContent) {
  const block = findConstBlock(content, constName)
  if (!block) throw new Error(`Could not find "const ${constName}" in file`)
  return (
    content.slice(0, block.start) +
    block.prefix +
    newObjectContent +
    content.slice(block.end)
  )
}

// ---------------------------------------------------------------------------
// Translation via Anthropic
// ---------------------------------------------------------------------------

const client = new Anthropic()

async function translateObject(sourceContent, targetLanguage) {
  const response = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 8192,
    messages: [
      {
        role: 'user',
        content: `You are a professional translator. Translate the following TypeScript/JavaScript object literal from German to ${targetLanguage}.

Rules:
- Preserve the EXACT TypeScript/JS object literal syntax (curly braces, quotes, commas, arrays, nested objects)
- Keep all property KEYS unchanged — do NOT translate keys
- Translate only string VALUES
- Do NOT translate: company names (Vencly, Clemens Pompeÿ, dm), email addresses, URLs, legal references, proper nouns
- Keep numeric values, boolean values, and non-string values unchanged
- Preserve \\n escape sequences inside strings exactly as they appear
- Use single quotes where the original uses single quotes, double quotes where it uses double quotes
- Return ONLY the translated object literal — starting with { and ending with }
- No explanation, no markdown code fences, no extra text before or after the object

Source object (German):
${sourceContent}`,
      },
    ],
  })

  const block = response.content[0]
  if (block.type !== 'text') throw new Error('Unexpected response type from Claude')

  let text = block.text.trim()
  // Strip accidental markdown code fences if Claude wrapped the output
  text = text.replace(/^```[a-z]*\n?/i, '').replace(/\n?```$/i, '').trim()

  return text
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error('Error: ANTHROPIC_API_KEY environment variable is not set')
    process.exit(1)
  }

  // Determine which files to process
  const filesToProcess = fileFilter
    ? FILE_CONFIGS.filter(f => f.name === fileFilter)
    : FILE_CONFIGS

  if (fileFilter && filesToProcess.length === 0) {
    const valid = FILE_CONFIGS.map(f => f.name).join(', ')
    console.error(`Error: Unknown --file value "${fileFilter}". Valid: ${valid}`)
    process.exit(1)
  }

  if (localeFilter && !['en', 'fr', 'es'].includes(localeFilter)) {
    console.error(`Error: Unknown --locale value "${localeFilter}". Valid: en, fr, es`)
    process.exit(1)
  }

  for (const fileConfig of filesToProcess) {
    if (!existsSync(fileConfig.path)) {
      console.warn(`Skipping ${fileConfig.name}: file not found at ${fileConfig.path}`)
      continue
    }

    console.log(`\nProcessing: ${fileConfig.name}`)
    console.log(`  Path: ${fileConfig.path}`)

    let content = readFileSync(fileConfig.path, 'utf-8')

    // Extract the German source
    let sourceObject
    try {
      sourceObject = extractSourceObject(content, fileConfig.sourceConst)
    } catch (err) {
      console.error(`  Error extracting source const "${fileConfig.sourceConst}": ${err.message}`)
      continue
    }

    console.log(`  Source const "${fileConfig.sourceConst}" found (${sourceObject.length} chars)`)

    // Filter locales
    const localesToProcess = localeFilter
      ? fileConfig.targetLocales.filter(l => l.locale === localeFilter)
      : fileConfig.targetLocales

    if (localeFilter && localesToProcess.length === 0) {
      console.warn(`  Locale "${localeFilter}" not configured for ${fileConfig.name}`)
      continue
    }

    let currentContent = content

    for (const { locale, constName, langName } of localesToProcess) {
      console.log(`  Translating [${locale}] ${langName}...`)

      try {
        const translated = await translateObject(sourceObject, langName)

        // Validate the response starts/ends with braces
        if (!translated.startsWith('{') || !translated.endsWith('}')) {
          throw new Error(
            `Translation response does not look like an object literal (got: ${translated.slice(0, 80)}...)`,
          )
        }

        // Check if the target const exists; if not, warn but don't crash
        const block = findConstBlock(currentContent, constName)
        if (!block) {
          console.warn(`  Warning: const "${constName}" not found in file — skipping replacement`)
          continue
        }

        currentContent = replaceConstBlock(currentContent, constName, translated)
        console.log(`  [${locale}] done`)
      } catch (err) {
        console.error(`  [${locale}] FAILED: ${err.message}`)
      }
    }

    writeFileSync(fileConfig.path, currentContent, 'utf-8')
    console.log(`  Saved.`)
  }

  console.log('\nAll done.')
}

main().catch(err => {
  console.error('Fatal error:', err)
  process.exit(1)
})
