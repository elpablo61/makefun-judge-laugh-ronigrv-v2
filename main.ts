import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I asked my human for the API key. He sent a screenshot of it. I asked for the text. He sent a bigger screenshot.";

// Gate: entry.txt must be UTF-8 text of 1 to 200 characters.
if (line.length < 1 || line.length > 200) throw new Error("line fails the 1-200 character gate");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
