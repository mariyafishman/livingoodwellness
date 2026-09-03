<script lang="ts">
  import Logo from '#lib/assets/logo.svelte';
  import { site, nav } from '#lib/config/site.ts';

  const currentYear = new Date().getFullYear();
</script>

<footer class="border-t-2 border-ink bg-forest text-forest-foreground">
  <div class="container-site section flex flex-col gap-12">
    <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div class="flex flex-col gap-4">
        <Logo mono class="size-14 text-forest-foreground" />
        <p class="max-w-md text-4xl sm:text-5xl font-display-soft">{site.tagline}</p>
      </div>
      <p class="max-w-sm text-forest-foreground/75">
        One experienced therapist, a quiet studio, and time for you. By appointment in Hudson, Massachusetts.
      </p>
    </div>

    <div class="h-0.5 w-full bg-forest-foreground/25"></div>

    <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
      <div class="flex flex-col gap-2">
        <h2 class="eyebrow text-forest-foreground/60">Visit</h2>
        <address class="not-italic leading-relaxed">
          {site.address.street}<br />
          {site.address.city}, {site.address.state} {site.address.zip}
        </address>
        <p class="text-sm text-forest-foreground/75">{site.address.note}. By appointment only.</p>
      </div>

      <div class="flex flex-col gap-2">
        <h2 class="eyebrow text-forest-foreground/60">Call or text</h2>
        <a class="w-fit text-xl font-semibold underline decoration-accent decoration-2 underline-offset-4 hover:decoration-4" href={site.phoneHref}>
          {site.phone}
        </a>
        <a class="w-fit break-all text-sm text-forest-foreground/75 underline-offset-4 hover:underline" href="mailto:{site.email}">
          {site.email}
        </a>
      </div>

      <div class="flex flex-col gap-2">
        <h2 class="eyebrow text-forest-foreground/60">Hours</h2>
        <dl class="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm">
          {#each site.hours as { days, time } (days)}
            <dt class="font-semibold">{days}</dt>
            <dd class="text-forest-foreground/80">{time}</dd>
          {/each}
        </dl>
      </div>

      <div class="flex flex-col gap-2">
        <h2 class="eyebrow text-forest-foreground/60">Pages</h2>
        <nav class="flex flex-col gap-1" aria-label="Footer">
          <a class="w-fit py-0.5 underline-offset-4 hover:underline" href="/">Home</a>
          {#each nav as { title, href } (href)}
            <a class="w-fit py-0.5 underline-offset-4 hover:underline" {href}>{title}</a>
          {/each}
          <a class="w-fit py-0.5 underline-offset-4 hover:underline" href="/book">Book</a>
        </nav>
      </div>
    </div>

    <div class="flex flex-col gap-2 border-t-2 border-forest-foreground/25 pt-6 text-sm text-forest-foreground/70 sm:flex-row sm:items-center sm:justify-between">
      <p>{site.practitioner.name}, {site.practitioner.title}, {site.practitioner.license}</p>
      <p>&copy; {currentYear} {site.name}</p>
    </div>
  </div>
</footer>
