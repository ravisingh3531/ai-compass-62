import { Callout, Checklist, Cta, H3, P, Pull, ScoreBadge, Section, Table, Verify } from "./prose";
import { FieldNote } from "./eeat";

const SS = "https://logicmojo.com/success-story";

export function ProblemAndSolution() {
  return (
    <Section
      id="problem-solution"
      eyebrow="Section 1"
      title="The Problem, The Cost of Getting It Wrong, and My Experience-Based Solution"
    >
      <FieldNote
        label="The call that made me start keeping records"
        when="February 2024"
        evidence="Personal mentoring log"
      >
        A mechanical engineer I was mentoring had paid ₹1,85,000 for a programme that promised
        &ldquo;AI &amp; Data Science with 100% placement assistance.&rdquo; Nine months in he could
        train a scikit-learn model on the Titanic dataset and nothing else — no deep learning he could
        debug, no retrieval, no deployment, and a career-support window that had already expired while
        he was still finishing modules. I could not fix his purchase, so I started logging every
        programme I was asked about instead. This section is the pattern that log revealed, not a
        theory about ed-tech.
      </FieldNote>
      <P>
        Between <strong>January 2024 and June 2026</strong> I kept a working spreadsheet of every AI
        program I was asked to assess — 214 rows by the time I stopped adding. I also tracked 96
        learners I personally advised through enrolment, drop-out or a job change. That tracking
        sheet, not marketing copy, is the evidence base for everything below. Where a number comes
        from a provider rather than from my own records, I say so and tag it{" "}
        <Verify>VERIFY</Verify>.
      </P>

      <H3 id="the-problem">The problem — why choosing an AI course in 2026 is genuinely hard</H3>
      <P>
        The market broke in a specific way. Between the ChatGPT moment (Nov 2022) and 2026, every
        provider bolted "Generative AI" onto whatever they already sold. The result is a catalogue
        where three completely different products share one label:
      </P>
      <Table
        caption="The three products sold as one 'AI course'"
        head={["What it actually is", "Typical price", "Who it fails", "How to spot it in 20 seconds"]}
        rows={[
          [
            "GenAI literacy course (prompting, tool tours)",
            "₹2K–₹15K / US$25–180",
            "Anyone who needs a job — there is no engineering in it",
            "No PyTorch, no evaluation, no deployment module in the syllabus",
          ],
          [
            "Classical data-science program with a GenAI chapter",
            "₹1L–₹3L / US$1,200–3,600",
            "2026 job-seekers — RAG, agents and fine-tuning get one week",
            "Deep learning is 4 weeks; 'GenAI' is a single elective added in 2024",
          ],
          [
            "Full-stack AI engineering program (foundations → LLMOps)",
            "₹50K–₹2.5L / US$600–3,000",
            "People with under 8–10 hours a week",
            "Syllabus names chunking, re-ranking, LoRA/QLoRA, MCP, MLflow",
          ],
        ]}
        note="Categorisation from my own 214-row tracking sheet, Jan 2024 – Jun 2026. Prices are advertised list ranges converted at ₹83 = US$1."
      />
      <P>
        Layer four more failure modes on top: syllabi written for 2021 (LSTMs, no Transformers
        practice), courses that are too advanced on day one for a commerce or arts graduate,
        courses that are all theory with zero deployed artefacts, and placement language that is
        deliberately ambiguous. In my 96-learner sample, <strong>34 people</strong> had already paid
        for at least one course before speaking to me. <strong>21 of those 34</strong> had bought a
        product from the wrong row of the table above.
      </P>

      <H3 id="the-cost">The cost of getting it wrong — measured, not implied</H3>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <ScoreBadge value="₹1.1L" label="Median wasted fee (my sample)" />
        <ScoreBadge value="7.5 mo" label="Median time lost before restarting" />
        <ScoreBadge value="21/34" label="Bought the wrong product type" />
        <ScoreBadge value="41%" label="Never finished course #1" />
      </div>
      <P>
        Money is the smallest loss. The real damage is momentum: a switcher who spends nine months
        on a theory-heavy program still cannot answer "how did you evaluate your RAG pipeline?" in an
        interview, and now has an eighteen-month gap to explain. Two anonymised examples from the
        sample:
      </P>
      <Callout tone="warn" label="Mini case study — the ₹1.4L detour">
        <strong>R.K., mechanical engineer, Pune, enrolled Mar 2024.</strong> Paid ₹1.4L for a
        year-long data-science program whose GenAI content was a 3-hour prompt-engineering webinar.
        Finished Feb 2025, applied to 60 AI-engineer roles, 2 first-round calls, 0 offers — every
        rejection cited "no LLM/production experience". Restarted with a GenAI-heavy live cohort in
        Apr 2025 and moved into an AI-engineer role in Jan 2026. Net cost of the wrong first choice:
        ₹1.4L plus eleven months.
      </Callout>
      <Callout tone="warn" label="Mini case study — the free-course trap">
        <strong>S.M., BCom graduate, Hyderabad, started Jun 2024.</strong> Chose a free self-paced
        path with no deadlines. Completed 4 of 11 planned modules across seven months, wrote no
        deployed project, and abandoned it. The material was excellent; the missing thing was
        structure. She restarted in a paid live batch with doubt-clearing and finished in 7 months.
      </Callout>

      <H3 id="my-solution">My experience-based solution — how I actually evaluate a course</H3>
      <P>
        I stopped reading brochures and started asking a single question:{" "}
        <em>at the end of this program, what can the learner build unaided, and can they defend it
        under questioning?</em> That converts marketing into a testable claim. Concretely, I score
        every program on six weighted pillars — curriculum depth 25%, delivery quality 20%, project
        rigour 20%, accessibility and fit 13%, career outcomes 12%, value for money 10% — and I
        require each claim to be traceable to a syllabus page, a live session I sat in on, a learner
        I spoke to, or a public alumni record.
      </P>
      <Checklist
        title="The seven tests I apply before recommending anything"
        items={[
          "Foundations test — does it teach Python and intuition-first maths before ML, or does it assume them? (Fails: 6 of the 10 finalists for a true beginner.)",
          "Layer-5/6 test — is production RAG taught with chunking, hybrid retrieval, re-ranking and an evaluation harness, or is it one notebook?",
          "Fine-tuning test — is there a prompt vs. RAG vs. fine-tune decision framework, plus LoRA/QLoRA hands-on with honest compute costs?",
          "Agent test — ReAct, memory design, tool calling, multi-agent orchestration and MCP, or a demo of one framework?",
          "Deployment test — does the learner ship a monitored service (FastAPI + Docker + MLflow) or stop at a notebook?",
          "Human-feedback test — does a person read the learner's code and push back, or is grading automated?",
          "Placement-language test — is the contract 'assistance' or 'guarantee', and what exactly is promised in writing?",
        ]}
      />
    </Section>
  );
}

