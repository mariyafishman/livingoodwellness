<script lang="ts">
  import SEO from '#lib/components/seo.svelte';
  import SectionHeading from '#lib/components/section-heading.svelte';
  import CtaBand from '#lib/components/cta-band.svelte';
  import PriceList from '#lib/components/price-list.svelte';
  import { Button } from '#lib/components/ui/button/index.ts';
  import { Badge } from '#lib/components/ui/badge/index.ts';
  import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
  import { massage, packages, membership, bemer, goodToKnow, formatPrice } from '#lib/config/services.ts';
</script>

<SEO
  title="Services and prices"
  description="Massage therapy from $90 for 60 minutes, six-session packages, an $80 monthly membership and Bemer circulation sessions. Mariya Fishman, LMT, Hudson, MA."
/>

<!-- Page header -->
<section class="border-b">
  <div class="container-page py-14 lg:py-20">
    <SectionHeading level={1} eyebrow="Services and prices" title="What a session costs, and what it includes.">
      <p>
        Everything here is one-on-one with Mariya in her studio in Hudson. Book online or by phone, pay online or in
        person, and let her know what your body needs that day.
      </p>
      {#snippet aside()}
        <Button href="/book" size="lg">Book a session</Button>
      {/snippet}
    </SectionHeading>
  </div>
</section>

<!-- Massage therapy -->
<section id="massage" class="scroll-mt-24 border-b" aria-labelledby="massage-title">
  <div class="container-page grid gap-10 py-16 lg:grid-cols-12 lg:gap-16 lg:py-24">
    <div class="flex flex-col gap-8 lg:col-span-7">
      <div class="flex flex-col gap-4">
        <p class="eyebrow">01 · Massage</p>
        <h2 id="massage-title" class="font-display text-4xl font-medium sm:text-5xl">{massage.name}</h2>
        <p class="max-w-prose text-lg leading-relaxed text-muted-foreground">{massage.summary}</p>
      </div>

      <div class="grid gap-8 sm:grid-cols-2">
        <div class="flex flex-col gap-3">
          <h3 class="eyebrow">Modalities</h3>
          <ul class="flex flex-col gap-2">
            {#each massage.modalities as modality (modality)}
              <li class="flex items-start gap-3">
                <span class="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true"></span>
                <span>{modality}</span>
              </li>
            {/each}
          </ul>
        </div>
        <div class="flex flex-col gap-3">
          <h3 class="eyebrow">Good for</h3>
          <ul class="flex flex-wrap gap-2">
            {#each massage.clients as client (client)}
              <li><Badge variant="secondary">{client}</Badge></li>
            {/each}
          </ul>
          <p class="mt-2 text-sm leading-relaxed text-muted-foreground">
            Not sure which kind of massage you need? Book a 60-minute session and say so. The first few minutes are a
            conversation.
          </p>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-6 rounded-xl border bg-card p-6 sm:p-8 lg:col-span-5">
      <div class="flex flex-col gap-1">
        <h3 class="font-display text-2xl font-medium">Prices</h3>
        <p class="text-sm text-muted-foreground">Choose a length when you book.</p>
      </div>
      <PriceList rows={massage.prices} label="Massage therapy prices" />
      <Button href="/book" size="lg" class="self-start">Book a massage</Button>
    </div>
  </div>
</section>

<!-- Packages and membership -->
<section class="border-b bg-muted/50">
  <div class="container-page grid gap-6 py-16 lg:grid-cols-12 lg:py-24">
    <article
      id="packages"
      class="flex scroll-mt-24 flex-col gap-6 rounded-xl border bg-card p-6 sm:p-8 lg:col-span-7"
      aria-labelledby="packages-title"
    >
      <div class="flex flex-col gap-3">
        <p class="eyebrow">02 · {packages.sessions} sessions, prepaid</p>
        <h2 id="packages-title" class="font-display text-4xl font-medium">{packages.name}</h2>
        <p class="max-w-prose leading-relaxed text-muted-foreground">{packages.summary}</p>
      </div>
      <PriceList rows={packages.tiers} label="Package prices" />
      <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button href="/book" class="self-start">Buy a package</Button>
        <p class="text-sm text-muted-foreground">Packages are bought on MassageBook, the same place you book.</p>
      </div>
    </article>

    <div class="flex flex-col gap-6 lg:col-span-5">
      <article
        id="membership"
        class="flex scroll-mt-24 flex-col gap-5 rounded-xl border bg-card p-6 sm:p-8"
        aria-labelledby="membership-title"
      >
        <div class="flex flex-col gap-3">
          <p class="eyebrow">03 · Monthly</p>
          <h2 id="membership-title" class="font-display text-4xl font-medium">{membership.name}</h2>
        </div>
        <p class="font-display text-5xl font-light tabular-nums">
          {formatPrice(membership.price)}<span class="text-xl text-muted-foreground"> / {membership.period}</span>
        </p>
        <p class="leading-relaxed text-muted-foreground">{membership.summary}</p>
        <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button href="/book" class="self-start">Become a member</Button>
          <p class="text-sm text-muted-foreground">Set up on MassageBook.</p>
        </div>
      </article>

      <div class="flex flex-col gap-3 rounded-xl border border-dashed p-6 text-sm leading-relaxed text-muted-foreground">
        <p class="font-display text-lg font-medium text-foreground">Which one is for me?</p>
        <p>
          A package suits people working through something specific, like recovery after an injury or a season of
          training. Membership is for the once-a-month habit. Either way, extra sessions cost less.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Bemer -->
<section id="bemer" class="scroll-mt-24 border-b" aria-labelledby="bemer-title">
  <div class="container-page grid gap-10 py-16 lg:grid-cols-12 lg:gap-16 lg:py-24">
    <div class="flex flex-col gap-4 lg:col-span-7">
      <p class="eyebrow">04 · Circulation</p>
      <h2 id="bemer-title" class="font-display text-4xl font-medium sm:text-5xl">{bemer.name}</h2>
      <p class="max-w-prose text-lg leading-relaxed text-muted-foreground">{bemer.summary}</p>
      <p class="max-w-prose leading-relaxed text-muted-foreground">
        Sessions are {bemer.duration} minutes, lying down, fully clothed. Many clients pair one with a massage; ask
        when you book.
      </p>
      <p class="max-w-prose text-sm leading-relaxed text-muted-foreground/80">{bemer.disclaimer}</p>
    </div>
    <div class="flex flex-col gap-6 rounded-xl border bg-card p-6 sm:p-8 lg:col-span-5">
      <div class="flex items-baseline justify-between gap-4">
        <span class="font-display text-2xl font-medium">{bemer.duration} min</span>
        <span class="font-display text-3xl font-light tabular-nums">{formatPrice(bemer.price)}</span>
      </div>
      <Button href="/book" size="lg" class="self-start">
        Book a Bemer session
        <ArrowRightIcon data-icon="inline-end" />
      </Button>
    </div>
  </div>
</section>

<!-- Good to know -->
<section class="bg-muted/50" aria-labelledby="gtk-title">
  <div class="container-page flex flex-col gap-10 py-16 lg:py-24">
    <SectionHeading id="gtk-title" eyebrow="Good to know" title="The practical bits." />
    <ul class="grid gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-2 lg:grid-cols-4">
      {#each goodToKnow as item (item.title)}
        <li class="flex flex-col gap-2 bg-card p-6">
          <h3 class="font-display text-xl font-medium">{item.title}</h3>
          <p class="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
        </li>
      {/each}
    </ul>
  </div>
</section>

<CtaBand />
