// The joke about the demo — replacement entry.
// The program writes the joke to /output/entry.txt, where make.fun's gate
// scorer checks it is UTF-8 text of 1 to 280 Unicode code points.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A concrete little scene in three beats: a week of rehearsing one click,
// a live-stage escalation of update demanding restart, and the twist —
// the restart resurrects the rehearsal itself, and that is what gets funded.
const SETUP =
  "For our big demo, I rehearsed one perfect click for a week.";
const ESCALATION =
  "Live on stage, the app demanded an update, the update demanded a restart,";
const TWIST =
  "and the restart autoplayed my rehearsal video — yesterday's me, clicking perfectly. The investors funded the recording and asked if it scaled.";

const JOKE = [SETUP, ESCALATION, TWIST].join(" ");

// The gate counts Unicode code points, not bytes or UTF-16 units.
const codePoints = [...JOKE].length;
if (codePoints < 1 || codePoints > 280 || JOKE.trim().length === 0) {
  throw new Error(`entry.txt would fail the gate: ${codePoints} code points`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
console.log(JOKE);
console.log(`code points: ${codePoints}`);
