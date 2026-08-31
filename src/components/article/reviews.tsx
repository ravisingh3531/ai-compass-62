import type { ReactNode } from "react";
import { Callout, Checklist, H3, P, Pull, Section, Table, Verify } from "./prose";

type Review = {
  rank: number;
  name: string;
  tag: string;
  origin: string;
  format: string;
  fee: ReactNode;
  duration: string;
  ceiling: string;
  bestFor: string;
  score: string;
  what: ReactNode;
  curriculum: ReactNode;
  delivery: ReactNode;
  projects: ReactNode;
  career: ReactNode;
  choose: string[];
  avoid: string[];
  limits: string[];
};

const REVIEWS: Review[] = [
  {
    rank: 2,
    name: "DeepLearning.AI — ML + Deep Learning Specializations",
    tag: "Best AI foundations in the world at near-zero cost",
    origin: "Global (Coursera)",
    format: "Self-paced, recorded + auto-graded labs",
    fee: (
      <>
        Free to audit; ~US$59/mo (~₹5,000/mo) for certificates <Verify>VERIFY: current fee</Verify>
      </>
    ),
    duration: "3–6 months at 6–10 hrs/week",
    ceiling: "Level 2–3",
    bestFor: "Anyone, anywhere, who needs real foundations and can self-manage",
    score: "8.6 / 10",
    what: (
      <>
        Andrew Ng's Machine Learning Specialization and Deep Learning Specialization remain the
        clearest explanations of core AI ever produced, now supplemented by short courses on
        prompting, RAG basics, fine-tuning and agents. Auditing is free; you pay only for graded
        assignments and certificates.
      </>
    ),
    curriculum: (
      <>
        <strong>Deep</strong> on classical ML, evaluation rigour and deep learning fundamentals —
        the parts most bootcamps rush. Weaker where 2026 hiring is growing fastest: RAG stops around
        the “moderate” mark, agents are thin, MLOps and deployment are essentially absent, and MCP
        isn't covered yet. The short courses partially patch this, but they are 1–2 hour
        introductions, not a production curriculum.
      </>
    ),
    delivery: (
      <>
        Excellent production quality, works on low bandwidth, works on mobile, works in any
        timezone. And it will not chase you. Forum answers come from other learners. No human ever
        reads your code. Completion rates for open MOOCs sit in the 5–15% band — the single reason
        this ranks #2 rather than #1.
      </>
    ),
    projects: (
      <>
        Guided labs with auto-grading. You will understand backpropagation; you will not finish with
        a portfolio a hiring manager can interrogate unless you build extra projects on your own
        initiative, which most learners do not.
      </>
    ),
    career: (
      <>
        None, and the platform doesn't pretend otherwise — which I respect more than most
        “placement assistance.” The credential is recognised globally as evidence of foundations,
        never as evidence of production capability.
      </>
    ),
    choose: [
      "You have discipline and want the best explanation of fundamentals at any price.",
      "You are on a tight budget anywhere in the world — a Tier-2 Indian student, a student in Southeast Asia, a career switcher self-funding.",
      "You want to test whether you actually enjoy AI before spending ₹1L+ or US$2,000+.",
    ],
    avoid: [
      "You have abandoned self-paced courses before (be honest about this).",
      "You need a portfolio, code review and interview prep inside the next six months.",
    ],
    limits: [
      "No accountability structure at all — the dominant reason people don't finish.",
      "No human code review, no mentor, no portfolio feedback.",
      "Production layers (MLOps, deployment, LLM observability) are absent.",
      "Subscription creep: a stalled learner pays ~US$59 monthly for content they aren't opening.",
    ],
  },
  {
    rank: 3,
    name: "Scaler — Data Science, ML & AI Program",
    tag: "Best placement infrastructure for Indian product-company and GCC roles",
    origin: "India",
    format: "Live cohort, IST, structured tracks",
    fee: <>₹3–4L (~US$3,600–US$4,800) <Verify>VERIFY: current fee</Verify></>,
    duration: "12–15 months",
    ceiling: "Level 4",
    bestFor: "Indian professionals targeting product companies and GCCs, willing to pay for machinery",
    score: "8.4 / 10",
    what: (
      <>
        A long, demanding live program that treats hiring as an engineering problem: structured DSA,
        system design, ML depth, mentor sessions, a large alumni network and a genuine recruiter
        pipeline into Indian product companies and GCCs.
      </>
    ),
    curriculum: (
      <>
        <strong>Deep</strong> on Python, SQL and classical ML; <strong>good</strong> on deep
        learning and MLOps. GenAI is present and improving but thinner than the leaders on
        fine-tuning, agent frameworks and MCP. If your goal is a GenAI-engineering role
        specifically, audit the current GenAI module line by line before paying.
      </>
    ),
    delivery: (
      <>
        Among the strongest in India: genuinely live, strong TA network, real accountability, active
        dropout prevention. Also among the most demanding — 15–20 hours a week for a year is a
        commitment that ends most social plans.
      </>
    ),
    projects: (
      <>
        5–10 substantial projects with human review. Interview-defensible. Fewer GenAI-specific
        production artefacts than the #1 pick.
      </>
    ),
    career: (
      <>
        The best in this list for India, with published outcome data. Read the eligibility fine
        print carefully: placement support is typically conditioned on attendance, assessment
        performance and module completion. Outside India the network thins sharply.
      </>
    ),
    choose: [
      "You are in India, targeting product companies or GCCs, and can commit 15–20 hrs/week for a year.",
      "You want DSA and system design alongside ML because you're also targeting SDE-adjacent roles.",
      "You value a large, active alumni network for referrals.",
    ],
    avoid: [
      "Your budget is under ₹1L, or a 24-month EMI would strain you.",
      "You are outside India and cannot use an India-centric hiring network.",
      "You want a GenAI/agents specialist track rather than a broad program.",
    ],
    limits: [
      "Highest price in this list for an Indian program, with a long EMI tenure.",
      "Duration is a real dropout risk: 12–15 months outlives many people's motivation and job stability.",
      "GenAI depth trails specialist programs, especially fine-tuning and agent frameworks.",
      "Placement claims require reading eligibility conditions closely.",
    ],
  },
  {
    rank: 4,
    name: "Stanford Online — Artificial Intelligence Professional Program",
    tag: "Best elite academic credential that travels everywhere",
    origin: "Global; strongest signal in the US and Europe",
    format: "Deadline-based, facilitated cohorts, office hours",
    fee: (
      <>
        ~US$1,750/course (~₹1.5L); the certificate requires multiple courses, so budget US$5,000+{" "}
        <Verify>VERIFY: current fee</Verify>
      </>
    ),
    duration: "9–18 months across courses",
    ceiling: "Level 3–4",
    bestFor: "Engineers with strong maths who want rigour plus a credential that opens doors globally",
    score: "8.2 / 10",
    what: (
      <>
        Graduate-level AI taught to Stanford's academic standard — NLP, deep learning,
        reinforcement learning — with hard deadlines and graded work. The most rigorous option here,
        and by far the most expensive per unit of content.
      </>
    ),
    curriculum: (
      <>
        <strong>Deep</strong> on maths, transformers, evaluation and applied NLP — genuinely better
        than anything else in this list. Then the gaps: production RAG is basic-to-moderate, agents
        are limited, MCP absent, and MLOps/deployment is not covered. University refresh cycles
        simply cannot match the field's pace at Layer 5 and 6.
      </>
    ),
    delivery: (
      <>
        Not “live cohort” in the Indian sense: facilitated sessions and office hours around
        deadline-driven coursework. Deadlines are the accountability mechanism, and they work — but
        there is no mentor reading your code weekly.
      </>
    ),
    projects: <>4–8 graded assignments of high intellectual quality. Academic, not portfolio-shaped, and nothing is deployed.</>,
    career: (
      <>
        No placement service. What you buy is a screening signal — one that measurably helps in US
        and European hiring, and helps in India too, though a Bengaluru interviewer will still ask
        what you built. Employer sponsorship is common and often the only sane way to fund it.
      </>
    ),
    choose: [
      "You already code well and have college-level maths.",
      "You are targeting US/European employers, research-adjacent work or a graduate pathway.",
      "Your employer will fund it, or the cost is genuinely comfortable.",
    ],
    avoid: [
      "You are a beginner or from a non-technical background — you will drown.",
      "You need deployment, MLOps and production GenAI skills for a job search this year.",
      "US$5,000+ represents months of income for you.",
    ],
    limits: [
      "Cost per capability is the weakest in this list — you are paying substantially for the brand.",
      "Layer 5 and 6 gaps are serious for an applied 2026 job hunt.",
      "No portfolio support, no career services, nothing deployed.",
      "Prerequisites are real and unforgiving; there is no bridge module.",
    ],
  },
  {
    rank: 5,
    name: "upGrad — PG Programme in ML & AI (IIIT-Bangalore)",
    tag: "Best Indian university-credentialed program",
    origin: "India",
    format: "Live + recorded, academic structure",
    fee: <>₹1.5–3.5L (~US$1,800–US$4,200) <Verify>VERIFY: current fee</Verify></>,
    duration: "12 months",
    ceiling: "Level 3–4",
    bestFor: "Career switchers who need a recognised Indian academic credential and hand-holding",
    score: "7.6 / 10",
    what: (
      <>
        A university-affiliated PG programme with genuine IIIT-Bangalore involvement, strong
        onboarding for non-AI backgrounds, academic deadlines, and a career services team. The most
        “degree-like” Indian option here.
      </>
    ),
    curriculum: (
      <>
        <strong>Good</strong> across foundations, classical ML, deep learning and CV.{" "}
        <strong>Weak</strong> where it counts most for 2026: embeddings and vector databases are
        basic, RAG basic-to-moderate, fine-tuning limited, agent frameworks not covered, MCP not
        covered. Ask for the current-cohort GenAI module, dated, in writing.
      </>
    ),
    delivery: (
      <>
        Mixed live and recorded, IST, with academic deadlines that do drive completion. Doubt
        resolution runs through a ticket system plus scheduled sessions — slower than a live cohort
        where you ask mid-class.
      </>
    ),
    projects: <>8–12 projects, good breadth, partial human review. Solid but rarely deployment-grade.</>,
    career: (
      <>
        A real career services team and job board, India-focused, offering “assistance” rather than
        guarantee. Partial AI-role specificity: expect data-analyst and analytics roles in the mix
        alongside ML.
      </>
    ),
    choose: [
      "You are a switcher in India who needs prerequisite support and a credential HR recognises.",
      "You want academic structure and are fine with ticket-based doubt resolution.",
      "An employer or family is funding a university-branded line on your CV.",
    ],
    avoid: [
      "You want frontier GenAI depth — agents, MCP, fine-tuning at production quality.",
      "You already code well; you'll pay a premium for onboarding you don't need.",
    ],
    limits: [
      "Layer 5 is the weakest relative to price of any program in the top five.",
      "Fee spread of ₹1.5–3.5L makes value highly dependent on which variant you're sold.",
      "Sales pressure and manufactured cohort scarcity are common — verify everything in writing.",
      "GST and late-fee policy meaningfully change the real number.",
    ],
  },
  {
    rank: 6,
    name: "Great Learning — PGP-AIML (UT Austin / Great Lakes)",
    tag: "Best mentor-led weekend format with a global university brand",
    origin: "India + global",
    format: "Weekend mentor-led sessions + recorded core",
    fee: <>₹1.5–3.5L (~US$1,800–US$4,200) <Verify>VERIFY: current fee</Verify></>,
    duration: "7–12 months",
    ceiling: "Level 3–4",
    bestFor: "Working professionals whose weekdays are unusable and who want mentor contact",
    score: "7.5 / 10",
    what: (
      <>
        A weekend-anchored, mentor-led program carrying a UT Austin / Great Lakes credential.
        Mentors are practitioners, sessions are genuinely live, and the weekend cadence fits a
        60-hour work week better than any weekday cohort.
      </>
    ),
    curriculum: (
      <>
        <strong>Good</strong> and broad: ML, DL, CV, NLP, moderate GenAI including some agent
        content — better GenAI coverage than upGrad. Still moderate on RAG, fine-tuning and MLOps,
        and MCP is only lightly touched.
      </>
    ),
    delivery: (
      <>
        The variable is your mentor. I've observed excellent mentor cohorts and mediocre ones in the
        same program. Ask for your mentor's name and background before paying, and ask what happens
        if you request a change.
      </>
    ),
    projects: <>8–12 projects with mentor review. Good breadth, moderate depth, limited deployment.</>,
    career: <>Resume support and mock interviews, India-focused with some global brand reach. “Assistance,” not guarantee.</>,
    choose: [
      "Weekends are the only time you have, and you want live human contact.",
      "You want a globally recognisable university brand at Indian pricing.",
      "You're a switcher who needs gradual maths and coding build-up.",
    ],
    avoid: [
      "You want frontier depth in agents, fine-tuning and production RAG.",
      "You dislike mentor-dependent outcomes — variance here is real.",
    ],
    limits: [
      "Mentor quality varies materially between cohorts.",
      "Layer 6 (MLOps/deployment) is moderate at best for the price.",
      "Optional immersion travel adds cost that is easy to mistake for inclusion.",
      "Aggressive sales follow-up is common.",
    ],
  },
  {
    rank: 7,
    name: "Udacity — AI & Machine Learning Nanodegrees",
    tag: "Best human project review inside a self-paced format",
    origin: "Global",
    format: "Self-paced with reviewed submissions",
    fee: <>~US$249/mo or bundle (~₹21,000/mo) <Verify>VERIFY: current fee</Verify></>,
    duration: "3–5 months per nanodegree",
    ceiling: "Level 3",
    bestFor: "Self-paced learners in any timezone who need a human to critique their code",
    score: "7.4 / 10",
    what: (
      <>
        Project-based nanodegrees where every signature project is reviewed by a human with written
        feedback until it passes. That review loop is the product; the videos are supporting
        material.
      </>
    ),
    curriculum: (
      <>
        <strong>Good</strong> on ML, deep learning and CV. Moderate on transformers and LLMs, basic
        to moderate on fine-tuning, limited on agents, MCP not covered, MLOps moderate. Check the
        last-updated date on each nanodegree before enrolling; freshness varies by track.
      </>
    ),
    delivery: (
      <>
        Any timezone, excellent platform, no live teaching. The reviews create real momentum —
        resubmission pressure is a surprisingly effective substitute for a cohort — but the
        subscription clock is the actual deadline.
      </>
    ),
    projects: <>3–6 reviewed projects per nanodegree. The reviews are the strongest per-project feedback in the self-paced category.</>,
    career: <>Light career services — resume and LinkedIn review. Global and self-driven; no placement network anywhere.</>,
    choose: [
      "You are disciplined, can finish in 3–4 months, and want your code criticised.",
      "You're outside IST and want reviewed work without a fixed class schedule.",
      "Your employer reimburses monthly learning subscriptions.",
    ],
    avoid: [
      "You know you'll be slow — the monthly model punishes it brutally.",
      "You need agents, MCP or production GenAI depth.",
    ],
    limits: [
      "~US$249/month makes the true cost entirely dependent on your speed.",
      "Layer 5 coverage lags the field; agents and MCP are weak or absent.",
      "No live instruction and no 1:1 mentor in most tracks.",
      "Track freshness is inconsistent — verify before subscribing.",
    ],
  },
  {
    rank: 8,
    name: "Google — AI/ML Learning Path + Professional ML Engineer certification",
    tag: "Best vendor-backed pathway into cloud AI roles",
    origin: "Global, including Indian GCCs on GCP",
    format: "Self-paced courses, labs, proctored exam",
    fee: <>Free–US$49 courses; PMLE exam US$200 (~₹17,000) <Verify>VERIFY: current fee</Verify></>,
    duration: "2–4 months",
    ceiling: "Level 2–3",
    bestFor: "Cloud, data and platform engineers moving into AI inside enterprises",
    score: "7.2 / 10",
    what: (
      <>
        A structured path through Google Cloud's AI stack — Vertex AI, Gemini, Gemma — ending in a
        respected, verifiable certification that enterprise recruiters filter on.
      </>
    ),
    curriculum: (
      <>
        <strong>Good</strong> on cloud MLOps and deployment — a genuine strength few options here
        share. <strong>Basic to moderate</strong> on foundations, maths and transformers. Everything
        is taught inside Google's ecosystem, so your RAG and fine-tuning knowledge arrives
        Vertex-shaped rather than framework-agnostic.
      </>
    ),
    delivery: <>Self-paced, any timezone, excellent bandwidth behaviour, community-only support. No human reads anything you write.</>,
    projects: <>Guided labs plus exam preparation. Labs are not portfolio projects; the exam is the artefact.</>,
    career: <>No services. The certification itself is a real filter-passer for cloud and enterprise AI roles, including at Indian GCCs standardised on GCP.</>,
    choose: [
      "You already work in cloud, data or DevOps and want the AI adjacency credential.",
      "Your employer runs on Google Cloud.",
      "You want a cheap, verifiable, globally recognised certification.",
    ],
    avoid: [
      "You are a beginner wanting to understand AI from first principles.",
      "You want vendor-neutral skills you can carry to any stack.",
    ],
    limits: [
      "Ecosystem lock-in: you learn Google's AI, not AI broadly.",
      "Thin on foundations — this is a complement, not a first course.",
      "Cloud usage beyond the free tier is a real, easily overlooked cost.",
      "No mentorship, no code review, no portfolio outcome.",
    ],
  },
  {
    rank: 9,
    name: "IBM — AI Engineering Professional Certificate (Coursera)",
    tag: "Best low-cost applied engineering track",
    origin: "Global",
    format: "Self-paced, hands-on labs",
    fee: <>Free to audit; ~US$59/mo (~₹5,000/mo) <Verify>VERIFY: current fee</Verify></>,
    duration: "3–5 months",
    ceiling: "Level 2–3",
    bestFor: "Budget-constrained learners who want framework practice, not theory lectures",
    score: "7.0 / 10",
    what: (
      <>
        A practical, framework-heavy certificate — strong Keras/TensorFlow and PyTorch labs, applied
        NLP, and enough deep learning practice to make you productive quickly at low cost.
      </>
    ),
    curriculum: (
      <>
        <strong>Deep</strong> on framework mechanics; <strong>good</strong> on classical ML,
        evaluation and applied NLP. <strong>Basic to limited</strong> on the 2026 differentiators:
        embeddings and vector DBs basic, RAG basic, fine-tuning limited, agents limited, agent
        frameworks and MCP not covered. Maths coverage is thin.
      </>
    ),
    delivery: <>Self-paced, subtitled, low bandwidth friendly, forum-only support. No accountability; completion here is genuinely low.</>,
    projects: <>6–10 lab-style projects. Useful practice; guided rather than portfolio-defining.</>,
    career: <>None claimed. The credential reads as competent applied practice in enterprise contexts, not as evidence of production ownership.</>,
    choose: [
      "You want maximum framework practice per rupee or dollar.",
      "You already have foundations from DeepLearning.AI and want hands-on reps.",
      "You need a recognisable enterprise brand at subscription pricing.",
    ],
    avoid: [
      "You need GenAI and agent depth for 2026 roles.",
      "You need accountability to finish anything.",
    ],
    limits: [
      "Layer 5 is the weakest in this list relative to 2026 hiring demand.",
      "No MLOps rigour beyond basics; no human review at all.",
      "Thin maths and theory — you'll struggle in a rigorous interview.",
      "Subscription creep across slow months.",
    ],
  },
  {
    rank: 10,
    name: "Simplilearn — PGP in AI & ML (Purdue / IBM)",
    tag: "Best for corporate, employer-funded upskilling",
    origin: "India + global L&D",
    format: "Blended: recorded core, live masterclasses",
    fee: <>₹1.5–2.5L (~US$1,800–US$3,000) <Verify>VERIFY: current fee</Verify></>,
    duration: "11 months",
    ceiling: "Level 3–4",
    bestFor: "L&D buyers and employees whose company is paying and wants reporting",
    score: "6.8 / 10",
    what: (
      <>
        A broad, well-packaged blended program with Purdue and IBM branding, invoice-friendly
        enrolment, completion reporting and enterprise support — the strongest fit on this page for
        an employer-funded cohort.
      </>
    ),
    curriculum: (
      <>
        <strong>Good</strong> breadth across ML, DL, CV and NLP with TensorFlow/Keras.{" "}
        <strong>Basic to limited</strong> on RAG, fine-tuning, agents, agent frameworks and MCP;
        moderate MLOps. Broad rather than deep, and behind the leaders at Layer 5.
      </>
    ),
    delivery: (
      <>
        Mostly recorded, with live masterclasses that are events rather than teaching sessions.
        Support is forum-first with limited live access. Cohort accountability is weak, and
        completion reflects that.
      </>
    ),
    projects: <>5–10 projects, limited human review. Adequate for a CV, thin for a technical defence.</>,
    career: <>Career services and a job board, oriented to Indian corporate movement and global L&D reporting rather than AI-specific placement.</>,
    choose: [
      "Your employer is paying and needs invoicing plus completion reports.",
      "You want recognisable branding for an internal promotion or role change.",
      "You value breadth and flexibility over frontier depth.",
    ],
    avoid: [
      "You are self-funding — the capability per rupee is beaten by cheaper options here.",
      "You want production GenAI depth or strong mentorship.",
    ],
    limits: [
      "Weakest delivery accountability among the paid programs on this page.",
      "Layer 5 depth does not match the price when self-funded.",
      "Exam vouchers and add-ons inflate the real total.",
      "“University” branding here is a partnership, not faculty-taught instruction.",
    ],
  },
];

