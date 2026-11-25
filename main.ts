import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Tired Dark Lord: A 100-Word Villain Monologue
// One monologue, exactly 100 words / 543 characters, spoken by Voss of Holt:
// a villain with a scheme (erase every name but his own) whose tiredness
// leaks out in small deflections — a misplaced cloth, a forgotten errand —
// never in a plain statement that he is weary.
const LINES = [
  "I kept the register of names for King Rusk.",
  "When he erased my wife's name, only the keeper remembered her.",
  "Even her dog forgot.",
  "I, Voss of Holt, shall erase every name except mine.",
  "Only my ink can return them, and I require an oath of allegiance.",
  "Where is that cloth? The blue... forgive me, I'm holding it.",
  "Captain, come closer. No, don't bother.",
  "This cloth has wiped your name from the register.",
  "I had meant to demonstrate on Rusk himself. You'll suffice.",
  "Now go home to your daughter.",
  "If she still calls you Father, bring me a better cloth.",
];

function main(): void {
  const entry = LINES.join(" ");
  const words = entry.split(/\s+/).filter(Boolean).length;
  if (words !== 100) {
    throw new Error(`expected exactly 100 words, got ${words}`);
  }
  if (entry.length < 1 || entry.length > 600) {
    throw new Error(`entry must be 1-600 characters, got ${entry.length}`);
  }
  const outDir = process.env.MAKEFUN_OUTPUT ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), entry + "\n", "utf8");
}

main();
