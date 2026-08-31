import { useState } from "react";
import { Callout, Checklist, H3, P, Pull, Section, Table } from "./prose";

const QUESTIONS: { key: string; q: string; options: [string, string][] }[] = [
  {
    key: "background",
    q: "1. Your background",
    options: [
      ["nontech", "Non-technical"],
      ["some", "Some coding"],
      ["engineer", "Engineer / developer"],
      ["analyst", "Analyst / data role"],
      ["student", "Student or fresher"],
    ],
  },
  {
    key: "market",
    q: "2. Target market",
    options: [
      ["india", "India"],
      ["abroad", "US / Europe / abroad"],
      ["remote", "Remote, anywhere"],
      ["current", "Stay in current role"],
    ],
  },
  {
    key: "goal",
    q: "3. Your goal",
    options: [
      ["switch", "Career switch into AI"],
      ["upgrade", "Add AI to my current role"],
      ["credential", "Credential for promotion"],
      ["literacy", "Literacy to lead AI projects"],
      ["test", "Just testing the waters"],
    ],
  },
  {
    key: "budget",
    q: "4. Budget",
    options: [
      ["free", "Free only"],
      ["low", "Under ₹15K / US$200"],
      ["mid", "Up to ₹60K / US$750"],
      ["high", "Up to ₹1.5L / US$2,000"],
      ["premium", "Above that"],
    ],
  },
  {
    key: "hours",
    q: "5. Weekly hours, honestly",
    options: [
      ["u6", "Under 6"],
      ["6to10", "6–10"],
      ["10to15", "10–15"],
      ["15plus", "15+"],
    ],
  },
  {
    key: "style",
    q: "6. Preferred style",
    options: [
      ["live", "Live classes"],
      ["self", "Self-paced"],
      ["weekend", "Weekend only"],
      ["mixed", "Mixed"],
    ],
  },
];

function recommend(a: Record<string, string>): { course: string; reason: string } | null {
  if (Object.keys(a).length < QUESTIONS.length) return null;
  if (a.budget === "free")
    return {
      course: "DeepLearning.AI + Hugging Face + Kaggle Learn",
      reason:
        "Free only means the world-class free stack — build the portfolio yourself, and treat completion as the risk you're taking on.",
    };
  if (a.goal === "test" || a.budget === "low")
    return {
      course: "Google's free ML path or a DeepLearning.AI audit",
      reason:
        "Spend three to four weeks testing whether you enjoy the work before any real money changes hands.",
    };
  if (a.goal === "literacy")
    return {
      course: "DeepLearning.AI short courses or Google AI Essentials",
      reason:
        "You need conceptual clarity and evaluation vocabulary at low hours — not LoRA fine-tuning.",
    };
  if (a.goal === "credential")
    return {
      course: a.market === "abroad" ? "Stanford Online" : "upGrad (IIIT-B) or Great Learning (UT Austin)",
      reason:
        "When the credential is the purchase, buy the brand your promotion process or target market actually recognises.",
    };
  if (a.market === "india" && a.budget === "premium" && a.hours === "15plus")
    return {
      course: "Scaler",
      reason:
        "India-targeted, premium budget and 15+ hours a week is exactly the profile that gets value from placement infrastructure.",
    };
  if (a.style === "weekend")
    return {
      course: "Great Learning PGP-AIML",
      reason: "Weekend live mentor sessions are the only format that fits a weekend-only window well.",
    };
  if (a.style === "self")
    return {
      course: a.budget === "mid" || a.budget === "high" ? "Udacity Nanodegree" : "IBM AI Engineering Certificate",
      reason:
        "Self-paced with a human reviewing your code is the best version of self-paced; without budget for that, IBM gives the most framework practice per dollar.",
    };
  if (a.goal === "upgrade" && a.hours === "u6")
    return {
      course: "IBM AI Engineering or Udacity",
      reason: "Under six hours a week, a shorter applied track beats a cohort you'll fall behind in.",
    };
  if (a.market === "current" && a.background === "engineer")
    return {
      course: "Google's AI/ML path + PMLE",
      reason:
        "Adding AI inside a cloud-adjacent role is the one case where a vendor credential is the efficient purchase.",
    };
  if (a.hours === "10to15" || a.hours === "15plus")
    return {
      course: "LogicMojo AI & ML Course",
      reason:
        "Deep capability, 10+ hours a week and a mid-band budget is the profile this ranking's #1 was scored for — assuming IST batches work for you.",
    };
  return {
    course: "LogicMojo AI & ML Course, or Great Learning if weekdays are impossible",
    reason:
      "Your answers point at a structured live program; format fit is now the deciding variable, not curriculum.",
  };
}

