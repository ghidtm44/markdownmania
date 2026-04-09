import "server-only";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const SKILLS_DIR = path.join(process.cwd(), "skills");

const SLUG_PATTERN = /^[a-zA-Z0-9_-]+$/;

/** Resolve filesystem path to a skill markdown file, or null if invalid / missing. */
export function resolveSkillMarkdownFile(slug: string): string | null {
  if (!SLUG_PATTERN.test(slug)) return null;
  const full = path.join(SKILLS_DIR, `${slug}.md`);
  if (!fs.existsSync(full)) return null;
  return full;
}

export type SkillMeta = {
  slug: string;
  title: string;
  description: string;
  samplePrompt: string;
  /** Repo-relative path shown to SEs, e.g. skills/foo.md */
  skillPath: string;
  content: string;
};

function parseSkillFile(slug: string, raw: string): SkillMeta {
  const { data, content } = matter(raw);
  const title =
    typeof data.title === "string" && data.title.trim()
      ? data.title.trim()
      : slug.replace(/-/g, " ");
  const description =
    typeof data.description === "string" ? data.description.trim() : "";
  const samplePromptRaw =
    typeof data.sample_prompt === "string"
      ? data.sample_prompt
      : typeof data.samplePrompt === "string"
        ? data.samplePrompt
        : "";
  const samplePrompt = samplePromptRaw.trim();
  return {
    slug,
    title,
    description,
    samplePrompt,
    skillPath: `skills/${slug}.md`,
    content: content.trim(),
  };
}

export function getSkillSlugs(): string[] {
  if (!fs.existsSync(SKILLS_DIR)) return [];
  return fs
    .readdirSync(SKILLS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getSkillBySlug(slug: string): SkillMeta | null {
  const full = path.join(SKILLS_DIR, `${slug}.md`);
  if (!fs.existsSync(full)) return null;
  const raw = fs.readFileSync(full, "utf8");
  return parseSkillFile(slug, raw);
}

export function getAllSkills(): SkillMeta[] {
  return getSkillSlugs()
    .map((slug) => getSkillBySlug(slug))
    .filter((s): s is SkillMeta => s !== null)
    .sort((a, b) => a.title.localeCompare(b.title));
}

/** Full text SEs can paste into Claude Code / agents: path + instructions. */
export function skillAgentPrompt(skill: SkillMeta): string {
  const pathLine = `Use the Markdown skill at \`${skill.skillPath}\`.`;
  if (!skill.samplePrompt) return pathLine;
  return `${pathLine}\n\n${skill.samplePrompt}`;
}
