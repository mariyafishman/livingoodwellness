<script lang="ts">
  import SEO from '#lib/components/seo.svelte';
  import { Button } from '#lib/components/ui/button/index.ts';
  import { site, isExternal } from '#lib/config/site.ts';
  import PhoneIcon from '@lucide/svelte/icons/phone';
  import MessageSquareIcon from '@lucide/svelte/icons/message-square';
  import MailIcon from '@lucide/svelte/icons/mail';
  import MapPinIcon from '@lucide/svelte/icons/map-pin';

  const bookingExternal = isExternal(site.bookingUrl);
  const bookingIsThisPage = site.bookingUrl === '/contact';

  const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`;
  const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed&z=15`;
</script>

<SEO
  title="Contact"
  description="Call or text Mariya Fishman at 978-493-6171 to book massage therapy in Hudson, MA. Home studio at 157 Marlboro Street, by appointment. Mon, Wed, Fri 9–7; Tue, Thu 2–7."
/>

<section class="sheet pt-10 pb-10 md:pt-16 md:pb-14">
  <p class="label">Contact</p>
  <h1 class="mt-5 max-w-4xl text-5xl leading-[0.98] sm:text-6xl md:text-7xl lg:text-8xl">
    Call or text. That is the fastest way.
  </h1>
  <a
    href={site.phoneHref}
    class="mt-8 inline-block font-mono text-4xl tabular-nums underline decoration-sun decoration-[5px] underline-offset-[10px] sm:text-5xl md:text-6xl"
  >
    {site.phone}
  </a>
  <p class="mt-6 max-w-xl text-lg text-muted-foreground">
    Mariya answers her own phone. If she is with a client, leave a message or send a text and she will get back to you between sessions.
  </p>
  <div class="mt-8 flex flex-col gap-3 sm:flex-row">
    <Button href={site.phoneHref} size="lg" class="h-14 px-8 text-lg"><PhoneIcon class="size-5" /> Call</Button>
    <Button href={site.smsHref} variant="outline" size="lg" class="h-14 px-8 text-lg"><MessageSquareIcon class="size-5" /> Text</Button>
    <Button href="mailto:{site.email}" variant="outline" size="lg" class="h-14 px-8 text-lg"><MailIcon class="size-5" /> Email</Button>
  </div>
</section>

<section class="sheet rule py-14 md:py-20">
  <div class="grid gap-12 md:grid-cols-12">
    <!-- Hours -->
    <div class="md:col-span-4">
      <p class="label"><span class="text-foreground">§ 01</span> — Hours</p>
      <dl class="mt-4 font-mono text-base">
        {#each site.hours as h (h.day)}
          <div class="rule flex justify-between gap-4 py-3">
            <dt class={h.open ? '' : 'text-muted-foreground'}>{h.day}</dt>
            <dd class="tabular-nums">{h.open ? `${h.open} – ${h.close}` : h.note}</dd>
          </div>
        {/each}
      </dl>
      <p class="mt-4 text-muted-foreground">All sessions are by appointment. No walk-ins.</p>
    </div>

    <!-- Visit -->
    <div class="md:col-span-4">
      <p class="label"><span class="text-foreground">§ 02</span> — Where</p>
      <address class="mt-4 font-display text-2xl not-italic leading-snug md:text-3xl">
        {site.address.street}<br />
        {site.address.city}, {site.address.state} {site.address.zip}
      </address>
      <p class="mt-4 text-muted-foreground">
        A private home with a dedicated studio room. Mariya will tell you where to park and which door to use when you book. Please note it is Marlboro Street, not Main Street.
      </p>
      <div class="mt-5 flex flex-wrap gap-3">
        <Button href={site.mapsUrl} variant="outline" target="_blank" rel="noopener"><MapPinIcon /> Google Maps</Button>
        <Button href={site.appleMapsUrl} variant="outline" target="_blank" rel="noopener"><MapPinIcon /> Apple Maps</Button>
      </div>
    </div>

    <!-- Book -->
    <div class="md:col-span-4">
      <p class="label"><span class="text-foreground">§ 03</span> — Booking</p>
      {#if bookingIsThisPage}
        <p class="mt-4 text-lg">
          Online booking is coming soon. Until then, call or text {site.phone} and Mariya will find you a time.
        </p>
      {:else}
        <p class="mt-4 text-lg">
          Pick a time, pay online if you like, and fill in the short intake form before your first visit.
        </p>
        <Button
          href={site.bookingUrl}
          size="lg"
          class="mt-5 h-14 w-full text-lg"
          target={bookingExternal ? '_blank' : undefined}
          rel={bookingExternal ? 'noopener' : undefined}
        >
          Book a session
        </Button>
      {/if}
      <p class="mt-6 text-muted-foreground">
        Email works too: <a href="mailto:{site.email}" class="break-all underline underline-offset-4">{site.email}</a>
      </p>
    </div>
  </div>
</section>

<section class="sheet rule py-14 md:py-20">
  <p class="label"><span class="text-foreground">§ 04</span> — On the map</p>
  <div class="mt-4 border border-border">
    <iframe
      src={mapEmbed}
      title="Map showing {fullAddress}"
      class="block h-80 w-full md:h-[28rem]"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      allowfullscreen
    ></iframe>
  </div>
  <p class="label mt-4">Serving {site.serviceArea.join(' · ')} · Just off I-495</p>
</section>