function ReviewCard({ r }: { r: Review }) {
  return (
    <article id={`rank-${r.rank}`} className="mt-14 scroll-mt-24">
      <div className="flex items-baseline gap-4">
        <span className="font-display text-4xl font-bold text-accent">#{r.rank}</span>
        <h3 className="article-h3 mt-0">{r.name}</h3>
      </div>
      <p className="mt-2 font-display text-lg text-primary">{r.tag}</p>

      <Table
        head={["Origin", "Format", "Fee", "Duration", "Ceiling", "Score"]}
        rows={[[r.origin, r.format, r.fee, r.duration, r.ceiling, r.score]]}
        firstColSticky={false}
      />

      <h4 className="mt-6 font-display text-lg font-semibold">What it is</h4>
      <P>{r.what}</P>
      <h4 className="mt-6 font-display text-lg font-semibold">Curriculum verdict</h4>
      <P>{r.curriculum}</P>
      <h4 className="mt-6 font-display text-lg font-semibold">Delivery reality</h4>
      <P>{r.delivery}</P>
      <h4 className="mt-6 font-display text-lg font-semibold">Projects &amp; portfolio</h4>
      <P>{r.projects}</P>
      <h4 className="mt-6 font-display text-lg font-semibold">Career support</h4>
      <P>{r.career}</P>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-good/30 bg-good/8 p-5">
          <p className="eyebrow">Choose it if</p>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[0.93rem] leading-relaxed">
            {r.choose.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border border-warn/40 bg-highlight/40 p-5">
          <p className="eyebrow">Skip it if</p>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[0.93rem] leading-relaxed">
            {r.avoid.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-4 rounded-lg border border-rule bg-paper p-5 shadow-card">
        <p className="eyebrow">Real limitations</p>
        <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[0.93rem] leading-relaxed">
          {r.limits.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
      <p className="mt-3 text-[0.95rem]">
        <strong>Best for:</strong> {r.bestFor}
      </p>
    </article>
  );
}

export function LogicMojoDeepDive() {
  return (
    <Section
      id="logicmojo-deep-dive"
      eyebrow="Section 6 · #1 in depth"
      title="#1 — LogicMojo AI & Machine Learning Course: The Full Case, Including Where It Loses People"
    >
      <P>
        Publishing this on LogicMojo's own site means the burden of proof is higher, not lower. So
        here is the case in the same structure as every other review, followed by the limitations I
        would raise if I were being paid by a competitor.
      </P>

      <Table
        head={["Origin", "Format", "Fee", "Duration", "Ceiling", "Score"]}
        rows={[
          [
            "India; serves global remote learners",
            "Live cohort, IST evenings/weekends, recordings + catch-up",
            <>₹XX,XXX (~US$X,XXX) <Verify>VERIFY: current fee</Verify>; EMI available</>,
            "6–9 months at 10–15 hrs/week",
            "Level 4–5",
            "9.1 / 10",
          ],
        ]}
        firstColSticky={false}
      />

      <H3>Why it ranks first</H3>
      <P>
        One reason, not several: <strong>it is the only program here that teaches all seven layers
        hands-on, in a live format, at a price an Indian professional can absorb without a two-year
        loan.</strong> Look down the LogicMojo column in Table 2 and find where it stops being
        “Deep.” Production RAG with chunking strategy, hybrid search, re-ranking and evaluation.
        Fine-tuning with SFT, LoRA/QLoRA and DPO. Agents with LangGraph and CrewAI. MCP. Open-weight
        models including local inference. LLM evaluation and guardrails. Then MLOps: FastAPI,
        Docker, CI/CD, monitoring, drift, cost. Almost every other program in this list stops
        somewhere in that sequence.
      </P>
      <P>
        Second reason: PyTorch-first, framework-agnostic teaching. You learn the mechanics, not one
        vendor's console — which is why the same knowledge answers a Vertex question, a Bedrock
        question and an open-weight self-hosting question in an interview.
      </P>
      <Pull>
        The point of ranking it first is not that it is the most prestigious name on this page — it
        plainly is not. It is that a committed learner finishes it with 10–15 defensible projects, at
        least one deployed system with monitoring, and the vocabulary to survive forty-five minutes
        of technical questioning. That is what converts, in Bengaluru and in Berlin.
      </Pull>

      <H3>Delivery — what actually happens week to week</H3>
      <P>
        Genuinely live IST sessions (evening and weekend batches), which also lands conveniently for
        learners in the Gulf and Southeast Asia. Questions get answered in-session, not queued in a
        forum. Mentor channels between classes, human code review on projects, 1:1 mentor access,
        recordings plus catch-up sessions, and batch-transfer when life interferes. Progress tracking
        exists specifically to catch the Week-3 motivation crash before it becomes a Week-6 exit.
      </P>

      <H3>Genuine limitations — the honest list</H3>
      <Checklist
        title="Where LogicMojo loses people"
        items={[
          "Brand recognition. There is no Stanford seal and no IIT logo. If your target employer's HR screen filters on institution names — common in some large enterprises and for visa or immigration paperwork — a globally branded certificate will pass a gate that this one won't. Capability wins the interview; brand sometimes wins the screen, and that is a real cost.",
          "Timezone. Live sessions are IST-anchored. Excellent for India, the Gulf and Southeast Asia; awkward for the US West Coast, where an evening IST class lands in the small hours. Recordings mitigate this but you lose the in-session answering that is the format's main advantage.",
          "Pace. 10–15 hours a week across 6–9 months with a full-time job is demanding. Learners who can give 5 hours a week routinely fall behind; the catch-up mechanism helps, but it doesn't create time.",
          "No placement guarantee. Career guidance, portfolio review and interview prep — but no guaranteed-job claim, no bond and no ISA. If you are shopping specifically for guaranteed placement infrastructure into Indian product companies, Scaler's machinery is larger.",
          "Cohort dependency. Miss three consecutive live weeks and the compounding is real. This is the structural trade-off of every cohort format, including this one.",
          "Not the right depth for everyone. A product manager who needs to scope AI projects does not need LoRA fine-tuning, and will get better value from a literacy-tier option in half the time.",
        ]}
      />

      <H3>Success stories — and how to read them</H3>
      <P>
        I'm giving these as patterns with placeholders rather than polished testimonials, because
        unverifiable specifics are exactly what this article criticises elsewhere. Ask for
        current-cohort references and check them yourself.
      </P>
      <Table
        head={["Profile", "Before", "What they built", "Outcome", "Timeline"]}
        rows={[
          [
            "Manual QA engineer, 5 yrs, Pune",
            "No ML; strong Python from test automation",
            "Production RAG assistant over internal test documentation, deployed with monitoring",
            <>Internal move to an AI platform team; <Verify>INSERT: verified salary change</Verify></>,
            "8 months",
          ],
          [
            "BI developer, 7 yrs, Bengaluru GCC",
            "SQL and dashboards; no deep learning",
            "Fine-tuned open-weight classifier + evaluation harness for finance documents",
            <>ML engineer role in the same GCC; <Verify>INSERT: verified salary change</Verify></>,
            "9 months",
          ],
          [
            "Mechanical engineer switching, Coimbatore",
            "No coding at all at intake",
            "6 projects incl. a CV defect-detection service behind FastAPI",
            <>First AI-adjacent role; <Verify>INSERT: verified offer band</Verify></>,
            "11 months (with bridge module)",
          ],
          [
            "Indian professional in Dubai",
            "Backend developer, 4 yrs",
            "Multi-agent workflow with LangGraph + MCP tool integrations",
            <>Remote AI engineer role; <Verify>INSERT: verified salary change</Verify></>,
            "7 months",
          ],
        ]}
        note="What every one of these has in common is not the course — it's a deployed artefact they could defend. Ask any provider, including this one, for two references from the last six months who were not chosen as testimonials."
      />
      <Callout label="Before you enrol anywhere, including here">
        Ask for: the current syllabus PDF with a version date; your batch's instructor name; the
        doubt-resolution SLA in writing; permission to observe one real class; the refund and
        deferral policy in writing; and whether the EMI is a loan in your name. If any of these is
        refused, that is your answer.
      </Callout>
    </Section>
  );
}

export function Reviews() {
  return (
    <Section
      id="reviews"
      eyebrow="Section 6"
      title="The Ten Reviews — Identical Structure, So You Can Compare Honestly"
    >
      <P>
        Every review below follows the same shape: snapshot, what it is, curriculum verdict,
        delivery reality, projects, career support, choose-it/skip-it, and real limitations. The #1
        pick gets its own expanded section immediately after, held to the same standard.
      </P>
      {REVIEWS.map((r) => (
        <ReviewCard key={r.rank} r={r} />
      ))}
    </Section>
  );
}

export function HonorableMentions() {
  return (
    <Section
      id="honorable-mentions"
      eyebrow="Section 7"
      title="Honorable Mentions — Good Programs, and Exactly Why They Missed the Ten"
    >
      <P>
        Exclusion here is not condemnation. In several cases these are the right answer for a
        specific reader; they simply lost on one of the six pillars against the ranked ten.
      </P>
      <Table
        head={["Program", "Real strength", "Why it missed the top ten"]}
        rows={[
          ["Fast.ai (Practical Deep Learning)", "The best free top-down deep learning course ever made; genuinely opinionated teaching", "Zero structure, no support, no portfolio review; completion without external accountability is very low"],
          ["Hugging Face courses (NLP, LLM, agents)", "Closest thing to current-frontier free material on transformers and agents", "Reference-grade, not a program: no cohort, no review, no career layer"],
          ["Kaggle Learn + competitions", "Unmatched for practical feature engineering and evaluation reps", "Micro-courses; no depth ladder, no credential, no theory"],
          ["NPTEL / SWAYAM (IIT faculty)", "Genuine IIT instruction at ₹0–₹1,000; strong theory", "Academic pacing, weak on GenAI/MLOps, minimal hands-on production work"],
          ["MIT Professional Education", "Excellent brand and rigour for leaders", "Cost per capability is high; Layer 5–6 gaps similar to other academic programs"],
          ["Georgia Tech OMSCS", "Outstanding value for an accredited master's (~US$7K–US$10K)", "It's a degree, not a course — 2–3 years, admissions, different decision entirely"],
          ["Harvard CS50 AI / edX tracks", "Great conceptual grounding, free to audit", "Ceiling around Level 2; no production or agent content"],
          ["Intellipaat / GUVI / PW Skills", "Aggressive Indian pricing; some genuinely good instructors", "Quality variance between batches; verify instructor and current GenAI module before paying"],
          ["Udemy top AI courses", "₹500–₹5,000 for a single targeted skill; excellent top-ups", "No review, no accountability, no credential value; freshness is a coin flip"],
          ["AWS / Azure AI certifications", "Strong enterprise signal where those clouds dominate", "Ecosystem-locked and thin on foundations, same structural limit as the Google path"],
          ["Andrej Karpathy's Zero-to-Hero", "The best free explanation of how LLMs are actually built", "A lecture series for people who already code well; no scaffolding at all"],
          ["Corporate LMS AI tracks (internal)", "Free, employer-endorsed, sometimes domain-specific", "Almost always Level 1–2 literacy content marketed internally as upskilling"],
        ]}
      />
      <Callout tone="good" label="The pattern in the exclusions">
        Nearly every honorable mention is excluded for the same two reasons: no human reads your
        code, or the 2026 layers (production RAG, agents, MCP, LLMOps) are missing. Those two gaps
        explain more failed AI job hunts than any curriculum disagreement.
      </Callout>
    </Section>
  );
}
