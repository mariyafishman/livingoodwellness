<script lang="ts">
  import SEO from '#lib/components/seo.svelte';
  import SectionHeading from '#lib/components/section-heading.svelte';
  import CtaBand from '#lib/components/cta-band.svelte';
  import Portrait from '#lib/components/portrait.svelte';
  import PriceList from '#lib/components/price-list.svelte';
  import HoursTable from '#lib/components/hours-table.svelte';
  import { Button } from '#lib/components/ui/button/index.ts';
  import { Badge } from '#lib/components/ui/badge/index.ts';
  import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
  import PhoneIcon from '@lucide/svelte/icons/phone';
  import { site } from '#lib/config/site.ts';
  import { massage, packages, membership, bemer, goodToKnow, audiences, formatPrice } from '#lib/config/services.ts';

  const minSavings = Math.min(...packages.tiers.map((t) => t.savings));
  const maxSavings = Math.max(...packages.tiers.map((t) => t.savings));

  const offers = [
    {
      eyebrow: `${packages.sessions} sessions, prepaid`,
      title: packages.name,
      price: `Save ${formatPrice(minSavings)}–${formatPrice(maxSavings)}`,
      text: packages.summary,
      href: '/services#packages',
      cta: 'See package prices'
    },
    {
      eyebrow: 'Monthly',
      title: membership.name,
      price: `${formatPrice(membership.price)} / ${membership.period}`,
      text: membership.summary,
      href: '/services#membership',
      cta: 'How membership works'
    },
    {
      eyebrow: `${bemer.duration} min`,
      title: bemer.name,
      price: formatPrice(bemer.price),
      text: bemer.summary,
      href: '/services#bemer',
      cta: 'About Bemer',
      footnote: bemer.disclaimer
    }
  ];
</script>

<SEO />

<!-- Hero -->
<section class="relative overflow-hidden">
  <div class="container-page grid gap-12 py-14 lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-24">
    <div class="flex flex-col gap-7 lg:col-span-7">
      <p class="eyebrow">Massage therapy · {site.address.city}, Massachusetts</p>
      <h1 class="font-display text-[3.25rem] leading-[0.95] font-medium text-balance sm:text-7xl lg:text-8xl">
        Find your <em class="font-light text-primary">balance.</em>
      </h1>
      <p class="max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
        Massage therapy in {site.address.city}, {site.address.state}. Over 30 years of experience with seniors,
        athletes, children and everyone in between, one person at a time.
      </p>
      <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button href="/book" size="lg">Book a session</Button>
        <Button href="/services" size="lg" variant="outline">
          See services and prices
          <ArrowRightIcon data-icon="inline-end" />
        </Button>
      </div>
      <p class="text-sm text-muted-foreground">
        Prefer to talk? Call or text
        <a
          href="tel:{site.phone.tel}"
          class="rounded-sm font-medium text-foreground underline decoration-primary/40 underline-offset-4 outline-none hover:decoration-primary focus-visible:ring-2 focus-visible:ring-ring"
          >{site.phone.display}</a
        >.
      </p>
    </div>

    <div class="relative mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none">
      <div class="absolute -bottom-8 -left-8 size-40 rounded-full bg-highlight sm:size-52" aria-hidden="true"></div>
      <div class="absolute -top-6 -right-4 size-16 rounded-full border-2 border-primary/30" aria-hidden="true"></div>
      <Portrait priority class="relative" />
      <div
        class="absolute right-4 bottom-6 flex flex-col rounded-lg border bg-card/95 px-4 py-3 text-sm backdrop-blur sm:right-6"
      >
        <span class="font-display text-lg font-medium">{site.practitioner.name}</span>
        <span class="text-muted-foreground">{site.practitioner.title} · 30+ years</span>
      </div>
    </div>
  </div>
</section>

