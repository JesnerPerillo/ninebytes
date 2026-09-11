const services = [
  {
    number: "01",
    icon: "◈",
    title: "Web Development",
    description:
      "Fast, responsive, and scalable websites built around your business goals.",
    tags: ["React", "Next.js", "Tailwind"],
  },
  {
    number: "02",
    icon: "✦",
    title: "UI / UX Design",
    description:
      "Thoughtful interfaces that make complex products feel simple and enjoyable.",
    tags: ["Design Systems", "Prototyping", "UX"],
  },
  {
    number: "03",
    icon: "⌁",
    title: "Digital Products",
    description:
      "From the first idea to launch, we help transform concepts into real products.",
    tags: ["Strategy", "MVP", "Product"],
  },
];

function Services() {
  return (
    <section
      id="services"
      className="bg-[var(--background)] px-6 py-24 text-[var(--text)] transition-colors duration-300 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-emerald-500">
            What we do
          </p>

          <h2 className="text-4xl font-black tracking-tight text-[var(--text)] sm:text-5xl">
            Ideas are easy.
            <span className="block text-[var(--text-muted)]">
              Making them real is our thing.
            </span>
          </h2>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="group rounded-[28px] bg-[var(--surface)] p-7 shadow-[12px_12px_25px_var(--shadow-dark),-12px_-12px_25px_var(--shadow-light)] transition-all duration-300 hover:-translate-y-2"
            >

              <div className="flex items-start justify-between">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--surface)] text-2xl text-emerald-500 shadow-[inset_5px_5px_10px_var(--shadow-dark),inset_-5px_-5px_10px_var(--shadow-light)]">
                  {service.icon}
                </div>

                <span className="font-mono text-xs font-bold text-[var(--text-muted)]">
                  {service.number}
                </span>

              </div>

              <h3 className="mt-8 text-2xl font-bold text-[var(--text)]">
                {service.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-[var(--text-muted)]">
                {service.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[var(--surface)] px-3 py-1.5 text-xs font-medium text-[var(--text-muted)] shadow-[inset_2px_2px_5px_var(--shadow-dark),inset_-2px_-2px_5px_var(--shadow-light)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link */}
              <div className="mt-8 flex items-center text-sm font-semibold text-emerald-500">
                Learn more

                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
