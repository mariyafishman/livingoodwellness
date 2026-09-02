<script lang="ts">
  import SEO from '#lib/components/seo.svelte';
  import PageHeader from '#lib/components/page-header.svelte';
  import HoursList from '#lib/components/hours-list.svelte';
  import { Button } from '#lib/components/ui/button/index.ts';
  import * as Card from '#lib/components/ui/card/index.ts';
  import PhoneIcon from '@lucide/svelte/icons/phone';
  import MessageIcon from '@lucide/svelte/icons/message-circle';
  import MailIcon from '@lucide/svelte/icons/mail';
  import MapPinIcon from '@lucide/svelte/icons/map-pin';
  import CalendarIcon from '@lucide/svelte/icons/calendar-check';
  import { site, fullAddress, bookingIsLive } from '#lib/config/site.ts';

  const actions = [
    {
      icon: PhoneIcon,
      title: 'Call',
      detail: site.phone,
      note: 'The fastest way to reach Mariya.',
      href: site.phoneHref
    },
    {
      icon: MessageIcon,
      title: 'Text',
      detail: site.phone,
      note: 'Good for questions and quick scheduling.',
      href: site.smsHref
    },
    {
      icon: MailIcon,
      title: 'Email',
      detail: site.email,
      note: 'For anything that can wait a day.',
      href: `mailto:${site.email}`
    }
  ];
</script>

<SEO
  title="Contact"
  description={`Call or text Mariya Fishman at ${site.phone}, or email. Home studio at ${fullAddress}, by appointment. Hours: ${site.hoursSummary}.`}
/>

<PageHeader
  eyebrow="Contact"
  title="Call or text to book"
  lead="Mariya answers her own phone. Sessions are by appointment in her private home studio in Hudson, and there is no form to fill out here."
/>

<!-- Primary actions -->
<section class="container-page pb-14 sm:pb-20" aria-label="Ways to reach Mariya">
  <ul class="grid gap-4 md:grid-cols-3">
    {#each actions as { icon: Icon, title, detail, note, href } (title)}
      <li>
        <a
          {href}
          class="group flex h-full flex-col gap-4 rounded-3xl bg-card p-6 ring-1 ring-foreground/10 transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
        >
          <span
            class="flex size-14 items-center justify-center rounded-2xl bg-clay text-clay-foreground"
          >
            <Icon class="size-7" aria-hidden="true" />
          </span>
          <span class="flex flex-col gap-1">
            <span class="font-serif text-3xl">{title}</span>
            <span class="text-base font-medium [overflow-wrap:anywhere] text-primary sm:text-lg group-hover:underline tabular-nums">
              {detail}
            </span>
            <span class="text-base text-muted-foreground">{note}</span>
          </span>
        </a>
      </li>
    {/each}
  </ul>
</section>

<!-- Visit, hours, booking -->
<section class="bg-paper text-paper-foreground" aria-labelledby="visit-heading">
  <div class="container-page grid gap-6 py-14 sm:py-20 lg:grid-cols-[1.5fr_1fr]">
    <Card.Root class="bg-card">
      <Card.Header>
        <Card.Description class="text-base">Visit</Card.Description>
        <Card.Title id="visit-heading" class="font-serif text-3xl font-medium">A home studio in Hudson</Card.Title>
      </Card.Header>
      <Card.Content class="flex flex-col gap-6">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <address class="flex items-start gap-3 text-lg not-italic">
            <MapPinIcon class="mt-1 size-5 shrink-0 text-clay" aria-hidden="true" />
            <span>
              {site.address.street}<br />
              {site.address.city}, {site.address.state} {site.address.zip}
            </span>
          </address>
          <Button href={site.mapsUrl} target="_blank" rel="noopener" size="lg" variant="outline">
            Open in Google Maps
            <span class="sr-only">(opens in a new tab)</span>
          </Button>
        </div>
        <p class="text-base text-muted-foreground">
          This is a private residence with a dedicated treatment room. Please arrive at your appointment
          time; Mariya will meet you at the door.
        </p>
        <iframe
          src={site.mapsEmbedUrl}
          title={`Map showing ${fullAddress}`}
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          allowfullscreen
          class="aspect-[16/10] w-full rounded-2xl border-0 bg-muted sm:aspect-[2/1]"
        ></iframe>
      </Card.Content>
    </Card.Root>

    <div class="flex flex-col gap-6">
      <Card.Root class="bg-card">
        <Card.Header>
          <Card.Title class="font-serif text-2xl font-medium">Hours</Card.Title>
          <Card.Description class="text-base">All sessions are by appointment.</Card.Description>
        </Card.Header>
        <Card.Content>
          <HoursList class="text-base" />
        </Card.Content>
      </Card.Root>

      <Card.Root class="bg-primary text-primary-foreground ring-primary">
        <Card.Header>
          <Card.Title class="flex items-center gap-2 font-serif text-2xl font-medium">
            <CalendarIcon class="size-6" aria-hidden="true" />
            Book a session
          </Card.Title>
        </Card.Header>
        <Card.Content class="flex flex-col gap-4">
          {#if bookingIsLive}
            <p class="text-base text-primary-foreground/85">
              Pick a time on the online booking page. New clients receive a short intake form by email
              after booking.
            </p>
            <Button
              href={site.bookingUrl}
              size="lg"
              class="bg-background text-foreground hover:bg-background/90"
            >
              Book online
            </Button>
          {:else}
            <p class="text-base text-primary-foreground/85">
              Online booking is coming soon. Until then, call or text {site.phone} and Mariya will find
              a time with you.
            </p>
            <Button
              href={site.phoneHref}
              size="lg"
              class="bg-background text-foreground hover:bg-background/90"
            >
              <PhoneIcon data-icon="inline-start" />
              Call to book
            </Button>
          {/if}
        </Card.Content>
      </Card.Root>
    </div>
  </div>
</section>
