<script lang="ts">
  import Logo from '#lib/assets/logo.svelte';
  import HoursTable from '#lib/components/hours-table.svelte';
  import { site } from '#lib/config/site.ts';

  const currentYear = new Date().getFullYear();

  const links = [
    { title: 'Services', href: '/services' },
    { title: 'About', href: '/about' },
    { title: 'Book', href: '/book' },
    { title: 'Contact', href: '/contact' }
  ];

  const linkClass =
    'rounded-sm underline decoration-ink-foreground/30 underline-offset-4 transition-colors outline-none hover:decoration-ink-foreground focus-visible:ring-2 focus-visible:ring-ink-foreground';
</script>

<footer class="relative overflow-hidden bg-ink text-ink-foreground">
  <!-- Bauhaus nod: one big marigold circle, mostly off-canvas. -->
  <div
    class="pointer-events-none absolute -top-40 -right-32 size-[26rem] rounded-full bg-highlight/10 sm:-top-48 sm:size-[34rem]"
    aria-hidden="true"
  ></div>

  <div class="container-page relative grid gap-12 py-16 md:grid-cols-12 md:gap-8 lg:py-20">
    <div class="flex flex-col gap-5 md:col-span-5">
      <a href="/" class="flex w-fit items-center gap-3 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ink-foreground focus-visible:ring-offset-4 focus-visible:ring-offset-ink" aria-label="{site.name} home">
        <Logo class="size-11 text-ink-foreground" />
        <span class="flex flex-col leading-none">
          <span class="font-display text-2xl font-medium tracking-tight">{site.shortName}</span>
          <span class="mt-1 text-[0.625rem] font-semibold tracking-[0.22em] uppercase text-ink-muted">Wellness Center</span>
        </span>
      </a>
      <p class="font-display text-3xl font-light tracking-tight text-ink-foreground/95 italic sm:text-4xl">
        {site.tagline}
      </p>
      <p class="max-w-sm text-sm leading-relaxed text-ink-muted">
        {site.practitioner.name}, {site.practitioner.title}. Massage therapy in {site.address.city}, {site.address.state}
        for seniors, athletes, children and everyone in between.
      </p>
    </div>

    <div class="grid gap-10 sm:grid-cols-2 md:col-span-7 md:grid-cols-3 md:gap-6">
      <div class="flex flex-col gap-3 text-sm">
        <h2 class="eyebrow text-highlight">Visit</h2>
        <address class="leading-relaxed not-italic">
          {site.address.street}<br />
          {site.address.city}, {site.address.state} {site.address.zip}
        </address>
        <p class="text-ink-muted">{site.address.note}. By appointment only.</p>
        <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" class={linkClass}>Open in Google Maps</a>
      </div>

      <div class="flex flex-col gap-3 text-sm">
        <h2 class="eyebrow text-highlight">Contact</h2>
        <p>
          Call or text<br />
          <a href="tel:{site.phone.tel}" class="{linkClass} font-display text-xl">{site.phone.display}</a>
        </p>
        <a href="mailto:{site.email}" class="{linkClass} break-all">{site.email}</a>
        <ul class="mt-2 flex flex-wrap gap-x-4 gap-y-1">
          {#each links as { title, href } (href)}
            <li><a {href} class={linkClass}>{title}</a></li>
          {/each}
        </ul>
      </div>

      <div class="flex flex-col gap-3 text-sm">
        <h2 class="eyebrow text-highlight">Hours</h2>
        <HoursTable tone="ink" />
      </div>
    </div>
  </div>

  <div class="border-t border-ink-foreground/15">
    <div class="container-page flex flex-col gap-2 py-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
      <p>{site.practitioner.name}, {site.practitioner.title}, {site.practitioner.license}</p>
      <p>&copy; {currentYear} {site.name}</p>
    </div>
  </div>
</footer>
