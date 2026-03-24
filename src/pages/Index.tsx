import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import FunnelChart from "@/components/FunnelChart";
import BlockerCards from "@/components/BlockerCards";
import RedesignedFlow from "@/components/RedesignedFlow";
import ExperimentCards from "@/components/ExperimentCards";
import GrowthEngine from "@/components/GrowthEngine";
import InvestmentDashboard from "@/components/InvestmentDashboard";

const SectionHeader = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mb-6 font-display text-[28px] text-foreground">{children}</h2>
);

const SectionDivider = () => (
  <div className="mx-auto max-w-content border-t border-border" />
);

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <HeroSection />

      <SectionDivider />

      {/* Section 1: Aha Moment */}
      <section id="aha-moment" className="scroll-mt-16 px-6 py-16">
        <div className="mx-auto max-w-content">
          <p className="mb-12 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Part 1
          </p>

          {/* 1A: Funnel */}
          <SectionHeader>The Funnel at a Glance</SectionHeader>
          <p className="mb-8 max-w-[720px] text-sm leading-relaxed text-foreground/80">
            337 users enter the onboarding flow. Only 139 reach the aha moment — seeing
            high-quality content generated in the Actions Grid. That's a{" "}
            <strong>41.3% activation rate</strong>, with an average time-to-convert of{" "}
            <strong>3h 35m</strong> suggesting most users aren't completing this in one
            sitting. The funnel has three distinct problem zones.
          </p>
          <FunnelChart />

          {/* 1B: Blockers */}
          <div className="mt-20">
            <SectionHeader>5 Key Blockers</SectionHeader>
            <BlockerCards />
          </div>

          {/* 1C: Redesigned Flow */}
          <div className="mt-20">
            <SectionHeader>Redesigned Onboarding Flow</SectionHeader>
            <RedesignedFlow />
          </div>

          {/* 1D: Experiments */}
          <div className="mt-20">
            <SectionHeader>Two Proposed Experiments</SectionHeader>
            <p className="mb-6 text-sm leading-relaxed text-foreground/80">
              Two experiments targeting the two biggest opportunity areas in the funnel.
            </p>
            <ExperimentCards />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 2: Growth Engine */}
      <section id="growth-engine" className="scroll-mt-16 px-6 py-16">
        <div className="mx-auto max-w-content">
          <p className="mb-12 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Part 2
          </p>
          <GrowthEngine />
        </div>
      </section>

      <SectionDivider />

      {/* Section 3: Investment Framework */}
      <section id="investment" className="scroll-mt-16 px-6 py-16">
        <div className="mx-auto max-w-content">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Part 3
          </p>
          <SectionHeader>Investment Framework</SectionHeader>
          <div className="rounded-xl border border-border bg-card p-8 shadow-card">
            <p className="mb-6 text-sm leading-relaxed text-foreground/80">
              Prioritization framework based on expected impact, implementation effort, and confidence level.
            </p>
            <div className="overflow-hidden rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-muted text-left">
                    <th className="px-4 py-3 font-semibold text-foreground">Initiative</th>
                    <th className="px-4 py-3 font-semibold text-foreground">Impact</th>
                    <th className="px-4 py-3 font-semibold text-foreground">Effort</th>
                    <th className="px-4 py-3 font-semibold text-foreground">Confidence</th>
                    <th className="px-4 py-3 font-semibold text-foreground">Priority</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Auto-Execute First Workflow", impact: "High", effort: "Medium", confidence: "High", priority: "P0" },
                    { name: "Post-Competitor Micro-Insight", impact: "Medium", effort: "Low", confidence: "Medium", priority: "P0" },
                    { name: "Compress Tollbooth Steps", impact: "Medium", effort: "Low", confidence: "High", priority: "P1" },
                    { name: "Reframe Benchmark", impact: "Medium", effort: "Medium", confidence: "Medium", priority: "P1" },
                    { name: "Content Showcase + Attribution", impact: "High", effort: "High", confidence: "Medium", priority: "P2" },
                  ].map((row, i) => (
                    <tr key={i} className="border-t border-border">
                      <td className="px-4 py-3 font-medium text-foreground">{row.name}</td>
                      <td className="px-4 py-3 text-foreground/80">{row.impact}</td>
                      <td className="px-4 py-3 text-foreground/80">{row.effort}</td>
                      <td className="px-4 py-3 text-foreground/80">{row.confidence}</td>
                      <td className="px-4 py-3">
                        <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${
                          row.priority === "P0"
                            ? "bg-primary/10 text-accent-dark"
                            : row.priority === "P1"
                            ? "bg-zone-trust-bg text-zone-trust-text"
                            : "bg-muted text-muted-foreground"
                        }`}>
                          {row.priority}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-10">
        <div className="mx-auto max-w-content text-center text-sm text-text-secondary">
          Growth PM Case Study · Avi · March 2026
        </div>
      </footer>
    </div>
  );
}
