# livingoodwellness

Website for Livingood Wellness Center.

## Tech Stack

- **[Svelte](https://svelte.dev)** (Svelte 5, runes) - frontend framework
- **[SvelteKit](https://svelte.dev/docs/kit)** (SvelteKit 3) - full-stack framework
- **[Tailwind CSS](https://tailwindcss.com)** (Tailwind v4) - styling
- **[shadcn-svelte](https://www.shadcn-svelte.com)** - UI components (built on [bits-ui](https://bits-ui.com))
- **[Fontsource](https://fontsource.org)** - self-hosted fonts: Fraunces Variable (headings) and Inter Variable (body)
- **[mode-watcher](https://github.com/svecosystem/mode-watcher)** - light/dark theme switching
- **[Cloudflare Workers](https://developers.cloudflare.com/workers/)** - deployment platform

The site is fully static: every route is prerendered, there are no forms or server endpoints. Booking, payment and intake live on an external booking platform; the site links out via `bookingUrl` in `src/lib/config/site.ts`.

## Developing

```sh
npm install
npm run dev
```
