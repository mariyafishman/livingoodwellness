# Design notes

Research and decisions behind the visual direction. The short version lives in the
Design section of [AGENTS.md](AGENTS.md); this file holds the references so future
sessions don't redo the research. No client personal details belong here.

## Direction: warm editorial

One experienced practitioner in a calm home studio. Cream paper instead of clinical white,
deep pine green as the "ink", a small amount of clay for the actions that matter (call, text),
a warm serif for headlines and a plain sans for everything else. Rounded photo tiles, generous
whitespace, large type. Nothing glossy, nothing that reads as a chain or a resort.

## Palette

| Token | Light | Dark | Use |
|-------|-------|------|-----|
| `background` / `paper` | cream / deeper cream | pine-charcoal / slightly lighter | page and alternating section bands |
| `primary` | pine green | light sage-green | headings accents, primary buttons, butterfly upper wings, membership card |
| `sage` / `secondary` | pale sage | muted green | soft tiles, highlighted rows, the "Meet Mariya" band |
| `clay` | terracotta | lighter terracotta | eyebrow labels, call/text icons, butterfly lower wings. Use sparingly. |
| `muted-foreground` | warm grey-green | warm light grey | secondary text, always ≥ 4.5:1 on its surface |

All values are in `src/routes/layout.css` as oklch. Do not hardcode colors in components.

## Type

- **Fraunces Variable** (`@fontsource-variable/fraunces`) for h1–h4 and prices, optical size 144, SOFT 50.
  Warm and slightly old-fashioned, which suits her; still crisp at 24px.
- **Inter Variable** for body, labels and navigation.
- Base size 17px on phones, 18px from tablets up (`html { font-size }`). Lead paragraphs use `text-lg`/`text-xl`.
- Buttons are larger than stock shadcn (`default` 40px, `lg` 48px) for tap targets.

## Savee references (looked at, 2026-09-01)

Kept:
- Mayple branding (Behance, saved by @kugis) — warm cream tiles, rust and forest accents, serif headlines: the closest match to the whole feel.
- Folk Wellness (Dribbble, @kikoseiz) — pine green + oat + mustard, "A good balanced life" type lockup; confirmed the pine/cream pairing.
- Casa Morimi (Behance) — botanical mark over a simple wordmark, olive palette; informed the mark-plus-two-line wordmark.
- Beige wave and linen still lifes (Good Flower Farm, rawpixel beige) — texture reference for the paper/sage bands.
- Butterfly wing macro (redbubble "wing") — the warm/dark two-tone became the two-color placeholder mark.

Rejected:
- Hyperice / Soma / Technomex — cool tech-minimal, reads as a clinic or a gadget.
- Oxygen Wellness — neon, playful, too young.
- Botanical Lofts / dark floral Chanel — moody luxury, the opposite of a home studio.
- Plain white spa minimal — generic.

## Mobbin patterns borrowed (structure only)

- **Ease** healthcare hero: big serif headline, one abstract tile next to a rounded photo → home hero with the sage caption tile.
- **Kalstore** founder panel: solid color panel beside a portrait → "Meet Mariya" band.
- **Function** membership card: one price, checklist, single button → membership card on home and services.
- **Fresha** service list rows: name · duration · price, tall tappable rows → single-session and package lists.
- **Monte** contact block: Contact / Opening hours / Find us in three columns → footer and contact page grid.
- **Headspace** practitioner bio: portrait plus long-form first-person text → About page.

## Imagery rules

- Mariya's own photo (`src/lib/assets/mariya.jpg`) on About and the home glimpse; the OG image is generated from it.
- One stock photo only (home hero) until her studio and working photos arrive; subject is hands-on therapeutic work in a plain room.
- No hot stones, orchids, robes, candles, resort pools. No AI-generated people.
- Photos sit in `rounded-3xl` tiles; sage tiles with the butterfly stand in where a second photo would be.

## Placeholder logo

`src/lib/assets/logo.svelte` and `favicon.svg` are a stand-in butterfly: two mirrored leaf-shaped
upper wings in `currentColor`, smaller lower wings in `--clay`, a thin vertical "balance" axis for
the body. Replace both files with her real mark when it arrives; nothing else references the paths.
