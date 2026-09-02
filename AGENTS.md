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

- UI is built with **shadcn-svelte**. Add components as needed. Feel free to edit the shadcn-svelte components to fit the design system since it is not a component library. It is how you build your component library.
- All design tokens live in `src/routes/layout.css`.
- Don't hardcode colors in components, use the theme variables instead and add new ones if needed.
- Every color variable should be defined in both light and dark mode.
- Make sure any UI you build is fully responsive, and looks good in both light and dark mode.

### Design direction

- **Vibe:** "warm editorial". One experienced, unhurried practitioner in a calm home studio: cream paper, pine-green ink, a touch of clay, serif headlines, rounded photo tiles, lots of air. Not a spa chain, not a resort, not a clinic. Full notes and references in [DESIGN.md](DESIGN.md).
- **Colors:** `primary` (pine) for headings accents, main buttons and the butterfly's upper wings; `sage`/`secondary` for soft tiles and bands; `clay` only for call/text actions, eyebrow labels and the butterfly's lower wings; `paper` for alternating section backgrounds. Body text is `foreground`, secondary text `muted-foreground`.
- **Type:** Fraunces Variable for headings and prices, Inter Variable for everything else. Base font size is 17–18px; audience skews older, so keep body text ≥ `text-base`, buttons `size="lg"` for primary actions, tap targets ≥ 44px.
- **Imagery:** Mariya's own photo on About and the home glimpse; one stock hero photo of hands-on therapeutic work until her photos arrive. No stones, orchids, robes or AI people. Photos in `rounded-3xl` tiles.
- **Logo:** `src/lib/assets/logo.svelte` and `favicon.svg` are a **placeholder** butterfly (two colors, plain paths). Swap in her real mark by replacing those two files only.
- **Do:** lead every page with a way to call/text and a way to book; keep information density low; use `container-page` for page width; make prices links.
- **Don't:** add health-outcome claims, spa-luxury adjectives, hardcoded colors, or new fonts; don't shrink type to fit.

## Git Commits & Branches

- Do **not** add the coding agent as a co-author on commits — no `Co-Authored-By` trailers, "Generated with" lines, or similar AI attribution in commit messages.
- No AI attribution in branch names either — don't prefix branches with `ai/`, `agent/`, or similar. Name branches after the change using conventional naming conventions.
- The same applies to PR titles and descriptions: describe the change, not the tool that made it.
- Write concise, conventional commit messages describing the change itself.
- Any non-trivial change — features, refactors, anything spanning multiple files or commits — goes on a feature branch with a PR; never push directly to `main`. Only trivial fixes may go to `main`, and only if explicitly asked.
- If you push more changes to a branch after its PR is opened, update the PR description so it still reflects the full change set.

## Keeping This File Updated

Treat AGENTS.md as living documentation. If a change you make invalidates anything here — new commands or scripts, moved directories, changed conventions, added dependencies or bindings — update this file in the same commit.
