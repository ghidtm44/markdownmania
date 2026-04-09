import fs from "fs";
import { resolveSkillMarkdownFile } from "@/lib/skills";

type Ctx = { params: Promise<{ slug: string }> };

export async function GET(_request: Request, context: Ctx) {
  const { slug } = await context.params;
  const filePath = resolveSkillMarkdownFile(slug);
  if (!filePath) {
    return new Response("Not found", { status: 404 });
  }

  const buf = fs.readFileSync(filePath);
  const filename = `${slug}.md`;

  return new Response(buf, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Cache-Control": "public, max-age=60",
    },
  });
}
