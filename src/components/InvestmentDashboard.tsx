import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const thresholds = [
  {
    key: "green",
    label: "Green Light",
    emoji: "🟢",
    headline: "Double down",
    primary: "at least 10 activated trial users / month",
    timeframe: "by Week 8 post-launch",
    description:
      "The channel is producing real AirOps users at a rate that justifies scaling. Every stage of the funnel is working - the hook converts, the report drives adoption, and the viral loop is firing.",
    diagnostics: [
      { metric: "Checker to Audit", target: "at least 20%", meaning: "People care enough to give their email" },
      { metric: "Audit to Trial", target: "at least 12%", meaning: "The report makes them want to try the product, not just read about the problem" },
      { metric: "Share rate", target: "at least 15%", meaning: "Reports are getting shared - growth isn't purely paid" },
    ],
    action:
      "Request dedicated resources and scale distribution. Don't overthink the diagnostic split - if you're at 10+ activated users, the funnel works even if it's converting differently than you expected.",
    zone: "green" as const,
  },
  {
    key: "yellow",
    label: "Yellow Light",
    emoji: "🟡",
    headline: "Promising but needs iteration",
    primary: "4-9 activated trial users / month",
    timeframe: "by Week 8 post-launch",
    description:
      "The channel is producing real users, but not enough to justify scaling yet. This is where you look at the diagnostics to figure out what's broken.",
    diagnostics: [
      { metric: "Checker to Audit", target: "10-19%", meaning: "People find it interesting but not enough to hand over their email" },
      { metric: "Audit to Trial", target: "5-11%", meaning: "They read the report but don't feel the need to act on it" },
      { metric: "Share rate", target: "8-14%", meaning: "A few shares here and there, but not enough to drive organic growth" },
    ],
    action:
      "Give it 4 more weeks (Weeks 9-12) focused on the weakest diagnostic. If 2 diagnostics are green and 1 is yellow, keep iterating. If 2 are yellow and 1 is green, the concept needs more fundamental rethinking.",
    zone: "yellow" as const,
  },
  {
    key: "red",
    label: "Red Light",
    emoji: "🔴",
    headline: "Kill and move on",
    primary: "< 4 activated trial users / month",
    timeframe: "after 8 weeks, with no upward trend",
    description:
      "The channel isn't producing enough value to justify even the current resource allocation. The diagnostics tell you whether this is something you can fix or something more fundamental.",
    diagnostics: [
      { metric: "Checker to Audit", target: "< 10%", meaning: "The output isn't compelling enough to act on. No amount of funnel optimization fixes that" },
      { metric: "Audit to Trial", target: "< 5%", meaning: "People understand the problem but don't believe a self-serve tool will fix it" },
      { metric: "Share rate", target: "< 5%", meaning: "Nobody shares the report - you'd need to pay for every user forever" },
    ],
    action:
      "If the primary metric is below threshold and the weakest diagnostic shows no improvement trend across Weeks 6-8, kill the project. Reallocate the team to the next growth bet (template gallery with compounding SEO dynamics).",
    zone: "red" as const,
  },
];

const resources = [
  {
    category: "Headcount",
    items: [
      { role: "Full-Stack Growth Engineer", allocation: "1.0 FTE (dedicated)", purpose: "Owns the Checker and Audit end-to-end. Frontend, API integrations, onboarding bridge, funnel instrumentation." },
      { role: "Product Designer", allocation: "0.5 FTE (shared)", purpose: "Audit report design and conversion UX. Shifts to iteration after the initial design sprint." },
      { role: "Content/Growth Marketer", allocation: "0.5 FTE (shared)", purpose: 'The Top 100 report, community seeding, Product Hunt launch, SEO landing pages.' },
    ],
  },
  {
    category: "Budget",
    items: [
      { role: "LinkedIn Paid Ads", allocation: "$5-8K / month", purpose: "Test budget targeting Content Director / VP Marketing titles. Scale or cut based on CPA." },
      { role: "Product Hunt Launch", allocation: "$2-3K (one-time)", purpose: 'Promotional assets and launch campaign.' },
    ],
  },
  {
    category: "Engineering",
    items: [
      { role: "AI Citation API Pipeline", allocation: "Critical dependency", purpose: "Real-time citation checking across ChatGPT, Perplexity, and Gemini. Results in under 10 seconds." },
      { role: "Pre-populated Onboarding Bridge", allocation: "Highest-leverage investment", purpose: "Pipes audit data into onboarding so trial users skip Steps 1-5." },
    ],
  },
];

