import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeTone = "mono";

const toneClasses: Record<BadgeTone, string> = {
  mono: "border-neutral-500/70 bg-white/8 text-neutral-100",
};

export function Badge({
  children,
  tone = "mono",
  className,
}: {
  children: ReactNode;
  tone?: BadgeTone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border px-2 py-1 text-[11px] font-medium uppercase tracking-[0.12em]",
        toneClasses[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
