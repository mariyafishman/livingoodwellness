<script lang="ts">
  import SEO from '#lib/components/seo.svelte';
  import Rings from '#lib/components/decor/rings.svelte';
  import { Button } from '#lib/components/ui/button/index.ts';
  import ArrowUpRightIcon from '@lucide/svelte/icons/arrow-up-right';
  import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
  import PhoneIcon from '@lucide/svelte/icons/phone';
  import MessageSquareIcon from '@lucide/svelte/icons/message-square';
  import MapPinIcon from '@lucide/svelte/icons/map-pin';
  import ClockIcon from '@lucide/svelte/icons/clock';
  import { site } from '#lib/config/site.ts';

  const steps = [
    {
      title: 'Pick a service and a time',
      text: 'Choose a massage length, a package, the membership or a Bemer session on MassageBook and find a time that suits you.'
    },
    {
      title: 'Pay online or in person',
      text: 'Pay when you book, or in person on the day: cash, Venmo or card. Receipts are provided for HSA/FSA or insurance reimbursement.'
    },
    {
      title: 'A short intake form',
      text: 'New clients get a short form by email from MassageBook before the visit, so the first session starts with the work, not paperwork.'
    }
  ];
</script>

<SEO
  title="Book a session"
  description="Book a massage or Bemer session with Mariya Fishman in Hudson, MA. Pick a service and time on MassageBook, pay online or in person, or call or text 978-493-6171."
/>

<section class="relative overflow-hidden" aria-labelledby="book-title">
  <Rings class="pointer-events-none absolute -top-[26rem] left-1/2 size-[48rem] -translate-x-1/2 text-moss-soft/20" rings={9} />
  <div class="wrap relative flex flex-col gap-14 pt-14 pb-16 sm:pt-20 lg:py-24">
    <div class="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
      <span class="eyebrow">Book</span>
      <h1 id="book-title" class="text-display-xl">Book a <span class="display-italic">session.</span></h1>
      <p class="text-xl text-muted-foreground">
        Booking, payment, packages and membership all happen on MassageBook. It takes a couple of minutes.
      </p>
      <div class="flex flex-col items-center gap-3 pt-2">
        <Button href={site.bookingUrl} target="_blank" rel="noopener" size="lg">
          Book on MassageBook
          <ArrowUpRightIcon data-icon="inline-end" />
        </Button>
        <span class="text-sm text-muted-foreground">Opens MassageBook in a new tab</span>
      </div>
    </div>

    <ol class="grid gap-5 md:grid-cols-3">
      {#each steps as { title, text }, i (title)}
        <li class="flex flex-col gap-4 rounded-3xl border border-border bg-card p-6 sm:p-8">
          <span class="font-display text-display-md text-moss-soft" aria-hidden="true">0{i + 1}</span>
          <div class="flex flex-col gap-2">
            <h2 class="text-display-sm"><span class="sr-only">Step {i + 1}: </span>{title}</h2>
            <p class="text-muted-foreground">{text}</p>
          </div>
        </li>
      {/each}
    </ol>
  </div>
</section>

<section class="bg-sage text-sage-foreground" aria-labelledby="talk-title">
  <div class="wrap section grid gap-6 lg:grid-cols-[1.2fr_1fr_1fr]">
    <div class="grain flex flex-col gap-5 rounded-3xl bg-canvas-deep p-6 text-canvas-deep-foreground sm:p-8">
      <span class="eyebrow text-canvas-deep-muted">Prefer to talk?</span>
      <h2 id="talk-title" class="text-display-md">Call or text and we will find a time together.</h2>
      <a href={site.phoneHref} class="font-display text-display-md hover:text-honey">{site.phone}</a>
      <div class="mt-auto flex flex-wrap gap-3">
        <Button href={site.phoneHref} variant="inverse">
          <PhoneIcon data-icon="inline-start" />
          Call
        </Button>
        <Button href={site.smsHref} variant="ghost" class="text-canvas-deep-foreground hover:bg-canvas-deep-foreground/10">
          <MessageSquareIcon data-icon="inline-start" />
          Text
        </Button>
      </div>
    </div>

    <div class="flex flex-col gap-4 rounded-3xl bg-background p-6 sm:p-8">
      <span class="flex size-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
        <MapPinIcon class="size-5" aria-hidden="true" />
      </span>
      <h2 class="text-display-sm">By appointment only</h2>
      <p class="text-muted-foreground">
        Sessions are in a quiet home studio at {site.address.street}, {site.address.city}, {site.address.state}. There is no walk-in
        desk, so please book or call first.
      </p>
      <a href={site.mapsHref} target="_blank" rel="noopener" class="mt-auto w-fit text-sm font-semibold text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary">Get directions</a>
    </div>

    <div class="flex flex-col gap-4 rounded-3xl bg-background p-6 sm:p-8">
      <span class="flex size-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
        <ClockIcon class="size-5" aria-hidden="true" />
      </span>
      <h2 class="text-display-sm">Hours</h2>
      <dl class="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 text-sm">
        {#each site.hours as { days, time } (days)}
          <dt class="text-muted-foreground">{days}</dt>
          <dd>{time}</dd>
        {/each}
      </dl>
    </div>
  </div>
</section>

<section class="wrap section flex flex-col items-start gap-4" aria-labelledby="notsure-title">
  <h2 id="notsure-title" class="text-display-md">Not sure what to book?</h2>
  <p class="max-w-xl text-lg text-muted-foreground">
    Start with a 60-minute massage. If you already know you want deep work or a longer session, 90 minutes gives us
    room. Packages and membership are for when you know you will be coming back.
  </p>
  <Button href="/services" variant="link">
    See services and prices
    <ArrowRightIcon data-icon="inline-end" />
  </Button>
</section>
