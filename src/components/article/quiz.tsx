import { useEffect, useMemo, useState } from "react";
import { Reveal, Section, P } from "./prose";

type Opt = { v: string; label: string };
type Q = { key: string; q: string; hint: string; options: Opt[] };

const QUESTIONS: Q[] = [
  {
    key: "level",
    q: "What is your current experience level?",
    hint: "Be honest — this drives how much foundational teaching you need.",
    options: [
      { v: "zero", label: "Complete beginner — no AI/coding experience" },
      { v: "python", label: "Beginner — basic Python" },
      { v: "ml", label: "Some ML knowledge" },
      { v: "pro-noai", label: "Working professional — no AI experience" },
      { v: "pro-ai", label: "Experienced AI professional" },
    ],
  },
  {
    key: "edu",
    q: "What is your educational background?",
    hint: "Non-engineering backgrounds need stronger ramp-up modules, not easier ones.",
    options: [
      { v: "eng", label: "Engineering / CS" },
      { v: "sci", label: "Science / Maths" },
      { v: "com", label: "Commerce" },
      { v: "arts", label: "Arts / Humanities" },
      { v: "other", label: "Other" },
    ],
  },
  {
    key: "goal",
    q: "What is your primary goal?",
    hint: "A first job and a promotion are bought with different things.",
    options: [
      { v: "firstjob", label: "Get my first AI/ML job" },
      { v: "switch", label: "Switch career to AI or GenAI" },
      { v: "promo", label: "Upskill for a promotion" },
      { v: "build", label: "Build AI/GenAI projects & products" },
      { v: "inrole", label: "Learn AI for my current role" },
    ],
  },
  {
    key: "budget",
    q: "What is your budget range?",
    hint: "Fees converted at ₹83 = US$1. Exclude cloud and LLM API credits.",
    options: [
      { v: "u15", label: "Under ₹15K (~US$180)" },
      { v: "15to50", label: "₹15K–₹50K (~US$180–600)" },
      { v: "50to1l", label: "₹50K–₹1L (~US$600–1,200)" },
      { v: "1lplus", label: "₹1L+ (~US$1,200+)" },
    ],
  },
  {
    key: "placement",
    q: "How important is placement support to you?",
    hint: "\"Assistance\" and \"guarantee\" are different products — see Section 5.",
    options: [
      { v: "must", label: "Must-have" },
      { v: "nice", label: "Nice-to-have" },
      { v: "no", label: "Not important" },
    ],
  },
  {
    key: "mode",
    q: "What is your preferred learning mode?",
    hint: "Live cohorts finish; self-paced libraries mostly don't.",
    options: [
      { v: "live", label: "Live online" },
      { v: "self", label: "Self-paced" },
      { v: "hybrid", label: "Hybrid" },
      { v: "class", label: "Classroom" },
    ],
  },
  {
    key: "hours",
    q: "How much time can you dedicate weekly?",
    hint: "Under 10 hours a week, long cohorts become expensive guilt.",
    options: [
      { v: "5to10", label: "5–10 hrs" },
      { v: "10to20", label: "10–20 hrs" },
      { v: "20plus", label: "20+ hrs" },
    ],
  },
  {
    key: "found",
    q: "Do you need foundational Python & ML coverage before advanced AI/GenAI?",
    hint: "Most GenAI-only bootcamps quietly assume you don't.",
    options: [
      { v: "scratch", label: "Yes — from scratch" },
      { v: "partial", label: "Partial — I know the basics" },
      { v: "none", label: "No — already comfortable" },
    ],
  },
  {
    key: "geo",
    q: "Where do you want to study or work?",
    hint: "Credential value is geographic; portfolio value is not.",
    options: [
      { v: "india", label: "India" },
      { v: "global", label: "Global (US / EU / Gulf)" },
      { v: "remote", label: "Remote-first" },
      { v: "open", label: "Open to all" },
    ],
  },
];

type Result = {
  course: string;
  rank: number;
  href: string;
  why: string[];
  beginner: string;
  modules: string[];
  placement: string;
  price: string;
  cta: string;
  alt: string;
};

