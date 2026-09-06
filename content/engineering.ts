import type { SimplePageContent } from "@/types/content";

export const engineeringContent: SimplePageContent = {
  intro: {
    eyebrow: "Engineering",
    title: "Embedded systems, measurement, CAD, and prototypes with practical outcomes.",
    description:
      "This section collects work that connects software to hardware, physical measurements, prototypes, and technical interfaces.",
  },
  sections: [
    {
      title: "Focus areas",
      items: [
        {
          title: "Embedded systems",
          description: "STM32, ADC readings, UART communication, firmware debugging, and data logging.",
        },
        {
          title: "Raspberry Pi interfaces",
          description: "Python GUI concepts, GPIO control, serial communication, local databases, and exports.",
        },
        {
          title: "CAD and prototyping",
          description: "Measurement extraction, CAD modelling, 3D printing, tooling ideas, and product iteration.",
        },
      ],
    },
    {
      title: "Technical timeline",
      description: "A simple timeline of engineering-related project work.",
      items: [
        {
          title: "Raspberry Pi tank controller",
          description: "Industrial-style local interface for monitoring sensor data and exporting reports.",
          meta: "2025",
        },
        {
          title: "STM32 / ADC / LabVIEW system",
          description: "Data acquisition and logging work across firmware and a desktop measurement interface.",
          meta: "2024",
        },
        {
          title: "Fit2U shoe prototype",
          description: "CAD and product-development concept for custom wide sneakers.",
          meta: "2023",
        },
      ],
    },
  ],
  cta: {
    title: "Follow the work from one build to the next.",
    description: "Explore the complete project timeline, including automation, design, and business experiments.",
    primary: { label: "Explore the timeline", href: "/projects" },
  },
};
