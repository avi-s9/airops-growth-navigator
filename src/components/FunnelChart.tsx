import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const funnelData = [
  { step: 1, name: "Create Workspace", users: 337, pct: 100, dropoff: 0, dropoffPct: 0, time: "3s", zone: null, hypothesis: null },
  { step: 2, name: "Personalize Workspace", users: 337, pct: 100, dropoff: 0, dropoffPct: 0, time: "3s", zone: null, hypothesis: null },
  { step: 3, name: "Competitors", users: 306, pct: 90.8, dropoff: 31, dropoffPct: 9.2, time: "12s", zone: "trust" as const, hypothesis: "Auto-detected competitors can be inaccurate. In my test, the list included MatchesFashion, which went bankrupt two years ago and isn't even online. That kind of error makes you question everything else the platform tells you." },
  { step: 4, name: "Target Prompts", users: 292, pct: 86.7, dropoff: 14, dropoffPct: 4.6, time: "23s", zone: "trust" as const, hypothesis: "25 rows of prompts feels overwhelming to review. Users who aren't yet bought in don't want to invest the effort." },
  { step: 5, name: "Benchmark", users: 259, pct: 76.9, dropoff: 33, dropoffPct: 11.3, time: "46s", zone: "trust" as const, hypothesis: "When all scores are 0%, the report card undermines credibility instead of building urgency. Users waited 46s for a result that confused them." },
  { step: 6, name: "Free Trial", users: 248, pct: 73.6, dropoff: 11, dropoffPct: 4.3, time: "12s", zone: "tollbooth" as const, hypothesis: 'Unnecessary gate - users already signed up. The CTA creates hesitation ("Will I be charged?") without adding value.' },
  { step: 7, name: "Review Free Trial", users: 236, pct: 70.0, dropoff: 12, dropoffPct: 4.8, time: "4s", zone: "tollbooth" as const, hypothesis: "This could be a banner. It's a full screen with no decision and no new information." },
  { step: 8, name: "See Opportunities", users: 214, pct: 63.5, dropoff: 22, dropoffPct: 9.3, time: "5s", zone: "tollbooth" as const, hypothesis: "Forces a premature choice between Content Creation and Content Refresh. Users lack context to decide and feel commitment anxiety." },
  { step: 9, name: "Review Brand Kit", users: 209, pct: 62.0, dropoff: 5, dropoffPct: 2.3, time: "10s", zone: null, hypothesis: null },
  { step: 10, name: "Completed", users: 193, pct: 57.3, dropoff: 16, dropoffPct: 7.7, time: "18s", zone: null, hypothesis: "There's a lot of auto-generated text to review here - About, Voice, Writing Sample, Rules. The quality is solid, but it's a wall of content when you're 9 steps deep." },
  { step: 11, name: "Viewed Grid", users: 193, pct: 57.3, dropoff: 0, dropoffPct: 0, time: "1s", zone: "lastmile" as const, hypothesis: null },
  { step: 12, name: "App Execute", users: 139, pct: 41.3, dropoff: 54, dropoffPct: 28.0, time: "1m 5s", zone: "lastmile" as const, hypothesis: "The biggest single drop. Users completed 10 setup steps, then hit a 4-5 click sequential workflow with AI wait times at each stage. The jump from guided onboarding to 'now figure it out yourself' is too abrupt." },
];

type Zone = "trust" | "tollbooth" | "lastmile";

const zoneConfig: Record<Zone, { label: string; bgClass: string; borderClass: string; textClass: string; barClass: string; barBgClass: string }> = {
  trust: { label: "Trust Erosion", bgClass: "bg-zone-trust-bg", borderClass: "border-zone-trust", textClass: "text-zone-trust-text", barClass: "bg-zone-trust", barBgClass: "bg-zone-trust-bg" },
  tollbooth: { label: "Unnecessary Tollbooths", bgClass: "bg-zone-tollbooth-bg", borderClass: "border-zone-tollbooth", textClass: "text-zone-tollbooth-text", barClass: "bg-zone-tollbooth", barBgClass: "bg-zone-tollbooth-bg" },
  lastmile: { label: "Last-Mile Cliff", bgClass: "bg-zone-lastmile-bg", borderClass: "border-zone-lastmile", textClass: "text-zone-lastmile-text", barClass: "bg-zone-lastmile", barBgClass: "bg-zone-lastmile-bg" },
};

