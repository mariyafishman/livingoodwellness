<script lang="ts">
  import SEO from '#lib/components/seo.svelte';
  import CtaBand from '#lib/components/cta-band.svelte';
  import HoursList from '#lib/components/hours-list.svelte';
  import Logo from '#lib/assets/logo.svelte';
  import mariya from '#lib/assets/mariya.jpg';
  import { Button } from '#lib/components/ui/button/index.ts';
  import * as Card from '#lib/components/ui/card/index.ts';
  import { Badge } from '#lib/components/ui/badge/index.ts';
  import PhoneIcon from '@lucide/svelte/icons/phone';
  import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
  import MapPinIcon from '@lucide/svelte/icons/map-pin';
  import HeartHandshakeIcon from '@lucide/svelte/icons/heart-handshake';
  import BikeIcon from '@lucide/svelte/icons/bike';
  import BabyIcon from '@lucide/svelte/icons/baby';
  import SproutIcon from '@lucide/svelte/icons/sprout';
  import { site, fullAddress } from '#lib/config/site.ts';
  import { audiences, singleSessions, membership } from '#lib/config/services.ts';
  import { stock } from '#lib/config/images.ts';

  const audienceIcons = [HeartHandshakeIcon, BikeIcon, BabyIcon, SproutIcon];
  const sixty = singleSessions[0];
  const otherSessions = singleSessions.slice(1);
</script>

<SEO />

<!-- Hero -->
<section class="container-page pt-10 pb-14 sm:pt-16 sm:pb-20" aria-labelledby="hero-heading">
  <div class="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
    <div class="flex flex-col gap-6">
      <p class="text-sm font-semibold tracking-[0.14em] text-clay uppercase">
        Massage therapy · Hudson, Massachusetts
      </p>
      <h1 id="hero-heading" class="text-5xl sm:text-6xl lg:text-7xl">{site.tagline}</h1>
      <p class="max-w-xl text-lg text-muted-foreground sm:text-xl">
        Therapeutic massage from an experienced, unhurried practitioner. Mariya Fishman sees seniors,
        athletes, parents and children in her calm home studio in Hudson, MA. By appointment.
      </p>
      <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button href={site.bookingUrl} size="lg">Book a session</Button>
        <Button href={site.phoneHref} size="lg" variant="outline">
          <PhoneIcon data-icon="inline-start" />
          Call or text {site.phone}
        </Button>
      </div>
      <ul class="flex flex-wrap gap-x-6 gap-y-2 text-base text-muted-foreground">
        <li>Over 30 years of practice</li>
        <li>Muscular Therapy Institute graduate</li>
        <li>Licensed Massage Therapist</li>
      </ul>
    </div>

    <div class="relative">
      <img
        src={stock.hero.src}
        alt={stock.hero.alt}
        width="1400"
        height="2100"
        class="aspect-[4/3] w-full rounded-3xl object-cover object-[50%_35%] lg:aspect-[5/4]"
        fetchpriority="high"
      />
      <div
        class="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl bg-sage px-5 py-4 text-sage-foreground shadow-sm sm:-left-6"
      >
        <Logo class="size-10 shrink-0" decorative />
        <p class="font-serif text-lg leading-tight">
          Transformation,<br />one session at a time.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Who it's for -->
