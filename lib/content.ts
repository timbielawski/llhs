export const studio = {
  name: "Little Lions Head Studios",
  short: "Little Lions Head",
  email: "hello@littlelionshead.studio",
  location: "Cape Town",
  url: "https://littlelionshead.studio",
};

export const qualities = [
  {
    title: "Grounded",
    note: "An answer that can point to its source.",
  },
  {
    title: "Governed",
    note: "An agent sees only what it may.",
  },
  {
    title: "Owned",
    note: "The knowledge stays yours to move.",
  },
  {
    title: "Decision-grade",
    note: "Built for a decision, not a demo.",
  },
] as const;

export const line = [
  {
    number: "01",
    title: "Land",
    body: "Every source arrives raw and immutable. Nothing is lost, and nothing is trusted yet.",
  },
  {
    number: "02",
    title: "Model",
    body: "Cleansed, named, and structured. One model the organisation, and its agents, can read.",
  },
  {
    number: "03",
    title: "Govern",
    body: "Lineage, permissions, and the rules for what a person or an agent is allowed to see.",
  },
  {
    number: "04",
    title: "Decide",
    body: "Software, reports, and agents draw from the same governed products.",
  },
] as const;

export const services = [
  {
    slug: "data-engineering",
    number: "01",
    title: "Data Engineering",
    summary:
      "Reliable batch and streaming pipelines, governed platforms, and data trusted enough for reporting and for AI.",
    lede: "Every source has to land somewhere the organisation can trust. We design, build, and run that platform.",
    includes: ["Ingestion", "Platforms", "Quality", "Migration"],
    points: [
      {
        label: "Ingestion",
        body: "Databases, APIs, files, and streams. Landed raw, so history is not thrown away on the way in.",
      },
      {
        label: "The platform",
        body: "A lakehouse or warehouse the company can operate. Modelled once, readable by people and by agents.",
      },
      {
        label: "Quality",
        body: "Deduplication, tests, and contracts. A number that fails its check does not reach a decision.",
      },
      {
        label: "Migration",
        body: "Legacy estates moved with the meaning intact. Engineers approve the result. Evidence travels with the object.",
      },
    ],
  },
  {
    slug: "ai-engineering",
    number: "02",
    title: "AI Engineering",
    summary:
      "Production AI. Retrieval an agent can defend, workflows with a person in control, evaluation, and observability.",
    lede: "A model is not a system. We build the AI that sits on governed data, with a record of what it saw and what it did.",
    includes: ["Agents", "Retrieval", "Evaluation", "Observability"],
    points: [
      {
        label: "Agents",
        body: "Workflows with a boundary. The agent acts where it is allowed, and stops where a person has to decide.",
      },
      {
        label: "Retrieval",
        body: "Answers grounded in the organisation’s own knowledge, not in whatever the model happens to remember.",
      },
      {
        label: "Evaluation",
        body: "A way to know if the system got better. Cases, scores, and a record that survives the next release.",
      },
      {
        label: "Observability",
        body: "What ran, what it used, what it cost, and where it failed. Production AI without a black box.",
      },
    ],
  },
  {
    slug: "ai-tooling",
    number: "03",
    title: "AI Tooling",
    summary:
      "Software the organisation owns. Tools and agents that work from its knowledge, under its rules, and can be moved.",
    lede: "The useful version of AI is a tool a team can run. We build that software on knowledge the organisation owns.",
    includes: ["Knowledge models", "Agent tools", "Rules of access", "Interfaces"],
    points: [
      {
        label: "Knowledge",
        body: "The things the business is made of — customers, contracts, assets, obligations — named once and shared.",
      },
      {
        label: "Grounding",
        body: "Each fact keeps a path back to the document, record, or image it came from.",
      },
      {
        label: "Rules",
        body: "What an agent or a user may see is decided before the model speaks, and the decision is recorded.",
      },
      {
        label: "The tool",
        body: "Interfaces people actually use. Not a rented chat window with no memory of the organisation.",
      },
    ],
  },
  {
    slug: "analytics",
    number: "04",
    title: "Analytics",
    summary:
      "One semantic model behind every report. Structures that end fragmented logic, for people and for agents.",
    lede: "If every team defines the same word differently, the organisation cannot decide. We build the model they share.",
    includes: ["Semantic model", "Reporting", "Decision products", "Lineage"],
    points: [
      {
        label: "One model",
        body: "Metrics defined once. The report, the export, and the agent all read the same definition.",
      },
      {
        label: "Reporting",
        body: "Structures a business can run, instead of a stack of decks that disagree with each other.",
      },
      {
        label: "Decision products",
        body: "The few views a team needs in order to act. Built for the decision, not for the catalogue.",
      },
      {
        label: "Lineage",
        body: "A figure that can say where it came from. The same standard we hold the agents to.",
      },
    ],
  },
  {
    slug: "managed-services",
    number: "05",
    title: "Managed Services",
    summary:
      "Reliability as a practice. We keep the platforms and the tools running, so attention stays on the work.",
    lede: "Platforms decay when nobody owns them. We stay on the systems we build, and on the ones we inherit.",
    includes: ["Operations", "Improvement", "Cost", "Stewardship"],
    points: [
      {
        label: "Operations",
        body: "Pipelines, agents, and tools watched. Failures found before the Monday meeting finds them.",
      },
      {
        label: "Improvement",
        body: "The platform gets simpler as it runs. Cost, latency, and the parts nobody should be maintaining.",
      },
      {
        label: "Stewardship",
        body: "Someone who remembers why the model was shaped that way, and what the agent is allowed to touch.",
      },
      {
        label: "The long view",
        body: "A standing engagement. The organisation keeps the intelligence. We keep it working.",
      },
    ],
  },
] as const;

