<script lang="ts">
  import SEO from '#lib/components/seo.svelte';
  import Mark from '#lib/components/mark.svelte';
  import PhotoPlaceholder from '#lib/components/photo-placeholder.svelte';
  import GoodToKnow from '#lib/components/good-to-know.svelte';
  import CtaBand from '#lib/components/cta-band.svelte';
  import Logo from '#lib/assets/logo.svelte';
  import portrait from '#lib/assets/mariya.jpg';
  import { Button } from '#lib/components/ui/button/index.ts';
  import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
  import { site } from '#lib/config/site.ts';
  import { massage, packages, membership, bemer, clients } from '#lib/config/services.ts';

  // Short labels for phones, the full ones from the canvas at sm and up.
  const facts = [
    { big: '30+ years', short: '30+ yrs', small: 'of hands-on practice', shortSmall: 'of practice' },
    { big: 'By appointment', short: 'By appt.', small: 'no walk-ins, no rush', shortSmall: 'no rush' },
    { big: 'Home studio', short: site.address.city, small: `${site.address.street}, ${site.address.city}`, shortSmall: 'home studio' }
  ];

  const teasers = [
    {
      mark: 'disc',
      markClass: 'text-shape',
      title: massage.name,
      body: massage.summary,
      price: `From $${massage.prices[0].price} · ${massage.prices[0].duration} min`,
      link: 'See all services',
      href: '/services'
    },
    {
      mark: 'dots',
      markClass: 'text-ochre',
      title: 'Packages and membership',
      body: `Six prepaid sessions at a saving, or one 60-minute massage every month for $${membership.price}.`,
      price: `Packages from $${packages.tiers[0].price}`,
      link: 'Compare packages',
      href: '/services#packages'
    },
    {
      mark: 'rings',
      markClass: 'text-shape',
      title: bemer.name,
      body: bemer.summary,
      price: `$${bemer.price} · ${bemer.duration} min`,
      link: 'About Bemer',
      href: '/services#bemer'
    }
  ] as const;
</script>

<SEO />

<!-- Hero -->
<section class="wrap grid grid-cols-1 gap-10 pt-6 pb-12 lg:grid-cols-12 lg:items-center lg:gap-8 lg:pt-12 lg:pb-22">
  <div class="flex flex-col gap-6 lg:col-span-6 lg:gap-7">
    <p class="eyebrow">Massage therapy · {site.address.city}, {site.address.state}</p>
    <h1 class="text-[60px] leading-[0.98] tracking-[-0.02em] lg:text-display">Find your balance.</h1>
    <p class="max-w-[520px] text-lg leading-normal text-muted-foreground lg:text-lead">
      One experienced therapist, a quiet home studio, and time for you. Over 30 years of experience with seniors,
      athletes, children and everyone in between.
    </p>
    <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
      <Button href="/book">Book a session <ArrowRightIcon data-icon="inline-end" /></Button>
      <Button href="tel:{site.phone.tel}" variant="outline">Call or text {site.phone.display}</Button>
    </div>
  </div>
  <div class="relative flex justify-end lg:col-span-5 lg:col-start-8">
    <PhotoPlaceholder label="Stock photo · the studio" class="aspect-[10/13] w-full max-w-[400px]" />
    <div class="absolute right-6 bottom-6 [--logo-body:var(--color-background)] [--logo-wing:var(--color-background)]">
      <Logo class="size-12 lg:size-16" title="" />
    </div>
  </div>
</section>

