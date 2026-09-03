<script lang="ts">
  import SEO from '#lib/components/seo.svelte';
  import PageHeader from '#lib/components/page-header.svelte';
  import Mark from '#lib/components/mark.svelte';
  import GoodToKnow from '#lib/components/good-to-know.svelte';
  import CtaBand from '#lib/components/cta-band.svelte';
  import { Button } from '#lib/components/ui/button/index.ts';
  import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
  import { massage, packages, membership, bemer } from '#lib/config/services.ts';
</script>

<SEO
  title="Services and prices"
  description="Massage therapy in 60, 90 or 120 minutes, prepaid six-session packages, an $80 monthly membership and Bemer circulation sessions. By appointment in Hudson, MA."
/>

<PageHeader
  eyebrow="Services and prices"
  title="What I offer"
  intro="Massage therapy in sixty, ninety or one hundred twenty minutes, prepaid packages, a simple membership, and Bemer circulation sessions. Prices are a draft until Mariya confirms them."
/>

<!-- Massage therapy -->
<section class="wrap grid grid-cols-1 gap-10 pt-6 pb-16 lg:grid-cols-12 lg:gap-8 lg:pt-10 lg:pb-24" aria-labelledby="massage-heading">
  <div class="flex flex-col gap-6 lg:col-span-6">
    <Mark kind="disc" class="size-12 text-shape lg:size-14" />
    <h2 id="massage-heading" class="text-[40px] leading-[1.05] lg:text-h2">{massage.name}</h2>
    <p class="max-w-[520px] text-body text-muted-foreground lg:text-lg lg:leading-relaxed">
      Every session is one-to-one and tailored on the day. Tell me what hurts, what you are training for, or that you
      just need to slow down.
    </p>
    <div class="flex flex-col gap-2.5">
      <h3 class="eyebrow">Modalities</h3>
      <ul class="flex flex-wrap gap-2.5">
        {#each massage.modalities as modality (modality)}
          <li class="rounded-full border border-border px-3.5 py-2 text-[15px] text-foreground">{modality}</li>
        {/each}
      </ul>
    </div>
    <div class="flex flex-col gap-2.5">
      <h3 class="eyebrow">Good for</h3>
      <p class="text-body text-foreground">{massage.goodFor}</p>
    </div>
  </div>

  <div class="rounded-md border border-border bg-card p-6 lg:col-span-5 lg:col-start-8 lg:p-10">
    <h3 class="eyebrow">Single sessions</h3>
    <dl class="mt-3 flex flex-col">
      {#each massage.prices as { duration, price } (duration)}
        <div class="flex items-baseline justify-between gap-6 border-b border-border py-5">
          <dt class="text-[19px] text-foreground">{duration} minutes</dt>
          <dd class="font-serif text-[30px] text-heading">${price}</dd>
        </div>
      {/each}
    </dl>
    <div class="mt-7 flex">
      <Button href="/book">Book a session <ArrowRightIcon data-icon="inline-end" /></Button>
    </div>
  </div>
</section>

<!-- Packages and membership -->
<section id="packages" class="scroll-mt-24 bg-band text-band-foreground" aria-labelledby="packages-heading">
  <div class="wrap grid grid-cols-1 gap-10 py-16 lg:grid-cols-12 lg:gap-8 lg:py-28">
    <div class="flex flex-col gap-6 lg:col-span-5">
      <Mark kind="dots" class="size-12 text-ochre lg:size-14" />
      <h2 id="packages-heading" class="text-[40px] leading-[1.05] text-band-foreground lg:text-h2">{packages.name}</h2>
      <p class="max-w-[440px] text-body text-band-muted lg:text-lg lg:leading-relaxed">{packages.summary}</p>
      <div class="mt-2 flex flex-col gap-3 rounded-md bg-footer p-6 lg:mt-4 lg:p-8">
        <h3 class="eyebrow text-ochre">{membership.name}</h3>
        <p class="font-serif text-[40px] text-band-foreground">
          ${membership.price} <span class="text-xl text-band-muted">/ {membership.period}</span>
        </p>
        <p class="text-base leading-relaxed text-band-muted">{membership.summary}</p>
      </div>
    </div>
    <div class="flex flex-col lg:col-span-6 lg:col-start-7">
      <dl class="flex flex-col">
        {#each packages.tiers as { duration, price, savings } (duration)}
          <div class="grid grid-cols-[1fr_auto_auto] items-baseline gap-6 border-b border-band-line py-5">
            <dt class="text-[19px]">{duration} minutes × {packages.sessions}</dt>
            <dd class="text-sm font-medium text-ochre">Save ${savings}</dd>
            <dd class="font-serif text-[30px]">${price}</dd>
          </div>
        {/each}
      </dl>
      <div class="mt-8 flex">
        <Button href="/book" variant="ochre">Buy a package on MassageBook <ArrowRightIcon data-icon="inline-end" /></Button>
      </div>
    </div>
  </div>
</section>

<!-- Bemer -->
<section id="bemer" class="wrap grid scroll-mt-24 grid-cols-1 gap-10 py-16 lg:grid-cols-12 lg:items-center lg:gap-8 lg:py-28" aria-labelledby="bemer-heading">
  <div class="relative aspect-[5/4] lg:col-span-5 lg:h-[420px]">
    <div class="absolute inset-0 flex items-center justify-center rounded-md bg-tint text-tint-foreground">
      <svg class="size-[70%]" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="0.6" aria-hidden="true">
        <circle cx="32" cy="32" r="6" />
        <circle cx="32" cy="32" r="12" />
        <circle cx="32" cy="32" r="18" />
        <circle cx="32" cy="32" r="24" />
        <circle cx="32" cy="32" r="30" />
      </svg>
    </div>
  </div>
  <div class="flex flex-col gap-5 lg:col-span-6 lg:col-start-7">
    <p class="eyebrow">Also available</p>
    <h2 id="bemer-heading" class="text-[40px] leading-[1.05] lg:text-h2">{bemer.name}</h2>
    <p class="text-body text-muted-foreground lg:text-lg lg:leading-relaxed">{bemer.summary}</p>
    <p class="font-serif text-[34px] text-heading">
      ${bemer.price} <span class="font-sans text-lg text-muted-foreground">/ {bemer.duration} minutes</span>
    </p>
    <p class="border-l-2 border-border pl-3.5 text-sm leading-relaxed text-muted-foreground italic">{bemer.disclaimer}</p>
  </div>
</section>

<GoodToKnow />
<CtaBand />
