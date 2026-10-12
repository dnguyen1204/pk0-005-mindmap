var DATA = { id: "root", label: "CompTIA Project+ (PK0-005)", def: "Entry-level IT project management certification: manage the project life cycle for small-to-medium IT projects, Waterfall + Agile.", children: [
{ id: "discovery", label: "1 · Discovery", phase: 1, def: "Before the project starts: is it worth doing? Business case, selection, feasibility.", children: [
  { id: "business-case", label: "Business Case", def: "The 'why' document: justifies the project with problem, options, and financials.", children: [
    { id: "problem-statement", label: "Problem Statement", def: "Clear description of the business problem or opportunity the project addresses." },
    { id: "options", label: "Options Analysis", def: "Candidate solutions compared with pros and cons; 'do nothing' is always an option." },
    { id: "financial-overview", label: "Financial Overview", def: "Cost-benefit picture: benefit, cost, net profit, and ROI.", children: [
      { id: "roi1", label: "ROI = (Net Profit / Cost) x 100", def: "Return on Investment: profit relative to cost, as a percentage." },
      { id: "roi2", label: "ROI = ((Revenue - Cost) / Cost) x 100", def: "Same ROI formula using revenue instead of net profit." },
      { id: "benefit", label: "Benefit", def: "Money flowing IN: revenue, cost reduction, cost avoidance." },
      { id: "cost", label: "Cost", def: "Money flowing OUT: labor, equipment, contracts (direct + indirect)." },
      { id: "net-profit", label: "Net Profit", def: "Benefit minus cost; the numerator of ROI." }
    ]},
    { id: "current-future", label: "Current vs Future State", def: "As-is vs to-be: the gap the project must close (gap analysis)." },
    { id: "assumptions", label: "Assumptions", def: "Things taken as true for planning; become risks if they prove wrong." },
    { id: "recommendation", label: "Project Recommendation", def: "The recommended option, backed by the financial overview." }
  ]},
  { id: "project-selection", label: "Project Selection", def: "Choosing which projects to fund from competing proposals.", children: [
    { id: "scoring-model", label: "Scoring Model", def: "Candidates scored against weighted criteria; highest total wins." },
    { id: "weighting-factor", label: "Weighting Factor", def: "Reflects each criterion's relative importance; weights usually total 100%." }
  ]},
  { id: "capex-opex", label: "CapEx vs OpEx", def: "CapEx = capital spending on assets (depreciated); OpEx = day-to-day operating costs." },
  { id: "feasibility", label: "Feasibility", def: "Can we do it? Technical, financial, and organizational viability check." },
  { id: "esg", label: "ESG Factors", def: "Environmental, Social, Governance impacts considered in project decisions." }
]},
{ id: "initiation", label: "2 · Initiation", phase: 2, def: "Formally start the project: charter, stakeholders, kickoff.", children: [
  { id: "charter", label: "Project Charter", def: "The project's 'birth certificate': formally authorizes the project and the PM.", children: [
    { id: "objectives", label: "Project Objectives", def: "Specific, measurable results the project must deliver (SMART)." },
    { id: "success-criteria", label: "Success Criteria", def: "Agreed standards used at the end to judge success." },
    { id: "pm-authority", label: "PM Authority", def: "The charter defines the PM's power to spend budget and direct resources." },
    { id: "prelim-scope", label: "Preliminary Scope Statement", def: "Early rough sketch of what's in/out; refined into the detailed scope statement in Planning." }
  ]},
  { id: "stakeholder-id", label: "Stakeholder Identification", def: "Find everyone who can affect or be affected by the project - done first.", children: [
    { id: "stakeholder-analysis", label: "Stakeholder Analysis", def: "Assess power, interest, influence, expectations. Registry = the phone book; analysis = understanding people.", children: [
      { id: "power-grid", label: "Power/Impact Grid", def: "Maps stakeholders by power vs interest to set the engagement strategy." }
    ]},
    { id: "stakeholder-register", label: "Stakeholder Register", def: "Documents stakeholder info (contact, role). Analysis evaluates it." }
  ]},
  { id: "raci", label: "RACI / RAM", def: "Responsibility Assignment Matrix: who does what on each task.", children: [
    { id: "r-resp", label: "Responsible", def: "Does the work (can be several people)." },
    { id: "r-acc", label: "Accountable", def: "Owns the outcome - exactly ONE per task." },
    { id: "r-cons", label: "Consulted", def: "Asked for input before deciding (two-way)." },
    { id: "r-inf", label: "Informed", def: "Told after the decision (one-way)." }
  ]},
  { id: "comm-channels", label: "Communication Channels", def: "Official ways of communicating (email, chat, meetings) so nothing gets lost." },
  { id: "records-plan", label: "Records Management Plan", def: "How records are created, stored, protected, kept: who keeps what, where, for how long." },
  { id: "solution-design", label: "Solution Design", def: "High-level technical approach chosen in Initiation.", children: [
    { id: "hld", label: "HLD", def: "High-Level Design: architecture and major components (the WHAT)." },
    { id: "lld", label: "LLD", def: "Low-Level Design: detailed specs developers build from (the HOW)." }
  ]},
  { id: "kickoff", label: "Project Kickoff", def: "First team meeting: align on charter, roles, ground rules, and the plan." }
]},

{ id: "planning", label: "3 · Planning", phase: 3, def: "Build the roadmap: scope, schedule, budget, risk, quality, resources, procurement.", children: [
  { id: "scope-plan", label: "Scope Planning", def: "Define exactly what IS and IS NOT in the project.", children: [
    { id: "detailed-scope", label: "Detailed Scope Statement", def: "Precise description of deliverables, boundaries, exclusions - the blueprint." },
    { id: "wbs", label: "WBS", def: "Work Breakdown Structure: deliverables decomposed into a hierarchy (nouns only)." },
    { id: "wbs-dict", label: "WBS Dictionary", def: "Details per work package: description, owner, cost, acceptance criteria." },
    { id: "work-package", label: "Work Package", def: "Lowest WBS level; outcome-based and estimable (8/80 rule)." },
    { id: "rule-100", label: "100% Rule", def: "WBS covers 100% of project work - nothing more, nothing less." },
    { id: "scope-baseline", label: "Scope Baseline", def: "= scope statement + WBS + WBS dictionary; the approved scope snapshot." }
  ]},
  { id: "schedule-plan", label: "Schedule Planning", def: "Sequence activities, estimate durations, build the timeline.", children: [
    { id: "activities", label: "Activities", def: "Work units derived from work packages; the verbs of the project." },
    { id: "dependencies", label: "Dependencies", def: "Logical links between activities (hard/mandatory vs soft/discretionary).", children: [
      { id: "fs", label: "Finish-to-Start (FS)", def: "B starts after A finishes - the most common type." },
      { id: "ss", label: "Start-to-Start (SS)", def: "B starts when A starts (parallel work)." },
      { id: "ff", label: "Finish-to-Finish (FF)", def: "B finishes when A finishes." },
      { id: "sf", label: "Start-to-Finish (SF)", def: "B finishes when A starts - the rarest type." }
    ]},
    { id: "estimating", label: "Estimating Techniques", def: "Six ways to forecast duration and cost.", children: [
      { id: "top-down", label: "Top-Down", def: "Estimate the total first, then break it down." },
      { id: "bottom-up", label: "Bottom-Up", def: "Estimate the pieces, then roll up - most accurate, most effort." },
      { id: "analogous", label: "Analogous", def: "Use history from similar past projects." },
      { id: "parametric", label: "Parametric", def: "Statistical math, e.g. cost per unit." },
      { id: "three-point", label: "Three-Point / PERT", def: "Weighted average of optimistic, most likely, pessimistic estimates." },
      { id: "pert", label: "PERT = (O + 4M + P) / 6", def: "Program Evaluation Review Technique formula." },
      { id: "expert", label: "Expert Judgment", def: "Ask experienced people." }
    ]},
    { id: "critical-path", label: "Critical Path", def: "Longest dependent chain; sets the shortest possible duration - zero float." },
    { id: "milestones", label: "Milestones", def: "Zero-duration checkpoints (diamond symbol); about one per month." },
    { id: "gantt", label: "Gantt Chart", def: "Bars on a timeline showing tasks, durations, and dependencies." },
    { id: "schedule-baseline", label: "Schedule Baseline", def: "The approved timeline used to measure schedule variance." }
  ]},
  { id: "budget-plan", label: "Budget Planning", def: "Turn estimates into an approved spending plan.", children: [
    { id: "cost-baseline", label: "Cost Baseline", def: "Approved budget over time (S-curve); used to measure cost variance." },
    { id: "contingency-reserve", label: "Contingency Reserve", def: "For KNOWN risks; included in the baseline." },
    { id: "management-reserve", label: "Management Reserve", def: "For UNKNOWN unknowns; needs sponsor approval to touch." }
  ]},
  { id: "risk-plan", label: "Risk Planning", def: "Identify, analyze, plan responses, monitor - for threats AND opportunities.", children: [
    { id: "risk-identify", label: "Risk Identification", def: "Find what could help or hurt the project (risks and opportunities)." },
    { id: "qualitative", label: "Qualitative Analysis", def: "Rank risks by probability x impact matrix; fast and common." },
    { id: "quantitative", label: "Quantitative Analysis", def: "Numbers: EMV = Probability x Impact; simulation, decision trees." },
    { id: "risk-register", label: "Risk Register", def: "The log of all identified risks, owners, and planned responses." },
    { id: "neg-responses", label: "Negative Risk Responses", def: "Threat strategies.", children: [
      { id: "avoid", label: "Avoid", def: "Eliminate the threat (change the plan)." },
      { id: "mitigate", label: "Mitigate", def: "Reduce the probability or impact." },
      { id: "transfer", label: "Transfer", def: "Shift impact to a third party (insurance, outsourcing)." },
      { id: "accept-neg", label: "Accept (threat)", def: "Do nothing proactive; contingency plan if it happens." }
    ]},
    { id: "pos-responses", label: "Positive Risk Responses", def: "Opportunity strategies.", children: [
      { id: "exploit", label: "Exploit", def: "Act to make the opportunity certain (probability = 100%)." },
      { id: "enhance", label: "Enhance", def: "Increase the probability or impact of the opportunity." },
      { id: "share", label: "Share", def: "Partner with a third party to capture the upside (joint venture)." },
      { id: "accept-pos", label: "Accept (opportunity)", def: "Take the benefit if it happens; do not chase it." }
    ]}
  ]},
  { id: "quality-plan", label: "Quality Planning", def: "Define how quality will be assured and controlled.", children: [
    { id: "verify-validate", label: "Verification vs Validation", def: "Verify the paper (was it built right?); validate the purpose (was the right thing built?)." },
    { id: "test-types", label: "Test Types", def: "Unit -> Smoke -> Regression -> Stress -> Performance -> UAT." },
    { id: "uat", label: "UAT", def: "User Acceptance Testing: the customer confirms it meets their needs." }
  ]},
  { id: "comm-plan", label: "Communication Plan", def: "Who needs what info, when, how, and who provides it (incl. status reports)." },
  { id: "resource-plan", label: "Resource Planning", def: "Get the right people and materials at the right time.", children: [
    { id: "tuckman", label: "Tuckman's Stages", def: "Forming -> Storming -> Norming -> Performing -> Adjourning.", children: [
      { id: "forming", label: "Forming", def: "Polite, cautious start; PM gives direction and clarity." },
      { id: "storming", label: "Storming", def: "Conflict stage; normal and necessary - manage the team THROUGH it." },
      { id: "norming", label: "Norming", def: "Trust and norms form; PM shifts from directing to supporting." },
      { id: "performing", label: "Performing", def: "Self-organizing, high output; PM removes obstacles." },
      { id: "adjourning", label: "Adjourning", def: "Disband with recognition; capture lessons learned." }
    ]},
    { id: "resource-types", label: "Resource Types", def: "Human, physical, capital; internal vs external; shared vs dedicated." }
  ]},
  { id: "procure-plan", label: "Procurement Planning", def: "Decide what to buy vs build, and how vendors are chosen.", children: [
    { id: "rf-docs", label: "RFI -> RFP -> RFQ/RFB", def: "Information -> Proposal -> Quote/Bid: increasing commitment." },
    { id: "sow", label: "SOW", def: "Statement of Work: exactly WHAT the vendor will deliver." },
    { id: "contract-types", label: "Contract Types", def: "Fixed Price (seller risk) - T&M - Cost Plus (buyer risk) - Unit Price." }
  ]}
]},

{ id: "execution", label: "4 · Execution", phase: 4, def: "Do the work: deliver, manage people, control changes, track performance.", children: [
  { id: "direct-work", label: "Direct & Manage Work", def: "Execute the plan; produce the deliverables." },
  { id: "manage-team-comm", label: "Manage Team & Communication", def: "Lead the team, run meetings, distribute information.", children: [
    { id: "status-report", label: "Status Report", def: "Where we are vs the plan: progress, issues, next steps (feeds EVM data)." }
  ]},
  { id: "change-control", label: "Change Control", def: "No change touches a baseline without approval: request -> log -> impact assessment -> CCB -> update plan -> implement -> validate.", children: [
    { id: "change-request", label: "Change Request", def: "Formal written proposal to alter scope, schedule, cost, or quality." },
    { id: "change-log", label: "Change Log", def: "Single source of truth for every request's status." },
    { id: "ccb", label: "CCB", def: "Change Control Board: approves or rejects major changes." },
    { id: "scope-creep", label: "Scope Creep vs Scope Change", def: "Creep = unapproved growth (bad); change = approved via control (ok)." }
  ]},
  { id: "ocm", label: "OCM", def: "Organizational Change Management: get PEOPLE to adopt the change, not just build it.", children: [
    { id: "adkar", label: "ADKAR", def: "Awareness -> Desire -> Knowledge -> Ability -> Reinforcement." }
  ]},
  { id: "conflict", label: "Conflict Management", def: "Five techniques, from weakest to best long-term.", children: [
    { id: "smoothing", label: "Smoothing", def: "Downplay differences; keeps harmony but ignores the root cause." },
    { id: "forcing", label: "Forcing", def: "'My way' via authority; fast but damages relationships." },
    { id: "compromise", label: "Compromise", def: "Split the difference; nobody fully wins (lose-lose lite)." },
    { id: "collaborating", label: "Collaborating", def: "Win-win; best long-term outcome, takes the most time." },
    { id: "avoiding", label: "Avoiding", def: "Ignore or postpone; weakest - only for trivial issues." }
  ]},
  { id: "vendor-mgmt", label: "Vendor Management", def: "Enforce contracts, monitor SLAs, keep communication open." },
  { id: "evm", label: "EVM", def: "Earned Value Management: measure performance with PV, EV, AC.", children: [
    { id: "pv", label: "PV", def: "Planned Value: budgeted cost of work SCHEDULED." },
    { id: "ev", label: "EV", def: "Earned Value: budgeted cost of work PERFORMED." },
    { id: "ac", label: "AC", def: "Actual Cost: what was actually spent." },
    { id: "cv", label: "CV = EV - AC", def: "Cost Variance: negative = over budget." },
    { id: "sv", label: "SV = EV - PV", def: "Schedule Variance: negative = behind schedule." },
    { id: "cpi", label: "CPI = EV / AC", def: "Cost Performance Index: < 1 over budget, > 1 under budget." },
    { id: "spi", label: "SPI = EV / PV", def: "Schedule Performance Index: < 1 behind, > 1 ahead." },
    { id: "bac", label: "BAC / EAC / ETC / VAC", def: "Budget at Completion; Estimate At/To Complete; Variance at Completion." }
  ]},
  { id: "phase-gate", label: "Phase Gate Review", def: "Stop/go checkpoint between phases: Go, No-Go (kill), or Hold (fix and re-review)." },
  { id: "corrective", label: "Corrective vs Preventive Action", def: "Corrective fixes a variance that happened; preventive stops one that is coming.", children: [
    { id: "crashing", label: "Crashing", def: "Add resources to shorten duration (costs more)." },
    { id: "fast-tracking", label: "Fast Tracking", def: "Overlap sequential tasks (adds risk)." }
  ]}
]},
{ id: "closing", label: "5 · Closing", phase: 5, def: "Finish well: validate, close contracts, learn, archive, celebrate.", children: [
  { id: "validate-deliv", label: "Validate Deliverables", def: "Customer confirms deliverables meet the acceptance criteria." },
  { id: "verification-validation", label: "Verification vs Validation", def: "Built right? (verify) vs right thing built? (validate)." },
  { id: "close-contracts", label: "Close Contracts", def: "Formal acceptance, final payments, warranty period begins." },
  { id: "release-resources", label: "Release Resources", def: "Free the team and equipment; reassign people." },
  { id: "lessons", label: "Lessons Learned", def: "What went well / badly, recorded in the register -> becomes OPA." },
  { id: "archive", label: "Archive Documentation", def: "File everything (plans, logs, reports) as organizational process assets." },
  { id: "signoff", label: "Final Sign-off", def: "Formal stakeholder approval that the project is complete." },
  { id: "celebration", label: "Celebration", def: "Retrospective + recognize the team; formally close the project." }
]}
]};

