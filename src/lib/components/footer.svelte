<script lang="ts">
  import { Button } from '#lib/components/ui/button/index.ts';
  import Logo from '#lib/assets/logo.svelte';
  import ThemeToggle from '#lib/components/theme-toggle.svelte';
  import { site, hours } from '#lib/config/site.ts';

  const currentYear = new Date().getFullYear();
  const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`;
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;

  const textLink =
    'inline-block rounded-sm font-display font-bold underline decoration-2 underline-offset-4 outline-none hover:opacity-80 focus-visible:ring-3 focus-visible:ring-current/50 focus-visible:ring-offset-4 focus-visible:ring-offset-primary';
</script>

<footer class="wrap section-gap pb-8 md:pb-16">
  <div
    class="relative grid gap-8 rounded-[1.5rem] bg-primary p-6 text-primary-foreground md:grid-cols-[1.1fr_0.9fr] md:gap-16 md:rounded-block md:p-16"
  >
    <div class="pr-12 md:pr-0">
      <h2 class="font-display text-[2.5rem] leading-none font-extrabold tracking-[-0.04em] text-balance md:text-[4rem]">
        A quiet home studio in Hudson, MA.
      </h2>
      <Button href="/book" variant="secondary" class="mt-7 max-md:w-full md:mt-9">Book a session</Button>
      <p class="mt-7 text-sm md:mt-10">Questions before you book?</p>
      <a href="/contact" class={[textLink, 'mt-1.5 text-[0.9375rem]']}>Contact Mariya</a>
    </div>

    <div class="grid content-start gap-7 border-t border-primary-foreground/30 pt-7 md:gap-8 md:border-t-0 md:pt-0">
      <div>
        <address class="font-display text-lg leading-tight font-extrabold tracking-[-0.02em] not-italic md:text-[1.375rem]">
          {site.address.street}<br />{site.address.city}, {site.address.state} {site.address.zip}
        </address>
        <p class="mt-2.5 text-[0.8125rem] leading-normal md:text-sm">{site.address.note}</p>
        <a href={directionsUrl} target="_blank" rel="noopener" class={[textLink, 'mt-2.5 text-[0.8125rem]']}>Get directions</a>
      </div>
      <div>
        <h3 class="font-display text-lg leading-tight font-extrabold tracking-[-0.02em] md:text-[1.375rem]">Studio hours</h3>
        <dl class="mt-3 grid grid-cols-[1fr_auto] gap-x-4 gap-y-1.5 text-[0.8125rem] leading-normal md:gap-x-6 md:gap-y-2 md:text-sm">
          {#each hours as { days, time } (days)}
            <dt>{days}</dt>
            <dd>{time}</dd>
          {/each}
        </dl>
      </div>
    </div>

    <Logo class="absolute top-6 right-6 size-10 rotate-12 md:top-14 md:right-14 md:size-14" />

    <div
      class="flex flex-col gap-4 border-t border-primary-foreground/30 pt-5 text-[0.8125rem] leading-relaxed md:col-span-2 md:flex-row md:items-center md:justify-between"
    >
      <span>{site.practitioner.title}, {site.practitioner.license}</span>
      <ThemeToggle />
      <span>&copy; {currentYear} {site.name}</span>
    </div>
  </div>
</footer>
