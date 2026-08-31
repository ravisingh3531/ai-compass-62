import { Callout, P, Section } from "./prose";
import { FieldNote } from "./eeat";

const OPTIONS: { name: string; strength: string; why: string; detail: string }[] = [
  {
    name: "MIT Professional Education / xPRO",
    strength: "Elite brand, well-produced applied content, strong for leaders",
    why: "Premium US$ pricing for survey-level depth",
    detail:
      "The teaching is polished and the brand opens doors, particularly for managers and consultants who need to scope AI work credibly. But per dollar you receive more literacy than engineering: production RAG, fine-tuning and deployment are not where these programs concentrate. If your goal is a technical AI role rather than an executive vocabulary, the same money buys substantially more capability elsewhere on this page.",
  },
  {
    name: "Harvard CS50AI",
    strength: "Free, rigorous, brilliantly taught foundations",
    why: "A single foundations course, not a career program",
    detail:
      "CS50AI is one of the best free introductions to AI concepts — search, knowledge representation, learning — and the pedagogy is genuinely excellent. It simply isn't trying to be a career program: there's no GenAI production stack, no MLOps, no portfolio design and no career layer. Take it to build conceptual grounding, then get your Layer 5 and 6 depth somewhere else.",
  },
  {
    name: "Fast.ai — Practical Deep Learning",
    strength: "Free, brilliant top-down pedagogy, respected by practitioners",
    why: "Assumes real coding ability; no support or career mapping",
    detail:
      "Fast.ai gets you training working models faster than any other free resource, and its top-down method suits engineers who learn by doing. The catch: it assumes you can already code confidently, uses opinionated tooling that you'll eventually need to translate, and offers no doubt resolution, code review or career mapping. Superb as a supplement; unreliable as your only structure.",
  },
  {
    name: "Hugging Face courses (NLP, RL, Agents)",
    strength: "Free, current, practitioner-grade material on transformers and agents",
    why: "Topic modules rather than a program",
    detail:
      "These are closer to the 2026 frontier than most paid curricula, especially on transformers and agent patterns, and they're written by people shipping the libraries. But they assume Python and prior ML, have no sequencing across a full learning journey, and give you nothing on evaluation discipline, deployment or interview preparation. Strongly recommended as a supplement to any program here.",
  },
  {
    name: "NPTEL / SWAYAM AI & ML",
    strength: "Free, rigorous, genuine IIT faculty instruction",
    why: "Lecture-heavy with limited project support and no career pathway",
    detail:
      "For Indian learners who want real academic theory at effectively zero cost, NPTEL is remarkable value, and the IIT association carries weight in some hiring contexts. The format, though, is lecture-first: minimal hands-on scaffolding, little GenAI or MLOps content, and no career pathway. Excellent supplementary theory alongside a build-focused course — not a substitute for one.",
  },
  {
    name: "IIT Madras BS in Data Science",
    strength: "Outstanding value for a genuine online degree",
    why: "A multi-year degree, not a course; not primarily AI-focused",
    detail:
      "If you want an accredited Indian degree online at accessible fees, this is one of the best things to happen in Indian education in a decade. It also belongs in a different decision category: multi-year commitment, entry process, and a data-science emphasis rather than an AI engineering one. Compare it against degrees, not against six-month courses.",
  },
  {
    name: "Georgia Tech OMSCS (ML specialisation)",
    strength: "Accredited US master's at roughly US$8,000 total",
    why: "A 2–4 year degree with admissions — a different commitment class",
    detail:
      "On pure value per credential, OMSCS is arguably unbeatable: a recognised US master's for less than many Indian bootcamps charge. But you need admissions, 2–4 years of sustained effort alongside work, and tolerance for academic pacing that lags the GenAI frontier. If a degree is what you want, take it seriously; if employability within twelve months is the goal, it's the wrong instrument.",
  },
  {
    name: "Intellipaat AI & ML (IIT-affiliated variants)",
    strength: "IIT tag, deployment exposure, mid-tier Indian pricing",
    why: "Variable instructor and support consistency",
    detail:
      "Several Intellipaat cohorts I looked at delivered genuinely good deployment exposure at a fair Indian price, and the IIT affiliation helps at the screening stage. The problem is consistency: instructor quality and support responsiveness varied meaningfully between batches, and GenAI depth is moderate rather than frontier. Verify your specific batch's instructor and the dated GenAI module before paying.",
  },
  {
    name: "PW Skills — Data Science with GenAI",
    strength: "Structured Indian program in the ₹5,000–₹30,000 band",
    why: "Entry-level depth with community-heavy support",
    detail:
      "For price-sensitive learners this is often the best first ₹10,000 anyone spends on AI: real structure, real sequencing, and enough hands-on work to find out whether you enjoy the field. It is not a complete program — depth stops at entry level, support leans on community channels, and Layer 5 and 6 content is thin. Use it as an on-ramp, then upgrade.",
  },
  {
    name: "GUVI (IIT-M incubated)",
    strength: "Vernacular instruction; genuinely accessible for Tier-2/3 learners",
    why: "Foundational-to-intermediate ceiling",
    detail:
      "GUVI does something almost nobody else does well: teaches technical content in Indian languages, which removes a real barrier for capable learners outside metro English-medium environments. The ceiling is the limitation — foundational to intermediate, with minimal agent and MLOps content. An excellent starting point that you will need to build on.",
  },
  {
    name: "Udemy AI/GenAI bootcamps",
    strength: "₹500–₹3,000 per course, sometimes surprisingly current",
    why: "Quality varies wildly; no mentorship or accountability",
    detail:
      "The best Udemy AI courses are updated more often than some ₹2,00,000 programs, and at ₹1,000 a targeted course on LangGraph or vector databases is the most efficient top-up available anywhere. The risk is dispersion: no review, no accountability, no credential value, and freshness is a coin flip. Always check the last-updated date and the newest reviews, not the aggregate rating.",
  },
  {
    name: "AWS / Azure AI certifications",
    strength: "Authoritative for enterprise cloud roles where those clouds dominate",
    why: "Ecosystem-locked with limited modelling depth",
    detail:
      "Both are legitimate, recruiter-recognised credentials, and if your employer runs on AWS or Azure the certification is close to mandatory for internal AI work. Structurally, though, they share the Google path's limits: you learn one vendor's way of doing AI, with thin foundations and modelling depth. Google's path edged them here only on the volume of high-quality free learning material.",
  },
];

