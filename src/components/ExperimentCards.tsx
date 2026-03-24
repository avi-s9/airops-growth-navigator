import { useState } from "react";

const experiments = [
  {
    id: "A",
    title: "Auto-Execute First Workflow",
    color: "#8B5CF6",
    bgColor: "bg-zone-lastmile-bg",
    borderColor: "border-zone-lastmile",
    targetZone: "Last-Mile Cliff",
    hypothesis:
      'If we auto-trigger content generation for the highest-priority keyword during onboarding (while the user reviews Brand Kit), users will arrive at the Grid with content already generated — reducing the Step 11→12 drop from 28% to under 15%.',
    rationale:
      "The 28% drop hits users who already completed 10 onboarding steps — these are high-intent users. They didn't quit during harder setup phases; they quit at the moment of activation. That pattern strongly indicates the barrier is friction (too many clicks, sequential wait times, unclear next action), not motivation. When drop-off is friction-driven, removing the friction typically recaptures a large share of lost users. We wouldn't expect to recapture all 28% — some will bounce if the generated content doesn't meet quality expectations. But cutting a friction-driven drop roughly in half is a well-supported baseline.",
    changes: [
      "After Brand Kit confirmation (Step 10), system auto-runs full content creation workflow for Row 1",
      "User sees progress indicator on Grid when they land — content is generating or already complete",
      'No manual "Run Workflow" clicks needed for the first piece of content',
      'Clear post-aha CTA: "Publish this article" or "Generate your next one"',
    ],
    metrics: {
      primary: { name: "Grid-to-Execute conversion rate", current: "72%", target: "85%+" },
      secondary: [
        "Time from Grid view to first content viewed",
        "Overall onboarding completion rate",
      ],
    },
    impact: "~13 percentage point lift in Grid-to-Execute conversion → ~25 additional users reaching the aha moment per cohort of 337 (from 139 to ~164)",
    measurement: "A/B test — 50/50 split between current flow (manual execution) and auto-execution. Run 2–3 weeks to reach n≥300 per variant. Track with existing funnel instrumentation.",
  },
  {
    id: "B",
    title: "Post-Competitor Micro-Insight",
    color: "#F59E0B",
    bgColor: "bg-zone-trust-bg",
    borderColor: "border-zone-trust",
    targetZone: "Trust Erosion",
    hypothesis:
      'If we show users a single personalized competitive insight immediately after the Competitors step (e.g., "Farfetch is cited for 3 prompts where you\'re invisible"), mid-funnel completion from Step 3 to Step 10 will improve by 9–15%.',
    rationale:
      "Mid-funnel attrition (Steps 3→10) is distributed across multiple steps with different causes — Benchmark credibility, trial CTA friction, forced Creation/Refresh choice. A micro-insight after Step 3 doesn't fix all of those, so the expectation is bounded. What it does address is the motivation curve: currently users give input for 5 consecutive steps before the product gives anything back. Behavioral design research (Fogg's Behavior Model, the endowed progress effect) consistently shows that early signals of personalized value increase completion in multi-step flows. The lower bound (9%) assumes the insight feels interesting but not urgent; the upper bound (15%) assumes it creates genuine pull through subsequent steps.",
    changes: [
      "After confirming competitors (Step 3), a brief interstitial (3–5 seconds) appears",
      "Shows one specific data point: a prompt where a competitor is cited and the user is not",
      'Framed as: "Here\'s one thing we already found"',
      "User then continues to Target Prompts as normal",
    ],
    metrics: {
      primary: { name: "Step 3 → Step 10 completion rate", current: "~63%", target: "~72%" },
      secondary: [
        "Time on Target Prompts step (expect slight increase — more engagement)",
        "Benchmark step drop-off (expect decrease — users have context)",
      ],
    },
    impact: "9–15 percentage point improvement in mid-funnel completion → ~30–50 additional users reaching the Grid per cohort of 337",
    measurement: "A/B test — 50/50 split. Control: current Competitors → Target Prompts. Variant: micro-insight interstitial. Run 3 weeks minimum for statistical significance.",
  },
];

