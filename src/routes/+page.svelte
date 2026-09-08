<script lang="ts">
  import SEO from '#lib/components/seo.svelte';
  import Portrait from '#lib/components/portrait.svelte';
  import ServiceList from '#lib/components/service-list.svelte';
  import SessionCards from '#lib/components/session-cards.svelte';
  import { Button } from '#lib/components/ui/button/index.ts';
  import Logo from '#lib/assets/logo.svelte';
  import mariya from '#lib/assets/mariya.jpg';
  import { site, packages, membership, bemer, howItWorks } from '#lib/config/site.ts';

  const textLink =
    'inline-block rounded-sm font-display text-[0.8125rem] font-bold underline decoration-2 underline-offset-4 outline-none hover:opacity-80 focus-visible:ring-3 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background';
</script>

<SEO />

<!-- Hero -->
<section class="bg-secondary text-secondary-foreground">
  <div class="wrap grid items-center gap-9 pt-6 pb-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16 md:pt-16 md:pb-24">
    <div>
      <h1 class="display-1">Find your balance.</h1>
      <p class="lead mt-5 max-w-[29rem] md:mt-8">{site.description}</p>
      <div class="mt-8 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:gap-4 md:mt-9">
        <Button href="/book">Book a session</Button>
        <Button href="/contact" variant="outline">Contact</Button>
      </div>
    </div>
    <Portrait priority class="mx-auto md:justify-self-end" />
  </div>
</section>

<!-- Services -->
<section class="wrap section-gap grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:gap-16" aria-labelledby="services-title">
  <div>
    <h2 id="services-title" class="display-2">Care for the life you live.</h2>
    <p class="lead mt-4 max-w-[24rem] md:mt-6">
      For seniors, athletes, children and parents. For chronic pain, post-injury recovery, or simply a little
      time to relax.
    </p>
    <Button href="/services" variant="link" class="mt-5 text-[0.9375rem] max-md:hidden">All services and rates</Button>
  </div>
  <div>
    <ServiceList />
    <Button href="/services" variant="link" class="mt-5 text-[0.9375rem] md:hidden">All services and rates</Button>
  </div>
</section>

<!-- Rates -->
<section class="wrap section-gap" aria-labelledby="rates-title">
  <h2 id="rates-title" class="display-2">Sessions and rates</h2>
  <div class="mt-6 md:mt-10">
    <SessionCards />
  </div>
  <div class="mt-3 grid gap-3 md:mt-5 md:grid-cols-2 md:gap-5">
    <div
      class="grid gap-5 rounded-[1rem] bg-secondary p-5 text-secondary-foreground md:grid-cols-2 md:gap-6 md:rounded-lg md:p-8"
    >
      <div>
        <h3 class="display-3">Six-session packages</h3>
        <p class="mt-2 text-sm leading-normal md:mt-3 md:text-[0.9375rem]">
          Prepaid, from {packages.items[0].price} ({packages.items[0].duration}) to {packages.items[packages.items.length - 1].price}
          ({packages.items[packages.items.length - 1].duration}). Save $40 to $80.
        </p>
        <a href="/services#packages" class={[textLink, 'mt-4']}>See package rates</a>
      </div>
      <div class="border-t border-current pt-5 md:border-t-0 md:border-l md:pt-0 md:pl-6">
        <h3 class="display-3">Monthly membership</h3>
        <p class="mt-2 font-display text-[2.5rem] leading-none font-extrabold tracking-[-0.04em] md:mt-3 md:text-[3rem]">
          {membership.price}<span class="font-sans text-base font-normal tracking-normal md:text-lg"> / {membership.period}</span>
        </p>
        <p class="mt-2 text-sm leading-normal md:mt-3 md:text-[0.9375rem]">{membership.description}</p>
        <a href="/book" class={[textLink, 'mt-4']}>Join</a>
      </div>
    </div>
    <div class="flex flex-col justify-between rounded-[1rem] bg-primary p-5 text-primary-foreground md:rounded-lg md:p-8">
      <div>
        <div class="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
          <h3 class="display-3">{bemer.name}</h3>
          <p class="font-display text-2xl font-extrabold tracking-[-0.03em] whitespace-nowrap md:text-[2.25rem]">
            {bemer.price}<span class="font-sans text-[0.8125rem] font-normal tracking-normal md:text-base"> / {bemer.duration}</span>
          </p>
        </div>
        <p class="mt-2 text-sm leading-normal md:mt-3 md:text-[0.9375rem]">{bemer.description}</p>
      </div>
      <p class="mt-3 text-[0.625rem] leading-snug opacity-80 md:mt-4 md:text-[0.6875rem]">{bemer.disclaimer}</p>
    </div>
  </div>
  <p class="mt-4 text-xs text-muted-foreground md:mt-5 md:text-sm">
    Receipts provided for insurance reimbursement or HSA/FSA. Pay in person (cash, Venmo, card) or online when
    booking.
  </p>
</section>

<!-- Meet Mariya -->
<section class="wrap section-gap" aria-labelledby="meet-title">
  <div
    class="grid items-center gap-7 rounded-[1.5rem] bg-accent p-6 text-accent-foreground md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:rounded-block md:p-14"
  >
    <div class="relative mx-2 aspect-[4/3] md:mx-0 md:aspect-auto md:h-[27.5rem]">
      <img
        src={mariya}
        alt="{site.practitioner.name} in her Hudson studio"
        width="1200"
        height="1600"
        loading="lazy"
        class="size-full -rotate-3 rounded-[1.25rem] object-cover object-top md:rounded-[1.5rem]"
      />
      <Logo class="absolute -right-3 -bottom-2 size-[3.75rem] -rotate-12 md:-right-5 md:size-[5.5rem]" />
    </div>
    <div>
      <h2 id="meet-title" class="display-2">Meet Mariya</h2>
      <p class="lead mt-4 max-w-[32rem] md:mt-6">
        Mariya Fishman has practiced massage therapy for over 30 years. She works with seniors, athletes, children
        and everyone in between from her home studio in Hudson, MA, and offers Bemer circulation sessions to
        support recovery.
      </p>
      <p class="lead mt-4 max-w-[32rem] max-md:hidden">
        Trained at the Muscular Therapy Institute in Cambridge. Every year she volunteers on the Pan-Mass Challenge
        massage team, working with cancer survivors.
      </p>
      <Button href="/about" size="sm" class="mt-5 md:mt-7">Read her story</Button>
    </div>
  </div>
</section>

<!-- How it works -->
<section class="wrap section-gap grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:gap-16" aria-labelledby="begin-title">
  <div>
    <h2 id="begin-title" class="display-2">A good place to begin.</h2>
    <p class="lead mt-4 max-w-[24rem] md:mt-6">Booking takes a minute. Everything else happens at the studio.</p>
    <Button href="/book" class="mt-7 max-md:hidden">Book a session</Button>
  </div>
  <div>
    <ol class="border-t">
      {#each howItWorks as { title, text } (title)}
        <li class="grid gap-x-6 border-b py-3.5 md:grid-cols-[1fr_1.2fr] md:items-baseline md:py-5">
          <span class="row-title">{title}</span>
          <span class="mt-1 text-sm leading-normal text-muted-foreground md:mt-0 md:text-base">{text}</span>
        </li>
      {/each}
    </ol>
    <Button href="/book" class="mt-6 w-full md:hidden">Book a session</Button>
  </div>
</section>
