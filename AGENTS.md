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

**Style in one line:** a warm, modern, editorial look for one experienced practitioner. Cream paper, big plain sans-serif headlines, soft butter and lilac colour blocks, one deep green doing all the work, generous whitespace, and a small rainbow watercolour butterfly taken from the studio's business card. Confident but unhurried; friendly, not precious. It should feel closer to a well-designed independent studio than to a spa, a clinic or a template.

**How it is built:** a page is a stack of full-width bands and rounded colour blocks with hairline lists in between. Every page opens on a butter band that the header sits inside, and every page closes on the green studio card. Big type carries the hierarchy; there are no eyebrows, ribbons, icons-as-decoration, gradients, drop shadows (the one exception is the note on the portrait) or stock-photo backgrounds. Use this system for every page, not just the home page.

- **Feel:** one experienced person who has time for you. Calm, confident, a little warm. Not a spa, not a clinic. Plain headings, no eyebrow labels, no ribbons or sticker notes, no italic accent words. The only italic is Mariya's own hand-written note on the portrait.
- **Palette (light):** cream `#FAFAF2` page, butter `#E8EBB2` and lilac `#DCD3E8` colour blocks, one deep green `#164E3E` for text, hairlines, buttons and the dark card; `#3F5A50` for secondary text. Mapped to semantic tokens in `src/routes/layout.css`: `background`/`foreground` = cream/green, `primary` = green on butter, `secondary` = butter, `accent` = lilac, `muted-foreground` = the soft green, `border` = green hairlines. Dark mode inverts the roles (green page, butter primary, mid-green `secondary`, deep-lilac `accent`). Always use the semantic tokens; never hardcode a hex in a component.
- **Type:** Manrope 800 for every heading and button (`font-display`), DM Sans for body (`font-sans`), Cormorant Garamond italic for the note only (`font-serif`). Fonts ship via `@fontsource-variable`. Utility classes in `layout.css`: `.display-1` (hero), `.display-2` (section titles), `.display-3` (card titles), `.row-title`, `.lead`, `.note`.
- **Rhythm:** 20px gutters on phones, 64px from `md`, 1440px max (`wrap` utility). Section gaps 64px / 112px (`section-gap`). Radii: 28px on colour blocks (`rounded-block`, 24px on phones), 20px on pricing cards (`rounded-lg`), 999px pills on buttons. Lists use 1px green hairlines (`border-t`/`border-b`), not cards.
- **Components:** `Button` is a pill with variants `default` (green), `secondary` (butter), `outline` (2px border in the current text colour, so it inverts on the green card), `ghost`, `link`. Header sits on a butter band that merges with each page's opening block. Footer is the green rounded card (studio heading, book button, address, hours, license, copyright, theme toggle). Butterfly logo is inline SVG in `src/lib/assets/logo.svelte` and `favicon.svg`, after the watercolour one on the business card: a mirrored pair of wings on a thin body, tilted 30 degrees, in the card's proportions (forewings swept out to the sides with the apex level with the top of the wing, rounded hindwings below, wider than tall); each side is one continuous silhouette with scalloped margins and faint veins, so there is no seam between forewing and hindwing. Each side is painted in layers through `<use>`: a forewing gradient along the wing (dark orange tip through yellow, green and aqua into blue on the left; teal through cyan into blue on the right), a hindwing gradient that fades in below it (deep blue on the left; lavender into magenta on the right), then pooled edges, a few pale patches and dark edge dots. Body and antennae are in `currentColor` so they follow the surrounding text. The wing colours are the one place a hex value is allowed outside `layout.css`, and the only gradients on the site; keep them identical in both files and in `static/og.png`. Gradient ids come from `$props.id()` because the logo renders several times per page. Decorative unless given a `label`.
- **Photos:** Mariya's portrait sits in a lilac circle (hero) or a rotated rounded rectangle (meet section). Stock photos only, no AI-generated people. Render content photos with `<enhanced:img>` (the `@sveltejs/enhanced-img` plugin is registered in `vite.config.ts`): give `src` the `#lib/...` path and a `sizes` attribute that describes how wide the slot renders, and let the plugin choose the widths; it emits AVIF/WebP/JPEG at each one. Only add `?w=` when the default widths are clearly wrong for a slot. The hero image keeps `fetchpriority="high"` and eager loading; everything below the fold is lazy. Plain `<img>` with a Vite URL import is only for things that are not photos (the favicon, `og.png`).
- **Shared page pieces** in `src/lib/components`: `page-intro` (butter opening band with title and lead), `portrait` (lilac circle, photo, note, butterfly), `service-list` (numbered hairline rows), `session-cards` (the three pricing stamps), `seo` (title, description, canonical, Open Graph) and `json-ld` (LocalBusiness, rendered once from the layout). Every page passes its own `title` and `description` to `SEO`. The Open Graph image is `static/og.png` (1200x630, same palette and type).
- Booking, packages and membership always link to `/book`, never straight to MassageBook.
- All design tokens live in `src/routes/layout.css`. Every colour variable is defined for both light and dark. Make every page responsive and check both themes.

## Git Commits & Branches

- Do **not** add the coding agent as a co-author on commits — no `Co-Authored-By` trailers, "Generated with" lines, or similar AI attribution in commit messages.
- No AI attribution in branch names either — don't prefix branches with `ai/`, `agent/`, or similar. Name branches after the change using conventional naming conventions.
- The same applies to PR titles and descriptions: describe the change, not the tool that made it.
- Write concise, conventional commit messages describing the change itself.
- Any non-trivial change — features, refactors, anything spanning multiple files or commits — goes on a feature branch with a PR; never push directly to `main`. Only trivial fixes may go to `main`, and only if explicitly asked.
- If you push more changes to a branch after its PR is opened, update the PR description so it still reflects the full change set.

## Keeping This File Updated

Treat AGENTS.md as living documentation. If a change you make invalidates anything here — new commands or scripts, moved directories, changed conventions, added dependencies or bindings — update this file in the same commit.
