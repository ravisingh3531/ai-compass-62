import { createFileRoute } from "@tanstack/react-router";
import {
  Hero,
  Introduction,
  SkillStack,
  Toc,
  WhatIsAnAiCourse,
} from "@/components/article/intro";
import { AtAGlance } from "@/components/article/tables";
import {
  HonorableMentions,
  LogicMojoDeepDive,
  Reviews,
} from "@/components/article/reviews";
import {
  Authority,
  Beginners,
  Careers,
  Closing,
  Faq,
  Footer,
  FreeVsPaid,
  IndiaVsGlobal,
  Quiz,
  RedFlags,
  Roadmap,
  Roi,
} from "@/components/article/closing";

const TITLE = "Top 10 Best AI Courses in 2026 (India + Global) — Honest Rankings";
const DESCRIPTION =
  "Best AI courses 2026 ranked across India and globally: curriculum depth, GenAI and agents coverage, fees in ₹ and US$, projects, placement reality and honest limitations.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <main className="mx-auto max-w-4xl px-5 pb-8">
        <article>
          <Toc />
          <Introduction />
          <WhatIsAnAiCourse />
          <SkillStack />
          <AtAGlance />
          <Reviews />
          <LogicMojoDeepDive />
          <HonorableMentions />
          <IndiaVsGlobal />
          <Careers />
          <Roadmap />
          <RedFlags />
          <Quiz />
          <Beginners />
          <FreeVsPaid />
          <Roi />
          <Authority />
          <Faq />
          <Closing />
        </article>
      </main>
      <Footer />
    </div>
  );
}