export default function ExperimentCards() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-4">
      {experiments.map((exp) => {
        const isExpanded = expanded === exp.id;
        return (
          <div
            key={exp.id}
            className="overflow-hidden rounded-xl border bg-card transition-shadow"
            style={{
              borderColor: isExpanded ? exp.color : "#E5E7EB",
              boxShadow: isExpanded ? "0 4px 20px rgba(0,0,0,0.08)" : "0 1px 3px rgba(0,0,0,0.04)",
            }}
          >
            {/* Header */}
            <div
              className="cursor-pointer p-5 transition-colors"
              style={{ backgroundColor: isExpanded ? `${exp.color}10` : "white" }}
              onClick={() => setExpanded(isExpanded ? null : exp.id)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-2.5">
                    <span
                      className="flex h-7 w-7 items-center justify-center rounded-full text-sm font-bold text-primary-foreground"
                      style={{ backgroundColor: exp.color }}
                    >
                      {exp.id}
                    </span>
                    <h3 className="text-lg font-bold text-foreground">{exp.title}</h3>
                    <span
                      className="rounded-full border px-2.5 py-0.5 text-[11px] font-semibold"
                      style={{ color: exp.color, backgroundColor: `${exp.color}15`, borderColor: `${exp.color}40` }}
                    >
                      Targets: {exp.targetZone}
                    </span>
                  </div>
                  <div className="flex gap-6">
                    {[
                      { label: "PRIMARY METRIC", value: exp.metrics.primary.name, color: "#1A1A1A" },
                      { label: "CURRENT", value: exp.metrics.primary.current, color: "#DC2626" },
                      { label: "TARGET", value: exp.metrics.primary.target, color: "#059669" },
                    ].map((m) => (
                      <div key={m.label}>
                        <div className="text-[11px] font-semibold uppercase tracking-wider text-text-secondary">{m.label}</div>
                        <div className="text-sm font-medium" style={{ color: m.color }}>{m.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <span
                  className="mt-1 text-xl text-text-secondary transition-transform"
                  style={{ transform: isExpanded ? "rotate(180deg)" : "rotate(0)" }}
                >
                  ▾
                </span>
              </div>
            </div>

            {/* Expanded */}
            {isExpanded && (
              <div className="animate-fade-in px-5 pb-5">
                {/* Hypothesis */}
                <div className="mb-4">
                  <div className="mb-1.5 text-xs font-bold uppercase tracking-wider text-text-secondary">Hypothesis</div>
                  <p
                    className="rounded-lg border-l-[3px] p-3.5 text-sm leading-relaxed text-foreground/80"
                    style={{ borderLeftColor: exp.color, backgroundColor: "#F9FAFB" }}
                  >
                    {exp.hypothesis}
                  </p>
                </div>

                {/* Why this target */}
                <div className="mb-4">
                  <div className="mb-1.5 text-xs font-bold uppercase tracking-wider text-text-secondary">Why this target</div>
                  <p className="text-sm leading-relaxed text-foreground/70">{exp.rationale}</p>
                </div>

                {/* Changes */}
                <div className="mb-4">
                  <div className="mb-1.5 text-xs font-bold uppercase tracking-wider text-text-secondary">What changes</div>
                  <div className="flex flex-col gap-1.5">
                    {exp.changes.map((c, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-foreground/70">
                        <span className="mt-0.5 flex-shrink-0 text-xs font-bold" style={{ color: exp.color }}>→</span>
                        {c}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Secondary metrics */}
                <div className="mb-4">
                  <div className="mb-1.5 text-xs font-bold uppercase tracking-wider text-text-secondary">Secondary Metrics</div>
                  <div className="flex flex-col gap-1">
                    {exp.metrics.secondary.map((m, i) => (
                      <div key={i} className="border-l-2 border-border pl-3 text-[13px] text-text-secondary">{m}</div>
                    ))}
                  </div>
                </div>

                {/* Impact + Measurement */}
                <div className="grid grid-cols-2 gap-3">
                  <div
                    className="rounded-lg border p-3.5"
                    style={{ backgroundColor: `${exp.color}10`, borderColor: `${exp.color}30` }}
                  >
                    <div className="mb-1 text-[11px] font-bold uppercase tracking-wider" style={{ color: exp.color }}>
                      Expected Impact
                    </div>
                    <div className="text-[13px] leading-snug text-foreground/80">{exp.impact}</div>
                  </div>
                  <div className="rounded-lg border border-border bg-surface-muted p-3.5">
                    <div className="mb-1 text-[11px] font-bold uppercase tracking-wider text-text-secondary">
                      Measurement
                    </div>
                    <div className="text-[13px] leading-snug text-foreground/80">{exp.measurement}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
