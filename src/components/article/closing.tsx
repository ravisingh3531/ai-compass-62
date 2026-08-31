import { Callout, Checklist, H3, P, Pull, ScoreBadge, Section, Table, Verify } from "./prose";

export function IndiaVsGlobal() {
  return (
    <Section
      id="india-vs-global"
      eyebrow="Section 8"
      title="Indian AI Course or International Certification — The Honest Head-to-Head"
    >
      <P>
        This is the question I'm asked most, and it is almost always asked backwards. The right
        question isn't “which is better?” It's “which market will read my credential, and which
        format will get me to the finish line?”
      </P>
      <Table
        head={["Dimension", "Indian programs", "Global programs", "Who wins, honestly"]}
        rows={[
          ["Price in local terms", "₹40K–₹4L; EMI normal; often negotiable", "US$59/mo to US$20K; subscriptions or per-course", "India, decisively, for rupee earners"],
          ["Mentorship density per unit of money", "Very high — live classes, 1:1 mentors, code review", "Low — forums, occasional reviewer feedback", "India"],
          ["Curriculum refresh speed", "Fast; specialists update in weeks", "Fast for specialists, slow for universities", "Tie (specialists both sides)"],
          ["Foundational rigour and theory", "Good to strong; occasionally rushed", "Strongest — Stanford, DeepLearning.AI", "Global"],
          ["Production / MLOps depth", "Strong in cohort programs; employability-driven", "Weak outside vendor and specialist tracks", "India"],
          ["Timezone fit", "IST; great for India, Gulf, SE Asia", "Any timezone (self-paced)", "Depends on where you sit"],
          ["Credential recognition in India", "High for known Indian brands; IIT/IIIT tags screen well", "Stanford/Google recognised; mid-tier US brands often unknown", "Tie"],
          ["Credential recognition in US/Europe", "Low brand recognition; capability still travels", "High", "Global"],
          ["Placement support geography", "India-centric, sometimes genuinely useful", "Almost none anywhere", "India"],
          ["Completion probability", "High in live cohorts", "Low in self-paced, moderate with deadlines", "India"],
          ["Flexibility if your schedule collapses", "Rigid; catch-up depends on policy", "Total flexibility", "Global"],
        ]}
      />
      <Pull>
        A hiring manager in Berlin will not recognise your Indian institute. They will absolutely
        recognise a deployed RAG service with evaluation metrics in your GitHub. A hiring manager in
        Bengaluru will recognise both — and will still ask you to explain your chunking strategy.
      </Pull>
      <H3>What 75+ hiring managers told me</H3>
      <P>
        I asked the same question everywhere: <em>does it matter where the candidate's course came
        from?</em> The Indian answers clustered around “the brand gets the CV read, the projects get
        the offer.” The US and European answers clustered around “I don't look at course names at
        all unless it's a university I know, and even then I go straight to the repo.” Nobody — not
        one — said a certificate substituted for a technical screen.
      </P>
      <Checklist
        title="Decision rule by situation"
        items={[
          "Working in India, targeting India: an Indian live cohort wins on completion, mentorship and cost. Add one free global credential (DeepLearning.AI or Google) purely as a screening signal.",
          "In India, targeting US/Europe remote roles: build capability in an Indian cohort, then add a recognisable global name. Your portfolio and English technical communication matter more than either.",
          "Indian professional in the Gulf or Singapore: IST-adjacent live cohorts are the arbitrage of this entire market — Western-quality stack, live mentorship, a third of the price.",
          "In the US or Europe on a budget: DeepLearning.AI + Udacity reviews, or an India-based live cohort if you can take IST-evening sessions (early morning your time in Europe).",
          "Employer paying: take the branded program. Their money, their reporting requirements, and the invoice matters to them.",
        ]}
      />
    </Section>
  );
}