<section class="bg-paper text-paper-foreground" aria-labelledby="audience-heading">
  <div class="container-page py-14 sm:py-20">
    <div class="mb-10 flex max-w-2xl flex-col gap-3">
      <h2 id="audience-heading" class="text-3xl sm:text-4xl">Care for every stage of life</h2>
      <p class="text-lg text-muted-foreground">
        Mariya works with everyone from newborns to great-grandparents. These are the people she loves
        working with most.
      </p>
    </div>
    <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {#each audiences as { title, text }, i (title)}
        {@const Icon = audienceIcons[i]}
        <li>
          <Card.Root class="h-full bg-card">
            <Card.Header>
              <div
                class="mb-2 flex size-12 items-center justify-center rounded-xl bg-secondary text-secondary-foreground"
              >
                <Icon class="size-6" aria-hidden="true" />
              </div>
              <Card.Title class="font-serif text-2xl font-medium">{title}</Card.Title>
            </Card.Header>
            <Card.Content>
              <p class="text-base text-muted-foreground">{text}</p>
            </Card.Content>
          </Card.Root>
        </li>
      {/each}
    </ul>
  </div>
</section>

<!-- Pricing glimpse -->
<section class="container-page py-14 sm:py-20" aria-labelledby="pricing-heading">
  <div class="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-14">
    <div class="flex flex-col gap-4">
      <h2 id="pricing-heading" class="text-3xl sm:text-4xl">Fair, simple pricing</h2>
      <p class="text-lg text-muted-foreground">
        No rent to pass on, no upsell. Pay per session, prepay a package of six, or join the monthly
        membership.
      </p>
      <a
        href="/services"
        class="inline-flex w-fit items-center gap-2 text-lg font-medium text-primary underline-offset-4 hover:underline"
      >
        See all services and packages
        <ArrowRightIcon class="size-5" aria-hidden="true" />
      </a>
    </div>

    <div class="grid gap-4 sm:grid-cols-2">
      <Card.Root class="bg-card">
        <Card.Header>
          <Card.Description class="text-base">Single session</Card.Description>
          <Card.Title class="font-serif text-2xl font-medium">Massage therapy</Card.Title>
        </Card.Header>
        <Card.Content class="flex flex-col gap-4">
          <a
            href={site.bookingUrl}
            class="group flex items-baseline justify-between rounded-xl bg-secondary px-4 py-3 text-secondary-foreground"
          >
            <span class="text-lg font-medium">{sixty.minutes} minutes</span>
            <span class="font-serif text-3xl tabular-nums group-hover:underline">${sixty.price}</span>
          </a>
          <ul class="flex flex-col gap-1 text-base text-muted-foreground">
            {#each otherSessions as { minutes, price } (minutes)}
              <li class="flex justify-between">
                <a href={site.bookingUrl} class="hover:underline">{minutes} minutes</a>
                <span class="tabular-nums">${price}</span>
              </li>
            {/each}
          </ul>
        </Card.Content>
      </Card.Root>

      <Card.Root class="bg-primary text-primary-foreground ring-primary">
        <Card.Header>
          <Card.Description class="text-base text-primary-foreground/75">Membership</Card.Description>
          <Card.Title class="font-serif text-2xl font-medium">A massage every month</Card.Title>
        </Card.Header>
        <Card.Content class="flex flex-col gap-4">
          <a href={site.bookingUrl} class="group flex items-baseline gap-2">
            <span class="font-serif text-4xl tabular-nums group-hover:underline">${membership.price}</span>
            <span class="text-primary-foreground/80">/ {membership.period}</span>
          </a>
          <p class="text-base text-primary-foreground/85">
            {membership.includes[0]}, with extra sessions at the member rate.
          </p>
        </Card.Content>
      </Card.Root>
    </div>
  </div>
</section>

<!-- Meet Mariya -->
<section class="bg-sage text-sage-foreground" aria-labelledby="mariya-heading">
  <div class="container-page grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[2fr_3fr] lg:gap-16">
    <img
      src={mariya}
      alt="Mariya Fishman, Licensed Massage Therapist, smiling in her Hudson studio"
      width="1200"
      height="1600"
      loading="lazy"
      class="mx-auto aspect-[3/4] w-full max-w-sm rounded-3xl object-cover lg:max-w-none"
    />
    <div class="flex flex-col gap-6">
      <Badge variant="outline" class="h-auto w-fit border-sage-foreground/30 px-3 py-1 text-sm">
        Meet your therapist
      </Badge>
      <h2 id="mariya-heading" class="text-3xl sm:text-4xl">
        “My husband asked if maybe it was time to retire. I said no. I love my work.”
      </h2>
      <p class="text-lg">
        Mariya Fishman has practiced massage therapy for over 30 years. A former mechanical engineer
        who trained at the Muscular Therapy Institute in Cambridge, she knows from her own recovery what
        patient, hands-on care can do. Every summer she volunteers on the massage team at the Pan-Mass
        Challenge.
      </p>
      <Button href="/about" size="lg" variant="outline" class="w-fit bg-background">
        Read Mariya’s story
        <ArrowRightIcon data-icon="inline-end" />
      </Button>
    </div>
  </div>
</section>

<!-- Visit -->
<section class="container-page py-14 sm:py-20" aria-labelledby="visit-heading">
  <div class="grid gap-10 lg:grid-cols-2 lg:gap-14">
    <div class="flex flex-col gap-5">
      <h2 id="visit-heading" class="text-3xl sm:text-4xl">A quiet home studio in Hudson</h2>
      <p class="text-lg text-muted-foreground">
        Sessions take place in a dedicated treatment room in Mariya’s home, so it is calm, private and
        never rushed. Everything is by appointment.
      </p>
      <address class="flex items-start gap-3 text-lg not-italic">
        <MapPinIcon class="mt-1 size-5 shrink-0 text-clay" aria-hidden="true" />
        <span>{fullAddress}</span>
      </address>
      <div class="flex flex-col gap-3 sm:flex-row">
        <Button href="/contact" size="lg">Contact and directions</Button>
        <Button href={site.mapsUrl} target="_blank" rel="noopener" size="lg" variant="outline">
          Open in Google Maps
          <span class="sr-only">(opens in a new tab)</span>
        </Button>
      </div>
    </div>
    <Card.Root class="bg-card">
      <Card.Header>
        <Card.Title class="font-serif text-2xl font-medium">Hours</Card.Title>
        <Card.Description class="text-base">By appointment only.</Card.Description>
      </Card.Header>
      <Card.Content>
        <HoursList class="text-base" />
      </Card.Content>
    </Card.Root>
  </div>
</section>

<CtaBand />
