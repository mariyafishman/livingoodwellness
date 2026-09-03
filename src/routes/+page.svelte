<script lang="ts">
  import SEO from '#lib/components/seo.svelte';
  import SectionHeading from '#lib/components/section-heading.svelte';
  import CtaBand from '#lib/components/cta-band.svelte';
  import { Button } from '#lib/components/ui/button/index.ts';
  import * as Card from '#lib/components/ui/card/index.ts';
  import { Badge } from '#lib/components/ui/badge/index.ts';
  import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
  import CheckIcon from '@lucide/svelte/icons/check';
  import mariya from '#lib/assets/mariya.jpg';
  import { site } from '#lib/config/site.ts';
  import { massageRates, modalities, clientGroups, bemer, goodToKnow, usd } from '#lib/config/services.ts';

  const shapeClass: Record<(typeof clientGroups)[number]['shape'], string> = {
    circle: 'rounded-full bg-primary',
    half: 'rounded-t-full bg-accent',
    quarter: 'rounded-tr-full bg-leaf',
    ring: 'rounded-full border-[6px] border-primary bg-transparent'
  };
</script>

<SEO />

<!-- Hero -->
<section class="relative overflow-hidden">
  <div class="container-site grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-24">
    <div class="flex flex-col gap-7">
      <p class="eyebrow flex items-center gap-2 text-muted-foreground">
        <span class="inline-block size-2.5 rounded-full bg-accent ring-2 ring-ink" aria-hidden="true"></span>
        Massage therapy · Hudson, MA
      </p>
      <h1 class="text-[3.25rem] leading-[0.98] sm:text-7xl lg:text-[5.5rem]">
        Find your <span class="text-primary">balance.</span>
      </h1>
      <p class="max-w-xl text-lg text-muted-foreground sm:text-xl">
        Massage therapy in Hudson, MA. Over 30 years of experience with seniors, athletes, children and
        everyone in between. One therapist, a quiet home studio, and time for you.
      </p>
      <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button href="/book" variant="accent" size="lg">
          Book a session
          <ArrowRightIcon data-icon="inline-end" aria-hidden="true" />
        </Button>
        <Button href="/services" variant="outline" size="lg">See services and prices</Button>
      </div>
      <p class="text-sm text-muted-foreground">
        Prefer to talk? Call or text
        <a class="font-semibold text-foreground underline decoration-accent decoration-2 underline-offset-4" href={site.phoneHref}>
          {site.phone}
        </a>
      </p>
    </div>

    <div class="relative mx-auto w-full max-w-sm lg:max-w-md">
      <!-- Bauhaus backdrop -->
      <div class="absolute -top-8 -left-8 size-40 rounded-full bg-accent sm:size-52" aria-hidden="true"></div>
      <div class="absolute -right-6 -bottom-8 h-28 w-56 rounded-t-full bg-secondary sm:h-36 sm:w-72" aria-hidden="true"></div>
      <figure class="relative">
        <img
          src={mariya}
          alt="Mariya Fishman, Licensed Massage Therapist, in her Hudson studio"
          width="1200"
          height="1600"
          fetchpriority="high"
          class="aspect-[3/4] w-full rounded-xl border-2 border-ink object-cover shadow-hard-lg"
        />
        <figcaption class="absolute -bottom-5 left-5 flex items-center gap-2 rounded-full border-2 border-ink bg-card px-4 py-2 text-sm font-semibold shadow-hard">
          <span class="size-2.5 rounded-full bg-primary" aria-hidden="true"></span>
          Mariya Fishman, LMT · 30+ years
        </figcaption>
      </figure>
    </div>
  </div>
</section>

