"use client";

import { useCallback, useState } from "react";

type Props = { text: string; label?: string };

export function CopySamplePrompt({ text, label = "Copy prompt" }: Props) {
  const [state, setState] = useState<"idle" | "copied" | "error">("idle");

  const onCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setState("copied");
      window.setTimeout(() => setState("idle"), 2000);
    } catch {
      setState("error");
      window.setTimeout(() => setState("idle"), 2000);
    }
  }, [text]);

  return (
    <button
      type="button"
      onClick={onCopy}
      className="shrink-0 rounded-full border border-[color-mix(in_srgb,var(--color-acc-orange)_45%,#e2e8f0)] bg-gradient-to-b from-white to-[color-mix(in_srgb,var(--color-acc-orange)_8%,white)] px-4 py-2 text-xs font-bold text-[var(--color-acc-royal-deep)] shadow-sm transition duration-200 hover:border-[var(--color-acc-orange)] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-acc-cyan)] active:scale-[0.97]"
    >
      {state === "copied" ? "Copied" : state === "error" ? "Try again" : label}
    </button>
  );
}
