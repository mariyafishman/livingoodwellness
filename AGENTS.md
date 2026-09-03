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

The look is **Meadow Press**: warm editorial on cream paper. Personal, confident, a little handmade. Not a spa, not a clinic, not a component-library default.

- **Palette.** Bottle green `#1E4738` grounds it; butter `#F0D56A` and lilac `#C9B6DC` make it welcoming. Cream paper `#F4EFE4`, ink `#1C241C`. Tokens live in `src/routes/layout.css` (`:root` and `.dark`). Extra brand tokens: `--bottle`, `--bottle-deep`, `--butter`, `--lilac`, `--sage`, `--mint`, `--paper`, `--field` (footer band), `--on-field`. Map them through `@theme inline` and use utilities like `bg-butter`, `text-bottle`. Do not hardcode hex in components.
- **Type.** Manrope Variable for UI and display (800, tight tracking). Fraunces Variable italic for asides and whispers (`font-serif italic`). Body in Manrope 400–650.
- **Spacing and shape.** 8-based rhythm. Section padding ~56–72px (`wrap` plus `py-16` / `py-20`). Soft radii 20–36px (`--radius: 1.5rem`). Pills are fully round. Overlapping color fields instead of shadows. Audience tickets are uneven widths, never a three-card SaaS grid.
- **UI.** shadcn-svelte is the toolkit, not the look. Components in `src/lib/components/ui` are source we own — restyle variants, radius, and type to match Meadow Press. Buttons are full pills; primary is bottle (butter in dark), secondary is butter (lilac in dark).
- LocalBusiness JSON-LD lives in `src/routes/+layout.svelte`. Page titles and descriptions go through `src/lib/components/seo.svelte`.
- Every color variable is defined in both light and dark mode. The site must stay readable and on-brand in both.
- Make sure any UI you build is fully responsive.

## Git Commits & Branches

- Do **not** add the coding agent as a co-author on commits — no `Co-Authored-By` trailers, "Generated with" lines, or similar AI attribution in commit messages.
- No AI attribution in branch names either — don't prefix branches with `ai/`, `agent/`, or similar. Name branches after the change using conventional naming conventions.
- The same applies to PR titles and descriptions: describe the change, not the tool that made it.
- Write concise, conventional commit messages describing the change itself.
- Any non-trivial change — features, refactors, anything spanning multiple files or commits — goes on a feature branch with a PR; never push directly to `main`. Only trivial fixes may go to `main`, and only if explicitly asked.
- If you push more changes to a branch after its PR is opened, update the PR description so it still reflects the full change set.

## Keeping This File Updated

Treat AGENTS.md as living documentation. If a change you make invalidates anything here — new commands or scripts, moved directories, changed conventions, added dependencies or bindings — update this file in the same commit.
