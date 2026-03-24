const stats = [
  { value: "337 → 139", label: "Users reaching aha moment" },
  { value: "41.3%", label: "Current activation rate" },
  { value: "3h 35m", label: "Avg time to convert" },
];

export default function HeroSection() {
  return (
    <section className="px-6 pb-16 pt-20">
      <div className="mx-auto max-w-content">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Growth Product Manager Case Study
        </p>
        <h1 className="font-display text-[44px] leading-tight text-foreground">
          Getting More Users to the Aha Moment
        </h1>
        <p className="mt-4 max-w-[680px] text-lg leading-relaxed text-text-secondary">
          An analysis of AirOps' onboarding funnel, a redesigned activation flow,
          and a self-serve growth engine to drive top-of-funnel awareness.
        </p>
        <p className="mt-3 text-sm text-text-secondary">Avi — March 2026</p>

        <div className="mt-10 grid grid-cols-3 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-lg border border-border bg-card p-5 shadow-card"
            >
              <div className="font-mono text-2xl font-bold text-foreground">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-text-secondary">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