<!-- Quick facts strip -->
<section class="border-y-2 border-ink bg-secondary text-secondary-foreground">
  <div class="container-site">
    <ul class="grid grid-cols-2 sm:grid-cols-4" aria-label="Quick facts">
      {#each ['By appointment only', 'Quiet home studio in Hudson', 'Receipts for HSA/FSA', 'Newborns to great-grandparents'] as fact, i (fact)}
        <li
          class={[
            'flex items-center gap-2 border-ink px-2 py-4 text-sm font-semibold sm:justify-center sm:px-4',
            i % 2 === 0 && 'max-sm:border-r-2',
            i < 2 && 'max-sm:border-b-2',
            i > 0 && 'sm:border-l-2'
          ]}
        >
          <CheckIcon class="size-4 shrink-0 text-primary" aria-hidden="true" />
          {fact}
        </li>
      {/each}
    </ul>
  </div>
</section>

<!-- Who I work with -->
<section class="section">
  <div class="container-site flex flex-col gap-12">
    <SectionHeading
      eyebrow="Who I work with"
      title="Everyone from newborns to great-grandparents."
      lede="Every session is shaped around the person on the table, not a menu."
    />
    <ul class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {#each clientGroups as group (group.title)}
        <li>
          <Card.Root variant="flat" class="h-full border-2 shadow-hard">
            <div class={['size-14', shapeClass[group.shape]]} aria-hidden="true"></div>
            <Card.Header>
              <Card.Title>{group.title}</Card.Title>
            </Card.Header>
            <Card.Content>
              <p class="text-muted-foreground">{group.text}</p>
            </Card.Content>
          </Card.Root>
        </li>
      {/each}
    </ul>
  </div>
</section>

<!-- Services and prices -->
<section class="section border-y-2 border-ink bg-muted">
  <div class="container-site flex flex-col gap-12">
    <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <SectionHeading eyebrow="Services" title="Massage therapy, priced plainly." lede="Pay in person or online when you book. Packages and a monthly membership are available on MassageBook." />
      <Button href="/services" variant="outline">
        All services and packages
        <ArrowRightIcon data-icon="inline-end" aria-hidden="true" />
      </Button>
    </div>

    <div class="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <Card.Root class="gap-8 p-0">
        <div class="flex flex-col gap-1 border-b-2 border-ink p-6 sm:flex-row sm:items-baseline sm:justify-between">
          <h3 class="text-3xl">Massage therapy</h3>
          <p class="text-sm text-muted-foreground">Swedish, deep tissue, sports, gentle</p>
        </div>
        <dl class="grid gap-x-8 gap-y-6 px-6 sm:grid-cols-3">
          {#each massageRates as rate (rate.duration)}
            <div class="flex flex-col gap-1 border-l-4 border-accent pl-4">
              <dt class="eyebrow text-muted-foreground">{rate.duration}</dt>
              <dd class="font-display text-4xl font-medium tracking-tight">{usd(rate.price)}</dd>
            </div>
          {/each}
        </dl>
        <ul class="flex flex-wrap gap-2 px-6 pb-6">
          {#each modalities as m (m)}
            <li><Badge variant="outline">{m}</Badge></li>
          {/each}
        </ul>
      </Card.Root>

      <Card.Root variant="peach" class="gap-4">
        <Card.Header>
          <p class="eyebrow text-peach-foreground/70">Also offered</p>
          <Card.Title>Bemer circulation session</Card.Title>
        </Card.Header>
        <Card.Content>
          <p class="font-display text-4xl font-medium tracking-tight">
            {usd(bemer.price)} <span class="font-sans text-base font-semibold">/ {bemer.duration}</span>
          </p>
          <p>{bemer.text}</p>
          <p class="text-xs text-peach-foreground/70"><em>{bemer.disclaimer}</em></p>
        </Card.Content>
      </Card.Root>
    </div>
  </div>
</section>

<!-- Meet Mariya -->
<section class="section">
  <div class="container-site grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
    <div class="relative mx-auto w-full max-w-xs lg:max-w-sm">
      <div class="absolute -right-6 -top-6 size-32 rounded-full border-[6px] border-primary" aria-hidden="true"></div>
      <img
        src={mariya}
        alt=""
        width="1200"
        height="1600"
        loading="lazy"
        class="relative aspect-square w-full rounded-full border-2 border-ink object-cover object-top shadow-hard-lg"
      />
    </div>
    <div class="flex flex-col gap-6">
      <SectionHeading eyebrow="Meet Mariya" title="A trained engineer who became a bodyworker." />
      <blockquote class="border-l-4 border-accent pl-5 font-display text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
        “I found the work I was meant to do: helping people feel at home in their bodies.”
      </blockquote>
      <p class="text-lg text-muted-foreground">
        Mariya Fishman has practiced massage therapy for over 30 years. She works with seniors, athletes,
        children and everyone in between from her home studio in Hudson, MA, and offers Bemer circulation
        sessions to support recovery.
      </p>
      <div>
        <Button href="/about" variant="link" class="px-0 text-base">
          Read her story
          <ArrowRightIcon data-icon="inline-end" aria-hidden="true" />
        </Button>
      </div>
    </div>
  </div>
</section>

<!-- Good to know -->
<section class="section border-t-2 border-ink bg-secondary text-secondary-foreground">
  <div class="container-site grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
    <SectionHeading eyebrow="Good to know" title="The practical bits." />
    <dl class="grid gap-6 sm:grid-cols-2">
      {#each goodToKnow as item, i (item.title)}
        <div class="flex gap-4">
          <span class="flex size-9 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-card font-display text-lg font-semibold" aria-hidden="true">{i + 1}</span>
          <div class="flex flex-col gap-1">
            <dt class="font-display text-xl font-semibold tracking-tight">{item.title}</dt>
            <dd class="text-secondary-foreground/80">{item.text}</dd>
          </div>
        </div>
      {/each}
    </dl>
  </div>
</section>

<CtaBand />
