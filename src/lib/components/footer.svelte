<script lang="ts">
  import Wordmark from './wordmark.svelte';
  import { site, nav, fullAddress } from '#lib/config/site.ts';
  import PhoneIcon from '@lucide/svelte/icons/phone';
  import MessageIcon from '@lucide/svelte/icons/message-circle';
  import MailIcon from '@lucide/svelte/icons/mail';
  import MapPinIcon from '@lucide/svelte/icons/map-pin';
  import CalendarIcon from '@lucide/svelte/icons/calendar-check';

  const currentYear = new Date().getFullYear();

  const contactLinks = [
    { icon: PhoneIcon, label: `Call ${site.phone}`, href: site.phoneHref },
    { icon: MessageIcon, label: `Text ${site.phone}`, href: site.smsHref },
    { icon: MailIcon, label: site.email, href: `mailto:${site.email}` },
    { icon: CalendarIcon, label: 'Book a session', href: site.bookingUrl }
  ];
</script>

<footer class="border-t bg-paper text-paper-foreground">
  <div class="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.1fr] lg:gap-8">
    <div class="flex flex-col gap-4">
      <a href="/" class="w-fit rounded-lg outline-none focus-visible:ring-3 focus-visible:ring-ring/50">
        <Wordmark size="lg" />
        <span class="sr-only">{site.name}, home</span>
      </a>
      <p class="font-serif text-xl text-foreground">{site.tagline}</p>
      <p class="max-w-xs text-base text-muted-foreground">
        {site.owner}, {site.ownerTitle}.<br />
        {site.license}
      </p>
    </div>

    <div>
      <h2 class="mb-4 font-sans text-sm font-semibold tracking-[0.14em] text-muted-foreground uppercase">
        Visit
      </h2>
      <address class="flex flex-col gap-3 text-base not-italic">
        <p>
          {site.address.street}<br />
          {site.address.city}, {site.address.state} {site.address.zip}
        </p>
        <p class="text-muted-foreground">Private home studio. Visits by appointment only.</p>
        <a
          href={site.mapsUrl}
          target="_blank"
          rel="noopener"
          class="inline-flex w-fit items-center gap-2 font-medium text-primary underline-offset-4 hover:underline"
        >
          <MapPinIcon class="size-4" aria-hidden="true" />
          Open in Google Maps
          <span class="sr-only">(opens in a new tab)</span>
        </a>
      </address>
    </div>

    <div>
      <h2 class="mb-4 font-sans text-sm font-semibold tracking-[0.14em] text-muted-foreground uppercase">
        Hours
      </h2>
      <dl class="flex flex-col gap-2 text-base">
        {#each site.hours as { days, time } (days)}
          <div class="flex flex-col">
            <dt class="font-medium">{days}</dt>
            <dd class="text-muted-foreground">{time}</dd>
          </div>
        {/each}
      </dl>
    </div>

    <div>
      <h2 class="mb-4 font-sans text-sm font-semibold tracking-[0.14em] text-muted-foreground uppercase">
        Contact
      </h2>
      <ul class="flex flex-col gap-1 text-base">
        {#each contactLinks as { icon: Icon, label, href } (href)}
          <li>
            <a
              {href}
              class="-mx-2 inline-flex min-h-11 items-center gap-2.5 rounded-lg px-2 font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
            >
              <Icon class="size-4 text-primary" aria-hidden="true" />
              <span class="[overflow-wrap:anywhere]">{label}</span>
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </div>

  <div class="border-t">
    <div
      class="container-page flex flex-col gap-3 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between"
    >
      <p>&copy; {currentYear} {site.name}. {fullAddress}.</p>
      <nav aria-label="Footer">
        <ul class="flex flex-wrap gap-x-5 gap-y-1">
          {#each nav as { title, href } (href)}
            <li><a {href} class="py-2 hover:text-foreground hover:underline">{title}</a></li>
          {/each}
        </ul>
      </nav>
    </div>
  </div>
</footer>
