import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PageShell({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <main id="main-content" tabIndex={-1} className={cn("mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8", className)}>{children}</main>;
}
