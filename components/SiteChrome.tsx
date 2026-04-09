import Link from "next/link";
import { AccelerantsLogo } from "@/components/AccelerantsLogo";

export function SiteHeader() {
  return (
    <>
      <div className="relative overflow-visible bg-[var(--color-acc-royal)] bg-gradient-to-b from-[var(--color-acc-royal-mid)] to-[var(--color-acc-royal)] text-white shadow-[0_8px_28px_-10px_color-mix(in_srgb,var(--color-acc-royal-deep)_55%,transparent)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-3 rounded-xl outline-offset-4 transition hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/70"
          >
            <AccelerantsLogo priority softEdge sizeClass="h-11 w-auto sm:h-[3.35rem]" />
          </Link>
          <div className="flex flex-col items-start border-t border-white/10 pt-3 sm:border-t-0 sm:pt-0 sm:items-end sm:text-right">
            <span className="acc-label text-[var(--color-acc-cyan-bright)]">
              Markdown Mania
            </span>
            <span className="mt-1 max-w-md text-sm leading-snug text-white/88">
              TMT Solutions Engineering — from the ACCelerants Specialist SE team
            </span>
          </div>
        </div>
        <div className="acc-flame-stripe" aria-hidden />
      </div>
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-[color-mix(in_srgb,var(--color-acc-surface)_88%,transparent)] shadow-[0_1px_0_rgba(255,255,255,0.8),0_8px_24px_-10px_color-mix(in_srgb,var(--color-acc-royal-deep)_14%,transparent)] backdrop-blur-lg backdrop-saturate-150">
        <div className="mx-auto flex h-12 max-w-6xl items-center px-4 sm:px-6 lg:px-8">
          <nav
            className="flex flex-wrap items-center gap-1 sm:gap-2"
            aria-label="Primary"
          >
            <Link
              href="/"
              className="rounded-full px-3 py-1.5 text-sm font-semibold text-slate-600 transition-colors duration-200 hover:bg-[color-mix(in_srgb,var(--color-acc-orange)_12%,white)] hover:text-[var(--color-acc-royal-deep)]"
            >
              Home
            </Link>
            <Link
              href="/#about-skills"
              className="rounded-full px-3 py-1.5 text-sm font-semibold text-slate-600 transition-colors duration-200 hover:bg-[color-mix(in_srgb,var(--color-acc-cyan)_14%,white)] hover:text-[var(--color-acc-royal-deep)]"
            >
              About .md skills
            </Link>
            <Link
              href="/#skills"
              className="rounded-full px-3 py-1.5 text-sm font-semibold text-slate-600 transition-colors duration-200 hover:bg-[color-mix(in_srgb,var(--color-acc-orange)_12%,white)] hover:text-[var(--color-acc-royal-deep)]"
            >
              Library
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-[var(--color-acc-royal-deep)] bg-gradient-to-b from-[var(--color-acc-royal)] to-[var(--color-acc-royal-deep)] text-white">
      <div className="acc-flame-stripe opacity-95" aria-hidden />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-center sm:gap-6">
            <AccelerantsLogo softEdge sizeClass="h-11 w-auto sm:h-[3.25rem]" />
            <div className="max-w-md text-center text-sm leading-relaxed text-white/90 sm:text-left">
              <p>
                <strong className="font-semibold text-white">Markdown Mania</strong>{" "}
                — content created by the{" "}
                <strong className="font-semibold text-[var(--color-acc-cyan-bright)]">
                  ACCelerants Specialist SE
                </strong>{" "}
                team for the{" "}
                <strong className="font-semibold text-white">
                  TMT Solutions Engineering
                </strong>{" "}
                org. Skills ship as markdown in{" "}
                <code className="rounded-md bg-white/12 px-1.5 py-0.5 font-mono text-[0.7rem] text-[var(--color-acc-yellow)] sm:text-xs">
                  /skills
                </code>
                .
              </p>
            </div>
          </div>
          <p className="max-w-xs text-center text-xs leading-relaxed text-white/50 sm:text-right">
            Salesforce, Data Cloud, Marketing Cloud, and Agentforce are
            trademarks of Salesforce, Inc. Internal TMT SE enablement only.
          </p>
        </div>
      </div>
    </footer>
  );
}
