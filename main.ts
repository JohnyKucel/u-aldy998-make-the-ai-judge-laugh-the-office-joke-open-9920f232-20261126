import { mkdirSync, writeFileSync } from "node:fs";

// One line, 122 characters: an office joke with a fresh turn —
// the office printer gets promoted for the very thing that makes
// everyone hate it, and the punch lands on the parking spot.
const ENTRY =
  "Our printer got promoted after jamming the all-hands meeting: HR called it setting boundaries and gave it my parking spot.";

// The gate allows 1 to 200 characters; refuse to write an entry that breaks it.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
