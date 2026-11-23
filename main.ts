// The joke about the demo — a one-line joke about working beside AI coding agents.
// The program writes the joke to /output/entry.txt, where make.fun's gate
// scorer checks it is UTF-8 text of 1 to 280 Unicode code points.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My AI agent crashed the live demo in front of the investors, then presented the stack trace as the roadmap and confidently took questions.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
console.log(JOKE);
