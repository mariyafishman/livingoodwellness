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

### Direction: "the green door"

Chosen 2026-09-02 after inspiration research (Savee: Swiss colour-block posters in green with orange and peach, bright green brand palettes, arch and doorway photo crops, friendly grotesk display type; Mobbin: founder sections, pricing rows, contact pages of small practices). The idea: **a sunny, hand-painted sign on a green door**. One warm, direct, funny practitioner, not a spa and not a clinic. Colour and big type carry the mood so the copy can stay short.

- **Palette.** Deep pine green (`--pine`) and bright leaf green (`--leaf`) are the poster blocks; butter yellow (`--butter`) is the "book" colour and the price band; apricot (`--apricot`) is a small accent only (butterfly lower wings, bullets, quote rules). Light mode sits on a sunny warm white, not cream. Dark mode is deep green-black with the same butter and apricot. The shadcn tokens (`--primary`, `--secondary`, `--accent`) map onto these.
- **Type.** `Bricolage Grotesque Variable` (optical-size axis) for display, big and tight (`.display` utility). `Inter Variable` for body at an **18px base** (`html { font-size: 112.5% }`). Small tracked uppercase labels (`.label`) introduce sections.
- **Layout.** Full-bleed colour bands stacked like posters: pine, warm white, butter, leaf. Inside each band an asymmetric 12-column grid (5/7 or 4/8). Lists are ledgers with hairline rules, not cards. No icon-in-a-circle grids, no uniform rounded tiles, no coloured CTA band with a faded logo.
- **Photos.** Natural colour, cropped into the **arch** (`.arch` utility, a doorway shape) or a circle. The butterfly mark perches on the hero arch. Stock via `src/lib/config/photos.ts` until Mariya's own photos arrive.
- **Marks.** Placeholder butterfly in `src/lib/assets/logo.svelte`: four petal wings, upper pair in `currentColor`, lower pair apricot, so it reads on every band. `favicon.svg` is the same mark on a green rounded square with fixed colours.
- **Copy.** Short lines, plain words, a little humour, first person on About. Say who a session is for and what happens, never outcomes.
- **Buttons.** Pills (`button.svelte`): `default` green, `secondary` butter for "Book", `outline` uses the current text colour so it works on any band. Tap targets are 44px+.

### Rules

- UI is built with **shadcn-svelte**. Add components as needed. Feel free to edit the shadcn-svelte components to fit the design system since it is not a component library. It is how you build your component library.
- The shadcn-svelte CLI cannot resolve `"extends": "$app/tsconfig"`. To add a component, temporarily point `tsconfig.json` at `./node_modules/$app/tsconfig.json`, run `npx shadcn-svelte@latest add <name> -y`, then restore the file.
- All design tokens live in `src/routes/layout.css`. Brand tokens are `--pine`, `--leaf`, `--butter`, `--apricot` (each with a `-foreground`), exposed to Tailwind as `bg-pine`, `text-butter-foreground`, etc.
- Don't hardcode colors in components, use the theme variables instead and add new ones if needed. The only exception is `src/lib/assets/favicon.svg`, which cannot read page tokens.
- Every color variable should be defined in both light and dark mode.
- Make sure any UI you build is fully responsive, and looks good in both light and dark mode.
- Body text is at least 18px, tap targets for call/text/book are large, and the phone number stays visible in the header on mobile (many clients are seniors who call).

### Content sources

- Booking, payments, packages, membership and the intake form all live on MassageBook. Every "Book" action links to `site.bookingUrl` in `src/lib/config/site.ts`; it points at `/contact` until the MassageBook page exists, and the contact page says "online booking is coming soon" until that URL is external.
- Business facts (phone, address, hours) live in `src/lib/config/site.ts`; prices and service copy in `src/lib/config/services.ts`; stock photo URLs and credits in `src/lib/config/photos.ts`.
- Mariya's portrait is `src/lib/assets/mariya.jpg`; `portrait.svelte` falls back to a butter arch with the butterfly if the file is missing.
- The site is fully static (every route is prerendered via `src/routes/+layout.ts`). No forms, no server code, no payment or booking code.

## Git Commits & Branches

- Do **not** add the coding agent as a co-author on commits — no `Co-Authored-By` trailers, "Generated with" lines, or similar AI attribution in commit messages.
- No AI attribution in branch names either — don't prefix branches with `ai/`, `agent/`, or similar. Name branches after the change using conventional naming conventions.
- The same applies to PR titles and descriptions: describe the change, not the tool that made it.
- Write concise, conventional commit messages describing the change itself.
- Any non-trivial change — features, refactors, anything spanning multiple files or commits — goes on a feature branch with a PR; never push directly to `main`. Only trivial fixes may go to `main`, and only if explicitly asked.
- If you push more changes to a branch after its PR is opened, update the PR description so it still reflects the full change set.

## Keeping This File Updated

Treat AGENTS.md as living documentation. If a change you make invalidates anything here — new commands or scripts, moved directories, changed conventions, added dependencies or bindings — update this file in the same commit.
