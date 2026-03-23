export interface Article {
  title: string;
  subtitle: string;
  image: string;
  imageAlt?: string;
  readTime: number;
  date: string;
  href: string;
}

export const featured: Article = {
  title: 'Computer Vision in Enterprise:',
  subtitle: 'How Modern Businesses Are Automating their Administrative Workforces',
  image: '/images/computer-vision.svg',
  imageAlt: 'Code on monitors',
  readTime: 5,
  date: 'Jul 2026',
  href: '/articles/computer-vision-enterprise',
};

export const recent: Article[] = [
  {
    title: 'Sovereignty Enters Centre Stage',
    subtitle: "What Canada's Leadership is doing to diversify from AI tech, and how you can prepare.",
    image: '/images/sovereignty.svg',
    imageAlt: 'Parliament Hill at night',
    readTime: 7,
    date: 'Jul 2026',
    href: '/articles/sovereignty-centre-stage',
  },
  {
    title: 'Agentic Workflows: The Next Frontier',
    subtitle: 'How autonomous AI agents are reshaping enterprise operations from the ground up.',
    image: '/images/agentic-workflows.svg',
    imageAlt: 'Agentic workflow diagram',
    readTime: 6,
    date: 'Jun 2026',
    href: '/articles/agentic-workflows',
  },
];

export const grid: Article[] = [
  {
    title: 'The Hidden Cost of Manual Data Entry',
    subtitle: 'A deep dive into how much time and money businesses are leaving on the table.',
    image: '/images/data-analytics.svg',
    readTime: 4,
    date: 'Jun 2026',
    href: '/articles/manual-data-entry-costs',
  },
  {
    title: 'LLMs in the Enterprise: What Actually Works',
    subtitle: 'Separating the hype from the deployments that are generating real returns.',
    image: '/images/llm-enterprise.svg',
    readTime: 8,
    date: 'May 2026',
    href: '/articles/llms-enterprise',
  },
  {
    title: 'Building a RAG Pipeline for Internal Docs',
    subtitle: 'A practical walkthrough of retrieval-augmented generation for enterprise knowledge bases.',
    image: '/images/agentic-workflows.svg',
    readTime: 10,
    date: 'May 2026',
    href: '/articles/rag-pipeline-internal-docs',
  },
  {
    title: 'AI Procurement: A Framework for 2026',
    subtitle: 'How to evaluate AI vendors without getting burned by overpromised demos.',
    image: '/images/data-analytics.svg',
    readTime: 6,
    date: 'Apr 2026',
    href: '/articles/ai-procurement-framework',
  },
  {
    title: 'The Quiet Automation of the Back Office',
    subtitle: 'Accounts payable, HR onboarding, compliance checks — all quietly being handed to AI.',
    image: '/images/computer-vision.svg',
    readTime: 5,
    date: 'Apr 2026',
    href: '/articles/back-office-automation',
  },
  {
    title: 'Canadian AI Policy: What Businesses Need to Know',
    subtitle: "The Artificial Intelligence and Data Act is coming. Here's how to get ahead of it.",
    image: '/images/sovereignty.svg',
    readTime: 7,
    date: 'Mar 2026',
    href: '/articles/canadian-ai-policy',
  },
  {
    title: 'Fine-Tuning vs Prompting: When to Use Which',
    subtitle: 'The decision tree every AI team needs before spinning up another training run.',
    image: '/images/llm-enterprise.svg',
    readTime: 5,
    date: 'Mar 2026',
    href: '/articles/fine-tuning-vs-prompting',
  },
  {
    title: 'Measuring ROI on Automation Projects',
    subtitle: 'The metrics that matter — and the ones that will mislead your board presentation.',
    image: '/images/data-analytics.svg',
    readTime: 6,
    date: 'Feb 2026',
    href: '/articles/measuring-automation-roi',
  },
  {
    title: 'When AI Fails: Lessons from Real Deployments',
    subtitle: 'What the post-mortems actually say — and why most teams repeat the same mistakes.',
    image: '/images/llm-enterprise.svg',
    readTime: 7,
    date: 'Jan 2026',
    href: '/articles/when-ai-fails',
  },
  {
    title: 'Data Governance in the Age of LLMs',
    subtitle: 'Who owns the output? Who owns the training data? Legal and operational answers for 2026.',
    image: '/images/data-analytics.svg',
    readTime: 5,
    date: 'Jan 2026',
    href: '/articles/data-governance-llms',
  },
  {
    title: 'Cloud vs On-Premise AI: A 2026 Decision Guide',
    subtitle: 'Latency, cost, compliance, and control — the four axes that should drive your infrastructure choice.',
    image: '/images/agentic-workflows.svg',
    readTime: 8,
    date: 'Dec 2025',
    href: '/articles/cloud-vs-on-premise-ai',
  },
  {
    title: 'The Enterprise AI Talent Gap',
    subtitle: 'Why companies are struggling to hire ML engineers — and what to do while you wait.',
    image: '/images/llm-enterprise.svg',
    readTime: 6,
    date: 'Nov 2025',
    href: '/articles/enterprise-ai-talent-gap',
  },
  {
    title: 'Prompt Engineering Is a Skill, Not a Hack',
    subtitle: 'How thoughtful prompting is quietly becoming one of the most valuable competencies in tech.',
    image: '/images/computer-vision.svg',
    readTime: 4,
    date: 'Nov 2025',
    href: '/articles/prompt-engineering-skill',
  },
  {
    title: 'Synthetic Data: The Quiet Enabler',
    subtitle: 'When real training data is scarce or sensitive, synthetic generation is filling the gap.',
    image: '/images/data-analytics.svg',
    readTime: 7,
    date: 'Oct 2025',
    href: '/articles/synthetic-data-enabler',
  },
];

export const all: Article[] = [featured, ...recent, ...grid];
