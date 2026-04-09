import Link from "next/link";
import { DownloadSkillLink } from "@/components/DownloadSkillLink";
import { skillAgentPrompt, type SkillMeta } from "@/lib/skills";

type Props = { skill: SkillMeta };

export function SkillCard({ skill }: Props) {
  const fullPrompt = skillAgentPrompt(skill);
  const detailHref = `/skills/${skill.slug}`;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white acc-card-shadow transition duration-300 hover:-translate-y-1 hover:border-slate-300/90">
      <span
        className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[var(--color-acc-cyan)] via-[var(--color-acc-yellow)] to-[var(--color-acc-orange)] opacity-90"
        aria-hidden
      />
      <div className="flex flex-1 flex-col p-6 pt-7">
        <Link
          href={detailHref}
          className="outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-acc-cyan)]"
        >
          <h2 className="text-base font-bold leading-snug tracking-tight text-[var(--color-acc-royal-deep)] transition-colors duration-200 group-hover:text-[var(--color-acc-royal)]">
            {skill.title}
          </h2>
        </Link>
        <div className="mt-2.5">
          <DownloadSkillLink slug={skill.slug} />
        </div>
        <Link
          href={detailHref}
          className="mt-3 flex flex-1 flex-col outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-acc-cyan)]"
        >
          {skill.description ? (
            <p className="line-clamp-2 flex-1 text-sm leading-relaxed text-slate-600">
              {skill.description}
            </p>
          ) : (
            <p className="flex-1 text-sm italic text-slate-400">
              Add a description in frontmatter.
            </p>
          )}
          {skill.samplePrompt ? (
            <div className="mt-4 rounded-xl border border-slate-200/60 bg-[color-mix(in_srgb,var(--color-acc-cyan)_9%,white)] p-3.5">
              <p className="acc-label text-[var(--color-acc-royal)]">
                Sample agent prompt
              </p>
              <p className="mt-2 line-clamp-3 whitespace-pre-wrap font-mono text-[11px] leading-snug text-slate-700">
                {fullPrompt}
              </p>
            </div>
          ) : (
            <p className="mt-4 text-xs text-slate-400">
              Add <code className="font-mono text-[0.7rem]">sample_prompt</code>{" "}
              in frontmatter.
            </p>
          )}
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[var(--color-acc-orange)] transition-all duration-200 group-hover:gap-2.5">
            Open skill
            <span
              aria-hidden
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            >
              →
            </span>
          </span>
        </Link>
      </div>
    </article>
  );
}
