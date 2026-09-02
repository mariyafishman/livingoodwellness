<script lang="ts">
  import SEO from '#lib/components/seo.svelte';
  import PageHeader from '#lib/components/page-header.svelte';
  import CtaBand from '#lib/components/cta-band.svelte';
  import { Button } from '#lib/components/ui/button/index.ts';
  import * as Card from '#lib/components/ui/card/index.ts';
  import { Badge } from '#lib/components/ui/badge/index.ts';
  import { Separator } from '#lib/components/ui/separator/index.ts';
  import CheckIcon from '@lucide/svelte/icons/check';
  import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
  import { site, bookingIsLive } from '#lib/config/site.ts';
  import {
    singleSessions,
    packages,
    packageSessions,
    membership,
    bemer,
    modalities,
    audiences,
    practicalNotes
  } from '#lib/config/services.ts';
  import Logo from '#lib/assets/logo.svelte';

  const bookLabel = bookingIsLive ? 'Book' : 'Contact to book';
</script>

<SEO
  title="Services and pricing"
  description="Massage therapy in Hudson, MA: 60, 90 and 120-minute sessions from $90, six-session packages, an $80/month membership and Bemer circulation sessions. By appointment."
/>

<PageHeader
  eyebrow="Services and pricing"
  title="Massage therapy, packages and membership"
  lead="Everything Mariya offers, with the price beside it. Choose a length, prepay a package of six, or join the monthly membership. Booking and payment happen on the booking page."
/>

