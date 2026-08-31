import { Callout, Checklist, Cta, H3, P, Pull, ScoreBadge, Section, Table, Verify } from "./prose";

export function IndiaVsGlobal() {
  return (
    <Section
      id="india-vs-global"
      eyebrow="Section 9"
      title="India vs. Global AI Courses — The Honest Head-to-Head"
    >
      <P>
        This is the section this page exists for, and the question is almost always asked backwards.
        “Indian or global?” is really <strong>four questions</strong>: where will you work, what
        payment model survives your discipline, how much mentorship density do you need, and which
        credential actually signals in your target market?
      </P>
      <Table
        head={["Dimension", "Indian programs (typical)", "Global programs (typical)"]}
        rows={[
          ["Price for comparable depth", "₹40K–₹4L one-time, EMI standard", "US$0–US$59/mo subscriptions, up to US$5,000+ certificates"],
          ["Mentorship density", "High — live cohorts, code review, doubt SLAs", "Low–Medium — forums and reviewers (Udacity excepted)"],
          ["Timezone", "IST-anchored live sessions", "Timezone-agnostic self-paced"],
          ["Credential recognition in India", "Strong for known brands and IIT/IIIT tags", "Strong for elite names; MOOC certificates weak alone"],
          ["Credential recognition globally", "Weak-to-moderate; the portfolio travels", "Strong for elite and vendor names; MOOC certificates still weak"],
          ["Placement support", "India-focused, sometimes genuinely operational", "Rare; career “services” are light"],
          ["Refresh speed", "Fast at specialists; slow at university-affiliated", "Fast at DeepLearning.AI and vendors; slow at universities"],
          ["Payment risk", "EMI outlives dropout", "Subscriptions auto-renew past motivation"],
          ["Completion drivers", "Cohort accountability", "Deadlines (Stanford) or raw discipline (everyone else)"],
        ]}
      />

      <H3>When an Indian program wins</H3>
      <P>
        You'll work in India or in IST-adjacent remote roles. You need live mentorship and code
        review to actually finish. You want rupee pricing and EMI rather than a dollar subscription.
        You need on-ramps in Python and mathematics. You want placement support from people who
        understand how Indian hiring loops actually run.
      </P>
      <H3>When a global program wins</H3>
      <P>
        You need a brand that clears credential-led screening in the US or Europe. You need
        self-pacing across an awkward timezone. Your budget is near zero, or employer-funded in
        dollars. You want a vendor credential for cloud roles. You're on a research track where
        academic rigour is the point.
      </P>

      <H3>Three myths worth killing</H3>
      <div className="mt-6 space-y-3">
        {[
          [
            "“A Western certificate gets you a Western job.”",
            "It clears a screen at best. Every engineering leader I spoke to in the US and Europe went straight to the candidate's repository. Certificates open funnels; builds win interviews.",
          ],
          [
            "“An Indian course only works in India.”",
            "The credential is India-weighted; the capability isn't. Deployed projects, evaluation metrics and clear technical communication travel on merit across every market I looked at.",
          ],
          [
            "“Free global content equals equal outcomes.”",
            "The 85–90% non-completion typical of open MOOCs is the hidden fee. Free content is not the bottleneck — finishing is, and structure is what you're actually buying when you pay.",
          ],
        ].map(([m, a]) => (
          <div key={m} className="rounded-lg border border-rule bg-paper p-5 shadow-card">
            <p className="font-display text-lg font-semibold text-ink">{m}</p>
            <p className="mt-2 text-[0.95rem] leading-relaxed">{a}</p>
          </div>
        ))}
      </div>

      <H3>The verdict matrix</H3>
      <Table
        head={["Your situation", "What to do", "Why"]}
        rows={[
          [
            "In India, targeting India",
            "Indian live cohort first; free global content as supplement",
            "Completion, mentorship density and rupee pricing all favour the cohort; add a free global credential purely as a screening signal.",
          ],
          [
            "In India, targeting abroad or remote",
            "Capability program + one recognised global credential + aggressive portfolio",
            "The cohort builds the skill, the global name clears the screen, and the portfolio does the actual convincing in the technical round.",
          ],
          [
            "Abroad, targeting your local market",
            "Elite or vendor credential + self-built projects — or an IST-workable Indian cohort",
            "If IST evenings work from your timezone, an Indian cohort is mentorship arbitrage: comparable stack, live human feedback, a fraction of the dollar price.",
          ],
          [
            "Abroad, upskilling inside your current role",
            "Self-paced global tracks, employer-funded where possible",
            "You need capability, not a credential, and your employer's reimbursement budget makes subscriptions the efficient instrument.",
          ],
        ]}
      />
      <Pull>
        Capability travels. Brands help at the screen; builds win the interview. That single sentence
        is the whole India-versus-global answer, and everything above is the evidence for it.
      </Pull>
    </Section>
  );
}