export function AlsoConsidered() {
  return (
    <Section
      id="also-considered"
      eyebrow="Section 8"
      title="Also Considered — 12 Strong Options That Didn't Make the Top 10 (And Why)"
    >
      <FieldNote
        label="Why the exclusions matter more than the winners"
        when="Shortlist trimmed March–June 2026"
        evidence="214 programmes logged, 34 audited in depth, 10 ranked"
      >
        I logged more than two hundred programmes and cut to thirty-four worth auditing properly. The
        twelve below are ones I genuinely liked and still cut — I publish them because a ranking that
        only shows winners is a sales page. In several cases the reason is not quality at all: the
        programme teaches 2022's syllabus very well, and 2026 hiring asks about retrieval, agents and
        evaluation.
      </FieldNote>
      <P>
        Exclusion is not condemnation. Publishing the near-misses with real reasons is how you can
        tell whether an evaluation was broad or sponsored — so here are twelve options I looked at
        closely, what each genuinely does well, and the specific reason it missed the ranked ten.
      </P>
      <div className="mt-8 space-y-4">
        {OPTIONS.map((o) => (
          <div key={o.name} className="rounded-lg border border-rule bg-paper p-5 shadow-card">
            <h3 className="font-display text-lg font-semibold text-ink">{o.name}</h3>
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              <p className="text-[0.88rem] leading-relaxed">
                <span className="eyebrow mr-2">Strength</span>
                {o.strength}
              </p>
              <p className="text-[0.88rem] leading-relaxed">
                <span className="eyebrow mr-2 text-warn">Why it missed</span>
                {o.why}
              </p>
            </div>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-foreground/90">{o.detail}</p>
          </div>
        ))}
      </div>
      <Callout tone="good" label="Read this before dismissing any of them">
        Any option above can be the right answer for a specific reader — a Tier-2 learner who needs
        vernacular teaching, a manager who needs an MIT-branded vocabulary, an engineer who wants an
        accredited master's. This ranking optimises for <strong>employable AI capability within
        twelve months</strong>, which is one goal among several legitimate ones.
      </Callout>
    </Section>
  );
}
