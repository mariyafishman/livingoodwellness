<script lang="ts">
  import SEO from '#lib/components/seo.svelte';
  import CtaBand from '#lib/components/cta-band.svelte';
  import { Button } from '#lib/components/ui/button/index.ts';
  import PhoneIcon from '@lucide/svelte/icons/phone';
  import MessageSquareIcon from '@lucide/svelte/icons/message-square';
  import MailIcon from '@lucide/svelte/icons/mail';
  import MapPinIcon from '@lucide/svelte/icons/map-pin';
  import ClockIcon from '@lucide/svelte/icons/clock';
  import { site } from '#lib/config/site.ts';

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`
  )}&z=15&output=embed`;
</script>

<SEO
  title="Contact"
  description="Call or text Mariya Fishman at 978-493-6171, or email. Livingood Wellness Center is a home studio at 157 Marlboro Street, Hudson, MA 01749, open by appointment."
/>

<section class="wrap flex flex-col gap-10 pt-14 pb-16 sm:pt-20 lg:py-24" aria-labelledby="contact-title">
  <div class="flex max-w-2xl flex-col gap-4">
    <span class="eyebrow">Contact</span>
    <h1 id="contact-title" class="text-display-xl">Say <span class="display-italic">hello.</span></h1>
    <p class="text-xl text-muted-foreground">
      The quickest way to reach me is a call or a text. I answer between sessions, so it may take a little while.
    </p>
  </div>

  <div class="grid gap-5 md:grid-cols-2">
    <div class="grain flex flex-col gap-4 rounded-3xl bg-canvas-deep p-6 text-canvas-deep-foreground sm:p-8">
      <span class="flex size-10 items-center justify-center rounded-full bg-canvas-deep-foreground/10">
        <PhoneIcon class="size-5" aria-hidden="true" />
      </span>
      <h2 class="text-display-sm">Call or text</h2>
      <a href={site.phoneHref} class="font-display text-display-md hover:text-honey">{site.phone}</a>
      <div class="mt-auto flex flex-wrap gap-3">
        <Button href={site.phoneHref} variant="inverse" size="sm">
          <PhoneIcon data-icon="inline-start" />
          Call
        </Button>
        <Button href={site.smsHref} variant="ghost" size="sm" class="text-canvas-deep-foreground hover:bg-canvas-deep-foreground/10">
          <MessageSquareIcon data-icon="inline-start" />
          Text
        </Button>
      </div>
    </div>

    <div class="flex flex-col gap-4 rounded-3xl border border-border bg-card p-6 sm:p-8">
      <span class="flex size-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
        <MailIcon class="size-5" aria-hidden="true" />
      </span>
      <h2 class="text-display-sm">Email</h2>
      <a href="mailto:{site.email}" class="break-all font-display text-xl text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary sm:text-2xl">{site.email}</a>
      <p class="mt-auto text-sm text-muted-foreground">Good for questions that can wait a day. For booking, MassageBook or a text is faster.</p>
    </div>

    <div class="flex flex-col gap-4 rounded-3xl border border-border bg-card p-6 sm:p-8">
      <span class="flex size-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
        <MapPinIcon class="size-5" aria-hidden="true" />
      </span>
      <h2 class="text-display-sm">Visit</h2>
      <address class="text-lg not-italic">
        {site.address.street}<br />
        {site.address.city}, {site.address.state} {site.address.zip}
      </address>
      <p class="text-sm text-muted-foreground">{site.address.note}. By appointment only, so please book or call before you come.</p>
      <a href={site.mapsHref} target="_blank" rel="noopener" class="mt-auto w-fit text-sm font-semibold text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary">Get directions</a>
    </div>

    <div class="flex flex-col gap-4 rounded-3xl bg-sage p-6 text-sage-foreground sm:p-8">
      <span class="flex size-10 items-center justify-center rounded-full bg-background text-primary">
        <ClockIcon class="size-5" aria-hidden="true" />
      </span>
      <h2 class="text-display-sm">Hours</h2>
      <dl class="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2">
        {#each site.hours as { days, time } (days)}
          <dt class="text-muted-foreground">{days}</dt>
          <dd>{time}</dd>
        {/each}
      </dl>
    </div>
  </div>

  <div class="overflow-hidden rounded-3xl border border-border bg-sage">
    <iframe
      src={mapSrc}
      title="Map showing {site.name} at {site.address.street}, {site.address.city}, {site.address.state}"
      class="block h-72 w-full saturate-[0.6] sm:h-96"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      allowfullscreen
    ></iframe>
  </div>
</section>

<CtaBand />
