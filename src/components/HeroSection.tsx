import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { value: "337 to 139", label: "Users who generate their first article" },
  { value: "41.3%", label: "Current activation rate" },
  { value: "3h 35m", label: "Avg time to first article" },
];

export default function HeroSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.05 });

  return (
    <section ref={ref} className="px-6 pb-16 pt-20">
      <div className="mx-auto max-w-content">
        <div
          className="transition-all duration-[600ms] ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Growth Product Manager Case Study
          </p>
          <h1 className="font-display text-[44px] leading-tight tracking-[-0.02em] text-foreground max-md:text-[32px]">
            Getting More Users to the Aha Moment
          </h1>
          <p className="mt-4 max-w-[680px] text-lg leading-[1.7] text-text-secondary max-md:text-base">
            Why 59% of users drop off before seeing their first piece of generated content - and how to fix it.
          </p>
          <p className="mt-3 text-sm text-text-secondary">Avi - March 2026</p>
          <p className="text-sm text-text-secondary">Tested using SSENSE (my former employer) as the onboarding case - a luxury fashion e-commerce brand with an active editorial program.</p>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-4 max-md:grid-cols-1">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="rounded-lg border border-border bg-card p-5 shadow-card transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-card-hover"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.4s ease-out ${i * 100}ms, transform 0.4s ease-out ${i * 100}ms`,
              }}
            >
              <div className="font-mono text-2xl font-bold text-foreground">
                {s.value}
              </div>
              <div className="mt-1 text-sm leading-[1.7] text-text-secondary">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button
            onClick={() => document.getElementById('aha-moment')?.scrollIntoView({ behavior: 'smooth' })}
            className="cursor-pointer text-foreground/20 transition-colors hover:text-foreground/40"
            aria-label="Scroll to content"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-bounce"
            >
              <path d="M7 13l5 5 5-5" />
              <path d="M7 6l5 5 5-5" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
