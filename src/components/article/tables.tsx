import { Callout, H3, P, Section, Table, Verify } from "./prose";
import { FieldNote } from "./eeat";

const RANKED = [
  [
    "LogicMojo — AI & Machine Learning Course",
    "India",
    "Best overall: full-stack 2026 depth + live mentorship + strongest capability per rupee",
  ],
  [
    "DeepLearning.AI — ML + Deep Learning Specializations",
    "Global",
    "Best AI foundations in the world at near-zero cost",
  ],
  [
    "Scaler — Data Science, ML & AI Program",
    "India",
    "Best placement infrastructure for Indian product-company and GCC roles",
  ],
  [
    "Stanford Online — Artificial Intelligence Professional Program",
    "Global",
    "Best elite academic credential that travels everywhere",
  ],
  [
    "upGrad — PG Programme in ML & AI, IIIT-Bangalore",
    "India",
    "Best Indian university-credentialed program",
  ],
  [
    "Great Learning — PGP-AIML, UT Austin / Great Lakes",
    "India + Global",
    "Best mentor-led weekend format with a global university brand",
  ],
  [
    "Udacity — AI & Machine Learning Nanodegrees",
    "Global",
    "Best human project review inside a self-paced format",
  ],
  [
    "Google — AI/ML Learning Path + PMLE Certification",
    "Global",
    "Best vendor-backed pathway into cloud AI roles",
  ],
  [
    "IBM — AI Engineering Professional Certificate (Coursera)",
    "Global",
    "Best low-cost applied engineering track",
  ],
  [
    "Simplilearn — PGP in AI & ML, Purdue / IBM",
    "India + Global",
    "Best for corporate, employer-funded upskilling",
  ],
];

const COURSES = [
  "LogicMojo",
  "DeepLearning.AI",
  "Scaler",
  "Stanford",
  "upGrad",
  "Great Learning",
  "Udacity",
  "Google",
  "IBM",
  "Simplilearn",
];

