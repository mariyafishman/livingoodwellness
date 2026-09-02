<script lang="ts">
  import SEO from '#lib/components/seo.svelte';
  import { Button } from '#lib/components/ui/button/index.ts';
  import Duotone from '#lib/components/duotone.svelte';
  import SectionHead from '#lib/components/section-head.svelte';
  import BookCta from '#lib/components/book-cta.svelte';
  import { site, isExternal } from '#lib/config/site.ts';
  import {
    singleSessions,
    packages,
    packageSessions,
    membership,
    bemer,
    modalities,
    audiences,
    money,
    perSession
  } from '#lib/config/services.ts';
  import { photos } from '#lib/config/photos.ts';

  const bookingExternal = isExternal(site.bookingUrl);
  const bookAttrs = {
    href: site.bookingUrl,
    target: bookingExternal ? '_blank' : undefined,
    rel: bookingExternal ? 'noopener' : undefined
  };

  const contents = [
    ['01', 'Massage therapy', '#massage'],
    ['02', 'Six-session packages', '#packages'],
    ['03', 'Membership', '#membership'],
    ['04', 'Bemer circulation', '#bemer'],
    ['05', 'Good to know', '#notes']
  ];

  const notes = [
    ['By appointment', 'Book online, or call or text. Mon, Wed, Fri 9–7; Tue, Thu 2–7; Saturdays by request.'],
    ['Where', `A dedicated studio room in a private home at ${site.address.street}, ${site.address.city}. Mariya will tell you where to park when you book.`],
    ['Before your first visit', 'You receive a short intake form after booking. Fill it in at home so the session is all table time.'],
    ['Paying', 'Cash, Venmo, or card in the studio. Packages and the membership are paid online when you book.'],
    ['Receipts', 'Itemized receipts on request for insurance reimbursement or HSA/FSA claims.']
  ];
</script>

<SEO
  title="Services & prices"
  description="Massage therapy prices in Hudson, MA: 60, 90 and 120-minute sessions, six-session packages, an $80 monthly membership, and Bemer circulation sessions. By appointment."
/>

