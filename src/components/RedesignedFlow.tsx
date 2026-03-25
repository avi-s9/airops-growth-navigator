import { useState } from "react";

type View = "current" | "proposed";

const currentSteps = [
  { name: "Create Workspace", zone: "green" },
  { name: "Personalize", zone: "green" },
  { name: "Competitors", zone: "trust" },
  { name: "Target Prompts", zone: "trust" },
  { name: "Benchmark", zone: "trust" },
  { name: "Free Trial CTA", zone: "tollbooth" },
  { name: "Review Trial", zone: "tollbooth" },
  { name: "See Opportunities", zone: "tollbooth" },
  { name: "Review Brand Kit", zone: "green" },
  { name: "Completed", zone: "green" },
  { name: "View Grid", zone: "lastmile" },
  { name: "App Execute / Aha", zone: "lastmile" },
];

const proposedSteps = [
  { name: "Create + Personalize", zone: "green", note: "Combined" },
  { name: "Competitors + Micro-Insight", zone: "new", note: "Micro-insight value moment" },
  { name: "Target Prompts", zone: "green", note: null },
  { name: "Benchmark (reframed)", zone: "new", note: "Lead with opportunity count" },
  { name: "Brand Kit Review", zone: "new", note: "Trial auto-started in background. Article generation kicks off here - riskiest assumption is whether it finishes before the user reaches the Grid" },
  { name: "Grid", zone: "new", note: "Content already generated for Row 1 (if generation was fast enough)" },
  { name: "Review Content = AHA", zone: "aha", note: "Clear CTA: Publish or Generate next" },
];

const zoneColor: Record<string, { bg: string; border: string; text: string }> = {
  green: { bg: "bg-emerald-50", border: "border-emerald-300", text: "text-emerald-800" },
  trust: { bg: "bg-zone-trust-bg", border: "border-zone-trust", text: "text-zone-trust-text" },
  tollbooth: { bg: "bg-zone-tollbooth-bg", border: "border-zone-tollbooth", text: "text-zone-tollbooth-text" },
  lastmile: { bg: "bg-zone-lastmile-bg", border: "border-zone-lastmile", text: "text-zone-lastmile-text" },
  new: { bg: "bg-emerald-50", border: "border-primary", text: "text-accent-dark" },
  aha: { bg: "bg-emerald-100", border: "border-primary", text: "text-accent-dark" },
};

export default function RedesignedFlow() {
  const [view, setView] = useState<View>("current");

  return (
    <div>
      <p className="mb-6 text-sm leading-relaxed text-foreground/80">
        Core principle: <strong>Front-load a value moment, compress the tail, and auto-deliver the aha.</strong>
      </p>

      {/* Toggle */}
      <div className="mb-8 flex gap-2">
        {(["current", "proposed"] as View[]).map((v) => (
          <button
            key={v}
            onClick={() => setView(v)}
            className={`rounded-full border px-5 py-2 text-sm font-medium transition-all ${
              view === v
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-text-secondary hover:text-foreground"
            }`}
          >
            {v === "current" ? "Current Flow (12 steps)" : "Proposed Flow (7 steps)"}
          </button>
        ))}
      </div>

      {/* Flow visualization */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-card">
        {view === "current" ? (
          <>
            <div className="mb-4 font-mono text-xs text-text-secondary">
              12 steps · 3h 35m avg · 41.3% activation
            </div>
            <div className="flex flex-wrap gap-2">
              {currentSteps.map((s, i) => {
                const z = zoneColor[s.zone];
                return (
                  <div key={i} className="flex items-center gap-2">
                    <div className={`rounded-lg border px-3 py-2 text-xs font-medium ${z.bg} ${z.border} ${z.text}`}>
                      <span className="mr-1.5 font-mono text-[10px] opacity-60">{i + 1}</span>
                      {s.name}
                    </div>
                    {i < currentSteps.length - 1 && (
                      <span className="text-text-secondary">→</span>
                    )}
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <>
            <div className="mb-4 font-mono text-xs text-primary">
              7 steps · Value shown at Step 2 · Auto-delivered aha · Target: 55%+ activation
            </div>
            <div className="flex flex-col gap-3">
              {proposedSteps.map((s, i) => {
                const z = zoneColor[s.zone];
                return (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary font-mono text-xs font-bold text-primary-foreground">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <div className={`inline-block rounded-lg border px-3 py-2 text-sm font-medium ${z.bg} ${z.border} ${z.text}`}>
                        {s.name}
                      </div>
                      {s.note && (
                        <div className="mt-1 text-xs italic text-primary">{s.note}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
