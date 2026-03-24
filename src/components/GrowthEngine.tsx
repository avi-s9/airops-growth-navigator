import CitationChecker from "./CitationChecker";

const SectionHeader = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mb-6 font-display text-[28px] text-foreground">{children}</h2>
);

/* ─── 2A: Growth Loop Diagram ─── */
function GrowthLoop() {
  const stages = [
    { label: "Free Tool: AI Citation Checker", tag: "Zero friction, ungated", color: "primary" },
    { label: "Gated: Full Domain Audit", tag: "Email capture", color: "zone-trust" },
    { label: "Pre-populated AirOps Trial", tag: "Data carries over", color: "accent-dark" },
    { label: "Aha Moment", tag: "Accelerated activation", color: "primary" },
  ];

  return (
    <div className="mb-10">
      {/* Flow diagram */}
      <div className="mb-8 flex items-center justify-between gap-2 overflow-x-auto rounded-xl border border-border bg-card p-6 shadow-card">
        {stages.map((s, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="flex min-w-[160px] flex-col items-center text-center">
              <div className="mb-2 rounded-lg border border-border bg-surface-muted px-4 py-3 text-sm font-semibold text-foreground">
                {s.label}
              </div>
              <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-foreground/50">
                Stage {i + 1}: {s.tag}
              </span>
            </div>
            {i < stages.length - 1 && (
              <div className="flex-shrink-0 text-lg text-foreground/30">→</div>
            )}
          </div>
        ))}
      </div>

      {/* Two concept cards */}
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-6 shadow-card">
          <div className="mb-3 text-3xl">🔍</div>
          <div className="mb-1 text-xs font-bold uppercase tracking-[0.15em] text-primary">
            Stage 1: The Hook
          </div>
          <h3 className="mb-3 text-base font-semibold text-foreground">AI Citation Checker</h3>
          <p className="mb-4 text-sm leading-relaxed text-foreground/70">
            A single-page tool where anyone can paste a URL and instantly see whether that page is
            being cited by AI search platforms — ChatGPT, Perplexity, Gemini — and for which
            prompts. No signup required. Output is a simple, shareable scorecard.
          </p>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-accent-dark">
            Zero friction · Instant value · Highly shareable
          </span>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 shadow-card">
          <div className="mb-3 text-3xl">📊</div>
          <div className="mb-1 text-xs font-bold uppercase tracking-[0.15em] text-primary">
            Stage 2: The Conversion
          </div>
          <h3 className="mb-3 text-base font-semibold text-foreground">Full AI Visibility Audit</h3>
          <p className="mb-4 text-sm leading-relaxed text-foreground/70">
            After checking a page, the user is prompted to see their full domain audit. They enter
            their domain and email, and receive a branded report comparing their site-wide AI
            citation rates against competitors. The report is designed to be shared with leadership
            or posted on LinkedIn.
          </p>
          <span className="rounded-full bg-zone-trust-bg px-3 py-1 text-xs font-semibold text-zone-trust-text">
            Email-gated · Shareable report · Trial on-ramp
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─── 2B: Prototype ─── */
function PrototypeSection() {
  return (
    <div className="mb-10">
      <SectionHeader>Try It</SectionHeader>
      <p className="mb-6 text-sm leading-relaxed text-foreground/80">
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
    </div>
  );
}

/* ─── 2C: Target Audience ─── */
function TargetAudience() {
  return (
    <div className="mb-10">
      <SectionHeader>Who This Targets</SectionHeader>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-6 shadow-card">
          <div className="mb-1 text-xs font-bold uppercase tracking-[0.15em] text-primary">
            Primary
          </div>
          <h3 className="mb-3 text-base font-semibold text-foreground">
            Content/SEO Leads at Mid-Market & Enterprise
          </h3>
          <p className="text-sm leading-relaxed text-foreground/70">
            The people who own organic traffic and are starting to hear from their CMO: "What's our
            AI search strategy?" They're under pressure to answer a question they don't yet have
            tools for. The Citation Checker gives them a concrete data point. The Audit gives them
            the ammo to go to leadership and say: "Here's where we stand, here's the gap, and
            here's a platform that can close it."
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-6 shadow-card">
          <div className="mb-1 text-xs font-bold uppercase tracking-[0.15em] text-foreground/50">
            Secondary
          </div>
          <h3 className="mb-3 text-base font-semibold text-foreground">
            Agency Leads & Consultants
          </h3>
          <p className="text-sm leading-relaxed text-foreground/70">
            People who manage content strategy for multiple clients. The Checker becomes a
            prospecting tool — run it on a client's site, share the results, and use it to justify
            an AirOps-powered engagement.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── 2D: Distribution ─── */
const channels = [
  {
    icon: "🌱",
    title: "Organic / SEO",
    desc: "Landing pages targeting 'AI search visibility checker,' 'is my site in ChatGPT,' 'AEO audit tool' — emerging high-intent queries with low competition. Publish the methodology as thought leadership content.",
    tag: "Compounding · Medium-term",
  },
  {
    icon: "📣",
    title: "Social / Community",
    desc: "Product Hunt launch of the Checker as a free tool. Seed in content leader communities: Superpath, SEO Twitter/X, LinkedIn groups. Create a 'Top 100 SaaS AI Visibility' report tagging companies to encourage checking their own scores.",
    tag: "Viral · Short-term",
  },
  {
    icon: "🎯",
    title: "Paid",
    desc: "LinkedIn ads targeting Content/SEO Director titles at mid-market companies, driving to the Checker (not AirOps directly). Retarget Checker users who didn't convert to Audit with 'See your full report' ads.",
    tag: "Targeted · Test-and-learn",
  },
  {
    icon: "🤝",
    title: "Partner / Integration",
    desc: "Offer the Checker as an embeddable widget for SEO tool review sites, marketing blogs, and agency partners. Every embed is a distribution point.",
    tag: "Scalable · Long-term",
  },
];

function Distribution() {
  return (
    <div className="mb-10">
      <SectionHeader>Distribution Plan</SectionHeader>
      <div className="grid gap-4 sm:grid-cols-2">
        {channels.map((ch) => (
          <div key={ch.title} className="rounded-xl border border-border bg-card p-5 shadow-card">
            <div className="mb-2 text-2xl">{ch.icon}</div>
            <h3 className="mb-2 text-sm font-semibold text-foreground">{ch.title}</h3>
            <p className="mb-3 text-[13px] leading-relaxed text-foreground/70">{ch.desc}</p>
            <span className="rounded-full bg-surface-muted px-2.5 py-1 text-[11px] font-semibold text-foreground/50">
              {ch.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── 2E: Sequencing Timeline ─── */
const phases = [
  {
    weeks: "Weeks 1–2",
    title: "Build & Soft-Launch",
    items: [
      "Vibecode Checker MVP",
      "Soft-launch to existing customers for feedback",
      "Instrument full funnel",
    ],
  },
  {
    weeks: "Weeks 3–4",
    title: "Audit + Funnel Connection",
    items: [
      "Build email-gated domain audit report",
      "Connect audit data → AirOps onboarding (pre-populate)",
      "Design shareable report format (unique URL, OG tags, PDF export)",
    ],
  },
  {
    weeks: "Weeks 5–6",
    title: "Public Launch",
    items: [
      "Product Hunt launch",
      '"Top 100" LinkedIn report',
      "Community seeding + sales enablement",
      "LinkedIn paid targeting activated",
    ],
  },
  {
    weeks: "Weeks 7–8",
    title: "Optimize",
    items: [
      "Analyze funnel conversion per stage",
      "A/B test Checker → Audit gate timing",
      "Iterate on report design based on share rate data",
    ],
  },
];

function Sequencing() {
  return (
    <div className="mb-10">
      <SectionHeader>Sequence of Moves</SectionHeader>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {phases.map((phase, i) => (
          <div key={i} className="relative rounded-xl border border-border bg-card p-5 shadow-card">
            <div className="mb-1 font-mono text-xs font-semibold text-primary">{phase.weeks}</div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">{phase.title}</h3>
            <ul className="flex flex-col gap-1.5">
              {phase.items.map((item, j) => (
                <li key={j} className="flex items-start gap-2 text-[13px] leading-relaxed text-foreground/70">
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
    </div>
  );
}

/* ─── 2F: Prioritization ─── */
function Prioritization() {
  return (
    <div>
      <SectionHeader>Prioritization</SectionHeader>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-xl border-l-4 border-l-primary border-t border-r border-b border-border bg-card p-6 shadow-card">
          <h3 className="mb-1 text-xs font-bold uppercase tracking-[0.15em] text-primary">
            Test First (Weeks 1–4)
          </h3>
          <ul className="mt-3 flex flex-col gap-2.5">
            {[
              "Does the Checker output feel compelling enough that people proceed to an Audit?",
              "What's the optimal gate timing: after 1 check vs. 3 checks vs. ungated audit?",
              "Does the pre-populated onboarding path improve activation vs. cold signups?",
            ].map((q, i) => (
              <li key={i} className="flex items-start gap-2 text-sm leading-relaxed text-foreground/70">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                {q}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border-l-4 border-l-border border-t border-r border-b border-border bg-card p-6 shadow-card">
          <h3 className="mb-1 text-xs font-bold uppercase tracking-[0.15em] text-foreground/40">
            Save for Later
          </h3>
          <ul className="mt-3 flex flex-col gap-2.5">
            {[
              "Embeddable widget version (needs partnership/BD effort)",
              "Automated weekly monitoring emails ("Your AI visibility changed this week")",
              "Agency/multi-domain features",
              "Competitive leaderboard by industry",
            ].map((q, i) => (
              <li key={i} className="flex items-start gap-2 text-sm leading-relaxed text-foreground/70">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground/20" />
                {q}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Export ─── */
export default function GrowthEngine() {
  return (
    <>
      <SectionHeader>The Growth Loop</SectionHeader>
      <GrowthLoop />
      <PrototypeSection />
      <TargetAudience />
      <Distribution />
      <Sequencing />
      <Prioritization />
    </>
  );
}
