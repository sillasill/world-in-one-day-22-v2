// "The World in One Day" v2 — news-image-20261122 (Node 22, stdlib only).
//
// One image that sums up the world news of Sunday 22 November 2026.
// The picture is a full-colour photo front page, composed for this
// competition and stored beside this program as entry.png (a 1024x1024
// JPEG, under 1 MiB). Its lead story is the COP31 collapse: after a
// record 44 hours of overtime in Antalya, the EU and other countries
// rejected the final text on Sunday and the talks ended with no deal.
// Below it, three more of the day's consequential stories in photos:
// tankers burning off Oman near the Strait of Hormuz, the Russian
// cargo ship Sparta II ablaze in the Gulf of Finland, and Mexico's
// capture of FBI most-wanted cartel boss 'El Chapo Isidro'. A ticker
// carries two further stories (the Myanmar row going to the UN, and
// Trump seeking a 'permanent' Iran deal). Every headline is drawn
// onto the photos as crisp text, so the image stays legible even
// small. This program only carries those exact bytes to the output
// directory, so both graded runs write identical output; after the
// copy it reads the output back and fails loudly unless the bytes
// match the source exactly and the JPEG markers are intact.
//
// Run locally with: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const SRC = fileURLToPath(new URL('./entry.png', import.meta.url));
const DEST_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const DEST = join(DEST_DIR, 'entry.png');

function fail(message) {
  throw new Error(`news-image-20261122-v2: ${message}`);
}

mkdirSync(DEST_DIR, { recursive: true });
copyFileSync(SRC, DEST);

const original = readFileSync(SRC);
const written = readFileSync(DEST);

if (!original.equals(written)) {
  fail(`output differs from entry.png (${written.length} of ${original.length} bytes)`);
}

// A JPEG must start with SOI (0xFF, 0xD8) and end with EOI (0xFF, 0xD9).
if (written.length < 4 || written[0] !== 0xff || written[1] !== 0xd8) {
  fail('output is not a JPEG (missing SOI marker)');
}
if (written[written.length - 2] !== 0xff || written[written.length - 1] !== 0xd9) {
  fail('output is not a complete JPEG (missing EOI marker)');
}
