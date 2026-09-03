<script lang="ts">
  import SEO from '#lib/components/seo.svelte';
  import PageHeader from '#lib/components/page-header.svelte';
  import { Button } from '#lib/components/ui/button/index.ts';
  import * as Card from '#lib/components/ui/card/index.ts';
  import ExternalLinkIcon from '@lucide/svelte/icons/external-link';
  import PhoneIcon from '@lucide/svelte/icons/phone';
  import MessageSquareIcon from '@lucide/svelte/icons/message-square';
  import MapPinIcon from '@lucide/svelte/icons/map-pin';
  import ClockIcon from '@lucide/svelte/icons/clock';
  import { site } from '#lib/config/site.ts';

  const steps = [
    {
      title: 'Pick a service and a time',
      text: 'Choose a session length (or a package, the membership, or a Bemer session) and a time on MassageBook.'
    },
    {
      title: 'Pay online or in person',
      text: 'Pay when you book, or at your visit with cash, Venmo or card. Receipts are provided for HSA/FSA or insurance.'
    },
    {
      title: 'Fill in a short intake form',
      text: 'New clients get a brief form by email before the visit so the first session can start with the important bits.'
    }
  ];
</script>

<SEO
  title="Book a session"
  description="Book a massage in Hudson, MA with Mariya Fishman on MassageBook, or call or text 978-493-6171. By appointment only in a quiet home studio."
/>

<PageHeader
  eyebrow="Book"
  title="Book a session."
  lede="Booking happens on MassageBook. It takes a couple of minutes, and you can pay there or in person."
/>

<section class="section">
  <div class="container-site grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
    <div class="flex flex-col gap-10">
      <div class="flex flex-col gap-4">
        <p class="eyebrow flex items-center gap-2 text-muted-foreground">
          <span class="inline-block size-2.5 rounded-full bg-accent ring-2 ring-ink" aria-hidden="true"></span>
          How it works
        </p>
        <ol class="flex flex-col divide-y-2 divide-ink border-y-2 border-ink">
          {#each steps as step, i (step.title)}
            <li class="flex gap-5 py-6">
              <span
                class="flex size-11 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-accent font-display text-xl font-semibold text-accent-foreground shadow-hard"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <div class="flex flex-col gap-1">
                <h2 class="font-display text-2xl font-semibold tracking-tight">{step.title}</h2>
                <p class="text-muted-foreground">{step.text}</p>
              </div>
            </li>
          {/each}
        </ol>
      </div>

      <div class="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button href={site.bookingUrl} target="_blank" rel="noopener" variant="accent" size="lg">
          Book on MassageBook
          <ExternalLinkIcon data-icon="inline-end" aria-hidden="true" />
        </Button>
        <p class="text-sm text-muted-foreground">Opens MassageBook in a new tab.</p>
      </div>
    </div>

    <div class="flex flex-col gap-6">
      <Card.Root variant="secondary" class="gap-4">
        <Card.Header>
          <p class="eyebrow text-secondary-foreground/70">Prefer to talk?</p>
          <Card.Title>Call or text Mariya</Card.Title>
        </Card.Header>
        <Card.Content>
          <a class="w-fit font-display text-4xl font-medium tracking-tight underline decoration-accent decoration-[3px] underline-offset-8" href={site.phoneHref}>
            {site.phone}
          </a>
          <p class="text-secondary-foreground/80">Texts are usually quickest between sessions.</p>
        </Card.Content>
        <Card.Footer class="flex-wrap">
          <Button href={site.phoneHref} variant="outline" size="sm">
            <PhoneIcon data-icon="inline-start" aria-hidden="true" />
            Call
          </Button>
          <Button href={site.smsHref} variant="outline" size="sm">
            <MessageSquareIcon data-icon="inline-start" aria-hidden="true" />
            Text
          </Button>
        </Card.Footer>
      </Card.Root>

      <Card.Root variant="flat" class="gap-5">
        <div class="flex gap-3">
          <MapPinIcon class="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
          <div class="flex flex-col gap-1">
            <p class="font-semibold">By appointment only</p>
            <p class="text-sm text-muted-foreground">
              {site.address.note}, at {site.address.street}, {site.address.city}, {site.address.state}.
            </p>
          </div>
        </div>
        <div class="flex gap-3">
          <ClockIcon class="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
          <div class="flex flex-col gap-2">
            <p class="font-semibold">Hours</p>
            <dl class="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm">
              {#each site.hours as { days, time } (days)}
                <dt class="font-semibold">{days}</dt>
                <dd class="text-muted-foreground">{time}</dd>
              {/each}
            </dl>
          </div>
        </div>
      </Card.Root>
    </div>
  </div>
</section>
