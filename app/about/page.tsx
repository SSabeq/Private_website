import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { SimplePage } from "@/components/shared/SimplePage";
import { aboutContent } from "@/content/about";

export const metadata: Metadata = {
  title: "About Me | Dominik Jasiński",
  description: "Background, values, education, skills, and current focus.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <SimplePage content={aboutContent} />
    </PageShell>
  );
}
