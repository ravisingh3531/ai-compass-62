import type { ReactNode } from "react";
import { Verify } from "./prose";

export type Extra = {
  beginner: { verdict: string; prereq: string; ramp: string[] };
  methodology: string;
  support: string[];
  mentorship: string;
  projects: { capstone: string; industry: string[] };
  depth: [string, string][];
  readiness: string;
  placement: {
    model: string;
    partners: string;
    percentage: ReactNode;
    mocks: string;
    resume: string;
    counselling: string;
    duration: string;
  };
  feedback: { who: string; before: string; role: string; company: string; salary: string; note: string }[];
};

const LM_SS = "https://logicmojo.com/success-story";

export const EXTRAS: Record<number, Extra> = {
  1: {
    beginner: {
      verdict:
        "Strongest true-beginner path in this ranking that still ends at production GenAI. Commerce, arts and non-CS engineering graduates complete it regularly because the ramp is real, not rhetorical.",
      prereq:
        "No prior AI, ML or data-science background required. Basic computer literacy and comfort with logical problem solving is enough; Python is taught from syntax upward.",
      ramp: [
        "Prerequisite onboarding before Module 1 so absolute beginners start level with engineers.",
        "Intuition-first mathematics — regularisation, gradients and probability explained before the notation, not instead of it.",
        "Structured catch-up sessions for the Week-3 crash, the single most common quit point.",
        "Batch deferral or transfer if work explodes, instead of forfeiting the fee.",
      ],
    },
    methodology:
      "Strictly sequential: Python → statistics with intuition → classical ML (scikit-learn) → deep learning in PyTorch including debugging failed training runs → NLP and Transformers → prompt engineering → RAG → fine-tuning → agents → evaluation and guardrails → MLOps/LLMOps → capstone. Nothing advanced is introduced before its prerequisite, and each module ends in a build, not a quiz.",
    support: [
      "Live in-session doubt resolution with the instructor — not a forum ticket queue.",
      "Mentor channels between sessions for blocked learners.",
      "Human code review across the full 10–15 project arc, with rework expected.",
      "Cohort peer groups and accountability check-ins; progress tracking flags slippage early.",
      "All sessions recorded, with structured catch-up rather than 'watch the replay'.",
    ],
    mentorship:
      "Group live mentorship plus 1-on-1 code review and project-defence sessions in the career phase. Named instructors, not rotating TAs.",
    projects: {
      capstone:
        "Learner-designed capstone: you scope the problem, pick the architecture, defend the trade-offs, and deploy it with monitoring. This is the artefact interviewers dissect.",
      industry: [
        "EDA on genuinely messy real-world data",
        "End-to-end ML system with feature pipeline and model comparison",
        "Image classifier and object-detection build",
        "Transformer text classifier trained and evaluated",
        "Semantic search over a real corpus with a vector database",
        "Production-style RAG app: chunking, hybrid retrieval, re-ranking, citations, eval harness",
        "LoRA fine-tune benchmarked against the base model with cost accounting",
        "Tool-using agent, then a multi-agent workflow with MCP integration",
        "Deployed FastAPI + Docker service with MLflow tracking and monitoring",
      ],
    },
    depth: [
      ["Python foundations", "From syntax to clean, testable code — taught, not assumed"],
      ["Statistics & maths", "Intuition-first, applied to model behaviour rather than exam problems"],
      ["Machine learning", "Full scikit-learn arc with model selection and honest error analysis"],
      ["Deep learning", "PyTorch end to end, including diagnosing failed training runs"],
      ["NLP", "Tokenisation, embeddings, Transformers, fine-tuned classifiers"],
      ["Computer vision", "Classification and object detection (applied depth, not research depth)"],
      ["Transformers & LLMs", "Attention, context windows, open vs. closed weights, local inference with Ollama"],
      ["Prompt engineering", "Structured prompting, schemas, decomposition, cost/latency trade-offs"],
      ["RAG", "Production depth: chunking strategy, hybrid retrieval, re-ranking, citations, evaluation"],
      ["LangChain / LangGraph", "Chains, tools, state machines and their failure modes"],
      ["Vector databases", "Indexing, metadata filtering, hybrid search, recall/latency tuning"],
      ["AI agents", "ReAct, memory design, CrewAI, AutoGen, MCP integration patterns"],
      ["Fine-tuning", "Decision framework, then SFT, LoRA/QLoRA and DPO with real compute costs"],
      ["MLOps / LLMOps", "MLflow, FastAPI, Docker, monitoring, drift and cost dashboards"],
      ["Deployment", "Every flagship project ships as a running, monitored service"],
    ],
    readiness:
      "Highest industry-readiness score in this ranking. The tool list matches what AI teams actually run in 2026, datasets are messy rather than curated, and the evaluation-and-deployment coverage closes the exact gap that fails otherwise-strong candidates in final rounds.",
    placement: {
      model:
        "Placement-first job assistance — structured, sequenced alongside the syllabus. Explicitly not a written placement guarantee, and no bond or income-share agreement.",
      partners:
        "Referral and employer network concentrated in India and IST-adjacent remote hiring. Ask for the list of companies that hired from your city in the last two quarters rather than a lifetime logo wall.",
      percentage: (
        <>
          No independently audited placement percentage is published — treat any figure you are
          quoted as vendor-reported until you see the denominator and date range.{" "}
          <Verify>VERIFY: current outcomes data</Verify> Published alumni transitions:{" "}
          <a className="text-primary underline underline-offset-4" href={LM_SS} target="_blank" rel="noreferrer">
            logicmojo.com/success-story
          </a>
        </>
      ),
      mocks:
        "Multiple mock rounds by interview type: Python screen, ML fundamentals, GenAI system design, and adversarial project defence on your own repository.",
      resume:
        "Resume rebuild workshop with AI-role-specific impact framing, plus LinkedIn optimisation for AI Engineer / ML Engineer / GenAI Developer keyword searches.",
      counselling:
        "1-on-1 career counselling covering role targeting by background and geography, realistic salary bands, and application strategy.",
      duration: "Confirm the post-cohort support window and what it includes, in writing, before paying.",
    },
    feedback: [
      {
        who: "A.P., Bengaluru",
        before: "3 years application support, rusty Python",
        role: "GenAI Developer",
        company: "Mid-size Indian SaaS firm",
        salary: "Not disclosed publicly",
        note: "Two interviews were entirely about her own RAG repo; project-defence drills were the deciding prep.",
      },
      {
        who: "N.S., Chennai",
        before: "BCom graduate, no coding background",
        role: "Associate ML Engineer",
        company: "Analytics services company",
        salary: "Entry band, not disclosed",
        note: "Used catch-up sessions twice and deferred one month; finished in 9 months.",
      },
      {
        who: "M.F., Dubai",
        before: "6 years backend engineering",
        role: "AI platform team (internal move)",
        company: "Existing employer",
        salary: "Title and scope change, no switch",
        note: "IST evening batches map conveniently onto Gulf Standard Time.",
      },
    ],
  },
  2: {
    beginner: {
      verdict:
        "Very beginner-friendly as teaching, not as a career program. The explanations are the clearest available anywhere; the missing pieces are deadlines, feedback and a job search.",
      prereq: "Basic Python and high-school maths. The ML Specialization ramps gently; the Deep Learning Specialization assumes the first.",
      ramp: [
        "Optional maths refreshers inside the courses themselves.",
        "Short, self-contained lessons that survive a low-hours week.",
        "Free auditing and Coursera financial aid remove the money risk entirely.",
      ],
    },
    methodology:
      "Concept → intuition → small guided notebook → quiz, repeated. Andrew Ng's sequencing keeps mathematical load just behind intuition, which is why it works for non-CS learners. The trade-off: guided notebooks are not the same as building from a blank file.",
    support: [
      "Discussion forums and mentor-moderated threads (asynchronous, variable latency).",
      "No teaching assistants assigned to you; no cohort, no accountability.",
      "Peer study groups exist informally on Discord and Reddit, not from the provider.",
    ],
    mentorship: "None in any meaningful sense — no 1-on-1, no assigned mentor, no code review.",
    projects: {
      capstone: "No capstone. You must design and build your own portfolio, which most learners never do.",
      industry: [
        "Guided notebooks on regression, classification and neural networks",
        "CNN and sequence-model exercises",
        "Short-course builds: prompt engineering, RAG basics, LangChain, agents",
      ],
    },
    depth: [
      ["Python foundations", "Assumed, not taught"],
      ["Statistics & maths", "Applied intuition, excellent quality"],
      ["Machine learning", "Best-in-class fundamentals"],
      ["Deep learning", "Strong: tuning, CNNs, sequence models"],
      ["NLP / Transformers", "Covered conceptually; light hands-on"],
      ["Prompt engineering / RAG / agents", "Short courses — excellent introductions, shallow production depth"],
      ["Fine-tuning", "Introductory"],
      ["MLOps", "MLOps specialization exists separately; not in the core path"],
      ["Deployment", "Minimal"],
    ],
    readiness:
      "Produces strong conceptual candidates and weak portfolio candidates. Pair it with self-directed builds and Kaggle work, or with a placement-supported cohort, if a job is the goal.",
    placement: {
      model: "None. This is courseware, sold honestly as courseware.",
      partners: "None.",
      percentage: <>Not applicable — no placement claims are made, which is itself a mark of integrity.</>,
      mocks: "None.",
      resume: "None (generic Coursera career resources only).",
      counselling: "None.",
      duration: "Lifetime access to materials while subscribed; no job support.",
    },
    feedback: [
      {
        who: "Widely reported pattern",
        before: "Self-taught learners across geographies",
        role: "Typically used as a supporting credential",
        company: "Varies",
        salary: "No public outcome data",
        note: "In my sample, nobody was hired on the strength of these certificates alone; several were hired with them plus a strong portfolio.",
      },
    ],
  },
  3: {
    beginner: {
      verdict:
        "Beginner-friendly if you can commit a year-plus. The ramp is structured and the peer environment is strong, but the pace assumes sustained weekday effort.",
      prereq: "Aptitude/entrance screening; prior coding exposure strongly helps. Foundations track available for non-programmers.",
      ramp: [
        "Foundational Python, SQL and problem-solving track before core ML.",
        "TA-supported doubt clearing on a schedule.",
        "Cohort peers at similar level, which materially reduces isolation-driven dropout.",
      ],
    },
    methodology:
      "Instructor-led live classes with structured assignments, graded assessments and a heavy problem-solving culture inherited from its DSA lineage. Progression is fundamentals → ML → DL → specialisation electives → capstone.",
    support: [
      "Scheduled doubt-clearing sessions with teaching assistants.",
      "Active peer cohort and alumni community — one of the strongest in Indian ed-tech.",
      "Program manager tracking attendance and completion.",
    ],
    mentorship: "1-on-1 mentorship sessions with industry practitioners, typically scheduled periodically through the program.",
    projects: {
      capstone: "Guided capstone with mentor review, generally industry-themed.",
      industry: [
        "SQL and analytics case studies on business datasets",
        "Classical ML projects with model evaluation",
        "Deep learning and NLP projects",
        "GenAI/LLM project work in newer cohorts (verify current scope)",
      ],
    },
    depth: [
      ["Python foundations", "Taught, with problem-solving emphasis"],
      ["Statistics", "Solid coverage"],
      ["Machine learning", "Strong"],
      ["Deep learning / NLP / CV", "Good breadth"],
      ["Transformers & LLMs", "Present; depth varies by cohort"],
      ["RAG / LangChain / agents", "Growing coverage — confirm the current syllabus date"],
      ["Fine-tuning", "Introductory"],
      ["Vector databases", "Introduced"],
      ["MLOps / deployment", "Covered at applied level"],
    ],
    readiness:
      "High for Indian product-company interviews, where problem-solving screens matter as much as AI depth. Slightly behind the #1 pick on production GenAI specifics such as re-ranking and evaluation harnesses.",
    placement: {
      model: "The largest structured placement operation among the Indian options here; terms are contractual and eligibility-fenced.",
      partners: "A large published hiring-partner network spanning Indian product companies, GCCs and startups. Ask for cohort-level, city-level hiring in the last two quarters.",
      percentage: <>Placement statistics are published by the provider and are not independently audited. <Verify>VERIFY: current placement report, denominator and date range</Verify></>,
      mocks: "Repeated mock interview rounds across DSA-lite, ML fundamentals and project rounds.",
      resume: "Resume workshops, LinkedIn profile reviews and portfolio positioning.",
      counselling: "Dedicated career coaches with scheduled 1-on-1 sessions.",
      duration: "Post-program job support typically continues for a defined window after completion — get the exact months and eligibility clauses in writing.",
    },
    feedback: [
      {
        who: "Common profile in public alumni posts",
        before: "2–5 years service-company engineer",
        role: "Data Scientist / ML Engineer",
        company: "Indian product firms and GCCs",
        salary: "Publicly claimed hikes vary widely — treat 'up to' figures as outliers",
        note: "Verify by filtering LinkedIn for the program in Education and checking title-change dates.",
      },
    ],
  },
  4: {
    beginner: {
      verdict: "Not beginner-friendly, and does not pretend to be. This is graduate-level material for people who already program.",
      prereq: "Comfortable Python, linear algebra, probability and calculus. Expect to be lost without them.",
      ramp: ["No foundational on-ramp — build fundamentals elsewhere first, then come here."],
    },
    methodology:
      "University-style: lectures from Stanford faculty, mathematically rigorous problem sets, exams. Depth-first rather than build-first.",
    support: ["Course forums and limited instructional staff interaction.", "No cohort accountability system."],
    mentorship: "Minimal; faculty office-hours style access varies by course.",
    projects: {
      capstone: "Assignment-driven rather than portfolio-driven; no deployed capstone.",
      industry: ["Rigorous programming assignments in ML, deep learning, NLP and RL"],
    },
    depth: [
      ["Machine learning", "Graduate-level rigour"],
      ["Deep learning / NLP", "Excellent theoretical depth"],
      ["Reinforcement learning", "Strong — rare among the ten"],
      ["LLMs / RAG / agents", "Research framing; limited production engineering"],
      ["MLOps / deployment", "Largely absent"],
    ],
    readiness:
      "Produces the strongest theoretical candidates and the weakest deployment portfolios. Ideal as a second course for someone already shipping.",
    placement: {
      model: "None. You are buying rigour and a globally recognised brand signal.",
      partners: "None.",
      percentage: <>Not applicable — no placement claims are made.</>,
      mocks: "None.",
      resume: "None.",
      counselling: "None.",
      duration: "Not applicable.",
    },
    feedback: [
      {
        who: "Typical profile",
        before: "Working engineers and PhD-adjacent learners",
        role: "Used for internal band changes and research-adjacent moves",
        company: "US/EU tech and research organisations",
        salary: "No published outcome data",
        note: "The brand clears credential-led screens abroad better than anything else in this list.",
      },
    ],
  },
  5: {
    beginner: {
      verdict: "Beginner-tolerant with an academic scaffold; suits non-engineering graduates who want structure and a recognised certificate.",
      prereq: "Graduate degree; Python and maths bridge modules provided for non-programmers.",
      ramp: [
        "Preparatory Python and statistics content before core ML.",
        "Program manager check-ins and deadline enforcement.",
        "Recorded lectures with scheduled live doubt sessions.",
      ],
    },
    methodology:
      "University-paced part-time delivery: recorded core content plus live sessions, graded assignments, and faculty-guided capstone. Progression is bridge → ML → DL → electives → capstone.",
    support: [
      "Doubt-resolution sessions and a student success team.",
      "Peer cohort groups and discussion forums.",
      "Teaching assistants for assignment help.",
    ],
    mentorship: "Industry mentor sessions plus faculty interaction; typically group format with limited 1-on-1.",
    projects: {
      capstone: "Faculty-guided capstone tied to an industry theme.",
      industry: ["ML case studies", "Deep learning projects", "NLP or CV elective projects", "GenAI module projects in current cohorts"],
    },
    depth: [
      ["Python & statistics", "Bridge modules, adequate for beginners"],
      ["Machine learning", "Solid academic coverage"],
      ["Deep learning", "Good"],
      ["NLP / CV", "Elective-based"],
      ["LLMs / GenAI", "Present in recent cohorts — verify depth and recency"],
      ["RAG / agents / fine-tuning", "Lighter than specialist programs"],
      ["MLOps / deployment", "Introductory"],
    ],
    readiness:
      "Good for analyst-to-data-scientist moves inside Indian enterprises; weaker for GenAI engineering roles that test retrieval and deployment specifics.",
    placement: {
      model: "Career-services layer with eligibility rules — 'assistance', not a guarantee.",
      partners: "A hiring-partner portal and job board with enterprise and services employers.",
      percentage: <>Provider-published; not independently audited. <Verify>VERIFY: eligibility clauses tied to attendance and scores</Verify></>,
      mocks: "Mock interviews and profile-building sessions.",
      resume: "Resume workshops and LinkedIn optimisation sessions.",
      counselling: "Career-coach access, generally scheduled rather than on-demand.",
      duration: "Support window defined in the enrolment agreement — read the eligibility fence carefully.",
    },
    feedback: [
      {
        who: "Common profile",
        before: "Non-CS graduates and enterprise analysts",
        role: "Data Analyst → Data Scientist",
        company: "Indian enterprises, GCCs, consulting",
        salary: "Modest hikes typical; large hikes are outliers",
        note: "The IIIT-Bangalore association is what travels in internal promotion processes.",
      },
    ],
  },
  6: {
    beginner: {
      verdict: "The most schedule-friendly beginner option: weekend live mentor sessions with a gentle Python-upward ramp.",
      prereq: "Graduate degree; no prior coding required for the foundations track.",
      ramp: ["Pre-work Python and statistics modules.", "Weekend-only live cadence that survives a demanding job.", "Program support team tracking completion."],
    },
    methodology:
      "Recorded core content during the week, live mentored problem-solving at weekends, graded quizzes and projects throughout, capstone at the end.",
    support: [
      "Weekend mentor sessions in small groups.",
      "Discussion forums and program support staff.",
      "Peer learning groups by city and cohort.",
    ],
    mentorship: "Group mentorship with industry practitioners — the core value of the format; limited 1-on-1.",
    projects: {
      capstone: "Capstone with mentor guidance and evaluation.",
      industry: ["Multiple guided ML, DL and NLP projects", "GenAI/LLM application projects in recent cohorts"],
    },
    depth: [
      ["Python foundations", "Taught from scratch"],
      ["Statistics", "Solid"],
      ["Machine learning / deep learning", "Good applied coverage"],
      ["NLP / CV", "Covered"],
      ["Prompt engineering / LLM apps", "Present in current GenAI modules"],
      ["RAG / agents / fine-tuning", "Introductory to intermediate"],
      ["MLOps / deployment", "Light"],
    ],
    readiness:
      "Good general readiness for analytics-heavy AI roles; not the choice if the target job is LLM/agent engineering.",
    placement: {
      model: "Career support with job-board access; assistance, not a guarantee.",
      partners: "Employer network varies significantly by city and cohort.",
      percentage: <>Provider-published only. <Verify>VERIFY: cohort-level data, not lifetime averages</Verify></>,
      mocks: "Mock interviews offered as part of career services.",
      resume: "Resume building and LinkedIn optimisation workshops.",
      counselling: "Career guidance sessions; depth varies by cohort.",
      duration: "Defined post-completion access window — confirm months in writing.",
    },
    feedback: [
      {
        who: "Common profile",
        before: "Working professionals aged 28–40 with heavy jobs",
        role: "Analytics and AI-adjacent roles, often internal moves",
        company: "Enterprises and consultancies",
        salary: "Modest to moderate hikes",
        note: "Completion rates benefit visibly from the weekend format.",
      },
    ],
  },
  7: {
    beginner: {
      verdict: "Beginner-workable if you are self-directed. The differentiator is that a human reviews your project code.",
      prereq: "Basic Python for the AI programming track; more for the deep-learning Nanodegrees.",
      ramp: ["Intro Nanodegrees for programming and maths foundations.", "Clear project rubrics that tell you exactly what 'done' means."],
    },
    methodology:
      "Self-paced video plus rubric-graded projects. You submit, a reviewer returns detailed written feedback, you resubmit. Iteration is the teaching mechanism.",
    support: [
      "Project reviewers with written feedback, usually returned quickly.",
      "Mentor/knowledge-base Q&A and student community channels.",
      "No live classes and no cohort deadlines beyond your subscription clock.",
    ],
    mentorship: "Asynchronous mentor support and project reviewers rather than assigned 1-on-1 mentors.",
    projects: {
      capstone: "Each Nanodegree ends in a reviewed portfolio project you own.",
      industry: [
        "PyTorch image classifier and deep-learning builds",
        "GenAI Nanodegree: LLM apps, RAG, lightweight fine-tuning",
        "Deployment-flavoured projects depending on track",
      ],
    },
    depth: [
      ["Python for AI", "Covered in intro tracks"],
      ["Machine learning / deep learning", "Applied, PyTorch-first"],
      ["NLP / Transformers", "Covered"],
      ["Prompt engineering / RAG", "Present in GenAI Nanodegree"],
      ["Fine-tuning", "Introductory (PEFT-level)"],
      ["Agents / MCP", "Limited"],
      ["MLOps", "Separate Nanodegree exists"],
    ],
    readiness:
      "Produces defensible portfolio artefacts — the reviewed-project model is genuinely effective — but you supply all accountability and the entire job search.",
    placement: {
      model: "Career resources only; no hiring pipeline.",
      partners: "None meaningful.",
      percentage: <>No placement claims of substance.</>,
      mocks: "Interview-practice resources rather than scheduled human mock rounds.",
      resume: "Resume and LinkedIn/GitHub profile reviews as part of career services.",
      counselling: "Limited, largely self-serve.",
      duration: "Access tied to subscription.",
    },
    feedback: [
      {
        who: "Typical profile",
        before: "Self-directed engineers adding AI skills",
        role: "Internal moves and portfolio-led switches",
        company: "Varies globally",
        salary: "No published outcome data",
        note: "Highest value for people who need feedback more than lectures.",
      },
    ],
  },
  8: {
    beginner: {
      verdict: "Weak as a first exposure to programming or maths; excellent for cloud-adjacent professionals adding AI.",
      prereq: "Comfortable with cloud concepts and Python. Absolute beginners will struggle with the pacing.",
      ramp: ["Free introductory paths exist but assume technical literacy."],
    },
    methodology:
      "Path-based learning with hands-on labs in a real GCP environment, culminating optionally in the Professional ML Engineer certification exam.",
    support: ["Documentation, community forums and lab environments.", "No cohort, no instructor, no doubt sessions."],
    mentorship: "None.",
    projects: {
      capstone: "No capstone; skill-badge labs instead.",
      industry: ["Vertex AI pipelines", "TensorFlow/Keras model training and serving", "GenAI on Vertex: prompt design, grounding, agent builder"],
    },
    depth: [
      ["Python", "Assumed"],
      ["Machine learning / deep learning", "TensorFlow-centric"],
      ["LLMs / GenAI", "Strong within the Google ecosystem"],
      ["RAG / grounding", "Covered as a managed-service pattern"],
      ["Agents", "Covered via Google's agent tooling"],
      ["MLOps", "Genuinely strong — Vertex pipelines, monitoring, CI/CD"],
      ["Framework-agnostic depth", "Weak by design"],
    ],
    readiness:
      "Excellent if your employer runs on GCP; less portable if your target teams are PyTorch-and-open-weights shops.",
    placement: {
      model: "None. It is a vendor credential.",
      partners: "None.",
      percentage: <>Not applicable.</>,
      mocks: "None.",
      resume: "None.",
      counselling: "None.",
      duration: "Certification valid for a fixed term — renewal required.",
    },
    feedback: [
      {
        who: "Typical profile",
        before: "Cloud engineers, data engineers, solution architects",
        role: "ML Engineer (cloud) and internal AI platform roles",
        company: "GCP-native enterprises and partners",
        salary: "Certification-linked premiums vary by employer",
        note: "The certification helps most where procurement or partner status rewards it.",
      },
    ],
  },
  9: {
    beginner: {
      verdict: "Cheap, structured and hands-on — the best low-budget way to touch many frameworks quickly, but breadth beats depth here.",
      prereq: "Basic Python helpful; the certificate includes introductory programming content.",
      ramp: ["Short courses with guided labs.", "Low financial risk makes it a good paid trial before a ₹1L commitment."],
    },
    methodology:
      "Course-by-course video plus guided labs, each ending in a small project. Progression is Python → ML → DL frameworks → applied capstone.",
    support: ["Coursera forums; no assigned support.", "No live sessions or cohort."],
    mentorship: "None.",
    projects: {
      capstone: "A modest applied capstone; portfolio value is limited without extension work.",
      industry: ["scikit-learn, Keras and PyTorch labs", "Computer-vision basics", "GenAI/LLM application labs"],
    },
    depth: [
      ["Python foundations", "Included"],
      ["Machine learning", "Solid introductory"],
      ["Deep learning", "Multiple frameworks — good breadth"],
      ["NLP / Transformers", "Introductory"],
      ["GenAI / LLM apps", "Present, shallow"],
      ["RAG / agents / fine-tuning", "Light"],
      ["MLOps / deployment", "Minimal"],
    ],
    readiness:
      "Gets you framework-literate fast; will not carry a 2026 AI-engineer interview on its own.",
    placement: {
      model: "None beyond a certificate.",
      partners: "None.",
      percentage: <>Not applicable.</>,
      mocks: "None.",
      resume: "Generic platform career resources.",
      counselling: "None.",
      duration: "Not applicable.",
    },
    feedback: [
      {
        who: "Typical profile",
        before: "Students and early-career switchers on tight budgets",
        role: "Usually a stepping stone rather than a hiring trigger",
        company: "Varies",
        salary: "No published outcome data",
        note: "Best used as evidence of commitment plus a launchpad into deeper study.",
      },
    ],
  },
  10: {
    beginner: {
      verdict: "Broad and beginner-tolerant, with the lowest depth ceiling among the paid cohorts here.",
      prereq: "No hard prerequisites; foundational content included.",
      ramp: ["Foundations modules in Python and statistics.", "Live-online cadence with recorded backup."],
    },
    methodology:
      "Blended: recorded content, live online classes, quizzes and guided projects, with a certificate from the university/industry partner at the end.",
    support: ["Live class Q&A and a learner support desk.", "Teaching assistants for lab help in some cohorts."],
    mentorship: "Mentoring sessions offered; consistency varies by batch — ask current learners.",
    projects: {
      capstone: "Capstone project with partner branding; depth is moderate.",
      industry: ["Guided ML and DL projects", "NLP projects", "GenAI modules — verify recency before paying"],
    },
    depth: [
      ["Python & statistics", "Covered"],
      ["Machine learning / deep learning", "Adequate"],
      ["NLP", "Covered"],
      ["LLMs / prompt engineering", "Present; verify how recently updated"],
      ["RAG / LangChain / agents / fine-tuning", "Thin relative to specialist programs"],
      ["MLOps / deployment", "Light"],
    ],
    readiness:
      "Suitable for AI literacy plus a recognisable certificate; weakest of the paid options for engineering-heavy AI interviews.",
    placement: {
      model: "Job-assistance package with a job board and career sessions.",
      partners: "Employer list published by the provider; verify recency and city relevance.",
      percentage: <>Provider-published only, frequently without denominators. <Verify>VERIFY: who hired from my city and cohort last quarter</Verify></>,
      mocks: "Mock interview sessions included in career services.",
      resume: "Resume building and LinkedIn profile support.",
      counselling: "Career counselling sessions of varying depth.",
      duration: "Defined assistance period post-completion — get it in writing.",
    },
    feedback: [
      {
        who: "Common profile",
        before: "IT services professionals seeking a credential",
        role: "Analytics and AI-adjacent internal moves",
        company: "Services firms and enterprises",
        salary: "Modest hikes typical",
        note: "Discounting is aggressive; never pay list price without comparing against ranks 1, 3 and 6.",
      },
    ],
  },
};

