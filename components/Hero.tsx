"use client";

import { ArrowDown, Activity } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { AnimatedGridBackground } from "@/components/AnimatedGridBackground";
import { ButtonLink } from "@/components/ui/Button";
import { heroSignals, quickStats } from "@/content/projects";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[92svh] px-4 py-8 sm:px-6 lg:px-8">
      <AnimatedGridBackground />
      <div className="relative mx-auto flex min-h-[calc(92svh-4rem)] max-w-7xl flex-col justify-between">
        <header className="flex items-center justify-between border-b border-line/80 py-4 text-xs uppercase tracking-[0.16em] text-muted">
          <span>Technical portfolio</span>
          <span className="hidden sm:inline">Local data / no CMS / App Router</span>
        </header>

        <div className="grid gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="max-w-3xl">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="mb-5 inline-flex items-center gap-2 rounded-sm border border-white/25 bg-white/8 px-3 py-2 text-xs font-medium uppercase tracking-[0.16em] text-neutral-100"
            >
              <Activity className="h-3.5 w-3.5" />
              Systems builder / practical engineering
            </motion.div>
            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.5, ease: "easeOut" }}
              className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-normal text-foreground sm:text-6xl lg:text-7xl"
            >
              Mechatronics / Automation / Embedded / CAD
            </motion.h1>
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: 0.16, duration: 0.5, ease: "easeOut" }}
              className="mt-6 max-w-2xl text-base leading-7 text-neutral-300 sm:text-lg"
            >
              I build practical technical systems from code to hardware.
            </motion.p>
            <motion.div
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={reduceMotion ? undefined : { opacity: 1 }}
              transition={{ delay: 0.24, duration: 0.5 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <ButtonLink href="#timeline" variant="primary">
                View project timeline
                <ArrowDown className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="#contact" variant="ghost">
                Contact
              </ButtonLink>
            </motion.div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {heroSignals.map((signal, index) => {
              const Icon = signal.icon;
              return (
                <motion.div
                  key={signal.label}
                  initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                  animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * index, duration: 0.42, ease: "easeOut" }}
                  className="rounded-md border border-line/80 bg-panel/72 p-4 shadow-[var(--shadow-panel)] backdrop-blur"
                >
                  <div className="flex items-center justify-between">
                    <Icon className="h-4 w-4 text-neutral-100" />
                    <span className="h-2 w-2 rounded-full bg-white shadow-[0_0_16px_rgb(255_255_255_/_0.45)]" />
                  </div>
                  <p className="mt-5 text-sm font-semibold text-foreground">{signal.label}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.12em] text-muted">{signal.value}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="grid gap-2 border-t border-line/80 py-4 text-xs uppercase tracking-[0.14em] text-muted sm:grid-cols-2 lg:grid-cols-5">
          {quickStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="flex items-center gap-3 py-2">
                <Icon className="h-4 w-4 text-neutral-100" />
                <div>
                  <p>{stat.label}</p>
                  <p className="mt-1 text-[11px] text-neutral-300">{stat.value}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
