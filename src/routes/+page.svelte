<script lang="ts">
  import SEO from '#lib/components/seo.svelte';
  import { Button } from '#lib/components/ui/button/index.ts';
  import Duotone from '#lib/components/duotone.svelte';
  import Stamp from '#lib/components/stamp.svelte';
  import Portrait from '#lib/components/portrait.svelte';
  import SectionHead from '#lib/components/section-head.svelte';
  import BookCta from '#lib/components/book-cta.svelte';
  import { site, isExternal } from '#lib/config/site.ts';
  import { singleSessions, membership, packages, money } from '#lib/config/services.ts';
  import { photos } from '#lib/config/photos.ts';
  import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';

  const bookingExternal = isExternal(site.bookingUrl);

  const people = [
    'The retired teacher who wants to keep gardening without paying for it the next morning.',
    'The pickleball player whose knee has started to have opinions.',
    'The new parent who would like to learn how to massage their baby.',
    'The runner, the nurse, the carpenter, the person still stiff from a fall last winter.',
    'Anyone who is simply tired of hurting, and would like an hour of quiet.'
  ];

  const figures = [
    { photo: photos.seniors, caption: 'Seniors' },
    { photo: photos.athletes, caption: 'Athletes' },
    { photo: photos.parents, caption: 'Parents & children' }
  ];

  const facts = [
    'Muscular Therapy Institute, Cambridge, MA',
    `${site.yearsInPractice} years in practice`,
    'Pan-Mass Challenge massage team volunteer',
    'BBB rating A+'
  ];

  const goodToKnow = [
    ['By appointment', 'No walk-ins. Call, text, or book online and pick a time that suits you.'],
    ['A home studio', 'A dedicated treatment room in a private house on Marlboro Street in Hudson. Calm, warm, and quiet.'],
    ['First visit', 'New clients get a short intake form after booking, so the time on the table is all yours.'],
    ['Paying', 'Cash, Venmo, or card. Itemized receipts on request for insurance or HSA/FSA claims.']
  ];
</script>

<SEO />

