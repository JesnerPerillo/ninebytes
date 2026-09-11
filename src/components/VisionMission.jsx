const values = [
{
number: "01",
title: "Purpose",
description: "Every product should solve a meaningful problem.",
},
{
number: "02",
title: "Simplicity",
description:
"Complex technology should be presented through simple and understandable experiences.",
},
{
number: "03",
title: "Quality",
description:
"Products should be carefully designed, engineered, tested, and continuously improved.",
},
{
number: "04",
title: "Innovation",
description:
"NineBytes should continuously explore better ways to solve problems through technology.",
},
{
number: "05",
title: "User-Centered Thinking",
description:
"Technology should be designed around the people who use it.",
},
{
number: "06",
title: "Continuous Improvement",
description:
"Launching a product is not the end of the process. Products should evolve through feedback, data, and changing user needs.",
},
];

const capabilities = [
"Product Thinking",
"Design",
"Engineering",
"Strategy",
"Technology",
"Innovation",
];

function VisionMission() {
return (
<section className="px-6 py-28 sm:px-10 lg:px-16">
    <div className="mx-auto max-w-7xl">

    <div className="relative overflow-hidden rounded-[36px] bg-[var(--surface)] px-8 py-12 text-[var(--text)] shadow-[15px_15px_30px_var(--shadow-dark),-15px_-15px_30px_var(--shadow-light)] transition-colors duration-300 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
    <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full border border-emerald-500/10" />

        <div className="relative">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-start">

                <div>
                    <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-emerald-500">
                    Brand Concept
                    </p>

                    <h2 className="mt-5 max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-[var(--text)] sm:text-5xl lg:text-6xl">
                    A digital product studio
                    <span className="block text-[var(--text-muted)]">
                        built around ideas.
                    </span>
                    </h2>
                </div>

                <div className="max-w-xs lg:pt-14">
                    <p className="text-sm leading-6 text-[var(--text-muted)]">
                    NineBytes combines product thinking, design, engineering,
                    strategy, technology, and innovation into one approach to
                    building digital products.
                    </p>
                </div>
            </div>

            <div className="mt-14 max-w-3xl border-t border-[var(--border)] pt-8">
                <p className="text-base leading-8 text-[var(--text-muted)] sm:text-lg">
                    NineBytes is envisioned as a modern digital product studio.
                    Rather than positioning itself solely as a freelance
                    development company or traditional IT provider, the brand
                    represents a combination of thoughtful product thinking,
                    purposeful design, practical engineering, and strategic
                    technology.
                </p>
            </div>

            <div className="mt-12 grid grid-cols-2 border-t border-[var(--border)] sm:grid-cols-3 lg:grid-cols-6">
                {capabilities.map((capability, index) => (
                    <div
                    key={capability}
                    className={`group border-[var(--border)] py-5 ${index % 2 === 0 ? "border-r" : ""} ${index >= 2 ? "border-t sm:border-t-0" : ""} lg:border-r ${index === capabilities.length - 1 ? "lg:border-r-0" : ""}`}
                    >
                        <div className="px-4">
                            <span className="font-mono text-[10px] font-bold text-emerald-500">
                            {String(index + 1).padStart(2, "0")}
                            </span>

                            <p className="mt-3 text-sm font-semibold text-[var(--text-muted)] transition-colors duration-300 group-hover:text-emerald-500">
                            {capability}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-14 rounded-[28px] border border-[var(--border)] bg-[var(--background)] p-7 transition-colors duration-300 sm:p-9">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--text-muted)]">
                    Core Proposition
                </p>

                <p className="mt-5 max-w-4xl text-2xl font-black leading-tight tracking-tight text-[var(--text)] sm:text-3xl lg:text-4xl">
                    We transform ideas into{" "}
                    <span className="text-emerald-500">
                    useful, scalable,
                    </span>{" "}
                    and thoughtfully designed digital products.
                </p>
            </div>

        </div>
    </div>

    <div className="mt-24 grid gap-6 lg:grid-cols-2">
      <article className="group relative overflow-hidden rounded-[32px] bg-[var(--surface)] p-8 shadow-[15px_15px_30px_var(--shadow-dark),-15px_-15px_30px_var(--shadow-light)] sm:p-10 lg:p-12">
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl transition-transform duration-700 group-hover:scale-125" />

        <div className="relative">

          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--text-muted)]">
              Direction
            </span>
          </div>

          <p className="mt-14 text-xs font-bold uppercase tracking-[0.2em] text-emerald-500">
            Our Vision
          </p>

          <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-[var(--text)] sm:text-4xl">
            Building technology
            <span className="block text-[var(--text-muted)]">
              that makes a difference.
            </span>
          </h2>

          <p className="mt-7 text-base leading-7 text-[var(--text)]">
            To become a trusted technology company that creates
            meaningful digital products that improve how people work,
            learn, and interact with technology.
          </p>

          <div className="mt-10 border-t border-[var(--border)] pt-6">
            <p className="text-sm leading-6 text-[var(--text-muted)]">
              Our long-term vision is to develop our own portfolio of
              software products while continuing to provide digital
              product development services.
            </p>
          </div>

        </div>
      </article>

      <article className="group relative overflow-hidden rounded-[32px] bg-[var(--surface)] p-8 shadow-[15px_15px_30px_var(--shadow-dark),-15px_-15px_30px_var(--shadow-light)] sm:p-10 lg:p-12">

        <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-emerald-500/5 blur-3xl transition-transform duration-700 group-hover:scale-125" />

        <div className="relative">

          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--text-muted)]">
              Purpose
            </span>
          </div>

          <p className="mt-14 text-xs font-bold uppercase tracking-[0.2em] text-emerald-500">
            Our Mission
          </p>

          <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-[var(--text)] sm:text-4xl">
            Turning ideas
            <span className="block text-[var(--text-muted)]">
              into purposeful products.
            </span>
          </h2>

          <p className="mt-7 text-base leading-7 text-[var(--text)]">
            To design and build reliable, accessible, and purposeful
            digital products that solve real-world problems.
          </p>

          <div className="mt-10 border-t border-[var(--border)] pt-6">
            <p className="text-sm leading-6 text-[var(--text-muted)]">
              NineBytes combines thoughtful design with practical
              engineering to create technology that is functional,
              intuitive, and enjoyable to use.
            </p>
          </div>

        </div>
      </article>

    </div>

    <div className="mt-28">

      <div className="flex flex-col justify-between gap-6 border-b border-[var(--border)] pb-8 md:flex-row md:items-end">

        <div>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-[var(--text)] sm:text-5xl">
            What guides
            <span className="block text-[var(--text-muted)]">
              everything we build.
            </span>
          </h2>
        </div>

        <p className="max-w-sm text-sm leading-6 text-[var(--text-muted)]">
          Our values shape how we think, design, build, and improve
          every product we create.
        </p>

      </div>

      <div className="grid md:grid-cols-2">

        {values.map((value, index) => (
          <article
            key={value.number}
            className={`group relative border-b border-[var(--border)] py-8 md:px-8 ${
              index % 2 === 0 ? "md:border-r" : ""
            } ${
              index >= values.length - 2
                ? "md:border-b-0"
                : ""
            }`}
          >

            <div className="flex gap-6">

              <span className="pt-1 font-mono text-xs font-bold text-emerald-500">
                {value.number}
              </span>

              <div className="max-w-md">

                <h3 className="text-xl font-bold text-[var(--text)] transition-colors duration-300 group-hover:text-emerald-500">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">
                  {value.description}
                </p>

              </div>

            </div>

            <div className="absolute bottom-0 left-0 h-px w-0 bg-emerald-500 transition-all duration-500 group-hover:w-full" />

          </article>
        ))}

      </div>

    </div>

    <div className="mt-20 text-center">

      <div className="mx-auto h-px w-16 bg-emerald-500" />

      <p className="mt-8 text-2xl font-black tracking-tight text-[var(--text)] sm:text-3xl">
        Meaning in every{" "}
        <span className="text-emerald-500">
          byte.
        </span>
      </p>

      <p className="mt-3 text-sm text-[var(--text-muted)]">
        Purposeful technology, thoughtfully built.
      </p>

    </div>

  </div>
</section>


);
}

export default VisionMission;