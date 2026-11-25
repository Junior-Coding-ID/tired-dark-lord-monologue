import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Tired Dark Lord: A 100-Word Villain Monologue (v2)
// One monologue, exactly 100 words / 571 characters, spoken by Toren of Graysalt:
// a harbor lord who binds storm wraiths to drag a floating city down, whose
// tiredness leaks out in small deflections — a numb knuckle, a missed gear —
// never in a plain statement that he is weary.
// Counts verified at build time: 100 words, 571 characters (gate: 1-600).
const LINES = [
  "Shut the hatch, knight.",
  "This gale numbs my knuckles, and the winches screech loud enough already.",
  "Keep your writ rolled.",
  "Toren of Graysalt signs nothing.",
  "Your sky lords dumped foundry slag onto my harbor because hauling waste past the clouds cost coin.",
  "Nine winters I have bound storm wraiths to brass chains, dragging floating Oriel down toward the black reef.",
  "Lower that rune blade, please.",
  "Its hum drills behind my eyes.",
  "I meant to drown their council slow.",
  "Wait, did I oil the third gear?",
  "Too late.",
  "Hear the iron brake pin shearing?",
  "Stand clear.",
  "I am not catching it.",
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
