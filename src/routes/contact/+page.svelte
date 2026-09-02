<script lang="ts">
  import SEO from '#lib/components/seo.svelte';
  import Hours from '#lib/components/hours.svelte';
  import { Button } from '#lib/components/ui/button/index.ts';
  import PhoneIcon from '@lucide/svelte/icons/phone';
  import MessageIcon from '@lucide/svelte/icons/message-circle';
  import MailIcon from '@lucide/svelte/icons/mail';
  import CalendarIcon from '@lucide/svelte/icons/calendar-check';
  import { site, isExternal } from '#lib/config/site.ts';

  const online = isExternal(site.bookingUrl);
</script>

<SEO
  title="Contact"
  description="Call or text Mariya at 978-493-6171 to book massage therapy at her home studio, 157 Marlboro Street, Hudson, MA 01749. By appointment."
/>

<!-- Phone first -->
<section class="bg-butter text-butter-foreground">
  <div class="wrap flex flex-col gap-6 py-14 lg:py-20">
    <p class="label">Contact</p>
    <h1 class="display text-[clamp(2.5rem,6vw,5rem)]">Call or text. That is the easiest.</h1>
    <a
      class="display inline-block text-[clamp(2.75rem,10vw,8rem)] tabular-nums underline-offset-[0.12em] hover:underline"
      href={site.phoneHref}>{site.phone}</a
    >
    <div class="flex flex-wrap gap-3">
      <Button size="lg" href={site.phoneHref}>
        <PhoneIcon data-icon="inline-start" />
        Call
      </Button>
      <Button size="lg" href={site.smsHref}>
        <MessageIcon data-icon="inline-start" />
        Text
      </Button>
      <Button variant="outline" size="lg" href="mailto:{site.email}">
        <MailIcon data-icon="inline-start" />
        Email
      </Button>
    </div>
    <p class="text-butter-foreground/80">
      Prefer email? <a class="underline underline-offset-4" href="mailto:{site.email}">{site.email}</a>
    </p>
  </div>
</section>

<!-- Visit -->
<section class="wrap grid gap-10 py-16 lg:grid-cols-12 lg:gap-16 lg:py-24">
  <div class="flex flex-col gap-10 lg:col-span-6">
    <div class="flex flex-col gap-3">
      <h2 class="label text-primary">Where</h2>
      <p class="display text-3xl sm:text-4xl">
        {site.address.street}<br />{site.address.city}, {site.address.state} {site.address.zip}
      </p>
      <p class="text-lg/relaxed text-muted-foreground">
        A private home with a dedicated studio room, in Hudson just off I-495. Everything is by
        appointment, so you will never wait.
      </p>
      <div>
        <Button variant="outline" href={site.mapsUrl} target="_blank" rel="noopener">Open in Maps</Button>
      </div>
    </div>
    <div class="flex flex-col gap-3">
      <h2 class="label text-primary">Hours</h2>
      <Hours class="text-lg" />
    </div>
  </div>
  <div class="lg:col-span-6">
    <div class="arch aspect-4/5 overflow-hidden bg-muted">
      <iframe
        title="Map of {site.address.street}, {site.address.city}"
        src={site.mapsEmbedUrl}
        class="size-full border-0"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</section>

<!-- Booking -->
<section class="bg-pine text-pine-foreground">
  <div class="wrap grid items-center gap-8 py-16 lg:grid-cols-12 lg:py-24">
    <div class="flex flex-col gap-4 lg:col-span-8">
      <p class="label text-butter">Booking</p>
      {#if online}
        <h2 class="display text-[clamp(2.25rem,5.5vw,4.5rem)]">Book online, any time.</h2>
        <p class="max-w-xl text-lg/relaxed text-pine-foreground/85">
          Pick a session and a time on MassageBook. You will get a short intake form and a reminder before
          your visit.
        </p>
      {:else}
        <h2 class="display text-[clamp(2.25rem,5.5vw,4.5rem)]">Online booking is coming soon.</h2>
        <p class="max-w-xl text-lg/relaxed text-pine-foreground/85">
          Until then, call or text Mariya and she will find you a time.
        </p>
      {/if}
    </div>
    <div class="lg:col-span-4 lg:justify-self-end">
      {#if online}
        <Button variant="secondary" size="lg" href={site.bookingUrl} target="_blank">
          <CalendarIcon data-icon="inline-start" />
          Book a session
        </Button>
      {:else}
        <Button variant="secondary" size="lg" href={site.smsHref}>
          <MessageIcon data-icon="inline-start" />
          Text {site.phone}
        </Button>
      {/if}
    </div>
  </div>
</section>