const COURSES: Record<string, Result> = {
  logicmojo: {
    course: "LogicMojo — AI & Machine Learning Course",
    rank: 1,
    href: "https://logicmojo.com/success-story",
    why: [],
    beginner:
      "Starts at Python syntax and intuition-first mathematics before any ML, with prerequisite onboarding and structured catch-up sessions — the single most beginner-tolerant path in this ranking that still ends at production GenAI.",
    modules: [
      "Python + intuition-first maths & statistics",
      "Classical ML with scikit-learn",
      "Deep learning in PyTorch (incl. debugging failed runs)",
      "NLP, Transformers & embeddings",
      "Prompt engineering & LLM APIs",
      "Production RAG: chunking, hybrid retrieval, re-ranking, evals",
      "LangChain / LangGraph, vector databases",
      "Fine-tuning: SFT, LoRA/QLoRA, DPO",
      "AI agents: ReAct, memory, CrewAI, AutoGen, MCP",
      "MLOps + LLMOps: MLflow, FastAPI, Docker, monitoring",
    ],
    placement:
      "Placement-first pipeline: portfolio review, AI-role-specific mock interviews, project-defence drills, resume and LinkedIn workshops, and career counselling. Job assistance — not a written placement guarantee. Alumni transitions are published at logicmojo.com/success-story.",
    price: "Mid band (₹50K–₹1L / ~US$600–1,200), EMI available, no bond, no ISA",
    cta: "Read verified LogicMojo success stories",
    alt: "If IST evening batches are impossible, look at Great Learning (weekend live) or Udacity (reviewed self-paced).",
  },
  scaler: {
    course: "Scaler — Data Science, ML & AI Program",
    rank: 3,
    href: "#rank-3",
    why: [],
    beginner:
      "Beginner-friendly in the Indian product-company sense: a long ramp, structured maths, TA-supported doubt clearing — but it assumes you can sustain a year-plus commitment.",
    modules: [
      "Python, DSA-adjacent problem solving, SQL",
      "Statistics & classical ML",
      "Deep learning, NLP, computer vision",
      "LLMs, RAG and GenAI electives",
      "Deployment basics and system design for ML",
    ],
    placement:
      "The largest placement operation among Indian options here: dedicated career team, referral network, repeated mock-interview rounds, resume and LinkedIn reviews, and multi-month post-course job support. Verify current placement percentages and partner lists in writing.",
    price: "Premium (₹1L+ / US$1,200+), EMI and deferred options",
    cta: "See the full Scaler review",
    alt: "If the fee is out of range, LogicMojo delivers comparable GenAI depth in the mid band.",
  },
  upgrad: {
    course: "upGrad — PG Programme in ML & AI (IIIT-Bangalore)",
    rank: 5,
    href: "#rank-5",
    why: [],
    beginner:
      "University-paced with foundational bridge modules; good for non-engineering graduates who need an academic scaffold and a recognised certificate.",
    modules: [
      "Python & statistics bridge",
      "Machine learning, deep learning",
      "NLP and computer vision electives",
      "GenAI/LLM modules (verify current depth)",
      "Capstone with faculty guidance",
    ],
    placement:
      "Career-services layer with resume workshops, interview prep and a hiring-partner portal. Read the terms: assistance is scoped by eligibility rules on attendance and scores.",
    price: "₹1L+ / US$1,200+",
    cta: "See the full upGrad review",
    alt: "For hands-on GenAI over credentials, LogicMojo ranks higher on curriculum depth.",
  },
  greatlearning: {
    course: "Great Learning — PGP-AIML (UT Austin / Great Lakes)",
    rank: 6,
    href: "#rank-6",
    why: [],
    beginner:
      "Weekend live mentor sessions and a gentle on-ramp make this the most working-professional-tolerant schedule in the ranking.",
    modules: [
      "Python foundations, statistics",
      "ML, deep learning, NLP, CV",
      "GenAI modules incl. prompt engineering and LLM apps",
      "Multiple guided projects + capstone",
    ],
    placement:
      "Career support with resume building, LinkedIn optimisation, mock interviews and a job board; outcomes vary by cohort and city — ask for cohort-level data, not lifetime averages.",
    price: "₹1L+ / US$1,200+",
    cta: "See the full Great Learning review",
    alt: "Cheaper depth: LogicMojo. Stronger brand for the US: Stanford Online.",
  },
  dlai: {
    course: "DeepLearning.AI — ML + Deep Learning Specializations",
    rank: 2,
    href: "#rank-2",
    why: [],
    beginner:
      "The best-taught fundamentals on the internet, and genuinely gentle — but you supply the deadlines, the projects and the job search yourself.",
    modules: [
      "Supervised & unsupervised ML",
      "Neural networks, tuning, CNNs, sequence models",
      "Short courses: prompt engineering, RAG, agents, LangChain",
    ],
    placement: "None. No career services, no mock interviews, no hiring partners.",
    price: "Subscription (~₹4K/mo / US$49/mo); financial aid available",
    cta: "See the full DeepLearning.AI review",
    alt: "Pair it with a placement-supported cohort if a job is the actual goal.",
  },
  stanford: {
    course: "Stanford Online — AI Professional Program",
    rank: 4,
    href: "#rank-4",
    why: [],
    beginner:
      "Not beginner-friendly. It expects mathematical maturity and comfortable programming from day one.",
    modules: [
      "Graduate-level ML and deep learning",
      "NLP with deep learning",
      "Reinforcement learning, decision-making electives",
    ],
    placement: "No placement services. You are buying rigour and a brand signal.",
    price: "US$1,750+ per course (~₹1.45L+)",
    cta: "See the full Stanford review",
    alt: "Beginners should build foundations first — DeepLearning.AI or LogicMojo — then come here.",
  },
  udacity: {
    course: "Udacity — AI & ML Nanodegrees",
    rank: 7,
    href: "#rank-7",
    why: [],
    beginner:
      "Self-paced, but with human project reviewers — the best version of self-paced for someone who needs feedback more than lectures.",
    modules: [
      "Python for AI, ML fundamentals",
      "Deep learning with PyTorch",
      "GenAI Nanodegree: LLMs, RAG, fine-tuning basics",
      "Reviewed portfolio projects",
    ],
    placement: "Career resources and resume/LinkedIn reviews; no hiring-partner pipeline.",
    price: "~US$249/mo (~₹20K/mo)",
    cta: "See the full Udacity review",
    alt: "If you need accountability and interviews, choose a live cohort instead.",
  },
  google: {
    course: "Google — AI/ML Learning Path + Professional ML Engineer",
    rank: 8,
    href: "#rank-8",
    why: [],
    beginner:
      "Excellent for cloud-adjacent professionals; weak as a first exposure to programming or maths.",
    modules: [
      "TensorFlow/Keras, Vertex AI",
      "MLOps on GCP, pipelines and deployment",
      "GenAI on Vertex: prompt design, grounding, agents",
    ],
    placement: "None. It is a vendor credential, not a program.",
    price: "Mostly free content; exam US$200 (~₹16.6K)",
    cta: "See the full Google review",
    alt: "Add LogicMojo or DeepLearning.AI for framework-agnostic depth.",
  },
  ibm: {
    course: "IBM — AI Engineering Professional Certificate",
    rank: 9,
    href: "#rank-9",
    why: [],
    beginner:
      "Cheap, structured and hands-on — the best low-budget way to touch many frameworks quickly.",
    modules: [
      "Python, scikit-learn, Keras, PyTorch",
      "Deep learning and CV basics",
      "GenAI and LLM app modules (breadth over depth)",
    ],
    placement: "None beyond a certificate and a Coursera career resource hub.",
    price: "Subscription (~₹4K/mo / US$49/mo)",
    cta: "See the full IBM review",
    alt: "Use it as a paid trial before committing to a ₹1L program.",
  },
  simplilearn: {
    course: "Simplilearn — PGP in AI & ML (Purdue / IBM)",
    rank: 10,
    href: "#rank-10",
    why: [],
    beginner: "Broad and beginner-tolerant, but the depth ceiling is the lowest of the paid cohorts here.",
    modules: [
      "Python, statistics, ML",
      "Deep learning, NLP",
      "GenAI modules (verify recency before paying)",
    ],
    placement:
      "Job-assistance package with resume support and a job board; ask specifically which employers hired from your city and cohort in the last two quarters.",
    price: "₹1L+ / US$1,200+ (heavily discounted often)",
    cta: "See the full Simplilearn review",
    alt: "At this budget, Great Learning or Scaler give more; at lower budget, LogicMojo gives more depth.",
  },
};

