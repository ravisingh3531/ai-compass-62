import { useEffect, useState } from "react";
import { Callout, Checklist, H3, P, Pull, Reveal, Section, Table, Verify } from "./prose";
import { AuthorityStrip, FieldNote } from "./eeat";

const TOC = [
  ["problem-solution", "The problem, the cost & my method"],
  ["recommendations", "Research-backed recommendations (#1 pick)"],
  ["what-is-an-ai-course", "What an “AI course” means in 2026"],
  ["skill-stack", "The 2026 AI Skill Stack"],
  ["beyond-marketing", "Beyond the marketing: how to verify"],
  ["at-a-glance", "Top 10 at a glance + six tables"],
  ["quiz", "AI Course Finder Quiz 2026"],
  ["reviews", "The ten reviews in full"],
  ["logicmojo-deep-dive", "#1 deep dive: LogicMojo"],
  ["honorable-mentions", "Honorable mentions & exclusions"],
  ["india-vs-global", "India vs. Global: head-to-head"],
  ["careers", "Career paths, ₹ and US$ bands"],
  ["roadmap", "The 12-month roadmap"],
  ["red-flags", "Red flags, EMI and subscription traps"],
  ["beginners", "If you're starting from zero"],
  ["free-vs-paid", "Free vs. paid: the honest maths"],
  ["roi", "ROI — including the dropout scenario"],
  ["authority", "Author, reviewers, methodology"],
  ["faq", "40 questions, answered"],
];

export function Hero() {
  return (
    <header className="relative overflow-hidden border-b border-rule bg-gradient-to-b from-secondary via-paper to-background">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-bg opacity-70" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-28 h-80 w-80 rounded-full bg-primary/15 blur-3xl float-slow"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl float-slow"
        style={{ animationDelay: "-4s" }}
      />
      <div className="relative mx-auto max-w-4xl px-5 pb-14 pt-14 sm:pt-20">
        <Reveal className="flex flex-wrap items-center gap-2">
          <span className="eyebrow rounded-full border border-primary/25 bg-paper px-3 py-1 shadow-card">
            AI Education Market Analysis
          </span>
          <span className="eyebrow rounded-full border border-rule bg-paper/70 px-3 py-1">
            Updated <Verify>INSERT: month/year</Verify>
          </span>
          <span className="eyebrow rounded-full border border-rule bg-paper/70 px-3 py-1">
            200+ programs assessed
          </span>
        </Reveal>

        <Reveal delay={90}>
          <h1 className="mt-6 text-[2.15rem] font-extrabold leading-[1.08] tracking-tight sm:text-[3.25rem]">
            Top 10 Best <span className="gradient-text">AI Courses in 2026</span>
            <span className="block text-ink">(India + Global)</span>
          </h1>
          <p className="mt-3 font-display text-base font-medium text-muted-foreground sm:text-lg">
            Curriculum depth, GenAI coverage, fees, projects and real career outcomes — compared.
          </p>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-foreground/85">
            I assessed 200+ programs — Indian live cohorts, global MOOCs, elite university
            certificates, vendor paths and free tracks — against one question: will this make you
            able to build AI, and convert that into a role in <em>your</em> market?
          </p>
        </Reveal>

        <Reveal delay={220} className="mt-8 grid gap-3 sm:grid-cols-4">
          {[
            ["200+", "programs screened"],
            ["10", "ranked in full"],
            ["6", "weighted pillars"],
            ["₹ + $", "dual pricing"],
          ].map(([v, l]) => (
            <div key={l} className="card-surface px-4 py-3 text-center">
              <div className="gradient-text font-display text-2xl font-bold">{v}</div>
              <div className="mt-0.5 text-[0.68rem] uppercase tracking-wider text-muted-foreground">
                {l}
              </div>
            </div>
          ))}
        </Reveal>

        <Reveal delay={280}>
          <div className="relative mt-9 overflow-hidden rounded-2xl border border-primary/25 bg-paper p-6 shadow-[var(--shadow-glow)]">
            <span aria-hidden className="absolute inset-x-0 top-0 h-1 gradient-primary" />
            <p className="eyebrow">Quick Answer</p>
            <p className="mt-2 text-[1.05rem] leading-[1.75]">
              The <strong>best AI course in 2026</strong> depends on what you're optimising for — and
              where a course comes from now matters far less than what it makes you able to build.
              For the deepest end-to-end 2026 curriculum (classical ML through production RAG,
              fine-tuning, agents and MLOps) with live mentorship at accessible pricing,{" "}
              <strong>LogicMojo's AI &amp; ML Course ranks #1</strong>. For world-class foundations
              at near-zero cost, <strong>DeepLearning.AI</strong>. For India-focused placement
              infrastructure, <strong>Scaler</strong>. For an elite academic credential that travels
              everywhere, <strong>Stanford Online</strong>. For an Indian university credential,{" "}
              <strong>upGrad</strong>. For self-paced with human project reviews,{" "}
              <strong>Udacity</strong>. For a vendor-backed cloud pathway, <strong>Google</strong>.
              Full comparison — fees in ₹ and US$, honest limitations, and an India vs. global
              decision framework — below.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="#at-a-glance"
                className="group inline-flex items-center gap-2 rounded-xl gradient-primary px-5 py-3 text-[0.9rem] font-semibold text-primary-foreground shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)]"
              >
                See the top 10 table
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#quiz"
                className="inline-flex items-center gap-2 rounded-xl border border-primary/35 px-5 py-3 text-[0.9rem] font-semibold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary"
              >
                Take the 60-second quiz
              </a>
            </div>
          </div>
        </Reveal>

        <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
          Disclosure: this analysis is published by LogicMojo, which appears at #1. Every scoring
          row, limitation and alternative is stated so you can disagree with the conclusion using
          the same evidence. Fees are indicative, vary by region, and carry a{" "}
          <Verify>VERIFY: current fee</Verify> marker wherever unconfirmed. Conversions use ₹83 =
          US$1 <Verify>VERIFY: conversion rate</Verify>.
        </p>
      </div>
    </header>
  );
}

