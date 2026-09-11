import ninebytesLogo from "../assets/ninebytes.png";

function Footer() {
  return (
    <footer className="bg-[var(--background)] px-5 pb-8 pt-14 text-[var(--text)] transition-colors duration-300 sm:px-8 sm:pt-16 lg:px-12 lg:pt-20">
      <div className="mx-auto max-w-7xl border-t border-[var(--border)] pt-8 sm:pt-10">

        {/* Main footer content */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white shadow-[3px_3px_7px_var(--shadow-dark),-3px_-3px_7px_var(--shadow-light)]">
                <img
                  src={ninebytesLogo}
                  alt="NineBytes"
                  className="h-full w-full object-contain p-1.5"
                />
              </div>

              <span className="text-base font-bold tracking-tight text-[var(--text)] sm:text-lg">
                Nine<span className="text-emerald-500">Bytes</span>
              </span>
            </div>

            <p className="mt-3 text-sm text-[var(--text-muted)]">
              Digital products, built better.
            </p>
          </div>

          {/* Social links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[var(--text-muted)] sm:gap-x-8">
            <a
              href="#"
              className="transition-colors hover:text-emerald-500"
            >
              Instagram
            </a>

            <a
              href="#"
              className="transition-colors hover:text-emerald-500"
            >
              LinkedIn
            </a>

            <a
              href="#"
              className="transition-colors hover:text-emerald-500"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-[var(--border)] pt-6 text-xs text-[var(--text-muted)] sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:pt-7">
          <p>
            © 2026 NineBytes. All rights reserved.
          </p>

          <p>
            Made with intention.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