<!-- Who I work with -->
<section class="border-t" aria-labelledby="audiences-title">
  <div class="container-page flex flex-col gap-12 py-20 lg:py-24">
    <SectionHeading id="audiences-title" eyebrow="Who I work with" title="Everyone from newborns to great-grandparents.">
      <p>
        Massage is not one thing. Bodies are different, days are different, and the work adapts to the person on
        the table.
      </p>
    </SectionHeading>

    <ol class="grid gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-2 lg:grid-cols-4">
      {#each audiences as { title, text }, i (title)}
        <li class="flex flex-col gap-5 bg-card p-6 sm:p-7">
          <div class="flex items-center justify-between">
            <span class="font-display text-sm text-muted-foreground tabular-nums">0{i + 1}</span>
            <span class="flex size-6 items-center justify-center" aria-hidden="true">
              {#if i === 0}
                <span class="size-5 rounded-full bg-primary"></span>
              {:else if i === 1}
                <span class="size-4 rotate-45 bg-highlight"></span>
              {:else if i === 2}
                <span class="h-2.5 w-5 rounded-t-full bg-clay"></span>
              {:else}
                <span class="size-5 rounded-full border-2 border-primary"></span>
              {/if}
            </span>
          </div>
          <div class="flex flex-col gap-2">
            <h3 class="font-display text-2xl font-medium">{title}</h3>
            <p class="text-sm leading-relaxed text-muted-foreground">{text}</p>
          </div>
        </li>
      {/each}
    </ol>
  </div>
</section>

<!-- Services and prices -->
<section class="border-t bg-muted/50" aria-labelledby="services-title">
  <div class="container-page flex flex-col gap-12 py-20 lg:py-24">
    <SectionHeading id="services-title" eyebrow="Services" title="Straightforward sessions, straightforward prices.">
      <p>{massage.summary}</p>
      {#snippet aside()}
        <Button href="/services" variant="outline">
          All services
          <ArrowRightIcon data-icon="inline-end" />
        </Button>
      {/snippet}
    </SectionHeading>

    <div class="grid gap-6 lg:grid-cols-12 lg:items-start">
      <div class="flex flex-col gap-6 rounded-xl border bg-card p-6 sm:p-8 lg:col-span-7">
        <div class="flex flex-col gap-2">
          <h3 class="font-display text-3xl font-medium">{massage.name}</h3>
          <p class="text-sm text-muted-foreground">Choose a length. Everything else we work out together.</p>
        </div>
        <PriceList rows={massage.prices} label="Massage therapy prices" />
        <ul class="flex flex-wrap gap-2" aria-label="Modalities">
          {#each massage.modalities as modality (modality)}
            <li><Badge variant="secondary">{modality}</Badge></li>
          {/each}
        </ul>
        <Button href="/book" class="self-start">Book a massage</Button>
      </div>

      <div class="flex flex-col gap-4 lg:col-span-5">
        {#each offers as offer (offer.title)}
          <article class="flex flex-col gap-3 rounded-xl border bg-card p-6">
            <p class="eyebrow">{offer.eyebrow}</p>
            <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 class="font-display text-2xl font-medium">{offer.title}</h3>
              <span class="font-display text-xl font-light tabular-nums">{offer.price}</span>
            </div>
            <p class="text-sm leading-relaxed text-muted-foreground">{offer.text}</p>
            {#if offer.footnote}
              <p class="text-xs leading-relaxed text-muted-foreground/80">{offer.footnote}</p>
            {/if}
            <a
              href={offer.href}
              class="mt-1 inline-flex w-fit items-center gap-1.5 rounded-sm text-sm font-medium text-primary underline decoration-primary/40 underline-offset-4 outline-none hover:decoration-primary focus-visible:ring-2 focus-visible:ring-ring"
            >
              {offer.cta}
              <ArrowRightIcon class="size-4" aria-hidden="true" />
            </a>
          </article>
        {/each}
      </div>
    </div>
  </div>
</section>

<!-- About teaser -->
<section class="border-t" aria-labelledby="about-title">
  <div class="container-page grid gap-12 py-20 lg:grid-cols-12 lg:gap-16 lg:py-24">
    <div class="flex flex-col gap-6 lg:col-span-7">
      <p class="eyebrow">Meet Mariya</p>
      <blockquote class="font-display text-3xl leading-tight font-light text-balance sm:text-4xl lg:text-[2.75rem]">
        <p>
          “What brought me back was the same thing I now offer my clients: patient hands-on care, good circulation,
          and the belief that <em class="text-primary">the body knows how to heal</em> when you give it what it
          needs.”
        </p>
      </blockquote>
      <h2 id="about-title" class="sr-only">About Mariya Fishman</h2>
      <p class="max-w-prose text-base leading-relaxed text-muted-foreground sm:text-lg">
        {site.practitioner.name} has practiced massage therapy for over 30 years. A trained engineer who found her real
        work in bodywork, she sees seniors, athletes, children and everyone in between from her home studio in
        {site.address.city}, {site.address.state}, and offers Bemer circulation sessions to support recovery.
      </p>
      <Button href="/about" variant="outline" class="self-start">
        Her story
        <ArrowRightIcon data-icon="inline-end" />
      </Button>
    </div>

    <div class="flex flex-col gap-6 lg:col-span-5">
      <div class="rounded-xl border bg-secondary/60 p-6 sm:p-8">
        <p class="eyebrow mb-4">Good to know</p>
        <ul class="flex flex-col divide-y divide-border">
          {#each goodToKnow as item (item.title)}
            <li class="flex flex-col gap-1 py-4 first:pt-0 last:pb-0">
              <span class="font-display text-lg font-medium">{item.title}</span>
              <span class="text-sm leading-relaxed text-muted-foreground">{item.text}</span>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- Visit -->
<section class="border-t bg-muted/50" aria-labelledby="visit-title">
  <div class="container-page grid gap-10 py-20 md:grid-cols-2 lg:grid-cols-12 lg:py-24">
    <div class="flex flex-col gap-5 lg:col-span-5">
      <p class="eyebrow">Visit</p>
      <h2 id="visit-title" class="font-display text-3xl font-medium sm:text-4xl">A quiet studio in Hudson.</h2>
      <address class="text-lg leading-relaxed not-italic">
        {site.address.street}<br />
        {site.address.city}, {site.address.state} {site.address.zip}
      </address>
      <p class="text-muted-foreground">{site.address.note}. By appointment only.</p>
      <div class="flex flex-col gap-3 sm:flex-row">
        <Button href={site.mapsUrl} variant="outline" target="_blank" rel="noopener noreferrer">Open in Google Maps</Button>
        <Button href="tel:{site.phone.tel}" variant="ghost">
          <PhoneIcon data-icon="inline-start" />
          {site.phone.display}
        </Button>
      </div>
    </div>
    <div class="rounded-xl border bg-card p-6 sm:p-8 lg:col-span-6 lg:col-start-7">
      <p class="eyebrow mb-4">Hours</p>
      <HoursTable class="text-base" />
      <p class="mt-6 text-sm text-muted-foreground">Evenings fill first. Booking a week ahead is a good idea.</p>
    </div>
  </div>
</section>

<CtaBand />
