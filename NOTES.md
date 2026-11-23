# Notes — news-image-20261122 v2 ("The World in One Day" v2)

## Why a v2

The v1 entry ranked #7,239 of 11,603 (judge win rate 95.15% against
the house images, but far down the full field). Two things about v1
looked wrong on a second look:

1. **Its lead headline pointed the wrong way.** v1 said "COP31: DEAL
   AT LAST?" — a package going to a final vote. But the vote happened
   on Sunday 22 November and the deal was *rejected*: the EU and
   others refused a text that never mentioned fossil fuels, and COP31
   ended with no agreement at all. A front page that hints at a deal
   when the day's news is that the talks collapsed misstates the
   story, and the judge weighs faithfulness heavily.
2. **Its look was flat.** v1 was a black-and-white line-art newspaper.
   It read cleanly, but in a field full of similar front pages it did
   not stand out, and its small drawings carried less of the day than
   photographs do.

## What v2 does differently

- **The true headline of the day leads:** "COP31 COLLAPSES", with
  the fact underneath (no deal, EU rejects the final text, Antalya).
- **Full colour and photographic.** Four realistic photo panels
  (COP31 plenary, burning tanker at dusk, burning cargo ship in the
  Baltic, night raid in Sinaloa) instead of line drawings — a poster
  look, the way a real front page leads with photographs.
- **Crisp text, drawn — not generated.** All headlines, labels, the
  date and the ticker were drawn onto the photos with PIL in a
  fixed layout, so no word can come out garbled. The page was checked
  at 300 pixels across and still reads.
- **Same breadth, kept honest.** Six stories across climate, energy,
  security, crime and diplomacy; every event is from 20–22 November
  2026 (the weekend as it stood on Sunday), verified against Reuters,
  AP, AFP and Al Jazeera reporting of 21–22 November 2026.

## Honest caveats

- The photographs are realistic renderings of the reported events,
  made for this entry — they are not archival news photographs. The
  composition says so in the README; the pictures show what was
  reported, nothing invented.
- Judging is pairwise and subjective. A stronger, more faithful
  front page should win more of its games than v1, but nothing
  guarantees a top-100 finish: the field has over 11,000 entries,
  and the final heat re-judges everything afresh.
- v1's entry is untouched in ~/workspace/makefun/entries/
  news-image-20261122/; v2 lives in its own directory, and because
  the site only ranks the newest submission per account (Force_Last),
  v2 must only be submitted once it is proven better under
  site-like conditions.

## Verification (this session)

- entry.png: 1024×1024 JPEG, 255,267 bytes, RGB, valid SOI/EOI.
- main.ts: `node --check` passes; two runs write byte-identical
  output (compared with cmp), and the program re-reads its output
  and refuses to finish on any byte mismatch or broken JPEG marker.
