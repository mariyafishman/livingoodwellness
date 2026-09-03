<script lang="ts">
  import SEO from '#lib/components/seo.svelte';
  import SectionHeading from '#lib/components/section-heading.svelte';
  import CtaBand from '#lib/components/cta-band.svelte';
  import { Button } from '#lib/components/ui/button/index.ts';
  import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
  import CheckIcon from '@lucide/svelte/icons/check';
  import { massage, packages, membership, bemer, goodToKnow, formatPrice } from '#lib/content/services.ts';

  const jump = [
    { title: 'Massage', href: '#massage' },
    { title: 'Packages', href: '#packages' },
    { title: 'Membership', href: '#membership' },
    { title: 'Bemer', href: '#bemer' },
    { title: 'Good to know', href: '#good-to-know' }
  ];
</script>

<SEO
  title="Services and prices"
  description="Massage therapy sessions of 60, 90 and 120 minutes, six-session packages, a monthly membership and Bemer circulation sessions in Hudson, MA. Swedish, deep tissue, sports, gentle massage for seniors and infant-massage instruction."
/>

<!-- Page intro -->
<section class="wrap flex flex-col gap-8 pt-14 pb-10 sm:pt-20 sm:pb-14">
  <SectionHeading
    as="h1"
    eyebrow="Services and prices"
    title="Massage shaped around you."
    lede="Every session is one-on-one in a quiet home studio. Pick a length; the work itself follows what your body needs that day."
  />
  <nav aria-label="On this page" class="flex flex-wrap gap-2">
    {#each jump as { title, href } (href)}
      <a
        {href}
        class="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:border-moss-soft/60 hover:text-foreground"
      >
        {title}
      </a>
    {/each}
  </nav>
</section>

<!-- Massage therapy -->
<section id="massage" class="scroll-mt-24 border-t border-border" aria-labelledby="massage-title">
  <div class="wrap section grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
    <div class="flex flex-col gap-8">
      <SectionHeading id="massage-title" eyebrow="Massage therapy" title={massage.title} lede={massage.intro} />
      <dl class="flex flex-col divide-y divide-border rounded-3xl border border-border bg-card px-6 sm:px-8">
        {#each massage.sessions as { duration, price } (duration)}
          <div class="flex items-baseline justify-between gap-6 py-5">
            <dt class="font-display text-display-sm">{duration}</dt>
            <dd class="font-display text-display-sm tabular-nums">{formatPrice(price)}</dd>
          </div>
        {/each}
        <div class="py-5">
          <Button href="/book" class="w-full sm:w-auto">Book a session</Button>
        </div>
      </dl>
    </div>

    <div class="flex flex-col gap-10">
      <div class="flex flex-col gap-5">
        <h3 class="font-sans text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">Kinds of work</h3>
        <ul class="grid gap-x-8 gap-y-6 sm:grid-cols-2">
          {#each massage.modalities as { name, note } (name)}
            <li class="flex flex-col gap-1 border-t border-border pt-4">
              <h4 class="font-display text-xl">{name}</h4>
              <p class="text-sm text-muted-foreground">{note}</p>
            </li>
          {/each}
        </ul>
      </div>
      <div class="flex flex-col gap-4">
        <h3 class="font-sans text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">Good for</h3>
        <ul class="flex flex-wrap gap-2">
          {#each massage.goodFor as item (item)}
            <li class="rounded-full bg-secondary px-3.5 py-1.5 text-sm text-secondary-foreground">{item}</li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- Packages and membership -->
<section id="packages" class="scroll-mt-24 bg-sage text-sage-foreground" aria-labelledby="packages-title">
  <div class="wrap section flex flex-col gap-12">
    <SectionHeading
      id="packages-title"
      eyebrow="Regular care"
      title="Packages and membership"
      lede="Two ways to make coming back easier. Both are bought on MassageBook when you book."
    />

    <div class="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
      <div class="flex flex-col gap-6 rounded-3xl bg-background p-6 sm:p-8">
        <div class="flex flex-col gap-1">
          <h3 class="text-display-sm">{packages.title}</h3>
          <p class="text-muted-foreground">{packages.subtitle}. {packages.intro}</p>
        </div>
        <dl class="divide-y divide-border">
          {#each packages.items as { duration, price, savings } (duration)}
            <div class="grid grid-cols-[1fr_auto_auto] items-baseline gap-x-4 py-3.5 sm:gap-x-8">
              <dt class="font-display text-xl">{duration} <span class="text-sm text-muted-foreground">× 6</span></dt>
              <dd class="text-xs font-semibold tracking-wide text-primary uppercase">Save {formatPrice(savings)}</dd>
              <dd class="font-display text-xl tabular-nums">{formatPrice(price)}</dd>
            </div>
          {/each}
        </dl>
        <div>
          <Button href="/book" variant="outline">
            Buy a package
            <ArrowRightIcon data-icon="inline-end" />
          </Button>
        </div>
      </div>

      <div id="membership" class="grain flex scroll-mt-24 flex-col gap-6 rounded-3xl bg-canvas-deep p-6 text-canvas-deep-foreground sm:p-8">
        <div class="flex flex-col gap-1">
          <h3 class="text-display-sm">{membership.title}</h3>
          <p class="text-canvas-deep-muted">For people who want a standing appointment with themselves.</p>
        </div>
        <p class="font-display text-display-md">
          {formatPrice(membership.price)}<span class="text-lg text-canvas-deep-muted"> / {membership.per}</span>
        </p>
        <ul class="flex flex-col gap-2 text-sm">
          <li class="flex gap-2"><CheckIcon class="mt-0.5 size-4 shrink-0 text-honey" aria-hidden="true" /> One 60-minute massage each month</li>
          <li class="flex gap-2"><CheckIcon class="mt-0.5 size-4 shrink-0 text-honey" aria-hidden="true" /> Extra sessions at the member rate</li>
          <li class="flex gap-2"><CheckIcon class="mt-0.5 size-4 shrink-0 text-honey" aria-hidden="true" /> Bought and managed on MassageBook</li>
        </ul>
        <div class="mt-auto">
          <Button href="/book" variant="inverse">
            Become a member
            <ArrowRightIcon data-icon="inline-end" />
          </Button>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Bemer -->
<section id="bemer" class="scroll-mt-24" aria-labelledby="bemer-title">
  <div class="wrap section grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
    <SectionHeading id="bemer-title" eyebrow="Circulation" title={bemer.title} />
    <div class="flex flex-col gap-6">
      <p class="text-lg">{bemer.intro}</p>
      <div class="flex flex-col gap-4 rounded-3xl border border-border bg-card p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div class="flex items-baseline gap-3">
          <span class="font-display text-display-md">{formatPrice(bemer.price)}</span>
          <span class="text-muted-foreground">/ {bemer.duration}</span>
        </div>
        <Button href="/book">Book a Bemer session</Button>
      </div>
      <p class="text-sm text-muted-foreground"><em>{bemer.disclaimer}</em></p>
    </div>
  </div>
</section>

<!-- Good to know -->
<section id="good-to-know" class="scroll-mt-24 border-t border-border" aria-labelledby="know-title">
  <div class="wrap section grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
    <SectionHeading id="know-title" eyebrow="Good to know" title="A few practical things." />
    <ul class="grid gap-x-8 gap-y-6 sm:grid-cols-2">
      {#each goodToKnow as { title, text } (title)}
        <li class="flex gap-4 border-t border-border pt-5">
          <span class="flex size-8 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
            <CheckIcon class="size-4" aria-hidden="true" />
          </span>
          <div class="flex flex-col gap-1">
            <h3 class="font-sans text-base font-semibold tracking-normal">{title}</h3>
            <p class="text-sm text-muted-foreground">{text}</p>
          </div>
        </li>
      {/each}
    </ul>
  </div>
</section>

<CtaBand />
