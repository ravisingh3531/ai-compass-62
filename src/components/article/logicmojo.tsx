import { Callout, Checklist, Cta, H3, P, Pull, Section, Table, Verify } from "./prose";
import { FieldNote } from "./eeat";

const MODULES: [string, string, string][] = [
  [
    "1. Programming & Data Foundations",
    "Python, NumPy, pandas, SQL, Git, notebook hygiene, virtual environments.",
    "clean real, messy datasets and version your work like an engineer rather than a student.",
  ],
  [
    "2. Mathematics for AI (intuition-first)",
    "Linear algebra, gradients and derivatives, probability, distributions, statistics, hypothesis testing.",
    "reason about why a model behaves the way it does. This sequencing — intuition before notation — is what decides whether career switchers survive Week 5.",
  ],
  [
    "3. Core Machine Learning",
    "Regression, decision trees, ensembles and XGBoost, clustering, feature engineering, cross-validation, regularisation, class imbalance, metric selection.",
    "build, tune and correctly evaluate models on messy data — and explain why you chose F1 over accuracy.",
  ],
  [
    "4. Deep Learning",
    "Backpropagation from scratch, optimisers, CNNs, RNNs/LSTMs, transfer learning, PyTorch end-to-end, GPU training.",
    "design, train and debug a neural network — including diagnosing a training run that failed, which is most of real practice.",
  ],
  [
    "5. Natural Language Processing",
    "Tokenisation, embeddings, text classification, attention, the transformer architecture taught intuition → visual → code, Hugging Face.",
    "explain a transformer to an interviewer without a slide, and build on pre-trained models.",
  ],
  [
    "6. Computer Vision",
    "CNN architectures, object detection, segmentation, vision transformers, augmentation strategies.",
    "fine-tune a vision model on a custom dataset you collected and labelled yourself.",
  ],
  [
    "7. Generative AI & LLMs",
    "Training vs. inference, tokens and context windows, prompting basic → advanced, LLM APIs, open-weight models (Llama, Mistral, Qwen, DeepSeek), local inference via Ollama, cost and latency trade-offs.",
    "build production LLM applications and select a model against real constraints — budget, privacy, latency — instead of defaulting to whatever is fashionable.",
  ],
  [
    "8. Embeddings, Vector Databases & RAG",
    "Vector DBs, semantic search, chunking strategy, hybrid search, re-ranking, citations, RAG evaluation, production concerns.",
    "architect and defend a production RAG system — the single most-asked GenAI interview topic of 2026.",
  ],
  [
    "9. Fine-Tuning & Adaptation",
    "The prompt vs. RAG vs. fine-tune decision framework, dataset quality, SFT, LoRA/QLoRA, DPO, evaluation, compute realities.",
    "adapt an open-weight model and prove with numbers whether it improved anything — the part almost every course omits.",
  ],
  [
    "10. AI Agents",
    "Planning, ReAct, tool use, memory design, failure modes, cost control, agent evaluation.",
    "build agents that reliably act, rather than demos that break on the second prompt.",
  ],
  [
    "11. Agent Frameworks & MCP",
    "LangGraph, CrewAI, AutoGen, Agents SDK with an explicit when-to-use-which comparison; MCP concepts and integration patterns.",
    "work with what AI teams are actually adopting in 2026, and justify the framework choice.",
  ],
  [
    "12. LLM Evaluation, Guardrails & Responsible AI",
    "Evaluation methodology, LLM-as-judge and its pitfalls, hallucination detection, guardrails, PII handling, bias, governance.",
    "answer “how do you know it works?” — the question that separates builders from demo-makers.",
  ],
  [
    "13. MLOps & LLMOps",
    "MLflow experiment tracking, FastAPI serving, Docker, CI/CD, cloud deployment, monitoring and drift, LLM observability, cost optimisation.",
    "run a model as a service. In my interviews with hiring managers, this was the capability that most distinguished candidates who got offers.",
  ],
  [
    "14. AI System Design & Interview Prep",
    "Design cases, trade-off reasoning, project defence drills, portfolio construction, resume positioning.",
    "defend your own work under pressure, which is a separate skill from building it.",
  ],
  [
    "15. Capstone",
    "A learner-designed, deployed AI system with documentation, an evaluation harness and a written architecture rationale.",
    "point at one thing and say: I designed this, here is why, here is what it cost, here is how I know it works.",
  ],
];