const zoneStyles = {
  green: {
    bg: "bg-primary/5",
    border: "border-primary/30",
    text: "text-primary",
    activeBorder: "border-primary",
    detailBg: "bg-primary/5",
    detailBorder: "border-primary/20",
  },
  yellow: {
    bg: "bg-zone-trust-bg",
    border: "border-zone-trust/30",
    text: "text-zone-trust-text",
    activeBorder: "border-zone-trust",
    detailBg: "bg-zone-trust-bg",
    detailBorder: "border-zone-trust/30",
  },
  red: {
    bg: "bg-zone-tollbooth-bg",
    border: "border-zone-tollbooth/30",
    text: "text-zone-tollbooth-text",
    activeBorder: "border-zone-tollbooth",
    detailBg: "bg-zone-tollbooth-bg",
    detailBorder: "border-zone-tollbooth/30",
  },
};

export default function InvestmentDashboard() {
  const [activeThreshold, setActiveThreshold] = useState<"green" | "yellow" | "red">("green");
  const [showResources, setShowResources] = useState(false);
  const { ref: gaugeRef, isVisible: gaugeVisible } = useScrollReveal({ threshold: 0.3 });

  const active = thresholds.find((t) => t.key === activeThreshold)!;
  const styles = zoneStyles[activeThreshold];

  return (
    <div>
      {/* Primary Metric Callout */}
      <div className="mb-6 rounded-xl border border-border bg-surface-muted p-6 text-center shadow-card">
        <div className="mb-1.5 text-xs font-bold uppercase tracking-[0.1em] text-foreground/50">
          Primary Success Metric
        </div>
        <div className="mb-1 font-display text-[22px] tracking-[-0.02em] text-foreground">
          Activated Trial Users / Month
        </div>
        <div className="text-sm text-foreground/60">
          from the Checker to Audit to Trial channel
        </div>

        {/* Mini gauge with grow animation */}
        <div
          ref={gaugeRef}
          className="mx-auto mt-5 flex max-w-[500px] items-center gap-0 overflow-hidden rounded-lg"
        >
          <button
            onClick={() => setActiveThreshold("red")}
            className={`flex h-8 items-center justify-center text-[13px] font-semibold transition-all duration-500 ease-out ${
              activeThreshold === "red"
                ? "bg-zone-tollbooth-bg text-zone-tollbooth-text ring-2 ring-zone-tollbooth"
                : "bg-zone-tollbooth-bg/60 text-zone-tollbooth-text/70 hover:bg-zone-tollbooth-bg"
            }`}
            style={{
              flex: gaugeVisible ? 4 : 0,
              transitionDelay: "0ms",
              cursor: "pointer",
            }}
          >
            {gaugeVisible && <>&lt; 4</>}
          </button>
          <button
            onClick={() => setActiveThreshold("yellow")}
            className={`flex h-8 items-center justify-center text-[13px] font-semibold transition-all duration-500 ease-out ${
              activeThreshold === "yellow"
                ? "bg-zone-trust-bg text-zone-trust-text ring-2 ring-zone-trust"
                : "bg-zone-trust-bg/60 text-zone-trust-text/70 hover:bg-zone-trust-bg"
            }`}
            style={{
              flex: gaugeVisible ? 6 : 0,
              transitionDelay: "150ms",
              cursor: "pointer",
            }}
          >
            {gaugeVisible && <>4 – 9</>}
          </button>
          <button
            onClick={() => setActiveThreshold("green")}
            className={`flex h-8 items-center justify-center text-[13px] font-semibold transition-all duration-500 ease-out ${
              activeThreshold === "green"
                ? "bg-primary/15 text-accent-dark ring-2 ring-primary"
                : "bg-primary/10 text-accent-dark/70 hover:bg-primary/15"
            }`}
            style={{
              flex: gaugeVisible ? 10 : 0,
              transitionDelay: "300ms",
              cursor: "pointer",
            }}
          >
            {gaugeVisible && <>at least 10</>}
          </button>
        </div>
        <div className="mt-2 text-[11px] text-foreground/50">
          Click a zone to see the decision framework
        </div>
      </div>

      {/* Threshold Tabs */}
      <div className="mb-5 flex gap-2 max-md:flex-col">
        {thresholds.map((t) => {
          const s = zoneStyles[t.zone];
          const isActive = activeThreshold === t.key;
          return (
            <button
              key={t.key}
              onClick={() => setActiveThreshold(t.key as "green" | "yellow" | "red")}
              className={`flex flex-1 cursor-pointer flex-col items-center rounded-xl border px-4 py-3 text-center transition-all ${
                isActive ? `${s.bg} ${s.activeBorder} border-2` : "border-border bg-card hover:bg-surface-muted"
              }`}
            >
              <span className="mb-0.5 text-lg">{t.emoji}</span>
              <span className={`text-[13px] font-semibold ${isActive ? s.text : "text-foreground/50"}`}>
                {t.headline}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Threshold Detail */}
      <div
        key={active.key}
        className={`mb-6 animate-fade-in rounded-xl border p-6 ${styles.detailBg} ${styles.detailBorder}`}
      >
        <div className="mb-4">
          <div className={`mb-1 text-[13px] font-semibold ${styles.text}`}>
            {active.emoji} {active.label} - {active.primary}
          </div>
          <div className="text-xs text-foreground/60">{active.timeframe}</div>
        </div>

        <p className="mb-4 text-sm leading-[1.7] text-foreground/80">{active.description}</p>

        {/* Diagnostics */}
        <div className="mb-2 text-xs font-bold uppercase tracking-[0.05em] text-foreground/50">
          Diagnostic Indicators
        </div>
        <div className="mb-4 flex flex-col gap-1.5">
          {active.diagnostics.map((d, i) => (
            <div
              key={i}
              className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-foreground/[0.06] bg-card/60 px-3.5 py-2.5"
            >
              <div className="flex items-center gap-3">
                <span className="min-w-[130px] text-sm font-semibold text-foreground">{d.metric}</span>
                <span className={`font-mono text-sm font-bold ${styles.text}`}>{d.target}</span>
              </div>
              <span className="text-[13px] text-foreground/60">{d.meaning}</span>
            </div>
          ))}
        </div>

        {/* Decision */}
        <div className={`rounded-lg border p-3.5 ${styles.detailBorder} bg-card/70`}>
          <div className={`mb-1 text-xs font-bold uppercase tracking-[0.05em] ${styles.text}`}>Decision</div>
          <p className="text-sm leading-[1.7] text-foreground/80">{active.action}</p>
        </div>
      </div>

      {/* Resource Request */}
      <div
        className={`cursor-pointer rounded-xl border p-5 transition-all ${
          activeThreshold === "green"
            ? "border-primary/20 bg-primary/[0.03] hover:bg-primary/[0.06]"
            : "border-border bg-surface-muted hover:bg-muted"
        }`}
        onClick={() => setShowResources(!showResources)}
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="text-base font-bold text-foreground">🟢 If Green Light: Resource Request</div>
            <div className="mt-0.5 text-[13px] text-foreground/60">
              About 2 FTEs + $8-11K/month, targeting 10+ activated users/month, break-even in 3-4 months
            </div>
          </div>
          <div
            className="text-xl text-foreground/30 transition-transform"
            style={{ transform: showResources ? "rotate(180deg)" : "rotate(0)" }}
          >
            ▾
          </div>
        </div>

        {showResources && (
          <div className="mt-5 animate-fade-in" onClick={(e) => e.stopPropagation()}>
            {resources.map((cat) => (
              <div key={cat.category} className="mb-5">
                <div className="mb-2 border-b border-primary/20 pb-1.5 text-xs font-bold uppercase tracking-[0.05em] text-primary">
                  {cat.category}
                </div>
                <div className="flex flex-col gap-2">
                  {cat.items.map((item) => (
                    <div key={item.role} className="rounded-lg border border-primary/10 bg-card/80 p-3">
                      <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
                        <span className="text-sm font-semibold text-foreground">{item.role}</span>
                        <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-accent-dark">
                          {item.allocation}
                        </span>
                      </div>
                      <div className="text-[13px] leading-[1.7] text-foreground/60">{item.purpose}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* ROI Summary */}
            <div className="mt-3 rounded-lg bg-gradient-to-br from-accent-dark to-foreground p-4 text-primary-foreground">
              <div className="mb-2 text-sm font-bold">Expected ROI</div>
              <div className="text-[13px] leading-[1.7] opacity-90">
                1,000 Checker users/mo leads to 200 Audits, 24 trials, 10 activated users. At mid-market contract values, that's a good return from a ~$10K/month channel, and it gets better over time as organic traffic grows. Break-even in 3-4 months.
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
