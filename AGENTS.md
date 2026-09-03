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


### Good Company (selected canvas variation 02)

- The separate Livingood canvas is the visual reference; do not add design-review routes to the production site.
- Bottle green (#164b3d), butter (#e8ecb3), lilac (#dcd3e9), and warm paper (#faf9f2). Dark mode uses deep green backgrounds, warm pale text, muted green and plum panels. All colors and their semantic aliases are in layout.css.
- Manrope 400–800 for body and confident, tightly tracked headings; Lora italic 400–500 for a few human accents. Desktop display 106px, section headings 56px; mobile 66px and 40px. Fonts currently load through Google Fonts.
- Use an 8px rhythm, 80px section padding and 72px gutters on desktop; 56px sections and 24px gutters on mobile. Cards use 22–32px corners, major inset panels 36px, and buttons are rounded pills. Avoid generic shadows and component-library styling.
- Home follows the chosen artboard: butter hero with Mariya's real portrait in an irregular lilac collage, solid rounded butterfly, pastel modality and rate cards, lilac bio, then a deep green visit panel.
- The inline SVG and favicon use the selected solid butterfly as a placeholder. The favicon repeats the approved brand colors because it is a standalone asset.
- Reuse the owned shadcn Button source and shared site components. Keep navigation readable, touch targets generous, and keyboard focus visible. Theme selection lives in the footer.
- Content must stay personal, plain and accurate. No fabricated testimonials, generated people, medical promises, family details, or luxury-spa language. Use the supplied BEMER disclaimer wherever its benefits appear.
- The site is prerendered. Book actions go to /book; only that page links to site.bookingUrl. Until configured, present a clear unavailable online-booking state with call/text alternatives. Never collect forms, payment, or intake on this site.

## Git Commits & Branches

- Do **not** add the coding agent as a co-author on commits — no `Co-Authored-By` trailers, "Generated with" lines, or similar AI attribution in commit messages.
- No AI attribution in branch names either — don't prefix branches with `ai/`, `agent/`, or similar. Name branches after the change using conventional naming conventions.
- The same applies to PR titles and descriptions: describe the change, not the tool that made it.
- Write concise, conventional commit messages describing the change itself.
- Any non-trivial change — features, refactors, anything spanning multiple files or commits — goes on a feature branch with a PR; never push directly to `main`. Only trivial fixes may go to `main`, and only if explicitly asked.
- If you push more changes to a branch after its PR is opened, update the PR description so it still reflects the full change set.

## Keeping This File Updated

Treat AGENTS.md as living documentation. If a change you make invalidates anything here — new commands or scripts, moved directories, changed conventions, added dependencies or bindings — update this file in the same commit.
- Inner pages reuse the same page-hero, story/prose, booking-card and contact-method patterns. No extra palette: all added layouts consume the existing surface, soft, night and text tokens. The About recovery paragraph is condensed to respect the brand's exclusions and avoid claims about healing.
