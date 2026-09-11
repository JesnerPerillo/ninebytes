function CTA() {
  return (
    <section
      id="contact"
      className="bg-[var(--background)] px-6 py-24 text-[var(--text)] transition-colors duration-300 sm:px-10 lg:px-16"
    >
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-emerald-500 px-8 py-20 text-center shadow-[15px_15px_30px_var(--shadow-dark),-15px_-15px_30px_var(--shadow-light)] sm:px-16">

        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10" />
        <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-black/10" />

        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />

        <div className="relative mx-auto max-w-3xl">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-100">
            Have an idea?
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-6xl">
            Let's build something
            <span className="block text-emerald-100">
              worth talking about.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-emerald-50">
            Tell us what you're thinking. Whether it's a new product,
            a website, or something completely different—we'd love to
            hear about it.
          </p>

          <a
            href="mailto:hello@ninebytes.dev"
            className="mt-9 inline-flex rounded-2xl bg-white px-7 py-4 font-bold text-black shadow-[7px_7px_15px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-gray-50"
          >
            Start a conversation →
          </a>
        </div>

      </div>
    </section>
  );
}

export default CTA;
