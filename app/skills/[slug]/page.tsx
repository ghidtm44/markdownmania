import Link from "next/link";
import { notFound } from "next/navigation";
import { CopySamplePrompt } from "@/components/CopySamplePrompt";
import { DownloadSkillLink } from "@/components/DownloadSkillLink";
import { MarkdownBody } from "@/components/MarkdownBody";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import {
  getAllSkills,
  getSkillBySlug,
  getSkillSlugs,
  skillAgentPrompt,
} from "@/lib/skills";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getSkillSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const skill = getSkillBySlug(slug);
  if (!skill) return { title: "Not found" };
  return {
    title: skill.title,
    description: skill.description || undefined,
  };
}

export default async function SkillPage({ params }: Props) {
  const { slug } = await params;
  const skill = getSkillBySlug(slug);
  if (!skill) notFound();

  const related = getAllSkills().filter((s) => s.slug !== slug).slice(0, 3);
  const pasteText = skillAgentPrompt(skill);

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <Link
          href="/#skills"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-[var(--color-acc-royal)] transition-colors duration-200 hover:text-[var(--color-acc-orange)]"
        >
          <span aria-hidden className="text-lg leading-none">
            ←
          </span>
          Skill library
        </Link>

        <article className="relative mt-8 overflow-hidden rounded-2xl border border-slate-200/80 bg-white acc-card-shadow">
          <span
            className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[var(--color-acc-cyan)] via-[var(--color-acc-yellow)] to-[var(--color-acc-orange)]"
            aria-hidden
          />
          <header className="border-b border-slate-100 bg-gradient-to-br from-[color-mix(in_srgb,var(--color-acc-cyan)_14%,white)] via-white to-[color-mix(in_srgb,var(--color-acc-orange)_6%,white)] px-6 py-9 sm:px-10 sm:py-10">
            <p className="acc-label text-[var(--color-acc-royal)]">
              TMT Solutions Engineering · ACCelerants Specialist SE · Agent skill
            </p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--color-acc-royal-deep)] sm:text-4xl">
              {skill.title}
            </h1>
            {skill.description ? (
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                {skill.description}
              </p>
            ) : null}
          </header>

          <div className="border-b border-slate-100 bg-white px-6 py-7 sm:px-10">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="acc-label text-slate-500">Skill file</h2>
                <p className="mt-1 text-sm text-slate-600">
                  Download the file to add under{" "}
                  <code className="rounded border border-slate-200/80 bg-slate-50 px-1 font-mono text-xs">
                    skills/
                  </code>{" "}
                  in your agent project. Your sample prompt still references the
                  same path for consistency.
                </p>
              </div>
              <DownloadSkillLink slug={skill.slug} className="shrink-0 self-start sm:self-center" />
            </div>

            <div className="mt-7 rounded-2xl border border-slate-200/70 bg-[color-mix(in_srgb,var(--color-acc-cyan)_10%,white)] p-5 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="acc-label text-[var(--color-acc-royal-deep)]">
                  Sample prompt for your agent
                </h2>
                <CopySamplePrompt text={pasteText} />
              </div>
              <p className="mt-3 text-xs leading-relaxed text-slate-600">
                Paste into Claude Code (or your agent). It references this skill
                file and states the task—tune for your customer or demo org.
              </p>
              <pre className="mt-4 max-h-[min(24rem,50vh)] overflow-auto whitespace-pre-wrap rounded-xl border border-slate-200/80 bg-white p-4 font-mono text-[13px] leading-relaxed text-slate-800 shadow-inner">
                {pasteText}
              </pre>
            </div>
          </div>

          <div className="bg-[color-mix(in_srgb,var(--color-acc-page)_55%,white)] px-6 py-8 sm:px-10 sm:py-10">
            <div className="rounded-xl border border-slate-200/60 bg-white px-5 py-7 sm:px-8 sm:py-8">
              {skill.content ? (
                <MarkdownBody content={skill.content} />
              ) : (
                <p className="text-slate-500 italic">
                  Add markdown content below the frontmatter for best practices
                  and step-by-step guidance.
                </p>
              )}
            </div>
          </div>
        </article>

        {related.length > 0 ? (
          <section className="mt-12">
            <h2 className="acc-label text-slate-500">More skills</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {related.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/skills/${s.slug}`}
                    className="inline-flex rounded-full border border-slate-200/90 bg-white px-3.5 py-1.5 text-sm font-semibold text-slate-700 shadow-sm transition duration-200 hover:border-[var(--color-acc-cyan)] hover:text-[var(--color-acc-royal)]"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </main>
      <SiteFooter />
    </>
  );
}