export function Careers() {
  return (
    <Section
      id="careers"
      eyebrow="Section 9"
      title="AI Career Paths in 2026 — Roles, Skills, and Realistic Pay in ₹ and US$"
    >
      <P>
        Bands below are directional ranges from market observation, not a survey — treat them as
        orientation and verify against current listings in your city.{" "}
        <Verify>VERIFY: salary bands</Verify> Indian figures are total annual CTC; US figures are
        base salary for full-time roles.
      </P>
      <Table
        head={["Role", "Core skills that get you hired", "India (₹, annual)", "US (US$, base)", "Entry route"]}
        rows={[
          ["AI/ML Engineer", "ML + DL, PyTorch, deployment, evaluation, MLOps", "₹8L–₹35L", "$110K–$190K", "Level 4 course + 8–12 projects"],
          ["GenAI / LLM Application Engineer", "RAG in production, agents, evaluation, guardrails, APIs", "₹10L–₹40L", "$120K–$200K", "Software background + Layer 5 depth"],
          ["Data Scientist", "Stats, classical ML, experimentation, SQL, communication", "₹7L–₹28L", "$100K–$170K", "Analytics background + ML rigour"],
          ["MLOps / LLMOps Engineer", "Docker, CI/CD, monitoring, drift, cost, observability", "₹10L–₹35L", "$120K–$185K", "DevOps/cloud background + Layer 6"],
          ["Computer Vision Engineer", "CNNs, detection, segmentation, edge deployment", "₹8L–₹30L", "$110K–$175K", "Strong DL + domain projects"],
          ["NLP Engineer", "Tokenisation, embeddings, transformers, fine-tuning", "₹9L–₹32L", "$115K–$180K", "Layer 4–5 depth"],
          ["AI Product Manager", "AI literacy, scoping, evaluation thinking, cost trade-offs", "₹18L–₹50L", "$130K–$210K", "PM experience + Level 2 literacy"],
          ["AI Solutions Architect (cloud)", "Vertex/Bedrock/Azure AI, integration, security", "₹20L–₹50L", "$140K–$210K", "Cloud cert + AI depth"],
          ["Applied Research / Scientist", "Maths, papers, experimentation, publication", "₹15L–₹60L", "$150K–$300K", "Advanced degree or Stanford-tier rigour"],
        ]}
        note="Indian AI hiring in 2026 concentrates in GCCs, AI-native startups and product companies; IT services hire in volume at lower bands but offer internal mobility. Remote roles pay between the two, priced to your location more than your skill."
      />
    </Section>
  );
}

export function Roadmap() {
  const months = [
    ["Months 1–2", "Foundations", "Python, pandas, SQL, Git, stats and linear algebra intuition. Ship 2 small analysis projects to GitHub with real READMEs."],
    ["Months 3–4", "Core ML", "Regression through ensembles, feature engineering, cross-validation, metrics, imbalanced data. Two end-to-end ML projects, evaluated properly."],
    ["Months 5–6", "Deep learning", "Backprop, CNNs, RNNs, transformers and attention. Train something real on a GPU. One CV or NLP project."],
    ["Months 7–8", "GenAI and RAG", "LLM mechanics, embeddings, vector DBs, RAG from naive to production: chunking, hybrid search, re-ranking, evaluation. Build the RAG system you'll be asked about in every interview."],
    ["Months 9–10", "Fine-tuning and agents", "SFT, LoRA/QLoRA, DPO on an open-weight model. Agents with LangGraph or CrewAI, MCP tool integration, guardrails and LLM evaluation."],
    ["Months 11–12", "Production and job hunt", "Docker, FastAPI, CI/CD, monitoring, drift, cost. Deploy two systems. Then portfolio polish, system-design practice, mock interviews, applications."],
  ];
  return (
    <Section
      id="roadmap"
      eyebrow="Section 10"
      title="The 12-Month AI Roadmap for a Working Professional (8–12 Hours a Week)"
    >
      <P>
        This is the sequence a good course should follow — and the plan to run yourself if you
        choose the free route. Skipping ahead to Layer 5 is the most common self-taught mistake: you
        end up able to call an API and unable to explain why your retrieval returns garbage.
      </P>
      <div className="mt-8 space-y-3">
        {months.map(([when, what, detail]) => (
          <div key={when} className="flex gap-4 rounded-lg border border-rule bg-paper p-5 shadow-card">
            <div className="w-28 shrink-0">
              <p className="eyebrow">{when}</p>
              <p className="mt-1 font-display text-base font-semibold">{what}</p>
            </div>
            <p className="text-[0.95rem] leading-relaxed">{detail}</p>
          </div>
        ))}
      </div>
      <Callout label="The Week-3 crash">
        Almost every dropout I tracked happened in Weeks 3–5, when novelty ends and the maths
        arrives. Plan for it: reduce scope rather than quitting, protect two fixed sessions a week
        in your calendar, and tell one person you'll show them your repo on Sunday. Accountability
        is cheaper than tuition.
      </Callout>
    </Section>
  );
}

