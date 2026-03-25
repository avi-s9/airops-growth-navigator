import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import benchmarkImg from "@/assets/Benchmark_Results_Screen.png";
import freeTrialImg from "@/assets/Free_Trial_CTA_Screen.png";
import firstWinImg from "@/assets/Lets_Get_You_Your_First_Win_Screen.png";
import actionsGridImg from "@/assets/Actions_Grid_Run_Workflow_Screen.png";
import reviewOutputImg from "@/assets/Review_Output_Screen.png";

type Zone = "trust" | "tollbooth" | "lastmile";

interface Screenshot {
  src: string;
  alt: string;
  caption: string;
}

const blockers: {
  num: number;
  title: string;
  zone: Zone;
  zoneLabel: string;
  step: string;
  text: string;
  screenshots?: Screenshot[][];
}[] = [
  {
    num: 1,
    title: "The Benchmark credibility gap",
    zone: "trust",
    zoneLabel: "Trust Erosion",
    step: "Step 5 - 11.3% drop, 46s",
    text: "When the AI Search Report Card returns 0% mention rate and 0% citation rate for both you and all your competitors, the headline 'Your competitors are outperforming you in AI Search' just feels wrong. You've put in 4 steps of effort - the Benchmark is supposed to be the first payoff. When the data is empty, it doesn't create urgency; it makes you doubt whether the platform actually works. I tested this with SSENSE - a brand with an established editorial and strong organic presence - and every single competitor, including ones like MatchesFashion that went bankrupt two years ago, showed 0%. When the data feels wrong, the whole platform loses credibility at the worst possible moment.",
    screenshots: [
      [
        {
          src: benchmarkImg,
          alt: "AirOps Benchmark Results Screen showing 0% scores",
          caption: "The actual Benchmark screen - 'Your competitors are outperforming you' with every score at 0%.",
        },
      ],
    ],
  },
  {
    num: 2,
    title: "Value is backloaded - 5 steps of input before any return",
    zone: "trust",
    zoneLabel: "Trust Erosion",
    step: "Steps 1-5",
    text: "The first five steps collect workspace info, personalization, competitors, and target prompts - all from you, nothing back yet. The first time the product shows value is the Benchmark (Step 5), and it can underdeliver. Users who showed up from an ad rather than a referral are probably the ones leaving in Steps 3-5 - they haven't seen anything yet that justifies the effort.",
  },
  {
    num: 3,
    title: "Unnecessary tollbooths that add friction without value",
    zone: "tollbooth",
    zoneLabel: "Unnecessary Tollbooths",
    step: "Steps 6 and 8",
    text: "Step 6 asks you to click 'Start Free Trial' - but you already signed up. Why is this a separate step? It just makes you wonder if you're about to get charged. Step 8 forces you to pick Content Creation or Content Refresh before you really understand either one. That kind of premature choice makes people hesitate.",
    screenshots: [
      [
        {
          src: freeTrialImg,
          alt: "AirOps Free Trial CTA Screen",
          caption: "An entire screen dedicated to a single CTA click.",
        },
        {
          src: firstWinImg,
          alt: "AirOps forced choice between Content Creation and Content Refresh",
          caption: "A forced binary choice users aren't ready to make.",
        },
      ],
    ],
  },
  {
    num: 4,
    title: "Last-mile execution cliff",
    zone: "lastmile",
    zoneLabel: "Last-Mile Cliff",
    step: "Steps 11 to 12 - 28% drop, 65s",
    text: "The single biggest drop in the funnel. You arrive at the Actions Grid after 10 onboarding steps, see 13 rows of keywords, and need to click through a 4-5 step sequential workflow (brief, analysis, article, internal links, external links), each requiring a click and an AI processing wait. 28% of the people who made it through the entire onboarding never see a single piece of generated content.",
    screenshots: [
      [
        {
          src: actionsGridImg,
          alt: "AirOps Actions Grid with Run Workflow buttons",
          caption: "13 rows of 'Run Workflow' buttons - the blank canvas problem.",
        },
        {
          src: reviewOutputImg,
          alt: "AirOps Review Output step 1 of 5",
          caption: "'Review Output (1/5)' - five sequential steps between the Grid and a finished article.",
        },
      ],
    ],
  },
  {
    num: 5,
    title: "No clear 'what's next' after the aha moment",
    zone: "lastmile",
    zoneLabel: "Last-Mile Cliff",
    step: "Step 12+",
    text: "Even among the 41% who reach the aha moment and see a generated article, the experience just stops. There's no 'publish this,' no 'generate your next article,' no obvious next move. The onboarding gets you to the aha moment but then leaves you there, which means even people who activated might not come back for a second session.",
  },
];