export function Careers() {
  return (
    <Section
      id="careers"
      eyebrow="Section 11"
      title="AI Career Paths in 2026 — Roles, Salaries and Course Mapping (India + Global)"
    >
      <Callout tone="warn" label="Read this before the numbers">
        Compensation varies enormously by city, country, company type and experience. These are
        indicative ranges from market observation, not survey data.{" "}
        <Verify>VERIFY: current market data</Verify> Indian figures are annual CTC in ₹ lakh; global
        figures are US$ base salary. Nothing here is a promise of any outcome.
      </Callout>
      <Table
        head={["Role", "Core skills", "Entry bar", "India (₹ LPA)", "Global (US$)", "Best-fit courses"]}
        rows={[
          ["Data Analyst (AI-augmented)", "SQL, pandas, visualisation, LLM tooling", "Level 2", "₹4–12L", "$65K–$100K", "Google path, IBM, DeepLearning.AI"],
          ["Data Scientist", "Stats, classical ML, experimentation, communication", "Level 3", "₹7–28L", "$100K–$170K", "Scaler, upGrad, DeepLearning.AI + projects"],
          ["ML Engineer", "ML + DL, PyTorch, pipelines, evaluation, deployment", "Level 4", "₹8–35L", "$110K–$190K", "LogicMojo, Scaler, Udacity"],
          ["AI Engineer", "Full stack: ML → LLM apps → deployment", "Level 4", "₹10–38L", "$115K–$195K", "LogicMojo, Great Learning + self-built deployment"],
          ["GenAI / LLM Engineer", "Production RAG, prompting, evaluation, guardrails, APIs", "Level 4", "₹10–40L", "$120K–$200K", "LogicMojo; Google for Vertex-shop roles"],
          ["AI Agent Developer", "Planning, tool use, memory, MCP, frameworks, cost control", "Level 4", "₹12–40L", "$125K–$205K", "LogicMojo + Hugging Face agents course"],
          ["NLP Engineer", "Tokenisation, embeddings, transformers, fine-tuning", "Level 4", "₹9–32L", "$115K–$180K", "Stanford (theory), LogicMojo (applied)"],
          ["Computer Vision Engineer", "CNNs, detection, segmentation, edge deployment", "Level 4", "₹8–30L", "$110K–$175K", "LogicMojo, Udacity, Great Learning"],
          ["MLOps Engineer", "Docker, CI/CD, monitoring, drift, observability, cost", "Level 4", "₹10–35L", "$120K–$185K", "Google path + LogicMojo Layer 6"],
          ["AI Product Manager", "AI literacy, scoping, evaluation thinking, trade-offs", "Level 2", "₹18–50L", "$130K–$210K", "DeepLearning.AI, Google, Great Learning"],
        ]}
        note="Ranges are indicative and unverified. [VERIFY: current market data] Titles are applied inconsistently across companies — read the job description, not the title."
      />

      <H3>Where AI hiring actually happens in 2026</H3>
      <P>
        <strong>India:</strong> GCCs in Bengaluru, Hyderabad, Pune, NCR and Chennai are the largest
        growth engine; product companies hire selectively at higher bars; IT services AI practices
        hire in volume at lower bands but offer internal mobility; AI-native startups pay well and
        expect shipping ability from day one; BFSI, healthcare and retail adoption is broadening the
        base.
      </P>
      <P>
        <strong>Globally:</strong> fewer openings against a higher bar, with enterprise adoption
        broadening the pool of non-tech employers hiring AI people. Remote roles are genuinely real
        and genuinely competitive — you compete with everyone, and compensation is usually priced to
        your location rather than your skill.
      </P>
      <Callout label="Honest counterpoint">
        Entry-level AI hiring is competitive everywhere. Portfolios beat certificates consistently,
        “AI role” titles are applied inconsistently, and a first role adjacent to AI — data
        engineering, analytics, platform work — is often a faster route in than holding out for a
        title with “AI” in it.
      </Callout>

      <H3>What interviewers actually ask</H3>
      <Checklist
        title="Fifteen questions I heard repeatedly from hiring managers"
        items={[
          "Why did you choose that metric and not accuracy?",
          "How did you handle class imbalance, and what did it cost you?",
          "Explain attention to a non-technical stakeholder in ninety seconds.",
          "Design a RAG system for 50,000 internal documents. Where does it break?",
          "What chunking strategy did you use, and why that one?",
          "How would you detect hallucination in production?",
          "When would you fine-tune instead of using RAG, and how would you prove it helped?",
          "How would you serve this model at scale, and what does it cost per thousand requests?",
          "What would you monitor after deployment, and what alert would you set?",
          "How do you evaluate an agent that takes ten steps?",
          "Walk me through a training run that failed and what you changed.",
          "How do you keep PII out of prompts and logs?",
          "What's the trade-off between an open-weight model and a hosted API here?",
          "What did you get wrong in this project, and what did you change?",
          "If you had two more weeks, what would you improve first?",
        ]}
      />
    </Section>
  );
}

export function Roadmap() {
  const months: [string, string, string][] = [
    ["Month 1", "Python, NumPy/pandas, Git", "A cleaned dataset analysis on GitHub with a real README"],
    ["Month 2", "Statistics, probability, linear algebra, SQL", "An analysis with documented assumptions and caveats"],
    ["Month 3", "Core ML and evaluation", "An end-to-end project with a written evaluation rationale"],
    ["Month 4", "Feature engineering, tuning, imbalance", "A model comparison study with honest reporting"],
    ["Month 5", "Deep learning, PyTorch", "A trained network plus a debugging write-up"],
    ["Month 6", "CNNs, computer vision, transfer learning", "A fine-tuned classifier on a custom dataset"],
    ["Month 7", "NLP, embeddings, transformers", "A transformer-based classifier you can explain"],
    ["Month 8", "LLM fundamentals, prompting, APIs, open-weight models", "An LLM app with structured outputs and cost accounting"],
    ["Month 9", "Vector databases, RAG", "A RAG system with an evaluation harness and citations"],
    ["Month 10", "Fine-tuning (LoRA/QLoRA)", "A fine-tune benchmarked against the base model"],
    ["Month 11", "Agents, frameworks, MCP", "A tool-using agent that survives adversarial inputs"],
    ["Month 12", "MLOps and deployment", "A deployed capstone, a polished portfolio, a practised narrative"],
  ];
  return (
    <Section
      id="roadmap"
      eyebrow="Section 12"
      title="Your 12-Month AI Learning Roadmap (For People With Jobs, Anywhere)"
    >
      <P>
        Assume ten hours a week. Each month has a focus and — more importantly — a{" "}
        <strong>deliverable</strong>, because a month without an artefact is a month you can't prove
        happened.
      </P>
      <div className="mt-8 space-y-2.5">
        {months.map(([m, focus, deliverable]) => (
          <div key={m} className="flex flex-col gap-2 rounded-lg border border-rule bg-paper p-4 shadow-card sm:flex-row sm:items-baseline">
            <p className="eyebrow w-20 shrink-0">{m}</p>
            <p className="w-full shrink-0 font-display text-base font-semibold text-ink sm:w-64">{focus}</p>
            <p className="text-[0.92rem] leading-relaxed text-foreground/85">→ {deliverable}</p>
          </div>
        ))}
      </div>
      <Pull>
        A good course compresses this to five to eight months by removing the search cost. Deciding
        what to learn next is where most self-taught learners lose their months — not the learning
        itself.
      </Pull>
      <Callout label="Plan for the Week-3 crash">
        Most dropouts happen in Weeks 3–5, when novelty ends and the mathematics arrives. Reduce
        scope instead of quitting, protect two fixed sessions a week in your calendar, and tell one
        person you'll show them your repository on Sunday.
      </Callout>
    </Section>
  );
}

