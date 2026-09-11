import ninebytesLogo from "../assets/ninebytes.png";

function Footer() {
  return (
    <footer className="bg-[var(--background)] px-6 pb-8 pt-16 text-[var(--text)] transition-colors duration-300 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl border-t border-[var(--border)] pt-8">

        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-[3px_3px_7px_var(--shadow-dark),-3px_-3px_7px_var(--shadow-light)]">
                <img
                    src={ninebytesLogo}
                    alt="NineBytes"
                    className="h-full w-full object-contain p-1.5"
                />
              </div>

              <span className="font-bold text-[var(--text)]">
                Nine<span className="text-emerald-500">Bytes</span>
              </span>

            </div>

            <p className="mt-3 text-sm text-[var(--text-muted)]">
              Digital products, built better.
            </p>
          </div>

          {/* Social links */}
          <div className="flex gap-6 text-sm text-[var(--text-muted)]">
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

        {/* Copyright */}
        <div className="mt-10 flex flex-col justify-between gap-3 text-xs text-[var(--text-muted)] sm:flex-row">
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
