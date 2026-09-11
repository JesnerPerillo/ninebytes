import { useEffect, useState } from "react";
import ninebytesLogo from "../assets/ninebytes.png";

function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);

    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((current) => !current);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-black/5 bg-[var(--surface)] px-5 py-3 transition-colors duration-300 dark:border-white/5">

        <a href="#" className="group flex items-center gap-3">

          <div
            className="
              flex h-10 w-10 items-center justify-center
              overflow-hidden rounded-xl
              bg-white
              shadow-[4px_4px_9px_var(--shadow-dark),-4px_-4px_9px_var(--shadow-light)]
              transition-transform duration-300
              group-hover:scale-105
            "
          >
            <img
              src={ninebytesLogo}
              alt="NineBytes"
              className="h-full w-full object-contain p-1.5"
            />
          </div>

          <span className="text-lg font-bold tracking-tight text-[var(--text)]">
            Nine<span className="text-emerald-500">Bytes</span>
          </span>

        </a>

        <div className="hidden items-center gap-8 md:flex">

          <a
            href="#services"
            className="text-sm font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
          >
            Services
          </a>

          <a
            href="#work"
            className="text-sm font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
          >
            Our Work
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
          >
            About
          </a>

        </div>

        <div className="flex items-center gap-3">

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            className="
              flex h-10 w-10 items-center justify-center rounded-xl
              bg-[var(--surface)]
              text-[var(--text)]
              shadow-[4px_4px_9px_var(--shadow-dark),-4px_-4px_9px_var(--shadow-light)]
              transition-all duration-300
              hover:text-emerald-500
              cursor-pointer
              active:shadow-[inset_3px_3px_7px_var(--shadow-dark),inset_-3px_-3px_7px_var(--shadow-light)]
            "
          >
            {darkMode ? "☀" : "☾"}
          </button>

          <a
            href="#contact"
            className="
              rounded-xl bg-black px-4 py-2.5
              text-sm font-semibold text-white
              shadow-lg transition-all duration-300
              hover:-translate-y-0.5
              hover:bg-emerald-500
              dark:bg-white dark:text-black
              dark:hover:bg-emerald-500 dark:hover:text-white
            "
          >
            Let's Talk
          </a>

        </div>

      </nav>
    </header>
  );
}

export default Navbar;
