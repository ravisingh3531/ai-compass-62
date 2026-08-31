import { createFileRoute } from "@tanstack/react-router";
import {
  Hero,
  ReadingProgress,
  Introduction,
  SkillStack,
  Toc,
  WhatIsAnAiCourse,
} from "@/components/article/intro";
import { AtAGlance } from "@/components/article/tables";
import { BeyondMarketing, ProblemAndSolution, Recommendations } from "@/components/article/solution";
import { CourseQuiz } from "@/components/article/quiz";
import { WhyNumberOne } from "@/components/article/logicmojo";
import { InDepthReviews } from "@/components/article/reviews";
import { AlsoConsidered } from "@/components/article/also-considered";
import { HowToChoose } from "@/components/article/choose";
import { StickyCta } from "@/components/article/prose";
import {
  Author,
  Careers,
  Faq,
  FinalVerdict,
  Footer,
  FreeVsPaid,
  IndiaVsGlobal,
  RedFlags,
  Reviewers,
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
      <ReadingProgress />
      <Hero />
      <main className="mx-auto max-w-4xl px-5 pb-8">
        <article>
          <Toc />
          <Introduction />
          <ProblemAndSolution />
          <Recommendations />
          <WhatIsAnAiCourse />
          <SkillStack />
          <BeyondMarketing />
          <AtAGlance />
          <CourseQuiz />
          <WhyNumberOne />
          <InDepthReviews />
          <AlsoConsidered />
          <IndiaVsGlobal />
          <HowToChoose />
          <Careers />
          <Roadmap />
          <RedFlags />
          <FreeVsPaid />
          <Roi />
          <Author />
          <Reviewers />
          <Faq />
          <FinalVerdict />
        </article>
      </main>
      <Footer />
      <StickyCta />
    </div>
  );
}
