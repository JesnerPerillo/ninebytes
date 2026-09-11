import ninebytesLogo from "../assets/ninebytes.png";

function Footer() {
  return (
    <footer
      className="
        bg-[var(--background)]
        px-5 pb-8 pt-14
        text-[var(--text)]
        shadow-[0_-8px_25px_var(--shadow-dark)]
        transition-colors duration-300
        sm:px-8 sm:pt-16
        lg:px-12 lg:pt-20
      "
    >
      <div className="mx-auto w-full max-w-7xl border-t border-[var(--border)] pt-8 sm:pt-10">

        {/* Main footer */}
        <div className="flex w-full flex-col items-center text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">

          {/* Brand */}
          <div className="flex flex-col items-center lg:items-start">

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
          <div className="mt-8 flex w-full items-center justify-center gap-8 text-sm text-[var(--text-muted)] sm:mt-10 lg:mt-0 lg:w-auto">
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
        <div className="mt-10 flex w-full flex-col items-center gap-3 border-t border-[var(--border)] pt-6 text-center text-xs text-[var(--text-muted)] sm:mt-12 sm:pt-7 lg:flex-row lg:justify-between lg:text-left">

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
