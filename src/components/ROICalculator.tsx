import { useState } from "react";

const defaults = {
  checkerUsers: 1000,
  checkerToAudit: 20,
  auditToTrial: 12,
  trialToActivated: 42,
  monthlyCost: 10,
};

export default function ROICalculator() {
  const [inputs, setInputs] = useState(defaults);

  const audits = Math.round(inputs.checkerUsers * (inputs.checkerToAudit / 100));
  const trials = Math.round(audits * (inputs.auditToTrial / 100));
  const activated = Math.round(trials * (inputs.trialToActivated / 100));

  const update = (key: keyof typeof defaults, value: number) => {
    setInputs((prev) => ({ ...prev, [key]: value }));
  };

  const sliders = [
    { key: "checkerUsers" as const, label: "Checker users / month", min: 100, max: 5000, step: 100, suffix: "" },
    { key: "checkerToAudit" as const, label: "Checker to Audit rate", min: 5, max: 40, step: 1, suffix: "%" },
    { key: "auditToTrial" as const, label: "Audit to Trial rate", min: 2, max: 25, step: 1, suffix: "%" },
    { key: "trialToActivated" as const, label: "Trial to Activated rate", min: 10, max: 60, step: 1, suffix: "%" },
  ];

  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-card">
      {/* Funnel output */}
      <div className="mb-8 flex items-center justify-between gap-0 overflow-x-auto max-md:justify-start max-md:gap-2">
        {[
          { value: inputs.checkerUsers.toLocaleString(), label: "Checker users/mo", pct: null },
          { value: audits.toLocaleString(), label: "Audits", pct: `${inputs.checkerToAudit}%` },
          { value: trials.toLocaleString(), label: "Trials", pct: `${inputs.auditToTrial}%` },
          { value: activated.toLocaleString(), label: "Activated Users", pct: `${inputs.trialToActivated}%` },
        ].map((stage, i) => (
          <div key={i} className="flex items-center gap-0">
            {i > 0 && (
              <div className="flex flex-col items-center px-3 max-md:px-1.5">
                <span className="mb-1 font-mono text-xs font-semibold text-primary">{stage.pct}</span>
                <div className="text-foreground/40">→</div>
              </div>
            )}
            <div className="flex flex-col items-center text-center">
              <span className="font-mono text-2xl font-bold text-foreground max-md:text-lg">{stage.value}</span>
              <span className="mt-1 text-xs text-foreground/60 max-md:text-[10px]">{stage.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Sliders */}
      <div className="grid gap-4 md:grid-cols-2">
        {sliders.map((s) => (
          <div key={s.key}>
            <div className="mb-1.5 flex items-center justify-between">
              <label htmlFor={`roi-slider-${s.key}`} className="text-xs font-medium text-foreground/60">{s.label}</label>
              <span className="font-mono text-sm font-semibold text-foreground">
                {s.key === "checkerUsers" ? inputs[s.key].toLocaleString() : inputs[s.key]}{s.suffix}
              </span>
            </div>
            <input
              id={`roi-slider-${s.key}`}
              type="range"
              min={s.min}
              max={s.max}
              step={s.step}
              value={inputs[s.key]}
              onChange={(e) => update(s.key, Number(e.target.value))}
              className="w-full cursor-pointer accent-primary"
              style={{ accentColor: "hsl(var(--primary))" }}
            />
            <div className="mt-0.5 flex justify-between text-[10px] text-foreground/50">
              <span>{s.key === "checkerUsers" ? s.min.toLocaleString() : s.min}{s.suffix}</span>
              <span>{s.key === "checkerUsers" ? s.max.toLocaleString() : s.max}{s.suffix}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Summary line */}
      <div className="mt-6 rounded-lg bg-surface-muted p-4">
        <p className="text-sm leading-[1.7] text-foreground/60">
          At these rates, <strong className="text-foreground">{activated} activated users/month</strong> from
          a ~${inputs.monthlyCost}K/month channel.
          {activated >= 10
            ? " That clears the green light threshold."
            : activated >= 4
            ? " That's in yellow light territory - promising but needs iteration."
            : " That's below the red light threshold - time to rethink the approach."}
        </p>
      </div>

      {/* Reset */}
      <div className="mt-3 text-right">
        <button
          onClick={() => setInputs(defaults)}
          className="cursor-pointer text-xs font-medium text-primary hover:underline"
        >
          Reset to baseline assumptions
        </button>
      </div>
    </div>
  );
}
