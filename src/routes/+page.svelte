<script lang="ts">
  import SEO from '#lib/components/seo.svelte';
  import SectionHeading from '#lib/components/section-heading.svelte';
  import CtaBand from '#lib/components/cta-band.svelte';
  import Rings from '#lib/components/decor/rings.svelte';
  import Logo from '#lib/assets/logo.svelte';
  import { Button } from '#lib/components/ui/button/index.ts';
  import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
  import PhoneIcon from '@lucide/svelte/icons/phone';
  import CheckIcon from '@lucide/svelte/icons/check';
  import { site } from '#lib/config/site.ts';
  import { massage, packages, membership, bemer, goodToKnow, whoFor, formatPrice } from '#lib/content/services.ts';
  import portrait from '#lib/assets/mariya.jpg';

  const offers = [
    {
      title: massage.title,
      text: massage.intro,
      price: `from ${formatPrice(massage.sessions[0].price)}`,
      meta: `${massage.sessions[0].duration} · ${massage.sessions[1].duration} · ${massage.sessions[2].duration}`,
      href: '/services#massage'
    },
    {
      title: 'Packages and membership',
      text: `${packages.intro} Or ${membership.intro.charAt(0).toLowerCase()}${membership.intro.slice(1)}`,
      price: `from ${formatPrice(membership.price)}/${membership.per}`,
      meta: `${packages.subtitle} · membership`,
      href: '/services#packages'
    },
    {
      title: bemer.title,
      text: bemer.intro,
      price: formatPrice(bemer.price),
      meta: bemer.duration,
      href: '/services#bemer'
    }
  ];
</script>

<SEO />

<!-- Hero -->
<section class="relative overflow-hidden">
  <Rings class="pointer-events-none absolute -top-56 -left-64 size-[40rem] text-moss-soft/30 sm:size-[52rem] lg:-left-40" rings={9} />
  <div class="wrap relative grid items-center gap-12 pt-14 pb-16 sm:pt-20 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:py-24">
    <div class="flex flex-col gap-7">
      <span class="eyebrow">Massage therapy in Hudson, MA</span>
      <h1 class="text-display-xl">
        Find your <span class="display-italic">balance.</span>
      </h1>
      <p class="max-w-lg text-xl leading-relaxed text-muted-foreground">
        One experienced therapist, one quiet room, and time for you. Over 30 years of hands-on care for seniors,
        athletes, children and everyone in between.
      </p>
      <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button href="/book" size="lg">Book a session</Button>
        <Button href="/services" size="lg" variant="outline">
          See services
          <ArrowRightIcon data-icon="inline-end" />
        </Button>
      </div>
      <ul class="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
        <li class="flex items-center gap-2"><CheckIcon class="size-4 text-moss-soft" aria-hidden="true" /> By appointment only</li>
        <li class="flex items-center gap-2"><CheckIcon class="size-4 text-moss-soft" aria-hidden="true" /> Private home studio</li>
        <li class="flex items-center gap-2">
          <PhoneIcon class="size-4 text-moss-soft" aria-hidden="true" />
          <a href={site.phoneHref} class="underline decoration-border underline-offset-4 hover:text-foreground">Call or text {site.phone}</a>
        </li>
      </ul>
    </div>

    <div class="relative mx-auto w-full max-w-md lg:max-w-none">
      <div class="arch relative aspect-[4/5] bg-sage">
        <img
          src={portrait}
          alt="Mariya Fishman, Licensed Massage Therapist, in her Hudson studio"
          class="size-full object-cover object-[50%_20%] saturate-[0.9]"
          width="1200"
          height="1500"
          fetchpriority="high"
        />
      </div>
      <div class="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl border border-border/70 bg-card px-4 py-3 shadow-[0_10px_30px_-12px_oklch(0.25_0.035_150/0.25)] sm:left-6">
        <Logo class="size-9 shrink-0 text-primary" />
        <div class="flex flex-col leading-tight">
          <span class="font-display text-lg">Mariya Fishman</span>
          <span class="text-xs tracking-wide text-muted-foreground uppercase">{site.practitioner.title}</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Who it's for -->
