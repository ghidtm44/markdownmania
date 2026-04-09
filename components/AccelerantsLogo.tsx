import Image from "next/image";

const LOGO = "/branding/accelerants-logo.png";

type Props = {
  className?: string;
  /** Tailwind height class, e.g. h-10 sm:h-12 */
  sizeClass?: string;
  priority?: boolean;
  /** When true, adds a subtle shadow so the transparent PNG reads on blue gradients. */
  softEdge?: boolean;
};

export function AccelerantsLogo({
  className = "",
  sizeClass = "h-10 w-auto sm:h-12 md:h-14",
  priority = false,
  softEdge = true,
}: Props) {
  return (
    <span
      className={`inline-block max-w-full ${softEdge ? "acc-logo-soft" : ""}`}
    >
      <Image
        src={LOGO}
        alt="The ACCelerants"
        width={320}
        height={112}
        priority={priority}
        className={`max-h-full w-auto object-contain object-left ${sizeClass} ${className}`}
      />
    </span>
  );
}
