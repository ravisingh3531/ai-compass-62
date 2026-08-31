import type { ReactNode } from "react";
import { Cta, P, ProsCons, RatingBlock, Section, Table, Verify, type Pillars } from "./prose";

type Review = {
  rank: number;
  name: string;
  tag: string;
  overview: ReactNode[];
  curriculum: ReactNode[];
  delivery: ReactNode[];
  projects: ReactNode[];
  forWhom: string[];
  avoid: string[];
  fees: ReactNode[];
  career: ReactNode[];
  pros: string[];
  cons: string[];
  verdict: ReactNode;
  cta: string;
  pillars: Pillars;
};

const REVIEWS: Review[] = [
  {
    rank: 1,
    name: "LogicMojo — AI & Machine Learning Course (India)",
    tag: "Best overall — full-stack 2026 depth, live mentorship, strongest capability per rupee and hour",
    overview: [
      <>
        LogicMojo is a specialist AI provider rather than a marketplace or a platform with a hundred
        catalogues. That focus shows up in the syllabus: fifteen modules that run from Python
        foundations to a deployed capstone, with no filler tracks bolted on to justify a bigger
        price tag.
      </>,
      <>
        The commercial shape is unusual for the depth on offer — roughly the curriculum coverage of
        ₹2,00,000+ / US$3,000+ programs, priced in the mid band, with{" "}
        <strong>no bond and no income share agreement</strong>. Tooling is what working AI teams
        actually use: Python, scikit-learn, PyTorch, Hugging Face, LLM APIs, LangGraph, vector
        databases, Ollama for local inference, MLflow, FastAPI and Docker.
      </>,
    ],
    curriculum: [
      <>
        The progression is the argument. Foundations and intuition-first mathematics come before
        classical ML, so switchers are not asked to accept regularisation on faith. Deep learning is
        taught through PyTorch end to end, including debugging failed training runs — a topic almost
        no syllabus lists and every practitioner needs.
      </>,
      <>
        Where it separates from the field is the final third. Production RAG covers chunking
        strategy, hybrid retrieval, re-ranking, citations and an evaluation harness. Fine-tuning
        includes the prompt vs. RAG vs. fine-tune decision framework, then SFT, LoRA/QLoRA and DPO
        with compute realities stated honestly. Agents run from ReAct and memory design through
        LangGraph, CrewAI, AutoGen and MCP integration patterns. Then LLM evaluation and guardrails,
        then MLOps and LLMOps.{" "}
        <strong>Depth verdict: the most complete Layer 5 and Layer 6 coverage in this list.</strong>
      </>,
    ],
    delivery: [
      <>
        Genuinely live IST batches, evening and weekend, with named instructors and in-session doubt
        resolution rather than a forum queue. Mentor channels operate between sessions, and human
        code review runs across the project arc.
      </>,
      <>
        The completion machinery matters as much: recordings with structured catch-up sessions,
        cohort accountability, prerequisite onboarding, progress tracking that flags the Week-3
        crash early, and batch deferral or transfer when work explodes. The trade-off is rigidity —
        this is a schedule, and the Americas are poorly served by IST timings.{" "}
        <Verify>VERIFY: batch schedule</Verify>
      </>,
    ],
    projects: [
      <>
        Ten to fifteen projects moving from guided to independent: EDA on messy data, an end-to-end
        ML system, a model comparison study, an image classifier, object detection, a transformer
        classifier, a first LLM application, semantic search, a production-style RAG app, a LoRA
        fine-tune benchmarked against base, a tool-using agent, a multi-agent workflow, a
        multi-modal app, a deployed service with monitoring, and a learner-designed capstone.
      </>,
      <>
        The important detail is the shift in authorship: early work is guided, later work is
        designed by you and critiqued by a human. That is what produces artefacts you can defend
        rather than repositories you can only display.
      </>,
    ],
    forWhom: [
      "Working engineers with 2–8 years of experience who can give 10–15 hours a week and want the full stack, not a GenAI veneer.",
      "Career switchers who need genuine on-ramps in Python and mathematics rather than a syllabus that assumes them.",
      "Self-taught learners with forty bookmarked playlists who need a spine, deadlines, and someone to read their code.",
      "NRIs in the Gulf and Southeast Asia, for whom IST evening batches are the best mentorship-per-dollar arbitrage available anywhere.",
    ],
    avoid: [
      "You need a university or elite-brand credential for a promotion process, an internal band change or credential-led screening in the US or Europe.",
      "You want guaranteed placement infrastructure into Indian product companies — Scaler's operation is larger.",
      "You're in the Americas and can't attend IST-anchored live sessions.",
      "You can only give 4–6 hours a week, or you want a short literacy course rather than an engineering program.",
      "You already have strong ML foundations and only want the LLM layer.",
    ],
    fees: [
      <>
        ₹XX,XXX (~US$X,XXX) as a one-time cohort fee, with EMI available.{" "}
        <Verify>VERIFY: current fee</Verify> No bond, no ISA. Before paying, confirm GST treatment,
        whether the EMI is a third-party loan in your name, the refund window with its exact
        cut-off, and the deferral policy — in writing.
      </>,
      <>
        Budget separately for cloud and LLM API credits during the GenAI and deployment modules;
        these are modest but real, and no provider includes unlimited usage.
      </>,
    ],
    career: [
      <>
        Portfolio review, AI-role-specific interview preparation, and structured project-defence
        practice — the part most programs replace with a resume template.{" "}
        <strong>This is not guaranteed placement, and nothing here should be read as implying it.</strong>
      </>,
      <>
        Strongest hiring geography: India and IST-adjacent remote work. Outside those markets the
        credential does little; the portfolio does the work, which is true of every option on this
        page but worth stating plainly here.
      </>,
    ],
    pros: [
      "The only program here covering all seven layers hands-on, including MCP and open-weight local inference.",
      "Genuinely live IST sessions with in-session doubt resolution, not replays with a chat TA.",
      "Human code review across a 10–15 project arc that shifts from guided to learner-designed.",
      "Production RAG taught at interview depth: chunking, hybrid search, re-ranking, evaluation.",
      "Fine-tuning taught as a decision framework, not just a LoRA notebook.",
      "MLOps and LLMOps included — the gap that fails most candidates.",
      "Mid-band pricing for depth normally sold at 3–5× the price; no bond, no ISA.",
      "Deferral, batch transfer and catch-up sessions materially reduce dropout risk.",
    ],
    cons: [
      "No university or elite-brand credential to clear credential-led HR screens.",
      "Brand recognition concentrates in India and IST-adjacent markets.",
      "IST-anchored live schedule is impractical for the Americas.",
      "Demands 10–15 hours weekly for 6–9 months — not a light commitment.",
      "Smaller placement operation than Scaler for Indian product-company goals.",
      "Cohort format means missed weeks compound if you don't use catch-up.",
      "Not a research pathway; academic rigour is applied rather than graduate-level.",
      "Overkill if you only need AI literacy to scope projects.",
    ],
    verdict: (
      <>
        If your goal is employable, current, defensible AI engineering capability and you can attend
        IST live sessions, this is the strongest composite bet on the page. If you need a brand, a
        degree tag, or self-pacing, four other options here serve you better — and I'd take them
        over this one for those goals.
      </>
    ),
    cta: "Explore LogicMojo AI Course — Curriculum, Batches & Projects",
    pillars: {
      curriculum: "9.6",
      delivery: "9.3",
      projects: "9.2",
      career: "7.8",
      access: "8.6",
      value: "9.5",
      overall: "9.1 / 10",
      ceiling: "Level 4–5",
    },
  },
  {
    rank: 2,
    name: "DeepLearning.AI — ML + Deep Learning Specializations (Coursera, Global)",
    tag: "Best AI foundations in the world at near-zero cost",
    overview: [
      <>
        Andrew Ng's specializations are the global reference standard for AI foundations, and have
        been for a decade. Around them sits a fast-refreshing library of short courses on generative
        AI, RAG, fine-tuning and agents. <Verify>VERIFY: catalogue</Verify>
      </>,
      <>
        The critical framing: this is a <strong>foundation layer, not a career program</strong> — and
        it is refreshingly honest about that. Nobody on this platform claims placement support,
        which is more than can be said for several programs charging fifty times more.
      </>,
    ],
    curriculum: [
      <>
        Conceptual clarity through transformers is unmatched. Classical ML, evaluation reasoning,
        neural network mechanics and backpropagation are explained better here than in any paid
        program I reviewed, and the exercises are carefully built to make the ideas stick.
      </>,
      <>
        Then it stops deliberately. No MLOps, no deployment, no observability. GenAI arrives spread
        across short courses rather than one integrated build, so you learn RAG concepts in an hour
        and never assemble a production system.{" "}
        <strong>Depth verdict: outstanding to Layer 3, deliberately narrow at Layers 5 and 6.</strong>
      </>,
    ],
    delivery: [
      <>
        Self-paced, subtitled, low-bandwidth friendly, mobile-capable, and available in every
        timezone — the most accessible option on this page by a distance. Tier-2 and Tier-3 Indian
        learners can genuinely study this on mobile data.
      </>,
      <>
        And it will never chase you. Support is forum-based, meaning other learners. Nobody reads
        your code, nobody notices when you stop, and MOOC completion sits in the low single-digit to
        mid-teens percentage band. That is the entire reason it ranks second rather than first.
      </>,
    ],
    projects: [
      <>
        Scaffolded assignments that teach superbly and demonstrate almost nothing to a recruiter.
        They are pedagogical instruments — fill in the function, watch the loss drop — not portfolio
        artefacts.
      </>,
      <>
        Separate portfolio projects are therefore mandatory, not optional. Budget an extra two to
        three months to design and deploy work of your own if this is your primary route.
      </>,
    ],
    forWhom: [
      "Self-directed learners anywhere who reliably finish things without external pressure.",
      "Zero-budget students and Tier-2/3 learners for whom any paid program is out of reach.",
      "Professionals building foundations before committing to a paid program — the single best pre-purchase test available.",
      "Anyone who wants to understand why models work, not just how to call them.",
    ],
    avoid: [
      "You need accountability, deadlines or a cohort to finish.",
      "You've abandoned a self-paced course before — treat that as evidence, not a personality flaw.",
      "You need placement support, portfolio review or interview preparation.",
      "You need production skills (MLOps, deployment) for a job hunt this year.",
    ],
    fees: [
      <>
        Free to audit; roughly US$59/month (~₹5,000/month) for graded assignments and certificates,
        with regional pricing in some markets. <Verify>VERIFY: current fee</Verify>
      </>,
      <>
        Watch subscription creep: the plan renews whether or not you opened it. Expected cost is the
        monthly fee multiplied by realistic months, and a learner who stalls for a quarter pays for
        a quarter. Set a cancellation reminder on the day you subscribe.
      </>,
    ],
    career: [
      <>None offered and none claimed. The certificate's signal is universal but skill-shaped: it says “this person understands fundamentals,” not “this person has shipped.”</>,
      <>
        Recruiters in India, the US and Europe all recognise the name. None of them will hire on it
        alone, and Andrew Ng would be the first to say so.
      </>,
    ],
    pros: [
      "The clearest explanation of ML and deep learning fundamentals available at any price.",
      "Free to audit — the entire conceptual core costs nothing.",
      "Globally recognised name that reads well on any CV.",
      "Excellent evaluation and bias–variance reasoning that transfers directly to interviews.",
      "Short-course library refreshes far faster than university programs.",
      "Works on low bandwidth, on mobile, in any timezone.",
      "Honest about what it isn't — no placement theatre.",
    ],
    cons: [
      "No accountability whatsoever; completion is the dominant failure mode.",
      "No human code review, mentorship or doubt resolution.",
      "No MLOps, deployment or observability content at all.",
      "GenAI is fragmented across short courses rather than one integrated build.",
      "Assignments are not portfolio artefacts.",
      "Subscription renews silently through months of inactivity.",
      "Assumes Python for the deeper courses without a real bridge.",
    ],
    verdict: (
      <>
        Take it — almost everyone should, as foundations or as a pre-purchase test. Just don't
        mistake it for a career program, and don't assume you'll finish it if you've never finished
        one before.
      </>
    ),
    cta: "Start DeepLearning.AI's Specializations (Free to Audit)",
    pillars: {
      curriculum: "8.4",
      delivery: "6.5",
      projects: "6.0",
      career: "3.0",
      access: "9.8",
      value: "10",
      overall: "8.6 / 10",
      ceiling: "Level 2–3 alone; higher with independent projects",
    },
  },
  {
    rank: 3,
    name: "Scaler — Data Science, ML & AI Program (India)",
    tag: "Best placement infrastructure for Indian product-company and GCC outcomes",
    overview: [
      <>
        Scaler is India's best-known premium tech bootcamp, and the AI/ML content sits inside a
        computer-science-strong program: data structures and algorithms, system design, machine
        learning, and a growing GenAI component.
      </>,
      <>
        Be clear about what you're buying. The curriculum is good; the{" "}
        <strong>purchase is placement infrastructure, brand and alumni network</strong>. Priced at
        ₹3–4L, that only makes sense if you intend to use all three.
      </>,
    ],
    curriculum: [
      <>
        Excellent CS and ML fundamentals, taught at pace and assessed seriously. Python, SQL,
        classical ML and evaluation are strong; deep learning and MLOps are good.
      </>,
      <>
        GenAI and agentic depth trail the specialists: fine-tuning is limited, agent frameworks
        thin, MCP not yet present. The DSA weighting is a genuine double edge — it helps enormously
        in product-company interview loops and it costs hours you might have spent on AI.{" "}
        <strong>Depth verdict: strongest CS foundation here, mid-pack on 2026 GenAI.</strong>
      </>,
    ],
    delivery: [
      <>
        Among the strongest live delivery in India: real classes, a strong TA network, active
        dropout prevention and genuine cohort accountability.
      </>,
      <>
        The pace is built for people with programming aptitude and assumes it. At 15–20 hours a week
        for 12–15 months alongside a job, this is the heaviest time commitment in the top ten, and
        the duration itself is a dropout risk — motivation and job stability both change over a
        year.
      </>,
    ],
    projects: [
      <>
        Five to ten substantial projects with human review, CS-flavoured and interview-defensible.
        Quality of feedback is high.
      </>,
      <>
        Fewer deployment-heavy AI builds than the leading specialist programs, and fewer
        GenAI-specific production artefacts. If a production RAG system is the thing you want in
        your portfolio, verify the current cohort's GenAI project list before enrolling.
      </>,
    ],
    forWhom: [
      "Engineers in India targeting product companies and top GCCs who can commit 15–20 hours a week for over a year.",
      "Candidates who also need DSA and system design because they're interviewing for SDE-adjacent roles.",
      "Learners who value a large, active alumni network for referrals — a real and underrated asset in Indian hiring.",
    ],
    avoid: [
      "You want AI specifically and don't want months of DSA.",
      "₹3–4L or an EMI running 11–18 months would genuinely strain you.",
      "You're non-technical — the pace assumes programming aptitude.",
      "You're outside India; the placement network is Indian and that's most of the value.",
    ],
    fees: [
      <>₹3–4L (~US$3,600–US$4,800), one-time with a long EMI tenure. <Verify>VERIFY: current fee</Verify></>,
      <>
        The long duration means a long financing tail. Model the month-three dropout scenario against
        the loan terms before signing, and confirm whether the EMI is a bank product that survives
        your withdrawal.
      </>,
    ],
    career: [
      <>
        The strongest structured placement operation in this list: dedicated team, partner network,
        published outcome data, serious interview preparation across DSA, system design and ML.
      </>,
      <>
        Still ask the five placement-claim questions — percentage of <em>enrolled</em> rather than
        “eligible” learners, the window, the median not the average, whether the roles are AI roles,
        and two alumni references you weren't handed.
      </>,
    ],
    pros: [
      "Best-in-class Indian placement machinery with published outcome data.",
      "Genuinely live delivery with a strong TA network and fast doubt resolution.",
      "DSA and system design coverage that product-company loops actually test.",
      "Large, active alumni network that generates real referrals.",
      "Strong classical ML and evaluation foundations.",
      "Human code review and structured accountability.",
      "Established brand that clears Indian HR screens easily.",
    ],
    cons: [
      "Highest Indian price point here at ₹3–4L, with a long EMI tail.",
      "12–15 months is a long time for motivation and circumstances to hold.",
      "GenAI, fine-tuning and agent depth trail specialist programs.",
      "MCP and open-weight local inference are not meaningful components.",
      "DSA weighting consumes hours some learners would rather spend on AI.",
      "Placement support is India-centric and near-useless abroad.",
      "Pace assumes programming aptitude; weak fit for non-technical switchers.",
    ],
    verdict: (
      <>
        If you're in India, targeting product companies or GCCs, and you will genuinely use the
        placement operation, this is a defensible ₹3–4L. If you want AI depth per rupee, you can get
        more of it for a quarter of the money.
      </>
    ),
    cta: "Compare Scaler's AI/ML Track",
    pillars: {
      curriculum: "8.2",
      delivery: "9.0",
      projects: "8.0",
      career: "9.5",
      access: "6.8",
      value: "7.0",
      overall: "8.4 / 10",
      ceiling: "Level 4",
    },
  },
  {
    rank: 4,
    name: "Stanford Online — Artificial Intelligence Professional Program (Global)",
    tag: "Best elite academic credential that travels everywhere",
    overview: [
      <>
        Stanford's professional-education arm adapts graduate AI courses — AI principles, machine
        learning, NLP with deep learning, reinforcement learning{" "}
        <Verify>VERIFY: catalogue</Verify> — into roughly ten-week facilitated cohorts, with a
        certificate awarded after the required set. <Verify>VERIFY: requirements</Verify>
      </>,
      <>
        What you are purchasing is the <strong>strongest academic signal in AI education</strong>,
        plus genuinely hard coursework. Both are real. Neither is cheap.
      </>,
    ],
    curriculum: [
      <>
        Unmatched theoretical rigour in this list. Mathematics, evaluation discipline, transformer
        depth and applied NLP are taught to a standard no bootcamp attempts, and the assignments
        force real understanding rather than pattern-matching.
      </>,
      <>
        The gaps are structural, not accidental: MLOps, deployment, agent frameworks and MCP are
        largely out of scope, and content refreshes at academic pace.{" "}
        <strong>Depth verdict: the best Layers 1–4 on this page, and materially behind on Layers 5–6.</strong>
      </>,
    ],
    delivery: [
      <>
        Not a live cohort in the Indian sense. You get facilitators, office hours and forums around
        deadline-driven coursework — facilitators, not live faculty lectures, which is a distinction
        the marketing does not always make loudly.
      </>,
      <>
        The deadlines are the accountability mechanism and they work well. What you don't get is
        anyone reading your code weekly or helping you shape a portfolio.
      </>,
    ],
    projects: [
      <>
        Four to eight graded assignments of high intellectual quality. They translate to a portfolio
        only with additional effort on your part, and nothing is deployed.
      </>,
      <>
        If you take this route, plan a parallel build track: two or three deployed systems of your
        own design, so the interview has something to interrogate beyond coursework.
      </>,
    ],
    forWhom: [
      "Experienced engineers with college-level mathematics who want rigour plus a credential recognised everywhere.",
      "Research-adjacent aspirants, or anyone considering a graduate pathway later.",
      "Employer-funded learners where the sticker price isn't yours to justify.",
    ],
    avoid: [
      "Budget-bound learners — roughly US$1,750 per course (~₹1.5L), with a full certificate exceeding US$5,000. [VERIFY]",
      "Beginners or non-technical switchers — there is no mathematics on-ramp and you will drown.",
      "Anyone needing career services, portfolio design or GenAI engineering breadth.",
      "Anyone whose job hunt needs deployment and MLOps skills this year.",
    ],
    fees: [
      <>
        ~US$1,750 per course (~₹1.5L); a certificate requires several, so budget US$5,000+.{" "}
        <Verify>VERIFY: current fee</Verify> No EMI; employer sponsorship is the common funding
        route.
      </>,
      <>
        Check drop and withdrawal deadlines before enrolling in each course{" "}
        <Verify>VERIFY: drop deadlines</Verify> — the per-course structure means the refund question
        recurs every time you register.
      </>,
    ],
    career: [
      <>
        No placement service and none implied. The credential clears HR screens in the US, Europe
        and India alike, which is a genuine and measurable benefit at the top of the funnel.
      </>,
      <>
        The technical round still tests what you built. Every hiring manager I spoke to who
        recognised the Stanford tag also said they went straight to the candidate's repository
        afterwards.
      </>,
    ],
    pros: [
      "The strongest academic signal in AI education, recognised in every market.",
      "Genuinely rigorous mathematics, evaluation and transformer content.",
      "Hard, well-designed assignments that force real understanding.",
      "Hard deadlines create completion pressure that self-paced platforms lack.",
      "Excellent preparation for research-adjacent or graduate pathways.",
      "Per-course structure lets you take one before committing to a certificate.",
    ],
    cons: [
      "The weakest cost-per-capability ratio on this page.",
      "No MLOps, deployment, agent frameworks or MCP.",
      "Facilitators rather than live faculty lectures.",
      "No career services, portfolio design or interview preparation.",
      "Prerequisites are steep with no bridge module.",
      "Academic refresh cycles lag the GenAI frontier noticeably.",
      "Nothing you build gets deployed.",
    ],
    verdict: (
      <>
        Buy it for rigour and for the screen, not for employability engineering. Paired with a
        self-built deployment portfolio it's formidable; on its own it produces candidates who
        interview beautifully on theory and stall on “how would you ship this?”
      </>
    ),
    cta: "Explore Stanford Online's AI Program",
    pillars: {
      curriculum: "8.8",
      delivery: "7.2",
      projects: "6.8",
      career: "6.5",
      access: "5.5",
      value: "5.8",
      overall: "8.2 / 10",
      ceiling: "Level 3–4",
    },
  },
  {
    rank: 5,
    name: "upGrad — PG Programme in ML & AI, IIIT-Bangalore (India)",
    tag: "Best Indian university-credentialed program",
    overview: [
      <>
        upGrad is India's largest higher-EdTech platform, and this programme carries an
        IIIT-Bangalore affiliation with genuine institutional involvement.
      </>,
      <>
        The value proposition is the <strong>credential plus degree-adjacent structure</strong>,
        aimed squarely at switchers whose employers and promotion committees weigh formal
        qualifications — a real dynamic in Indian IT services and BFSI.
      </>,
    ],
    curriculum: [
      <>
        Broad and academically organised: statistics, classical ML, deep learning, NLP and computer
        vision, with capstone work. Practical depth in the newest areas is moderate.
      </>,
      <>
        The 2026 caveat is the biggest one here: university governance means GenAI, agents and MCP
        update more slowly than at specialists. Embeddings and vector databases sit at basic, RAG at
        basic-to-moderate, fine-tuning limited, agent frameworks absent.{" "}
        <strong>Depth verdict: solid Layers 1–4, weak Layer 5 relative to the fee.</strong>
      </>,
    ],
    delivery: [
      <>
        Mixed live and recorded, IST, with academic deadlines that genuinely drive completion, plus
        onboarding support that switchers need.
      </>,
      <>
        Doubt resolution runs through a ticket system and scheduled sessions — meaningfully slower
        than asking mid-class. Mentor access exists but is more scheduled than conversational.
      </>,
    ],
    projects: [
      <>Eight to twelve well-graded academic assignments plus a capstone. Breadth is good; grading is real.</>,
      <>
        Few deployment outputs, and human review is partial. You'll finish with evidence of study
        rather than evidence of shipping, which is a different thing in an interview.
      </>,
    ],
    forWhom: [
      "Career switchers in India who need a credential HR takes seriously and structured on-ramps in maths and coding.",
      "Learners who thrive on academic structure, deadlines and defined modules.",
      "Employees whose promotion or internal band change explicitly recognises formal qualifications.",
    ],
    avoid: [
      "You're chasing cutting-edge GenAI, agents or deployment depth.",
      "₹1.5–3.5L is a stretch — the Layer 5 gap makes the premium hard to justify when self-funded.",
      "You assume IIIT-B faculty teach every session; clarify exactly what the affiliation covers before paying.",
    ],
    fees: [
      <>
        ₹1.5–3.5L (~US$1,800–US$4,200) one-time, EMI commonly offered.{" "}
        <Verify>VERIFY: current fee</Verify> The wide spread means value depends heavily on which
        variant you're sold — get the variant name and inclusions in writing.
      </>,
      <>
        Check GST treatment and the late-fee policy; both change the real number more than people
        expect.
      </>,
    ],
    career: [
      <>
        A real career services team and job board, India-focused, offering assistance rather than
        guarantee. Partially AI-role-specific: analytics and data roles appear alongside ML in
        outcome mixes.
      </>,
      <>Strongest hiring geography: India. The IIIT-B tag helps at the screening stage domestically and is largely unknown abroad.</>,
    ],
    pros: [
      "Genuine Indian university affiliation that Indian HR recognises immediately.",
      "Strong onboarding and bridge content for non-AI backgrounds.",
      "Academic deadlines produce better completion than self-paced alternatives.",
      "Broad, well-sequenced coverage of Layers 1–4.",
      "Established career services team and job board.",
      "EMI widely available with a familiar, low-friction enrolment process.",
    ],
    cons: [
      "Weakest Layer 5 depth relative to price in the top five.",
      "Agent frameworks and MCP not covered; fine-tuning limited.",
      "Ticket-based doubt resolution is slow compared with live cohorts.",
      "Fee spread of ₹1.5–3.5L makes value highly variant-dependent.",
      "Sales pressure and cohort-scarcity tactics are common.",
      "Few deployed artefacts in the project set.",
      "“University affiliation” needs clarifying — who teaches, who grades, who signs.",
    ],
    verdict: (
      <>
        The right choice if the credential is a real requirement in your organisation, and an
        expensive one if it isn't. Audit the current GenAI module with a version date before you
        sign anything.
      </>
    ),
    cta: "Explore upGrad's IIIT-B ML & AI Programme",
    pillars: {
      curriculum: "7.2",
      delivery: "7.6",
      projects: "7.4",
      career: "7.4",
      access: "8.0",
      value: "6.6",
      overall: "7.6 / 10",
      ceiling: "Level 3–4",
    },
  },
  {
    rank: 6,
    name: "Great Learning — PGP-AIML, UT Austin / Great Lakes (India + Global)",
    tag: "Best mentor-led weekend format with a global university brand",
    overview: [
      <>
        A mature program built around weekend live mentor sessions, designed for professionals who
        have a weekend slot but no usable weekday evenings — a genuinely under-served group.
      </>,
      <>
        The McCombs (UT Austin) branding carries weight beyond India, which distinguishes it from
        purely domestic credentials at a similar price.
      </>,
    ],
    curriculum: [
      <>
        Solid, well-sequenced machine learning and deep learning, with applied NLP and computer
        vision and a reasonable GenAI component that includes some agent content — better than
        upGrad on Layer 5.
      </>,
      <>
        It stops short of production depth: RAG is moderate, fine-tuning moderate, MLOps light, MCP
        only lightly touched. Refresh speed is better than most university-affiliated programs and
        behind the specialists.{" "}
        <strong>Depth verdict: good breadth, moderate depth, thin production layer.</strong>
      </>,
    ],
    delivery: [
      <>
        Genuinely live weekend mentor sessions with practitioner mentors, plus recorded core
        content, deadlines and mentor nudges that support completion.
      </>,
      <>
        The variable is your mentor. I observed excellent cohorts and mediocre ones inside the same
        program. Ask for your mentor's name and background before paying, and ask explicitly what
        happens if you request a change.
      </>,
    ],
    projects: [
      <>
        Eight to twelve projects with mentor feedback — one of the better feedback loops in this
        price band, and better than upGrad's partial review.
      </>,
      <>Applied rather than deployment-grade: expect strong notebooks and few running services.</>,
    ],
    forWhom: [
      "Professionals whose weekdays are unusable but who can reliably give a weekend.",
      "Learners who absorb material through discussion with a mentor rather than solitary study.",
      "Mid-career domain experts in BFSI, healthcare or manufacturing adding AI to existing expertise.",
    ],
    avoid: [
      "You want deep GenAI, agents or MLOps for an engineering role.",
      "You need weekday flexibility or self-pacing.",
      "You expect UT Austin faculty to teach the sessions — they don't; clarify what the brand covers.",
    ],
    fees: [
      <>₹1.5–3.5L (~US$1,800–US$4,200) one-time, EMI commonly available. <Verify>VERIFY: current fee</Verify></>,
      <>
        Optional immersion travel is a real add-on cost that's easy to mistake for an inclusion.
        Confirm what's in the base fee, in writing.
      </>,
    ],
    career: [
      <>Resume support and mock interviews, India-focused with some global brand reach through the UT Austin association. Assistance, not guarantee.</>,
      <>Strongest hiring geography: India, with modest international recognition — better travelling than a purely domestic credential, weaker than Stanford or Google.</>,
    ],
    pros: [
      "Weekend live format solves a real scheduling problem no other top-ten option addresses as well.",
      "Practitioner mentors with genuine feedback loops on 8–12 projects.",
      "UT Austin branding travels further than domestic-only credentials.",
      "Better GenAI coverage than upGrad at a comparable price.",
      "Gradual maths and coding build-up suits switchers.",
      "Deadlines plus mentor nudges support completion.",
    ],
    cons: [
      "Mentor quality varies materially between cohorts — your outcome partly depends on assignment.",
      "MLOps and deployment are light for the price.",
      "Production RAG, fine-tuning and MCP are moderate to thin.",
      "Weekend-only cadence stretches the calendar for busy periods.",
      "Optional immersion travel inflates the real total.",
      "Aggressive sales follow-up is commonly reported.",
      "University faculty involvement is limited — verify before assuming.",
    ],
    verdict: (
      <>
        The best option here if weekends are your only real study window and you want human contact.
        Not the option if you want frontier depth — and get your mentor's name before you pay.
      </>
    ),
    cta: "Check Great Learning's AI & ML Program",
    pillars: {
      curriculum: "7.4",
      delivery: "7.8",
      projects: "7.6",
      career: "7.0",
      access: "8.2",
      value: "6.8",
      overall: "7.5 / 10",
      ceiling: "Level 3–4",
    },
  },
  {
    rank: 7,
    name: "Udacity — AI & Machine Learning Nanodegrees (Global)",
    tag: "Best human project review inside a self-paced format",
    overview: [
      <>
        Udacity pioneered the nanodegree format <Verify>VERIFY: current ownership and catalogue</Verify>,
        and its enduring differentiator has nothing to do with video: every signature project comes
        back with written, line-level human feedback until it passes.
      </>,
      <>
        That review loop is the closest self-paced learning comes to mentorship, and it is the
        reason this ranks above cheaper options with similar syllabi.
      </>,
    ],
    curriculum: [
      <>
        Strong applied structure across Python, machine learning, deep learning and computer vision,
        with newer generative-AI nanodegrees <Verify>VERIFY: catalogue</Verify>.
      </>,
      <>
        GenAI is improving but not specialist-deep; agents and MCP are limited to absent; MLOps sits
        at moderate. Freshness varies noticeably between tracks, so check the last-updated date on
        the specific nanodegree.{" "}
        <strong>Depth verdict: reliable Layers 1–4, mid-pack Layer 5, partial Layer 6.</strong>
      </>,
    ],
    delivery: [
      <>
        Any timezone, excellent platform, mentor Q&amp;A, and no live teaching. Subscription pricing
        creates urgency, which is a feature for the disciplined and a cost trap for everyone else.
      </>,
      <>
        The resubmission loop turns out to be a surprisingly effective substitute for a cohort:
        having a human return your work with corrections generates real momentum.
      </>,
    ],
    projects: [
      <>
        The star of the program: three to six substantial reviewed builds per nanodegree, genuinely
        portfolio-usable, with feedback that names specific weaknesses rather than issuing a grade.
      </>,
      <>Fewer projects than a full cohort program, but each carries more feedback per unit of work.</>,
    ],
    forWhom: [
      "Timezone-agnostic self-paced learners who still want a human critiquing their code.",
      "Employer-funded learners whose companies reimburse monthly learning subscriptions.",
      "Disciplined professionals who can realistically finish a nanodegree in three to four months.",
    ],
    avoid: [
      "~US$249/month (~₹21,000) is heavy in rupee terms and punishes any slow month.",
      "You need live cohort accountability to finish.",
      "You need Indian placement support or frontier GenAI depth.",
    ],
    fees: [
      <>~US$249/month, or bundled pricing (~₹21,000/month). <Verify>VERIFY: current fee</Verify></>,
      <>
        Cost is entirely a function of your speed: four months is US$996, eight months is US$1,992
        for identical content. Confirm cancellation terms{" "}
        <Verify>VERIFY: cancellation terms</Verify> and set a reminder the day you subscribe.
      </>,
    ],
    career: [
      <>Light career services — resume and LinkedIn review. The reviews, not the services, are the real value.</>,
      <>Strongest hiring geography: global and self-driven. There is no placement network in any market.</>,
    ],
    pros: [
      "Human, line-level project review — unique at this price point in self-paced learning.",
      "Portfolio-usable projects rather than fill-in-the-blank labs.",
      "Any timezone, no scheduling conflicts, excellent platform.",
      "Resubmission pressure creates genuine momentum.",
      "Well-structured applied content across ML, DL and CV.",
      "Pause option on the subscription if life intervenes.",
    ],
    cons: [
      "Monthly pricing makes slow learners pay multiples for the same content.",
      "No live instruction and limited 1:1 mentorship in most tracks.",
      "Agents and MCP are weak or absent; GenAI depth is mid-pack.",
      "Track freshness is inconsistent across the catalogue.",
      "Career services are thin compared with Indian cohort programs.",
      "Fewer total projects than a full-length program.",
      "In rupee terms the price is high for what is still self-paced study.",
    ],
    verdict: (
      <>
        If you're disciplined enough to finish in three or four months, this is the best
        feedback-per-hour outside a live cohort. If you're not, the meter runs and the value
        collapses.
      </>
    ),
    cta: "Browse Udacity's AI Nanodegrees",
    pillars: {
      curriculum: "7.2",
      delivery: "7.4",
      projects: "8.4",
      career: "5.5",
      access: "8.0",
      value: "6.5",
      overall: "7.4 / 10",
      ceiling: "Level 3",
    },
  },
  {
    rank: 8,
    name: "Google — AI/ML Learning Path + Professional ML Engineer (Global)",
    tag: "Best vendor-backed pathway into cloud AI roles",
    overview: [
      <>
        This is not a single course but a pathway: the free Machine Learning Crash Course, AI
        Essentials, Cloud Skills Boost generative-AI paths, and the Professional Machine Learning
        Engineer exam at the end. <Verify>VERIFY: path names</Verify>
      </>,
      <>
        What you're buying is near-zero-cost authoritative learning plus a vendor credential with
        real weight in cloud and enterprise hiring — Indian GCCs and services firms genuinely value
        GCP and Vertex skills.
      </>,
    ],
    curriculum: [
      <>
        ML fundamentals are done well and honestly. The Vertex generative content is strong —
        Gemini, Gemma, grounding and RAG, tuning — and the responsible-AI material is better than
        most paid programs bother with.
      </>,
      <>
        It is ecosystem-locked: you learn Google's way of doing AI. Theory is light, agent
        frameworks and MCP limited, and framework-agnostic depth is not the goal.{" "}
        <strong>Depth verdict: strong cloud Layer 6, light Layers 1–3, ecosystem-shaped Layer 5.</strong>
      </>,
    ],
    delivery: [
      <>
        Self-paced, any timezone, excellent bandwidth behaviour, community-only support. Nobody
        reads your work.
      </>,
      <>
        The underrated strength is hands-on labs in real cloud consoles — you're operating actual
        infrastructure, not a simulated notebook, which transfers directly to enterprise work.
      </>,
    ],
    projects: [
      <>Labs rather than portfolio builds. Useful practice, weak as interview artefacts.</>,
      <>
        The US$200 exam is the real output: it tests applied cloud-ML judgment, and passing it is a
        verifiable signal that recruiters filter on.
      </>,
    ],
    forWhom: [
      "Cloud, DevOps and data engineers adding AI to an existing platform skill set.",
      "Employees at enterprises standardised on Google Cloud, including many Indian GCCs.",
      "Budget learners who want a recognised credential for under US$250 all-in.",
      "Anyone pairing it with a build-focused course — this complements rather than replaces one.",
    ],
    avoid: [
      "You want model-building depth or mathematical grounding.",
      "You need a course-produced portfolio or mentorship.",
      "You want framework-agnostic skills you can carry to any employer's stack.",
    ],
    fees: [
      <>
        Free to US$49 for courses; the PMLE exam is US$200 (~₹17,000).{" "}
        <Verify>VERIFY: current fee</Verify>
      </>,
      <>
        Watch cloud usage beyond the free tier during labs — the most commonly overlooked cost on
        this entire page, and the only one that can surprise you after the fact.
      </>,
    ],
    career: [
      <>No services. The certification itself is the signal, and it opens cloud and enterprise AI doors specifically.</>,
      <>Strongest hiring geography: global enterprises plus Indian GCCs running on GCP. It does little for AI-native startup hiring.</>,
    ],
    pros: [
      "Near-zero cost for authoritative, well-produced learning material.",
      "PMLE is a recognised, verifiable credential that clears enterprise filters.",
      "Hands-on labs in real cloud consoles, not simulations.",
      "Genuinely good cloud MLOps and deployment coverage.",
      "Strong responsible-AI material.",
      "Works in any timezone on any bandwidth.",
      "Pairs extremely well with a build-focused program.",
    ],
    cons: [
      "Ecosystem lock-in — you learn Google's AI, not AI broadly.",
      "Thin foundations, maths and transformer theory.",
      "No mentorship, code review or portfolio output.",
      "Agent frameworks and MCP barely present.",
      "Cloud usage beyond the free tier is an unbudgeted cost.",
      "Exam-focused study can produce credential without capability.",
    ],
    verdict: (
      <>
        An excellent second course and a poor first one. If you already work in cloud or data, this
        is the cheapest credible route into enterprise AI work on this page.
      </>
    ),
    cta: "Start Google's ML Crash Course (Free)",
    pillars: {
      curriculum: "6.8",
      delivery: "7.0",
      projects: "5.8",
      career: "7.2",
      access: "9.5",
      value: "9.6",
      overall: "7.2 / 10",
      ceiling: "Level 2–3 (higher for cloud deployment)",
    },
  },
  {
    rank: 9,
    name: "IBM — AI Engineering Professional Certificate (Coursera, Global)",
    tag: "Best low-cost applied engineering track with a recognised corporate name",
    overview: [
      <>
        A structured, applied certificate aimed at practising AI engineering with widely used
        tooling — noticeably more implementation-oriented than DeepLearning.AI, and far cheaper than
        any premium program.
      </>,
      <>
        The IBM name carries enterprise recognition worldwide, which matters more in corporate
        contexts than in startup hiring.
      </>,
    ],
    curriculum: [
      <>
        Strong applied breadth: scikit-learn machine learning, Keras/TensorFlow and PyTorch deep
        learning, computer vision, plus generative AI, prompting and RAG modules in current versions{" "}
        <Verify>VERIFY: catalogue</Verify>.
      </>,
      <>
        Theory is moderate; MLOps and deployment are touched rather than taught; agents, agent
        frameworks and MCP are absent. Mathematics coverage is thin enough that a rigorous interview
        will find the edges.{" "}
        <strong>Depth verdict: excellent framework reps, weak 2026 differentiators.</strong>
      </>,
    ],
    delivery: [
      <>Self-paced, subtitled, low-bandwidth friendly, forum-only support. No accountability of any kind.</>,
      <>
        Realistic completion is low — this is the same structural problem as every MOOC, and no
        amount of good content fixes it.
      </>,
    ],
    projects: [
      <>Six to ten guided labs plus a capstone. Solid practice with real frameworks.</>,
      <>
        To be portfolio-defensible you must extend them into original work — a guided lab is
        recognisable as a guided lab to any interviewer who has seen the course.
      </>,
    ],
    forWhom: [
      "Budget-constrained learners who already know Python and want structured hands-on framework practice.",
      "Learners who finished DeepLearning.AI's theory and now want implementation repetitions.",
      "Professionals in enterprise environments where the IBM name reads well internally.",
    ],
    avoid: [
      "You're a complete beginner without Python — there's no real bridge.",
      "You need mentorship, accountability or placement support.",
      "You need deep GenAI, agents or production RAG for a 2026 job hunt.",
    ],
    fees: [
      <>Free to audit; roughly US$59/month (~₹5,000/month) for the certificate. <Verify>VERIFY: current fee</Verify></>,
      <>Same subscription creep warning as every Coursera track: the meter runs through months you don't open it.</>,
    ],
    career: [
      <>None offered, none claimed. The credential signals competent applied practice in enterprise contexts.</>,
      <>Strongest hiring geography: global enterprise environments. Weak signal at AI-native startups anywhere.</>,
    ],
    pros: [
      "Maximum framework practice per rupee or dollar of any option here.",
      "Both TensorFlow/Keras and PyTorch covered properly.",
      "Recognised enterprise brand at subscription pricing.",
      "Free to audit before committing.",
      "Genuinely applied rather than lecture-heavy.",
      "Accessible on low bandwidth in any timezone.",
    ],
    cons: [
      "Weakest Layer 5 coverage relative to 2026 hiring demand.",
      "Agents, agent frameworks and MCP absent entirely.",
      "MLOps touched, not taught; nothing meaningfully deployed.",
      "Thin mathematics and theory for rigorous interviews.",
      "No human review, mentorship or accountability.",
      "Guided labs are recognisable as guided labs in a portfolio.",
      "Subscription renews through inactive months.",
    ],
    verdict: (
      <>
        Excellent value as the implementation half of a free-plus-cheap study plan. Insufficient on
        its own for an AI engineering role in 2026 — extend the labs into original, deployed work.
      </>
    ),
    cta: "Explore IBM's AI Engineering Certificate",
    pillars: {
      curriculum: "6.6",
      delivery: "6.2",
      projects: "6.4",
      career: "3.5",
      access: "9.2",
      value: "9.2",
      overall: "7.0 / 10",
      ceiling: "Level 2–3",
    },
  },
  {
    rank: 10,
    name: "Simplilearn — PGP in AI & ML, Purdue / IBM (India + Global)",
    tag: "Best for corporate professionals and employer-sponsored upskilling",
    overview: [
      <>
        Simplilearn is a certification-led global platform, and its real advantage is corporate
        legitimacy: among the most frequently employer-reimbursed options anywhere, with Purdue and
        IBM credentials familiar to HR and L&amp;D teams across markets.
      </>,
      <>
        Judge it on that axis. As a self-funded engineering education it is beaten by cheaper options
        on this page; as an invoice-able corporate upskilling product it is well designed.
      </>,
    ],
    curriculum: [
      <>
        Broad, industry-oriented coverage: Python, statistics, machine learning, TensorFlow/Keras
        deep learning, NLP, computer vision and a generative AI module.
      </>,
      <>
        It is optimised for certification completion rather than engineering rigour. Agents, MCP and
        production RAG are not meaningful components, and evaluation discipline is moderate.{" "}
        <strong>Depth verdict: wide, shallow at the frontier.</strong>
      </>,
    ],
    delivery: [
      <>
        Mostly recorded, with “masterclasses” that are events rather than teaching sessions —{" "}
        <strong>“masterclass” does not mean fully live</strong>, whatever the marketing implies. Ask
        precisely how many hours are live and who teaches them.
      </>,
      <>
        Support is forum-first with limited live access; cohort accountability is weak, and
        completion depends almost entirely on your own discipline.
      </>,
    ],
    projects: [
      <>Five to ten structured projects, largely guided, with little code review.</>,
      <>They produce exposure rather than engineering judgment — adequate for a CV line, thin for a technical defence.</>,
    ],
    forWhom: [
      "Employer-funded professionals whose company needs invoicing and completion reporting.",
      "Corporate credential seekers pursuing an internal promotion or role change.",
      "Disciplined self-paced learners who value breadth and brand over depth.",
    ],
    avoid: [
      "You're self-funding and want hands-on engineering capability.",
      "You need live instruction and real mentorship.",
      "You need GenAI depth — production RAG, fine-tuning, agents.",
    ],
    fees: [
      <>₹1.5–2.5L (~US$1,800–US$3,000) one-time, EMI commonly available. <Verify>VERIFY: current fee</Verify></>,
      <>
        Promotions are frequent, so the sticker price is rarely the paid price — and exam vouchers
        and add-ons inflate the total. Value is strong when employer-funded, moderate when
        self-funded.
      </>,
    ],
    career: [
      <>Career services and a job board oriented to Indian corporate movement and global L&amp;D reporting rather than AI-specific placement.</>,
      <>Strongest hiring geography: Indian corporate and enterprise L&amp;D contexts internationally.</>,
    ],
    pros: [
      "The most invoice-friendly, employer-reimbursable option on this page.",
      "Purdue and IBM branding recognised by HR and L&D teams globally.",
      "Broad curriculum covering a wide surface area of AI topics.",
      "Completion reporting that corporate L&D teams actually need.",
      "Flexible blended format that fits unpredictable corporate schedules.",
      "Frequent promotions substantially reduce the effective price.",
    ],
    cons: [
      "Weakest delivery accountability among the paid programs here.",
      "“Masterclasses” are not fully live instruction.",
      "Agents, MCP and production RAG are not meaningful components.",
      "Little human code review; projects are largely guided.",
      "Capability per rupee is poor when self-funded.",
      "University branding is a partnership, not faculty instruction.",
      "Exam vouchers and add-ons inflate the real total.",
    ],
    verdict: (
      <>
        Take it if someone else is paying and the credential matters to them. Don't take it with your
        own money expecting engineering depth — that money buys more elsewhere on this page.
      </>
    ),
    cta: "Check Simplilearn's Purdue AI & ML Program",
    pillars: {
      curriculum: "6.4",
      delivery: "5.8",
      projects: "6.0",
      career: "6.6",
      access: "7.6",
      value: "6.0",
      overall: "6.8 / 10",
      ceiling: "Level 3–4",
    },
  },
];

