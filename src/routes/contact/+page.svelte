<script lang="ts">
  import SEO from '#lib/components/seo.svelte';
  import PageIntro from '#lib/components/page-intro.svelte';
  import { Button } from '#lib/components/ui/button/index.ts';
  import { site, hours } from '#lib/config/site.ts';

  const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`;
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;

  const textLink =
    'inline-block rounded-sm font-display font-bold underline decoration-2 underline-offset-4 outline-none hover:opacity-80 focus-visible:ring-3 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background';
</script>

<SEO
  title="Contact"
  description="Call or text Mariya Fishman at 978-493-6171, or email. Livingood Wellness Center is a home studio at 157 Marlboro Street, Hudson, MA 01749. By appointment only."
/>

<PageIntro title="Contact" lead="A call or a text is the quickest way to reach Mariya. She answers between sessions.">
  <div class="mt-8 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:gap-4 md:mt-10">
    <Button href={site.phone.tel}>Call {site.phone.display}</Button>
    <Button href={site.phone.sms} variant="outline">Send a text</Button>
  </div>
</PageIntro>

<section class="wrap section-gap grid gap-3 md:grid-cols-2 md:gap-5" aria-label="Ways to reach the studio">
  <div class="rounded-[1rem] bg-secondary p-5 text-secondary-foreground md:rounded-lg md:p-8">
    <h2 class="display-3">Phone</h2>
    <p class="mt-3 font-display text-[1.75rem] leading-none font-extrabold tracking-[-0.03em] md:text-[2.25rem]">
      <a href={site.phone.tel} class="rounded-sm outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary">{site.phone.display}</a>
    </p>
    <p class="mt-3 text-sm leading-normal md:text-[0.9375rem]">Call or text. If she is with a client, leave a message and she will get back to you.</p>
  </div>
  <div class="rounded-[1rem] bg-accent p-5 text-accent-foreground md:rounded-lg md:p-8">
    <h2 class="display-3">Email</h2>
    <p class="mt-3 font-display text-base leading-tight font-extrabold tracking-[-0.02em] break-words md:text-2xl">
      <a href="mailto:{site.email}" class="rounded-sm outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-accent">{site.email}</a>
    </p>
    <p class="mt-3 text-sm leading-normal md:text-[0.9375rem]">Good for questions that can wait a day. For appointments, the booking page is faster.</p>
  </div>
  <div class="rounded-[1rem] bg-primary p-5 text-primary-foreground md:rounded-lg md:p-8">
    <h2 class="display-3">Studio</h2>
    <address class="mt-3 font-display text-xl leading-tight font-extrabold tracking-[-0.02em] not-italic md:text-2xl">
      {site.address.street}<br />{site.address.city}, {site.address.state} {site.address.zip}
    </address>
    <p class="mt-3 text-sm leading-normal md:text-[0.9375rem]">{site.address.note}</p>
    <a href={directionsUrl} target="_blank" rel="noopener" class={[textLink, 'mt-4 text-sm focus-visible:ring-offset-primary']}>Get directions</a>
  </div>
  <div class="rounded-[1rem] border p-5 md:rounded-lg md:p-8">
    <h2 class="display-3">Hours</h2>
    <dl class="mt-4 grid grid-cols-[1fr_auto] gap-x-6 gap-y-2 text-sm md:text-base">
      {#each hours as { days, time } (days)}
        <dt>{days}</dt>
        <dd class="text-muted-foreground">{time}</dd>
      {/each}
    </dl>
    <p class="mt-4 text-sm text-muted-foreground">By appointment only.</p>
  </div>
</section>

<section class="wrap section-gap grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:gap-16" aria-labelledby="book-title">
  <div>
    <h2 id="book-title" class="display-2">Ready to book?</h2>
    <p class="lead mt-4 max-w-[24rem] md:mt-6">Pick a service and a time on the booking page. New clients get a short intake form by email.</p>
  </div>
  <div class="flex flex-col gap-2.5 sm:flex-row sm:items-start sm:gap-4">
    <Button href="/book">Book a session</Button>
    <Button href="/services" variant="outline">See services and rates</Button>
  </div>
</section>
