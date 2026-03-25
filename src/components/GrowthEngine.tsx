import CitationChecker from "./CitationChecker";
import ScrollReveal from "./ScrollReveal";

const SectionHeader = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mb-6 font-display text-[28px] tracking-[-0.02em] text-foreground">{children}</h2>
);

/* ─── 2A: Growth Loop Diagram ─── */
function GrowthLoop() {
  const stages = [
    { label: "Free Tool: AI Citation Checker", tag: "No signup needed" },
    { label: "Gated: Full Domain Audit", tag: "Email gate" },
    { label: "Pre-populated AirOps Trial", tag: "Their audit data pre-fills the trial" },
    { label: "Aha Moment", tag: "Shorter path to aha" },
  ];

  return (
    <ScrollReveal className="mb-10">
      {/* Flow diagram */}
      <div className="mb-8 flex items-center justify-between gap-2 overflow-x-auto rounded-xl border border-border bg-card p-6 shadow-card">
        {stages.map((s, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="flex min-w-[160px] flex-col items-center text-center max-md:min-w-[130px]">
              <div className="mb-2 rounded-lg border border-border bg-surface-muted px-4 py-3 text-sm font-semibold text-foreground max-md:px-2 max-md:text-xs">
                {s.label}
              </div>
              <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-foreground/60">
                Stage {i + 1}: {s.tag}
              </span>
            </div>
            {i < stages.length - 1 && (
              <div className="flex-shrink-0 text-lg text-foreground/40">→</div>
            )}
          </div>
        ))}
      </div>

      {/* Two concept cards */}
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-6 shadow-card transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-card-hover">
          <div className="mb-3 text-3xl">🔍</div>
          <div className="mb-1 text-xs font-bold uppercase tracking-[0.15em] text-primary">
            Stage 1: The Hook
          </div>
          <h3 className="mb-3 text-base font-semibold text-foreground">AI Citation Checker</h3>
          <p className="mb-4 text-sm leading-[1.7] text-foreground/70">
            A single-page tool where anyone can paste a URL and instantly see whether that page is
            being cited by AI search platforms - ChatGPT, Perplexity, Gemini - and for which
            prompts. No signup required. Output is a simple, shareable scorecard.
          </p>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-accent-dark">
            Zero friction · Instant value · Highly shareable
          </span>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 shadow-card transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-card-hover">
          <div className="mb-3 text-3xl">📊</div>
          <div className="mb-1 text-xs font-bold uppercase tracking-[0.15em] text-primary">
            Stage 2: The Conversion
          </div>
          <h3 className="mb-3 text-base font-semibold text-foreground">Full AI Visibility Audit</h3>
          <p className="mb-4 text-sm leading-[1.7] text-foreground/70">
            After checking a page, the user is prompted to see their full domain audit. They enter their domain and email, and get back a branded report comparing their entire domain's AI citation rates against competitors - the kind of thing you'd forward to your CMO or post on LinkedIn.
          </p>
          <span className="rounded-full bg-zone-trust-bg px-3 py-1 text-xs font-semibold text-zone-trust-text">
            Email-gated · Shareable report · Trial on-ramp
          </span>
        </div>
      </div>
    </ScrollReveal>
  );
}

/* ─── 2B: Prototype ─── */
function PrototypeSection() {
  return (
    <ScrollReveal className="mb-10">
      <SectionHeader>Try It</SectionHeader>
      <p className="mb-6 text-sm leading-[1.7] text-foreground/80">
        This is a working prototype of the Citation Checker. Enter a URL to see how it works.
      </p>
      <div className="relative rounded-xl border-2 border-dashed border-primary/30 bg-card p-8 shadow-card">
        <span className="absolute left-4 top-4 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
          Prototype
        </span>
        <div className="pt-4">
          <CitationChecker />
        </div>
      </div>
    </ScrollReveal>
  );
}

