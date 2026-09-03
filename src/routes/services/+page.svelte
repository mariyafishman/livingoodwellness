<script lang="ts">
  import SEO from '#lib/components/seo.svelte';
  import PageHeader from '#lib/components/page-header.svelte';
  import SectionHeading from '#lib/components/section-heading.svelte';
  import CtaBand from '#lib/components/cta-band.svelte';
  import { Button } from '#lib/components/ui/button/index.ts';
  import * as Card from '#lib/components/ui/card/index.ts';
  import { Badge } from '#lib/components/ui/badge/index.ts';
  import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
  import CheckIcon from '@lucide/svelte/icons/check';
  import { massageRates, modalities, packages, membership, bemer, goodToKnow, usd } from '#lib/config/services.ts';

  const forWhom = ['Seniors', 'Athletes', 'Children and parents', 'Chronic pain', 'Post-injury recovery', 'Relaxation'];
</script>

<SEO
  title="Services and prices"
  description="Massage therapy in Hudson, MA: Swedish, deep tissue, sports, gentle massage for seniors and infant-massage instruction. 60, 90 and 120 minute sessions, prepaid packages, a monthly membership and Bemer circulation sessions."
/>

<PageHeader
  eyebrow="Services"
  title="Services and prices."
  lede="Plain prices and no upsell. Every session is one-on-one in a quiet home studio, shaped around what your body needs that day."
/>

<!-- Massage therapy -->
<section class="section">
  <div class="container-site flex flex-col gap-12">
    <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <SectionHeading eyebrow="Massage therapy" title="Pick a length. The rest we work out together." />
      <Button href="/book" variant="accent">
        Book a session
        <ArrowRightIcon data-icon="inline-end" aria-hidden="true" />
      </Button>
    </div>

    <ul class="grid gap-6 sm:grid-cols-3">
      {#each massageRates as rate, i (rate.duration)}
        <li>
          <Card.Root variant={i === 1 ? 'secondary' : 'default'} class="h-full gap-3">
            <p class="eyebrow text-muted-foreground">{rate.duration}</p>
            <p class="font-display text-6xl font-medium tracking-tight">{usd(rate.price)}</p>
            <p class="text-sm text-muted-foreground">
              {#if i === 0}
                Focused work on one or two areas, or a full-body relaxation session.
              {:else if i === 1}
                Room for full-body work with extra time where it is needed. The most popular choice.
              {:else}
                Unhurried, head to toe, for people with a lot going on.
              {/if}
            </p>
          </Card.Root>
        </li>
      {/each}
    </ul>

    <div class="grid gap-10 lg:grid-cols-2">
      <div class="flex flex-col gap-4">
        <h3 class="text-2xl">Modalities</h3>
        <ul class="flex flex-col divide-y-2 divide-ink border-y-2 border-ink">
          {#each modalities as m (m)}
            <li class="flex items-center gap-3 py-3">
              <span class="size-3 shrink-0 rounded-full bg-primary" aria-hidden="true"></span>
              {m}
            </li>
          {/each}
        </ul>
      </div>
      <div class="flex flex-col gap-4">
        <h3 class="text-2xl">Good for</h3>
        <ul class="flex flex-wrap gap-2">
          {#each forWhom as who (who)}
            <li><Badge variant="secondary" class="px-3 py-1 text-sm">{who}</Badge></li>
          {/each}
        </ul>
        <p class="text-muted-foreground">
          Not sure what you need? Book any length and tell Mariya what is bothering you. She has been doing this
          for over 30 years and will meet you where you are.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Packages and membership -->
<section class="section border-y-2 border-ink bg-muted">
  <div class="container-site flex flex-col gap-12">
    <SectionHeading
      eyebrow="Packages and membership"
      title="Come back often, pay a little less."
      lede="Packages and the membership are prepaid and bought on MassageBook when you book."
    />

    <div class="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
      <Card.Root class="gap-0 p-0">
        <div class="flex items-baseline justify-between border-b-2 border-ink p-6">
          <h3 class="text-2xl">Six-session packages</h3>
          <p class="hidden text-sm text-muted-foreground sm:block">Prepaid</p>
        </div>
        <table class="w-full text-left">
          <thead class="sr-only">
            <tr><th>Session length</th><th>Package price</th><th>Savings</th></tr>
          </thead>
          <tbody class="divide-y-2 divide-ink">
            {#each packages as p (p.duration)}
              <tr>
                <td class="px-6 py-4 font-semibold">{p.duration} × 6</td>
                <td class="px-6 py-4 font-display text-2xl font-medium tracking-tight">{usd(p.price)}</td>
                <td class="px-6 py-4 text-right"><Badge variant="accent">Save {usd(p.savings)}</Badge></td>
              </tr>
            {/each}
          </tbody>
        </table>
        <div class="border-t-2 border-ink p-6">
          <Button href="/book" variant="outline">
            Buy a package on MassageBook
            <ArrowRightIcon data-icon="inline-end" aria-hidden="true" />
          </Button>
        </div>
      </Card.Root>

      <Card.Root variant="secondary" class="gap-4">
        <Card.Header>
          <p class="eyebrow text-secondary-foreground/70">Membership</p>
          <Card.Title>One massage a month</Card.Title>
        </Card.Header>
        <Card.Content>
          <p class="font-display text-5xl font-medium tracking-tight">
            {usd(membership.price)} <span class="font-sans text-base font-semibold">/ {membership.period}</span>
          </p>
          <p>{membership.text}</p>
        </Card.Content>
        <Card.Footer>
          <Button href="/book" variant="default">
            Join on MassageBook
            <ArrowRightIcon data-icon="inline-end" aria-hidden="true" />
          </Button>
        </Card.Footer>
      </Card.Root>
    </div>
  </div>
</section>

<!-- Bemer -->
<section class="section bg-peach text-peach-foreground">
  <div class="container-site grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
    <div class="flex flex-col gap-5">
      <SectionHeading eyebrow="Also offered" title="Bemer circulation session." />
      <p class="font-display text-5xl font-medium tracking-tight">
        {usd(bemer.price)} <span class="font-sans text-base font-semibold">/ {bemer.duration}</span>
      </p>
    </div>
    <div class="flex flex-col gap-5 lg:pt-10">
      <p class="text-lg">{bemer.text}</p>
      <p class="text-lg">Often paired with a massage as part of a recovery routine.</p>
      <p class="border-l-4 border-ink pl-4 text-sm text-peach-foreground/80"><em>{bemer.disclaimer}</em></p>
      <div>
        <Button href="/book" variant="outline">Book a Bemer session</Button>
      </div>
    </div>
  </div>
</section>

<!-- Good to know -->
<section class="section border-t-2 border-ink">
  <div class="container-site grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
    <SectionHeading eyebrow="Good to know" title="Before you book." />
    <ul class="grid gap-5 sm:grid-cols-2">
      {#each goodToKnow as item (item.title)}
        <li class="flex gap-3">
          <span class="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-accent" aria-hidden="true">
            <CheckIcon class="size-3.5" />
          </span>
          <div class="flex flex-col gap-0.5">
            <p class="font-display text-xl font-semibold tracking-tight">{item.title}</p>
            <p class="text-muted-foreground">{item.text}</p>
          </div>
        </li>
      {/each}
    </ul>
  </div>
</section>

<CtaBand />