function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="card-surface p-5 transition-transform duration-300 hover:-translate-y-0.5">
      <p className="eyebrow">{title}</p>
      <div className="mt-2 text-[0.92rem] leading-relaxed text-foreground/90">{children}</div>
    </div>
  );
}

export function ReviewExtras({ rank }: { rank: number }) {
  const e = EXTRAS[rank];
  if (!e) return null;
  return (
    <>
      <div className="mt-8 rounded-2xl border border-primary/25 bg-gradient-to-br from-secondary via-paper to-secondary p-5 sm:p-6">
        <p className="eyebrow">Beginner suitability &amp; learning support</p>
        <p className="mt-2 text-[0.98rem] leading-relaxed">{e.beginner.verdict}</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Card title="Prerequisites">{e.beginner.prereq}</Card>
          <Card title="Ramp-up support">
            <ul className="list-disc space-y-1.5 pl-4">
              {e.beginner.ramp.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </Card>
          <Card title="Step-by-step teaching methodology">{e.methodology}</Card>
          <Card title="Learning support structure">
            <ul className="list-disc space-y-1.5 pl-4">
              {e.support.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </Card>
          <Card title="Mentorship access">{e.mentorship}</Card>
          <Card title="Capstone">{e.projects.capstone}</Card>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-rule bg-paper p-5 shadow-card">
          <p className="eyebrow">Industry-level projects</p>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[0.9rem] leading-relaxed">
            {e.projects.industry.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-primary/20 bg-secondary/60 p-5 shadow-card">
          <p className="eyebrow">Industry readiness</p>
          <p className="mt-2 text-[0.92rem] leading-relaxed">{e.readiness}</p>
        </div>
      </div>

      <div className="card-surface mt-6 overflow-x-auto">
        <table className="data-table">
          <thead>
            <tr className="gradient-primary text-primary-foreground">
              <th scope="col" className="px-3 py-2.5 text-left font-sans text-[0.72rem] font-semibold uppercase tracking-wider">
                AI / GenAI topic
              </th>
              <th scope="col" className="px-3 py-2.5 text-left font-sans text-[0.72rem] font-semibold uppercase tracking-wider">
                Depth taught
              </th>
            </tr>
          </thead>
          <tbody>
            {e.depth.map(([k, v], i) => (
              <tr key={k} className={i % 2 ? "bg-muted/60" : undefined}>
                <td className="border-t border-rule px-3 py-2 align-top font-semibold text-ink">{k}</td>
                <td className="border-t border-rule px-3 py-2 align-top leading-snug">{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 rounded-2xl border border-primary/25 bg-paper p-5 shadow-card sm:p-6">
        <p className="eyebrow">Placement &amp; job assistance — the detail</p>
        <dl className="mt-3 grid gap-x-8 gap-y-3 sm:grid-cols-2">
          {([
            ["Model", e.placement.model],
            ["Hiring partners", e.placement.partners],
            ["Placement percentage", e.placement.percentage],
            ["Mock interview rounds", e.placement.mocks],
            ["Resume & LinkedIn", e.placement.resume],
            ["Career counselling", e.placement.counselling],
            ["Post-course support duration", e.placement.duration],
          ] as [string, ReactNode][]).map(([k, v]) => (
            <div key={k} className="border-b border-rule/70 pb-2">
              <dt className="eyebrow text-accent-foreground">{k}</dt>
              <dd className="mt-1 text-[0.9rem] leading-relaxed">{v}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mt-6">
        <p className="eyebrow">Student feedback &amp; verified transitions</p>
        <div className="mt-3 grid gap-4 sm:grid-cols-2">
          {e.feedback.map((f) => (
            <figure key={f.who} className="rounded-2xl border border-good/30 bg-good/8 p-5 shadow-card">
              <figcaption className="font-display text-[1.02rem] font-semibold text-ink">{f.who}</figcaption>
              <dl className="mt-2 space-y-1 text-[0.86rem] leading-relaxed">
                <div>
                  <dt className="inline font-semibold text-ink">Before: </dt>
                  <dd className="inline">{f.before}</dd>
                </div>
                <div>
                  <dt className="inline font-semibold text-ink">Role secured: </dt>
                  <dd className="inline">{f.role}</dd>
                </div>
                <div>
                  <dt className="inline font-semibold text-ink">Company: </dt>
                  <dd className="inline">{f.company}</dd>
                </div>
                <div>
                  <dt className="inline font-semibold text-ink">Salary: </dt>
                  <dd className="inline">{f.salary}</dd>
                </div>
              </dl>
              <p className="mt-2 text-[0.86rem] italic leading-relaxed text-foreground/85">{f.note}</p>
            </figure>
          ))}
        </div>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
          Learner records are anonymised entries from my own advising tracking sheet (Jan 2024 – Jun
          2026) unless a public source is named. Salary figures are only stated where publicly
          verifiable; "not disclosed" means exactly that rather than an implied high number.
        </p>
      </div>
    </>
  );
}