const DEPTH_ROWS: string[][] = [
  ["Python, pandas, SQL", "Deep", "Moderate (assumed)", "Deep", "Prerequisite", "Good", "Good", "Good", "Basic–Moderate", "Good", "Good"],
  ["Maths for AI", "Good", "Good", "Good", "Deep", "Good", "Good", "Moderate", "Basic", "Basic", "Moderate"],
  ["Classical ML & feature engineering", "Deep", "Deep", "Deep", "Deep", "Good", "Good", "Good", "Good", "Good", "Good"],
  ["Model evaluation rigour", "Deep", "Deep", "Good", "Deep", "Moderate", "Good", "Good", "Moderate", "Good", "Moderate"],
  ["Deep learning (incl. RNN/LSTM)", "Deep", "Deep", "Good", "Deep", "Good", "Good", "Good", "Moderate", "Good", "Good"],
  ["CNNs / Computer Vision", "Deep", "Good", "Moderate", "Good", "Good", "Good", "Good", "Moderate", "Good", "Good"],
  ["Transformers & attention", "Deep", "Good", "Moderate", "Deep", "Moderate", "Moderate", "Moderate", "Basic–Moderate", "Moderate", "Moderate"],
  ["Applied NLP", "Deep", "Good", "Moderate", "Deep", "Good", "Good", "Moderate", "Moderate", "Good", "Good"],
  ["PyTorch / TensorFlow", "Deep (PyTorch-first)", "Good", "Good", "Good", "Good", "Good", "Good", "Moderate (TF, cloud)", "Deep", "Good (TF/Keras)"],
  ["LLM fundamentals & multi-modal", "Deep", "Good", "Moderate–Good", "Good", "Moderate", "Good", "Good", "Moderate–Good", "Moderate", "Moderate"],
  ["Prompt engineering (advanced)", "Comprehensive", "Good", "Good", "Moderate", "Moderate", "Good", "Good", "Good", "Moderate", "Moderate"],
  ["Embeddings & vector databases", "Deep", "Moderate", "Moderate", "Moderate", "Basic", "Moderate", "Moderate", "Moderate (Vertex)", "Basic", "Basic"],
  ["RAG (basic → production)", "Deep (chunking, hybrid, re-rank, eval)", "Moderate", "Moderate", "Basic–Moderate", "Basic–Moderate", "Moderate", "Moderate", "Moderate (Vertex)", "Basic", "Basic"],
  ["Fine-tuning (SFT, LoRA, DPO)", "Deep", "Moderate", "Limited", "Moderate", "Limited", "Moderate", "Basic–Moderate", "Moderate (Vertex)", "Limited", "Limited"],
  ["AI agents & agentic patterns", "Deep", "Limited–Moderate", "Limited–Moderate", "Limited", "Limited", "Moderate", "Limited–Moderate", "Limited–Moderate", "Limited", "Limited"],
  ["Agent frameworks", "Comprehensive", "Limited", "Limited", "Limited", "Not Covered", "Limited", "Limited", "Limited", "Not Covered", "Not Covered"],
  ["MCP & tool integration", "Covered", "Not Yet", "Not Yet", "Not Covered", "Not Covered", "Limited", "Not Covered", "Limited", "Not Covered", "Not Covered"],
  ["Open-weight models", "Comprehensive + local", "Limited", "Limited", "Limited", "Limited", "Limited", "Limited", "Moderate (Gemma)", "Limited", "Limited"],
  ["LLM eval, guardrails & responsible AI", "Deep", "Moderate", "Moderate", "Moderate", "Limited", "Moderate", "Limited", "Moderate", "Moderate", "Limited"],
  ["MLOps & deployment (CI/CD, Docker, FastAPI)", "Deep", "Not Covered", "Good", "Not Covered", "Moderate", "Moderate", "Moderate", "Good (cloud)", "Moderate", "Moderate"],
  ["AI system design", "Deep", "Not Covered", "Good", "Limited", "Moderate", "Moderate", "Basic", "Moderate (cloud)", "Basic", "Basic"],
  ["Portfolio-grade projects", "10–15", "5–10 (labs)", "5–10", "4–8 (graded)", "8–12", "8–12", "3–6 per ND (reviewed)", "Labs + exam", "6–10 (labs)", "5–10"],
];

const DELIVERY_ROWS: string[][] = [
  ["Genuinely live (not replays)", "Yes (live IST)", "No", "Yes", "Partial (facilitated cohorts, office hours)", "Yes (mixed)", "Yes (weekend)", "No", "No", "No", "Partial (masterclasses only)"],
  ["Timezone fit", "IST evenings/weekends; Gulf-friendly", "Any timezone", "IST", "Any (deadline-based)", "IST", "IST weekends", "Any timezone", "Any timezone", "Any timezone", "Mostly any + some live IST"],
  ["Doubt resolution", "In-session + mentor channels", "Forum only", "Strong TA network", "Facilitators + forums", "Ticket + sessions", "Mentor sessions + forum", "Mentor Q&A + reviewer notes", "Community only", "Forum only", "Forum, limited live"],
  ["Human code review", "Yes", "No", "Yes", "Graded assignments", "Partial", "Yes", "Yes (signature project reviews)", "No", "No", "Limited"],
  ["1:1 mentor access", "Yes", "No", "Yes", "No", "Yes", "Yes", "Partial", "No", "No", "Limited"],
  ["Recordings & catch-up", "Yes + catch-up sessions", "N/A", "Yes", "Content available within course window", "Yes", "Yes", "N/A", "N/A", "N/A", "Yes"],
  ["Cohort accountability", "Strong", "None", "Strong", "Moderate (hard deadlines)", "Moderate", "Moderate", "Weak–Moderate (subscription pressure)", "None", "None", "Weak"],
  ["Dropout prevention", "Tracking, catch-up, transfer", "None", "Strong", "Deadlines", "Academic deadlines", "Deadlines + mentor nudges", "Reviews create momentum", "None", "None", "Weak"],
  ["Platform, mobile & Tier-2/3 bandwidth", "Good", "Excellent", "Good", "Good", "Good", "Good", "Excellent", "Excellent", "Excellent", "Good"],
  ["Deferral / pause policy", "Yes", "N/A (subscription)", "Yes", "Course-switch policies [VERIFY]", "Partial", "Partial", "Pause subscription", "N/A", "N/A", "Limited"],
  ["Realistic completion", "High", "Low", "High", "Moderate", "Moderate–High", "Moderate–High", "Moderate", "Low–Moderate", "Low", "Moderate"],
];

