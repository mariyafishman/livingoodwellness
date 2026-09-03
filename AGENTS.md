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

### Direction: "Balance, drawn boldly"

The site should feel like Mariya: one experienced person with time for you. Warm, direct, confident, a little playful. The visual language borrows a light touch of Bauhaus (circles, half-circles, flat color, clear grid) and softened neobrutalism (2px ink outlines, hard offset shadows, no blur, no gradients), on warm cream paper rather than white, so it reads as welcoming instead of loud. Reference mood: Folk Wellness (forest green + marigold + cream blocks), Mayple (editorial serif over sage/cream), Bauhaus circle posters.

### Palette (tokens in `src/routes/layout.css`, all defined for light and dark)

| Token | Light | Dark | Use |
|-------|-------|------|-----|
| `background` / `foreground` | warm cream / forest ink | deep forest / cream | page |
| `primary` | forest green | bright leaf green | main buttons, links, wing color |
| `accent` | marigold | marigold | the one Book CTA per view, highlights, underlines |
| `secondary` | sage | mid forest | soft cards, alternate bands |
| `peach` | blush peach | muted terracotta | at most one warm band per page |
| `leaf` | bright leaf | bright leaf | decorative shapes only |
| `forest` | deep forest | near-black forest | footer and dark bands |
| `ink` | forest ink | cream | 2px outlines and hard shadows (`shadow-hard`, `shadow-hard-lg`) |
| `muted` | sand | dim forest | eyebrows, secondary text backgrounds |

Rules: marigold is for the primary action and small highlights, never large text areas. Green is the workhorse. Never hardcode colors; add a token to both blocks if a new one is needed.

### Type

- Display: **Fraunces Variable** (`font-display`), weight 500, `SOFT 60, WONK 1`, tight tracking. Used for h1–h3, the tagline, prices and pull quotes. `font-display-soft` utility applies the full treatment.
- Body/UI: **Instrument Sans Variable** (`font-sans`). Buttons and nav are semibold with tight tracking.
- `eyebrow` utility: 12px uppercase sans with wide tracking, for section labels.
- Body text is 17px / 1.6. Headings use `text-wrap: balance`.

### Shape, spacing, texture

- Radius base 0.5rem; buttons `rounded-lg`, cards `rounded-xl`, badges pill. Circles and half-circles are the decorative vocabulary (logo, hero shapes, list markers).
- Outlines are 2px `border-ink`. Cards and buttons carry `shadow-hard` (3px) or `shadow-hard-lg` (6px); buttons lift on hover and press flat on active.
- Section rhythm: `section` utility (64px / 96px vertical), `container-site` (max 72rem). Alternate cream, sage, peach and forest bands; adjacent bands are separated by a 2px ink rule.
- Imagery: portrait of Mariya in a 2px ink frame with a hard shadow, offset by a Bauhaus circle in accent. Stock photos only, no AI-generated people, no resort imagery.
- No blur shadows, no gradients, no glassmorphism.

### Components

shadcn-svelte components in `src/lib/components/ui` are owned source and restyled: `button` (variants `default`, `accent`, `outline`, `secondary`, `ghost`, `link`), `card` (variants `default`, `flat`, `secondary`, `accent`, `peach`, `outline`), `badge`, `separator`. The shadcn CLI cannot parse this project's `$app/tsconfig`, so add new components by hand in the same style.

Logo: placeholder butterfly of Bauhaus circles in `src/lib/assets/logo.svelte` (theme-aware, `mono` prop) and `favicon.svg`.

## Git Commits & Branches

- Do **not** add the coding agent as a co-author on commits — no `Co-Authored-By` trailers, "Generated with" lines, or similar AI attribution in commit messages.
- No AI attribution in branch names either — don't prefix branches with `ai/`, `agent/`, or similar. Name branches after the change using conventional naming conventions.
- The same applies to PR titles and descriptions: describe the change, not the tool that made it.
- Write concise, conventional commit messages describing the change itself.
- Any non-trivial change — features, refactors, anything spanning multiple files or commits — goes on a feature branch with a PR; never push directly to `main`. Only trivial fixes may go to `main`, and only if explicitly asked.
- If you push more changes to a branch after its PR is opened, update the PR description so it still reflects the full change set.

## Keeping This File Updated

Treat AGENTS.md as living documentation. If a change you make invalidates anything here — new commands or scripts, moved directories, changed conventions, added dependencies or bindings — update this file in the same commit.
