import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import FunnelChart from "@/components/FunnelChart";
import BlockerCards from "@/components/BlockerCards";
import RedesignedFlow from "@/components/RedesignedFlow";
import ExperimentCards from "@/components/ExperimentCards";
import GrowthEngine from "@/components/GrowthEngine";
import InvestmentDashboard from "@/components/InvestmentDashboard";
import ScrollReveal from "@/components/ScrollReveal";

const SectionHeader = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mb-6 font-display text-[28px] tracking-[-0.02em] text-foreground">{children}</h2>
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
      <section id="aha-moment" className="scroll-mt-20 px-6 py-16">
        <div className="mx-auto max-w-content">
          <ScrollReveal>
            <p className="mb-12 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Part 1
            </p>

            {/* 1A: Funnel */}
            <SectionHeader>The Funnel at a Glance</SectionHeader>
            <p className="mb-8 max-w-[720px] text-sm leading-[1.7] text-foreground/80">
              337 users enter the onboarding flow. Only 139 reach the aha moment - seeing
              high-quality content generated in the Actions Grid. That's a{" "}
              <strong>41.3% activation rate</strong>, with an average time-to-convert of{" "}
              <strong>3h 35m</strong> suggesting most users aren't completing this in one
              sitting. The drop-off falls into three problem zones.
            </p>
          </ScrollReveal>
          <FunnelChart />

          {/* 1B: Blockers */}
          <div className="mt-20">
            <ScrollReveal>
              <SectionHeader>5 Key Blockers</SectionHeader>
            </ScrollReveal>
            <BlockerCards />
          </div>

          {/* 1C: Redesigned Flow */}
          <div className="mt-20">
            <ScrollReveal>
              <SectionHeader>Redesigned Onboarding Flow</SectionHeader>
              <RedesignedFlow />
            </ScrollReveal>
          </div>

          {/* 1D: Experiments */}
          <div className="mt-20">
            <ScrollReveal>
              <SectionHeader>Two Proposed Experiments</SectionHeader>
              <p className="mb-6 text-sm leading-[1.7] text-foreground/80">
                Two experiments targeting the two biggest opportunity areas in the funnel.
              </p>
            </ScrollReveal>
            <ExperimentCards />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 2: Growth Engine */}
      <section id="growth-engine" className="scroll-mt-20 px-6 py-16">
        <div className="mx-auto max-w-content">
          <ScrollReveal>
            <p className="mb-12 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Part 2
            </p>
          </ScrollReveal>
          <GrowthEngine />
        </div>
      </section>

      <SectionDivider />

      {/* Section 3: Investment Framework */}
      <section id="investment" className="scroll-mt-20 px-6 py-16">
        <div className="mx-auto max-w-content">
          <ScrollReveal>
            <p className="mb-12 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Part 3
            </p>
            <SectionHeader>Making the Call</SectionHeader>
            <p className="mb-8 max-w-[720px] text-sm leading-[1.7] text-foreground/80">
              One primary metric determines success. Three diagnostics tell you where to focus.
              Evaluation timeframe: 8 weeks post-public launch.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <InvestmentDashboard />
          </ScrollReveal>

          {/* ROI Model */}
          <ScrollReveal className="mt-16">
            <SectionHeader>ROI Model</SectionHeader>
            <div className="mb-6 flex items-center justify-between gap-0 overflow-x-auto rounded-xl border border-border bg-card p-6 shadow-card max-md:justify-start max-md:gap-2">
              {[
                { value: "1,000", label: "Checker users/mo", pct: null },
                { value: "200", label: "Audits", pct: "20%" },
                { value: "24", label: "Trials", pct: "12%" },
                { value: "10", label: "Activated Users", pct: "42%" },
              ].map((stage, i) => (
                <div key={i} className="flex items-center gap-0">
                  {i > 0 && (
                    <div className="flex flex-col items-center px-3 max-md:px-1.5">
                      <span className="mb-1 font-mono text-xs font-semibold text-primary">{stage.pct}</span>
                      <div className="text-foreground/30">→</div>
                    </div>
                  )}
                  <div className="flex flex-col items-center text-center">
                    <span className="font-mono text-2xl font-bold text-foreground max-md:text-lg">{stage.value}</span>
                    <span className="mt-1 text-xs text-foreground/50 max-md:text-[10px]">{stage.label}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm leading-[1.7] text-foreground/60">
              At AirOps' mid-market contract values, 10 activated users/month from a roughly $10K/month channel
              is strong unit economics - and it compounds as organic distribution scales while costs stay fixed.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-12">
        <div className="mx-auto max-w-content text-center">
          <p className="text-sm text-text-secondary">Built by Avi - March 2026</p>
          <p className="mt-1 text-xs text-foreground/30">Interactive presentation built with React</p>
        </div>
      </footer>
    </div>
  );
}