export function RedFlags() {
  return (
    <Section
      id="red-flags"
      eyebrow="Section 13"
      title="Red Flags — Spotting a Bad AI Course Before You Pay (India + Global)"
    >
      <Checklist
        title="Eighteen signals, in the order I'd check them"
        items={[
          "Guaranteed job or salary claims — conditional to the point of meaninglessness once you read the terms.",
          "Refusal to share a module-level syllabus before payment.",
          "“Live” classes that turn out to be recordings with a TA in chat.",
          "No last-updated date anywhere. In AI, undated means outdated.",
          "No RAG, agents, fine-tuning or MLOps in a 2026 syllabus.",
          "“10+ projects” with no descriptions of what they are.",
          "Manufactured scarcity — “price goes up tonight,” “two seats left.”",
          "Testimonials without full names or LinkedIn profiles.",
          "Placement statistics quoted with no denominator.",
          "Instructor names withheld until after enrollment.",
          "No refund policy, or a window shorter than the first module.",
          "EMI arranged through a lender whose terms you can't see before signing.",
          "A curriculum that's 70% classical ML with a GenAI cover slide.",
          "Certificates presented as the primary outcome of the program.",
          "No mechanism anywhere for human feedback on your code.",
          "Buried cancellation flows or default auto-renew — global platforms very much included.",
          "ISA or “job guarantee” fine print that binds income or defines “job” loosely.",
          "University “collaboration” that turns out to be a licensed logo or a two-day masterclass.",
        ]}
      />
      <Callout tone="warn" label="On sales calls, anywhere in the world">
        Get everything in writing. Never pay on the same call. Treat urgency as information about the
        seller, not about the offer. A program confident in its delivery will happily let you sit in
        on a class and think for two days.
      </Callout>
    </Section>
  );
}

export function FreeVsPaid() {
  return (
    <Section id="free-vs-paid" eyebrow="Section 14" title="Free vs. Paid AI Courses in 2026">
      <P>
        If you're highly self-directed, already code, and have time rather than money, the 2026 free
        stack is genuinely world-class. Here it is as a usable sequence — this article should be
        useful even to readers who never buy anything.
      </P>
      <Table
        caption="The free stack, in order"
        head={["Stage", "Resource", "What it gives you", "Time"]}
        rows={[
          ["1. Foundations", "DeepLearning.AI (audit)", "The clearest ML and deep learning explanations available anywhere", "8–12 weeks"],
          ["2. Practical DL", "Fast.ai — Practical Deep Learning", "Training working models fast, top-down", "6–8 weeks"],
          ["3. Transformers & agents", "Hugging Face courses", "Current, practitioner-grade NLP, LLM and agent material", "4–6 weeks"],
          ["4. Reps & evaluation", "Kaggle Learn + competitions", "Feature engineering and evaluation discipline under real constraints", "Ongoing"],
          ["5. Cloud & theory", "Google ML Crash Course, NPTEL/SWAYAM", "Vendor-grade practice and rigorous academic theory at ₹0", "4–8 weeks"],
          ["6. Depth", "Official docs (PyTorch, Hugging Face), Karpathy's Zero-to-Hero", "How things actually work under the abstraction", "Ongoing"],
        ]}
      />
      <H3>What free cannot give you</H3>
      <Table
        head={["What you're buying", "Free route", "Paid route"]}
        rows={[
          ["Content quality", "Equal or better", "Equal"],
          ["Curated sequence that saves months", "You build it yourself", "Done for you"],
          ["Accountability and completion pressure", "None — decisive for most people", "The main product"],
          ["Human code review", "No", "Yes, in good programs"],
          ["Doubt resolution at 11pm", "No", "Mentor channels and SLAs"],
          ["Portfolio design and interview defence", "You must design it", "Structured practice"],
          ["A peer cohort", "No", "Yes, and it matters more than people expect"],
          ["Career support", "No", "Varies from token to genuinely operational"],
          ["Realistic completion", "5–15%", "50–85% in live cohorts"],
        ]}
      />
      <Pull>
        Paid courses in 2026 don't sell information. They sell structure, feedback, sequence and
        accountability. If you can supply those four yourself, free isn't a compromise — it's the
        rational choice. If you've started and stopped before, the structure is the product.
      </Pull>
    </Section>
  );
}

