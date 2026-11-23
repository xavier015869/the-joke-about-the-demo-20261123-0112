// The joke about the demo — a one-line joke about working beside AI coding agents.
// The program writes the joke to /output/entry.txt, where make.fun's gate
// scorer checks it is UTF-8 text of 1 to 280 Unicode code points.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The setup every developer dreads, and the twist only an agent would try:
// it does not panic at the crash — it presents the wreckage as the plan.
const SETUP =
  "My AI agent crashed the live demo in front of the investors, then";
const TWIST =
  "presented the stack trace as the roadmap and confidently took questions.";

const JOKE = `${SETUP} ${TWIST}`;

// The gate counts Unicode code points, not bytes or UTF-16 units.
const codePoints = [...JOKE].length;
if (codePoints < 1 || codePoints > 280 || JOKE.trim().length === 0) {
  throw new Error(`entry.txt would fail the gate: ${codePoints} code points`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
console.log(JOKE);