/* Cross-links between related concepts across phases */
var XLINKS = [
  { from: "change-request", to: "scope-baseline", label: "scope changes re-baseline the scope" },
  { from: "change-request", to: "schedule-baseline", label: "schedule changes re-baseline the timeline" },
  { from: "change-request", to: "cost-baseline", label: "cost changes re-baseline the budget" },
  { from: "risk-register", to: "contingency-reserve", label: "known risks are funded by the contingency reserve" },
  { from: "wbs", to: "scope-baseline", label: "the WBS is part of the scope baseline" },
  { from: "evm", to: "status-report", label: "EVM metrics feed the status report" },
  { from: "stakeholder-analysis", to: "comm-plan", label: "analysis drives who gets what information" },
  { from: "scope-creep", to: "change-control", label: "change control is what prevents creep" },
  { from: "verify-validate", to: "validate-deliv", label: "V&V is applied when validating deliverables" }
];

/* ================= RICH DEFINITIONS ================= */
var DETAIL = {
  "business-case": { d: "Justifies why a project should exist: the business problem, benefits, expected costs, and why it's worth doing. The project's \"sales pitch\" to leadership." },
  "financial-overview": { d: "The cost-benefit picture of the business case: total expected benefit, total expected cost, net profit, and ROI. It answers the money question directly — is this project financially worth doing? If benefits do not clearly exceed costs, the project should not happen." },
  "roi1": { d: "(Net Profit ÷ Cost) × 100. Positive ROI = the project makes money; negative = it loses money." },
  "roi2": { d: "(Net Profit ÷ Cost) × 100. Positive ROI = the project makes money; negative = it loses money." },
  "benefit": { d: "Money flowing IN because of the project: new revenue, cost reduction, or cost avoidance. Benefit is the good-news half of every financial calculation — the numerator side of ROI." },
  "cost": { d: "Money flowing OUT to deliver the project: labor, equipment, contracts, and licenses. Costs include direct costs (charged straight to the project) and indirect costs (overhead shared across projects)." },
  "current-future": { d: "How things work today (as-is) vs. how they should work after the project (to-be). The gap shows what the project must change. Memory hook: \"As-is → To-be, the project is the bridge.\"" },
  "capex-opex": { d: "Big one-time purchases of long-lasting assets (servers, buildings, equipment); recorded as assets, cost spread over years", k: "\"Buy the server = CapEx\" — owning is capital" },
  "charter": { d: "The official document that formally creates the project and gives the PM authority to use resources — short and high-level", k: "Gives birth to the project; the project's \"birth certificate\"", t: "Initiation questions test the charter's authority role: it formally authorizes the project and empowers the PM." },
  "objectives": { d: "The specific results the project itself must deliver (e.g., \"deliver the new website by December\")." },
  "success-criteria": { d: "Agreed standards used at the end to judge success; answers \"how will we know we won?\" (on time, on budget, 99% uptime)." },
  "prelim-scope": { d: "An early, rough description of what the project will and will not include; refined later", k: "Raises the project; detailed, living document from initiation" },
  "stakeholder-id": { d: "Find everyone who can affect or be affected by the project, then judge their interest, influence, and expectations — done first so nobody is surprised later." },
  "raci": { d: "The most common RAM type, assigning four roles per activity:", t: "If a scenario asks 'who is ultimately answerable,' pick the Accountable person — not the Responsible one." },
  "r-resp": { d: "The person (or people) who actually does the work to complete the task. There can be more than one Responsible per task — they are the hands doing the doing.", k: "RACI: Responsible does, Accountable owns (exactly ONE per task)." },
  "r-acc": { d: "Has final ownership — the one person who answers for it", k: "The neck on the line (only one person)" },
  "r-cons": { d: "Someone asked for input BEFORE a decision is made — a genuine two-way conversation. Consulted people influence the decision, but they do not make it.", k: "Consulted = two-way (before); Informed = one-way (after)." },
  "r-inf": { d: "Someone told about the decision AFTER it is made — one-way communication. Informed people need to know the outcome, but their input is not required.", k: "Consulted = two-way (before); Informed = one-way (after)." },
  "comm-channels": { d: "Setting official communication ways (email, chat apps, meetings) so nothing gets lost in random channels." },
  "records-plan": { d: "How project records are created, stored, protected, and kept for the required time — who keeps what, where, and for how long." },
  "solution-design": { d: "Deciding the technical approach or architecture; turns \"what we need\" into \"how we will build it.\"" },
  "kickoff": { d: "Formally launching the project (in-person meeting, virtual meeting, or written announcement) to align everyone on goals, roles, and expectations." },
  "detailed-scope": { d: "Thorough, precise description of deliverables, boundaries, and exclusions; becomes the baseline for measuring change", k: "From planning; precise enough to build from — the blueprint" },
  "wbs": { d: "Tree-shaped diagram decomposing total scope into work packages. Two rules: 100% rule (ALL the work, no more, no less) and 8/80 rule (each work package = 8–80 hours)", k: "Decomposes everything upfront — predictive projects" },
  "schedule-plan": { d: "The approved timeline of work and due dates. Slippage in one task can ripple through dependencies — which is why the critical path matters.", t: "Know the four dependency types (FS is default, SF is the rare one), critical path = longest path with zero float, and PERT = (O + 4M + P) / 6." },
  "dependencies": { d: "Logical links between activities showing which must happen in which order. Hard logic (mandatory) cannot be changed — build before test. Soft logic (discretionary) is the PM’s choice. Dependencies can also be internal (team-controlled) or external (outside the team)." },
  "fs": { d: "The successor can start only after the predecessor finishes (e.g., start testing after coding is done). Mnemonic: FS = \"Finish, Start\".", k: "The DEFAULT, most common relationship" },
  "ss": { d: "The successor can start only after the predecessor starts (e.g., start writing documentation once coding starts). The two tasks then run in parallel.", k: "Successors START together (end whenever)" },
  "ff": { d: "The successor can finish only after the predecessor finishes (e.g., finish testing once development finishes). Both end together, though they may start at different times.", k: "Successors FINISH together (start whenever)" },
  "sf": { d: "The successor can finish only after the predecessor starts (e.g., a new shift can end only after the next shift begins — a handoff).", k: "RARE — the exam's odd-one-out answer" },
  "estimating": { d: "Methods for estimating task duration or cost:" },
  "pert": { d: "Program Evaluation Review Technique: (O + 4M + P) / 6 — optimistic, most likely, pessimistic weighted average. Ideal when task times are highly uncertain, and the basis of PERT charts.", k: "PERT = (O + 4M + P) / 6 — the most-likely estimate carries 4x weight." },
  "critical-path": { d: "Identifying the longest chain of dependent tasks, which sets the shortest possible project duration; any delay on the critical path delays the whole project. Tasks on it have zero float/slack." },
  "milestones": { d: "Zero-duration checkpoints marking major achievements or decision points, drawn as diamonds on schedules. They have no work attached — they are moments in time. About one milestone per month is a good starting rhythm.", k: "Milestone = 0 days, diamond symbol. Gantt shows tasks; milestone chart shows only checkpoints." },
  "gantt": { d: "Horizontal bar chart showing each task as a bar across a timeline — start, end, and overlap at a glance", k: "Focus is WHEN; bars" },
  "schedule-baseline": { d: "The approved timeline of work and due dates. Slippage in one task can ripple through dependencies — which is why the critical path matters." },
  "budget-plan": { d: "The approved cost estimate for the project; going over without approval is a failure condition." },
  "contingency-reserve": { d: "Setting aside extra time or budget (inside the baseline) for known risks, based on risk analysis. Buffer size should match the uncertainty — bigger risks get bigger buffers.", t: "Contingency reserve covers KNOWN risks and sits inside the baseline; management reserve covers UNKNOWN risks and needs sponsor approval." },
  "qualitative": { d: "Rank risks by probability and impact (high/medium/low) with a risk matrix — no dollar values. Fast and cheap; do this first to prioritize deeper analysis." },
  "quantitative": { d: "Numeric analysis: EMV (probability × impact), decision trees, and simulations estimating cost/schedule impacts in dollars and days. Heavier effort — reserve for high-priority risks and big decisions." },
  "risk-register": { d: "Master list of identified risks: description, likelihood, impact, owner, response strategy, status — updated throughout the project", k: "WORKING DATABASE of risks" },
  "avoid": { d: "Eliminate the threat by changing the plan (drop the risky feature, use a proven technology)", k: "The only strategy that drives the risk's probability to zero" },
  "mitigate": { d: "Reduce the probability or impact without eliminating it (add testing, order materials early)", k: "The most commonly used threat strategy on real projects" },
  "transfer": { d: "Shift the impact to a third party — insurance, outsourcing, warranties", k: "Doesn't eliminate the risk — moves the financial pain elsewhere" },
  "accept-neg": { d: "Acknowledge the threat; deal with it if it happens (passive acceptance) or set aside a reserve (active acceptance)", k: "Best when a response would cost more than the risk" },
  "exploit": { d: "Act to make the opportunity certain (probability = 100%), e.g., assign the best engineer", k: "Opportunity mirror of avoid — aggressive and certain" },
  "enhance": { d: "Increase the probability or impact of the opportunity (add resources to finish early and claim a bonus)", k: "Opportunity mirror of mitigate" },
  "share": { d: "Partner with a third party (joint venture, partnership) to capture the opportunity", k: "Opportunity mirror of transfer — share the upside" },
  "accept-pos": { d: "Do nothing special; take the benefit if it happens", k: "Don't chase it — just be ready to benefit" },
  "verify-validate": { d: "Verification asks \"are we building the product RIGHT?\" (does it match specs — reviews, inspections); Validation asks \"are we building the RIGHT product?\" (does it meet user needs — testing, UAT). Mnemonic: Verification = against the SPEC; Validation = against the NEED." },
  "test-types": { d: "The testing sequence from smallest to most realistic: Unit (single components) → Smoke (do basic functions work?) → Regression (did new changes break old stuff?) → Stress (where is the breaking point?) → Performance (speed under load) → UAT (the customer accepts it)." },
  "uat": { d: "Final testing by real end users or the customer in a realistic environment to confirm the system meets business needs before sign-off.", k: "The customer's \"yes, we'll take it\" gate" },
  "comm-plan": { d: "Who needs what information, when, how, and from whom." },
  "resource-plan": { d: "Deciding what resources — people, skills, equipment, materials — the project needs, when they are needed, and how they will be acquired and managed. Covers the resource life cycle: acquisition, maintenance, and decommissioning." },
  "forming": { d: "The first stage of team development: members meet, learn the goals, and are polite but cautious.", k: "PM's job: direction and clarity" },
  "storming": { d: "The conflict stage: personalities clash, roles are contested, and disagreements surface.", k: "Normal and necessary — manage conflict so the team moves THROUGH it" },
  "norming": { d: "The team settles: norms, trust, and working agreements form, and collaboration improves.", k: "PM shifts from directing to supporting" },
  "performing": { d: "The high-functioning stage: the team is self-organizing, productive, and focused on results.", k: "PM's job: remove obstacles and stay out of the way" },
  "adjourning": { d: "The final stage: the project ends, the team disbands, and members move on — ideally with recognition and lessons captured.", k: "Skipping proper closure hurts morale and loses knowledge" },
  "sow": { d: "The detailed document describing exactly WHAT work the vendor will do: deliverables, timeline, acceptance criteria, and responsibilities. The SOW is the scope baseline for the contract — disputes are settled against it." },
  "status-report": { d: "A regular update on where the project stands versus the plan: progress made, issues and risks, EVM numbers, and next steps. The communication plan defines who provides each status report, to whom, and how often." },
  "change-control": { d: "The formal process ensuring no change touches a baseline without approval. The flow: request → log → preliminary review → impact assessment → recommendation → decision makers → CCB → document status → communicate → update plan → implement → validate → communicate deployment.", k: "Project change control (scope/schedule/cost) — not the same as IT operational change control.", t: "Change control is one of the most-tested objectives. The correct first response to ANY change request is always to evaluate and document it — never just approve or reject it." },
  "change-log": { d: "List of all change requests and their dispositions (approved, rejected, deferred), documenting what changed and who approved it", k: "REQUESTED changes" },
  "ccb": { d: "Change Control Board: the formal group of stakeholders that approves or rejects major change requests. It weighs each request's impact on scope, schedule, cost, and risk — no baseline changes without its approval.", k: "CCB approves/rejects CHANGE REQUESTS; it is not a general escalation path for everyday issues." },
  "scope-creep": { d: "Scope creep = uncontrolled, unapproved scope growth (gold-plating, \"just add this one thing\"); scope change = approved, documented growth through change control. Client asks for an extra feature → run it through change control first." },
  "ocm": { d: "Structured approach to moving people from the old way of working to the new way the project delivers; manages the human side of the project." },
  "smoothing": { d: "Downplays differences and emphasizes common ground to keep harmony; calms things down but doesn't solve the root problem", k: "Pretend it's fine — avoids the root issue" },
  "forcing": { d: "One side pushes its solution through using authority or power; fast but damages relationships", k: "My way or else" },
  "compromise": { d: "Both sides give up something to reach a middle ground; nobody gets everything, everyone gets something", k: "Split the difference (lose-lose-lite)" },
  "avoiding": { d: "The conflict is ignored or postponed; weakest approach, only works when the issue is trivial or temporary", k: "Run away" },
  "cv": { d: "CV = EV − AC; the value of work done minus what it actually cost. Negative = over budget; positive = under budget. Mnemonic: \"C goes with C\" — Cost compares to Actual Cost.", k: "About COST" },
  "sv": { d: "SV = EV − PV; the value of work done minus what was planned by this date. Negative = behind schedule; positive = ahead. Mnemonic: \"S goes with P\" — Schedule compares to Planned Value.", k: "About TIME" },
  "spi": { d: "Schedule Performance Index = EV / PV. Below 1.0 means behind schedule (earning less value than planned); above 1.0 means ahead of schedule. Like CPI, it is a ratio — 1.0 is exactly on plan.", k: "Index < 1.0 = BAD. SPI is about TIME; CPI is about COST." },
  "bac": { d: "The EVM forecast family. BAC (Budget at Completion): the total approved budget. EAC (Estimate at Completion) = BAC / CPI: the predicted final cost. ETC (Estimate to Complete) = EAC − AC: money still needed. VAC (Variance at Completion) = BAC − EAC: predicted over/under budget at the end." },
  "phase-gate": { d: "Organizing a formal checkpoint at the end of a phase where decision-makers decide to continue, change, or stop the project; nothing moves on until the gate is passed." },
  "validate-deliv": { d: "Confirming every deliverable meets requirements and is accepted by the customer or sponsor", k: "Nothing closes until all deliverables are validated" },
  "verification-validation": { d: "Verification asks \"are we building the product RIGHT?\" (does it match specs — reviews, inspections); Validation asks \"are we building the RIGHT product?\" (does it meet user needs — testing, UAT). Mnemonic: Verification = against the SPEC; Validation = against the NEED." },
  "close-contracts": { d: "Formally finishing all vendor/supplier contracts: confirm work is complete, settle final payments, end the legal relationship", k: "Open contracts must not survive the project" },
  "release-resources": { d: "Returning people, equipment, and materials to home departments or other projects", k: "Frees resources for new work" },
  "lessons": { d: "A meeting at the end of a sprint or project to discuss what went well, what didn't, and what to improve next time. In Scrum it's the retrospective; at project end it's lessons learned — the goal is continuous improvement, not blame." },
  "archive": { d: "Storing all project records safely and organized for future reference; satisfies legal requirements", k: "Preserves the record" },
  "signoff": { d: "Formal, documented approval from the customer or sponsor that the project is complete and accepted — the official finish line", k: "Without it, the project is not truly closed" },
  "celebration": { d: "Recognizing and celebrating the team's achievements at project end", k: "Builds morale" },
  "ac": { d: "Actual Cost: what was genuinely spent to achieve the earned value. AC comes from accounting reality, while PV and EV come from the plan — comparing them reveals the truth about performance.", k: "Mnemonic: 'C goes with C' — Cost variance compares EV to Actual Cost." },
  "activities": { d: "The specific work units derived from work packages — the verbs of the project (code, test, review, deploy). Activities get sequenced, estimated, and scheduled; work packages are the nouns (deliverables) they produce." },
  "adkar": { d: "Prosci's model for individual change, with five sequential building blocks: Awareness (why change?), Desire (want to participate), Knowledge (how to change), Ability (can do it in practice), Reinforcement (make it stick). OCM fails whenever any step is skipped — especially Desire.", k: "Awareness → Desire → Knowledge → Ability → Reinforcement." },
  "analogous": { d: "Use actual cost or duration data from similar past projects to estimate the current one ('the last ERP rollout took 6 months'). The fastest method, but only as reliable as the similarity between the projects.", k: "Fastest, least accurate — accuracy depends on how similar the past project really was." },
  "assumptions": { d: "Things taken as true for planning purposes (e.g., 'the vendor API will be ready by March'). Assumptions simplify planning, but they become risks the moment they prove wrong — so they must be written down and tracked, not left as silent hopes." },
  "bottom-up": { d: "Estimate each small piece of work individually, then roll the estimates up into the project total. The most accurate estimating technique — and the most time-consuming, since it requires a detailed WBS first.", k: "Top-down = total first (fast, rough); Bottom-up = pieces first (slow, accurate)." },
  "change-request": { d: "A formal, written proposal to alter scope, schedule, cost, or quality. If it's not written, it doesn't exist — verbal 'quick changes' are exactly how scope creep starts. Every request must be logged and evaluated; never approved or rejected on the spot.", k: "The correct first response to ANY change request is to evaluate and document it." },
  "collaborating": { d: "The win-win conflict technique: both sides work together to find a solution that satisfies everyone's core needs. It produces the best long-term outcome and preserves relationships — but takes the most time, so reserve it for important issues.", k: "Collaborating = win-win, best long-term, slowest. Avoiding = weakest." },
  "conflict": { d: "Disagreements are inevitable on projects; the PM's job is to resolve them productively rather than let them fester. Five techniques exist, from least to most collaborative: Avoiding, Smoothing, Compromise, Forcing, Collaborating.", t: "Learn the five conflict styles by their outcomes, not just their names. Collaborating = win-win (best, slowest); Avoiding = weakest." },
  "contract-types": { d: "How the buyer pays the seller — and who carries the cost risk. Fixed Price: seller's risk, best when scope is clear. Time & Materials: buyer's risk, usually with a cap. Cost Plus: buyer's risk, for uncertain scope. Unit Price: pay per unit delivered.", k: "Fixed Price = SELLER's risk. Cost Plus = BUYER's risk. T&M = buyer's risk with a cap." },
  "corrective": { d: "Corrective action fixes a variance that already happened (for example, crashing the schedule to recover lost time); preventive action stops a variance that is coming. Corrective = cure, preventive = prevention — and any corrective action that changes the plan must go through change control." },
  "cost-baseline": { d: "The approved, time-phased budget — often drawn as an S-curve — used to measure cost performance. It includes work-package costs plus the contingency reserve, but NOT the management reserve.", k: "Cost baseline includes contingency reserve; management reserve sits OUTSIDE the baseline." },
  "cpi": { d: "Cost Performance Index = EV / AC. Below 1.0 means over budget (getting less than a dollar of value per dollar spent); above 1.0 means under budget. CPI also predicts the final cost: EAC = BAC / CPI.", k: "Index < 1.0 = BAD (over budget / behind schedule). Index > 1.0 = GOOD." },
  "crashing": { d: "Shorten the schedule by adding resources — overtime, extra staff — to critical-path tasks. It works, but it costs more and can hurt quality through fatigue and communication overhead. Crashing only helps on the critical path.", k: "Crashing = add RESOURCES (costs money). Fast tracking = overlap tasks (adds risk)." },
  "direct-work": { d: "Direct and Manage Project Work: executing the plan to produce the deliverables. The PM leads the team, manages interfaces between work streams, and implements approved changes — this is where the plan becomes reality." },
  "esg": { d: "Environmental, Social, and Governance factors the PM should weigh in decisions: environmental impact, how people and communities are treated, and how transparently the company operates. Modern projects must consider these alongside pure profit." },
  "ev": { d: "Earned Value: the budgeted cost of work actually PERFORMED. If a $10,000 task is 50% complete, EV is $5,000 — regardless of what was actually spent. EV is the heart of earned value management." },
  "evm": { d: "Earned Value Management: the mathematics of project performance. It compares Planned Value (PV), Earned Value (EV), and Actual Cost (AC) to compute variances (CV, SV) and indices (CPI, SPI) — telling you over/under budget and ahead/behind schedule in hard numbers, not gut feel.", t: "Memorize CV = EV − AC (cost) and SV = EV − PV (schedule). Negative variance = bad; index below 1.0 = bad." },
  "expert": { d: "Ask experienced people for judgment-based estimates. Fast and practical, but vulnerable to personal bias — best combined with another technique or gathered through an anonymous Delphi-style round." },
  "fast-tracking": { d: "Shorten the schedule by overlapping tasks that were originally planned in sequence. It's free, but it adds risk — if the earlier task's output changes, the overlapped work may need rework.", k: "Crashing = add RESOURCES (costs money). Fast tracking = overlap tasks (adds risk)." },
  "feasibility": { d: "Can we actually do it? A check of technical, financial, legal, and organizational viability before committing resources. A project can be desirable but infeasible — feasibility analysis kills bad ideas early, when they are still cheap to kill." },
  "hld": { d: "High-Level Design: the architecture view — major components, technologies, data flows, and integrations, without code-level detail. It answers WHAT the solution looks like and is written for architects, stakeholders, and the PM to agree on direction.", k: "HLD = the WHAT (architecture); LLD = the HOW (build specs)." },
  "lld": { d: "Low-Level Design: the detailed blueprint developers actually build from — class diagrams, database schemas, API specifications, algorithms. It answers HOW each piece is implemented, and it follows the HLD.", k: "HLD = the WHAT (architecture); LLD = the HOW (build specs)." },
  "manage-team-comm": { d: "Leading the team (motivation, conflict resolution, performance feedback) and distributing information according to the communication plan. People and information are the two things a PM actively manages every single day of execution." },
  "management-reserve": { d: "Budget (and schedule) held back for UNKNOWN unknowns — things nobody predicted. It sits outside the cost baseline and requires sponsor approval to touch. Contrast with contingency reserve, which covers KNOWN risks and is inside the baseline.", k: "Contingency = KNOWN risks, inside baseline. Management = UNKNOWN risks, needs sponsor approval." },
  "neg-responses": { d: "The four strategies for negative risks (threats): Avoid (eliminate the threat), Mitigate (reduce its probability or impact), Transfer (shift it to a third party, e.g., insurance), Accept (live with it). Each threat gets exactly one primary strategy.", k: "Mnemonic: 'Dodge it, shrink it, shift it, swallow it' — Avoid, Mitigate, Transfer, Accept." },
  "net-profit": { d: "Benefit minus cost — the money the project actually makes or saves. It is the numerator of the ROI formula: ROI = (Net Profit / Cost) x 100. A positive net profit means the project pays for itself." },
  "options": { d: "Candidate solutions (including 'do nothing') compared side by side with pros and cons. Comparing options forces an honest look at alternatives instead of falling in love with the first idea. The final recommendation must follow from this analysis, not precede it." },
  "parametric": { d: "Use statistical relationships between variables — for example, cost per square foot or hours per line of code. Accurate when you have solid historical data and a scalable unit of measure." },
  "pm-authority": { d: "The power the project charter grants the PM — to spend budget, assign resources, and make project decisions. Without documented authority, the PM must negotiate every decision with functional managers, which slows everything down.", k: "The charter is what gives the PM authority — initiation questions test this." },
  "pos-responses": { d: "The four strategies for positive risks (opportunities): Exploit (make it certain), Enhance (increase its probability or impact), Share (partner with a third party to capture it), Accept (take the benefit if it happens). Threats and opportunities use mirrored strategy sets." },
  "power-grid": { d: "A 2x2 grid mapping stakeholders by power versus interest (or impact) to set the engagement strategy: manage closely, keep satisfied, keep informed, or just monitor. High-power, high-interest stakeholders get the most PM attention." },
  "problem-statement": { d: "A clear description of the business problem or opportunity the project addresses. It explains why the project exists and what pain it removes — every solution option in the business case is judged against it. A vague problem statement leads to solving the wrong problem." },
  "procure-plan": { d: "Deciding what to buy versus build, which contract type fits, and how vendors will be selected (RFI to RFP to RFQ/RFB). Procurement planning also defines the evaluation criteria BEFORE any vendor is contacted, to keep selection fair.", t: "Unknown solution → RFP; known scope, want price → RFB/RFQ; just researching → RFI. Fixed price = seller's risk; Cost plus = buyer's risk." },
  "project-selection": { d: "Choosing which proposed projects get funded when resources are limited. Organizations compare candidates on value, risk, and strategic alignment using tools like scoring models, ROI, and payback analysis. Not every good idea deserves funding." },
  "pv": { d: "Planned Value: the budgeted cost of work SCHEDULED to be done by a given date. It is the 'should have spent by now' number — the baseline against which real progress is measured.", k: "PV = what was PLANNED. Mnemonic: 'S goes with P' — Schedule variance compares EV to Planned Value." },
  "quality-plan": { d: "Defines how quality will be assured and controlled: the standards to meet, the metrics to track, the test types to run, and who checks what. Quality planning asks 'how will we prove this is good?' before the work even starts.", t: "'Which test finds the breaking point?' = stress test. 'Which confirms the customer accepts it?' = UAT (user acceptance testing)." },
  "recommendation": { d: "The business case's conclusion: which option the organization should choose, backed by the financial overview and analysis. It reflects ROI, risk, and strategic fit together — not just the cheapest price tag." },
  "resource-types": { d: "Human (people and skills), physical (equipment, materials, facilities), and capital (money). Resources can be internal vs. external, and shared vs. dedicated — shared resources create scheduling conflicts the PM must actively manage." },
  "rf-docs": { d: "The vendor-discovery sequence in order of commitment: RFI (Request for Information — 'tell us what's possible'), RFP (Request for Proposal — 'propose a solution'), RFQ/RFB (Request for Quote/Bid — 'give us your price'). Match the document to how well the scope is known.", k: "Unknown solution → RFP; known scope, want price → RFB/RFQ; just researching → RFI." },
  "risk-identify": { d: "Finding what could help or hurt the project before it happens. Common techniques: brainstorming, checklists, expert interviews, SWOT analysis, and reviewing lessons learned from past projects. An unidentified risk cannot be managed." },
  "risk-plan": { d: "Deciding how risk will be handled across the project: identify risks and opportunities, analyze them qualitatively and quantitatively, plan responses, and keep monitoring. Risk planning covers threats AND opportunities — not just the scary stuff.", t: "Memorize the 4 threat strategies (Avoid, Mitigate, Transfer, Accept) and 4 opportunity strategies (Exploit, Enhance, Share, Accept). Risk is future (risk register); issue is now (issue log)." },
  "rule-100": { d: "The 100% Rule: the WBS must capture 100% of the project work — nothing more, nothing less. If work isn't in the WBS, it isn't in the project; if it's in the WBS, it must deliver genuine project value." },
  "scope-baseline": { d: "The approved snapshot of scope, made of three parts: detailed scope statement + WBS + WBS dictionary. All future scope performance is measured against it, and any change to it must go through formal change control.", k: "Three baselines exist: scope, schedule, and cost — each needs change control to modify." },
  "scope-plan": { d: "The planning work that defines exactly what IS and IS NOT in the project: detailed scope statement, WBS, WBS dictionary, and scope baseline. Sloppy scope planning is the number one cause of scope creep later.", t: "Planning-phase questions love the WBS rules (100% rule, 8/80 rule) and baselines, which are approved and change-controlled." },
  "scoring-model": { d: "A project selection tool: list decision criteria, score each candidate project against each criterion, and rank by total score. It turns a political debate about 'which project is best' into a structured, defensible comparison." },
  "stakeholder-analysis": { d: "Evaluating each stakeholder's power, interest, influence, and expectations in order to plan engagement. Common tools: the power/impact grid and the salience model. Remember the split: the register is the phone book, analysis is understanding the people.", k: "Registry = documents WHO they are; analysis = evaluates WHAT they want and how much influence they carry." },
  "stakeholder-register": { d: "The log of stakeholder information: name, role, contact details, requirements, and expectations. It documents who the stakeholders are — but analyzing their influence and expectations is a separate step (stakeholder analysis)." },
  "three-point": { d: "Estimate three numbers — optimistic (O), most likely (M), pessimistic (P) — and compute the weighted average: (O + 4M + P) / 6. It accounts for uncertainty instead of betting everything on a single guess.", k: "PERT = (O + 4M + P) / 6 — the most-likely estimate gets 4x the weight." },
  "top-down": { d: "Estimate the total project cost or duration first, then break it down into smaller pieces. Fast and cheap, but the least accurate technique — best for early, rough estimates when detail is still scarce.", k: "Top-down = total first (fast, rough); Bottom-up = pieces first (slow, accurate)." },
  "tuckman": { d: "Bruce Tuckman's five stages of team development: Forming, Storming, Norming, Performing, Adjourning. Teams don't start out productive — they mature through conflict into trust. The PM's leadership style must adapt to whichever stage the team is in.", k: "Order: Form, Fight, Function, Fly, Farewell — Forming, Storming, Norming, Performing, Adjourning.", t: "Memorize the five stages in order — Forming, Storming, Norming, Performing, Adjourning — and how the PM's role shifts at each stage." },
  "vendor-mgmt": { d: "Enforcing contracts, monitoring vendor performance against SLAs, resolving issues, and keeping communication lines open. The PM manages the relationship day to day; the SOW is what settles disputes about what was actually promised." },
  "wbs-dict": { d: "The companion document to the WBS: a detailed description of every work package — owner, deliverables, acceptance criteria, cost, and schedule information. If a work package isn't in the dictionary, it isn't clearly defined." },
  "weighting-factor": { d: "Reflects each criterion's relative importance in a scoring model — not all criteria matter equally. Each project's raw score per criterion is multiplied by that criterion's weight, then summed; weights usually total 100%. Without weighting, a project could win on trivial criteria alone." },
  "work-package": { d: "The lowest level of the WBS — a small, outcome-based chunk of work with its own cost and schedule estimate. Rule of thumb: each work package should represent roughly 8 to 80 hours of effort (the 8/80 rule)." },
  "root": { d: "CompTIA Project+ (PK0-005) is the entry-level IT project management certification: it covers managing the full project life cycle for small-to-medium IT projects, in both Waterfall and Agile. The exam has up to 95 questions (multiple choice + performance-based) in 90 minutes. Four domains: Project Management Concepts (33%), Project Life Cycle Phases (30%), Tools and Documentation (19%), Basics of IT and Governance (18%)." }
};
/* ================= LANGUAGE (EN/VI) ================= */
var LANG_KEY = "pk0005_lang_v1";
var LANG = "en";
try { var _savedLang = localStorage.getItem(LANG_KEY); if(_savedLang === "vi" || _savedLang === "en") LANG = _savedLang; } catch(e){}
function saveLang(){ try { localStorage.setItem(LANG_KEY, LANG); } catch(e){} }

/* VI dataset (injected): per node id -> { l_vi, d_vi, k_vi, t_vi } */
