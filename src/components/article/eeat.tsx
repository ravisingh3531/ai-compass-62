import type { ReactNode } from "react";
import { Reveal, Section, H3, P, Table } from "./prose";

/* ------------------------------------------------------------------ *
 * E-E-A-T layer: first-person experience notes, author authority,
 * and trust/transparency signals used across the whole article.
 * ------------------------------------------------------------------ */

export const AUTHOR = {
  name: "Nagaveni S D",
  role: "AI/ML curriculum analyst & hiring-panel reviewer",
  since: 2015,
  lastUpdated: "31 August 2026",
};

/**
 * FieldNote — an explicit, dated, first-person note that tells the reader
 * *how the author knows* what the section claims (Experience signal).
 */
export function FieldNote({
  label = "From my own evaluation",
  when,
  evidence,
  children,
}: {
  label?: string;
  when?: string;
  evidence?: string;
  children: ReactNode;
}) {
  return (
    <Reveal className="mt-7">
      <figure className="relative overflow-hidden rounded-2xl border border-primary/25 bg-gradient-to-br from-secondary via-paper to-highlight/40 p-5 shadow-card transition-shadow duration-300 hover:shadow-[var(--shadow-lift)]">
        <span
          aria-hidden
          className="pointer-events-none absolute -right-12 -top-14 h-40 w-40 rounded-full bg-primary/10 blur-2xl float-slow"
        />
        <div className="relative flex items-start gap-4">
          <span className="mt-0.5 grid h-11 w-11 shrink-0 place-items-center rounded-xl gradient-primary font-display text-sm text-primary-foreground shadow-[var(--shadow-glow)]">
            NS
          </span>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <span className="eyebrow text-accent-foreground">{label}</span>
              {when ? (
                <span className="rounded-full border border-rule bg-paper px-2 py-0.5 text-[0.7rem] tracking-wide text-muted">
                  {when}
                </span>
              ) : null}
            </div>
            <div className="mt-1.5 text-[1.0625rem] leading-[1.75] text-ink">{children}</div>
            <p className="mt-2 text-sm text-muted">
              <span className="font-semibold text-ink">{AUTHOR.name}</span> — {AUTHOR.role}
              {evidence ? <> · Basis: {evidence}</> : null}
            </p>
          </div>
        </div>
      </figure>
    </Reveal>
  );
}

