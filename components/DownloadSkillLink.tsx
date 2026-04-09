import { skillDownloadUrl } from "@/lib/skillDownload";

type Props = {
  slug: string;
  className?: string;
};

export function DownloadSkillLink({ slug, className = "" }: Props) {
  const href = skillDownloadUrl(slug);
  return (
    <a
      href={href}
      download={`${slug}.md`}
      className={`inline-flex items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--color-acc-orange)_40%,#e2e8f0)] bg-gradient-to-b from-white to-[color-mix(in_srgb,var(--color-acc-orange)_10%,white)] px-4 py-2 text-xs font-bold text-[var(--color-acc-royal-deep)] shadow-sm transition duration-200 hover:border-[var(--color-acc-orange)] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-acc-cyan)] active:scale-[0.98] sm:text-sm sm:px-5 ${className}`}
    >
      Download Skill
    </a>
  );
}