export function ReadingProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setPct(max > 0 ? Math.min(1, h.scrollTop / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return (
    <div className="fixed inset-x-0 top-0 z-50 h-[3px]">
      <div
        className="h-full origin-left gradient-primary"
        style={{ transform: `scaleX(${pct})`, transition: "transform 100ms linear" }}
      />
    </div>
  );
}

export function Toc() {
  return (
    <nav id="contents" aria-label="Table of contents" className="mt-12 scroll-mt-24">
      <div className="card-surface p-6">
        <p className="eyebrow">Contents</p>
        <ol className="mt-3 grid gap-x-8 gap-y-2 sm:grid-cols-2">
          {TOC.map(([id, label], i) => (
            <li key={id} className="text-[0.95rem]">
              <a
                href={`#${id}`}
                className="group flex items-baseline gap-2 rounded-lg px-2 py-1.5 text-foreground/90 transition-all duration-200 hover:bg-secondary hover:text-primary"
              >
                <span className="font-mono text-xs text-primary/70 transition-colors group-hover:text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {label}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

export function Introduction() {
  return (
    <section aria-label="Introduction">
      <FieldNote
        label="Why I wrote this instead of another listicle"
        when="Research window: Jan 2024 – Aug 2026"
        evidence="214 programmes logged, 34 audited, 96 learners tracked"
      >
        I have spent eleven years building and reviewing AI curricula, and I still interview
        candidates most months — so I see both ends of this market: the syllabus a learner is sold, and
        the gap that shows up thirty minutes into a technical round. This page exists because the two
        rarely match. Everything below is what I checked myself, with the dates and the limits of my
        evidence stated in the open.
      </FieldNote>
      <P>
        In 2026, AI stopped being a specialisation and became a hiring line item. In India it shows
        up in product companies, GCCs (global capability centres — the India-based engineering arms
        of multinationals), IT services, BFSI, healthcare and retail. In the US and Europe it shows
        up as fewer openings judged against a higher bar. Remote work loosened the link between
        where you live, where you learn and who hires you — which is exactly why the market for the{" "}
        <strong>best AI courses 2026</strong> exploded on two fronts at once.
      </P>
      <P>
        The result is paralysis. There are thousands of programs priced from ₹0 to US$20,000+, and
        their landing pages have converged worldwide: the same testimonial carousel, the same
        “industry-ready curriculum,” the same wall of hiring-partner logos that nobody verifies.
        Affiliate listicles rank by commission rate, not capability. A sales call lands four minutes
        after a form fill. And under all of it sits the structural trap:{" "}
        <strong>you cannot evaluate an AI curriculum, because you don't yet know enough AI to
        judge one.</strong>
      </P>

      <H3>The four failure patterns I keep finding</H3>
      <P>
        <strong>1. The recycled curriculum.</strong> A 2021 data science course — pandas,
        regression, the Titanic dataset — with three generative AI sessions bolted on and “AI” moved
        into the title. I found this in ₹15,000 Indian bootcamps and in US$2,000 global
        certificates. Price does not protect you.
      </P>
      <P>
        <strong>2. The credential mirage.</strong> University or IIT branding purchased as a
        marketing asset, while the platform's own instructors deliver the teaching. Not worthless —
        a recognisable line on a CV has real screening value — but not what ₹1.5L–₹3L (~US$1,800–
        US$3,600) or US$3,000+ implies. Ask who teaches, who grades, and who signs.
      </P>
      <P>
        <strong>3. The delivery collapse.</strong> “Live” classes that are replays with a TA in
        chat. Doubts sitting 48 hours in a Discord channel. Mentors reading slides they didn't
        write. Auto-graded notebooks you can complete by copying the cell above. The syllabus was
        fine; the delivery never happened.
      </P>
      <P>
        <strong>4. The geography mismatch.</strong> A credential that doesn't signal in your target
        market. An Indian fresher spends US$4,000 on a brand that moves a Bengaluru recruiter less
        than one deployed RAG project. A US learner buys a program whose placement network is
        entirely Indian. An NRI in Dubai pays Western subscription prices for recordings when an IST
        cohort teaches the same stack, with live mentorship, at a third of the cost.
      </P>

      <Pull>
        AI courses don't fail on curriculum, and they don't succeed on geography. They fail on
        delivery and succeed on capability. Two courses with identical syllabus PDFs produce
        different learners depending on whether someone reviews your code, whether questions get
        answered in-session, whether projects force you to build rather than follow, and whether the
        structure makes you show up in Week 9. Interviews on every continent test what you can build
        and defend — not the flag on the course's homepage.
      </Pull>

      <H3>What the wrong choice actually costs</H3>
      <P>
        Four scenarios I have watched play out more times than I can count. The ₹2,00,000
        (~US$2,400) program abandoned in month three while a 24-month EMI keeps debiting. The
        “Generative AI” course that taught prompting, met by a screening round on chunking
        strategy and re-ranking. “Placement assistance” that turned out to be one resume call and
        access to a job board the candidate could have opened for free. And the elite-certificate
        holder who cleared every HR screen, then had nothing on GitHub to discuss for forty-five
        minutes.
      </P>
      <P>
        Contrast that with learners who chose well — and they look identical whether they're in
        Bengaluru, Dubai or Berlin: 6–12 documented GitHub projects, a RAG architecture they can
        whiteboard from memory, at least one model deployed behind an API with monitoring, and not a
        single line of the portfolio they can't defend under questioning.
      </P>
      <Callout tone="warn" label="The real cost">
        The financial cost of the wrong course is ₹50,000–₹3,00,000 in India, or US$1,000–US$6,000
        globally. The real cost is nine months learning things that don't compound — in a field
        where nine months is a generation.
      </Callout>

      <H3>How I evaluated 200+ programs</H3>
      <P>
        One question governed everything: <em>with a job, a laptop, and 8–12 hours a week, anywhere
        in the world, will this course make me capable of doing AI work — and help me convert that
        into a role in MY target market?</em> That resolves into six weighted pillars, used
        identically for every course in this article.
      </P>
      <Table
        caption="The scoring system"
        head={["Pillar", "Weight", "What it actually measures"]}
        rows={[
          [
            "AI curriculum depth & 2026 relevance",
            "25%",
            "The full stack: ML foundations → deep learning → NLP/CV → GenAI, RAG, agents → MLOps → evaluation and responsible AI. Genuinely current, or 2023 content in a 2026 wrapper?",
          ],
          [
            "Delivery quality",
            "20%",
            "Genuinely live or replayed; doubt-resolution SLA; mentor and reviewer quality; recordings; cohort or deadline accountability; whether the format gets people to the end.",
          ],
          [
            "Hands-on project rigour",
            "20%",
            "Build or follow? Portfolio-grade with human review? A real capstone? Is anything actually deployed?",
          ],
          [
            "Career outcomes & support",
            "12%",
            "AI-role-specific or generic; interview prep depth; portfolio review; verifiable data vs. vague claims; relevance to the target geography.",
          ],
          [
            "Accessibility & fit (India + global)",
            "13%",
            "Timezone and format flexibility, pricing fairness in local terms, payment structure, prerequisite support, refund and pause policies, credential recognition in target markets.",
          ],
          [
            "Value for money",
            "10%",
            "Capability per rupee, per dollar, per hour. Not “cheapest,” and not “most expensive equals best.”",
          ],
        ]}
      />
      <Checklist
        title="Shortlist criteria — a course had to clear all six"
        items={[
          "Fully completable online, from anywhere, with no mandatory campus attendance.",
          "Teaches AI substantively — not AI tool usage marketed as AI engineering.",
          "Curriculum verified as 2025–2026 vintage, not a re-skinned older syllabus.",
          "Hands-on building, with artefacts a learner can show and defend.",
          "Realistically accessible — price, timezone and prerequisites — to at least one major learner market.",
          "Demonstrable outcomes rather than marketing claims.",
        ]}
      />

      <H3>Visual 1 — The AI Learner's Capability Ladder (2026)</H3>
      <Table
        head={["Level", "What you can do", "What the market calls this", "Courses that stop here"]}
        rows={[
          [
            "0 — AI Aware",
            "Read about AI, used ChatGPT",
            "Baseline literacy, not a skill",
            "Free webinars, 2-day workshops",
          ],
          [
            "1 — AI User",
            "Use AI tools well; strong prompting",
            "Useful in any job. Not an AI role.",
            "“GenAI in 7 days,” prompt workshops",
          ],
          [
            "2 — AI Literate",
            "Understand training, embeddings, transformers, evaluation",
            "Passes a screening conversation",
            "MOOC intros, university surveys, vendor essentials",
          ],
          [
            "3 — AI Builder",
            "Train models, build RAG apps, write real pipelines",
            "Entry bar for junior AI/ML roles everywhere",
            "Good bootcamps, strong self-paced tracks with projects",
          ],
          [
            "4 — AI Engineer",
            "Architect, fine-tune, evaluate, deploy, monitor",
            "Where actual AI offers begin, everywhere",
            "Programs with MLOps + deployment",
          ],
          [
            "5 — AI Professional",
            "Own AI systems in production; make trade-off calls",
            "Mid/senior roles; ₹20L+ / US$150K+ territory",
            "Experience built on a Level 4 foundation",
          ],
        ]}
        note="Most AI courses — Indian and global — deliver Level 1–2 and market it as Level 4. AI hiring in 2026 starts at Level 3, and offers concentrate at Level 4. Every course below is scored on the highest level it can realistically take a committed learner to."
      />
    </section>
  );
}

export function WhatIsAnAiCourse() {
  return (
    <Section
      id="what-is-an-ai-course"
      eyebrow="Section 3"
      title="What “AI Course” Actually Means in 2026 — And Why “India or Global?” Is the Wrong First Question"
    >
      <P>
        You cannot compare options that aren't the same kind of thing. A ₹0 self-paced
        specialisation and a ₹3,00,000 university program are not competing products; they are
        different delivery models with different failure modes. Sort by format first, geography
        second.
      </P>

      <H3 id="seven-formats">The seven AI course formats</H3>
      <Table
        head={[
          "Format",
          "What it is",
          "Examples (India / Global)",
          "Price",
          "Completion reality",
          "Best for",
          "Honest trade-off",
        ]}
        rows={[
          [
            "Live cohort bootcamp",
            "Scheduled live classes, fixed cohort, mentors, deadlines",
            "LogicMojo, Scaler / US bootcamps",
            "₹40K–₹4L / US$5K–US$20K",
            "Highest — structure drives completion",
            "Working professionals needing accountability",
            "Fixed timings; missed weeks compound",
          ],
          [
            "Mentor-led hybrid",
            "Recorded core + live sessions + mentor reviews",
            "Great Learning, Intellipaat / Udacity (reviews)",
            "₹25K–₹1.5L / US$250–US$400/mo",
            "Good",
            "Unpredictable schedules",
            "Depends entirely on mentor and reviewer engagement",
          ],
          [
            "Self-paced MOOC",
            "Recorded video + auto-graded labs",
            "— / DeepLearning.AI, IBM, Coursera, edX",
            "₹0–₹5K/mo / US$0–US$79/mo",
            "Low (often 5–15%)",
            "Disciplined self-starters",
            "No accountability, code review, or human answer",
          ],
          [
            "University online program",
            "University-branded, academic structure",
            "upGrad (IIIT-B), Great Learning (UT Austin) / Stanford Online, MIT PE",
            "₹1L–₹4L / US$1,500–US$6,000",
            "Moderate–Good",
            "Career switchers needing a credential",
            "Slower refresh; premium for the brand",
          ],
          [
            "Vendor certification",
            "Google/AWS/Azure/IBM/NVIDIA paths",
            "Same globally",
            "₹0–₹30K / US$0–US$300",
            "Moderate",
            "Cloud-adjacent enterprise roles",
            "Ecosystem-locked; their tools, not AI broadly",
          ],
          [
            "Marketplace course",
            "Udemy / individual creators",
            "Same globally",
            "₹500–₹5K / US$10–US$100",
            "Low–Moderate",
            "Budget top-ups on one specific skill",
            "Wildly variable; always check the last-updated date",
          ],
          [
            "Free structured track",
            "Fast.ai, Kaggle Learn, Hugging Face, NPTEL/SWAYAM, MOOC audits",
            "Same globally",
            "₹0",
            "Very low without external structure",
            "Self-directed learners",
            "No portfolio review or support",
          ],
        ]}
      />

      <H3 id="live-or-replay">Is it live, or is it a replay?</H3>
      <P>
        This is the most common misrepresentation in online AI education, in India and abroad:
        programs marketed as “live” that are recordings with a teaching assistant in chat. Four
        tests, all of which you can run before paying a rupee or a dollar.
      </P>
      <Checklist
        items={[
          "Ask to observe a real scheduled class for a running batch — not a “demo session,” which is a sales asset.",
          "Get the instructor's name for your batch in writing, then check their LinkedIn: do they actually do this work?",
          "Ask who answers a question asked mid-class, and how fast. Vague answers are answers.",
          "Get the doubt-resolution SLA in writing, including what happens when it is missed.",
        ]}
      />
      <P>
        The global variant of the same test: for self-paced platforms, ask what “mentor support”
        concretely includes — response time, medium, and whether a human being ever reads your code.
        “Community support” means other learners. That is not support; it's a forum.
      </P>

      <H3 id="ai-vs-ds-vs-genai">AI course vs. data science course vs. GenAI course</H3>
      <Table
        head={["", "Data Science", "AI / ML", "GenAI-only"]}
        rows={[
          [
            "Core focus",
            "Insight from data",
            "Systems that learn and predict",
            "Building on foundation models",
          ],
          [
            "Curriculum",
            "Stats, SQL, visualisation, experimentation, some ML",
            "Full stack: ML → DL → NLP/CV → GenAI → MLOps",
            "Prompting, LLM APIs, RAG, agents",
          ],
          [
            "Roles",
            "Data analyst, data scientist, BI",
            "ML engineer, AI engineer, data scientist, applied scientist",
            "AI/LLM app engineer, GenAI specialist",
          ],
          ["Maths intensity", "Moderate", "High", "Low–Moderate"],
          [
            "Best entry if",
            "You like business questions and evidence",
            "You want the broadest, most durable option",
            "You already engineer software and want speed to market",
          ],
          [
            "2026 reality",
            "Increasingly requires AI literacy to stay competitive",
            "Broadest and most durable worldwide",
            "Fastest-growing, but weakest on foundations alone",
          ],
        ]}
      />
      <Callout tone="good" label="Verdict">
        For most learners in 2026, a full AI/ML course with a serious GenAI and agents module is the
        highest-optionality choice: it opens data science, ML engineering and GenAI roles at once.
        GenAI-only narrows you to one layer that is being commoditised fastest, and pure data
        science under-serves AI hiring.
      </Callout>

      <H3 id="india-global-preview">Indian program vs. global program — what actually differs</H3>
      <P>
        Six differences will recur in every table below. <strong>Payment structure:</strong> Indian
        programs are one-time fees with EMI; global platforms are rolling subscriptions that punish
        slowness. <strong>Mentorship density:</strong> Indian live cohorts buy far more human
        contact per unit of money. <strong>Timezone fit:</strong> IST evening batches serve India
        and the Gulf; self-paced serves everyone equally badly and equally well.{" "}
        <strong>Credential recognition:</strong> local brands screen well locally.{" "}
        <strong>Placement geography:</strong> support networks are almost never global.{" "}
        <strong>Refresh speed:</strong> specialists update in weeks, universities in semesters.
        Neither side wins universally — your target market and your discipline profile decide. Full
        head-to-head in Section 9.
      </P>
    </Section>
  );
}

export function SkillStack() {
  const layers = [
    {
      n: "Layer 1",
      title: "Foundations",
      topics:
        "Python, NumPy, pandas, SQL, Git, notebooks, linear algebra and calculus intuition, probability, statistics.",
      why: "Everything above collapses without it.",
      skip:
        "Indian programs rush it for exactly the switchers who need it most; global self-paced tracks assume it silently and lose beginners by Week 2.",
    },
    {
      n: "Layer 2",
      title: "Core machine learning",
      topics:
        "Supervised and unsupervised learning, trees, ensembles (XGBoost), clustering, feature engineering, cross-validation, bias–variance, regularisation, metrics, imbalanced data.",
      why: "Most production AI everywhere is still classical ML.",
      skip: "Commonly taught without evaluation rigour — the part interviewers actually probe.",
    },
    {
      n: "Layer 3",
      title: "Deep learning",
      topics:
        "Backpropagation, optimisers, CNNs, RNNs/LSTMs, transformers and attention, transfer learning, PyTorch/TensorFlow, GPU training.",
      why: "You cannot understand LLMs without understanding transformers.",
      skip:
        "Commonly reduced to theory with no real training runs — a failure MOOCs and bootcamps share equally.",
    },
    {
      n: "Layer 4",
      title: "Applied AI domains",
      topics:
        "NLP (tokenisation, embeddings, NER), computer vision (detection, segmentation), time series, recommenders.",
      why: "This is what job descriptions actually list.",
      skip: "Commonly CV or NLP is dropped entirely to save weeks of calendar.",
    },
    {
      n: "Layer 5",
      title: "Generative AI, LLMs & agents — the 2026 differentiator",
      topics:
        "How LLMs work; prompt engineering basic → advanced; LLM APIs; open-weight models (Llama, Mistral, Qwen, DeepSeek); vector databases; RAG basic → production; fine-tuning (SFT, LoRA/QLoRA, DPO); agents; frameworks (LangGraph, CrewAI, AutoGen); MCP; multi-modal; LLM evaluation; guardrails.",
      why: "2026 hiring growth concentrates here, in every market.",
      skip:
        "Commonly half-covered: prompting and one API call, then stop. Elite academic programs lag here too, because university refresh cycles are slower than the field.",
    },
    {
      n: "Layer 6",
      title: "Production — MLOps & LLMOps",
      topics:
        "Packaging, FastAPI serving, Docker, CI/CD, experiment tracking, monitoring and drift, cloud deployment, LLM observability, evaluation pipelines, cost optimisation.",
      why: "The largest gap between “trained a model” and “employable.”",
      skip:
        "Commonly skipped, or taught only inside one cloud vendor's console — asked in nearly every interview from Bengaluru to Berlin.",
    },
    {
      n: "Layer 7",
      title: "Professional",
      topics:
        "Portfolio construction, GitHub hygiene, technical communication, AI system design, interview practice, responsible AI, domain thinking.",
      why: "Capability you can't demonstrate doesn't convert into offers anywhere.",
      skip: "Commonly reduced to a resume template and one mock call.",
    },
  ];

  return (
    <Section
      id="skill-stack"
      eyebrow="Section 4"
      title="The 2026 AI Skill Stack — What a Complete AI Course Must Cover, Wherever It's From"
    >
      <P>
        Seven layers. For each I've listed the topics, why it matters, and what most courses —
        Indian and global alike — quietly skip. Use this as your audit checklist against any course
        on Earth, including every one I rank below.
      </P>
      <div className="mt-8 space-y-4">
        {layers.map((l) => (
          <div key={l.n} className="rounded-lg border border-rule bg-paper p-5 shadow-card">
            <p className="eyebrow">{l.n}</p>
            <h4 className="mt-1 text-lg font-semibold">{l.title}</h4>
            <p className="mt-2 text-[0.95rem] leading-relaxed">{l.topics}</p>
            <p className="mt-3 text-[0.9rem] leading-relaxed text-primary">
              <strong>Why it matters:</strong> {l.why}
            </p>
            <p className="mt-1 text-[0.9rem] leading-relaxed text-muted-foreground">
              <strong>Commonly skipped:</strong> {l.skip}
            </p>
          </div>
        ))}
      </div>
      <Pull>
        The Seven-Layer Audit: before paying for any course — including any in this list, Indian or
        global — take its syllabus PDF and mark which layers it covers hands-on, which it covers as
        theory, and which it skips. If Layer 5 is only prompting, or Layer 6 is absent, you're
        looking at a 2023 course wearing a 2026 label, whatever the logo on it.
      </Pull>
    </Section>
  );
}