<section class="sheet pt-10 pb-10 md:pt-16 md:pb-14">
  <div class="grid gap-8 md:grid-cols-12 md:items-end">
    <div class="md:col-span-8">
      <p class="label">Services & prices</p>
      <h1 class="mt-5 text-5xl leading-[0.98] sm:text-6xl md:text-7xl lg:text-8xl">Everything on one sheet.</h1>
      <p class="mt-6 max-w-xl text-xl leading-snug md:text-2xl">
        Massage therapy in three lengths, six-session packages, a monthly membership, and Bemer circulation sessions. The price is the price; nothing is added at the door.
      </p>
    </div>
    <nav class="md:col-span-4" aria-label="On this page">
      <ol class="font-mono text-sm">
        {#each contents as [n, label, href] (href)}
          <li class="rule">
            <a {href} class="flex justify-between gap-4 py-2.5 hover:text-foreground">
              <span class="text-muted-foreground">{n}</span>
              <span class="flex-1">{label}</span>
              <span aria-hidden="true">↓</span>
            </a>
          </li>
        {/each}
      </ol>
    </nav>
  </div>
</section>

<!-- 01 Massage therapy -->
<section id="massage" class="sheet rule scroll-mt-24 py-14 md:py-20">
  <SectionHead
    number="01"
    kicker="Massage therapy"
    title="The main thing."
    note="Therapeutic and relaxation massage, adjusted to you: the pressure, the pace, and where the time goes."
  />
  <div class="mt-10 grid gap-10 md:grid-cols-12 md:gap-12">
    <div class="md:col-span-7">
      <dl class="text-xl md:text-2xl">
        {#each singleSessions as row (row.minutes)}
          <div class="rule flex items-baseline gap-3 py-4">
            <dt class="leaders flex-1">
              <span>{row.label}</span>
              <span>{money(row.price)}</span>
            </dt>
            <dd>
              <a {...bookAttrs} class="label text-foreground underline decoration-sun decoration-2 underline-offset-4">Book</a>
            </dd>
          </div>
        {/each}
      </dl>
      <p class="mt-6 text-lg text-muted-foreground">
        A session starts with a few minutes of talking: what hurts, what you do all day, what you want from the hour. Then the time on the table is yours. Mariya works with people from newborns to great-grandparents and adjusts everything, from pressure to positioning, to the person in front of her.
      </p>
      <h3 class="mt-10 text-2xl">Kinds of work</h3>
      <dl class="mt-4">
        {#each modalities as m (m.name)}
          <div class="rule grid gap-1 py-3 sm:grid-cols-12 sm:gap-4">
            <dt class="sm:col-span-5">{m.name}</dt>
            <dd class="text-muted-foreground sm:col-span-7">{m.note}</dd>
          </div>
        {/each}
      </dl>
    </div>
    <div class="md:col-span-5">
      <Duotone src={photos.hands.src} alt={photos.hands.alt} class="aspect-[4/3]" />
      <p class="label mt-2">Fig. 1 — Hands</p>
      <h3 class="mt-8 text-2xl">Who it's for</h3>
      <ul class="mt-3">
        {#each audiences as a (a)}
          <li class="rule py-2.5">{a}</li>
        {/each}
      </ul>
    </div>
  </div>
</section>

<!-- 02 Packages -->
<section id="packages" class="sheet rule scroll-mt-24 py-14 md:py-20">
  <SectionHead
    number="02"
    kicker="Six-session packages"
    title="Buy six, pay less for each."
    note="Prepaid, in the length you prefer. Good for a season of training, a recovery, or a standing appointment."
  />
  <div class="mt-10 overflow-x-auto">
    <table class="w-full min-w-[34rem] border-collapse text-left">
      <thead>
        <tr class="label border-b-2 border-foreground">
          <th class="py-3 pr-4 font-normal">Session length</th>
          <th class="py-3 pr-4 font-normal">{packageSessions} sessions</th>
          <th class="py-3 pr-4 font-normal">Per session</th>
          <th class="py-3 pr-4 font-normal">You save</th>
          <th class="py-3 font-normal"><span class="sr-only">Book</span></th>
        </tr>
      </thead>
      <tbody class="text-lg md:text-xl">
        {#each packages as row (row.minutes)}
          <tr class="border-b border-border">
            <td class="py-4 pr-4">{row.minutes} minutes</td>
            <td class="py-4 pr-4 font-mono tabular-nums">{money(row.price)}</td>
            <td class="py-4 pr-4 font-mono tabular-nums text-muted-foreground">{perSession(row)}</td>
            <td class="py-4 pr-4 font-mono tabular-nums text-muted-foreground">{money(row.save)}</td>
            <td class="py-4 text-right">
              <a {...bookAttrs} class="label text-foreground underline decoration-sun decoration-2 underline-offset-4">Book</a>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</section>

<!-- 03 Membership -->
<section id="membership" class="sheet rule scroll-mt-24 py-14 md:py-20">
  <div class="grid gap-8 md:grid-cols-12 md:gap-12">
    <div class="md:col-span-7">
      <SectionHead number="03" kicker="Membership" title="Once a month, every month." />
      <p class="mt-6 text-lg text-muted-foreground">
        {membership.includes}, billed monthly. {membership.extra}. Set up and paid online, cancel when you need to. Good for the people who know they will not book unless it is already booked.
      </p>
    </div>
    <div class="flex flex-col justify-end md:col-span-5">
      <p class="rule-strong pt-4 font-display text-6xl md:text-7xl">
        {money(membership.price)}<span class="ml-2 font-mono text-base text-muted-foreground">/ {membership.period}</span>
      </p>
      <Button {...bookAttrs} size="lg" class="mt-6 h-14 text-lg">Start a membership</Button>
    </div>
  </div>
</section>

<!-- 04 Bemer -->
<section id="bemer" class="sheet rule scroll-mt-24 py-14 md:py-20">
  <SectionHead number="04" kicker="Bemer circulation session" title="A quiet half hour on the mat." />
  <div class="mt-10 grid gap-8 md:grid-cols-12 md:gap-12">
    <div class="md:col-span-7">
      <p class="text-lg text-muted-foreground">{bemer.description}</p>
      <p class="label mt-6 max-w-prose normal-case tracking-normal">{bemer.disclaimer}</p>
    </div>
    <dl class="text-xl md:col-span-5 md:text-2xl">
      <div class="rule flex items-baseline gap-3 py-4">
        <dt class="leaders flex-1">
          <span>{bemer.minutes} minutes</span>
          <span>{money(bemer.price)}</span>
        </dt>
        <dd>
          <a {...bookAttrs} class="label text-foreground underline decoration-sun decoration-2 underline-offset-4">Book</a>
        </dd>
      </div>
    </dl>
  </div>
</section>

<!-- 05 Good to know -->
<section id="notes" class="sheet rule scroll-mt-24 py-14 md:py-20">
  <SectionHead number="05" kicker="Good to know" title="The practical part." />
  <dl class="mt-10 grid gap-x-12 md:grid-cols-2">
    {#each notes as [term, detail] (term)}
      <div class="rule py-5">
        <dt class="font-display text-2xl">{term}</dt>
        <dd class="mt-2 text-muted-foreground">{detail}</dd>
      </div>
    {/each}
  </dl>
</section>

<div class="sheet">
  <BookCta />
</div>
