export default function PullQuote() {
  return (
    <section className="bg-brand-night py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="text-brand-teal dark:text-brand-mint text-3xl mb-6 select-none" aria-hidden="true">&ldquo;</div>
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
