import ScrollReveal from "./ScrollReveal";

type Zone = "trust" | "tollbooth" | "lastmile";

const blockers = [
  {
    num: 1,
    title: "The Benchmark credibility gap",
    zone: "trust" as Zone,
    zoneLabel: "Trust Erosion",
    step: "Step 5 — 11.3% drop, 46s",
    text: "When the AI Search Report Card returns 0% mention rate and 0% citation rate for both the user and all competitors, the headline 'Your competitors are outperforming you in AI Search' feels inaccurate. Users invested 4 steps of effort — the Benchmark is supposed to be the first payoff. When the data is empty or flat, it doesn't create urgency; it creates doubt about whether the platform actually works.",
  },
  {
    num: 2,
    title: "Value is backloaded — 5 steps of input before any return",
    zone: "trust" as Zone,
    zoneLabel: "Trust Erosion",
    step: "Steps 1–5",
    text: "The first five steps collect workspace info, personalization, competitors, and target prompts — all from the user. The first time the product shows value back is the Benchmark (Step 5), and it can underdeliver. Users who are less bought-in (came from an ad vs. a referral) are disproportionately dropping in Steps 3–5 because they haven't seen enough value to justify the investment being asked of them.",
  },
  {
    num: 3,
    title: "Unnecessary tollbooths that add friction without value",
    zone: "tollbooth" as Zone,
    zoneLabel: "Unnecessary Tollbooths",
    step: "Steps 6 and 8",
    text: "Step 6 asks users to click a CTA to 'Start Free Trial' — but why isn't the trial auto-started? This creates hesitation ('Will I be charged?') without adding value. Step 8 forces a premature choice between Content Creation and Content Refresh. Users lack context to decide, and the binary framing creates commitment anxiety.",
  },
  {
    num: 4,
    title: "Last-mile execution cliff",
    zone: "lastmile" as Zone,
    zoneLabel: "Last-Mile Cliff",
    step: "Steps 11→12 — 28% drop, 65s",
    text: "The single biggest drop in the funnel. Users arrive at the Actions Grid after 10 onboarding steps, see 13 rows of keywords, and need to click through a 4–5 step sequential workflow (brief → analysis → article → internal links → external links), each requiring a click and an AI processing wait. 28% of users who completed the entire onboarding never see a piece of generated content.",
  },
  {
    num: 5,
    title: "No clear 'what's next' after the aha moment",
    zone: "lastmile" as Zone,
    zoneLabel: "Last-Mile Cliff",
    step: "Step 12+",
    text: "Even among the 41% who reach the aha moment and see a generated article, the experience ends ambiguously. There's no 'publish this,' no 'generate your next article,' no clear next step. The onboarding guides users to the aha moment but not through it — hurting early retention even among activated users.",
  },
];

const zoneStyles: Record<Zone, { bar: string; barHover: string; pill: string; pillText: string }> = {
  trust: { bar: "bg-zone-trust", barHover: "group-hover:w-2.5", pill: "bg-zone-trust-bg border-zone-trust text-zone-trust-text", pillText: "text-zone-trust-text" },
  tollbooth: { bar: "bg-zone-tollbooth", barHover: "group-hover:w-2.5", pill: "bg-zone-tollbooth-bg border-zone-tollbooth text-zone-tollbooth-text", pillText: "text-zone-tollbooth-text" },
  lastmile: { bar: "bg-zone-lastmile", barHover: "group-hover:w-2.5", pill: "bg-zone-lastmile-bg border-zone-lastmile text-zone-lastmile-text", pillText: "text-zone-lastmile-text" },
};

export default function BlockerCards() {
  return (
    <div className="flex flex-col gap-4">
      {blockers.map((b, i) => {
        const s = zoneStyles[b.zone];
        return (
          <ScrollReveal key={b.num} delay={i * 60}>
            <div className="group flex cursor-default overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-card-hover">
              <div className={`w-1.5 flex-shrink-0 transition-all duration-200 ${s.bar} ${s.barHover}`} />
              <div className="flex-1 p-5">
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <span className="text-base font-bold text-foreground">
                    {b.num}. {b.title}
                  </span>
                  <span className={`rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${s.pill}`}>
                    {b.zoneLabel}
                  </span>
                </div>
                <div className="mb-2 font-mono text-xs text-text-secondary">{b.step}</div>
                <p className="text-sm leading-[1.7] text-foreground/80">{b.text}</p>
              </div>
            </div>
          </ScrollReveal>
        );
      })}
    </div>
  );
}
