import { useState } from "react";

interface CitationData {
  cited: boolean;
  prompts: string[];
}

interface ResultData {
  url: string;
  title: string;
  citations: Record<string, CitationData>;
  score: number;
  totalPrompts: number;
  topCompetitor: { name: string; score: number } | null;
}

const mockResults: Record<string, ResultData> = {
  "ramp.com/pricing": {
    url: "ramp.com/pricing",
    title: "Pricing — Ramp",
    citations: {
      chatgpt: { cited: true, prompts: ["best corporate cards for startups", "Ramp vs Brex pricing"] },
      perplexity: { cited: true, prompts: ["corporate card comparison", "Ramp pricing plans"] },
      gemini: { cited: false, prompts: [] },
    },
    score: 2,
    totalPrompts: 14,
    topCompetitor: { name: "Brex", score: 9 },
  },
  "chime.com/banking": {
    url: "chime.com/banking",
    title: "Online Banking — Chime",
    citations: {
      chatgpt: { cited: false, prompts: [] },
      perplexity: { cited: true, prompts: ["best online banks no fees"] },
      gemini: { cited: false, prompts: [] },
    },
    score: 1,
    totalPrompts: 18,
    topCompetitor: { name: "Ally Bank", score: 11 },
  },
};

const defaultResult: ResultData = {
  url: "",
  title: "Your Page",
  citations: {
    chatgpt: { cited: false, prompts: [] },
    perplexity: { cited: true, prompts: ["best tools for content teams"] },
    gemini: { cited: false, prompts: [] },
  },
  score: 1,
  totalPrompts: 12,
  topCompetitor: { name: "Competitor", score: 7 },
};

const platforms = [
  { key: "chatgpt", name: "ChatGPT", icon: "⬡" },
  { key: "perplexity", name: "Perplexity", icon: "◎" },
  { key: "gemini", name: "Gemini", icon: "◆" },
];

