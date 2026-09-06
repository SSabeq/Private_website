import {
  BadgeCheck,
  Binary,
  Boxes,
  BriefcaseBusiness,
  Cpu,
  DraftingCompass,
  FileSpreadsheet,
  Gauge,
  Laptop,
  PanelsTopLeft,
  Ruler,
  ServerCog,
  Trophy,
  Wrench,
} from "lucide-react";
import type { Project, SkillGroup } from "@/types/project";

export const projects: Project[] = [
  {
    id: "raspberry-pi-tank-controller",
    date: "2025",
    title: "Raspberry Pi Tank Level Monitoring Controller",
    category: "Embedded / Python / Industrial GUI",
    tags: ["Python", "Tkinter", "Raspberry Pi", "GPIO", "Serial", "SQLite", "PDF Export"],
    status: "Prototype",
    accent: "mono",
    summary:
      "A touchscreen/button-controlled monitoring interface for tank level sensors with data logging and exports.",
    detail: {
      overview:
        "A practical industrial-style controller concept for reading tank level sensors, displaying status on a local GUI, logging measurements, and exporting structured reports.",
      outcomes: [
        "Local-first interface suited for touchscreen and physical-button operation.",
        "Structured data logging path for SQLite-backed historical records.",
        "Export-ready reporting flow for maintenance and operations use.",
      ],
      nextSteps: [
        "Add production screenshots and wiring photos.",
        "Document sensor calibration and enclosure decisions.",
      ],
    },
  },
  {
    id: "excel-vba-automation-system",
    date: "2024",
    title: "Excel/VBA Automation System",
    category: "Business Automation",
    tags: ["Excel", "VBA", "Data Processing", "Reporting", "Validation"],
    status: "Built",
    accent: "mono",
    summary:
      "Automated processing of dealer files, order templates, validation, document numbering, and repetitive administrative workflows.",
    detail: {
      overview:
        "A set of Excel and VBA tools for reducing manual administrative work, improving validation, and standardizing repeatable reporting and order-processing tasks.",
      outcomes: [
        "Reduced repetitive copy/paste workflows into repeatable macros.",
        "Added validation and numbering logic for cleaner business documents.",
        "Created a foundation for future Python or web-based automation.",
      ],
      nextSteps: [
        "Collect before/after workflow metrics.",
        "Add redacted screenshots of the generated outputs.",
      ],
    },
  },
  {
    id: "stm32-adc-labview-test-system",
    date: "2024",
    title: "STM32 / ADC / LabVIEW Test System",
    category: "Embedded / Measurement",
    tags: ["STM32H7", "C", "ADC", "UART", "LabVIEW", "Data Logging"],
    status: "Built",
    accent: "mono",
    summary:
      "Embedded data acquisition and debugging work involving STM32, ADC readings, GUI communication, and logging.",
    detail: {
      overview:
        "Embedded measurement work focused on collecting analog readings, communicating with a desktop GUI, and debugging the end-to-end data path from firmware to logs.",
      outcomes: [
        "Implemented measurement and communication paths for ADC data.",
        "Used UART and LabVIEW-side tooling to inspect and log data.",
        "Created a repeatable debugging loop across firmware and GUI layers.",
      ],
      nextSteps: [
        "Add oscilloscope captures or charts.",
        "Summarize firmware architecture and communication protocol.",
      ],
    },
  },
  {
    id: "fit2u-custom-shoe-prototype",
    date: "2023",
    title: "Fit2U Custom Shoe Prototype",
    category: "CAD / Product Development",
    tags: ["CAD", "3D Printing", "Photogrammetry", "Foot Measurement", "Prototyping"],
    status: "Concept",
    accent: "mono",
    summary:
      "Prototype concept for custom wide sneakers using measurement extraction, CAD modelling, and 3D printed tooling/prototypes.",
    detail: {
      overview:
        "A product-development concept for making better-fitting wide sneakers through measurement extraction, CAD iteration, and practical prototyping.",
      outcomes: [
        "Mapped a path from physical measurements to digital model constraints.",
        "Explored tooling and prototype options with 3D printing.",
        "Connected product thinking with manufacturing constraints.",
      ],
      nextSteps: [
        "Add CAD renders and prototype photos.",
        "Clarify the measurement workflow and tolerance strategy.",
      ],
    },
  },
  {
    id: "wadi-rum-camp-website-marketing",
    date: "2023",
    title: "Wadi Rum Camp Website / Marketing",
    category: "Web / Business",
    tags: ["Figma", "Web Design", "SEO", "Tourism", "Content"],
    status: "Operational",
    accent: "mono",
    summary:
      "Digital presence and marketing work for a Wadi Rum camp, including web and visual content direction.",
    detail: {
      overview:
        "A business-facing web and content project focused on making tourism services easier to discover, understand, and book.",
      outcomes: [
        "Worked across visual direction, content structure, and practical SEO.",
        "Balanced business goals with visitor trust and clarity.",
        "Created groundwork for stronger conversion tracking and booking flows.",
      ],
      nextSteps: [
        "Add live link or case-study screenshots.",
        "Include traffic, booking, or ranking improvements when available.",
      ],
    },
  },
  {
    id: "mobile-detailing-business",
    date: "2022",
    title: "Mobile Detailing Business",
    category: "Business / Operations",
    tags: ["Service Business", "Branding", "Sales", "Operations"],
    status: "Operational",
    accent: "mono",
    summary:
      "Practical experience running a service business, handling clients, tools, pricing, and local marketing.",
    detail: {
      overview:
        "Hands-on operating experience building and running a service business, from client communication and pricing to workflow discipline and local marketing.",
      outcomes: [
        "Managed real customer expectations, scheduling, and service delivery.",
        "Built practical intuition for pricing, tools, and repeatable operations.",
        "Connected brand presentation with local sales and trust-building.",
      ],
      nextSteps: [
        "Add brand assets and service package examples.",
        "Capture lessons learned as a short operations case study.",
      ],
    },
  },
];