/* ─── 2C: Target Audience ─── */
function FunnelMetrics() {
  return (
    <ScrollReveal className="mb-10">
      <SectionHeader>What We'd Track</SectionHeader>
      <div className="grid gap-3 sm:grid-cols-2">
        {[
          {
            stage: "Checker engagement",
            metric: "Checker to Audit conversion rate",
            target: "20%+",
            why: "Are people compelled enough by one page's results to see their full domain?",
          },
          {
            stage: "Audit conversion",
            metric: "Audit to Trial signup rate",
            target: "12%+",
            why: "Does the report create enough urgency to start using the product?",
          },
          {
            stage: "Activation",
            metric: "Trial to Aha rate (audit-sourced)",
            target: "Higher than organic signups",
            why: "Pre-populated onboarding should shorten time-to-value. If it doesn't, the bridge isn't working.",
          },
          {
            stage: "Virality",
            metric: "Audit share rate",
            target: "15%+",
            why: "Are reports getting forwarded internally or posted on LinkedIn? This is what makes the channel compound.",
          },
        ].map((item) => (
          <div
            key={item.stage}
            className="rounded-xl border border-border bg-card p-5 shadow-card"
          >
            <div className="mb-1 text-[11px] font-bold uppercase tracking-[0.1em] text-primary">
              {item.stage}
            </div>
            <div className="mb-1 text-sm font-semibold text-foreground">
              {item.metric}
            </div>
            <div className="mb-2 font-mono text-xs text-primary">
              Target: {item.target}
            </div>
            <p className="text-[13px] leading-[1.6] text-foreground/60">
              {item.why}
            </p>
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
}

function TargetAudience() {
  return (
    <ScrollReveal className="mb-10">
      <SectionHeader>Who This Targets</SectionHeader>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-6 shadow-card transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-card-hover">
          <div className="mb-1 text-xs font-bold uppercase tracking-[0.15em] text-primary">
            Primary
          </div>
          <h3 className="mb-3 text-base font-semibold text-foreground">
            Content/SEO Leads at Mid-Market & Enterprise
          </h3>
          <p className="text-sm leading-[1.7] text-foreground/70">
            Under pressure from their CMO to answer "What's our AI search strategy?" The Checker gives them a data point. The Audit gives them something concrete to show their boss.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-6 shadow-card transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-card-hover">
          <div className="mb-1 text-xs font-bold uppercase tracking-[0.15em] text-foreground/50">
            Secondary
          </div>
          <h3 className="mb-3 text-base font-semibold text-foreground">
            Agency Leads & Consultants
          </h3>
          <p className="text-sm leading-[1.7] text-foreground/70">
            The Checker becomes a prospecting tool. Run it on a client's site, share the results, pitch them on AirOps.
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}

/* ─── 2D: Distribution ─── */
const channels = [
  {
    icon: "🌱",
    title: "Organic / SEO",
    desc: "Target emerging queries like 'AI search visibility checker' and 'is my site in ChatGPT' - high intent, low competition.",
    tag: "Compounding · Medium-term",
  },
  {
    icon: "📣",
    title: "Social / Community",
    desc: "Product Hunt launch as a free tool. Seed in Superpath, SEO Twitter/X, LinkedIn groups. Publish a 'Top 100 SaaS AI Visibility' report tagging companies.",
    tag: "Viral · Short-term",
  },
  {
    icon: "🎯",
    title: "Paid",
    desc: "LinkedIn ads targeting Content/SEO Directors at mid-market companies, driving to the Checker. Retarget non-converters with 'See your full report.'",
    tag: "Targeted · Test-and-learn",
  },
  {
    icon: "🤝",
    title: "Partner / Integration",
    desc: "Offer the Checker as an embeddable widget for SEO blogs and agency partners. Every embed is a distribution point.",
    tag: "Scalable · Long-term",
  },
];

function Distribution() {
  return (
    <ScrollReveal className="mb-10">
      <SectionHeader>Distribution Plan</SectionHeader>
      <div className="grid gap-4 sm:grid-cols-2">
        {channels.map((ch) => (
          <div key={ch.title} className="rounded-xl border border-border bg-card p-5 shadow-card transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-card-hover">
            <div className="mb-2 text-2xl">{ch.icon}</div>
            <h3 className="mb-2 text-sm font-semibold text-foreground">{ch.title}</h3>
            <p className="mb-3 text-[13px] leading-[1.7] text-foreground/70">{ch.desc}</p>
            <span className="rounded-full bg-surface-muted px-2.5 py-1 text-[11px] font-semibold text-foreground/50">
              {ch.tag}
            </span>
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
}

/* ─── 2E: Sequencing Timeline ─── */
const phases = [
  {
    weeks: "Weeks 1-2",
    title: "Build & Soft-Launch",
    items: [
      "Vibecode Checker MVP",
      "Soft-launch to existing customers for feedback",
      "Instrument full funnel",
    ],
  },
  {
    weeks: "Weeks 3-4",
    title: "Audit + Funnel Connection",
    items: [
      "Build email-gated domain audit report",
      "Connect audit data to AirOps onboarding (pre-populate)",
      "Design shareable report format (unique URL, OG tags, PDF export)",
    ],
  },
  {
    weeks: "Weeks 5-6",
    title: "Public Launch",
    items: [
      "Product Hunt launch",
      '"Top 100" LinkedIn report',
      "Community seeding + sales enablement",
      "LinkedIn paid targeting activated",
    ],
  },
  {
    weeks: "Weeks 7-8",
    title: "Optimize",
    items: [
      "Analyze funnel conversion per stage",
      "A/B test Checker-to-Audit gate timing",
      "Iterate on report design based on share rate data",
    ],
  },
];

function Sequencing() {
  return (
    <ScrollReveal className="mb-10">
      <SectionHeader>Sequence of Moves</SectionHeader>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {phases.map((phase, i) => (
          <div key={i} className="relative rounded-xl border border-border bg-card p-5 shadow-card transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-card-hover">
            <div className="mb-1 font-mono text-xs font-semibold text-primary">{phase.weeks}</div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">{phase.title}</h3>
            <ul className="flex flex-col gap-1.5">
              {phase.items.map((item, j) => (
                <li key={j} className="flex items-start gap-2 text-[13px] leading-[1.7] text-foreground/70">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
            {i < phases.length - 1 && (
              <div className="absolute -right-3 top-1/2 z-10 hidden text-foreground/20 lg:block">→</div>
            )}
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
}

/* ─── 2F: Prioritization ─── */
function Prioritization() {
  return (
    <ScrollReveal>
      <SectionHeader>Prioritization</SectionHeader>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-xl border-l-4 border-l-primary border-t border-r border-b border-border bg-card p-6 shadow-card transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-card-hover">
          <h3 className="mb-1 text-xs font-bold uppercase tracking-[0.15em] text-primary">
            Test First (Weeks 1-4)
          </h3>
          <ul className="mt-3 flex flex-col gap-2.5">
            {[
              "Does the Checker output feel compelling enough that people proceed to an Audit?",
              "What's the optimal gate timing: after 1 check vs. 3 checks vs. ungated audit?",
              "Does the pre-populated onboarding path improve activation vs. cold signups?",
              "Can we generate audit reports fast enough to feel instant? If it takes more than 30 seconds, the conversion drops.",
            ].map((q, i) => (
              <li key={i} className="flex items-start gap-2 text-sm leading-[1.7] text-foreground/70">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                {q}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border-l-4 border-l-border border-t border-r border-b border-border bg-card p-6 shadow-card transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-card-hover">
          <h3 className="mb-1 text-xs font-bold uppercase tracking-[0.15em] text-foreground/40">
            Save for Later
          </h3>
          <ul className="mt-3 flex flex-col gap-2.5">
            {[
              "Embeddable widget version (needs partnership/BD effort)",
              'Automated weekly monitoring emails ("Your AI visibility changed this week")',
              "Agency/multi-domain features",
              "Competitive leaderboard by industry",
            ].map((q, i) => (
              <li key={i} className="flex items-start gap-2 text-sm leading-[1.7] text-foreground/70">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground/20" />
                {q}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ScrollReveal>
  );
}

/* ─── 2G: Risks ─── */
function Risks() {
  return (
    <ScrollReveal className="mt-10">
      <SectionHeader>Risks</SectionHeader>
      <div className="grid gap-3 sm:grid-cols-2">
        {[
          {
            risk: "Data quality",
            detail: "If citation results feel inaccurate (like the 0% Benchmark problem), the Checker undermines itself. We'd soft-launch in verticals where we have strong coverage first.",
          },
          {
            risk: "Lead quality mismatch",
            detail: "The Checker might attract curious marketers who'll never buy. If Audit-to-Trial stays below 5%, the audience isn't right.",
          },
          {
            risk: "Report, not product",
            detail: "People might love the audit but see no reason to use AirOps. The pre-populated trial bridge is designed to prevent this, but it's an assumption to test.",
          },
          {
            risk: "Shareability weaker than expected",
            detail: "If share rate stays below 5%, growth depends entirely on paid. That changes the unit economics and might kill the concept.",
          },
        ].map((item) => (
          <div
            key={item.risk}
            className="rounded-xl border border-border bg-card p-5 shadow-card"
          >
            <div className="mb-1 text-sm font-semibold text-foreground">
              {item.risk}
            </div>
            <p className="text-[13px] leading-[1.6] text-foreground/60">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
}

/* ─── Main Export ─── */
export default function GrowthEngine() {
  return (
    <>
      <p className="mb-8 text-sm leading-[1.7] text-foreground/60 italic border-l-2 border-primary/30 pl-4">
        Assuming the activation fixes from Part 1 are live and working, here's how I'd drive more users into the top of the funnel.
      </p>
      <SectionHeader>The Growth Loop</SectionHeader>
      <GrowthLoop />
      <PrototypeSection />
      <FunnelMetrics />
      <TargetAudience />
      <Distribution />
      <Sequencing />
      <Prioritization />
      <Risks />
    </>
  );
}