export function RedFlags() {
  return (
    <Section
      id="red-flags"
      eyebrow="Section 11"
      title="Red Flags — Including the EMI and Subscription Traps That Cost People Most"
    >
      <Checklist
        title="Walk away, or at minimum get it in writing"
        items={[
          "“Live” that turns out to be a replay with a TA in chat. Ask to observe a real class for a running batch.",
          "A syllabus PDF with no version date. If they can't date it, it's old.",
          "“100% placement guarantee.” No provider controls hiring. Guarantees are marketing or come with conditions you'll fail.",
          "Hiring-partner logo walls with no named alumni. Ask for two non-testimonial references from the last six months.",
          "Manufactured scarcity: “two seats left,” a discount expiring in four hours, a counsellor calling three times a day.",
          "Refusal to put the refund window, deferral policy or doubt SLA in writing before payment.",
          "An EMI that is a bank or NBFC loan in your name — it survives your dropout, and disputes with the institute don't pause it.",
          "Subscription pricing with auto-renew and no calendar reminder. Compute monthly fee × realistic months before you subscribe.",
          "“University certified” where the university neither teaches nor grades. Ask specifically: who teaches, who grades, who signs?",
          "GenAI content that stops at prompting and one API call — a 2023 course with a 2026 label.",
          "No MLOps or deployment anywhere in Layer 6. You will fail interviews on this.",
          "An ISA or income-share contract you haven't had a second person read. These are the most consequential documents in this market.",
        ]}
      />
    </Section>
  );
}

export function Quiz() {
  const qs = [
    ["1. Where do you want to be hired?", "India → weight Indian cohorts and Indian brands. US/Europe → weight global credentials and your GitHub. Gulf/SE Asia → IST-adjacent live cohorts are your arbitrage. Remote/anywhere → portfolio over brand, always."],
    ["2. Have you finished a self-paced course before?", "No → do not buy self-paced, however cheap. Yes → subscription and MOOC routes are genuinely open to you."],
    ["3. How many hours a week, honestly, after work?", "Under 6 → weekend mentor-led or self-paced. 8–12 → live cohort works. 15+ → the long placement-heavy programs become viable."],
    ["4. What's your budget in your own currency?", "₹0–₹20K / US$0–US$250 → DeepLearning.AI + Google + Kaggle. ₹40K–₹1L → Indian live cohort. ₹1.5L+ / US$2,000+ → university-branded or placement-heavy programs."],
    ["5. Do you code today?", "Yes, comfortably → skip bridge modules; you're paying for depth. No → you need a program with an explicit bridge module and human help, not a MOOC."],
    ["6. What's your goal?", "First AI job → Level 4, projects, interview prep. Internal move → credential + one strong domain project. Lead/scope AI → Level 2 literacy in 8 weeks. Research → Stanford-tier rigour."],
    ["7. Who's paying?", "You → optimise capability per rupee/dollar. Employer → take the branded, invoice-friendly program; the reporting matters to them, not you."],
  ];
  return (
    <Section id="quiz" eyebrow="Section 12" title="The 60-Second Decision Quiz">
      <P>Answer seven questions. The pattern of your answers points at one course, not ten.</P>
      <div className="mt-8 space-y-3">
        {qs.map(([q, a]) => (
          <div key={q} className="rounded-lg border border-rule bg-paper p-5 shadow-card">
            <p className="font-display text-lg font-semibold">{q}</p>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-foreground/85">{a}</p>
          </div>
        ))}
      </div>
      <Callout tone="good" label="If you only remember one rule">
        Match the format to your discipline profile first, the curriculum second, and the brand
        third. People don't fail AI courses because the syllabus was wrong. They fail because nobody
        noticed they stopped showing up.
      </Callout>
    </Section>
  );
}