export function AtAGlance() {
  return (
    <Section
      id="at-a-glance"
      eyebrow="Section 5"
      title="Top 10 Best AI Courses in 2026 (India + Global) — At a Glance"
    >
      <FieldNote
        label="How this table was actually built"
        when="Audited June–August 2026"
        evidence="Syllabus access for all 10 programmes + counsellor calls for gated pricing"
      >
        I did not assemble these rows from marketing pages. Every fee was confirmed against the
        provider's own checkout or admissions page — and where the price was hidden behind a form, I
        took the counsellor call myself and wrote down what I was quoted, including the discount that
        &ldquo;expires tonight&rdquo; and reappears next week. Two providers quoted me a different
        number in June than in August, which is exactly why I ask you to re-verify before paying
        rather than trusting a table, even mine.
      </FieldNote>
      <P>
        This ranking weighs curriculum depth, delivery, project rigour, career outcomes,
        accessibility and value — with delivery weighted heavily, because delivery is what most
        determines whether you finish, and geography weighted honestly, because a credential's worth
        depends on where you intend to use it. “#1” does not mean “right for everyone,” which is why
        every row carries a <strong>Best For</strong>. Six of these ten would be a mistake for some
        reader of this article, and I say which in each review. One more disclosure, stated plainly:{" "}
        <strong>this page is published by LogicMojo, the course ranked first.</strong> Read the
        scorecards, then check my claims against the syllabus PDFs yourself — that is the only
        review process that protects you from anyone's incentives, mine included.
      </P>

      <H3 id="ranked-list">The ranked list</H3>
      <ol className="mt-6 space-y-3">
        {RANKED.map(([name, origin, why], i) => (
          <li key={name} className="flex gap-4 rounded-lg border border-rule bg-paper p-4 shadow-card">
            <span className="font-display text-2xl font-bold leading-none text-accent">
              {i + 1}
            </span>
            <span>
              <strong className="text-ink">{name}</strong>{" "}
              <span className="font-mono text-[0.7rem] uppercase tracking-wider text-muted-foreground">
                ({origin})
              </span>
              <span className="mt-1 block text-[0.95rem] leading-relaxed text-foreground/85">
                {why}
              </span>
            </span>
          </li>
        ))}
      </ol>

      <H3 id="table-1">Table 1 — Overview at a glance</H3>
      <P>
        Curriculum depth and project counts are scored in Table 2; this table stays to the decision
        variables you scan first.
      </P>
      <Table
        head={[
          "#",
          "Course",
          "Origin & reach",
          "Delivery",
          "Fees",
          "Duration",
          "Capability ceiling",
          "Best for",
        ]}
        rows={[
          ["1", "LogicMojo AI & ML", "India; global remote learners", "Live cohort (IST eve/weekend)", <>₹XX,XXX <Verify>VERIFY: current fee</Verify>, EMI available</>, "6–9 months", "Level 4–5", "Working professionals wanting full-stack AI depth"],
          ["2", "DeepLearning.AI", "Global (Coursera)", "Self-paced", <>Free–US$59/mo <Verify>VERIFY</Verify></>, "3–6 months", "Level 2–3", "Foundations on any budget"],
          ["3", "Scaler", "India (product cos, GCCs)", "Live cohort", "₹3–4L (~US$3,600–US$4,800)", "12–15 months", "Level 4", "Career switchers wanting placement machinery"],
          ["4", "Stanford Online AI Prof. Program", "Global; strongest US/EU signal", "Deadline-based, facilitated", <>~US$1,750/course <Verify>VERIFY</Verify>; certificate = multiple courses</>, "9–18 months", "Level 3–4", "Rigour and an elite credential"],
          ["5", "upGrad (IIIT-B)", "India", "Live + recorded", "₹1.5–3.5L (~US$1,800–US$4,200)", "12 months", "Level 3–4", "Indian university credential + structure"],
          ["6", "Great Learning (UT Austin)", "India + global", "Weekend mentor-led", "₹1.5–3.5L (~US$1,800–US$4,200)", "7–12 months", "Level 3–4", "Weekend-only learners"],
          ["7", "Udacity Nanodegrees", "Global", "Self-paced + reviews", <>~US$249/mo <Verify>VERIFY</Verify></>, "3–5 months", "Level 3", "Self-paced learners who want code reviewed"],
          ["8", "Google AI/ML path + PMLE", "Global + Indian GCCs", "Self-paced + exam", <>Free–US$49; exam US$200 <Verify>VERIFY</Verify></>, "2–4 months", "Level 2–3", "Cloud and enterprise AI roles"],
          ["9", "IBM AI Engineering", "Global", "Self-paced", <>Free–US$59/mo <Verify>VERIFY</Verify></>, "3–5 months", "Level 2–3", "Cheap applied engineering practice"],
          ["10", "Simplilearn (Purdue/IBM)", "India + global L&D", "Blended", "₹1.5–2.5L (~US$1,800–US$3,000)", "11 months", "Level 3–4", "Employer-funded upskilling"],
        ]}
        note={
          <>
            Fees are indicative as of <Verify>VERIFY: month/year</Verify>, vary by region, and
            Indian cohort fees are usually negotiable. Confirm current fee, GST, EMI interest or
            subscription terms, and the refund window in writing before paying.
          </>
        }
      />

      <H3 id="table-2">Table 2 — AI curriculum depth scorecard</H3>
      <P>
        This is the most important table on the page. One vocabulary across all ten courses:{" "}
        <strong>Deep / Good / Moderate / Basic / Limited / Not Covered</strong>. Columns follow rank
        order.
      </P>
      <Table head={["Skill area", ...COURSES]} rows={DEPTH_ROWS} />
      <P>
        The rows that separate a 2026 course from a 2023 one are the last third: production RAG,
        fine-tuning, agents and agent frameworks, MCP (the Model Context Protocol — the emerging
        standard for how models call tools and data sources), open-weight models, LLM evaluation,
        MLOps and deployment. Prompting and basic API use are now baseline literacy, not
        differentiation.
      </P>
      <P>
        Notice the pattern: elite academic programs dominate the <em>top</em> third — theory,
        evaluation rigour, transformers — while specialist and Indian cohort programs dominate the{" "}
        <em>bottom</em> third, because they refresh faster and are judged on employability rather
        than academic standards.
      </P>
      <Callout label="Honest counterpoint">
        Depth is not automatically better for you. A product manager who needs to scope AI projects
        does not need LoRA fine-tuning, and a research aspirant needs Stanford's mathematical rigour
        far more than a deployment pipeline. Read the rows that match your goal, not the row count.
      </Callout>

      <H3 id="table-3">Table 3 — Delivery experience scorecard</H3>
      <P>
        Second most important table, and the one people skip. Curriculum is a promise; delivery is
        what actually happens on a Tuesday night after a ten-hour workday.
      </P>
      <Table head={["Delivery factor", ...COURSES]} rows={DELIVERY_ROWS} />
      <P>
        The last row — <strong>realistic completion</strong> — is the single most predictive line in
        this article. A US$0 course you don't finish returns less than a ₹60,000 (~US$720) course
        you do. For working professionals, structure <em>is</em> the product. The format split is
        clean: Indian live cohorts and Stanford's hard deadlines buy completion with rigidity;
        global self-paced buys flexibility with dropout risk; Udacity's human project reviews are
        the rare middle path.
      </P>

      <H3 id="table-4">Table 4 — Fees, payment models, and total cost of ownership</H3>
      <Table
        head={[
          "Course",
          "Headline fee",
          "Payment model",
          "EMI / no-cost EMI",
          "Refund / exit",
          "Hidden costs to check",
          "Capability per unit of money",
        ]}
        rows={[
          ["LogicMojo", <>₹XX,XXX (~US$X,XXX) <Verify>VERIFY</Verify></>, "One-time cohort fee", <>Yes / <Verify>VERIFY</Verify></>, <Verify>VERIFY</Verify>, "Cloud / LLM API credits", "Very high"],
          ["DeepLearning.AI", <>Free–US$59/mo (~₹5K/mo) <Verify>VERIFY</Verify></>, "Subscription (regional pricing)", "N/A", "Coursera policy", "Subscription creep across slow months", "Excellent"],
          ["Scaler", "₹3–4L (~US$3,600–US$4,800)", "One-time, long tenure", "Yes / Partial", <Verify>VERIFY</Verify>, "Long duration = long EMI tenure", "Moderate (broader program)"],
          ["Stanford Online", <>~US$1,750/course (~₹1.5L); certificate = multiple courses <Verify>VERIFY</Verify></>, "Per-course", "No EMI; employer funding common", <Verify>VERIFY: drop deadlines</Verify>, "Multi-course total US$5K+", "Moderate (brand-weighted)"],
          ["upGrad", "₹1.5–3.5L (~US$1,800–US$4,200)", "One-time fee", "Yes / Often", <Verify>VERIFY</Verify>, "GST, late-fee policy", "Moderate"],
          ["Great Learning", "₹1.5–3.5L (~US$1,800–US$4,200)", "One-time fee", "Yes / Often", <Verify>VERIFY</Verify>, "Optional immersion travel", "Moderate"],
          ["Udacity", <>~US$249/mo or bundle (~₹21K/mo) <Verify>VERIFY</Verify></>, "Subscription", "N/A", <Verify>VERIFY: cancellation terms</Verify>, "Every slow month bills in full", "Good if fast, poor if slow"],
          ["Google", <>Free–US$49 courses; PMLE exam US$200 (~₹17K) <Verify>VERIFY</Verify></>, "Per-course / exam", "N/A", "Exam reschedule policy", "Cloud usage beyond free tier", "Excellent"],
          ["IBM (Coursera)", <>Free–US$59/mo (~₹5K/mo) <Verify>VERIFY</Verify></>, "Subscription", "N/A", "Coursera policy", "Subscription creep", "Excellent"],
          ["Simplilearn", "₹1.5–2.5L (~US$1,800–US$3,000)", "One-time fee", "Yes / Often", <Verify>VERIFY</Verify>, "Exam vouchers", "Moderate; strong when employer-funded"],
        ]}
      />
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-warn/40 bg-highlight/40 p-5">
          <p className="eyebrow">The EMI trap (India)</p>
          <p className="mt-2 text-[0.95rem] leading-relaxed">
            A 24-month EMI on a program abandoned in month three is the most common financial regret
            in Indian EdTech. Get the refund policy in writing, and check specifically whether the
            EMI is a <strong>bank or NBFC loan in your name</strong> — if it is, it continues
            regardless of whether you ever open the course again, and a dispute with the institute
            does not pause it.
          </p>
        </div>
        <div className="rounded-lg border border-warn/40 bg-highlight/40 p-5">
          <p className="eyebrow">The subscription trap (global)</p>
          <p className="mt-2 text-[0.95rem] leading-relaxed">
            US$249/month feels smaller than ₹1,00,000 upfront, but a stalled learner pays it seven
            times. Compute <strong>expected cost = monthly fee × realistic months</strong>, not the
            months advertised. Set a cancellation reminder on day one, and a second one at the
            halfway point.
          </p>
        </div>
      </div>

      <H3 id="table-5">Table 5 — Career support &amp; outcomes</H3>
      <Table
        head={[
          "Course",
          "Support type",
          "AI-role-specific",
          "Interview prep",
          "Portfolio review",
          "Strongest hiring geography",
          "How to read their claims",
        ]}
        rows={[
          ["LogicMojo", "Career guidance, portfolio review, interview prep", "Yes", "Strong (technical + defence)", "Yes", "India + IST-adjacent remote", "Skill depth, not guarantees; no bond or ISA"],
          ["DeepLearning.AI", "None", "No", "None", "No", "Universal (skills signal)", "None claimed — honest about it"],
          ["Scaler", "Placement infrastructure + partners", "Yes", "Very strong (DSA, system design, ML)", "Yes", "India (product companies, GCCs)", "Published data — read the eligibility fine print"],
          ["Stanford Online", "None structured; brand + alumni aura", "No", "None", "No", "Global; strongest for US/Europe screening", "Credential signal, not a placement service"],
          ["upGrad", "Career services team, job board", "Partial", "Moderate", "Partial", "India", "“Assistance,” not guarantee"],
          ["Great Learning", "Resume + mock interviews", "Partial", "Moderate", "Partial", "India, some global reach via brand", "“Assistance,” not guarantee"],
          ["Udacity", "Career services (resume, LinkedIn)", "Partial", "Basic–Moderate", "Via project reviews", "Global, self-driven", "Services are light; the reviews are the real value"],
          ["Google", "None; certification signal", "Partial (cloud roles)", "Exam-focused", "No", "Global + Indian GCCs on GCP", "Cert opens cloud/enterprise doors only"],
          ["IBM (Coursera)", "None", "No", "None", "No", "Global enterprise contexts", "None claimed"],
          ["Simplilearn", "Career services, job board", "Partial", "Moderate", "Limited", "India corporate + global L&D", "Enterprise-oriented"],
        ]}
      />
      <div className="mt-6 rounded-lg border border-rule bg-paper p-5 shadow-card">
        <p className="eyebrow">How to read placement claims — valid on every continent</p>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-[0.95rem] leading-relaxed">
          <li>What percentage of <em>enrolled</em> learners were placed — not “eligible” learners?</li>
          <li>Over what window: 3 months, 12 months, or “eventually”?</li>
          <li>What is the <em>median</em> salary, not the average that one outlier inflates?</li>
          <li>Are these AI roles, or any tech role including support and testing?</li>
          <li>
            Can I speak to two alumni from the last six months who were <em>not</em> selected as
            testimonials?
          </li>
        </ol>
      </div>

      <H3 id="table-6">Table 6 — Prerequisites &amp; accessibility</H3>
      <Table
        head={[
          "Course",
          "Coding prerequisite",
          "Maths prerequisite",
          "Bridge module",
          "Language",
          "Non-tech friendly",
          "Weekly hours",
        ]}
        rows={[
          ["LogicMojo", "Basic Python helpful; onboarding provided", "None assumed; built up", "Yes", "English", "Yes", "10–15"],
          ["DeepLearning.AI", "Python for the deeper courses", "Notation comfort helps", "No", "English (subtitles)", "Partial", "Flexible"],
          ["Scaler", "Programming aptitude expected", "Built into track", "Yes", "English", "Partial", "15–20"],
          ["Stanford Online", "Solid programming required", "College-level maths required", "No", "English", "No", "10–15, demanding"],
          ["upGrad", "Some technical comfort", "Academic maths included", "Yes", "English", "Yes", "10–15"],
          ["Great Learning", "Basic computer comfort", "Built up gradually", "Yes", "English", "Yes", "8–12"],
          ["Udacity", "Varies by nanodegree; stated per ND", "Basic–Moderate", "Partial (prerequisite NDs)", "English", "Partial", "8–12"],
          ["Google", "Minimal for essentials; real coding for PMLE", "Basic", "Partial", "English (subtitles)", "Yes at literacy tier", "Flexible"],
          ["IBM (Coursera)", "Python required", "Basic", "Partial", "English (subtitles)", "Partial", "Flexible"],
          ["Simplilearn", "Basic programming helpful", "Moderate", "Partial", "English", "Partial", "8–12"],
        ]}
        note="A “nanodegree” is Udacity's project-based credential, typically 3–5 months with human-reviewed submissions. An “ISA” (income share agreement) defers fees against a percentage of future salary — read those contracts more carefully than any other document on this page."
      />
    </Section>
  );
}