<!-- Massage therapy -->
<section class="container-page pb-14 sm:pb-20" aria-labelledby="massage-heading">
  <div class="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
    <div class="flex flex-col gap-6">
      <div
        class="flex aspect-[3/2] w-full flex-col justify-between rounded-3xl bg-sage p-6 text-sage-foreground sm:p-8"
      >
        <Logo class="size-20 text-primary sm:size-24" decorative />
        <p class="max-w-xs font-serif text-2xl leading-snug sm:text-3xl">
          Unhurried, hands-on care in a quiet home studio.
        </p>
      </div>
      <h2 id="massage-heading" class="text-3xl sm:text-4xl">Massage therapy</h2>
      <p class="text-lg text-muted-foreground">
        Every session is tailored to you: the pressure, the pace and the areas that need attention.
        Mariya combines several approaches in one session rather than making you choose a menu item.
      </p>
      <div>
        <p class="mb-3 text-sm font-semibold tracking-[0.14em] text-muted-foreground uppercase">
          Good for
        </p>
        <ul class="flex flex-wrap gap-2">
          {#each audiences as { title } (title)}
            <li>
              <Badge variant="secondary" class="h-auto px-3 py-1.5 text-base font-medium">{title}</Badge>
            </li>
          {/each}
          <li>
            <Badge variant="secondary" class="h-auto px-3 py-1.5 text-base font-medium">Chronic pain</Badge>
          </li>
          <li>
            <Badge variant="secondary" class="h-auto px-3 py-1.5 text-base font-medium">Relaxation</Badge>
          </li>
        </ul>
      </div>
    </div>

    <div class="flex flex-col gap-8">
      <Card.Root class="bg-card">
        <Card.Header>
          <Card.Title class="font-serif text-2xl font-medium">Single sessions</Card.Title>
          <Card.Description class="text-base">Pay per visit. Same price for every style of massage.</Card.Description>
        </Card.Header>
        <Card.Content>
          <ul class="flex flex-col divide-y divide-border">
            {#each singleSessions as { minutes, price } (minutes)}
              <li>
                <a
                  href={site.bookingUrl}
                  class="group -mx-2 flex min-h-16 items-center justify-between gap-4 rounded-xl px-2 py-3 hover:bg-accent"
                >
                  <span class="text-lg font-medium">{minutes} minutes</span>
                  <span class="flex items-center gap-4">
                    <span class="font-serif text-3xl tabular-nums">${price}</span>
                    <span
                      class="hidden items-center gap-1 text-base font-medium text-primary group-hover:underline sm:inline-flex"
                    >
                      {bookLabel}
                      <ArrowRightIcon class="size-4" aria-hidden="true" />
                    </span>
                  </span>
                </a>
              </li>
            {/each}
          </ul>
        </Card.Content>
      </Card.Root>

      <div>
        <h3 class="mb-4 font-serif text-2xl font-medium">What a session can include</h3>
        <ul class="grid gap-x-8 gap-y-4 sm:grid-cols-2">
          {#each modalities as { name, text } (name)}
            <li class="flex flex-col gap-1">
              <span class="text-lg font-medium">{name}</span>
              <span class="text-base text-muted-foreground">{text}</span>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- Packages and membership -->
<section class="bg-paper text-paper-foreground" aria-labelledby="packages-heading">
  <div class="container-page py-14 sm:py-20">
    <div class="mb-10 flex max-w-2xl flex-col gap-3">
      <h2 id="packages-heading" class="text-3xl sm:text-4xl">Come back regularly, pay less</h2>
      <p class="text-lg text-muted-foreground">
        Regular sessions are where massage does the most good. Prepay six and save, or join the
        membership for one massage a month.
      </p>
    </div>

    <div class="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
      <Card.Root class="bg-card">
        <Card.Header>
          <Card.Title class="font-serif text-2xl font-medium">Six-session packages</Card.Title>
          <Card.Description class="text-base">
            {packageSessions} massages, prepaid. Each package links to the booking page.
          </Card.Description>
        </Card.Header>
        <Card.Content>
          <ul class="flex flex-col divide-y divide-border">
            {#each packages as { minutes, price, save } (minutes)}
              <li>
                <a
                  href={site.bookingUrl}
                  class="group -mx-2 flex min-h-16 items-center justify-between gap-4 rounded-xl px-2 py-3 hover:bg-accent"
                >
                  <span class="flex flex-col">
                    <span class="text-lg font-medium">{packageSessions} × {minutes} minutes</span>
                    <span class="text-base text-muted-foreground">Save ${save}</span>
                  </span>
                  <span class="flex items-center gap-4">
                    <span class="font-serif text-3xl tabular-nums">${price}</span>
                    <ArrowRightIcon
                      class="hidden size-5 text-primary transition-transform group-hover:translate-x-0.5 sm:block"
                      aria-hidden="true"
                    />
                  </span>
                </a>
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
        <Card.Content class="flex flex-col gap-6">
          <p class="flex items-baseline gap-2">
            <span class="font-serif text-5xl tabular-nums">${membership.price}</span>
            <span class="text-lg text-primary-foreground/80">/ {membership.period}</span>
          </p>
          <ul class="flex flex-col gap-3">
            {#each membership.includes as item (item)}
              <li class="flex items-start gap-3 text-base">
                <CheckIcon class="mt-1 size-5 shrink-0" aria-hidden="true" />
                <span>{item}</span>
              </li>
            {/each}
          </ul>
        </Card.Content>
        <Card.Footer>
          <Button
            href={site.bookingUrl}
            size="lg"
            class="w-full bg-background text-foreground hover:bg-background/90"
          >
            Join the membership
          </Button>
        </Card.Footer>
      </Card.Root>
    </div>
  </div>
</section>

<!-- Bemer -->
<section class="container-page py-14 sm:py-20" aria-labelledby="bemer-heading">
  <Card.Root class="bg-card lg:grid lg:grid-cols-[1.4fr_1fr] lg:items-center">
    <div>
      <Card.Header>
        <Card.Description class="text-base">Circulation support</Card.Description>
        <Card.Title id="bemer-heading" class="font-serif text-3xl font-medium">{bemer.name}</Card.Title>
      </Card.Header>
      <Card.Content class="flex flex-col gap-4">
        <p class="text-lg text-muted-foreground">{bemer.description}</p>
        <p class="text-sm text-muted-foreground">{bemer.disclaimer}</p>
      </Card.Content>
    </div>
    <Card.Content class="lg:border-l lg:pl-8">
      <a
        href={site.bookingUrl}
        class="group flex items-center justify-between gap-4 rounded-2xl bg-secondary px-5 py-4 text-secondary-foreground"
      >
        <span class="text-lg font-medium">{bemer.minutes} minutes</span>
        <span class="font-serif text-3xl tabular-nums group-hover:underline">${bemer.price}</span>
      </a>
    </Card.Content>
  </Card.Root>
</section>

<!-- Practical notes -->
<section class="container-page pb-6" aria-labelledby="notes-heading">
  <Separator class="mb-12" />
  <div class="grid gap-8 lg:grid-cols-[1fr_2fr]">
    <h2 id="notes-heading" class="text-3xl sm:text-4xl">Good to know</h2>
    <ul class="grid gap-4 sm:grid-cols-2">
      {#each practicalNotes as note (note)}
        <li class="flex items-start gap-3 text-lg">
          <CheckIcon class="mt-1.5 size-5 shrink-0 text-clay" aria-hidden="true" />
          <span>{note}</span>
        </li>
      {/each}
    </ul>
  </div>
</section>

<CtaBand
  title="Not sure which session is right?"
  text={`Call or text Mariya at ${site.phone} and she will suggest a length and approach for you.`}
/>
