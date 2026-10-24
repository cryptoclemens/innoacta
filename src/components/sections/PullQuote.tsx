export default function PullQuote() {
  return (
    <section className="px-4 py-8">
      {/* Dunkles, dickes Glas — in beiden Modi navy, damit das Zitat als Ruhepunkt wirkt. */}
      <div className="glas-dick glas-ohne-glanz !bg-brand-navy/90 dark:!bg-brand-card/90 rounded-[32px] max-w-5xl mx-auto text-center px-6 py-16 sm:px-16">
        <div className="text-brand-mint text-5xl leading-none mb-6 select-none" aria-hidden="true">&ldquo;</div>
        <blockquote className="text-2xl sm:text-3xl md:text-4xl font-normal leading-snug text-white mb-8">
          KI macht Hypothesen nicht wahr.
          <br />
          Sie macht sie schneller testbar.
        </blockquote>
        <div className="flex items-center justify-center gap-3">
          <div className="h-px w-8 bg-brand-teal opacity-50" />
          <p className="text-brand-mint text-sm font-mono tracking-widest uppercase">
            Clemens Pompeÿ — innovation.today
          </p>
          <div className="h-px w-8 bg-brand-teal opacity-50" />
        </div>
      </div>
    </section>
  )
}