function Part({ n, title, children }: { n: number; title: string; children: ReactNode }) {
  return (
    <div className="mt-6">
      <h4 className="font-display text-lg font-semibold text-ink">
        <span className="mr-2 font-mono text-xs text-accent">{n}</span>
        {title}
      </h4>
      {children}
    </div>
  );
}

function List({ items, tone }: { items: string[]; tone: "good" | "warn" }) {
  return (
    <ul
      className={
        "mt-3 list-disc space-y-1.5 rounded-lg border p-5 pl-9 text-[0.92rem] leading-relaxed " +
        (tone === "good" ? "border-good/30 bg-good/8" : "border-warn/40 bg-highlight/40")
      }
    >
      {items.map((x) => (
        <li key={x}>{x}</li>
      ))}
    </ul>
  );
}

function ReviewBlock({ r }: { r: Review }) {
  return (
    <article id={`rank-${r.rank}`} className="mt-16 scroll-mt-24 border-t border-rule pt-8">
      <div className="flex items-baseline gap-4">
        <span className="font-display text-4xl font-bold text-accent">#{r.rank}</span>
        <h3 className="article-h3 mt-0">{r.name}</h3>
      </div>
      <p className="mt-2 font-display text-lg text-primary">{r.tag}</p>

      <Part n={1} title="Overview & positioning">
        {r.overview.map((x, i) => (
          <P key={i}>{x}</P>
        ))}
      </Part>
      <Part n={2} title="Curriculum breakdown & honest depth verdict">
        {r.curriculum.map((x, i) => (
          <P key={i}>{x}</P>
        ))}
      </Part>
      <Part n={3} title="Delivery experience">
        {r.delivery.map((x, i) => (
          <P key={i}>{x}</P>
        ))}
      </Part>
      <Part n={4} title="Projects & portfolio output">
        {r.projects.map((x, i) => (
          <P key={i}>{x}</P>
        ))}
      </Part>
      <Part n={5} title="Who this is genuinely for">
        <List items={r.forWhom} tone="good" />
      </Part>
      <Part n={6} title="Who should avoid it">
        <List items={r.avoid} tone="warn" />
      </Part>
      <Part n={7} title="Fees, payment model & value (₹ and US$)">
        {r.fees.map((x, i) => (
          <P key={i}>{x}</P>
        ))}
      </Part>
      <Part n={8} title="Career support & outcomes">
        {r.career.map((x, i) => (
          <P key={i}>{x}</P>
        ))}
      </Part>
      <Part n={9} title="Pros & cons">
        <ProsCons pros={r.pros} cons={r.cons} />
      </Part>
      <Part n={10} title="Verdict, rating & next step">
        <P>{r.verdict}</P>
        <RatingBlock p={r.pillars} />
        <Cta variant={r.rank === 1 ? "primary" : "outline"}>{r.cta}</Cta>
      </Part>
    </article>
  );
}

export function InDepthReviews() {
  return (
    <Section
      id="reviews"
      eyebrow="Section 7"
      title="In-Depth Reviews — Top 10 Best AI Courses in 2026 (India + Global)"
    >
      <P>
        Every review below follows the identical ten-part structure — overview, curriculum, delivery,
        projects, who it's for, who should avoid it, fees, career support, pros and cons, and a
        verdict with a six-pillar rating. The #1 pick is not expanded and the lower ranks are not
        compressed; that symmetry is the only way you can compare them fairly.
      </P>
      <Table
        caption="How to read the rating blocks"
        head={["Pillar", "Weight", "Pillar", "Weight"]}
        rows={[
          ["Curriculum depth", "25%", "Career outcomes", "12%"],
          ["Delivery quality", "20%", "Accessibility & fit", "13%"],
          ["Project rigour", "20%", "Value for money", "10%"],
        ]}
        firstColSticky={false}
        note="Scores are this evaluation's editorial judgment against the criteria in Section 1, not survey data or vendor-supplied figures."
      />
      {REVIEWS.map((r) => (
        <ReviewBlock key={r.rank} r={r} />
      ))}
    </Section>
  );
}