function decide(a: Record<string, string>): Result {
  const pick = (k: keyof typeof COURSES, why: string[]) => ({ ...COURSES[k]!, why });
  const budget = a['budget'];
  const placement = a['placement'];
  const mode = a['mode'];
  const goal = a['goal'];
  const level = a['level'];
  const geo = a['geo'];
  const hours = a['hours'];
  const found = a['found'];

  const jobGoal = goal === "firstjob" || goal === "switch";
  const beginner = level === "zero" || level === "python" || found === "scratch";

  // Budget-constrained paths first — recommending a ₹1L program to a ₹15K budget is useless.
  if (budget === "u15") {
    if (beginner)
      return pick("dlai", [
        "Under ₹15K, the honest answer is the best-taught fundamentals rather than a placement package you can't afford.",
        "Andrew Ng's sequencing is the gentlest rigorous on-ramp for a complete beginner.",
        "Move to LogicMojo once you've confirmed you enjoy the work and can budget the mid band.",
      ]);
    return pick("ibm", [
      "Lowest cost per hands-on framework hour in this ranking.",
      "You already have some coding footing, so breadth-first practice pays off immediately.",
    ]);
  }

  if (budget === "15to50") {
    if (mode === "self")
      return pick("udacity", [
        "Reviewed self-paced projects are the only self-paced format that reliably produces defensible work.",
        "Fits a ₹15K–₹50K monthly-subscription shape rather than a lump-sum cohort fee.",
      ]);
    return pick("dlai", [
      "In this band you're buying teaching quality, not career services — and this is the best teaching available.",
      "Stack it with free Hugging Face and Kaggle work to build the portfolio yourself.",
    ]);
  }

  // Mid band: the ranking's #1 is scored precisely for this profile.
  if (budget === "50to1l") {
    if (mode === "self" )
      return pick("udacity", [
        "Self-paced preference plus this budget points to human-reviewed Nanodegree projects.",
        "If you can tolerate live sessions, LogicMojo gives materially more GenAI depth for the same money.",
      ]);
    return pick("logicmojo", [
      "This is the exact profile the #1 pick was scored for: mid-band budget, structured live teaching, full seven-layer coverage.",
      beginner
        ? "You need foundations first — Python and intuition-first maths come before any ML here, with prerequisite onboarding."
        : "Your existing footing lets you move faster through foundations and spend the back half on RAG, fine-tuning and agents.",
      placement === "must"
        ? "Placement-first structure: mock interviews, project-defence drills, resume and LinkedIn workshops, career counselling."
        : "Even without needing placement help, the human code review across 10–15 projects is the differentiator.",
      geo === "global" || geo === "remote"
        ? "IST evening batches work well from the Gulf, Europe and Southeast Asia; the Americas are the weak spot."
        : "Strongest recognition in India and IST-adjacent remote hiring.",
    ]);
  }

  // ₹1L+
  if (goal === "promo" || goal === "inrole") {
    if (geo === "global")
      return pick("stanford", [
        "When the credential is the purchase and the market is the US or EU, buy the brand that screening actually recognises.",
        "Expect graduate-level rigour and no career services.",
      ]);
    return pick("upgrad", [
      "For internal promotion processes in India, the IIIT-Bangalore association is the signal that travels.",
      "University pacing suits part-time study alongside a demanding job.",
    ]);
  }
  if (mode === "self")
    return pick("udacity", [
      "You have budget and want self-paced — reviewed projects beat an unreviewed library every time.",
    ]);
  if (mode === "class" || hours === "5to10")
    return pick("greatlearning", [
      "Weekend live mentor sessions are the only format that survives a 5–10 hour week.",
      "Foundations are covered from Python upward, then GenAI modules on top.",
    ]);
  if (jobGoal && placement === "must" && (geo === "india" || geo === "open"))
    return pick("scaler", [
      "First AI job in India, placement as a must-have, premium budget: this is the largest placement operation here.",
      "Expect a year-plus commitment and repeated mock-interview rounds.",
      "If you want the same GenAI depth for a third of the fee, compare against LogicMojo's #1 review.",
    ]);
  if (goal === "build")
    return pick("logicmojo", [
      "Product-building goals reward depth over branding — production RAG, agents, fine-tuning and deployment are all hands-on here.",
      "You leave with a deployed, monitored service and a learner-designed capstone you can defend.",
    ]);
  return pick("logicmojo", [
    "Your answers point to a structured live program with full-stack AI coverage rather than a credential purchase.",
    "Foundations, GenAI and MLOps in one arc, with human code review throughout.",
  ]);
}

