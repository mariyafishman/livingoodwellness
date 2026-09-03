# livingoodwellness

Website for Livingood Wellness Center.

## Tech Stack

- **[Svelte](https://svelte.dev)** (Svelte 5, runes) - frontend framework
- **[SvelteKit](https://svelte.dev/docs/kit)** (SvelteKit 3) - full-stack framework
- **[Tailwind CSS](https://tailwindcss.com)** (Tailwind v4) - styling
- **[shadcn-svelte](https://www.shadcn-svelte.com)** - UI components (built on [bits-ui](https://bits-ui.com))
- **[Cloudflare Workers](https://developers.cloudflare.com/workers/)** - deployment platform

## Developing

```sh
npm install
npm run dev
```

## Site content and design

Five prerendered pages: home, services, about, book and contact. The visual system is
Good Company, the selected Livingood canvas direction; its rules are recorded in
AGENTS.md and its light/dark tokens are in src/routes/layout.css.

Shared business details and the pending MassageBook link are in
src/lib/config/site.ts; draft rates are in src/lib/config/content.ts.
Set bookingUrl to the real MassageBook URL and rebuild when the account is ready.
Until then, the booking page directs visitors to call or text Mariya.
The butterfly and MA license number remain placeholders.

Manrope and Lora italic load from Google Fonts, with local sans-serif/Georgia
fallbacks. Mariya's provided portrait is the only photography; missing or failed
images receive a named butterfly fallback.

## Validation

npm run check performs Svelte and TypeScript validation.
npm run build prerenders every page for the existing Cloudflare adapter.
The site has no forms, payment processing, server routes or booking backend.
Keep docs/ untracked.
