<script lang="ts">
  import SEO from '#lib/components/seo.svelte';
  import PageIntro from '#lib/components/page-intro.svelte';
  import { Button } from '#lib/components/ui/button/index.ts';
  import { site, hours } from '#lib/config/site.ts';

  const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`;
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;

  /* A big contact detail set as a link: underlines on hover, keeps its display size. */
  const bigLink =
    'rounded-xs outline-none decoration-[1.5px] underline-offset-[6px] hover:underline focus-visible:ring-3 focus-visible:ring-ring/60 focus-visible:ring-offset-4 focus-visible:ring-offset-background';
</script>

<SEO
  title="Contact"
  description="Call or text Mariya Fishman at 978-493-6171, or email. Livingood Wellness Center is a home studio at 157 Marlboro Street, Hudson, MA 01749. By appointment only."
/>

<PageIntro title="Contact" lead="A call or a text is the quickest way to reach Mariya. She answers between sessions.">
  <div class="flex flex-col gap-3 self-stretch sm:flex-row sm:self-start">
    <Button href={site.phone.tel}>Call {site.phone.display}</Button>
    <Button href={site.phone.sms} variant="outline">Send a text</Button>
  </div>
</PageIntro>

<section class="wrap section-gap grid gap-5 md:grid-cols-2" aria-label="Ways to reach the studio">
  <div class="flex flex-col items-start gap-4 rounded-block bg-secondary text-secondary-foreground block-pad">
    <h2 class="display-3">Phone</h2>
    <p class="font-display text-[2rem] leading-none font-medium tracking-[-0.025em] md:text-[2.5rem]">
      <a href={site.phone.tel} class={bigLink}>{site.phone.display}</a>
    </p>
    <p>Call or text. If she is with a client, leave a message and she will get back to you.</p>
  </div>
  <div class="flex flex-col items-start gap-4 rounded-block bg-accent text-accent-foreground block-pad">
    <h2 class="display-3">Email</h2>
    <p class="font-display text-lg leading-tight font-medium tracking-[-0.02em] [overflow-wrap:anywhere] sm:text-xl md:text-[1.75rem]">
      <a href="mailto:{site.email}" class={bigLink}>{site.email}</a>
    </p>
    <p>Good for questions that can wait a day. For appointments, the booking page is faster.</p>
  </div>
  <div class="flex flex-col items-start gap-4 rounded-block bg-muted block-pad">
    <h2 class="display-3">Studio</h2>
    <address class="font-display text-xl leading-tight font-medium tracking-[-0.02em] not-italic md:text-[1.75rem]">
      {site.address.street}<br />{site.address.city}, {site.address.state} {site.address.zip}
    </address>
    <p>{site.address.note}</p>
    <a href={directionsUrl} target="_blank" rel="noopener" class="text-link text-[0.9375rem]">Get directions</a>
  </div>
  <div class="flex flex-col items-start gap-4 rounded-block border block-pad">
    <h2 class="display-3">Hours</h2>
    <dl class="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2">
      {#each hours as { days, time } (days)}
        <dt class="font-semibold">{days}</dt>
        <dd class="text-muted-foreground">{time}</dd>
      {/each}
    </dl>
    <p class="text-muted-foreground">By appointment only.</p>
  </div>
</section>

<section class="wrap section-gap grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-12 lg:gap-16" aria-labelledby="book-title">
  <div class="flex flex-col gap-4">
    <h2 id="book-title" class="display-2">Ready to book?</h2>
    <p class="lead-sm max-w-[24rem] text-muted-foreground">
      Pick a service and a time on the booking page. New clients get a short intake form by email.
    </p>
  </div>
  <div class="flex flex-col gap-3 sm:flex-row sm:items-start">
    <Button href="/book">Book a session</Button>
    <Button href="/services" variant="outline">See services and rates</Button>
  </div>
</section>
