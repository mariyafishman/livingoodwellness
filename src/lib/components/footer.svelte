<script lang="ts">
  import Logo from '#lib/assets/logo.svelte';
  import { site } from '#lib/config/site.ts';

  const currentYear = new Date().getFullYear();

  const links = [
    { title: 'Services', href: '/services' },
    { title: 'About', href: '/about' },
    { title: 'Book', href: '/book' },
    { title: 'Contact', href: '/contact' }
  ];
</script>

<footer class="grain bg-canvas-deep text-canvas-deep-foreground">
  <div class="wrap py-14 sm:py-20">
    <div class="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] lg:gap-10">
      <div class="flex flex-col gap-6">
        <a href="/" class="flex items-center gap-3" aria-label="{site.name} home">
          <Logo class="size-11 text-canvas-deep-foreground" />
          <span class="font-display text-2xl leading-none">Livingood<br /><span class="text-base tracking-[0.08em] uppercase opacity-80">Wellness Center</span></span>
        </a>
        <p class="max-w-xs font-display text-2xl italic text-canvas-deep-muted">{site.tagline}</p>
        <p class="max-w-xs text-sm leading-relaxed text-canvas-deep-muted">
          {site.practitioner.name}, {site.practitioner.title}. Over 30 years of massage therapy in a quiet home studio in Hudson, Massachusetts.
        </p>
      </div>

      <div class="flex flex-col gap-3 text-sm">
        <h2 class="font-sans text-xs font-semibold tracking-[0.14em] uppercase text-canvas-deep-muted">Visit</h2>
        <address class="not-italic leading-relaxed">
          {site.address.street}<br />
          {site.address.city}, {site.address.state} {site.address.zip}
        </address>
        <p class="text-canvas-deep-muted">{site.address.note}. By appointment only.</p>
        <a href={site.mapsHref} target="_blank" rel="noopener" class="w-fit underline decoration-canvas-deep-muted/60 underline-offset-4 hover:decoration-canvas-deep-foreground">Get directions</a>
      </div>

      <div class="flex flex-col gap-3 text-sm">
        <h2 class="font-sans text-xs font-semibold tracking-[0.14em] uppercase text-canvas-deep-muted">Call or text</h2>
        <a href={site.phoneHref} class="w-fit font-display text-xl hover:text-honey">{site.phone}</a>
        <a href="mailto:{site.email}" class="w-fit break-all underline decoration-canvas-deep-muted/60 underline-offset-4 hover:decoration-canvas-deep-foreground">{site.email}</a>
        <nav aria-label="Footer" class="mt-2 flex flex-wrap gap-x-4 gap-y-1">
          {#each links as { title, href } (href)}
            <a {href} class="hover:text-honey">{title}</a>
          {/each}
        </nav>
      </div>

      <div class="flex flex-col gap-3 text-sm">
        <h2 class="font-sans text-xs font-semibold tracking-[0.14em] uppercase text-canvas-deep-muted">Hours</h2>
        <dl class="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5">
          {#each site.hours as { days, time } (days)}
            <dt class="text-canvas-deep-muted">{days}</dt>
            <dd class="whitespace-nowrap">{time}</dd>
          {/each}
        </dl>
      </div>
    </div>

    <div class="mt-14 flex flex-col gap-2 border-t border-canvas-deep-foreground/15 pt-6 text-xs text-canvas-deep-muted sm:flex-row sm:items-center sm:justify-between">
      <p>{site.practitioner.name}, {site.practitioner.title}, {site.practitioner.license}</p>
      <p>&copy; {currentYear} {site.name}</p>
    </div>
  </div>
</footer>