<section class="bg-sage text-sage-foreground" aria-labelledby="who-title">
  <div class="wrap section grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
    <SectionHeading eyebrow="Who I work with" title="Newborns to great-grandparents." />
    <ul class="grid gap-x-10 gap-y-8 sm:grid-cols-2">
      {#each whoFor as { title, text } (title)}
        <li class="flex flex-col gap-2 border-t border-sage-foreground/15 pt-5">
          <h3 class="text-display-sm">{title}</h3>
          <p class="text-muted-foreground">{text}</p>
        </li>
      {/each}
    </ul>
  </div>
</section>

<!-- Services -->
<section class="wrap section flex flex-col gap-12" aria-labelledby="services-title">
  <div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
    <SectionHeading eyebrow="Services" title="What I offer" lede="Massage shaped around what your body needs that day, with a few ways to make regular care easier." />
    <Button href="/services" variant="link" class="shrink-0">
      All services and prices
      <ArrowRightIcon data-icon="inline-end" />
    </Button>
  </div>

  <ul class="grid gap-5 md:grid-cols-3">
    {#each offers as { title, text, price, meta, href } (href)}
      <li>
        <a
          {href}
          class="group flex h-full flex-col gap-6 rounded-3xl border border-border/80 bg-card p-6 transition-[border-color,transform] duration-300 ease-(--ease-out-soft) hover:-translate-y-0.5 hover:border-moss-soft/60 sm:p-8"
        >
          <div class="flex flex-col gap-3">
            <h3 class="text-display-sm">{title}</h3>
            <p class="text-muted-foreground">{text}</p>
          </div>
          <div class="mt-auto flex items-end justify-between gap-4 border-t border-border/70 pt-5">
            <div class="flex flex-col">
              <span class="font-display text-2xl">{price}</span>
              <span class="text-xs tracking-wide text-muted-foreground uppercase">{meta}</span>
            </div>
            <span class="flex size-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <ArrowRightIcon class="size-4" aria-hidden="true" />
            </span>
          </div>
        </a>
      </li>
    {/each}
  </ul>
</section>

<!-- Meet Mariya -->
<section class="grain relative overflow-hidden bg-canvas-deep text-canvas-deep-foreground" aria-labelledby="meet-title">
  <Rings class="pointer-events-none absolute -right-40 -bottom-48 size-[36rem] text-canvas-deep-foreground/20" rings={7} />
  <div class="wrap section relative grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
    <div class="flex flex-col gap-5">
      <span class="eyebrow text-canvas-deep-muted">Meet Mariya</span>
      <h2 id="meet-title" class="text-display-lg">An engineer’s patience, a therapist’s hands.</h2>
      <p class="text-lg text-canvas-deep-muted">
        Mariya Fishman has practiced massage therapy for over 30 years. She works with seniors, athletes, children and
        everyone in between from her home studio in Hudson, and offers Bemer circulation sessions to support recovery.
      </p>
      <div>
        <Button href="/about" variant="inverse">
          Her story
          <ArrowRightIcon data-icon="inline-end" />
        </Button>
      </div>
    </div>
    <figure class="flex flex-col gap-6 self-center border-l-2 border-honey pl-6 sm:pl-8">
      <blockquote class="font-display text-display-md italic">
        “I found the work I was meant to do: helping people feel at home in their bodies.”
      </blockquote>
      <figcaption class="text-sm text-canvas-deep-muted">Mariya, on training at the Muscular Therapy Institute in Cambridge</figcaption>
    </figure>
  </div>
</section>

<!-- Prices at a glance -->
<section class="wrap section grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20" aria-labelledby="prices-title">
  <SectionHeading eyebrow="Sessions" title="Simple prices, no upsell." lede="Pick a length. Everything else, we figure out together in the room.">
    <p class="text-sm text-muted-foreground">Packages, membership and Bemer sessions are listed on the services page.</p>
  </SectionHeading>
  <dl class="flex flex-col divide-y divide-border">
    {#each massage.sessions as { duration, price } (duration)}
      <div class="flex items-baseline justify-between gap-6 py-5">
        <dt class="font-display text-display-sm">{duration}</dt>
        <dd class="font-display text-display-sm tabular-nums">{formatPrice(price)}</dd>
      </div>
    {/each}
    <div class="flex flex-col gap-3 pt-6 sm:flex-row sm:items-center sm:justify-between">
      <p class="text-sm text-muted-foreground">Pay in person (cash, Venmo, card) or online when booking.</p>
      <Button href="/book" size="sm">Book a session</Button>
    </div>
  </dl>
</section>

<!-- Good to know -->
<section class="bg-sage text-sage-foreground" aria-labelledby="know-title">
  <div class="wrap section flex flex-col gap-10">
    <SectionHeading eyebrow="Good to know" title="A few practical things." />
    <ul class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {#each goodToKnow as { title, text } (title)}
        <li class="flex flex-col gap-2 rounded-2xl bg-background/70 p-5">
          <span class="flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <CheckIcon class="size-4" aria-hidden="true" />
          </span>
          <h3 class="font-sans text-base font-semibold tracking-normal">{title}</h3>
          <p class="text-sm text-muted-foreground">{text}</p>
        </li>
      {/each}
    </ul>
  </div>
</section>

<CtaBand />