export type Service = (typeof services)[number];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export const cases = [
  {
    slug: "paintsmiths",
    number: "01",
    client: "Paintsmiths",
    sector: "Paint retail",
    title: "The store, on one system",
    summary:
      "Complaint and task software for The Paintsmiths stores. A record with photos, a task list that stays with the store, and an assistant that reads the complaints the organisation holds.",
    lede: "Staff log a complaint, follow it through status, and run the store’s own work from the same place. An account stays locked until someone grants it.",
    includes: ["Complaints", "Store tasks", "Assistant", "Push and email"],
    points: [
      {
        label: "The record",
        body: "A full complaint and a shorter one for the shop floor. Photos, a generated PDF, a status history, and a thread for acknowledgement, notes, and insufficient information.",
      },
      {
        label: "The store",
        body: "Tasks belong to the store. Shared lists, a person’s own lists, and follow-up work attached to a complaint. A user with no store does not see them.",
      },
      {
        label: "The assistant",
        body: "A chat that answers questions and filters the complaint set. The same queries are available to an agent, on data the organisation holds.",
      },
      {
        label: "The rhythm",
        body: "Status changes go out by email and web push. Insufficient complaints close after a set number of days. What is still open has a weekly view.",
      },
    ],
  },
  {
    slug: "dekro",
    number: "02",
    client: "Dekro",
    sector: "Head office",
    title: "Every complaint reaches head office",
    summary:
      "Dekro is the head office the stores report to. The same complaint becomes Dekro’s work, with a reference, a report, and a weekly view of what is still open.",
    lede: "The store and the manufacturer are not keeping separate copies. Whoever files the complaint, Dekro receives the work, under rules the system holds.",
    includes: ["One record", "Dekro reference", "Weekly view", "Access"],
    points: [
      {
        label: "One record",
        body: "Every complaint also becomes a task for Dekro. Head office works the same object the store filed, not a forwarded version of it.",
      },
      {
        label: "The reference",
        body: "A Dekro number and a Dekro report sit on the complaint, so head office can answer in its own language and point back to the source.",
      },
      {
        label: "The week",
        body: "Pending and insufficient complaints go to Dekro on a schedule, each with a link to the record.",
      },
      {
        label: "Access",
        body: "Store staff see their store. Dekro sees the work that belongs to head office. The boundary is in the system.",
      },
    ],
  },
  {
    slug: "xaref",
    number: "03",
    client: "Xaref",
    sector: "AI software",
    title: "How the models talk about you",
    summary:
      "A platform for how AI systems describe a brand. Visibility against competitors, a report the organisation can keep, and the documents and decisions that sit beside the evidence.",
    lede: "Xaref measures what the models say, how often they say it, and whether they favour a rival. The organisation owns the record.",
    includes: ["Visibility", "Presence reports", "Datarooms", "Decisions"],
    points: [
      {
        label: "Visibility",
        body: "How often models mention the brand against a competitor set, for the prompts that define the category. Citations, co-mentions, and rankings in one place.",
      },
      {
        label: "The report",
        body: "Voice, share of voice, and sentiment versus competitors, written up as a PDF. Generated when it is needed, or on a schedule.",
      },
      {
        label: "The record",
        body: "Document sharing and datarooms, so the evidence stays with the organisation and a visitor is known.",
      },
      {
        label: "The decision",
        body: "A place to ask, review, and keep the decision next to the evidence it used. The model is not the system of record.",
      },
    ],
  },
] as const;

export type CaseStudy = (typeof cases)[number];

export function getCase(slug: string) {
  return cases.find((item) => item.slug === slug);
}

export const studies = [
  {
    number: "01",
    title: "A platform that can be trusted",
    kicker: "Data",
    body: "Sources land raw. The model is shared. Quality fails closed. Reports and agents read the same products, and a figure can say where it came from.",
  },
  {
    number: "02",
    title: "Tools the organisation owns",
    kicker: "AI tooling",
    body: "Knowledge named in the language of the business, grounded in the source, and governed before an agent speaks. The software runs where the organisation runs. It can be moved.",
  },
  {
    number: "03",
    title: "One model for the decision",
    kicker: "Analytics",
    body: "The word means the same thing in the report, the board pack, and the agent. Fragmented logic is retired, not papered over with another dashboard.",
  },
] as const;

export const roles = [
  {
    title: "Data engineer",
    body: "Pipelines, models, and platforms. You care that a number can be traced, and that a failure is loud.",
  },
  {
    title: "AI engineer",
    body: "Agents, retrieval, and evaluation. You have put a model into production and stayed to see what it did.",
  },
  {
    title: "Software engineer",
    body: "The tools people use. Interfaces and services that sit on governed knowledge, and still feel considered.",
  },
  {
    title: "Engagement lead",
    body: "You keep the work moving and the scope honest. The difference between a demo and a system the organisation can run.",
  },
] as const;

export const nav = [
  { href: "/work", label: "Work" },
  { href: "/outcomes", label: "Outcomes" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
] as const;
