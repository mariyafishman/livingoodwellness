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

### Direction: "Moss & Linen"

One experienced person with time for you. Deep moss green on warm linen, quiet sage surfaces, a small honey accent. Editorial, calm, a little warmth and wit. Not a spa, not a clinic, not a template.

**Color** (all in `layout.css`, light and dark):

| Token | Role |
|-------|------|
| `background` / `foreground` | Warm linen page, deep green-ink text. Dark: green-black page, cream text. |
| `primary` | Moss green. Buttons, links, the butterfly outline. Dark: lifts to sage so it stays readable on green-black. |
| `secondary` | Pale sage. Pills, hover fills, soft chips. |
| `sage` / `sage-foreground` | Pale sage **section** background for quiet bands (services list, good-to-know). |
| `canvas-deep` / `-foreground` / `-muted` | Deep moss band: footer, feature bands, the book CTA. Add `grain` for paper texture. |
| `accent` = `honey` | Warm honey. The butterfly's lower wings, active-nav underline, selection, tiny highlights. Use sparingly; never as a large fill. |
| `moss-soft` | Mid green for eyebrows, icons, decorative rings and hairlines on cream. |
| `muted` / `muted-foreground` | Warm gray for secondary text. |

**Type**: `font-display` is **Fraunces** (variable, `SOFT 80 / WONK 1`, weight ~480) for h1–h3 and pull-quotes; use `display-italic` for one emphasized word inside a heading. Body is **Instrument Sans**, 17px, line-height 1.6. Fluid display sizes: `text-display-xl/lg/md/sm`. Eyebrows use the `eyebrow` utility (small caps, `moss-soft`).

**Shape and rhythm**: `--radius` is 1rem; cards are `rounded-2xl`/`rounded-3xl`, buttons and chips are pills (`rounded-full`). Portraits sit in an `arch` frame. Sections use the `section` utility for vertical rhythm and `wrap` for the 74rem container. Prefer hairlines (`border-border`) and tinted bands over drop shadows; the only shadow is the subtle inset highlight on primary buttons.

**Texture and motifs**: `grain` overlays fine noise on deep-green bands. Concentric rings (`src/lib/components/decor/rings.svelte`) stand for balance and circulation; use them as a quiet decorative element behind heroes and CTAs, never as chart-like content. Imagery: stock photos of hands, linen, plants, light; treated warm and slightly desaturated, never resort-like, never AI-generated people.

**Components**: `Button` variants are `default` (moss), `outline`, `secondary` (sage), `honey`, `inverse` (for deep bands), `ghost`, `link`. Default size is 44px tall; `lg` for hero and booking actions. Header is sticky, translucent linen, honey underline on the active link. Footer is a deep moss band with tagline, visit/contact/hours columns and the license line.

**Voice**: plain, first person on About, no "indulge"/"pamper", no outcomes promised. Bemer copy is limited to "temporarily improves local circulation" plus the required disclaimer.

## Git Commits & Branches

- Do **not** add the coding agent as a co-author on commits — no `Co-Authored-By` trailers, "Generated with" lines, or similar AI attribution in commit messages.
- No AI attribution in branch names either — don't prefix branches with `ai/`, `agent/`, or similar. Name branches after the change using conventional naming conventions.
- The same applies to PR titles and descriptions: describe the change, not the tool that made it.
- Write concise, conventional commit messages describing the change itself.
- Any non-trivial change — features, refactors, anything spanning multiple files or commits — goes on a feature branch with a PR; never push directly to `main`. Only trivial fixes may go to `main`, and only if explicitly asked.
- If you push more changes to a branch after its PR is opened, update the PR description so it still reflects the full change set.

## Keeping This File Updated

Treat AGENTS.md as living documentation. If a change you make invalidates anything here — new commands or scripts, moved directories, changed conventions, added dependencies or bindings — update this file in the same commit.