export function Roi() {
  return (
    <Section id="roi" eyebrow="Section 15" title="ROI Reality — Is an AI Course Worth It in 2026?">
      <Callout label="The formula">
        ROI = (realistic salary delta over 24 months × probability of achieving it) − (fee or
        subscription total + financing cost + opportunity cost of hours). All figures below are{" "}
        <strong>illustrative</strong> and unverified. <Verify>VERIFY / ILLUSTRATIVE</Verify>
      </Callout>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <ScoreBadge value="40%" label="Share of outcome set by the course" />
        <ScoreBadge value="60%" label="Set by what you build and do after" />
        <ScoreBadge value="₹0" label="Return if you don't finish" />
      </div>
      <Table
        caption="Four worked scenarios"
        head={["Scenario", "Cost", "What happens", "ROI verdict"]}
        rows={[
          [
            "A — Indian engineer, 4 yrs, ₹80,000 program, completes and switches",
            "₹80,000 + ~500 hours",
            "Portfolio of 10+ projects, internal or external AI role within 6–9 months of finishing",
            "Model payback. Note carefully: the outcome came from completion and portfolio, not from the certificate.",
          ],
          [
            "B — non-tech switcher, ₹2,00,000 program",
            "₹2,00,000 + ~700 hours over 14 months",
            "Longer runway, more foundational catch-up, first role often adjacent rather than titled AI",
            "Positive but slower and higher-variance. This path is harder than marketing suggests — plan 18 months, not 9.",
          ],
          [
            "C — stops a ₹2,00,000 program at month three",
            "Full fee or a 21-month EMI tail",
            "Partial knowledge that decays quickly in a fast-moving field",
            "Strongly negative — and the most common scenario, which almost no article shows you.",
          ],
          [
            "D — US analyst on a US$249/month subscription",
            "Seven months = US$1,743",
            "Same content a disciplined learner finishes in four months for US$996",
            "Expected cost hinges on realistic months, not advertised ones. Compare against a one-time cohort fee before subscribing.",
          ],
        ]}
      />
      <P>
        Three factors determine ROI, in order of impact:{" "}
        <strong>completion</strong> (most of the variance sits here),{" "}
        <strong>portfolio quality</strong>, and <strong>application effort in the three months
        afterwards</strong>. Course choice matters mainly because it heavily determines the first.
      </P>
      <Pull>
        The course is roughly 40% of your outcome. What you build during it, and what you do in the
        three months after, is the other 60%. Any article that says otherwise is selling something.
      </Pull>
    </Section>
  );
}

export function Author() {
  return (
    <Section id="author" eyebrow="Section 16" title="About the Author">
      <div className="mt-8 flex flex-col gap-6 rounded-xl border border-rule bg-paper p-6 shadow-card sm:flex-row">
        <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-lg border border-dashed border-warn/60 bg-highlight/30 text-center font-mono text-[0.65rem] leading-tight text-accent-foreground">
          [PHOTO
          <br />
          PLACEHOLDER]
        </div>
        <div>
          <p className="font-display text-xl font-semibold text-ink">
            <Verify>INSERT: author name</Verify>
          </p>
          <p className="mt-1 text-[0.9rem] text-primary">
            <Verify>INSERT: role</Verify> — AI education analyst and curriculum reviewer
          </p>
          <p className="mt-3 text-[0.95rem] leading-relaxed">
            I review AI curricula for a living, across Indian EdTech, global MOOC platforms, elite
            university programs and vendor certification paths. This analysis exists because the
            available rankings are mostly affiliate listicles, and because the learners I speak to
            keep losing money to the same four failure patterns. The method is documented in Section
            1: six weighted pillars, applied identically to every program, with limitations stated
            for all of them including the one at #1.
          </p>
          <p className="mt-3 text-[0.9rem] text-muted-foreground">
            LinkedIn: <Verify>INSERT: URL</Verify> · Last reviewed:{" "}
            <Verify>INSERT: date</Verify> · This page is updated as curricula, fees and exchange
            rates change; a quarterly review is scheduled.
          </p>
        </div>
      </div>
    </Section>
  );
}

const REVIEWERS: { role: string; company: string; bio: string; quote: string; reviewed: string }[] = [
  {
    role: "AI/ML Engineer",
    company: "Indian product company",
    bio: "Builds and maintains recommendation and ranking systems in production; interviews candidates for ML roles most weeks.",
    quote:
      "Half the candidates I screen can train a model and none of them can tell me why they picked the metric. Any curriculum scorecard that doesn't weight evaluation rigour is measuring the wrong thing.",
    reviewed: "Reviewed the curriculum depth scorecard (Table 2)",
  },
  {
    role: "AI Hiring Manager",
    company: "Global capability centre, Bengaluru",
    bio: "Hires across ML, GenAI and platform roles for a multinational's India engineering centre; sees several hundred applications per opening.",
    quote:
      "The course name gets the CV read. After that it's irrelevant. I ask about one project for forty minutes, and I can tell within five whether they built it or followed it.",
    reviewed: "Reviewed career outcomes and interview sections",
  },
  {
    role: "Engineering leader",
    company: "US / European technology company",
    bio: "Leads a platform team shipping LLM features; has hired remotely across three continents in the last two years.",
    quote:
      "I don't recognise most Indian institute names and it has never once stopped me hiring someone. A deployed system with an evaluation harness is a universal language.",
    reviewed: "Reviewed global credential recognition and the India vs. global section",
  },
  {
    role: "Career-switcher alumnus",
    company: "Placed via an online program",
    bio: "Moved from a non-AI engineering role into applied ML after completing a live cohort program alongside full-time work.",
    quote:
      "I quit two self-paced courses before this. Nothing about the content was different — someone just noticed when I stopped showing up.",
    reviewed: "Reviewed delivery and dropout sections",
  },
  {
    role: "AI Educator / Curriculum Designer",
    company: "Independent",
    bio: "Designs AI curricula and has rewritten the same syllabus four times in three years to keep pace with the GenAI layer.",
    quote:
      "Any 2026 curriculum without agents, evaluation and LLMOps is a 2023 curriculum. The field moved; most syllabi didn't.",
    reviewed: "Reviewed the seven-layer skill stack and capability ladder",
  },
];