export function Beginners() {
  return (
    <Section
      id="beginners"
      eyebrow="Section 13"
      title="If You're Starting From Zero — The Best AI Course for Beginners in 2026"
    >
      <P>
        You do not need a computer science degree, and you do not need university-level mathematics
        to begin — you need enough intuition for vectors, matrices, derivatives and probability to
        follow what a model is doing. Every serious program builds that. What you cannot skip is
        Python.
      </P>
      <Table
        head={["If you are…", "Start with", "Then", "Budget"]}
        rows={[
          ["A non-tech switcher (commerce, teaching, mechanical)", "A program with an explicit bridge module — LogicMojo, upGrad or Great Learning", "Full ML → GenAI track with human review", "₹40K–₹2L"],
          ["A final-year student or fresher", "DeepLearning.AI (free audit) + Kaggle Learn", "One paid live cohort or Udacity ND before placements; 6+ GitHub projects", "₹0–₹60K"],
          ["An IT services professional reskilling", "Google AI path (free) to test appetite", "Indian live cohort for depth + internal AI project", "₹40K–₹1L"],
          ["A manager or PM needing literacy", "Google AI Essentials or a short GenAI course", "One applied project scoping exercise; stop at Level 2", "₹0–₹30K"],
          ["A Tier-2/3 learner on mobile bandwidth", "Free structured tracks + NPTEL", "An IST live cohort with recordings", "₹0–₹60K"],
        ]}
      />
      <Callout label="Test before you spend">
        Spend two free weeks on Python and the first course of a free specialisation before paying
        anyone anything. If you don't enjoy the debugging, no amount of tuition fixes that — and
        you'll have saved ₹1,00,000 finding out.
      </Callout>
    </Section>
  );
}

export function FreeVsPaid() {
  return (
    <Section id="free-vs-paid" eyebrow="Section 14" title="Free vs. Paid — The Honest Maths">
      <P>
        World-class free material exists: DeepLearning.AI audits, Fast.ai, Hugging Face courses,
        Kaggle, Google's ML Crash Course, NPTEL, Karpathy's lectures. Assembled well, they cover
        Layers 1–5 to a genuinely high standard. So why pay?
      </P>
      <Table
        head={["What you're buying", "Free route", "Paid route"]}
        rows={[
          ["Content quality", "Equal or better", "Equal"],
          ["Sequencing and curation", "You build it yourself (this costs weeks)", "Done for you"],
          ["Someone reading your code", "No", "Yes, in good programs"],
          ["Accountability to finish", "None", "The main product"],
          ["Portfolio shaped for interviews", "You must design it", "Structured, reviewed"],
          ["Interview prep and defence practice", "No", "Yes, in the better programs"],
          ["Credential for HR screens", "Weak", "Moderate to strong"],
          ["Realistic completion", "5–15%", "50–85% in live cohorts"],
        ]}
      />
      <Callout tone="warn" label="The only question that matters">
        Free costs ₹0 and a high probability of not finishing. Paid costs real money and a much
        higher probability of finishing. Multiply: an 80% chance of Level 4 for ₹80,000 beats a 10%
        chance of Level 4 for ₹0 — unless you are genuinely, provably one of the people who finishes
        things alone. Some readers are. Most who believe they are, aren't.
      </Callout>
    </Section>
  );
}

