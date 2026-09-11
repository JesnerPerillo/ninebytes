const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your idea, your users, and the problem you're trying to solve.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We turn ideas into intuitive interfaces, experiences, and product systems.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Our developers bring the product to life with clean and scalable technology.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We ship, learn, iterate, and help your product continue getting better.",
  },
];

function Process() {
  return (
    <section className="bg-[var(--background)] px-6 py-24 text-[var(--text)] transition-colors duration-300 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl rounded-[36px] bg-[var(--surface)] p-8 shadow-[inset_10px_10px_22px_var(--shadow-dark),inset_-10px_-10px_22px_var(--shadow-light)] transition-colors duration-300 sm:p-12 lg:p-16">

        {/* Section heading */}
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-emerald-500">
            How we work
          </p>

          <h2 className="text-4xl font-black tracking-tight text-[var(--text)] sm:text-5xl">
            From first thought
            <span className="block text-[var(--text-muted)]">
              to final pixel.
            </span>
          </h2>
        </div>

        {/* Steps */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group rounded-3xl bg-[var(--surface)] p-6 shadow-[8px_8px_18px_var(--shadow-dark),-8px_-8px_18px_var(--shadow-light)] transition-all duration-300 hover:-translate-y-1"
            >
              {/* Number */}
              <span className="font-mono text-sm font-bold text-emerald-500">
                {step.number}
              </span>

              {/* Title */}
              <h3 className="mt-8 text-xl font-bold text-[var(--text)]">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">
                {step.description}
              </p>

              {/* Accent */}
              <div className="mt-6 h-1 w-8 rounded-full bg-emerald-500 transition-all duration-300 group-hover:w-14" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Process;
