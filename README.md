# The Tired Dark Lord: A 100-Word Villain Monologue

[![Bounty](https://make.fun/badge/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb.svg)](https://make.fun/competitions/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb)
[![Rank](https://make.fun/badge/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb/Junior-Coding-ID/tired-dark-lord-monologue/rank.svg)](https://make.fun/competitions/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb)
[![Reward](https://make.fun/badge/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb/Junior-Coding-ID/tired-dark-lord-monologue/reward.svg)](https://make.fun/competitions/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb)

Entry for the [make.fun bounty "The Tired Dark Lord: A 100-Word Villain Monologue"](https://make.fun/competitions/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb).

## What it does

`main.ts` writes a single 100-word monologue to `entry.txt` in the output
directory (`$MAKEFUN_OUTPUT`, default `/output`). The monologue is spoken by
Voss of Holt, keeper of the register of names for King Rusk — a villain with
a scheme (erase every name but his own) whose tiredness leaks out in small
deflections, a misplaced cloth and a forgotten errand, never in a plain
statement that he is weary.

## The monologue

> I kept the register of names for King Rusk. When he erased my wife's name, only the keeper remembered her. Even her dog forgot. I, Voss of Holt, shall erase every name except mine. Only my ink can return them, and I require an oath of allegiance. Where is that cloth? The blue... forgive me, I'm holding it. Captain, come closer. No, don't bother. This cloth has wiped your name from the register. I had meant to demonstrate on Rusk himself. You'll suffice. Now go home to your daughter. If she still calls you Father, bring me a better cloth.

Exactly 100 words, 543 characters — inside the gate of 1–600 characters.

## Run

```sh
MAKEFUN_OUTPUT=/tmp/out node main.ts
```

Requires Node 22.18 or later (runs TypeScript natively). The program
self-checks the word count (100) and the character gate (1–600) before
writing, and fails loudly if either is off.
