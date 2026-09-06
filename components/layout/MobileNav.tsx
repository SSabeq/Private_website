"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import type { NavItem } from "@/types/content";
import { cn } from "@/lib/utils";

export function MobileNav({ items }: { items: NavItem[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-md border border-line bg-background text-foreground"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onKeyDown={(event) => { if (event.key === "Escape") setIsOpen(false); }}
        onClick={() => setIsOpen((current) => !current)}
      >
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </button>

      {isOpen ? (
        <div className="absolute inset-x-4 top-[4.25rem] rounded-lg border border-line bg-background p-2 shadow-sm">
          <nav id="mobile-navigation" className="grid gap-1" aria-label="Mobile navigation" onKeyDown={(event) => { if (event.key === "Escape") { setIsOpen(false); document.querySelector<HTMLButtonElement>('[aria-controls="mobile-navigation"]')?.focus(); } }}>
            {items.map((item) => {
              const isActive = pathname.replace(/\/$/, "") === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "focus-ring rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    isActive ? "bg-foreground text-background" : "text-muted hover:bg-muted-bg hover:text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