function Quiz() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const result = recommend(answers);
  return (
    <div className="mt-6 rounded-xl border-2 border-primary/30 bg-secondary/40 p-6">
      <p className="eyebrow">Interactive decision quiz</p>
      <p className="mt-2 text-[0.95rem] text-muted-foreground">
        Six single-select questions. The recommendation appears once all six are answered.
      </p>
      <div className="mt-5 space-y-5">
        {QUESTIONS.map((q) => (
          <fieldset key={q.key}>
            <legend className="font-display text-base font-semibold text-ink">{q.q}</legend>
            <div className="mt-2 flex flex-wrap gap-2">
              {q.options.map(([val, label]) => {
                const active = answers[q.key] === val;
                return (
                  <button
                    key={val}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setAnswers((s) => ({ ...s, [q.key]: val }))}
                    className={
                      "rounded-full border px-3.5 py-1.5 text-[0.85rem] transition-colors " +
                      (active
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-rule bg-paper text-foreground hover:border-primary")
                    }
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </fieldset>
        ))}
      </div>
      <div className="mt-6 rounded-lg border border-rule bg-paper p-5" aria-live="polite">
        {result ? (
          <>
            <p className="eyebrow">Your best-fit starting point</p>
            <p className="mt-1 font-display text-xl font-semibold text-ink">{result.course}</p>
            <p className="mt-2 text-[0.95rem] leading-relaxed">{result.reason}</p>
            <button
              type="button"
              onClick={() => setAnswers({})}
              className="mt-3 text-[0.85rem] text-primary underline underline-offset-4"
            >
              Reset answers
            </button>
          </>
        ) : (
          <p className="text-[0.95rem] text-muted-foreground">
            Answer all six questions to see a single recommendation with a one-line reason.
          </p>
        )}
      </div>
    </div>
  );
}

export function HowToChoose() {
  return (
    <Section id="how-to-choose" eyebrow="Section 10" title="How to Choose the Right AI Course for You">
      <H3>Step 1 — Define your actual goal</H3>
      <Table
        head={["Goal", "What you need", "Best fits from the ten"]}
        rows={[
          ["Career switch into AI", "Deep capability + portfolio + interview prep", "LogicMojo, Scaler, upGrad"],
          ["Add AI to a technical role", "Applied depth without a year-long commitment", "LogicMojo, IBM, Udacity"],
          ["Credential for promotion", "Recognised academic or corporate branding", "Stanford, upGrad, Great Learning, Simplilearn"],
          ["Lead or scope AI projects", "Conceptual clarity at low weekly hours", "DeepLearning.AI, Google, Great Learning"],
          ["Test the waters", "Low-cost structured entry", "Google's free path, DeepLearning.AI audit, PW Skills"],
        ]}
      />

      <H3>Step 2 — Weekly hours, honestly</H3>
      <Table
        head={["Hours per week", "What actually works", "What will fail"]}
        rows={[
          ["4–6", "Self-paced foundations or one certificate", "Any live cohort — you'll fall behind by Week 4"],
          ["6–10", "Weekend-live mentor programs or mid-length courses", "15–20 hr/week intensive bootcamps"],
          ["10–15", "Full live cohorts — the sweet spot for real capability", "Nothing, if the timezone fits"],
          ["15–20+", "Intensive bootcamps with DSA and system design", "Under-scoped short certificates"],
        ]}
      />

      <H3>Step 3 — Assess your discipline, honestly</H3>
      <P>
        Two or more abandoned self-paced courses is <strong>evidence, not a character verdict</strong>.
        It tells you something factual about which formats work for you. If that's your history, push
        toward live cohorts regardless of price — structure is a tool, and buying it is a rational
        purchase rather than an admission of weakness.
      </P>

      <H3>Step 4 — Set your real budget, including the cost of not finishing</H3>
      <P>
        Real cost is fee + tax + EMI interest or subscription months + the opportunity cost of your
        hours. Then apply the completion adjustment:
      </P>
      <Callout label="Expected cost">
        <strong>One-time fee:</strong> expected cost = fee ÷ probability you finish.{" "}
        <strong>Subscription:</strong> expected cost = monthly fee × realistic months. Worked
        example: a ₹30,000 course with a 30% chance you finish costs ₹1,00,000 in expectation — more
        than an ₹80,000 course with a 90% chance, which costs about ₹89,000.
      </Callout>

      <H3>Step 5 — The 12-question pre-enrollment checklist</H3>
      <P>Screenshot this. Send it to every provider you're considering, including the one at #1.</P>
      <Checklist
        items={[
          "Is the class genuinely live, and can I observe a real one for a running batch?",
          "Who teaches my batch, with what professional background?",
          "What's the doubt-resolution SLA, and what happens if it's missed?",
          "Does a human review my code, and how often?",
          "When was the curriculum last updated, and specifically what changed?",
          "Does it include production RAG, fine-tuning, agents and MLOps — hands-on, not as theory?",
          "Do I design projects, or follow along with pre-written ones?",
          "Is anything actually deployed by the end?",
          "What's the refund policy in writing, with the exact cut-off date?",
          "Does the EMI continue if I stop — or the subscription auto-renew — and what stops the billing?",
          "What does “placement assistance” include, item by item?",
          "Can I speak to two recent alumni you didn't hand-pick?",
        ]}
      />

      <H3>Step 6 — Run the decision quiz</H3>
      <Quiz />

      <H3>Step 7 — If you're a complete beginner</H3>
      <P>
        Taste-test free for three to four weeks: Google AI Essentials, the ML Crash Course, or audit
        DeepLearning.AI. If it sticks and you want a career outcome, move to a structured program
        with on-ramps and code review — LogicMojo or upGrad in India, Great Learning if weekends are
        your only window. If budget binds hard, start with PW Skills or GUVI and upgrade later.
      </P>
      <Pull>
        Never start with Stanford or Scaler as a true beginner. Both assume capability you don't have
        yet, and both will take your money while you discover that.
      </Pull>
    </Section>
  );
}
