function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[var(--background)] px-6 pb-20 pt-32 text-[var(--text)] transition-colors duration-300 sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div className="max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--text-muted)] shadow-[4px_4px_10px_var(--shadow-dark),-4px_-4px_10px_var(--shadow-light)] transition-colors duration-300">
            <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.7)]" />
            Ideas in Every Byte.
          </div>

          <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.04em] text-[var(--text)] sm:text-6xl lg:text-7xl">
            We build
            <span className="block text-emerald-500">
              digital
            </span>
            experiences.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-[var(--text-muted)] sm:text-lg">
            We turn ideas into meaningful digital products, with purpose in every byte.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-emerald-500 px-6 py-3.5 font-semibold text-white shadow-[7px_7px_15px_var(--shadow-dark),-5px_-5px_12px_var(--shadow-light)] transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-600"
            >
              Start a project

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-2xl bg-[var(--surface)] px-6 py-3.5 font-semibold text-[var(--text)] shadow-[7px_7px_15px_var(--shadow-dark),-7px_-7px_15px_var(--shadow-light)] transition-all duration-300 hover:-translate-y-1"
            >
              Explore our work
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3 text-sm text-[var(--text-muted)]">
            <div className="flex -space-x-2">
              <div className="h-8 w-8 rounded-full border-2 border-[var(--surface)] bg-emerald-200 dark:bg-emerald-800" />
              <div className="h-8 w-8 rounded-full border-2 border-[var(--surface)] bg-black dark:bg-white" />
              <div className="h-8 w-8 rounded-full border-2 border-[var(--surface)] bg-emerald-400 dark:bg-emerald-700" />
            </div>

            <span>
              Crafted for teams that think differently.
            </span>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-lg items-center justify-center lg:justify-end">

          <div className="relative flex aspect-square w-[min(78vw,440px)] items-center justify-center rounded-[32%] bg-[var(--surface)] shadow-[25px_25px_50px_var(--shadow-dark),-25px_-25px_50px_var(--shadow-light)] transition-colors duration-300">

            <div className="absolute inset-[12%] rounded-[28%] bg-[var(--surface)] shadow-[inset_15px_15px_30px_var(--shadow-dark),inset_-15px_-15px_30px_var(--shadow-light)]" />

            <div className="relative flex h-44 w-44 items-center justify-center rounded-full bg-[var(--surface)] shadow-[15px_15px_30px_var(--shadow-dark),-15px_-15px_30px_var(--shadow-light)] sm:h-52 sm:w-52">

              <span className="bg-gradient-to-br from-emerald-400 to-emerald-600 bg-clip-text text-[9rem] font-black leading-none text-transparent drop-shadow-[4px_5px_4px_rgba(0,0,0,0.15)]">
                9
              </span>
            </div>

            <div className="absolute -right-4 top-12 rounded-2xl bg-[var(--surface)] px-4 py-3 shadow-[8px_8px_18px_var(--shadow-dark),-8px_-8px_18px_var(--shadow-light)] transition-colors duration-300 sm:-right-8">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />

                <span className="font-mono text-xs font-bold text-[var(--text-muted)]">
                  01001
                </span>
              </div>
            </div>

            <div className="absolute -bottom-3 -left-5 rounded-2xl bg-[var(--surface)] px-4 py-3 shadow-[8px_8px_18px_var(--shadow-dark),-8px_-8px_18px_var(--shadow-light)] transition-colors duration-300 sm:-left-8">
              <div className="flex items-center gap-2">
                <span className="text-emerald-500">✦</span>

                <span className="text-xs font-bold text-[var(--text-muted)]">
                  BUILD / CREATE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[var(--text-muted)] sm:flex">
        <span>Scroll</span>
        <div className="h-8 w-px bg-[var(--border)]" />
      </div>
    </section>
  );
}

export default Hero;
