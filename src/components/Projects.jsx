/* eslint-disable no-unused-vars */
const projects = [
  {
    category: "Student Information System",
    title: "NineBytes SIS",
    description:
      "A centralized student information system designed to simplify academic records, student management, enrollment, and everyday school operations.",
  },
];

function Projects() {
  return (
    <section
      id="work"
      className="bg-[var(--background)] px-6 py-24 text-[var(--text)] transition-colors duration-300 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-emerald-500">
              Our product
            </p>

            <h2 className="text-4xl font-black tracking-tight text-[var(--text)] sm:text-5xl">
              One system.
              <span className="block text-[var(--text-muted)]">
                Everything students need.
              </span>
            </h2>
          </div>

          <a
            href="#contact"
            className="text-sm font-semibold text-emerald-500 transition-colors hover:text-emerald-600"
          >
            Learn about SIS →
          </a>
        </div>

        <div className="mt-14">
          <article className="group grid overflow-hidden rounded-[32px] bg-[var(--surface)] p-5 shadow-[12px_12px_25px_var(--shadow-dark),-12px_-12px_25px_var(--shadow-light)] transition-colors duration-300 lg:grid-cols-2 lg:gap-8 lg:p-7">

            <div className="relative min-h-[360px] overflow-hidden rounded-[24px] bg-emerald-500">

              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10" />

              <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-black/10" />

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_30%)]" />

              <div className="absolute left-8 right-8 top-10 overflow-hidden rounded-2xl bg-[var(--surface)] shadow-2xl transition-transform duration-500 group-hover:-translate-y-2 sm:left-12 sm:right-12">

                <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-3">
                  <div className="flex items-center gap-2">

                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500 text-xs font-black text-white">
                      9
                    </div>

                    <span className="text-xs font-bold text-[var(--text)]">
                      NineBytes SIS
                    </span>
                  </div>

                  <div className="h-2 w-12 rounded-full bg-[var(--shadow-dark)]" />
                </div>

                <div className="grid grid-cols-[70px_1fr]">

                  <div className="space-y-3 bg-[var(--surface-dark)] p-3">
                    <div className="h-2 rounded-full bg-emerald-500" />
                    <div className="h-2 rounded-full bg-[var(--shadow-dark)]" />
                    <div className="h-2 rounded-full bg-[var(--shadow-dark)]" />
                    <div className="h-2 rounded-full bg-[var(--shadow-dark)]" />
                  </div>

                  <div className="bg-[var(--surface)] p-4">
                    <div className="h-3 w-24 rounded-full bg-[var(--text)]" />

                    <div className="mt-4 grid grid-cols-3 gap-2">
                      <div className="h-14 rounded-lg bg-emerald-100 dark:bg-emerald-950" />
                      <div className="h-14 rounded-lg bg-[var(--surface-dark)]" />
                      <div className="h-14 rounded-lg bg-emerald-50 dark:bg-emerald-950/60" />
                    </div>

                    <div className="mt-4 h-24 rounded-lg bg-[var(--surface-dark)]" />
                  </div>

                </div>
              </div>

              <div className="absolute bottom-6 right-6 rounded-2xl bg-black/20 px-4 py-3 text-white shadow-lg backdrop-blur-md">
                <p className="text-[10px] font-medium uppercase tracking-wider text-white/60">
                  Platform
                </p>

                <p className="mt-1 text-sm font-bold">
                  Student Management
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center px-3 py-8 lg:px-8">

              <span className="w-fit rounded-full bg-[var(--surface)] px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-500 shadow-[inset_2px_2px_5px_var(--shadow-dark),inset_-2px_-2px_5px_var(--shadow-light)]">
                Student Information System
              </span>

              <h3 className="mt-6 text-4xl font-black tracking-tight text-[var(--text)]">
                NineBytes SIS
              </h3>

              <p className="mt-5 leading-7 text-[var(--text-muted)]">
                A modern platform built to bring student information,
                academic records, enrollment, and school operations into
                one organized system.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3">

                <div className="rounded-2xl bg-[var(--surface)] p-4 shadow-[inset_4px_4px_9px_var(--shadow-dark),inset_-4px_-4px_9px_var(--shadow-light)]">
                  <p className="text-sm font-bold text-[var(--text)]">
                    Student Records
                  </p>

                  <p className="mt-1 text-xs text-[var(--text-muted)]">
                    Centralized information
                  </p>
                </div>

                <div className="rounded-2xl bg-[var(--surface)] p-4 shadow-[inset_4px_4px_9px_var(--shadow-dark),inset_-4px_-4px_9px_var(--shadow-light)]">
                  <p className="text-sm font-bold text-[var(--text)]">
                    Enrollment
                  </p>

                  <p className="mt-1 text-xs text-[var(--text-muted)]">
                    Streamlined processes
                  </p>
                </div>

                <div className="rounded-2xl bg-[var(--surface)] p-4 shadow-[inset_4px_4px_9px_var(--shadow-dark),inset_-4px_-4px_9px_var(--shadow-light)]">
                  <p className="text-sm font-bold text-[var(--text)]">
                    Academic Records
                  </p>

                  <p className="mt-1 text-xs text-[var(--text-muted)]">
                    Grades & performance
                  </p>
                </div>

                <div className="rounded-2xl bg-[var(--surface)] p-4 shadow-[inset_4px_4px_9px_var(--shadow-dark),inset_-4px_-4px_9px_var(--shadow-light)]">
                  <p className="text-sm font-bold text-[var(--text)]">
                    Administration
                  </p>

                  <p className="mt-1 text-xs text-[var(--text-muted)]">
                    Simplified management
                  </p>
                </div>

              </div>

              <a
                href="#contact"
                className="mt-8 inline-flex w-fit items-center rounded-2xl bg-emerald-500 px-6 py-3.5 font-semibold text-white shadow-[6px_6px_14px_var(--shadow-dark),-5px_-5px_12px_var(--shadow-light)] transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-600"
              >
                Explore NineBytes SIS
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

            </div>

          </article>
        </div>

      </div>
    </section>
  );
}

export default Projects;
