import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Markdown Mania — TMT Solutions Engineering",
    template: "%s · Markdown Mania",
  },
  description:
    "Agent-ready .md skills for the TMT Solutions Engineering org, authored by the ACCelerants Specialist SE team—Data Cloud, Marketing Cloud, and core Salesforce patterns for Claude Code and similar tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className="flex min-h-dvh flex-col font-sans">{children}</body>
    </html>
  );
}