function ResultModal({ r, onClose }: { r: Result; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Your recommended AI course"
      className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-ink/45 p-4 backdrop-blur-sm sm:items-center"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="quiz-pop relative my-8 w-full max-w-2xl overflow-hidden rounded-3xl border border-primary/25 bg-paper shadow-[var(--shadow-lift)]"
      >
        <div className="gradient-primary relative px-6 py-6 text-primary-foreground sm:px-8">
          <span aria-hidden className="pointer-events-none absolute -right-8 -top-10 h-40 w-40 rounded-full bg-white/15 blur-2xl float-slow" />
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] opacity-90">
            Your best-fit AI course for 2026
          </p>
          <h3 className="mt-2 font-display text-2xl font-bold leading-tight sm:text-3xl">{r.course}</h3>
          <div className="mt-3 flex flex-wrap gap-2 text-[0.78rem]">
            <span className="rounded-full bg-white/20 px-3 py-1 font-semibold">Ranked #{r.rank} of 10</span>
            <span className="rounded-full bg-white/20 px-3 py-1">{r.price}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close recommendation"
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-lg leading-none transition hover:bg-white/35"
          >
            ×
          </button>
        </div>

        <div className="px-6 py-6 sm:px-8">
          <p className="eyebrow">Why this fits your answers</p>
          <ul className="mt-2 space-y-2">
            {r.why.map((w) => (
              <li key={w} className="flex gap-2.5 text-[0.95rem] leading-relaxed">
                <span aria-hidden className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{w}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-good/30 bg-good/8 p-4">
              <p className="eyebrow">Beginner suitability</p>
              <p className="mt-1.5 text-[0.9rem] leading-relaxed">{r.beginner}</p>
            </div>
            <div className="rounded-2xl border border-primary/25 bg-secondary p-4">
              <p className="eyebrow">Placement / job assistance</p>
              <p className="mt-1.5 text-[0.9rem] leading-relaxed">{r.placement}</p>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-rule bg-muted/50 p-4">
            <p className="eyebrow">Key AI / ML / GenAI modules</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {r.modules.map((m) => (
                <span
                  key={m}
                  className="rounded-full border border-primary/20 bg-paper px-2.5 py-1 text-[0.78rem] text-foreground/85"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>

          <p className="mt-4 text-[0.85rem] leading-relaxed text-muted-foreground">
            <strong className="text-ink">Second option:</strong> {r.alt}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a
              href={r.href}
              target={r.href.startsWith("http") ? "_blank" : undefined}
              rel={r.href.startsWith("http") ? "noreferrer" : undefined}
              className="gradient-primary inline-flex items-center gap-2 rounded-xl px-5 py-3 text-[0.9rem] font-semibold text-primary-foreground shadow-card transition hover:shadow-[var(--shadow-glow)]"
            >
              {r.cta} <span aria-hidden>→</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-primary/30 px-5 py-3 text-[0.9rem] font-semibold text-primary transition hover:bg-secondary"
            >
              Retake the quiz
            </button>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
            This recommendation is editorial judgment against the criteria in Section 1, not a paid
            placement. Verify fees, batch timings and career-support terms in writing before paying.
          </p>
        </div>
      </div>
    </div>
  );
}

export function CourseQuiz() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [open, setOpen] = useState(false);
  const answered = Object.keys(answers).length;
  const pct = Math.round((answered / QUESTIONS.length) * 100);
  const result = useMemo(
    () => (answered === QUESTIONS.length ? decide(answers) : null),
    [answers, answered],
  );

  return (
    <Section id="quiz" eyebrow="Interactive" title="AI Course Finder Quiz 2026 — Which of the 10 Fits You?">
      <P>
        Nine questions, thirty seconds, one recommendation. The logic is the same weighting used to
        rank the ten programs — budget realism first, then goal, foundations, format and geography.
        Nothing is submitted anywhere; the result is computed in your browser.
      </P>

      <Reveal className="quiz-card mt-8 overflow-hidden rounded-3xl border border-primary/25 bg-gradient-to-br from-secondary via-paper to-secondary shadow-card">
        <div className="border-b border-rule/70 bg-paper/70 px-5 py-4 sm:px-7">
          <div className="flex items-center justify-between gap-4">
            <p className="font-display text-lg font-semibold text-ink">Find your best-fit AI course</p>
            <span className="font-mono text-[0.78rem] text-primary">
              {answered}/{QUESTIONS.length}
            </span>
          </div>
          <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="gradient-primary h-full rounded-full transition-all duration-500"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>

        <div className="space-y-6 px-5 py-6 sm:px-7">
          {QUESTIONS.map((q, qi) => (
            <fieldset key={q.key} className="rounded-2xl border border-rule bg-paper/80 p-5 transition-shadow duration-300 hover:shadow-card">
              <legend className="flex items-center gap-2 px-1">
                <span className="gradient-primary flex h-6 w-6 items-center justify-center rounded-lg font-mono text-[0.65rem] font-bold text-primary-foreground">
                  {String(qi + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-[1.02rem] font-semibold text-ink">{q.q}</span>
              </legend>
              <p className="mt-1 text-[0.82rem] text-muted-foreground">{q.hint}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {q.options.map((o) => {
                  const active = answers[q.key] === o.v;
                  return (
                    <button
                      key={o.v}
                      type="button"
                      aria-pressed={active}
                      onClick={() => setAnswers((s) => ({ ...s, [q.key]: o.v }))}
                      className={
                        "rounded-full border px-3.5 py-2 text-[0.84rem] transition-all duration-200 hover:-translate-y-0.5 " +
                        (active
                          ? "gradient-primary border-primary text-primary-foreground shadow-card"
                          : "border-rule bg-paper text-foreground hover:border-primary/60")
                      }
                    >
                      {o.label}
                    </button>
                  );
                })}
              </div>
            </fieldset>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3 border-t border-rule/70 bg-paper/70 px-5 py-5 sm:px-7">
          <button
            type="button"
            disabled={!result}
            onClick={() => setOpen(true)}
            className={
              "inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-[0.92rem] font-semibold transition-all duration-300 " +
              (result
                ? "gradient-primary text-primary-foreground shadow-card hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)]"
                : "cursor-not-allowed border border-rule bg-muted text-muted-foreground")
            }
          >
            {result ? "Show my recommended course" : `Answer ${QUESTIONS.length - answered} more question(s)`}
            {result ? <span aria-hidden>→</span> : null}
          </button>
          {answered > 0 ? (
            <button
              type="button"
              onClick={() => setAnswers({})}
              className="text-[0.85rem] text-primary underline underline-offset-4"
            >
              Reset answers
            </button>
          ) : null}
        </div>
      </Reveal>

      {open && result ? <ResultModal r={result} onClose={() => setOpen(false)} /> : null}
    </Section>
  );
}
