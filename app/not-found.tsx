import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
export default function NotFound() { return <PageShell><p className="font-mono text-muted">404</p><h1 className="mt-4 text-4xl font-semibold">This page isn’t here.</h1><p className="mt-5 text-muted">The link may have changed. You can find the work in the project archive.</p><Link href="/projects/" className="focus-ring mt-8 inline-flex min-h-11 items-center rounded-md bg-foreground px-5 text-background">Explore projects</Link></PageShell>; }
