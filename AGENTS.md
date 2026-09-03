# AGENTS.md

Guidance for AI coding agents working in this repository.

## Tech Stack

Refer to the README for the tech stack used in this project, and keep it updated if you add or remove dependencies.

## Agent Tooling

- You have access to the **Svelte MCP server** — use it for up-to-date Svelte 5 / SvelteKit 3 docs and to validate generated Svelte code.
- You have access to the **shadcn-svelte skills** — use them when adding or working with UI components.
- If any of these aren't available in your environment, prompt the user to install them before falling back to memory.
- The shadcn-svelte CLI (`npx shadcn-svelte@latest add …`) currently fails on this repo's SvelteKit 3 tsconfig (`$app/tsconfig`). Hand-write components in `src/lib/components/ui/<name>/` following the registry's shape instead (see `badge` and `separator` for examples).

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

The site is for one experienced massage therapist working from a calm room in her house. It should feel personal, calm and confident, with a little warmth and humor: not a chain, not a luxury spa, not a clinic. Read `docs/brand.md` before touching copy or imagery (the `docs/` folder is gitignored and private; never commit it).

### Direction: warm paper, fern green, a little marigold

Drawn from botanical and editorial branding references (deep greens on cream, hairline rules, big soft serifs, one bold accent) with a light Bauhaus influence: confident geometry (circles, one big block of color, an asymmetric "leaf" corner), clear hierarchy, no ornament. Bauhaus is an influence, not the theme; the result should still feel like her, not a poster.

- **Palette.** Warm paper background, ink-green text, fern green primary, sage tint for soft panels, marigold highlight used sparingly (active dot, badges, the butterfly's lower wings, one big decorative circle), terracotta `clay` reserved for tiny accents. Dark mode flips to near-black green with a light sage primary; marigold stays.
- **Type.** Fraunces (variable, `--font-display`) for all headings, prices and pull quotes, with `SOFT 60` for warmth; italics welcome for emphasis. DM Sans (`--font-sans`) for body and UI. Headings are tight (`-0.015em`) and large; body is 16–18px with relaxed leading. Eyebrows are small caps-tracked sans in primary (`eyebrow` utility).
- **Shape.** Pill buttons and badges. Cards and panels use `--radius` (0.75rem) with 1px `border` hairlines, no drop shadows. Photos get the `rounded-leaf` / `rounded-leaf-alt` shape (one large corner, `--radius-leaf`). Decorative circles in `highlight` or `secondary` at low opacity are the one allowed flourish.
- **Texture.** A faint SVG grain over the whole page (`body::after`, `--grain-opacity`). Nothing else.
- **Imagery.** Mariya's portrait and honest stock photos of hands, rooms, plants. No AI-generated people, no resort imagery. Treat photos as flat blocks with the leaf corner, never with shadows or gradients.
- **Bands.** The footer and closing calls to action sit on the deep `ink` surface with `ink-foreground` text and `inverse` / `inverse-outline` buttons.
- **Voice in UI.** Short, plain, first person where it's her speaking. Never "indulge", "pamper", or medical claims.

### Tokens

All tokens live in `src/routes/layout.css`, defined for both `:root` (light) and `.dark`. Beyond the standard shadcn set:

| Token | Use |
| --- | --- |
| `--highlight` / `--highlight-foreground` | Marigold accent. Badges, active-nav dot, small decorative shapes. |
| `--clay` / `--clay-foreground` | Terracotta. Tiny accents only. |
| `--ink` / `--ink-foreground` / `--ink-muted` | Deep green band surface (footer, closing CTA) and its text colors. |
| `--radius-leaf` | The large corner radius for the leaf image shape. |
| `--grain-opacity` | Strength of the paper grain overlay. |
| `--font-display` / `--font-sans` | Fraunces / DM Sans. |

Utilities defined there: `container-page` (page width and gutters), `eyebrow`, `rounded-leaf`, `rounded-leaf-alt`, `prose-brand` (long-form copy). Add new tokens to `layout.css` in both themes and list them here.

### Components

- UI is built with **shadcn-svelte**. The components in `src/lib/components/ui` are source we own; edit them freely to fit the design rather than overriding with classes. `button` has extra variants (`highlight`, `inverse`, `inverse-outline`) and larger sizes; `badge` has `highlight` and `inverse`.
- Site-level pieces live in `src/lib/components` (`header`, `footer`, `seo`, `hours-table`, `logo` in `src/lib/assets`).
- Don't hardcode colors in components; use the theme variables and add new ones if needed. Every color variable must be defined in both light and dark mode.
- Make sure any UI you build is fully responsive and looks good in both themes. Check focus states on the ink band as well as on paper.

### Content and config

- Facts, copy, prices and hours come from `docs/site-content.md`; the structured versions live in `src/lib/config/site.ts` (business, contact, hours, `bookingUrl`) and `src/lib/config/services.ts` (services and prices). Change data there, not in pages.
- Booking, payment, packages, membership and intake happen on MassageBook. Every "Book" action links to `/book`, which links out via `bookingUrl`.
- The site is fully static (`prerender = true` in `src/routes/+layout.ts`). No forms, no server code.

## Git Commits & Branches

- Do **not** add the coding agent as a co-author on commits — no `Co-Authored-By` trailers, "Generated with" lines, or similar AI attribution in commit messages.
- No AI attribution in branch names either — don't prefix branches with `ai/`, `agent/`, or similar. Name branches after the change using conventional naming conventions.
- The same applies to PR titles and descriptions: describe the change, not the tool that made it.
- Write concise, conventional commit messages describing the change itself.
- Any non-trivial change — features, refactors, anything spanning multiple files or commits — goes on a feature branch with a PR; never push directly to `main`. Only trivial fixes may go to `main`, and only if explicitly asked.
- If you push more changes to a branch after its PR is opened, update the PR description so it still reflects the full change set.

## Keeping This File Updated

Treat AGENTS.md as living documentation. If a change you make invalidates anything here — new commands or scripts, moved directories, changed conventions, added dependencies or bindings — update this file in the same commit.
