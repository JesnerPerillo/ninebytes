function About() {
  return (
    <section
      id="about"
      className="bg-[var(--background)] px-6 py-24 text-[var(--text)] transition-colors duration-300 sm:px-10 lg:px-16"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        <div className="relative flex min-h-[460px] items-center justify-center">

          <div className="pointer-events-none absolute h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />

          <div className="relative h-80 w-80 rounded-[30%] bg-[var(--surface)] shadow-[20px_20px_40px_var(--shadow-dark),-20px_-20px_40px_var(--shadow-light)] transition-colors duration-300">

            <div className="absolute inset-10 rounded-[25%] bg-[var(--surface)] shadow-[inset_12px_12px_25px_var(--shadow-dark),inset_-12px_-12px_25px_var(--shadow-light)]" />

            <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--surface)] shadow-[10px_10px_20px_var(--shadow-dark),-10px_-10px_20px_var(--shadow-light)]">
              <span className="text-7xl font-black text-emerald-500">
                9
              </span>
            </div>

            <div className="absolute -right-6 top-10 rounded-2xl bg-[var(--surface)] px-5 py-4 shadow-[8px_8px_18px_var(--shadow-dark),-8px_-8px_18px_var(--shadow-light)] transition-colors duration-300">
              <p className="text-xs font-medium text-[var(--text-muted)]">
                THINK
              </p>

              <p className="font-bold text-[var(--text)]">
                DIFFERENT
              </p>
            </div>

            <div className="absolute -bottom-5 -left-6 rounded-2xl bg-[var(--surface)] px-5 py-4 shadow-[8px_8px_18px_var(--shadow-dark),-8px_-8px_18px_var(--shadow-light)] transition-colors duration-300">
              <p className="text-xs font-medium text-[var(--text-muted)]">
                BUILD
              </p>

              <p className="font-bold text-emerald-500">
                BETTER.
              </p>
            </div>
          </div>
        </div>

        <div>

          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-emerald-500">
            About NineBytes
          </p>

          <h2 className="text-4xl font-black leading-tight tracking-tight text-[var(--text)] sm:text-5xl">
            Small team.
            <span className="block text-[var(--text-muted)]">
              Big digital thinking.
            </span>
          </h2>

          <p className="mt-7 leading-7 text-[var(--text-muted)]">
            NineBytes is a digital product studio focused on creating
            technology that feels human. We combine design, development,
            and strategy to help businesses move from an idea to
            something people actually want to use.
          </p>

          <p className="mt-5 leading-7 text-[var(--text-muted)]">
            We believe great digital products don't need to be complicated.
            They need to be intentional, useful, and beautifully executed.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4">

            <div className="rounded-2xl bg-[var(--surface)] p-4 text-center shadow-[inset_4px_4px_9px_var(--shadow-dark),inset_-4px_-4px_9px_var(--shadow-light)] transition-colors duration-300">
              <p className="text-2xl font-black text-[var(--text)]">
                9+
              </p>

              <p className="mt-1 text-xs text-[var(--text-muted)]">
                Ideas shipped
              </p>
            </div>

            <div className="rounded-2xl bg-[var(--surface)] p-4 text-center shadow-[inset_4px_4px_9px_var(--shadow-dark),inset_-4px_-4px_9px_var(--shadow-light)] transition-colors duration-300">
              <p className="text-2xl font-black text-emerald-500">
                100%
              </p>

              <p className="mt-1 text-xs text-[var(--text-muted)]">
                Passion
              </p>
            </div>

            <div className="rounded-2xl bg-[var(--surface)] p-4 text-center shadow-[inset_4px_4px_9px_var(--shadow-dark),inset_-4px_-4px_9px_var(--shadow-light)] transition-colors duration-300">
              <p className="text-2xl font-black text-[var(--text)]">
                ∞
              </p>

              <p className="mt-1 text-xs text-[var(--text-muted)]">
                Possibilities
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
