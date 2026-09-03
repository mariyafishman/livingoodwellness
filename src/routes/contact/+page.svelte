<script lang="ts">
  import SEO from '#lib/components/seo.svelte';
  import CtaBand from '#lib/components/cta-band.svelte';
  import HoursTable from '#lib/components/hours-table.svelte';
  import { Button } from '#lib/components/ui/button/index.ts';
  import PhoneIcon from '@lucide/svelte/icons/phone';
  import MessageSquareIcon from '@lucide/svelte/icons/message-square';
  import MailIcon from '@lucide/svelte/icons/mail';
  import MapPinIcon from '@lucide/svelte/icons/map-pin';
  import { site } from '#lib/config/site.ts';
</script>

<SEO
  title="Contact"
  description="Call or text Mariya Fishman, LMT, at 978-493-6171, or email. Livingood Wellness Center is a home studio at 157 Marlboro Street, Hudson, MA, by appointment only."
/>

<section class="border-b">
  <div class="container-page flex flex-col gap-12 py-14 lg:py-24">
    <header class="flex max-w-2xl flex-col gap-4">
      <p class="eyebrow">Contact</p>
      <h1 class="font-display text-5xl font-medium sm:text-6xl lg:text-7xl">Say hello.</h1>
      <p class="text-lg leading-relaxed text-muted-foreground sm:text-xl">
        A call or a text is the quickest way to reach Mariya. Email works too. There is no contact form here on
        purpose: you will always get a person.
      </p>
    </header>

    <div class="grid gap-6 md:grid-cols-2">
      <article class="flex flex-col gap-5 rounded-xl border bg-card p-6 sm:p-8">
        <div class="flex items-center gap-3">
          <span class="flex size-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
            <PhoneIcon class="size-5" aria-hidden="true" />
          </span>
          <h2 class="font-display text-2xl font-medium">Call or text</h2>
        </div>
        <a
          href="tel:{site.phone.tel}"
          class="w-fit rounded-sm font-display text-4xl font-light tracking-tight outline-none hover:text-primary focus-visible:ring-2 focus-visible:ring-ring sm:text-5xl"
        >
          {site.phone.display}
        </a>
        <div class="flex flex-col gap-3 sm:flex-row">
          <Button href="tel:{site.phone.tel}">
            <PhoneIcon data-icon="inline-start" />
            Call
          </Button>
          <Button href="sms:{site.phone.tel}" variant="outline">
            <MessageSquareIcon data-icon="inline-start" />
            Text
          </Button>
        </div>
        <p class="text-sm leading-relaxed text-muted-foreground">
          If she is with a client, leave a message. She returns calls between sessions.
        </p>
      </article>

      <article class="flex flex-col gap-5 rounded-xl border bg-card p-6 sm:p-8">
        <div class="flex items-center gap-3">
          <span class="flex size-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
            <MailIcon class="size-5" aria-hidden="true" />
          </span>
          <h2 class="font-display text-2xl font-medium">Email</h2>
        </div>
        <a
          href="mailto:{site.email}"
          class="w-fit rounded-sm font-display text-2xl font-light tracking-tight break-all outline-none hover:text-primary focus-visible:ring-2 focus-visible:ring-ring sm:text-3xl"
        >
          {site.email}
        </a>
        <p class="text-sm leading-relaxed text-muted-foreground">
          Good for questions that can wait a day. For booking, use MassageBook or the phone.
        </p>
        <Button href="/book" variant="outline" class="self-start">How booking works</Button>
      </article>

      <article class="flex flex-col gap-5 rounded-xl border bg-card p-6 sm:p-8">
        <div class="flex items-center gap-3">
          <span class="flex size-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
            <MapPinIcon class="size-5" aria-hidden="true" />
          </span>
          <h2 class="font-display text-2xl font-medium">Visit</h2>
        </div>
        <address class="font-display text-2xl leading-snug font-light not-italic sm:text-3xl">
          {site.address.street}<br />
          {site.address.city}, {site.address.state} {site.address.zip}
        </address>
        <p class="text-sm leading-relaxed text-muted-foreground">
          {site.address.note}. By appointment only, so please book before you come.
        </p>
        <Button href={site.mapsUrl} variant="outline" target="_blank" rel="noopener noreferrer" class="self-start">
          Open in Google Maps
        </Button>
      </article>

      <article class="flex flex-col gap-5 rounded-xl border bg-card p-6 sm:p-8">
        <div class="flex items-center gap-3">
          <span
            class="flex size-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground"
            aria-hidden="true"
          >
            <span class="size-3 rounded-full bg-highlight"></span>
          </span>
          <h2 class="font-display text-2xl font-medium">Hours</h2>
        </div>
        <HoursTable class="text-base" />
        <p class="text-sm leading-relaxed text-muted-foreground">Evenings fill first. A week's notice is ideal.</p>
      </article>
    </div>
  </div>
</section>

<CtaBand />