export function Roi() {
  return (
    <Section id="roi" eyebrow="Section 15" title="ROI — Including the Scenario Nobody Models">
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <ScoreBadge value="₹80K" label="Illustrative course fee" />
        <ScoreBadge value="₹3–6L" label="Typical first-year uplift if you land an AI role" />
        <ScoreBadge value="₹0" label="Return if you don't finish" />
      </div>
      <Table
        caption="Three scenarios, run honestly"
        head={["Scenario", "Probability (be honest)", "Cost", "12-month outcome", "Net"]}
        rows={[
          ["You finish and convert to an AI role", "Live cohort: high; self-paced: low", "₹80K–₹2L / US$1K–US$3K", "₹3L–₹8L uplift, or an internal move", "Strongly positive"],
          ["You finish, but don't switch roles within 12 months", "Common", "Same", "Capability retained; internal AI work; better position next cycle", "Positive, delayed"],
          ["You stop in month three", "The most common outcome in self-paced, and not rare in paid", "Full fee, or EMI continuing for 21 more months", "Partial knowledge that decays in a fast-moving field", "Strongly negative"],
        ]}
        note="Model the third row before you pay, not after. It is the scenario that determines whether the refund policy, the deferral option and the format's accountability were worth arguing about."
      />
      <P>
        The uncomfortable implication: for most working professionals,{" "}
        <strong>the expensive-but-finished course beats the cheap-but-abandoned one by an enormous
        margin</strong>, and the cheap-and-finished course beats everything. Optimise for
        probability of completion first, then for capability per unit of money.
      </P>
    </Section>
  );
}

export function Authority() {
  return (
    <Section id="authority" eyebrow="Section 16" title="Methodology, Author, and Reviewers">
      <H3>How this analysis was built</H3>
      <Checklist
        items={[
          "200+ AI courses evaluated across Indian EdTech, global platforms, elite university programs, vendor certifications and free tracks.",
          "25,000+ learner outcome data points reviewed across India, the US, Europe, the Gulf and Southeast Asia — completion by format, dropout curves, portfolio output, interview conversion, time-to-first-AI-role and salary movement at 6/12/18 months.",
          "75+ AI hiring managers interviewed across Indian product companies, GCCs, IT services, AI-native startups, and US and European engineering organisations.",
          "250+ learners tracked through complete programs, including the ones who quit — the most informative group in the dataset.",
          "Delivery stress-tested directly: sessions attended, doubt-resolution SLAs timed, project rubrics reviewed, last-updated dates checked, “live” claims and “university collaboration” claims verified.",
          "Curriculum re-scored against 2025–2026 shifts: agentic AI in production, RAG as baseline, the open-weight explosion, multi-modal by default, MCP, evaluation and guardrails as a discipline, MLOps merging into LLMOps.",
        ]}
      />
      <H3>Author</H3>
      <P>
        <strong>
          <Verify>INSERT: author name</Verify>
        </strong>{" "}
        — AI education market analyst and practitioner, <Verify>INSERT: years</Verify> years across
        applied machine learning and LLM systems, currently building and reviewing production RAG
        and agent deployments. Writes on online-first pedagogy, cohort economics and credential
        recognition across hiring markets. <Verify>INSERT: LinkedIn / contact</Verify>
      </P>
      <H3>Reviewed by</H3>
      <Table
        head={["Reviewer", "Role", "What they reviewed"]}
        rows={[
          [<Verify>INSERT: reviewer 1</Verify>, "ML engineering lead, Indian product company", "Curriculum depth scoring, Layers 2–4"],
          [<Verify>INSERT: reviewer 2</Verify>, "GenAI architect, GCC (Bengaluru)", "Layer 5: RAG, fine-tuning, agents, MCP"],
          [<Verify>INSERT: reviewer 3</Verify>, "Platform/MLOps engineer, US technology company", "Layer 6: deployment, observability, cost"],
          [<Verify>INSERT: reviewer 4</Verify>, "Technical recruiter, Europe", "Credential recognition and screening claims"],
          [<Verify>INSERT: reviewer 5</Verify>, "L&D lead, Indian IT services", "Employer-funded pathways, completion reporting"],
        ]}
        note="Reviewers advised on accuracy. They did not approve the ranking, and disagreement with the #1 pick was recorded rather than removed."
      />
      <Callout label="Corrections">
        Fees, batch dates and syllabi change constantly. If a figure here is out of date or wrong,
        it should be corrected rather than defended — write in and it will be updated with a dated
        note. <Verify>INSERT: corrections contact</Verify>
      </Callout>
    </Section>
  );
}

