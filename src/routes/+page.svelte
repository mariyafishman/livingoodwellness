<script lang="ts">
  import SEO from '#lib/components/seo.svelte';
  import Portrait from '#lib/components/portrait.svelte';
  import ServiceList from '#lib/components/service-list.svelte';
  import Rates from '#lib/components/rates.svelte';
  import { Button } from '#lib/components/ui/button/index.ts';
  import { site, packages, membership, bemer, lifewave, howItWorks } from '#lib/config/site.ts';

  const firstPackage = packages.items[0];
  const lastPackage = packages.items[packages.items.length - 1];
</script>

<SEO />

<!-- Hero: the title on the paper, the portrait and the mission in a peach block beside it. -->
<section class="wrap grid gap-8 pt-6 md:grid-cols-[1.4fr_1fr] md:gap-10 md:pt-10">
  <div class="flex flex-col items-start justify-center gap-7 md:gap-8 md:py-6">
    <h1 class="display-1 max-w-[8ch]">{site.tagline}</h1>
    <p class="lead max-w-[30rem]">{site.description}</p>
    <div class="flex flex-col gap-3 self-stretch sm:flex-row sm:self-start">
      <Button href="/book">Book a session</Button>
      <Button href="/contact" variant="outline">Contact</Button>
    </div>
  </div>
  <div class="flex flex-col justify-between gap-10 rounded-block bg-secondary p-6 text-secondary-foreground md:min-h-[32.5rem] md:p-10">
    <Portrait priority class="self-start" />
    <p class="statement max-w-[14ch]">{site.mission}</p>
  </div>
</section>

<!-- Services: a lilac block with the list in two columns. -->
<section class="wrap section-gap" aria-labelledby="services-title">
  <div class="flex flex-col gap-8 rounded-block bg-accent text-accent-foreground block-pad md:gap-10">
    <div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-10">
      <h2 id="services-title" class="display-2 max-w-[12ch]">Care for the life you live.</h2>
      <p class="lead-sm max-w-[26rem] text-muted-foreground">
        For seniors, athletes, children and parents. For chronic pain, post-injury recovery, or simply a little time
        to relax.
      </p>
    </div>
    <ServiceList />
    <a href="/services" class="text-link self-start">All services and rates</a>
  </div>
</section>

<!-- Rates -->
<section class="wrap section-gap flex flex-col gap-8 md:gap-10" aria-labelledby="rates-title">
  <h2 id="rates-title" class="display-2">Sessions and rates</h2>
  <Rates />
  <div class="grid gap-8 rounded-block bg-secondary text-secondary-foreground block-pad lg:grid-cols-3 lg:gap-x-12 xl:gap-x-16">
    <div class="flex flex-col items-start gap-2.5">
      <h3 class="display-3">Six-session packages</h3>
      <p>
        Prepaid, from {firstPackage.price} ({firstPackage.duration}) to {lastPackage.price} ({lastPackage.duration}).
        Save $40 to $80.
      </p>
      <a href="/services#packages" class="text-link text-[0.9375rem]">See package rates</a>
    </div>
    <div class="flex flex-col items-start gap-2.5">
      <h3 class="display-3">Monthly membership</h3>
      <p class="flex flex-wrap items-baseline gap-x-2">
        <span class="price-sm">{membership.price}</span>
        <span class="text-muted-foreground">/ {membership.period}</span>
      </p>
      <p>{membership.description}</p>
      <a href="/book" class="text-link text-[0.9375rem]">Join</a>
    </div>
    <div class="flex flex-col items-start gap-2.5">
      <h3 class="display-3">Bemer circulation</h3>
      <p class="flex flex-wrap items-baseline gap-x-2">
        <span class="price-sm">{bemer.price}</span>
        <span class="text-muted-foreground">/ {bemer.duration}</span>
      </p>
      <p>{bemer.description}</p>
      <p class="mt-1 text-xs leading-snug text-muted-foreground">{bemer.disclaimer}</p>
    </div>
  </div>
  <p class="max-w-[60rem] text-sm text-muted-foreground">
    Receipts provided for insurance reimbursement or HSA/FSA. Pay in person (cash, Venmo, card) or online when
    booking. Mariya also uses and recommends
    <a href="/services#lifewave" class="text-link">{lifewave.name}</a>.
  </p>
</section>

<!-- Meet Mariya -->
<section class="wrap section-gap grid items-center gap-10 md:grid-cols-[2fr_3fr] md:gap-12 lg:grid-cols-[440px_1fr] lg:gap-20" aria-labelledby="meet-title">
  <enhanced:img
    src="#lib/assets/mariya.jpg"
    sizes="(min-width: 48rem) 440px, 90vw"
    alt="{site.practitioner.name} in her Hudson studio"
    loading="lazy"
    class="aspect-[4/5] w-full max-w-[440px] rounded-block object-cover object-[50%_35%]"
  />
  <div class="flex flex-col items-start gap-6">
    <h2 id="meet-title" class="display-2">Meet Mariya</h2>
    <p class="lead-sm max-w-[32rem] md:text-xl">
      Mariya Fishman has practiced massage therapy for over 30 years. She works with seniors, athletes, children and
      everyone in between from her home studio in Hudson, MA. Trained at the Muscular Therapy Institute in Cambridge;
      every year she volunteers on the Pan-Mass Challenge massage team. Sessions in English or Russian.
    </p>
    <blockquote class="max-w-[32rem] rounded-lg bg-accent px-7 py-6 text-accent-foreground">
      <p class="statement-sm">My husband asked if maybe it was time to retire. I said no. I love my work.</p>
    </blockquote>
    <Button href="/about" variant="outline">Read her story</Button>
  </div>
</section>

<!-- How it works -->
<section class="wrap section-gap flex flex-col gap-8 md:gap-10" aria-labelledby="begin-title">
  <div class="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
    <h2 id="begin-title" class="display-2">A good place to begin.</h2>
    <Button href="/book" class="self-start sm:self-auto">Book a session</Button>
  </div>
  <ol class="grid gap-x-12 md:grid-cols-3">
    {#each howItWorks as { title, text } (title)}
      <li class="flex flex-col gap-3 border-t pt-6 pb-4 md:pb-0">
        <span class="row-title">{title}</span>
        <p class="text-muted-foreground">{text}</p>
      </li>
    {/each}
  </ol>
</section>