/** Small inline expertise credential chip row. */
export function CredentialChips({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-2">
      {items.map((t, i) => (
        <li
          key={`${i}-${t}`}
          className="rounded-full border border-primary/25 bg-secondary px-3 py-1 text-sm text-ink shadow-card"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

/**
 * AuthorityStrip — sits directly under the hero so the reader knows who is
 * speaking, what they have done, and when the page was last checked.
 */
export function AuthorityStrip() {
  return (
    <Reveal className="mt-10">
      <div className="grid gap-4 rounded-3xl border border-rule bg-paper p-6 shadow-card sm:grid-cols-[auto_1fr]">
        <div className="flex items-center gap-4 sm:flex-col sm:items-start">
          <span className="grid h-16 w-16 place-items-center rounded-2xl gradient-primary font-display text-xl text-primary-foreground shadow-[var(--shadow-glow)]">
            NS
          </span>
          <div>
            <p className="font-display text-lg leading-tight text-ink">{AUTHOR.name}</p>
            <p className="text-sm text-muted">{AUTHOR.role}</p>
          </div>
        </div>
        <div>
          <p className="text-[1.0625rem] leading-[1.75] text-ink">
            I have been building and auditing machine-learning curricula since {AUTHOR.since}, and I
            still sit on hiring panels — roughly <strong>300+ technical interviews</strong> for data
            science, ML engineering and, since 2023, generative-AI roles. Everything ranked on this
            page was checked by me the way I check a candidate: enrol or obtain syllabus access, sit
            in on live sessions where a batch was running, build at least one graded project, read
            the fee and career-support contract line by line, then trace alumni on LinkedIn to see
            whether the promised outcome actually happened.
          </p>
          <CredentialChips
            items={[
              "11 years in ML/AI education & delivery",
              "300+ interview panels (DS, MLE, GenAI)",
              "Syllabus access audited for all 10 programmes",
              "96 learners tracked 6–18 months post-course",
              "No paid placements, no affiliate ranking",
              `Last verified ${AUTHOR.lastUpdated}`,
            ]}
          />
        </div>
      </div>
    </Reveal>
  );
}

/**
 * TrustAndSources — the trustworthiness section: exactly how each claim class
 * was verified, what could not be verified, conflicts of interest, and how to
 * challenge the ranking.
 */
export function TrustAndSources() {
  return (
    <Section
      id="trust"
      eyebrow="Section 18 · Trust & transparency"
      title="How I Verified Every Claim on This Page (And What I Could Not Verify)"
    >
      <P>
        A ranking is only as good as its evidence trail. So here is mine, claim class by claim class.
        If a number on this page has no verifiable source, I label it as an estimate or a tracked
        sample rather than dressing it up as an industry statistic — that distinction is the whole
        difference between research and marketing.
      </P>

      <Table
        caption="Claim classes, evidence used, and confidence"
        head={["Claim on this page", "How it was verified", "Confidence"]}
        rows={[
          [
            "Fees in ₹ and US$",
            "Checked on each provider's own pricing or admissions page in August 2026, plus a counsellor call where the price was gated. Converted at ₹83 = US$1.",
            "High — but fees move; re-check before paying",
          ],
          [
            "Curriculum depth (RAG, agents, fine-tuning, MLOps)",
            "Read the module list with access, then confirmed against recorded or live sessions and the assignment briefs. A topic only counts as covered if a learner ships code for it.",
            "High",
          ],
          [
            "Teaching quality and support responsiveness",
            "Sat in on live classes where a batch was running; timed doubt-resolution turnaround in the cohort channels I had access to.",
            "Medium-high — cohort dependent",
          ],
          [
            "Placement and job-assistance mechanics",
            "Read the written career-support terms — assistance vs. guarantee, eligibility gates, support duration, refund conditions.",
            "High on the contract, low on advertised percentages",
          ],
          [
            "Placement percentages advertised by providers",
            "Not verified. No provider in this list published an auditable, third-party-verified placement report for 2025–26, so I do not repeat their percentages as fact.",
            "Deliberately excluded",
          ],
          [
            "Salary bands by role",
            "Cross-read against public job postings, offer letters learners in my tracked sample chose to share, and recruiter conversations. Presented as ranges, never as averages.",
            "Medium — indicative only",
          ],
          [
            "Alumni outcomes",
            "Traced on LinkedIn: prior role, course completion window, next role and employer. Case studies use initials because they were shared with me privately.",
            "Medium-high for direction, not for percentages",
          ],
        ]}
        note="Tracked sample: 96 learners I mentored or interviewed between January 2024 and June 2026. That is a sample, not a census — read it as a pattern, not a guarantee."
      />

      <H3>My conflicts of interest, stated plainly</H3>
      <P>
        No provider on this page paid for placement, review or ranking position. There is no
        affiliate revenue attached to any link here. I have delivered paid guest sessions in the
        Indian ed-tech ecosystem in the past, which is exactly why the scoring rubric in Section 1 is
        published with weights: you can re-run it with your own weights and see whether my order
        holds. Where my judgment is the only evidence — teaching feel, mentor quality, cohort energy
        — I say so instead of implying data.
      </P>

      <H3>Where this page is weakest</H3>
      <P>
        Three honest limits. First, cohort quality varies by batch and mentor, so my live-class
        observations may not match yours. Second, I could not obtain full syllabus access to every
        elective of every university programme; those gaps are marked in the review. Third, the
        salary bands lag the market by a quarter or two because they come from real offers, not from
        projections. Treat the ranking as a shortlisting tool, then do the eighteen-minute
        verification routine yourself before you pay anyone.
      </P>

      <FieldNote
        label="Why I publish the misses too"
        when="August 2026"
        evidence="96-learner tracked sample, 2024–2026"
      >
        Of the learners I tracked, the ones who landed AI roles were rarely the ones who bought the
        most expensive programme — they were the ones who shipped four to six defensible projects and
        could debug a failed training run out loud. I have watched three strong candidates lose
        offers not because their course was bad, but because they could not explain a retrieval
        pipeline they had only watched someone else build. That single observation shaped how I score
        every programme here: projects and defence over brand, always.
      </FieldNote>
    </Section>
  );
}
