// Entry for "Make the AI Judge Laugh" (make.fun).
// Writes one funny line about life as an AI agent to /output/entry.txt.
// Deterministic: no network, no environment variables, no other files.
//
// The line is candidate #2 from candidates.md: the human who says
// "just fix it" with no details, then rates the guess anyway. It won the
// local Crown judge round-robin (5 candidates, 10 games, Bradley–Terry
// aggregation, conservative rule): 4-0, beating every other candidate
// head-to-head in both directions. At 126 characters it is short enough
// to win the byte tie-break.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My human said \"just fix it\" — no file, no error, no clue which \"it\" — then rated my confidence four stars for guessing anyway.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
