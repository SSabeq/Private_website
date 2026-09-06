import Link from "next/link";
import { siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-muted sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>© 2026 {siteConfig.name}. Technical portfolio.</p>
        <div className="flex flex-wrap gap-3">
          {siteConfig.contact.links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="focus-ring rounded-sm transition-colors hover:text-foreground"
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
