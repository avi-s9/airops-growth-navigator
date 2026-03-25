import { useEffect, useState } from "react";

const sections = [
  { id: "aha-moment", label: "1. Aha Moment", short: "1" },
  { id: "growth-engine", label: "2. Growth Engine", short: "2" },
  { id: "investment", label: "3. Investment Framework", short: "3" },
];

export default function NavBar() {
  const [active, setActive] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 120;
      let current = "";

      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollY >= top && scrollY < bottom) {
            current = s.id;
          }
        }
      }

      if (!current && window.scrollY < 200) {
        current = sections[0].id;
      }

      if (current && current !== active) {
        setActive(current);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [active]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Progress bar */}
      <div className="fixed left-0 right-0 top-0 z-[60] h-[3px] bg-transparent">
        <div
          className="h-full bg-primary transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav className="sticky top-[3px] z-50 border-b border-border bg-card/95 backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-content items-center justify-between px-6">
          <span className="font-display text-base tracking-[-0.02em] text-foreground">
            AirOps Growth Case Study
          </span>

          {/* Desktop nav */}
          <div className="hidden gap-6 md:flex">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`relative cursor-pointer pb-1 text-sm font-medium transition-colors ${
                  active === s.id
                    ? "text-foreground"
                    : "text-text-secondary hover:text-foreground"
                }`}
              >
                {s.label}
                {active === s.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-primary" />
                )}
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="flex cursor-pointer flex-col gap-1 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-5 bg-foreground transition-transform ${mobileMenuOpen ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-foreground transition-opacity ${mobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-foreground transition-transform ${mobileMenuOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="border-t border-border bg-card px-6 py-3 md:hidden">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`block w-full cursor-pointer py-2 text-left text-sm font-medium ${
                  active === s.id ? "text-foreground" : "text-text-secondary"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
