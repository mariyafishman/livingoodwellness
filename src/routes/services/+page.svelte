<script lang="ts">
  import ArrowUpRightIcon from '@lucide/svelte/icons/arrow-up-right';
  import SEO from '#lib/components/seo.svelte';
  import PageIntro from '#lib/components/page-intro.svelte';
  import ServiceList from '#lib/components/service-list.svelte';
  import Rates from '#lib/components/rates.svelte';
  import { Button } from '#lib/components/ui/button/index.ts';
  import { massage, packages, membership, bemer, lifewave, goodToKnow } from '#lib/config/site.ts';
</script>

<SEO
  title="Services and rates"
  description="Massage therapy from $90, six-session packages, an $80 monthly membership, Bemer circulation sessions, and the LifeWave patches Mariya recommends. By appointment in Mariya Fishman's home studio in Hudson, MA."
/>

<PageIntro
  title="Services"
  lead="Massage therapy and Bemer circulation sessions, by appointment in a quiet home studio in Hudson, MA."
/>

<!-- Massage therapy -->
<section class="wrap section-gap" aria-labelledby="massage-title">
  <div class="flex flex-col gap-8 rounded-block bg-accent text-accent-foreground block-pad md:gap-10">
    <div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-10">
      <h2 id="massage-title" class="display-2 max-w-[12ch]">Massage therapy</h2>
      <p class="lead-sm max-w-[26rem] text-muted-foreground">
        Every session is one-on-one with Mariya, shaped around what your body needs that day. Choose the length; she
        chooses the approach with you.
      </p>
    </div>
    <ServiceList />
    <div class="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:gap-6">
      <h3 class="shrink-0 font-semibold">Who it's for</h3>
      <ul class="flex flex-wrap gap-2">
        {#each massage.audiences as audience (audience)}
          <li class="rounded-full border border-current/40 px-4 py-1.5 text-[0.9375rem]">{audience}</li>
        {/each}
      </ul>
    </div>
  </div>
</section>

<!-- Sessions -->
<section class="wrap section-gap flex flex-col gap-8 md:gap-10" aria-labelledby="sessions-title">
  <div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-10">
    <h2 id="sessions-title" class="display-2">Sessions and rates</h2>
    <p class="lead-sm max-w-[26rem] text-muted-foreground">Choose the time that suits you. Every length is the same care.</p>
  </div>
  <Rates />
  <Button href="/book" class="self-start">Book a session</Button>
</section>

<!-- Packages and membership -->
<section class="wrap section-gap grid gap-5 md:grid-cols-[1.2fr_0.8fr]" aria-labelledby="packages-title">
  <div id="packages" class="flex flex-col items-start gap-6 scroll-mt-8 rounded-block bg-secondary text-secondary-foreground block-pad">
    <div class="flex w-full flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
      <h2 id="packages-title" class="display-3">Six-session packages</h2>
      <p class="text-muted-foreground">{packages.note}</p>
    </div>
    <table class="w-full border-t text-left">
      <caption class="sr-only">Package prices by session length</caption>
      <thead class="sr-only">
        <tr><th scope="col">Length</th><th scope="col">Price</th><th scope="col">Savings</th></tr>
      </thead>
      <tbody>
        {#each packages.items as { duration, price, savings } (duration)}
          <tr class="border-b">
            <th scope="row" class="py-3.5 text-lg font-semibold md:py-4 md:text-xl">{duration}</th>
            <td class="py-3.5 font-display text-2xl font-medium tracking-[-0.02em] md:py-4 md:text-[1.75rem]">{price}</td>
            <td class="py-3.5 text-right text-muted-foreground md:py-4">{savings}</td>
          </tr>
        {/each}
      </tbody>
    </table>
    <p>Packages are prepaid and bought on the booking page.</p>
    <Button href="/book">Buy a package</Button>
  </div>
  <div class="flex flex-col items-start gap-5 rounded-block bg-accent text-accent-foreground block-pad">
    <h2 class="display-3">Monthly membership</h2>
    <p class="flex flex-wrap items-baseline gap-x-2">
      <span class="price">{membership.price}</span>
      <span class="text-muted-foreground">/ {membership.period}</span>
    </p>
    <p>{membership.description}</p>
    <p>A good fit if you like to keep a regular rhythm. Join on the booking page.</p>
    <Button href="/book" class="mt-auto">Join</Button>
  </div>
</section>

<!-- Bemer -->
<section class="wrap section-gap" aria-labelledby="bemer-title">
  <div class="grid gap-8 rounded-block bg-muted block-pad md:grid-cols-[1.1fr_0.9fr] md:gap-12 lg:gap-16">
    <div class="flex flex-col items-start gap-5">
      <h2 id="bemer-title" class="display-2 max-w-[12ch]">{bemer.name}</h2>
      <p class="flex flex-wrap items-baseline gap-x-2">
        <span class="price">{bemer.price}</span>
        <span class="text-muted-foreground">/ {bemer.duration}</span>
      </p>
    </div>
    <div class="flex flex-col justify-between gap-6">
      <div class="flex flex-col items-start gap-4">
        <p class="lead-sm">{bemer.description}</p>
        <p class="lead-sm">A calm half hour on the mat. Often booked alongside a massage, or on its own between sessions.</p>
        <Button href="/book" class="mt-2">Book a Bemer session</Button>
      </div>
      <p class="text-xs leading-snug text-muted-foreground">{bemer.disclaimer}</p>
    </div>
  </div>
</section>

<!-- LifeWave -->
<section class="wrap section-gap" aria-labelledby="lifewave-title">
  <div
    id="lifewave"
    class="grid scroll-mt-8 gap-8 rounded-block bg-secondary text-secondary-foreground block-pad md:grid-cols-[1.1fr_0.9fr] md:gap-12 lg:gap-16"
  >
    <div class="flex flex-col items-start gap-5">
      <h2 id="lifewave-title" class="display-2">{lifewave.name}</h2>
      <p class="lead-sm max-w-[26rem]">{lifewave.description}</p>
    </div>
    <div class="flex flex-col justify-between gap-6">
      <div class="flex flex-col items-start gap-4">
        <p class="lead-sm">Ask Mariya about them at your next visit, or order straight from LifeWave.</p>
        <Button href={lifewave.url} target="_blank" rel="noopener" class="mt-2">
          Order from LifeWave
          <ArrowUpRightIcon data-icon="inline-end" aria-hidden="true" />
        </Button>
      </div>
      <p class="text-xs leading-snug text-muted-foreground">{lifewave.disclaimer}</p>
    </div>
  </div>
</section>

<!-- Good to know -->
<section class="wrap section-gap grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-12 lg:gap-16" aria-labelledby="know-title">
  <div class="flex flex-col items-start gap-7">
    <h2 id="know-title" class="display-2">Good to know</h2>
    <Button href="/book" class="max-md:hidden">Book a session</Button>
  </div>
  <div class="flex flex-col gap-6">
    <ul class="border-t">
      {#each goodToKnow as item (item)}
        <li class="border-b py-4 text-lg leading-normal md:py-5">{item}</li>
      {/each}
    </ul>
    <Button href="/book" class="self-start md:hidden">Book a session</Button>
  </div>
</section>
