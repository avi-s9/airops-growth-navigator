import { useEffect, useState } from "react";

const sections = [
  { id: "aha-moment", label: "1. Aha Moment" },
  { id: "growth-engine", label: "2. Growth Engine" },
  { id: "investment", label: "3. Investment Framework" },
];

export default function NavBar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-content items-center justify-between px-6">
        <span className="font-display text-base text-foreground">
          AirOps Growth Case Study
        </span>
        <div className="flex gap-6">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`relative pb-1 text-sm font-medium transition-colors ${
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
      </div>
    </nav>
  );
}
