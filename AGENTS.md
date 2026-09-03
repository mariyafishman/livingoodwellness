# AGENTS.md

Guidance for AI coding agents working in this repository.

## Tech Stack

Refer to the README for the tech stack used in this project, and keep it updated if you add or remove dependencies.

## Agent Tooling

- You have access to the **Svelte MCP server** — use it for up-to-date Svelte 5 / SvelteKit 3 docs and to validate generated Svelte code.
- You have access to the **shadcn-svelte skills** — use them when adding or working with UI components.
- If any of these aren't available in your environment, prompt the user to install them before falling back to memory.

You are able to use the Svelte MCP server, where you have access to comprehensive Svelte 5 and SvelteKit documentation. Here's how to use the available tools effectively:

### Available Svelte MCP Tools:

#### 1. list-sections

Use this FIRST to discover all available documentation sections. Returns a structured list with titles, use_cases, and paths.
When asked about Svelte or SvelteKit topics, ALWAYS use this tool at the start of the chat to find relevant sections.

#### 2. get-documentation

Retrieves full documentation content for specific sections. Accepts single or multiple sections.
After calling the list-sections tool, you MUST analyze the returned documentation sections (especially the use_cases field) and then use the get-documentation tool to fetch ALL documentation sections that are relevant for the user's task.

#### 3. svelte-autofixer

Analyzes Svelte code and returns issues and suggestions.
You MUST use this tool whenever writing Svelte code before sending it to the user. Keep calling it until no issues or suggestions are returned.

#### 4. playground-link

Generates a Svelte Playground link with the provided code.
After completing the code, ask the user if they want a playground link. Only call this tool after user confirmation and NEVER if code was written to files in their project.

## Use Current Docs

Several parts of this stack evolve quickly and training data is often stale — when unsure about an API, check the official docs instead of guessing.

## Design

The look comes from the approved design canvas (Claude Design artifact "Livingood Wellness Center"), not from shadcn defaults. shadcn-svelte is the component toolkit; the components in `src/lib/components/ui` are source we own, so restyle, restructure or replace them to match the canvas rather than working around them.

### Direction

Warm paper, one deep green, one accent, and geometry. Bauhaus shows up as circles and quarter-circles, near-square corners, thin rules instead of shadows and a geometric sans; the serif and the cream keep it personal. It should feel like one experienced person with time for you: not a chain, not a spa, not a clinic.

### Tokens (`src/routes/layout.css`)

All colors are CSS variables defined for both `:root` (light) and `.dark`, mapped into Tailwind via `@theme inline`. Never hardcode a color in a component; add a token if one is missing and list it here.

| Token | Light | Dark | Use |
|---|---|---|---|
| `--background` / `--foreground` | Cream `#F4F0E6` / Ink `#1B231E` | Night `#131D17` / Bone `#EDE7DA` | Page |
| `--card` | Surface `#FBF9F4` | `#20302A` | Cards, price panels |
| `--primary` / `--primary-foreground` | Fir `#274A3A` / Cream | Mint `#B9D4BB` / Night | Primary buttons |
| `--secondary`, `--muted` | Linen `#EAE4D5` | `#1B2921` | Alternate sections, muted fills |
| `--muted-foreground` | `#525D55` | `#A8B2A9` | Body copy that recedes |
| `--accent` / `--accent-foreground` | Sage `#D3DFCF` / Fir | `#243A2E` / Mint | Hover fills |
| `--border`, `--input` | `#D6D0C1` | `#2F4237` | 1px rules |
| `--ring` | Fir | Mint | Focus outline |
| `--heading` | Fir | Bone | All display and heading text |
| `--eyebrow` | `#C88F2B` | `#E2AE4C` | Tracked uppercase labels, list numbers |
| `--ochre` / `--ochre-foreground` | `#D9A13B` / Ink | `#E2AE4C` / Night | Accent shapes, savings, the MassageBook button |
| `--shape` | Fir | Moss `#5F8467` | Large decorative green shapes |
| `--tint` / `--tint-foreground` | Sage / Fir | `#243A2E` / Mint | Image wells, tinted panels |
| `--band` / `--band-foreground` / `--band-muted` / `--band-line` | Fir / Cream / `#B9CBBE` / `#3E5F4E` | `#20302A` / Bone / `#A8B2A9` / `#34483C` | Full-bleed green sections |
| `--cta` | `#F2E2B8` | `#1B2921` | "Ready when you are" band, "Prefer to talk?" panel |
| `--footer` / `--footer-foreground` / `--footer-muted` / `--footer-line` | `#1B3529` / Bone / `#9DB3A4` / `#2F4A3D` | `#0E1712` / Bone / `#8FA396` / `#24352C` | Footer |