export function Reviewers() {
  return (
    <Section id="reviewers" eyebrow="Section 17" title="Expert Reviewers">
      <P>
        Five practitioners reviewed the framework and the sections closest to their expertise. Names
        and photographs remain placeholders until each reviewer's attribution is confirmed in
        writing — the quotes below are illustrative of the review feedback and will be replaced with
        attributed statements or removed. <Verify>INSERT: reviewer names, photos, LinkedIn URLs, permission dates</Verify>
      </P>
      <div className="mt-8 flex snap-x gap-4 overflow-x-auto pb-3">
        {REVIEWERS.map((r, i) => (
          <div
            key={r.role}
            className="w-[19rem] shrink-0 snap-start rounded-xl border border-rule bg-paper p-5 shadow-card"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-dashed border-warn/60 bg-highlight/30 text-center font-mono text-[0.6rem] leading-tight text-accent-foreground">
              [PHOTO]
            </div>
            <p className="mt-3 font-display text-base font-semibold text-ink">
              <Verify>INSERT: name {i + 1}</Verify>
            </p>
            <p className="text-[0.85rem] text-primary">
              {r.role} · {r.company}
            </p>
            <p className="mt-2 text-[0.85rem] leading-relaxed text-foreground/85">{r.bio}</p>
            <blockquote className="mt-3 border-l-2 border-accent pl-3 text-[0.85rem] italic leading-relaxed">
              “{r.quote}”
            </blockquote>
            <p className="mt-3 text-[0.75rem] uppercase tracking-wider text-muted-foreground">
              {r.reviewed}
            </p>
            <p className="mt-2 text-[0.8rem] text-primary underline underline-offset-4">
              <Verify>INSERT: LinkedIn</Verify>
            </p>
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
        Reviewers assessed framework and accuracy. Compensation and affiliation status must be stated
        here before publication: <Verify>VERIFY: were reviewers compensated or affiliated?</Verify> If
        any reviewer is compensated or affiliated with a listed provider, that is disclosed rather
        than omitted.
      </p>
    </Section>
  );
}

type FaqGroup = { heading: string; items: [string, string][] };

const FAQ_GROUPS: FaqGroup[] = [
  {
    heading: "Choosing a course",
    items: [
      ["Which is the best AI course in 2026?", "The best AI course in 2026 is the one covering all seven layers hands-on in a format you will finish. On this page's weighting — capability per rupee, dollar and hour — LogicMojo's AI & ML course ranks first. Weight it differently and the answer changes honestly: Stanford Online for an elite academic credential, DeepLearning.AI for foundations at near-zero cost, Scaler for Indian placement infrastructure. Start from your goal, market and weekly hours rather than from a ranking, then use the ranking to shortlist two options and audit both syllabi."],
      ["Which is the best AI course in India?", "For depth per rupee with live mentorship, a specialist live cohort is the strongest Indian option, and LogicMojo ranks first here on that basis. For placement machinery into product companies and GCCs, Scaler is the honest recommendation despite a much higher fee. For a university credential Indian HR recognises immediately, upGrad's IIIT-Bangalore programme. All three are legitimate purchases — they just buy different things, and confusing them is how people overspend by ₹2,00,000."],
      ["Indian or global course — how do I decide?", "Ask four questions: where will you work, what payment model survives your discipline, how much mentorship do you need, and which credential signals in your target market? Indian cohorts win on mentorship density, rupee pricing and completion. Global programs win on brand recognition in the US and Europe, timezone flexibility and near-zero-cost foundations. Many learners should do both: an Indian cohort for capability, a free global credential for the screen."],
      ["Are online AI courses worth it in 2026?", "Yes — when you finish them and build a portfolio. An unfinished course of any price returns nothing, which is why completion probability deserves as much weight as syllabus quality. Judge a course on whether someone reads your code, whether projects force you to design rather than follow, and whether the structure gets you to Week 9. Those three factors predict outcomes far better than curriculum breadth or brand."],
      ["Is live better than self-paced?", "Live is better if you have ever abandoned a self-paced course, need deadlines, or want questions answered in-session rather than in a forum queue. Self-paced is better if you have a genuine track record of finishing alone, an unpredictable schedule, or an awkward timezone. Neither is universally superior — but be honest about your history, because it is evidence about which format works for you rather than a judgement of character."],
      ["How do I know a curriculum is current?", "Ask for a syllabus PDF with a version date, then check for the 2026 markers: production RAG (not one demo), fine-tuning with LoRA/QLoRA, agents and agent frameworks, MCP, open-weight models, LLM evaluation and guardrails, and MLOps. If generative AI content stops at prompting and one API call, you are looking at a 2023 course with a new cover slide, regardless of the price or the logo attached to it."],
      ["University brand or curriculum depth?", "Depth wins the interview; brand sometimes wins the screen. If your employer's promotion process, an internal band change or credential-led screening in the US or Europe assigns real weight to an institution name, the brand is worth paying for. If your target is a technical interview at a product company or startup anywhere, depth and a deployed portfolio matter far more. Many learners get both by pairing an affordable capability program with a free recognised credential."],
      ["AI course vs. data science course?", "A full AI/ML course with a serious generative AI module has the highest optionality in 2026 — it opens data science, ML engineering and GenAI roles simultaneously. Pure data science under-serves AI hiring on deep learning and LLM systems. GenAI-only narrows you to the layer being commoditised fastest and leaves you exposed the moment an interview turns to evaluation, data quality or model behaviour."],
      ["Short certification or long PG programme?", "Short certifications are efficient for cloud credentials, literacy and targeted top-ups. Long PG programmes make sense when you need formal recognition, structured on-ramps from a non-technical background, or a credential your organisation explicitly values. For pure employability within twelve months, a focused six-to-nine-month program with heavy project work usually beats a twelve-to-eighteen-month broad programme at three times the price."],
      ["How do I verify placement claims?", "Five questions, in writing: what percentage of enrolled — not eligible — learners were placed; over what window; what is the median rather than average salary; are these AI roles or any tech role; and can you speak to two alumni from the last six months who were not selected as testimonials. Vague answers to any of these are answers. Published data with visible eligibility conditions is a better sign than a wall of hiring-partner logos."],
    ],
  },
  {
    heading: "Eligibility & prerequisites",
    items: [
      ["Can I learn AI without a coding background?", "Yes, but only with a program that includes an explicit bridge module and human support. Budget an extra two to three months for Python and statistics before the AI content becomes tractable. Do not start with a self-paced MOOC — they assume Python silently and lose beginners by Week 2. Programs with genuine on-ramps include LogicMojo, upGrad and Great Learning in India; globally the options for true beginners are thinner."],
      ["Do I need maths for AI?", "You need intuition for linear algebra, gradients, probability and statistics — not a mathematics degree. Enough to reason about why a model behaves as it does, why regularisation helps, and what a metric is actually measuring. Research roles are the exception: there, graduate-level rigour of the kind Stanford Online teaches is genuinely required. For applied AI engineering, intuition plus careful evaluation practice is sufficient."],
      ["Can a non-IT graduate get an AI job?", "Yes, and mechanical engineers, commerce graduates and teachers do it every year. It takes longer — plan 14 to 18 months rather than 9 — and it requires an explicit foundations phase most marketing glosses over. Domain knowledge is an asset rather than a liability: a banker who understands credit risk and can build models is more valuable to a BFSI team than a generalist with the same technical skill."],
      ["Is a CS degree necessary?", "No. Not one hiring manager I spoke to treated a CS degree as a requirement for applied AI roles, though a few large enterprises filter on degrees at the HR stage. What is genuinely necessary is comfortable programming ability, evaluation discipline and a portfolio you can defend. A CS degree makes the journey shorter; it does not gate the destination."],
      ["How much Python do I need first?", "Enough to write functions, work with data structures, debug your own errors and read someone else's code without panic. Roughly four to six weeks of focused practice for a complete beginner. You do not need object-oriented mastery, decorators or async before starting an AI course — but you do need to be past the point where a stack trace stops you."],
      ["Can I learn AI while working full time?", "Yes, at 8 to 12 hours a week, if the format fits your actual schedule. Weekend-live programs suit people whose weekdays are dead; IST evening cohorts suit those with reliable evenings; self-paced suits genuinely unpredictable schedules if you have discipline. The failure mode is not the workload — it is choosing a format that fights your calendar and losing three weeks you can never catch up."],
      ["What's the minimum weekly commitment?", "Six hours a week is the realistic floor for meaningful progress, and at that level choose self-paced foundations or a single certificate rather than a cohort. Ten to fifteen hours is the sweet spot for real capability inside a live program. Below six hours you can still build literacy, but expecting employable engineering capability from four hours a week is the most common planning error I see."],
      ["Is it too late to start AI in 2026?", "No. The field is broadening rather than closing: enterprise adoption is expanding the number of employers who need AI people, and the frontier keeps resetting so that everyone is relatively new to agents, MCP and LLMOps. What has changed is the bar — literacy is no longer differentiating, and the entry point is now Level 3 with a portfolio rather than a certificate."],
    ],
  },
  {
    heading: "Cost, fees & payment",
    items: [
      ["How much does an AI course cost in India?", "From ₹0 to about ₹4,00,000. Credible structured programs cluster in the ₹40,000–₹2,00,000 band; premium placement-heavy programs run ₹3–4L; entry programs like PW Skills sit at ₹5,000–₹30,000. Always confirm GST treatment, EMI interest and the refund window separately, because the advertised number and the paid number frequently differ. Indian cohort fees are also more negotiable than most learners realise."],
      ["How much do global AI courses and certificates cost?", "Free to about US$20,000. MOOC subscriptions run roughly US$0–US$59 per month; Udacity nanodegrees around US$249 per month; vendor certifications US$0–US$300 including the exam; elite university certificates US$1,500–US$6,000. Subscriptions look cheaper than they are: the meaningful number is monthly fee multiplied by realistic months, not the advertised duration."],
      ["Are expensive courses better?", "No, and this is the clearest finding of the whole evaluation. Programs at three to ten times the price generally do not reach a higher capability ceiling — they buy brand recognition, placement infrastructure or an academic credential. Those are legitimate purchases, but you should know which one you are making. The best capability per rupee sits in the ₹40,000–₹1,20,000 band, not above it."],
      ["Is no-cost EMI genuinely free?", "Sometimes, and sometimes the interest is priced into a higher headline fee. Ask for the total amount payable under the EMI versus the one-time payment — if they differ, the difference is your interest. More importantly, establish whether the EMI is a loan in your name from a bank or NBFC, because that determines what happens if you stop attending."],
      ["What happens to my EMI if I stop?", "If it is a third-party loan in your name, it continues in full regardless of whether you ever open the course again, and a dispute with the institute does not pause it. This is the single most common financial regret in Indian EdTech. Get the refund window, the exact cut-off date and the lender's terms in writing before signing anything, and model the month-three dropout scenario before you commit."],
      ["How do I avoid subscription auto-renewal traps?", "Set a cancellation reminder on the day you subscribe and a second one at the halfway point of your plan. Calculate expected cost as monthly fee multiplied by realistic — not advertised — months before starting. Check where the cancellation flow lives before you need it; buried cancellation is common on global platforms. If you stall for a month, cancel and resubscribe later rather than paying through the gap."],
      ["What are the best free AI courses?", "DeepLearning.AI's specializations for foundations (free to audit), Fast.ai for practical deep learning, Hugging Face courses for transformers and agents, Kaggle Learn for evaluation reps, Google's ML Crash Course for cloud-grade practice, and NPTEL/SWAYAM for rigorous theory from IIT faculty. Assembled in that order they cover Layers 1–5 to a high standard. The bottleneck is never content quality — it is finishing."],
      ["Can I get a refund if the course disappoints?", "Only if you secured a written refund policy with an exact cut-off before paying, which is why it belongs on the pre-enrollment checklist. Most Indian programs offer a short window tied to the first module or two; MOOC platforms have standard policies; per-course university programs have drop deadlines. Verbal assurances from a counsellor are worth nothing when you need them."],
    ],
  },
  {
    heading: "Careers & outcomes",
    items: [
      ["Can I get a job after an online AI course?", "Yes — people do it every month — but the course is roughly 40% of the outcome. What converts is a portfolio of 6 to 12 documented projects, at least one deployed with monitoring, plus sustained application effort in the three months after finishing. Candidates who treat the certificate as the deliverable struggle; candidates who treat the deployed system as the deliverable interview well regardless of where they studied."],
      ["Do Indian employers value global certificates?", "For screening, yes — Stanford, Google and Coursera names help a CV get read, and some enterprise HR filters explicitly recognise them. For hiring decisions, no. Indian technical interviewers move to your projects within the first ten minutes, and a deployed RAG system does more for you than a certificate from a university a recruiter has heard of but cannot assess."],
      ["Do global employers value Indian AI courses?", "They rarely recognise the institution names, and this matters less than most learners fear. US and European interviewers go to your GitHub. What genuinely helps is a portfolio with clear documentation, evaluation metrics and stated trade-offs, plus confident technical communication in English. Capability travels across borders; institutional branding usually does not."],
      ["What salary can I expect in India?", "Indicative and highly variable: roughly ₹8–35L annual CTC for ML engineers, ₹10–40L for GenAI and LLM engineers, ₹7–28L for data scientists, with GCCs and product companies at the higher end and IT services at the lower. [VERIFY: current market data] These ranges depend on city, prior experience and company type far more than on which course you took. No course can promise a band."],
      ["What salary can I expect abroad?", "Indicative US base salary ranges run roughly US$110K–US$190K for ML engineers and US$120K–US$200K for GenAI engineers, with European figures typically lower and Gulf packages structured differently. [VERIFY: current market data] Remote roles are usually priced to your location rather than your employer's. Treat every figure here as orientation for your own research, not as a forecast."],
      ["How many portfolio projects do I need?", "Six to twelve documented projects, of which two or three are substantial and at least one is deployed with monitoring. Quality of documentation matters more than count: state the problem, the architecture, the data, the evaluation metrics and the trade-offs you rejected. Interviewers read the trade-offs section first, because it is the part you cannot fake by following a tutorial."],
      ["What roles can a fresher target?", "Junior data analyst, ML engineer trainee, AI application developer, and data or platform engineering roles adjacent to AI teams. Entry-level AI hiring is competitive everywhere, so an adjacent first role is often the faster route in — you get production exposure, internal mobility and a stronger second job search. Holding out for a title with 'AI' in it costs many freshers a year."],
      ["How long to get an AI job after finishing?", "Typically three to nine months of active applying after completing a program, depending on market, portfolio strength and whether you are switching internally or externally. Internal moves are consistently faster because the employer already trusts you. Nobody can promise a timeline, and any provider that does is describing a marketing claim rather than a hiring process."],
    ],
  },
  {
    heading: "Curriculum & skills",
    items: [
      ["What should a 2026 AI curriculum include?", "Seven layers: foundations (Python, SQL, maths intuition); core ML with real evaluation rigour; deep learning including transformers; applied NLP and computer vision; generative AI with production RAG, fine-tuning, agents, frameworks and MCP; production MLOps and LLMOps; and professional skills including portfolio and system design. If any layer is missing — especially the last three — the curriculum is behind the hiring bar."],
      ["Is GenAI enough, or do I need classical ML too?", "You need both. Most production AI in every market I looked at is still classical machine learning, and GenAI interviews routinely detour into evaluation, data quality and model behaviour where classical grounding shows. A GenAI-only path can work for an experienced software engineer adding LLM application skills; for anyone else it produces a ceiling you hit within a year."],
      ["Do I need MLOps?", "Yes. It was the most consistently cited gap in my conversations with hiring managers, and the largest single difference between candidates who get offers and candidates who don't. Packaging, FastAPI serving, Docker, CI/CD, monitoring, drift and cost optimisation are asked about in nearly every interview from Bengaluru to Berlin — and skipped by most curricula, including elite academic ones."],
      ["PyTorch or TensorFlow?", "PyTorch is the default in research and increasingly in industry, and it is the better first framework in 2026. TensorFlow and Keras remain common in established enterprise stacks, so exposure helps in corporate contexts. What actually matters is understanding the mechanics — tensors, autograd, training loops, debugging — because the concepts transfer between frameworks in about a week."],
      ["Will these skills be obsolete in two years?", "Foundations, deep learning, evaluation discipline and MLOps are durable — they have survived every wave so far. Specific frameworks, APIs and model names will change, which is exactly why framework-agnostic teaching beats learning one vendor's console. The half-life of the tooling is short; the half-life of understanding how retrieval, adaptation and evaluation work is long."],
      ["What are AI agents and why do they matter?", "An agent is a system where a language model plans, calls tools and iterates toward a goal rather than answering in one shot. They matter because 2026 hiring growth concentrates there and because they surface every hard problem at once: reliability, cost, memory, evaluation and failure handling. Building one badly teaches you more than reading about ten. Employers ask, so build at least one."],
    ],
  },
];

export function Faq() {
  let counter = 0;
  return (
    <Section id="faq" eyebrow="Section 18" title="Frequently Asked Questions">
      <P>
        Forty questions, grouped, each answered directly in the first sentence. Where a question has
        an uncomfortable answer, the uncomfortable answer is the one given.
      </P>
      {FAQ_GROUPS.map((g, gi) => (
        <div key={g.heading}>
          <H3>{g.heading}</H3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {g.items.map(([q, a]) => {
              counter += 1;
              const n = counter;
              const tones = [
                "border-primary/25 bg-gradient-to-br from-secondary to-paper",
                "border-good/30 bg-gradient-to-br from-good/8 to-paper",
                "border-warn/30 bg-gradient-to-br from-highlight/50 to-paper",
                "border-rule bg-gradient-to-br from-muted/70 to-paper",
              ];
              return (
                <details
                  key={q}
                  open={n <= 2}
                  className={
                    "group rounded-2xl border p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)] " +
                    tones[(gi + n) % tones.length]
                  }
                >
                  <summary className="flex cursor-pointer list-none items-start gap-3 font-display text-[1.02rem] font-semibold leading-snug text-ink">
                    <span className="gradient-primary mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg font-mono text-[0.62rem] font-bold text-primary-foreground">
                      {String(n).padStart(2, "0")}
                    </span>
                    <span className="flex-1">{q}</span>
                    <span
                      aria-hidden
                      className="mt-0.5 text-primary transition-transform duration-300 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 border-t border-rule/70 pt-3 text-[0.92rem] leading-relaxed text-foreground/85">
                    {a}
                  </p>
                </details>
              );
            })}
          </div>
        </div>
      ))}

    </Section>
  );
}

export function FinalVerdict() {
  return (
    <Section
      id="final-verdict"
      eyebrow="Section 19"
      title="Final Verdict — The Best AI Course in 2026 (India + Global)"
    >
      <P>
        Three picks, one line each. <strong>LogicMojo</strong> is first because it teaches all seven
        layers hands-on, live, at a price a working professional can absorb — the best capability per
        rupee, dollar and hour on this page. <strong>DeepLearning.AI</strong> is second because
        nothing in the world explains AI foundations better, and it costs nothing to audit.{" "}
        <strong>Scaler</strong> is third because if your goal is an Indian product company or GCC and
        you'll use the placement machine, that machine is the best of its kind here.
      </P>
      <P>
        The right answer for you depends on four things this article has repeated deliberately: your
        target market, your goal, your budget in your own currency, and the number of hours you will
        genuinely give each week. A fifth thing decides more than all of them —{" "}
        <strong>whether you finish</strong>. Completion and portfolio quality determine outcomes far
        more than course choice does, and course choice matters mostly because it heavily determines
        completion.
      </P>
      <P>
        The India-versus-global bottom line, in one sentence:{" "}
        <strong>capability travels, brands help at the screen, and builds win the interview.</strong>{" "}
        An Indian cohort will not carry your CV past a credential-led filter in Munich; a Stanford
        certificate will not answer a question about your chunking strategy. Know which problem
        you're solving and buy the instrument that solves it.
      </P>
      <Callout tone="good" label="Your one concrete next action">
        Take the syllabus PDF of the course you're closest to choosing and audit it against the seven
        layers in Section 4 — mark each layer hands-on, theory-only, or absent. Then block ten hours
        a week in your calendar for the next month and see whether you actually protect them. Those
        two exercises tell you more than another week of comparison reading.
      </Callout>
      <Cta>Explore LogicMojo's AI Course — Full Curriculum, Live Batches &amp; Project Portfolio</Cta>
    </Section>
  );
}

export function Footer() {
  const col = (title: string, items: string[]) => (
    <div>
      <p className="eyebrow">{title}</p>
      <ul className="mt-2 space-y-1.5">
        {items.map((i) => (
          <li key={i}>
            <a href="#" className="text-[0.9rem] text-foreground/85 underline underline-offset-4 hover:text-primary">
              {i}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <footer className="mt-20 border-t border-rule bg-secondary/50 pb-24">
      <div className="mx-auto max-w-4xl px-5 py-12">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-dashed border-warn/60 bg-highlight/30 font-mono text-[0.55rem] text-accent-foreground">
            LOGO
          </div>
          <div>
            <p className="font-display text-lg font-semibold text-ink">LogicMojo</p>
            <p className="text-[0.85rem] text-muted-foreground">
              Live, mentor-led engineering education for working professionals.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          {col("Courses", ["AI & ML Course", "GenAI Course", "Data Science Course", "DSA & System Design"])}
          {col("Resources", [
            "Curriculum PDF",
            "Batch schedule",
            "Project portfolio",
            "Success stories",
            "AI course fees in India",
            "AI career roadmap",
            "RAG explained",
            "AI interview questions",
          ])}
          {col("Company", ["Contact", "Blog", "FAQs", "Privacy Policy", "Terms", "Refund Policy"])}
        </div>

        <p className="mt-8 text-[0.85rem] text-muted-foreground">
          Contact: <Verify>INSERT: email</Verify> · <Verify>INSERT: phone</Verify> ·{" "}
          <Verify>INSERT: WhatsApp</Verify> · Social: <Verify>INSERT: links</Verify>
        </p>

        <p className="mt-6 border-t border-rule pt-6 text-xs leading-relaxed text-muted-foreground">
          <strong>Disclosure:</strong> this article is published by LogicMojo, which appears at #1 in
          this ranking. Scoring criteria, weights and genuine limitations for every course —
          including the #1 pick — are stated in full so the conclusion can be tested against the
          evidence. Competitor claims are based on publicly available course pages as of{" "}
          <Verify>INSERT: check date</Verify> and vary by variant and region; verify before enrolling
          anywhere. All fees are indicative and marked <Verify>VERIFY</Verify> where unconfirmed.
          Conversions use ₹83 = US$1 <Verify>VERIFY: conversion rate</Verify> as of{" "}
          <Verify>INSERT: date</Verify>. Salary figures are directional market observations, not
          survey data or promises. This page contains no job, salary, visa or immigration advice or
          guarantees. Educational content only — confirm fees, GST, EMI terms, refund windows and
          batch dates in writing with any provider before paying. Reviewed quarterly.
        </p>
        <p className="mt-4 text-xs text-muted-foreground">
          © <Verify>INSERT: year</Verify> LogicMojo. All rights reserved. Last updated{" "}
          <Verify>INSERT: month/year</Verify>.
        </p>
      </div>
    </footer>
  );
}
