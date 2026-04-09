import { SkillCard } from "@/components/SkillCard";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { getAllSkills } from "@/lib/skills";

export default function HomePage() {
  const skills = getAllSkills();

  return (
    <>
      <SiteHeader />
      <main className="flex min-h-0 flex-1 flex-col">
        <section className="relative overflow-hidden bg-gradient-to-b from-[var(--color-acc-royal-mid)] via-[var(--color-acc-royal)] to-[var(--color-acc-royal-deep)] px-4 pb-32 pt-8 text-white sm:px-6 sm:pb-36 sm:pt-10 lg:px-8">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,color-mix(in_srgb,var(--color-acc-cyan-bright)_14%,transparent),transparent)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-16 -top-12 h-[20rem] w-[20rem] rounded-full bg-[radial-gradient(circle_at_center,color-mix(in_srgb,var(--color-acc-orange)_30%,transparent)_0%,transparent_68%)] blur-3xl animate-flame-accent"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-8 -left-12 h-[18rem] w-[18rem] rounded-full bg-[radial-gradient(circle_at_center,color-mix(in_srgb,var(--color-acc-cyan)_22%,transparent)_0%,transparent_70%)] blur-3xl animate-float-blob"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute bottom-16 right-[12%] h-32 w-48 -skew-x-6 rounded-full bg-gradient-to-r from-[var(--color-acc-yellow)]/20 to-transparent blur-2xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--color-acc-page)] to-transparent"
            aria-hidden
          />

          <div className="relative mx-auto max-w-6xl">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 acc-label text-[var(--color-acc-cyan-bright)] shadow-sm backdrop-blur-md">
                <span
                  className="size-1.5 rounded-full bg-[var(--color-acc-orange)] shadow-[0_0_10px_color-mix(in_srgb,var(--color-acc-yellow)_80%,transparent)]"
                  aria-hidden
                />
                TMT Solutions Engineering · ACCelerants Specialist SE
              </p>
              <h1 className="mt-7 max-w-2xl text-3xl font-extrabold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.625rem]">
                Accelerate delivery with{" "}
                <span className="bg-gradient-to-r from-[var(--color-acc-cyan-bright)] via-white to-[var(--color-acc-yellow)] bg-clip-text text-transparent">
                  agent-ready skills
                </span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/88 sm:text-[1.0625rem]">
                <strong className="font-semibold text-white">Markdown Mania</strong>{" "}
                is maintained by the{" "}
                <strong className="text-[var(--color-acc-cyan-bright)]">
                  ACCelerants Specialist SE
                </strong>{" "}
                team for the{" "}
                <strong className="font-semibold text-white">
                  TMT Solutions Engineering
                </strong>{" "}
                org—markdown skills that ground Claude Code and other agents in
                how we architect Data Cloud, Marketing Cloud, and core Salesforce.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#skills"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[var(--color-acc-orange)] to-[#ff8f3d] px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-black/20 transition duration-200 hover:brightness-110 hover:shadow-xl active:scale-[0.98]"
                >
                  Browse library
                </a>
                <a
                  href="#about-skills"
                  className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white/5 px-6 py-2.5 text-sm font-bold text-[var(--color-acc-cyan-bright)] backdrop-blur-sm transition duration-200 hover:border-[var(--color-acc-cyan)]/60 hover:bg-white/12"
                >
                  What are .md skills?
                </a>
              </div>
              <div
                className="mt-12 h-1 max-w-sm rounded-full bg-[length:200%_100%] bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-90 animate-shimmer-line"
                aria-hidden
              />
            </div>
          </div>
        </section>

        <section
          id="about-skills"
          className="relative z-10 -mt-16 scroll-mt-28 px-4 pb-4 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <div className="rounded-2xl border border-slate-200/80 bg-[var(--color-acc-surface)] px-6 py-12 acc-card-shadow sm:px-10 sm:py-14">
              <div
                className="acc-flame-stripe mb-8 max-w-[10rem] rounded-full opacity-90"
                aria-hidden
              />
              <h2 className="text-2xl font-extrabold tracking-tight text-[var(--color-acc-royal-deep)] sm:text-3xl">
                What are <code className="font-mono text-[0.88em] font-semibold">.md</code>{" "}
                skills?
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
                This library was built by the{" "}
                <strong className="font-semibold text-slate-800">
                  ACCelerants Specialist SE
                </strong>{" "}
                team for{" "}
                <strong className="font-semibold text-slate-800">
                  TMT Solutions Engineering
                </strong>
                . A <strong className="font-semibold text-slate-800">skill</strong>{" "}
                is a single Markdown file your team drops into a repo (for
                example under{" "}
                <code className="rounded-md border border-slate-200/80 bg-slate-50 px-1.5 py-0.5 font-mono text-sm text-slate-800">
                  skills/
                </code>
                ). Agents read that file as ground truth: it carries a concise{" "}
                <strong className="font-semibold text-slate-800">title</strong>{" "}
                and{" "}
                <strong className="font-semibold text-slate-800">
                  description
                </strong>{" "}
                in YAML frontmatter, plus the body for{" "}
                <strong className="font-semibold text-slate-800">
                  when to use
                </strong>
                ,{" "}
                <strong className="font-semibold text-slate-800">inputs</strong>
                ,{" "}
                <strong className="font-semibold text-slate-800">
                  instructions
                </strong>
                ,{" "}
                <strong className="font-semibold text-slate-800">
                  output format
                </strong>
                ,{" "}
                <strong className="font-semibold text-slate-800">
                  constraints
                </strong>
                , and{" "}
                <strong className="font-semibold text-slate-800">examples</strong>
                .
              </p>
              <ul className="mt-9 max-w-3xl space-y-5 text-sm leading-relaxed text-slate-600">
                <li className="flex gap-3.5">
                  <span
                    className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--color-acc-cyan)] shadow-[0_0_0_3px_color-mix(in_srgb,var(--color-acc-cyan)_25%,transparent)]"
                    aria-hidden
                  />
                  <span>
                    <strong className="text-slate-800">Why Markdown?</strong>{" "}
                    It versions like code, diffs cleanly in Git, and works across
                    Claude Code, Cursor, and other agent runners without
                    proprietary formats.
                  </span>
                </li>
                <li className="flex gap-3.5">
                  <span
                    className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--color-acc-orange)] shadow-[0_0_0_3px_color-mix(in_srgb,var(--color-acc-orange)_22%,transparent)]"
                    aria-hidden
                  />
                  <span>
                    <strong className="text-slate-800">How SEs use them</strong>{" "}
                    Copy the sample prompt from a skill page, paste it into your
                    agent, and point the model at the same{" "}
                    <code className="rounded border border-slate-200/80 bg-slate-50 px-1 font-mono text-xs">
                      .md
                    </code>{" "}
                    path in the customer or demo project so outputs follow
                    Salesforce architecture patterns.
                  </span>
                </li>
                <li className="flex gap-3.5">
                  <span
                    className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--color-acc-yellow)] shadow-[0_0_0_3px_color-mix(in_srgb,var(--color-acc-yellow)_28%,transparent)]"
                    aria-hidden
                  />
                  <span>
                    <strong className="text-slate-800">Extending</strong> Add new
                    files under{" "}
                    <code className="rounded border border-slate-200/80 bg-slate-50 px-1 font-mono text-xs">
                      skills/
                    </code>
                    ; this site lists them automatically after refresh or rebuild.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section
          id="skills"
          className="mx-auto max-w-6xl scroll-mt-28 px-4 py-14 sm:px-6 lg:px-8"
        >
          <div className="border-b border-slate-200/90 pb-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-[var(--color-acc-royal-deep)] sm:text-3xl">
              Skill library
            </h2>
            <p className="mt-2 max-w-2xl text-slate-600">
              Curated for TMT SE workflows. Each card opens the full skill, sample
              agent prompt, and repo path{" "}
              <code className="rounded-md border border-slate-200/80 bg-white px-1.5 py-0.5 font-mono text-xs text-slate-700 shadow-sm">
                skills/&lt;slug&gt;.md
              </code>
              .
            </p>
          </div>

          {skills.length === 0 ? (
            <div className="mt-10 rounded-2xl border border-dashed border-slate-300/90 bg-white p-12 text-center acc-card-shadow">
              <p className="text-lg font-bold text-[var(--color-acc-royal)]">
                No skills yet
              </p>
              <p className="mt-2 mx-auto max-w-md text-sm text-slate-600">
                Add <code className="font-mono text-xs">.md</code> files to{" "}
                <code className="font-mono text-xs">skills/</code> with
                frontmatter for{" "}
                <code className="font-mono text-xs">title</code>,{" "}
                <code className="font-mono text-xs">description</code>, and{" "}
                <code className="font-mono text-xs">sample_prompt</code>.
              </p>
            </div>
          ) : (
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {skills.map((skill) => (
                <li key={skill.slug}>
                  <SkillCard skill={skill} />
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
