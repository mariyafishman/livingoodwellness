# AGENTS.md

Guidance for AI coding agents working in this repository.

## Tech Stack

Refer to the README for the tech stack used in this project, and keep it updated if you add or remove dependencies.

## Agent Tooling

- You have access to the **Svelte MCP server** — use it for up-to-date Svelte 5 / SvelteKit 3 docs and to validate generated Svelte code.
- You have access to the **shadcn-svelte skills** — use them when adding or working with UI components.
- If any of these aren't available in your environment, prompt the user to install them before falling back to memory. The `svelte-autofixer` MCP tool can also be run from the terminal with `npx @sveltejs/mcp svelte-autofixer <file>`.
- `.claude/launch.json` defines a `dev` server (Vite, port 5173) and a `preview` server (built output, port 4173) for the in-app browser.

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

### Direction: "the neighborhood broadside"

Chosen 2026-09-02 after inspiration research (Savee: risograph and letterpress posters, one-line hand illustrations, circular-text badges, warm single-ink editorial sites; Mobbin: contact/hours sections of small local businesses, founder-story pages). The idea: the site is a **two-ink risograph flyer printed by one careful person**, the kind you'd pin up at the Hudson library. One practitioner, one ink. Not a spa template, not a clinic, not a card grid.

- **Paper and ink.** Light mode is warm cream paper with dark brick-brown ink. Dark mode flips them (ink-dark paper, cream ink). A second riso ink, sunflower yellow (`--sun`), is the only accent and is the same in both modes. No gradients, no shadows, no glassmorphism.
- **Type.** `Young Serif` for display (heavy, soft, friendly, legible for seniors), `Inter Variable` for body at an 18px base, `IBM Plex Mono` for labels, prices, hours and marginalia. Real scale contrast: display sizes are big, labels are small and tracked.
- **Layout.** A single ruled column like a printed sheet: hairline rules between sections, section numerals in the margin, dotted leaders on price lists, an asymmetric 8/4 split on desktop with margin notes in the narrow column. Content is left-aligned and unhurried; whitespace is generous.
- **Photos.** Every photo gets the duotone print treatment (`.duotone` in `layout.css`: grayscale, shadows in ink, highlights in paper) so stock shots and phone snapshots read as one printed set. Blend modes are token-driven and flip with the theme.
- **Marks.** The butterfly logo is two inks with a slight misregistration (yellow fill offset under an ink outline). Circular "stamp" text (`stamp.svelte`) is the one decorative motif; a faint paper grain sits over the page.
- **Copy.** Plain, warm, a little funny, first person on About. Describe who a session is for and what happens, never outcomes.
- **Avoid.** Icon-in-a-circle cards, uniform rounded tiles, hero-photo-right layouts, coloured CTA bands, stock spa clichés.

### Rules

- UI is built with **shadcn-svelte**. Add components as needed. Feel free to edit the shadcn-svelte components to fit the design system since it is not a component library. It is how you build your component library.
- All design tokens live in `src/routes/layout.css`. Brand tokens are `--paper`, `--ink`, `--sun`; the shadcn tokens map onto them.
- Don't hardcode colors in components, use the theme variables instead and add new ones if needed. The only exception is `src/lib/assets/favicon.svg`, which cannot read page tokens.
- Every color variable should be defined in both light and dark mode.
- Make sure any UI you build is fully responsive, and looks good in both light and dark mode.
- Body text is at least 18px, tap targets for call/text/book are large, and the phone number stays visible in the header on mobile (many clients are seniors who call).

### Content sources

- Booking, payments, packages, membership and the intake form all live on MassageBook. Every "Book" action links to `site.bookingUrl` in `src/lib/config/site.ts`; it points at `/contact` until the MassageBook page exists.
- Business facts (phone, address, hours) live in `src/lib/config/site.ts`; prices in `src/lib/config/services.ts`; stock photo URLs and credits in `src/lib/config/photos.ts`.
- Mariya's portrait is `src/lib/assets/mariya.jpg`; `portrait.svelte` falls back to the butterfly mark if the file is missing.
- The site is fully static (every route is prerendered). No forms, no server code, no payment or booking code.

## Git Commits & Branches

- Do **not** add the coding agent as a co-author on commits — no `Co-Authored-By` trailers, "Generated with" lines, or similar AI attribution in commit messages.
- No AI attribution in branch names either — don't prefix branches with `ai/`, `agent/`, or similar. Name branches after the change using conventional naming conventions.
- The same applies to PR titles and descriptions: describe the change, not the tool that made it.
- Write concise, conventional commit messages describing the change itself.
- Any non-trivial change — features, refactors, anything spanning multiple files or commits — goes on a feature branch with a PR; never push directly to `main`. Only trivial fixes may go to `main`, and only if explicitly asked.
- If you push more changes to a branch after its PR is opened, update the PR description so it still reflects the full change set.

## Keeping This File Updated

Treat AGENTS.md as living documentation. If a change you make invalidates anything here — new commands or scripts, moved directories, changed conventions, added dependencies or bindings — update this file in the same commit.