const getBarColor = (zone: Zone | null) => {
  if (zone === "lastmile") return "#8B5CF6";
  if (zone === "tollbooth") return "#EF4444";
  if (zone === "trust") return "#F59E0B";
  return "#10B981";
};

const getBarBg = (zone: Zone | null) => {
  if (zone === "lastmile") return "#EDE9FE";
  if (zone === "tollbooth") return "#FEE2E2";
  if (zone === "trust") return "#FEF3C7";
  return "#D1FAE5";
};

export default function FunnelChart() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [selectedZone, setSelectedZone] = useState<Zone | null>(null);
  const { ref: chartRef, isVisible: chartVisible } = useScrollReveal({ threshold: 0.15 });
  const chartTopOffset = 52;
  const chartHeight = 240;
  const chartFrameHeight = 372;

  return (
    <div>
      {/* Zone filters */}
      <div className="mb-6 flex flex-wrap gap-3">
        <button
          onClick={() => setSelectedZone(null)}
          className={`cursor-pointer rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
            selectedZone === null
              ? "border-foreground bg-foreground text-card"
              : "border-border bg-card text-text-secondary hover:text-foreground"
          }`}
        >
          All Steps
        </button>
        {(Object.entries(zoneConfig) as [Zone, typeof zoneConfig[Zone]][]).map(([key, val]) => (
          <button
            key={key}
            onClick={() => setSelectedZone(selectedZone === key ? null : key)}
            className={`cursor-pointer rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${val.textClass} ${
              selectedZone === key
                ? `${val.bgClass} ${val.borderClass} border-2`
                : `border-border bg-card`
            }`}
          >
            {val.label}
          </button>
        ))}
      </div>

      {/* Chart */}
      <div className="overflow-x-auto">
        <div ref={chartRef} className="relative mt-2" style={{ height: chartFrameHeight, minWidth: 700 }}>
        {/* Grid lines */}
        {[0, 25, 50, 75, 100].map((v) => (
          <div
            key={v}
            className="absolute left-12 right-0 border-t border-border/50"
            style={{ top: `${((100 - v) / 100) * chartHeight + chartTopOffset}px` }}
          />
        ))}

        {/* Y-axis */}
        <div className="absolute left-0 flex w-10 flex-col justify-between" style={{ top: chartTopOffset, height: chartHeight }}>
          {[100, 75, 50, 25, 0].map((v) => (
            <span key={v} className="text-right font-mono text-[11px] text-text-secondary">{v}%</span>
          ))}
        </div>

        {/* Bars */}
        <div className="absolute left-12 right-0 flex items-end gap-1.5" style={{ height: chartHeight, top: chartTopOffset }}>
          {funnelData.map((item, idx) => {
            const isHovered = hovered === item.step;
            const isFiltered = selectedZone && item.zone !== selectedZone;
            const barHeight = (item.pct / 100) * chartHeight;
            const barColor = getBarColor(item.zone as Zone | null);
            const barBg = getBarBg(item.zone as Zone | null);

            return (
              <div
                key={item.step}
                className="flex flex-1 flex-col items-center transition-opacity"
                style={{ opacity: isFiltered ? 0.15 : 1, minWidth: 40 }}
                onMouseEnter={() => setHovered(item.step)}
                onMouseLeave={() => setHovered(null)}
              >
                <span
                  className="mb-1 font-mono text-[11px] font-semibold transition-colors"
                  style={{ color: isHovered ? "#1A1A1A" : "#999" }}
                >
                  {item.pct}%
                </span>
                <div
                  className="relative w-full max-w-[56px] rounded-t transition-all duration-300 ease-out"
                  style={{
                    height: chartVisible ? barHeight : 0,
                    backgroundColor: isHovered ? barColor : barBg,
                    border: `1.5px solid ${barColor}`,
                    cursor: item.hypothesis ? "pointer" : "default",
                    transform: isHovered ? "scaleX(1.06)" : "scaleX(1)",
                    transitionDelay: chartVisible ? `${idx * 40}ms` : "0ms",
                  }}
                >
                  {item.dropoffPct > 5 && (
                    <div className="absolute -right-2 -top-0.5 rounded-full bg-destructive px-1.5 py-px font-mono text-[10px] font-bold text-destructive-foreground">
                      -{item.dropoffPct}%
                    </div>
                  )}
                </div>
                <div className="mt-2 flex h-8 items-start justify-center text-center text-[10px] leading-tight text-text-secondary">
                  <span>{item.name}</span>
                </div>
              </div>
            );
          })}
        </div>
        </div>
      </div>

      {/* Hover detail card - outside chart container to avoid clipping */}
      <div className="mt-4 min-h-[140px] overflow-visible">
        {hovered !== null ? (() => {
          const item = funnelData.find((d) => d.step === hovered);
          if (!item) return null;
          const zone = item.zone as Zone | null;
          const zc = zone ? zoneConfig[zone] : null;
          return (
            <div
              className="animate-fade-in rounded-xl border p-5"
              style={{
                backgroundColor: zc ? getBarBg(zone) : "#F9FAFB",
                borderColor: zc ? getBarColor(zone) : "#E5E7EB",
              }}
            >
              <div className="mb-3 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                    Step {item.step}
                  </span>
                  <h3 className="mt-0.5 text-lg font-bold text-foreground">{item.name}</h3>
                </div>
                <div className="flex gap-4 flex-shrink-0">
                  {[
                    { val: String(item.users), label: "users", color: "#1A1A1A" },
                    { val: item.dropoff > 0 ? `-${item.dropoff}` : "-", label: "drop-off", color: item.dropoffPct > 10 ? "#EF4444" : item.dropoffPct > 5 ? "#F59E0B" : "#10B981" },
                    { val: item.time, label: "avg time", color: "#1A1A1A" },
                  ].map((m) => (
                    <div key={m.label} className="text-center">
                      <div className="font-mono text-xl font-bold" style={{ color: m.color }}>{m.val}</div>
                      <div className="text-[11px] text-text-secondary">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              {item.hypothesis && (
                <p className="mt-0 border-t border-foreground/10 pt-3 text-sm leading-[1.7] text-foreground/80">
                  <span className="font-semibold">Hypothesis:</span> {item.hypothesis}
                </p>
              )}
              {zc && (
                <span
                  className="mt-2.5 inline-block rounded-full px-3 py-0.5 text-[11px] font-semibold text-primary-foreground"
                  style={{ backgroundColor: getBarColor(zone) }}
                >
                  {zc.label}
                </span>
              )}
            </div>
          );
        })() : (
          <div className="py-10 text-center text-sm italic text-text-secondary">
            Hover over any bar to see drop-off analysis and hypothesis
          </div>
        )}
      </div>

      {/* Summary zone cards */}
      <div className="mt-6 grid grid-cols-3 gap-4 max-md:grid-cols-1">
        {([
          { zone: "trust" as Zone, loss: "23%", steps: "Steps 3-5", desc: "Value is backloaded - users give input for 5 steps before seeing anything back" },
          { zone: "tollbooth" as Zone, loss: "18%", steps: "Steps 6-8", desc: "Unnecessary gates that ask for permission or premature decisions" },
          { zone: "lastmile" as Zone, loss: "28%", steps: "Steps 11-12", desc: "Users completed 10 steps then froze at a multi-click workflow with AI wait times" },
        ]).map((z) => {
          const zc = zoneConfig[z.zone];
          return (
            <div
              key={z.zone}
              onClick={() => setSelectedZone(selectedZone === z.zone ? null : z.zone)}
              className={`cursor-pointer rounded-xl border p-4 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-card-hover ${zc.bgClass} ${zc.borderClass}`}
            >
              <div className={`text-[11px] font-bold uppercase tracking-wider ${zc.textClass}`}>
                {zc.label}
              </div>
              <div className={`font-mono text-[28px] font-extrabold ${zc.textClass}`}>
                {z.loss}
              </div>
              <div className={`text-xs ${zc.textClass} opacity-80 mb-1.5`}>
                drop-off at {z.steps}
              </div>
              <div className="text-[13px] leading-[1.7] text-foreground/70">{z.desc}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