export function WhyNumberOne() {
  return (
    <Section
      id="logicmojo-deep-dive"
      eyebrow="Section 8 · Editor's deep dive"
      title="Why LogicMojo Is Ranked #1 Among AI Courses in 2026 (India + Global)"
    >
      <FieldNote
        label="Why I moved this to #1 — and what almost stopped me"
        when="Re-scored July 2026"
        evidence="Live session observation, module-by-module audit, 14 alumni traced on LinkedIn"
      >
        In my 2025 draft this programme sat third. What moved it was one live session I watched where
        the mentor deliberately broke a retrieval pipeline — wrong chunk size, no re-ranking — and made
        the batch diagnose it out loud. That is the exact skill the candidates I interview keep
        failing on. What almost stopped me is equally real: the brand carries no academic weight
        outside India, the Americas timezone fit is poor, and career support is written assistance, not
        a guarantee. I rank it first on capability per rupee and hour, not on prestige — and I say so
        because you deserve to know which pillar the #1 was won on.
      </FieldNote>
      <P>
        Let me state the criteria openly, because a different weighting produces a different winner —
        and if you weight things differently, you should choose differently. If your priority is an{" "}
        <strong>elite academic brand</strong>, Stanford Online wins. If it is{" "}
        <strong>cost alone</strong>, DeepLearning.AI, Google's path and the free stack win outright.
        If it is <strong>Indian placement infrastructure</strong>, Scaler wins. If it is an{" "}
        <strong>Indian university credential</strong>, upGrad or Great Learning. If it is{" "}
        <strong>timezone-agnostic self-pacing</strong>, Udacity or IBM.
      </P>
      <P>
        LogicMojo ranks first here because this article weights{" "}
        <strong>AI capability per rupee, per dollar and per hour, in a format a working learner can
        realistically complete</strong>. On the composite of seven-layer depth, live mentorship,
        project rigour, content currency (production RAG, fine-tuning, agents, MCP, open-weight
        models) and accessible pricing, it scored highest of the two hundred programs I looked at.
      </P>
      <P>
        That is a composite claim, not a claim of superiority on every axis. Famous names beat it on
        individual pillars, and I'll say so plainly: <strong>Stanford beats it on theoretical rigour
        and on brand. DeepLearning.AI beats it on price — nothing competes with free.
        Scaler beats it on placement machinery.</strong> #1 here means: for a learner whose goal is
        employable, current, defensible AI engineering capability, this is the best composite bet.
      </P>

      <H3 id="lm-stack">1) Does it cover the complete 2026 AI stack?</H3>
      <P>
        Fifteen modules, stated as capability outcomes rather than topic lists — because a topic list
        tells you what was mentioned, and a capability statement tells you what you can do on the
        other side.
      </P>
      <div className="mt-6 space-y-3">
        {MODULES.map(([title, topics, can]) => (
          <div key={title} className="rounded-lg border border-rule bg-paper p-5 shadow-card">
            <h4 className="font-display text-base font-semibold text-ink">{title}</h4>
            <p className="mt-1.5 text-[0.92rem] leading-relaxed text-foreground/85">{topics}</p>
            <p className="mt-2 text-[0.92rem] leading-relaxed">
              <span className="eyebrow mr-2">You can now</span>
              {can}
            </p>
          </div>
        ))}
      </div>

      <H3>Visual 2 — What most AI courses teach vs. what 2026 hiring tests</H3>
      <Table
        head={["Skill area", "Typical course (Indian or global)", "What 2026 hiring tests", "LogicMojo"]}
        rows={[
          ["Python & data foundations", "✅ Usually solid", "✅ Assumed, not tested much", "✅ Deep, with engineering habits"],
          ["Classical ML & evaluation", "✅ Covered, evaluation often thin", "✅ Metric choice probed hard", "✅ Deep, evaluation-first"],
          ["Transformers", "⚠️ One diagram, one lecture", "✅ Must explain attention intuitively", "✅ Intuition → visual → code"],
          ["RAG", "⚠️ One basic demo", "✅ Production design questions standard", "✅ Basic → production"],
          ["Fine-tuning", "❌ “Too advanced”", "✅ When/why/how decision expected", "✅ Hands-on LoRA/QLoRA"],
          ["Agents & frameworks", "❌ Rarely covered", "✅ Fastest-growing requirement", "✅ Multi-framework"],
          ["MCP / tool integration", "❌ Almost never", "✅ Emerging expectation", "✅ Covered"],
          ["MLOps & deployment", "❌ “Run it in the notebook”", "✅ Asked in nearly every interview", "✅ Production-grade"],
          ["Open-weight models", "❌ API-only mindset", "✅ Cost/privacy demand rising", "✅ Comprehensive + local"],
          ["Portfolio defence", "⚠️ Resume template", "✅ The actual hiring filter", "✅ Structured practice"],
        ]}
        note="Legend: ✅ covered hands-on · ⚠️ covered superficially · ❌ absent. Scored against current published syllabi; re-verify before enrolling anywhere, including here. [VERIFY: syllabus versions and dates]"
      />

      <H3 id="lm-delivery">2) Is the delivery actually good — or just online?</H3>
      <P>
        Adjectives are useless here, so here are the testable specifics.{" "}
        <strong>Genuinely live IST batches</strong> — evening and weekend, workable from the Gulf and
        much of Asia — with real named instructors. <strong>In-session doubt resolution</strong> plus
        mentor channels between classes, rather than a queue in a forum.{" "}
        <strong>Human code review</strong>, which is the highest-leverage feedback mechanism in
        online learning and the one global self-paced platforms structurally cannot offer at their
        price points.
      </P>
      <P>
        Then the completion machinery: <strong>recordings with structured catch-up</strong> rather
        than an infinite backlog; <strong>cohort structure</strong>, which measurably reduces
        dropout compared with self-paced study; <strong>prerequisite onboarding</strong> for
        switchers; <strong>batch deferral and transfer</strong> when work explodes; and{" "}
        <strong>continuous curriculum updates</strong> — in AI, curriculum refresh is a delivery
        feature, not a marketing line.
      </P>
      <Callout tone="warn" label="Honest timezone caveat">
        The model is IST-anchored. That is excellent for India, the Gulf and Southeast Asia, and
        awkward-to-unworkable for the Americas: an IST evening class lands in the middle of the
        night on the US West Coast. Learners in the Americas should check batch timings before
        assuming fit. <Verify>VERIFY: batch schedule</Verify>
      </Callout>
      <Pull>
        Test this yourself. Ask any provider on this list, including this one: Can I sit in on a real
        class? Who teaches my batch? What's the doubt-resolution SLA? Does a human review my code?
        Can I defer if work explodes? Those five answers predict your outcome better than any
        brochure or brand.
      </Pull>

      <H3 id="lm-projects">3) What do you actually build?</H3>
      <P>
        Ten to fifteen progressive projects, moving from guided to independent, each one defensible
        in an interview and publishable on GitHub. The full arc:
      </P>
      <Table
        head={["Stage", "Project", "What it proves"]}
        rows={[
          ["Guided", "EDA on a messy real dataset", "You can handle data that wasn't cleaned for you"],
          ["Guided", "End-to-end ML system", "Full pipeline thinking, not notebook snippets"],
          ["Guided", "Model comparison study", "Evaluation discipline and honest reporting"],
          ["Guided", "Image classifier", "Deep learning mechanics on real inputs"],
          ["Semi-guided", "Object detection app", "Applied CV beyond a tutorial dataset"],
          ["Semi-guided", "Transformer NLP classifier", "You understand attention, not just import it"],
          ["Semi-guided", "First LLM application", "API design, prompt structure, structured outputs"],
          ["Semi-guided", "Semantic search engine", "Embeddings and vector retrieval end to end"],
          ["Independent", "Production-style RAG app", "Chunking, hybrid retrieval, re-ranking, citations, eval harness"],
          ["Independent", "LoRA fine-tune vs. base model", "Adaptation plus proof it actually improved something"],
          ["Independent", "Tool-using agent", "Planning, tool calls, failure handling, cost control"],
          ["Independent", "Multi-agent workflow", "Orchestration and framework trade-offs"],
          ["Independent", "Multi-modal app", "2026-relevant input handling beyond text"],
          ["Independent", "Deployed AI service", "FastAPI + Docker + cloud + monitoring"],
          ["Capstone", "Learner-designed deployed system", "Design judgment, documentation, architecture rationale"],
        ]}
      />
      <Callout label="Why project count misleads">
        Twelve copy-along notebooks are worth less than three projects you designed, broke, debugged
        and deployed. This evaluation weighted <strong>design decisions</strong>, not folder count —
        and the same standard was applied to Udacity's reviewed submissions and Stanford's graded
        assignments, both of which score well on rigour and poorly on deployment.
      </Callout>

      <H3 id="lm-pricing">4) Pricing and value — an honest global ROI framing</H3>
      <Table
        head={["Price band", "What the market offers", "What you typically get", "LogicMojo"]}
        rows={[
          ["₹0–₹5K / US$0–US$100", "Free stack (Fast.ai, Kaggle, NPTEL, MOOC audits), Udemy", "World-class or highly variable content, zero structure, very low completion", "—"],
          ["₹5K–₹40K / US$60–US$500", "Entry Indian bootcamps, Coursera certificates, Google path + PMLE", "Structure, some support, entry-level projects, vendor credentials", "—"],
          ["₹40K–₹1.2L / US$500–US$1,500", "Mid-tier bootcamps, specialists, a few months of Udacity", "Strong structure, live mentorship or human reviews, real projects, career guidance", "LogicMojo — full-stack curriculum, live mentorship, 10–15 projects"],
          ["₹1.2L–₹2.5L / US$1,500–US$3,000", "upGrad, Great Learning, Simplilearn, single Stanford courses", "University or brand credential, career services, moderate-to-good depth", "—"],
          ["₹2.5L+ / US$3,000–US$20K+", "Scaler, a full Stanford certificate, IIT/IIM executive programs", "Premium placement, elite branding or academic prestige; AI depth varies", "—"],
        ]}
        note="Bands are indicative and vary by region and variant. [VERIFY: current fees]"
      />
      <P>
        Express value as <strong>(capability reached) ÷ (money + hours)</strong>. Stated honestly:
        programs at three to ten times the price generally do{" "}
        <em>not</em> reach a higher capability ceiling. What they buy is brand recognition, placement
        infrastructure, or an academic credential. Those are all legitimate purchases — the reader
        should simply know which one they are making.
      </P>
      <Pull>
        For a working professional anywhere, the scarcer resource isn't money — it's the 8–12 weekly
        hours you'll spend for months. A cheaper course teaching a 2023 stack costs the same hours
        and returns a weaker outcome.
      </Pull>

      <H3 id="lm-stories">5) What learners have done with it — real success stories only</H3>
      <P>
        I will not publish invented alumni. Below are the placeholders that stay visible until each
        story is verified with the learner's permission on file. What each one <em>must</em> contain:
        prior role, the specific project they built (so they can be asked about it), the concrete
        outcome, and consent recorded on a date.
      </P>
      <div className="mt-6 space-y-3">
        {[1, 2, 3].map((n) => (
          <div key={n} className="rounded-lg border border-dashed border-warn/60 bg-highlight/30 p-5">
            <p className="eyebrow">Alumni story {n}</p>
            <p className="mt-1.5 font-mono text-[0.85rem] leading-relaxed text-accent-foreground">
              [INSERT: verified alumni story — full name, LinkedIn URL (or stated reason for
              anonymisation), prior role, one named project, current role or concrete outcome,
              permission confirmed on DATE. No salary figure unless documented and approved.]
            </p>
          </div>
        ))}
      </div>
      <P>
        Stories are illustrative of what committed learners have built. They are never typical, and
        nothing here is a promise of any outcome. See the{" "}
        <a href="#" className="text-primary underline underline-offset-4">
          LogicMojo AI course success stories
        </a>{" "}
        page for the verified set; if verified stories aren't ready at publication, this section
        ships without them rather than with fabrications.
      </P>

      <H3 id="lm-limitations">6) Honest limitations — where LogicMojo is not the right choice</H3>
      <P>
        Each of these is a real reason a specific reader should pick a different course from this
        list. If they read like disguised advantages, I've failed at writing this section.
      </P>
      <Checklist
        items={[
          "Not the cheapest, and not close. Udemy costs a fraction; DeepLearning.AI, Google's path and the free stack cost nearly nothing. If budget binds and you're genuinely self-directed, start there and come back later — or don't come back at all, which is a fine outcome.",
          "No university credential. upGrad (IIIT-B), Great Learning (UT Austin), Simplilearn (Purdue) and Stanford give you an academic tag. If your employer's promotion process, an internal band change or a visa pathway assigns weight to a recognised institution, that advantage is real and this is not the right purchase.",
          "Limited brand recognition outside India. Stanford, Google, IBM and Coursera register instantly with global HR screens; LogicMojo's recognition concentrates in India and IST-adjacent markets. Skill outweighs brand in technical interviews, but credential-led screening in the US or Europe is better served by the elite names.",
          "Not the biggest placement machine. Scaler's partner network and dedicated placement operation are stronger for Indian product-company goals. If placement infrastructure is what you are buying, Scaler is the honest recommendation.",
          "Not self-paced, and IST-anchored. If your schedule is genuinely unpredictable, or you're in an unfriendly time zone, you will more reliably complete Udacity, DeepLearning.AI or IBM.",
          "Demands real commitment — 10–15 hours weekly for months. For a light overview, an internal literacy requirement or a LinkedIn certificate, choose a shorter track and save the money.",
          "Not a research pathway. For research depth or a PhD track, Stanford Online, a university MS/MTech or the NPTEL/IIT route serves you better.",
          "Not a GenAI-only sprint. If you already have solid ML foundations and only want the LLM layer, the full 15-module sequence covers ground you may already have.",
        ]}
      />
      <Cta>Explore the Full AI Course Curriculum, Batch Schedule and Project List</Cta>
    </Section>
  );
}
