import { Callout, Checklist, H3, P, Pull, Section, Table } from "./prose";
import { FieldNote } from "./eeat";

export function HowToChoose() {
  return (
    <Section id="how-to-choose" eyebrow="Section 10" title="How to Choose the Right AI Course for You">
      <FieldNote
        label="The advice I give in every mentoring call"
        when="Pattern across 96 tracked learners"
        evidence="Learners mentored or interviewed, 2024–2026"
      >
        Almost every learner who wrote to me regretting a purchase had chosen in the wrong order: they
        picked a brand, then tried to fit their goal, budget and weekly hours around it. The ones who
        succeeded picked in this order — goal, honest weekly hours, market they want to work in,
        budget — and only then looked at names. I now refuse to recommend a programme to anyone until
        they tell me how many hours they can genuinely protect on a bad week, because that single
        number predicts completion better than any pillar in my rubric.
      </FieldNote>
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
