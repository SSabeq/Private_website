import type { SimplePageContent } from "@/types/content";

export const aiAutomationContent: SimplePageContent = {
  intro: {
    eyebrow: "AI & Automation",
    title: "Workflow automation, AI-supported productivity, and business process tools.",
    description:
      "This section is for work that reduces repetitive effort: Excel/VBA systems, Python automation, reporting flows, validation logic, and AI-assisted workflows.",
  },
  sections: [
    {
      title: "Automation areas",
      items: [
        {
          title: "Excel/VBA systems",
          description: "Dealer files, order templates, validation, document numbering, and repetitive reporting workflows.",
        },
        {
          title: "Python automation",
          description: "Local scripts, data processing, GUI helpers, exports, and repeatable business operations.",
        },
        {
          title: "AI workflows",
          description: "An area I'm exploring: using AI to support document processing, technical work, and everyday productivity.",
        },
      ],
    },
    {
      title: "How I approach automation",
      items: [
        {
          title: "Before and after",
          description: "Start by understanding the manual process, then identify what can be automated and what still needs human judgment.",
        },
        {
          title: "Validation and reliability",
          description: "Useful automation needs to account for bad input, missing data, duplicate records, and review steps.",
        },
      ],
    },
  ],
  cta: {
    title: "Automation is strongest when the business process is visible.",
    description: "Explore the projects that connect software to everyday operations and physical systems.",
    primary: { label: "Explore the timeline", href: "/projects" },
  },
};