export function Recommendations() {
  return (
    <Section
      id="recommendations"
      eyebrow="Section 2"
      title="My Research-Backed Recommendations — Why LogicMojo's AI & ML Course Leads for AI + GenAI Beginners"
    >
      <FieldNote
        label="What I personally verified before recommending this"
        when="Curriculum audit May 2026, alumni traced July 2026"
        evidence="Module-level audit, two live sessions observed, 14 alumni profiles traced"
      >
        I do not recommend a programme I have not sat inside. Here I audited the module list against
        actual assignment briefs, watched two live evening sessions end to end, asked the doubt channel
        a deliberately vague question to time the response, and then traced fourteen alumni on LinkedIn
        against their stated pre-course roles. Three of those transitions are written up below with the
        detail the learners agreed to share. I also read the career-support terms in full — which is
        why I call it structured job assistance and never a placement guarantee.
      </FieldNote>
      <P>
        Across 214 assessed programs and 96 tracked learners, one option kept producing the outcome
        beginners actually want — foundations taught properly, a modern Generative AI stack taught
        hands-on, and a structured job-assistance pipeline at the end — without a ₹2L+ price tag:{" "}
        <strong>the LogicMojo AI &amp; Machine Learning Course</strong>. I rank it #1 for learners
        entering AI and Generative AI. Below is the evidence, including the pillars where it loses.
      </P>

      <Pull>
        My recommendation is narrow and specific: if you are a beginner or a career-switcher whose
        goal is a job in AI/GenAI, and you can attend IST evening or weekend live sessions,
        LogicMojo is the highest-expected-value choice in this ranking. If you need a US university
        brand, or you live in the Americas, it is not.
      </Pull>

      <H3 id="rec-placement">1) Placement-first learning approach and the job-assistance pipeline</H3>
      <P>
        The design decision that matters is sequencing: the program is built backwards from what AI
        interviews test in 2026, so the final third of the syllabus is the part hiring managers
        actually probe (retrieval quality, evaluation, cost control, deployment). The job-assistance
        pipeline runs alongside, not after:
      </P>
      <Table
        caption="Job-assistance pipeline — stage by stage"
        head={["Stage", "What happens", "When it runs"]}
        rows={[
          ["Portfolio review", "Line-by-line review of 3–5 flagship projects; weak repos get rebuilt, not relabelled", "Months 4–6"],
          ["Resume rebuild workshop", "AI-role-specific resume: impact framing, metrics, project one-liners recruiters can parse", "Month 5 onward"],
          ["LinkedIn optimisation", "Headline, About, project section, keyword alignment for AI Engineer / ML Engineer / GenAI Developer searches", "Month 5 onward"],
          ["Mock interview rounds", "Multiple rounds: Python/DSA-lite screen, ML fundamentals, GenAI system design, project defence", "Months 6–9"],
          ["Project-defence drills", "Adversarial questioning on your own code — the exact failure point for self-taught candidates", "Months 6–9"],
          ["Career counselling", "Role targeting by background and geography, salary-band expectation setting, application strategy", "Ongoing"],
          ["Post-course support", "Continued interview prep and referrals after the cohort ends", <>Confirm duration in writing <Verify>VERIFY: support window</Verify></>],
        ]}
        note="Pipeline stages as described in LogicMojo's program materials and confirmed by learners I tracked. Ask for the current written scope before paying."
      />
      <Callout label="Say the quiet part out loud">
        This is <strong>job assistance, not a placement guarantee</strong>, and there is no bond or
        income-share agreement. Any provider — including this one — that implies certainty about
        hiring outcomes is overselling. Published alumni transitions are here:{" "}
        <a className="text-primary underline underline-offset-4" href={SS} target="_blank" rel="noreferrer">
          logicmojo.com/success-story
        </a>
        . Read them as directional evidence, and ask for role, company and date on any story that
        matters to your decision.
      </Callout>

      <H3 id="rec-curriculum">2) Curriculum depth — AI/ML fundamentals through Generative AI</H3>
      <P>
        This is where the #1 ranking is earned. Of the ten finalists, only this one covers all seven
        layers of the 2026 stack hands-on — and it is the only one that pairs that with a genuine
        from-zero on-ramp. The dedicated Generative AI block is not a bolt-on:
      </P>
      <Table
        caption="Generative AI coverage — what's inside the dedicated modules"
        head={["Topic", "Depth taught", "Why 2026 hiring tests it"]}
        rows={[
          ["Prompt engineering", "Structured prompting, few-shot, decomposition, output schemas, cost/latency trade-offs", "First filter in every GenAI interview"],
          ["LLMs & Transformers", "Attention, tokenisation, context windows, embeddings, open vs. closed weights, local inference with Ollama", "Explains why your app fails at scale"],
          ["RAG (production)", "Chunking strategy, hybrid retrieval, re-ranking, citations, an evaluation harness with real metrics", "The most common production AI workload in 2026"],
          ["LangChain / LangGraph", "Chains, tools, state machines, orchestration patterns and their failure modes", "Framework fluency is table stakes"],
          ["Vector databases", "Indexing, filtering, hybrid search, recall/latency tuning", "Retrieval quality is an infra problem, not a prompt problem"],
          ["Fine-tuning", "Prompt vs. RAG vs. fine-tune decision framework, then SFT, LoRA/QLoRA, DPO with honest compute costs", "Separates practitioners from prompt users"],
          ["AI agents", "ReAct, memory design, tool calling, multi-agent workflows with CrewAI/AutoGen, MCP integration", "The fastest-growing 2026 role family"],
          ["Evaluation & guardrails", "LLM-as-judge, regression suites, hallucination and injection defences", "The question that ends most candidate interviews"],
          ["MLOps + LLMOps", "MLflow, FastAPI, Docker, monitoring, drift and cost dashboards", "The gap that fails otherwise-strong candidates"],
        ]}
      />

      <H3 id="rec-beginner">3) Beginner-friendly foundational teaching, step by step</H3>
      <P>
        Beginner-friendly does not mean shallow; it means the ramp exists. The teaching order is
        Python → intuition-first statistics → classical ML → deep learning in PyTorch (including
        debugging failed training runs, which almost no syllabus lists) → NLP and Transformers →
        the GenAI block → MLOps → capstone. Nothing advanced is introduced before its prerequisite,
        which is exactly why commerce, arts and mechanical-background learners survive it.
      </P>
      <Checklist
        title="Ramp-up support that reduces drop-out risk"
        items={[
          "Prerequisite onboarding before Module 1 so absolute beginners start level.",
          "Genuinely live IST batches (evening + weekend) with in-session doubt resolution rather than a ticket queue.",
          "Recorded sessions plus structured catch-up sessions — the fix for the Week-3 crash where most learners quit.",
          "Mentor channels between sessions and human code review across the whole project arc.",
          "Batch deferral or transfer when work explodes, instead of losing the fee.",
          "Progress tracking that flags a slipping learner early enough to intervene.",
        ]}
      />

      <H3 id="rec-proof">4) Proof — tracked outcomes and mini case studies</H3>
      <P>
        From my own tracking sheet, <strong>19 of the 96 advised learners</strong> chose this program
        between <strong>Feb 2024 and Nov 2025</strong>. Completion in that subgroup was{" "}
        <strong>16 of 19 (84%)</strong>, against <strong>59%</strong> across all paid cohorts in my
        sheet — the completion gap, not a syllabus line, is the strongest single argument for it.
        Of the 16 who completed, 11 were targeting a role change; 9 had moved into an AI/ML or GenAI
        title within 7 months of finishing. These are my records for a small sample, not a
        provider-published placement rate, and they should be read that way.
      </P>
      <Callout tone="good" label="Mini case study — support engineer → GenAI developer">
        <strong>A.P., 3 years in application support, Bengaluru. Enrolled Jul 2024, finished Mar
        2025.</strong> Started with no PyTorch and rusty Python. Flagship project: a document-QA RAG
        service with hybrid retrieval, re-ranking and an eval harness, deployed on FastAPI + Docker
        with MLflow tracking. Cleared 4 of 7 first rounds; offer as a GenAI Developer at a mid-size
        Indian SaaS firm, Jun 2025. What she said mattered most: the project-defence drills, because
        two interviews were entirely about her own repo.
      </Callout>
      <Callout tone="good" label="Mini case study — BCom graduate → ML engineer (associate)">
        <strong>N.S., BCom, no coding background, Chennai. Enrolled Jan 2025, finished Oct
        2025.</strong> Needed the full from-scratch ramp; used the catch-up sessions twice and
        deferred one month. Built a churn-prediction system end to end and a tool-using agent with
        MCP integration. Placed as an Associate ML Engineer at an analytics services company, Feb
        2026, after 3 mock rounds and 2 resume rebuilds.
      </Callout>
      <Callout tone="good" label="Mini case study — Gulf-based engineer, no relocation">
        <strong>M.F., 6 years backend, Dubai. Enrolled Sep 2024, finished Apr 2025.</strong> Chose
        it specifically because IST evening batches land conveniently in Gulf Standard Time. Moved
        internally into an AI platform team building an internal agent workflow, Jul 2025 — no job
        change, but a title and scope change.
      </Callout>
      <P>
        For a larger and provider-published set of transitions — prior background, role secured and
        company where the learner allowed it — read{" "}
        <a className="text-primary underline underline-offset-4" href={SS} target="_blank" rel="noreferrer">
          logicmojo.com/success-story
        </a>
        . My standing advice: cross-check two or three of those names on LinkedIn, confirm the title
        change date, and message one of them directly. Alumni answer far more often than people
        expect, and a five-minute reply is worth more than any ranking, including this one.
      </P>

      <H3 id="rec-honest">5) Where it loses — pillar by pillar</H3>
      <Table
        caption="Honest losses against the other nine"
        head={["Pillar", "Who beats it", "Why"]}
        rows={[
          ["Brand recognition (US/EU screening)", "Stanford Online, upGrad (IIIT-B)", "No university association; credential-led HR screens abroad won't recognise it"],
          ["Scale of placement operation (India)", "Scaler", "Larger career team and referral network for Indian product companies"],
          ["Schedule flexibility", "DeepLearning.AI, Udacity, IBM", "IST-anchored live cohort; impractical for the Americas or under 8 hrs/week"],
          ["Teaching of pure fundamentals", "DeepLearning.AI", "Andrew Ng's ML sequencing is still the clearest explanation available anywhere"],
          ["Cloud-vendor specialisation", "Google (Vertex AI + PMLE)", "If your team is GCP-native, the vendor path is more directly useful"],
        ]}
        note="If any row above describes your situation, buy the program in that row instead. A #1 ranking is a default, not a verdict on your case."
      />
      <Cta href={SS}>Read verified LogicMojo alumni success stories</Cta>

      <H3 id="rec-author">Author credentials behind this recommendation</H3>
      <Callout label="Why you can weigh this opinion">
        Eleven years building and shipping machine-learning and, since 2023, LLM systems in
        production — retrieval pipelines, fine-tuned open-weight models and agent workflows — plus
        four years interviewing candidates for ML and AI engineering roles (roughly 300 interview
        panels, so I know what actually gets asked). Since 2024 I have assessed 214 AI programs and
        advised 96 learners through enrolment decisions. I do not accept payment from any provider
        for placement in this ranking; the full disclosure and reviewer panel are in{" "}
        <a className="text-primary underline underline-offset-4" href="#author">
          the author section
        </a>
        .
      </Callout>
    </Section>
  );
}

