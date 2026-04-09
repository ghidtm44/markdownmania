import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto flex min-h-[50vh] max-w-lg flex-col items-center justify-center px-4 py-20 text-center">
        <h1 className="text-2xl font-extrabold text-[var(--color-acc-royal-deep)]">
          Page not found
        </h1>
        <p className="mt-3 text-slate-600">
          That skill does not exist or was removed.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex rounded-full bg-gradient-to-r from-[var(--color-acc-orange)] to-[#ff8f3d] px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-black/15 transition duration-200 hover:brightness-110 active:scale-[0.98]"
        >
          Back home
        </Link>
      </main>
      <SiteFooter />
    </>
  );
}