<!-- Facts -->
<section class="wrap" aria-label="At a glance">
  <ul class="grid grid-cols-3 gap-3 border-y border-border lg:gap-8">
    {#each facts as { big, short, small, shortSmall } (big)}
      <li class="flex flex-col gap-1.5 py-5 lg:py-7">
        <span class="font-serif text-xl text-heading lg:text-[30px]">
          <span class="sm:hidden">{short}</span><span class="max-sm:hidden">{big}</span>
        </span>
        <span class="text-[13px] text-muted-foreground lg:text-[15px]">
          <span class="sm:hidden">{shortSmall}</span><span class="max-sm:hidden">{small}</span>
        </span>
      </li>
    {/each}
  </ul>
</section>

<!-- Services teaser -->
<section class="wrap flex flex-col gap-8 py-16 lg:gap-12 lg:py-28" aria-labelledby="services-heading">
  <div class="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end lg:gap-8">
    <div class="flex flex-col gap-4 lg:col-span-8">
      <p class="eyebrow">Services</p>
      <h2 id="services-heading" class="text-[36px] leading-[1.08] lg:text-h2">
        Patient, hands-on care. Nothing fancy, nothing rushed.
      </h2>
    </div>
    <p class="text-body text-muted-foreground lg:col-span-4 lg:col-start-9 lg:text-lg lg:leading-normal">
      {massage.modalities.join(', ').replace(/^./, (c) => c.toUpperCase())}.
    </p>
  </div>
  <ul class="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
    {#each teasers as { mark, markClass, title, body, price, link, href } (title)}
      <li class="flex flex-col gap-5 rounded-md border border-border bg-card p-6 lg:min-h-[380px] lg:px-8 lg:pt-9 lg:pb-8">
        <Mark kind={mark} class={['size-11 lg:size-14', markClass]} />
        <h3 class="text-2xl leading-tight lg:text-h3">{title}</h3>
        <p class="grow text-base leading-relaxed text-muted-foreground lg:text-body">{body}</p>
        <p class="text-base font-medium text-foreground lg:text-body">{price}</p>
        <Button variant="link" {href} class="self-start text-base">{link} <ArrowRightIcon data-icon="inline-end" /></Button>
      </li>
    {/each}
  </ul>
</section>

<!-- Who I work with -->
<section class="bg-band text-band-foreground" aria-labelledby="clients-heading">
  <div class="wrap flex flex-col gap-10 py-16 lg:gap-16 lg:py-28">
    <div class="flex flex-col gap-4 lg:max-w-[66%]">
      <p class="eyebrow text-ochre">Who I work with</p>
      <h2 id="clients-heading" class="text-[36px] leading-[1.08] text-band-foreground lg:text-h2">
        Everyone from newborns to great-grandparents.
      </h2>
    </div>
    <ul class="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
      {#each clients as { mark, title, body } (title)}
        <li class="flex flex-col gap-3 border-t border-band-line pt-5 lg:gap-4 lg:pt-7">
          <Mark kind={mark} class={['size-8 lg:size-10', mark === 'disc' || mark === 'half' ? 'text-ochre' : 'text-band-foreground']} />
          <h3 class="text-xl text-band-foreground lg:text-[26px]">{title}</h3>
          <p class="text-[15px] leading-relaxed text-band-muted lg:text-base">{body}</p>
        </li>
      {/each}
    </ul>
  </div>
</section>

<!-- Meet Mariya -->
<section class="wrap grid grid-cols-1 gap-8 py-16 lg:grid-cols-12 lg:items-center lg:gap-8 lg:py-28" aria-labelledby="meet-heading">
  <div class="relative h-[300px] lg:col-span-5 lg:h-[520px]">
    <div class="absolute top-5 left-0 size-[180px] rounded-full bg-ochre lg:top-10 lg:size-[300px]" aria-hidden="true"></div>
    <img
      class="absolute right-0 bottom-0 size-[240px] rounded-full bg-tint object-cover lg:size-[400px]"
      src={portrait}
      alt="Mariya Fishman"
      width="1200"
      height="1600"
    />
  </div>
  <div class="flex flex-col gap-5 lg:col-span-6 lg:col-start-7 lg:gap-6">
    <p class="eyebrow">Meet Mariya</p>
    <h2 id="meet-heading" class="text-[32px] leading-[1.12] lg:text-h2">
      “My husband asked if maybe it was time to retire. I said no. I love my work.”
    </h2>
    <p class="text-body text-muted-foreground lg:text-lg lg:leading-relaxed">
      Mariya Fishman has practiced massage therapy for over 30 years. She works with seniors, athletes, children and
      everyone in between from her home studio in Hudson, MA, and offers Bemer circulation sessions to support recovery.
    </p>
    <Button variant="link" href="/about" class="self-start text-[17px]">Read her story <ArrowRightIcon data-icon="inline-end" /></Button>
  </div>
</section>

<GoodToKnow />
<CtaBand />