<!-- Hero: the top of the sheet -->
<section class="sheet pt-10 pb-12 md:pt-16 md:pb-16">
  <div class="grid gap-10 md:grid-cols-12 md:items-end md:gap-8">
    <div class="md:col-span-8">
      <p class="label">Massage therapy · Hudson, Massachusetts</p>
      <h1 class="mt-5 text-[3.4rem] leading-[0.95] sm:text-7xl md:text-8xl lg:text-[7.6rem]">
        Find your <span class="underline-ink">balance</span>.
      </h1>
      <p class="mt-8 max-w-xl text-xl leading-snug md:text-2xl">
        One therapist. Thirty-one years of hands-on care. A quiet studio in a house on Marlboro Street, by appointment.
      </p>
      <div class="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button
          href={site.bookingUrl}
          size="lg"
          class="h-14 px-8 text-lg"
          target={bookingExternal ? '_blank' : undefined}
          rel={bookingExternal ? 'noopener' : undefined}
        >
          Book a session
        </Button>
        <Button href={site.phoneHref} variant="outline" size="lg" class="h-14 px-8 text-lg">
          Call or text <span class="font-mono">{site.phone}</span>
        </Button>
      </div>
    </div>
    <div class="flex md:col-span-4 md:justify-end">
      <Stamp class="size-40 md:size-52 lg:size-60" />
    </div>
  </div>

  <div class="mt-12 grid gap-6 md:mt-16 md:grid-cols-12 md:items-end">
    <Duotone
      src={photos.hero.src}
      alt={photos.hero.alt}
      class="aspect-[16/10] md:col-span-8 md:aspect-[2/1]"
      position="50% 40%"
      eager
    />
    <dl class="font-mono text-sm md:col-span-4">
      {#each site.hours.filter((h) => h.short !== 'Sun') as h (h.day)}
        <div class="rule flex justify-between gap-4 py-2.5">
          <dt class="text-muted-foreground">{h.day}</dt>
          <dd class="tabular-nums">{h.open ? `${h.open.replace(':00', '')} – ${h.close?.replace(':00', '')}` : h.note}</dd>
        </div>
      {/each}
      <div class="rule flex justify-between gap-4 py-2.5">
        <dt class="text-muted-foreground">Studio</dt>
        <dd class="text-right">{site.address.street}, {site.address.city}</dd>
      </div>
    </dl>
  </div>
</section>

<!-- 01 Who -->
<section class="sheet rule py-14 md:py-20">
  <SectionHead
    number="01"
    kicker="Who comes to see Mariya"
    title="People who would like to keep doing what they do."
    note="Seniors, athletes, parents and children. Long-standing pain, a recent injury, or simply a long week."
  />
  <ol class="mt-10 md:mt-14">
    {#each people as line, i (line)}
      <li class="rule grid gap-2 py-5 md:grid-cols-12 md:py-6">
        <span class="label md:col-span-1 md:pt-2">{String(i + 1).padStart(2, '0')}</span>
        <p class="font-display text-2xl leading-tight sm:text-3xl md:col-span-11 md:text-4xl">{line}</p>
      </li>
    {/each}
  </ol>
  <div class="mt-12 grid grid-cols-3 gap-3 md:gap-5">
    {#each figures as { photo, caption }, i (caption)}
      <figure>
        <Duotone src={photo.src} alt={photo.alt} class="aspect-[4/5]" />
        <figcaption class="label mt-2">Fig. {i + 1} — {caption}</figcaption>
      </figure>
    {/each}
  </div>
</section>

<!-- 02 Prices -->
<section class="sheet rule py-14 md:py-20">
  <SectionHead
    number="02"
    kicker="Prices, plainly"
    title="No rent, no front desk, no spa surcharge."
    note="Which is why the numbers look like this. Six-session packages and a monthly membership bring them lower still."
  />
  <div class="mt-10 grid gap-8 md:grid-cols-12 md:gap-12">
    <dl class="text-xl md:col-span-7 md:text-2xl">
      {#each singleSessions as row (row.minutes)}
        <div class="leaders rule py-4">
          <dt>Massage, {row.label}</dt>
          <dd>{money(row.price)}</dd>
        </div>
      {/each}
      <div class="leaders rule py-4">
        <dt>Membership, one 60-minute session a month</dt>
        <dd>{money(membership.price)} / mo</dd>
      </div>
      <div class="leaders rule py-4">
        <dt>Six-session packages</dt>
        <dd>from {money(packages[0].price)}</dd>
      </div>
    </dl>
    <div class="md:col-span-5">
      <p class="text-lg text-muted-foreground">
        Every session is the full length on the table; the few minutes of talking beforehand are on the house. Packages are prepaid and shared by family if you like. Members pay the member rate for any extra session in the same month.
      </p>
      <Button href="/services" variant="outline" class="mt-6">
        See every price <ArrowRightIcon data-icon="inline-end" />
      </Button>
    </div>
  </div>
</section>

<!-- 03 The therapist -->
<section class="sheet rule py-14 md:py-20">
  <div class="grid gap-8 md:grid-cols-12 md:gap-12">
    <div class="md:col-span-5">
      <Portrait class="aspect-[4/5]" />
      <p class="label mt-2">Fig. 4 — Mariya, in the studio</p>
    </div>
    <div class="md:col-span-7">
      <p class="label"><span class="text-foreground">§ 03</span> — The therapist</p>
      <h2 class="mt-3 text-4xl sm:text-5xl md:text-6xl">Mariya Fishman, LMT</h2>
      <p class="mt-6 text-lg">
        Mariya was a mechanical engineer in Belarus before she was a massage therapist in Massachusetts. She trained at the Muscular Therapy Institute in Cambridge and has practiced for thirty-one years, most of them with the same kinds of people: older adults who want to keep moving, athletes who want to keep playing, and parents who want to learn how to soothe their own children.
      </p>
      <blockquote class="mt-8 border-l-4 border-sun pl-5 font-display text-2xl leading-snug md:text-3xl">
        “My husband asked if maybe it was time to retire. I said no. I love my work.”
      </blockquote>
      <ul class="mt-8 grid gap-2 font-mono text-sm sm:grid-cols-2">
        {#each facts as fact (fact)}
          <li class="rule pt-2">{fact}</li>
        {/each}
      </ul>
      <Button href="/about" variant="outline" class="mt-8">
        Her story <ArrowRightIcon data-icon="inline-end" />
      </Button>
    </div>
  </div>
</section>

<!-- 04 Good to know -->
<section class="sheet rule py-14 md:py-20">
  <SectionHead number="04" kicker="Good to know" title="The practical part." />
  <dl class="mt-10 grid gap-x-12 md:grid-cols-2">
    {#each goodToKnow as [term, detail] (term)}
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