Tailwind class names follow the token names: `bg-band`, `text-band-foreground`, `bg-tint`, `text-eyebrow`, `bg-ochre`, `bg-cta`, `bg-footer`, `text-heading`, `bg-shape`.

### Type

- Display and headings: **Young Serif** (`font-serif`, `@fontsource/young-serif`), weight 400 only. Fallback Georgia.
- Body, labels, buttons: **Jost** (`font-sans`, `@fontsource-variable/jost`), weights 300–600. Fallback Futura / Century Gothic.
- Ramp (desktop): `text-display` 104px, `text-h1` 88px, `text-h2` 56px, `text-h3` 30px, `text-lead` 21px, `text-body` 17px, 15px small, `text-eyebrow` 13px tracked uppercase. Scale down on mobile (display 60px, h2 36px).
- Eyebrows: the `eyebrow` utility class (Jost 500, 13px, 0.16em tracking, uppercase, `--eyebrow`).

### Rhythm and shape

- 8px base. Sections `py-16 md:py-28` (64 / 112px). Page gutters via the `wrap` utility (1200px content, 120px margins at 1440, 24px on mobile). 12-column grid with 32px gaps on desktop.
- Radius: `--radius` is 4px and every shadcn radius step resolves to it. Circles (`rounded-full`) are the only other shape.
- 1px rules, no shadows. A 6% paper grain is tiled over `body`.
- Decorative marks are stroke or flat geometry (disc, half-disc, quarter-circle, bar, six dots, concentric rings), never emoji or icon-font glyphs. Lucide icons are for UI controls only.
- Buttons: `default` (fir / mint), `outline` (1.5px heading border), `ochre` (MassageBook), `link` (inline arrow link). Sizes `sm` 44px, `default` 52px, `lg` 56px, plus icon sizes.
- Logo: the butterfly in `src/lib/assets/logo.svelte` (recolour with `--logo-wing`, `--logo-lower`, `--logo-body` on a parent) and `favicon.svg`. Placeholder until the real mark arrives.
- Imagery: the portrait is `src/lib/assets/mariya.jpg`, shown in a circle or an arch. Stock photos are not chosen yet; where the canvas shows one, use a `tint` panel with the line-drawn frond (`photo-placeholder.svelte`). No AI-generated people.
- Every page must read well in both themes and at 390px, 768px and 1440px.

## Git Commits & Branches

- Do **not** add the coding agent as a co-author on commits — no `Co-Authored-By` trailers, "Generated with" lines, or similar AI attribution in commit messages.
- No AI attribution in branch names either — don't prefix branches with `ai/`, `agent/`, or similar. Name branches after the change using conventional naming conventions.
- The same applies to PR titles and descriptions: describe the change, not the tool that made it.
- Write concise, conventional commit messages describing the change itself.
- Any non-trivial change — features, refactors, anything spanning multiple files or commits — goes on a feature branch with a PR; never push directly to `main`. Only trivial fixes may go to `main`, and only if explicitly asked.
- If you push more changes to a branch after its PR is opened, update the PR description so it still reflects the full change set.

## Keeping This File Updated

Treat AGENTS.md as living documentation. If a change you make invalidates anything here — new commands or scripts, moved directories, changed conventions, added dependencies or bindings — update this file in the same commit.
