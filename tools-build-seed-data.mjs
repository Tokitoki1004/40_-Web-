import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const appDir = path.dirname(fileURLToPath(import.meta.url));
const vaultDir = path.resolve(appDir, "..");
const termsDir = path.join(vaultDir, "10_苦手用語");
const outputPath = path.join(appDir, "seed-data.js");

const section = (text, heading) => {
  const match = text.match(new RegExp(`## ${heading}\\n\\n([\\s\\S]*?)(?=\\n## |$)`));
  return match ? match[1].trim() : "";
};

const firstText = (value) => value
  .split(/\n+/)
  .map((line) => line.replace(/^- /, "").trim())
  .find(Boolean) || "";

const fieldFromTags = (text) => {
  const line = text.match(/^#苦手用語\s+(.+)$/m)?.[1] || "";
  return line.match(/#(ストラテジ|マネジメント|テクノロジ)/)?.[1] || "";
};

const relatedValue = (related, label) => {
  const line = related.split("\n").find((item) => item.startsWith(`- ${label}`));
  return line ? line.replace(`- ${label}`, "").trim() : "";
};

const idFor = (page, name) => `${page}-${name}`
  .toLowerCase()
  .replace(/\s+/g, "-")
  .replace(/[^\w\-ぁ-んァ-ヶ一-龠]/g, "");

const files = (await fs.readdir(termsDir))
  .filter((file) => file.endsWith(".md") && !file.startsWith("_"))
  .sort((a, b) => a.localeCompare(b, "ja"));

const terms = [];
for (const file of files) {
  const text = await fs.readFile(path.join(termsDir, file), "utf8");
  const name = text.match(/^# (.+)$/m)?.[1] || file.replace(/\.md$/, "");
  const related = section(text, "関連");
  const pages = related.match(/p\.[0-9x]+/g) || ["p.xx"];
  const page = [...new Set(pages)].join(", ");
  const review = section(text, "復習ポイント");
  const hobby = review.split("\n").find((line) => line.includes("趣味でたとえると:"))?.replace(/^- 趣味でたとえると:\s*/, "") || firstText(section(text, "趣味でたとえると"));
  const examPoint = review.split("\n").find((line) => line.includes("試験で狙われるところ:"))?.replace(/^- 試験で狙われるところ:\s*/, "") || firstText(section(text, "試験で問われやすい点"));
  terms.push({
    id: idFor(pages[0], name),
    name,
    field: fieldFromTags(text),
    page,
    problem: relatedValue(related, "関連問題:"),
    summary: firstText(section(text, "ひとことで")),
    hobby,
    examPoint,
  });
}

await fs.writeFile(
  outputPath,
  `window.ITPASSPORT_SEED = ${JSON.stringify({ terms }, null, 2)};\n`,
  "utf8"
);
