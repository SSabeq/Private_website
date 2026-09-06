import type { SimplePageContent } from "@/types/content";

export const aboutContent: SimplePageContent = {
  intro: {
    eyebrow: "About Me",
    title: "A multidisciplinary builder working with code, hardware and design.",
    description:
      "I like building stuff around useful technical systems: embedded interfaces, automation tools, CAD prototypes, web design, and personal performance.",
  },
  sections: [
    {
      title: "Short biography",
      items: [
        {
          title: "Technical direction",
          description:
            "My work sits between mechatronics, automation, embedded systems, CAD, and practical business operations.",
        },
        {
          title: "Builder profile",
          description:
            "I like projects where software has to meet a real workflow, a physical device, or a measurable result.",
        },
      ],
    },
    {
      title: "Current focus",
      items: [
        {
          title: "Current focus",
          description:
            "Embedded interfaces, Python/Raspberry Pi systems, automation workflows, CAD prototypes, and AI-supported productivity.",
        },
      ],
    },
    {
      title: "Values and work style",
      items: [
        {
          title: "Useful before flashy",
          description: "I prefer tools that reduce friction, clarify data, or make a process easier to repeat.",
        },
        {
          title: "Measured iteration",
          description: "I like small prototypes, visible feedback, and improving systems through testing.",
        },
        {
          title: "Clear communication",
          description: "Good technical work should be understandable to engineers, clients, recruiters, and operators.",
        },
      ],
    },
    {
      title: "Selected skills",
      items: [
        {
          title: "Software",
          description: "Python, TypeScript, Excel/VBA, SQLite, reporting, validation, and local-first tools.",
        },
        {
          title: "Hardware and engineering",
          description: "Raspberry Pi, GPIO, STM32, ADC, UART, measurement, CAD, 3D printing, and prototyping.",
        },
        {
          title: "Design and operations",
          description: "Figma, web content, SEO basics, service operations, pricing, branding, and client workflow.",
        },
      ],
    },
  ],
  cta: {
    title: "Want the short version?",
    description: "Follow the projects from early business experience to software, hardware, and prototypes.",
    primary: { label: "Explore the timeline", href: "/projects" },
    secondary: { label: "View Automation", href: "/ai-automation" },
  },
};