const zoneStyles: Record<Zone, { bar: string; barHover: string; pill: string; pillText: string }> = {
  trust: { bar: "bg-zone-trust", barHover: "group-hover:w-2.5", pill: "bg-zone-trust-bg border-zone-trust text-zone-trust-text", pillText: "text-zone-trust-text" },
  tollbooth: { bar: "bg-zone-tollbooth", barHover: "group-hover:w-2.5", pill: "bg-zone-tollbooth-bg border-zone-tollbooth text-zone-tollbooth-text", pillText: "text-zone-tollbooth-text" },
  lastmile: { bar: "bg-zone-lastmile", barHover: "group-hover:w-2.5", pill: "bg-zone-lastmile-bg border-zone-lastmile text-zone-lastmile-text", pillText: "text-zone-lastmile-text" },
};

function ScreenshotImage({ shot, onExpand }: { shot: Screenshot; onExpand: (src: string) => void }) {
  return (
    <figure>
      <div
        className="overflow-hidden rounded-lg border border-border shadow-[0_2px_8px_rgba(0,0,0,0.06)] cursor-pointer hover:opacity-90 transition-opacity"
        onClick={() => onExpand(shot.src)}
      >
        <img
          src={shot.src}
          alt={shot.alt}
          className="block w-full"
          loading="lazy"
        />
      </div>
      <figcaption className="mt-2 font-body text-[13px] italic text-text-secondary">
        {shot.caption}
      </figcaption>
    </figure>
  );
}

export default function BlockerCards() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-4">
      {blockers.map((b, i) => {
        const s = zoneStyles[b.zone];
        return (
          <ScrollReveal key={b.num} delay={i * 60}>
            <div className="group flex cursor-default overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-card-hover">
              <div className={`w-1.5 flex-shrink-0 transition-all duration-200 ${s.bar} ${s.barHover}`} />
              <div className="flex-1 p-5">
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <span className="text-base font-bold text-foreground">
                    {b.num}. {b.title}
                  </span>
                  <span className={`rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${s.pill}`}>
                    {b.zoneLabel}
                  </span>
                </div>
                <div className="mb-2 font-mono text-xs text-text-secondary">{b.step}</div>
                <p className="text-sm leading-[1.7] text-foreground/80">{b.text}</p>

                {b.screenshots?.map((row, ri) => (
                  <div
                    key={ri}
                    className={`mt-4 ${
                      row.length > 1
                        ? "grid grid-cols-1 gap-3 md:grid-cols-2"
                        : ""
                    }`}
                  >
                    {row.map((shot, si) => (
                      <ScreenshotImage key={si} shot={shot} onExpand={setLightboxSrc} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        );
      })}
      {lightboxSrc && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm cursor-pointer"
          onClick={() => setLightboxSrc(null)}
        >
          <div className="relative max-h-[90vh] max-w-[90vw]">
            <img
              src={lightboxSrc}
              alt="Expanded screenshot"
              className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
            />
            <button
              className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-black shadow-lg hover:bg-gray-100 transition-colors"
              onClick={(e) => { e.stopPropagation(); setLightboxSrc(null); }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
