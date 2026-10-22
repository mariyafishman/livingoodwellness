<script lang="ts">
  import { Button } from '#lib/components/ui/button/index.ts';
  import Logo from '#lib/assets/logo.svelte';
  import ThemeToggle from '#lib/components/theme-toggle.svelte';
  import { site, hours } from '#lib/config/site.ts';

  const currentYear = new Date().getFullYear();
  const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`;
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;

  /* Links on the card: semibold with a rule in the card's own text colour. */
  const cardLink =
    'rounded-xs border-b-2 border-current/40 pb-px font-semibold outline-none hover:border-current focus-visible:ring-3 focus-visible:ring-current/50 focus-visible:ring-offset-4 focus-visible:ring-offset-ink';
</script>

<footer class="wrap section-gap pb-6 md:pb-8">
  <div class="flex flex-col gap-10 rounded-block bg-ink px-6 pt-10 pb-6 text-ink-foreground md:gap-12 md:px-12 md:pt-14 md:pb-8 lg:px-14 lg:pt-16">
    <div class="grid gap-10 md:grid-cols-2 md:gap-12 xl:grid-cols-[1.6fr_1fr_1.1fr] xl:gap-16">
      <div class="flex flex-col items-start gap-6 md:col-span-2 md:gap-7 xl:col-span-1">
        <h2 class="font-display text-[2.5rem] leading-none font-medium tracking-[-0.025em] text-balance md:max-w-[13ch] md:text-[3.75rem]">
          A quiet home studio in Hudson, MA.
        </h2>
        <Button href="/book" variant="contrast" class="max-sm:w-full">Book a session</Button>
        <p class="text-sm md:text-[0.9375rem]">
          Questions before you book? <a href="/contact" class={cardLink}>Contact Mariya</a>
        </p>
      </div>

      <div class="flex flex-col gap-2 text-[0.9375rem] leading-normal">
        <h3 class="text-base font-semibold">Studio</h3>
        <address class="not-italic">{site.address.street}<br />{site.address.city}, {site.address.state} {site.address.zip}</address>
        <p class="text-sm opacity-80">{site.address.note}</p>
        <a href={directionsUrl} target="_blank" rel="noopener" class={[cardLink, 'self-start text-sm']}>Get directions</a>
      </div>

      <div class="flex flex-col gap-2 text-[0.9375rem] leading-normal">
        <h3 class="text-base font-semibold">Hours</h3>
        <dl class="grid grid-cols-[auto_1fr] gap-x-5 gap-y-1.5">
          {#each hours as { days, time } (days)}
            <dt>{days}</dt>
            <dd>{time}</dd>
          {/each}
        </dl>
      </div>
    </div>

    <div
      class="flex flex-col gap-5 border-t border-current/30 pt-5 text-sm leading-normal xl:flex-row xl:items-center xl:justify-between xl:gap-x-6"
    >
      <span class="flex items-center gap-3">
        <Logo class="size-10 shrink-0" />
        <span>{site.practitioner.title}, {site.practitioner.license}</span>
      </span>
      <a href="mailto:{site.email}" class={[cardLink, 'self-start xl:self-auto']}>{site.email}</a>
      <ThemeToggle />
      <span>&copy; {currentYear} {site.name}</span>
    </div>
  </div>
</footer>