export default function CitationChecker() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ResultData | null>(null);
  const [loadingStep, setLoadingStep] = useState(0);

  const loadingSteps = [
    "Scanning AI search platforms...",
    "Checking ChatGPT citations...",
    "Checking Perplexity citations...",
    "Checking Gemini citations...",
    "Generating your report...",
  ];

  const handleCheck = () => {
    if (!url.trim()) return;
    setLoading(true);
    setResult(null);
    setLoadingStep(0);

    const stepInterval = setInterval(() => {
      setLoadingStep((prev) => {
        if (prev >= loadingSteps.length - 1) {
          clearInterval(stepInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 600);

    setTimeout(() => {
      clearInterval(stepInterval);
      const cleanUrl = url.replace(/^https?:\/\//, "").replace(/\/$/, "");
      const matched = mockResults[cleanUrl] || {
        ...defaultResult,
        url: cleanUrl,
        title: cleanUrl,
      };
      setResult(matched);
      setLoading(false);
    }, 3200);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleCheck();
  };

  return (
    <div className="mx-auto max-w-[640px]">
      {/* Header */}
      <div className="mb-8 text-center">
        <div className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-primary">
          Free Tool
        </div>
        <h3 className="mb-2 font-display text-[28px] text-foreground">
          AI Citation Checker
        </h3>
        <p className="text-base text-foreground/60">
          Is your content being cited by AI search? Paste a URL to find out.
        </p>
      </div>

      {/* Input */}
      <div className="mb-6 flex gap-2">
        <input
          type="text"
          placeholder="Enter a URL — e.g., ramp.com/pricing"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 rounded-lg border-2 border-border bg-card px-4 py-3 text-[15px] text-foreground outline-none transition-colors placeholder:text-foreground/40 focus:border-primary"
        />
        <button
          onClick={handleCheck}
          disabled={loading || !url.trim()}
          className="whitespace-nowrap rounded-lg bg-foreground px-6 py-3 text-[15px] font-semibold text-card transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Checking..." : "Check Page"}
        </button>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="py-8 text-center">
          <div className="mx-auto flex max-w-[300px] flex-col gap-3">
            {loadingSteps.map((step, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 transition-opacity duration-300"
                style={{ opacity: i <= loadingStep ? 1 : 0.3 }}
              >
                <div
                  className="flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-bold text-card transition-colors duration-300"
                  style={{
                    backgroundColor:
                      i < loadingStep
                        ? "hsl(var(--primary))"
                        : i === loadingStep
                        ? "hsl(var(--zone-trust))"
                        : "hsl(var(--border))",
                  }}
                >
                  {i < loadingStep ? "✓" : ""}
                </div>
                <span
                  className={`text-sm ${
                    i === loadingStep ? "font-semibold text-foreground" : "text-foreground/60"
                  }`}
                >
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Results */}
      {result && !loading && (
        <div className="animate-fade-in">
          {/* Score Header */}
          <div
            className="mb-5 rounded-xl border p-6 text-center"
            style={{
              backgroundColor: result.score <= 2 ? "hsl(var(--zone-tollbooth-bg))" : result.score <= 5 ? "hsl(var(--zone-trust-bg))" : "hsl(160 82% 93%)",
              borderColor: result.score <= 2 ? "hsl(0 74% 80%)" : result.score <= 5 ? "hsl(48 90% 75%)" : "hsl(160 60% 75%)",
            }}
          >
            <div className="mb-1 text-[13px] text-foreground/60">AI Citation Score</div>
            <div className="text-5xl font-extrabold leading-none" style={{
              color: result.score <= 2 ? "hsl(var(--zone-tollbooth))" : result.score <= 5 ? "hsl(28 73% 40%)" : "hsl(var(--primary))",
            }}>
              {result.score}{" "}
              <span className="text-xl font-normal text-foreground/40">/ {result.totalPrompts}</span>
            </div>
            <div className="mt-2 text-sm text-foreground/60">
              This page is cited in{" "}
              <strong className="text-foreground/80">{result.score} of {result.totalPrompts}</strong>{" "}
              relevant AI searches
            </div>
            {result.topCompetitor && (
              <div className="mt-3 inline-block rounded-lg bg-foreground/5 px-4 py-2 text-[13px] text-foreground/70">
                {result.topCompetitor.name} is cited in{" "}
                <strong>{result.topCompetitor.score}</strong> — that's a{" "}
                <strong className="text-destructive">
                  {result.topCompetitor.score - result.score}x gap
                </strong>
              </div>
            )}
          </div>

          {/* Platform Breakdown */}
          <div className="mb-5 flex flex-col gap-2">
            <div className="text-[13px] font-semibold uppercase tracking-[0.05em] text-foreground/40">
              Platform Breakdown
            </div>
            {platforms.map((p) => {
              const data = result.citations[p.key];
              return (
                <div
                  key={p.key}
                  className="flex items-center justify-between rounded-lg border border-border bg-surface-muted px-4 py-3.5"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-lg">{p.icon}</span>
                    <span className="text-[15px] font-medium text-foreground">{p.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {data.cited ? (
                      <>
                        <span className="text-[13px] font-semibold text-primary">
                          Cited — {data.prompts.length} prompt{data.prompts.length > 1 ? "s" : ""}
                        </span>
                        <div className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-primary/15 text-xs text-primary">
                          ✓
                        </div>
                      </>
                    ) : (
                      <>
                        <span className="text-[13px] font-semibold text-destructive">Not cited</span>
                        <div className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-destructive/10 text-xs text-destructive">
                          ✗
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="rounded-xl bg-gradient-to-br from-accent-dark to-foreground p-6 text-center">
            <div className="mb-1.5 text-lg font-bold text-card">Want your full domain audit?</div>
            <div className="mb-4 text-sm text-card/70">
              See every page, every prompt, every competitor gap — free.
            </div>
            <div className="mx-auto flex max-w-[400px] gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 rounded-lg border border-card/20 bg-card/10 px-3.5 py-3 text-sm text-card outline-none placeholder:text-card/40"
              />
              <button className="whitespace-nowrap rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-foreground transition-opacity hover:opacity-90">
                Get Full Audit →
              </button>
            </div>
          </div>

          {/* Prompts Detail */}
          {platforms.some((p) => result.citations[p.key].cited) && (
            <div className="mt-5">
              <div className="mb-2 text-[13px] font-semibold uppercase tracking-[0.05em] text-foreground/40">
                Prompts where you're cited
              </div>
              {platforms.map((p) => {
                const data = result.citations[p.key];
                if (!data.cited) return null;
                return data.prompts.map((prompt, i) => (
                  <div
                    key={`${p.key}-${i}`}
                    className="mb-1.5 flex items-center gap-2 rounded-lg bg-primary/5 px-3.5 py-2.5 text-sm text-foreground/80"
                  >
                    <span className="opacity-60">{p.icon}</span>
                    <span>"{prompt}"</span>
                  </div>
                ));
              })}
            </div>
          )}
        </div>
      )}

      {/* Empty State */}
      {!result && !loading && (
        <div className="py-6 text-center text-foreground/40">
          <div className="mb-2 text-[13px]">Try these examples:</div>
          <div className="flex justify-center gap-2">
            {["ramp.com/pricing", "chime.com/banking"].map((example) => (
              <button
                key={example}
                onClick={() => setUrl(example)}
                className="rounded-lg border border-primary/30 bg-primary/5 px-3.5 py-1.5 text-[13px] text-primary transition-colors hover:bg-primary/10"
              >
                {example}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