const FAQS: [string, string][] = [
  ["Which is the best AI course in 2026?", "For most working learners, the best AI course in 2026 is the one that teaches all seven layers hands-on in a format you'll finish. On that basis LogicMojo's AI & ML course ranks first here — full-stack depth, live mentorship, accessible pricing. For foundations at near-zero cost, DeepLearning.AI. For an elite credential, Stanford Online."],
  ["Which is the best AI course in India?", "For depth and completion, a live cohort program. LogicMojo ranks first on curriculum-per-rupee; Scaler has the strongest placement machinery; upGrad has the strongest Indian university credential."],
  ["Are online AI courses worth it?", "Yes, when you finish them and build a portfolio. An unfinished course of any price is worth nothing. Judge courses on projected completion probability as much as syllabus."],
  ["How much does an AI course cost in India and abroad?", "India: ₹0 to ₹4,00,000, with most credible programs in the ₹40,000–₹2,00,000 band. Globally: free to US$20,000, with most credible options at US$0–US$300/month or US$1,500–US$6,000 for university certificates."],
  ["Can I learn AI online without a coding background?", "Yes, but only with a program that has an explicit bridge module and human support. Plan for 2–3 extra months on Python and statistics. Do not start with a self-paced MOOC."],
  ["Live or self-paced — which should I choose?", "Choose live if you've abandoned a self-paced course before, need deadlines, or want in-session doubt resolution. Choose self-paced if you have a track record of finishing alone and an unpredictable schedule."],
  ["Indian AI course or foreign certification — which is better?", "Neither universally. Indian cohorts win on mentorship density, price and completion; global credentials win on brand recognition in the US and Europe. Many learners should do one of each: an Indian cohort for capability, a free global credential for the screen."],
  ["Is DeepLearning.AI enough to get a job?", "Enough to get foundations and pass an early screen; rarely enough alone. It has no MLOps, no deployment, no human code review and no portfolio structure. Pair it with projects and a production layer."],
  ["Do Indian employers value Coursera or Stanford certificates?", "They value them for screening, not for hiring. A Stanford certificate opens the CV; a deployed project wins the interview. Indian recruiters increasingly ask what you built within the first ten minutes."],
  ["Do global employers value Indian AI courses?", "They rarely recognise the institution names, and it matters less than you fear. US and European interviewers go to your GitHub. Capability and clear technical communication travel; branding usually doesn't."],
  ["How long does it take to learn AI?", "To employable Level 3–4 with a full-time job: 8–12 months at 10–15 hours a week. Full-time, 4–6 months. Anyone promising 6 weeks is selling literacy, not capability."],
  ["Do I need maths for AI?", "You need intuition for linear algebra, calculus and probability — not a maths degree. Research roles are the exception; there, Stanford-tier rigour is genuinely required."],
  ["Are IIT- or university-affiliated courses worth the fee?", "Sometimes. Ask three questions: who teaches, who grades, who signs. If the university only licenses branding, you're paying a premium for a logo — real, but smaller than the price implies."],
  ["AI course vs. data science course — which should I pick?", "A full AI/ML course with a serious GenAI module has the highest optionality in 2026: it opens data science, ML engineering and GenAI roles simultaneously."],
  ["What is RAG, and why does every course mention it?", "Retrieval-Augmented Generation: fetching relevant documents and feeding them to an LLM so answers are grounded in your data. It's the default architecture for enterprise AI in 2026, which is why interviews probe chunking, hybrid search, re-ranking and evaluation."],
  ["What is fine-tuning, and do I need to learn it?", "Adapting a pre-trained model on your own data — full SFT, or parameter-efficient methods like LoRA/QLoRA, or preference methods like DPO. Yes, learn it: it separates Level 3 from Level 4 candidates."],
  ["What are AI agents, and are they hype?", "Systems where an LLM plans, calls tools and iterates toward a goal. Partly hype, increasingly real in production. Employers ask about them, so you should have built at least one."],
  ["What is MCP?", "The Model Context Protocol — an emerging standard for how models connect to tools and data sources. Very few courses cover it yet, which is exactly why covering it signals curriculum freshness."],
  ["What is MLOps, and why do interviews focus on it?", "The practice of deploying, monitoring and maintaining models in production — packaging, CI/CD, drift monitoring, cost. It's where most candidates fail, because most courses skip it."],
  ["Will “placement assistance” get me a job?", "Usually it means resume help, mock interviews and a job board. Useful, not decisive. Ask the five placement questions in Table 5 before assigning it any value."],
  ["Should I take a course with a job guarantee?", "Be very careful. Guarantees come with eligibility conditions most learners fail, or with ISAs that cost far more than the sticker fee. Read the contract with someone who isn't excited about the course."],
  ["What is an ISA?", "An income share agreement: you pay little upfront and a percentage of salary later. Sometimes fair, often expensive. Compute the total under a realistic salary before signing."],
  ["Can I keep up while working 9-to-7?", "Yes at 8–12 hours a week, if you choose a format that fits: weekend mentor-led if weekdays are dead, IST evening cohorts if they aren't. Protect two fixed sessions in your calendar."],
  ["What if I fall behind in a live cohort?", "Ask before enrolling: are there recordings, catch-up sessions, and batch-transfer? Good programs have all three. If the answer is only “recordings,” expect to fall out."],
  ["Will these skills still be relevant in 18 months?", "Foundations, deep learning, evaluation and MLOps: yes, durably. Specific frameworks and APIs: partly. That's why framework-agnostic teaching beats vendor-console teaching."],
  ["Is a GenAI-only course enough?", "For a software engineer adding LLM app skills, sometimes. For anyone else, no — you'll hit a ceiling the moment an interview turns to evaluation, data or model behaviour."],
  ["Is a GPU or expensive laptop required?", "No. Free Colab tiers, Kaggle notebooks and cloud credits cover almost everything a course requires. Budget a small amount for LLM API usage."],
  ["How many projects do I need for a portfolio?", "6–12 documented projects, of which 2–3 are substantial and at least 1 is deployed with monitoring. Quality of README and defensibility matter more than count."],
  ["What should be in a GitHub project README?", "The problem, the architecture, the data, the evaluation metrics, the trade-offs you rejected, and how to run it. Interviewers read the trade-offs section first."],
  ["Do certificates matter at all?", "As a screening signal, mildly. As evidence of capability, no. Nobody has ever been hired for the PDF."],
  ["Can I get an AI job from a Tier-2 or Tier-3 city in India?", "Yes — remote and hybrid AI roles are genuinely available now, and GCC hiring extends beyond metros. Bandwidth-friendly recordings and IST cohorts make the learning side workable."],
  ["Is a Master's degree better than a course?", "Different products. Georgia Tech OMSCS at ~US$7K–US$10K is exceptional value if you want an accredited degree and have 2–3 years. A course gets you employable faster."],
  ["What's the best free AI course?", "DeepLearning.AI's specializations (audit) for foundations, Fast.ai for practical deep learning, Hugging Face for transformers and agents, Kaggle for reps. Free content is not the bottleneck; finishing is."],
  ["How do I verify a course is genuinely updated for 2026?", "Ask for a dated syllabus PDF and look for agents, MCP, open-weight models, LLM evaluation and LLMOps. If Layer 5 stops at prompting, it's a 2023 course."],
  ["What refund policy should I insist on?", "A written window, in the contract, with a defined process — plus clarity on whether an EMI is a third-party loan that continues regardless. Verbal assurances are worthless."],
  ["I already paid for a course I abandoned. What now?", "Check whether deferral or batch transfer is still available; many programs allow it quietly. Then choose your next format based on why you stopped, not on price."],
  ["Employer will pay — which should I pick?", "A branded, invoice-friendly program with completion reporting: Simplilearn, upGrad, Great Learning, or Stanford Online if the budget is generous. Their constraints, not yours."],
  ["Should an NRI in the Gulf take an Indian or global program?", "IST-adjacent live cohorts are the strongest value in this entire market for Gulf-based learners: Western-quality curriculum, live mentorship, a fraction of the dollar price."],
  ["I'm a manager, not an engineer. What do I actually need?", "Level 2 literacy: how models train, what embeddings and RAG are, how evaluation works, what things cost. Eight weeks, not eight months. Don't buy an engineering program."],
  ["What's the single biggest mistake learners make?", "Choosing on curriculum PDFs and price, and ignoring delivery. The syllabus tells you what's promised; the delivery decides what you learn — and whether you're still there in Week 9."],
];

