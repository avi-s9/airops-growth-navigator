import { useState, useEffect, useRef, useCallback } from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import FunnelChart from "@/components/FunnelChart";
import articleImg from "@/assets/Generated_Article_Screenshot.png";
import dashboardImg from "@/assets/SSENSE_Dashboard_Screenshot.png";
import BlockerCards from "@/components/BlockerCards";
import RedesignedFlow from "@/components/RedesignedFlow";
import ExperimentCards from "@/components/ExperimentCards";
import GrowthEngine from "@/components/GrowthEngine";
import InvestmentDashboard from "@/components/InvestmentDashboard";
import ScrollReveal from "@/components/ScrollReveal";
import ROICalculator from "@/components/ROICalculator";

const SectionHeader = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mb-6 font-display text-[28px] tracking-[-0.02em] text-foreground">{children}</h2>
);

const SectionDivider = () => (
  <div className="mx-auto max-w-content border-t border-border" />
);

export default function Index() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const closeLightbox = useCallback(() => {
    setLightboxSrc(null);
    triggerRef.current?.focus();
    triggerRef.current = null;
  }, []);

  useEffect(() => {
    if (!lightboxSrc) return;
    closeBtnRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "Tab") {
        e.preventDefault();
        closeBtnRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [lightboxSrc, closeLightbox]);

  const openLightbox = (src: string, trigger: HTMLElement) => {
    triggerRef.current = trigger;
    setLightboxSrc(src);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Lightbox */}
      {lightboxSrc && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Expanded screenshot"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <button
            ref={closeBtnRef}
            type="button"
            onClick={closeLightbox}
            aria-label="Close lightbox"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition-colors hover:bg-white/20"
          >
            ✕
          </button>
          <img
            src={lightboxSrc}
            alt="Expanded screenshot"
            className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
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
              337 users enter. 139 reach the aha moment. That's a{" "}
              <strong>41.3% activation rate</strong> with a <strong>3h 35m</strong> average
              time-to-convert. Here's where they drop off, why, and what to do about it.
            </p>
          </ScrollReveal>
          <ScrollReveal className="mb-12">
            <div className="rounded-xl border border-primary/20 bg-primary/[0.03] p-6">
              <h3 className="mb-3 font-display text-lg tracking-[-0.02em] text-foreground">
                What the aha moment actually looks like
              </h3>
              <p className="mb-6 max-w-[720px] text-sm leading-[1.7] text-foreground/80">
                I ran SSENSE through the full onboarding. When it works, the output is genuinely impressive -
                a 2,400-word article written in SSENSE's editorial voice, with sourced links, ready to publish.
                The dashboard updated with real mention and citation rates. The output is great. But 59% of users drop off before they ever reach it.
              </p>
              <p className="mb-5 max-w-[720px] text-sm leading-[1.7] text-foreground/70">
                Quality here means on-brand voice, publishable with light edits, properly sourced links, and structured well enough that it's clearly better than starting from scratch. The SSENSE article hit all four.
              </p>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <figure>
                  <button
                    type="button"
                    className="block w-full cursor-pointer overflow-hidden rounded-lg border border-border shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-opacity hover:opacity-90"
                    onClick={(e) => openLightbox(articleImg, e.currentTarget)}
                    aria-label="View larger: Generated article screenshot"
                  >
                    <img src={articleImg} alt="Generated article screenshot" className="block w-full" loading="lazy" width={1280} height={800} />
                  </button>
                  <figcaption className="mt-2 font-body text-[13px] italic text-text-secondary">
                    The generated article - 2,400 words in SSENSE's editorial voice, with sourced external links.
                  </figcaption>
                </figure>
                <figure>
                  <button
                    type="button"
                    className="block w-full cursor-pointer overflow-hidden rounded-lg border border-border shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-opacity hover:opacity-90"
                    onClick={(e) => openLightbox(dashboardImg, e.currentTarget)}
                    aria-label="View larger: SSENSE dashboard screenshot"
                  >
                    <img src={dashboardImg} alt="SSENSE dashboard screenshot" className="block w-full" loading="lazy" width={1280} height={800} />
                  </button>
                  <figcaption className="mt-2 font-body text-[13px] italic text-text-secondary">
                    The SSENSE dashboard after onboarding - 35.6% mention rate, 5.1% citation rate. These numbers were real, but they only showed up after I'd finished the full flow. During setup, everything said 0%.
                  </figcaption>
                </figure>
              </div>
            </div>
          </ScrollReveal>

          <FunnelChart />

          <ScrollReveal>
            <div className="mt-8 rounded-lg border border-border/60 bg-surface-muted px-5 py-4">
              <p className="text-[13px] leading-[1.7] text-foreground/60">
                <span className="font-semibold text-foreground/70">A note on confidence:</span> The funnel data shows where users drop off. My walkthrough suggests why. These are hypotheses to validate, not conclusions - I'd want to see this pattern hold across multiple cohorts and traffic sources before shipping changes.
              </p>
            </div>
          </ScrollReveal>

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
              One metric determines success. Three diagnostics tell you where to focus.
              Evaluation window: 8 weeks post-launch.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <InvestmentDashboard />
          </ScrollReveal>

          <ScrollReveal className="mt-16">
            <SectionHeader>ROI Model</SectionHeader>
            <ROICalculator />
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