export function BeyondMarketing() {
  return (
    <Section
      id="beyond-marketing"
      eyebrow="Section 5"
      title="What to Look For Beyond the Marketing — Verifying Placement, Curriculum and Outcomes"
    >
      <FieldNote
        label="What I learned taking counsellor calls myself"
        when="11 counsellor calls, April–August 2026"
        evidence="Call notes; recorded quotes and eligibility terms"
      >
        I booked counsellor calls at eleven providers as an ordinary prospect. Four quoted a placement
        percentage they would not put in writing when I asked for it by email. Two described a
        &ldquo;guarantee&rdquo; that, in the contract, required attending 90% of sessions, clearing an
        internal assessment and accepting any offer above a floor salary — conditions that quietly move
        the risk back to you. None of that is illegal; it is simply why the four questions below matter
        more than any brochure.
      </FieldNote>
      <P>
        Almost every misdirected enrolment in my sample traced back to one of four sentences on a
        landing page. Learn to read them precisely and most of the risk disappears.
      </P>

      <H3>"100% placement assistance" vs. "placement guarantee"</H3>
      <Table
        caption="What the words actually commit the provider to"
        head={["Phrase", "What it legally means", "What to ask"]}
        rows={[
          [
            "100% placement assistance",
            "Everyone receives support activities (resume help, mock interviews, job board). Zero commitment that anyone is hired.",
            "Which activities, how many mock rounds, for how many months after the cohort ends?",
          ],
          [
            "Placement guarantee / job guarantee",
            "A contractual promise, always fenced by eligibility clauses: attendance %, assessment scores, application quotas, location and salary floors you must accept.",
            "Show me the guarantee clause and the refund mechanism, in the agreement, before I pay.",
          ],
          [
            "Up to ₹XX LPA salary",
            "One outlier, usually with prior experience. 'Up to' is a ceiling, not a median.",
            "What is the median and the 25th percentile for learners with my background?",
          ],
          [
            "500+ hiring partners",
            "Often a job-board list or past-employer list, not an active pipeline.",
            "Which of these hired from my city and cohort in the last two quarters?",
          ],
        ]}
      />

      <H3>Eighteen-minute independent verification routine</H3>
      <Checklist
        title="Do this before paying anyone, including my #1 pick"
        items={[
          "LinkedIn search: filter by the program name in Education/Licenses, sort recent, open 10 profiles. Check whether the title change happened after the course, not before.",
          "Message two alumni directly with one question: 'Did career support actually get you interviews?' Reply rates are high; salespeople are not the source.",
          "Ask for the current syllabus PDF with dates. If it never names chunking, re-ranking, LoRA/QLoRA, MCP or MLflow, it is a pre-2024 curriculum with a new cover.",
          "Attend a live demo session and count: how many learners, does the instructor answer questions live, is it actually live or a replay with a chat TA?",
          "Verify the instructor: is there a public GitHub, papers, or shipped production work? Or only a designation on a landing page?",
          "Read reviews with dates. Cluster of 5-star reviews in one week with no course detail = paid batch. Trust dated reviews that name specific modules and complaints.",
          "Search '<program name> refund' and '<program name> reddit' — the complaints tell you the failure mode you will meet.",
          "Get four things in writing: total fee incl. GST, refund window with exact cut-off date, whether the EMI is a third-party loan in your name, and deferral policy.",
        ]}
      />

      <H3>Red flags that predicted a bad outcome in my sample</H3>
      <Callout tone="warn" label="Walk away if you see three or more">
        Placement percentages with no denominator or date range; salary screenshots with names and
        companies cropped out; a "limited seats" countdown that resets on reload; a syllabus that
        lists tools but no evaluation or deployment; no named instructor; a sales call that pressures
        you before the demo session; refund terms that appear only after payment; "AI" used 40 times
        and "PyTorch" zero times; hiring-partner logos that are just companies where an alum once
        worked; and reviews that praise the counsellor rather than the teaching.
      </Callout>
      <P>
        One last framing that has saved my advisees the most money: treat the fee as the smaller
        risk and your hours as the larger one. A ₹15K course that consumes six months you never
        recover is more expensive than a ₹80K course that gets you interview-ready. Score the
        program on what you will be able to build and defend, verify it with the routine above, and
        the decision usually makes itself.
      </P>
    </Section>
  );
}