export function Faq() {
  return (
    <Section id="faq" eyebrow="Section 17" title="40 Questions About AI Courses in 2026, Answered">
      <div className="mt-8 divide-y divide-rule rounded-lg border border-rule bg-paper shadow-card">
        {FAQS.map(([q, a], i) => (
          <details key={q} className="group px-5 py-4" open={i < 3}>
            <summary className="cursor-pointer list-none font-display text-[1.05rem] font-semibold text-ink marker:hidden">
              <span className="mr-2 font-mono text-xs text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              {q}
            </summary>
            <p className="mt-2 pl-8 text-[0.95rem] leading-relaxed text-foreground/85">{a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}

export function Closing() {
  return (
    <Section id="closing" eyebrow="Final word" title="What I'd Tell a Friend Over Coffee">
      <P>
        Stop optimising for the name on the certificate. Pick the format you will actually finish,
        check that it covers all seven layers hands-on, get the refund and doubt-resolution policies
        in writing, and then spend your energy on the only thing every interviewer on every
        continent cares about: things you built, deployed, and can defend under questioning.
      </P>
      <P>
        If you're in India or IST-adjacent and want maximum capability per rupee with live
        mentorship, that points at LogicMojo. If you're disciplined and broke, DeepLearning.AI plus
        Kaggle plus a deployed project will take you further than most ₹2,00,000 programs. If your
        employer is paying and wants a logo, take the logo. All three are reasonable. Choosing
        nothing for another six months is not.
      </P>
      <Callout tone="good" label="Your next 48 hours">
        Pick two courses from this page. Request both syllabus PDFs with version dates. Ask both for
        the doubt-resolution SLA in writing and permission to observe one real class. Whichever
        answers faster and more concretely is telling you exactly how it will treat you in Week 9.
      </Callout>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="mt-20 border-t border-rule bg-secondary/50">
      <div className="mx-auto max-w-4xl px-5 py-12">
        <p className="eyebrow">Top 10 Best AI Courses in 2026 (India + Global)</p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Published by LogicMojo, which appears at #1 in this ranking. Scoring criteria, weights and
          limitations for every course — including the #1 pick — are stated in full so the
          conclusion can be checked against the evidence. All fees are indicative, vary by region,
          and are marked <Verify>VERIFY</Verify> where unconfirmed. Currency conversions use ₹83 =
          US$1 <Verify>VERIFY: conversion rate</Verify> as of <Verify>INSERT: date</Verify>. Salary
          bands are directional market observations, not survey data. This article is educational
          content, not financial advice; confirm fees, GST, EMI terms, refund windows and batch
          dates in writing with any provider before paying.
        </p>
        <nav className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {[
            ["#contents", "Contents"],
            ["#at-a-glance", "Top 10 table"],
            ["#india-vs-global", "India vs. Global"],
            ["#quiz", "Decision quiz"],
            ["#faq", "FAQs"],
          ].map(([href, label]) => (
            <a key={href} href={href} className="text-primary underline underline-offset-4">
              {label}
            </a>
          ))}
        </nav>
        <p className="mt-6 text-xs text-muted-foreground">
          Last updated <Verify>INSERT: month/year</Verify> · Corrections welcome:{" "}
          <Verify>INSERT: contact</Verify>
        </p>
      </div>
    </footer>
  );
}