export const skillGroups: SkillGroup[] = [
  {
    name: "Software",
    icon: Laptop,
    skills: [
      { name: "Python", relatedProjectIds: ["raspberry-pi-tank-controller"] },
      { name: "Tkinter", relatedProjectIds: ["raspberry-pi-tank-controller"] },
      { name: "SQLite", relatedProjectIds: ["raspberry-pi-tank-controller"] },
      { name: "TypeScript", relatedProjectIds: ["wadi-rum-camp-website-marketing"] },
      { name: "Figma", relatedProjectIds: ["wadi-rum-camp-website-marketing"] },
      { name: "VBA", relatedProjectIds: ["excel-vba-automation-system"] },
    ],
  },
  {
    name: "Embedded / Hardware",
    icon: Cpu,
    skills: [
      { name: "STM32H7", relatedProjectIds: ["stm32-adc-labview-test-system"] },
      { name: "ADC", relatedProjectIds: ["stm32-adc-labview-test-system"] },
      { name: "UART", relatedProjectIds: ["stm32-adc-labview-test-system"] },
      { name: "Raspberry Pi", relatedProjectIds: ["raspberry-pi-tank-controller"] },
      { name: "GPIO", relatedProjectIds: ["raspberry-pi-tank-controller"] },
      { name: "LabVIEW", relatedProjectIds: ["stm32-adc-labview-test-system"] },
    ],
  },
  {
    name: "CAD / Engineering",
    icon: DraftingCompass,
    skills: [
      { name: "CAD Modelling", relatedProjectIds: ["fit2u-custom-shoe-prototype"] },
      { name: "3D Printing", relatedProjectIds: ["fit2u-custom-shoe-prototype"] },
      { name: "Photogrammetry", relatedProjectIds: ["fit2u-custom-shoe-prototype"] },
      { name: "Measurement", relatedProjectIds: ["stm32-adc-labview-test-system", "fit2u-custom-shoe-prototype"] },
      { name: "Prototyping", relatedProjectIds: ["fit2u-custom-shoe-prototype", "raspberry-pi-tank-controller"] },
    ],
  },
  {
    name: "Business / Operations",
    icon: BriefcaseBusiness,
    skills: [
      { name: "Automation", relatedProjectIds: ["excel-vba-automation-system"] },
      { name: "Reporting", relatedProjectIds: ["excel-vba-automation-system"] },
      { name: "Branding", relatedProjectIds: ["mobile-detailing-business", "wadi-rum-camp-website-marketing"] },
      { name: "Sales", relatedProjectIds: ["mobile-detailing-business"] },
      { name: "SEO", relatedProjectIds: ["wadi-rum-camp-website-marketing"] },
      { name: "Operations", relatedProjectIds: ["mobile-detailing-business", "excel-vba-automation-system"] },
    ],
  },
];

export const heroSignals = [
  { label: "Python", value: "Control UI", icon: Binary },
  { label: "STM32", value: "ADC / UART", icon: Cpu },
  { label: "Raspberry Pi", value: "GPIO", icon: ServerCog },
  { label: "VBA", value: "Ops macros", icon: FileSpreadsheet },
  { label: "CAD", value: "Prototype", icon: Ruler },
  { label: "Figma", value: "Web systems", icon: PanelsTopLeft },
];

export const quickStats = [
  { label: "Primary mode", value: "Build + validate", icon: Gauge },
  { label: "Project style", value: "Practical systems", icon: Wrench },
  { label: "Training lens", value: "Bodybuilding / Ironman", icon: Trophy },
  { label: "Portfolio state", value: "Version 0.1", icon: BadgeCheck },
  { label: "Domains", value: "Code / hardware / business", icon: Boxes },
];
