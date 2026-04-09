/** Client-safe: no Node APIs. Use for download links in UI. */
export function skillDownloadUrl(slug: string): string {
  return `/api/skills/${encodeURIComponent(slug)}/download`;
}
