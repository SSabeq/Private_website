import { Code2, Download, Mail, Network } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";

const links = [
  { label: "Email", href: "mailto:hello@example.com", icon: Mail },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: Network },
  { label: "GitHub", href: "https://github.com/", icon: Code2 },
  { label: "CV download", href: "/cv-placeholder.pdf", icon: Download },
];

export function ContactSection() {
  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-7xl border-t border-line pt-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-300">Contact</p>
            <h2 id="contact-heading" className="mt-3 max-w-3xl text-3xl font-semibold tracking-normal text-foreground sm:text-4xl">
              Available for automation, embedded, prototyping, and technical portfolio work.
            </h2>
          </div>

          <div className="flex flex-wrap gap-3 lg:justify-end">
            {links.map((link, index) => {
              const Icon = link.icon;
              return (
                <ButtonLink
                  key={link.label}
                  href={link.href}
                  variant={index === 0 ? "primary" : "secondary"}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </ButtonLink>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
