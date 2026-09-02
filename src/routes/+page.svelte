<script lang="ts">
  import SEO from '#lib/components/seo.svelte';
  import Photo from '#lib/components/photo.svelte';
  import Portrait from '#lib/components/portrait.svelte';
  import BookCta from '#lib/components/book-cta.svelte';
  import Hours from '#lib/components/hours.svelte';
  import Logo from '#lib/assets/logo.svelte';
  import { Button } from '#lib/components/ui/button/index.ts';
  import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
  import { site } from '#lib/config/site.ts';
  import { photos } from '#lib/config/photos.ts';
  import { sessions, membership, audiences, money } from '#lib/config/services.ts';
</script>

<SEO />

<!-- Hero -->
<section class="bg-pine text-pine-foreground">
  <div class="wrap grid items-end gap-10 py-12 lg:grid-cols-12 lg:gap-8 lg:py-16">
    <div class="flex flex-col gap-7 lg:col-span-7">
      <p class="label text-butter">Massage therapy · Hudson, MA</p>
      <h1 class="display text-[clamp(2.75rem,6.5vw,5.5rem)]">{site.tagline}</h1>
      <p class="max-w-xl text-lg/relaxed text-pine-foreground/90 sm:text-xl/relaxed">
        Over thirty years of hands-on care from one unhurried therapist, in a quiet home studio. For
        seniors, athletes, new parents, and anyone who hurts.
      </p>
      <BookCta tone="onPine" />
      <p class="text-pine-foreground/70">By appointment · Mon, Wed, Fri 9–7 · Tue, Thu 2–7</p>
    </div>

    <div class="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
      <div class="aspect-4/5">
        <Photo photo={photos.hero} eager position="50% 40%" />
      </div>
      <Logo class="absolute -top-6 -left-4 size-20 text-butter drop-shadow-md sm:size-24 lg:-left-10" />
    </div>
  </div>
</section>

<!-- Who it's for -->
<section class="wrap py-10 lg:py-16">
  <div class="flex flex-col gap-4">
    <p class="label text-primary">Who comes to see Mariya</p>
    <h2 class="display max-w-3xl text-[clamp(1.875rem,4vw,3.25rem)]">Newborns to great-grandparents.</h2>
  </div>

  <ul class="mt-8 grid border-t lg:grid-cols-2 lg:gap-x-12">
    {#each audiences as who (who.title)}
      <li class="grid grid-cols-[auto_1fr] items-center gap-5 border-b py-6 sm:gap-8">
        <div class="size-20 sm:size-24">
          <Photo photo={photos[who.photo]} shape="round" />
        </div>
        <div>
          <h3 class="display text-2xl sm:text-3xl">{who.title}</h3>
          <p class="mt-1.5 text-lg text-muted-foreground">{who.line}</p>
        </div>
      </li>
    {/each}
  </ul>
</section>

<!-- Prices at a glance -->
<section class="bg-butter text-butter-foreground">
  <div class="wrap grid gap-10 py-12 lg:grid-cols-12 lg:py-16">
    <div class="flex flex-col gap-4 lg:col-span-5">
      <p class="label">Prices</p>
      <h2 class="display text-[clamp(1.875rem,4vw,3.25rem)]">Simple prices. No surprises.</h2>
      <p class="text-lg/relaxed text-butter-foreground/80">
        Six-session packages save {money(40)} to {money(80)}. Members get one 60-minute massage a month for
        {money(membership.price)}.
      </p>
      <div>
        <Button variant="outline" size="lg" href="/services" class="mt-2">
          All services and prices
          <ArrowRightIcon data-icon="inline-end" />
        </Button>
      </div>
    </div>
    <ul class="lg:col-span-6 lg:col-start-7">
      {#each sessions as s (s.minutes)}
        <li class="flex items-baseline justify-between gap-4 border-b border-butter-foreground/20 py-5">
          <span class="font-display text-2xl font-bold sm:text-4xl">{s.minutes} min</span>
          <span class="font-display text-2xl font-bold tabular-nums sm:text-4xl">{money(s.price)}</span>
        </li>
      {/each}
      <li class="flex items-baseline justify-between gap-4 py-5">
        <span class="font-display text-2xl font-bold sm:text-4xl">Membership</span>
        <span class="font-display text-2xl font-bold tabular-nums sm:text-4xl"
          >{money(membership.price)}<span class="text-xl font-semibold sm:text-2xl">/mo</span></span
        >
      </li>
    </ul>
  </div>
</section>

<!-- Meet Mariya -->
<section class="wrap grid items-center gap-10 py-14 lg:grid-cols-12 lg:gap-16 lg:py-20">
  <div class="mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none">
    <div class="aspect-4/5">
      <Portrait />
    </div>
  </div>
  <div class="flex flex-col gap-6 lg:col-span-7">
    <p class="label text-primary">Meet Mariya</p>
    <h2 class="display text-[clamp(1.875rem,4vw,3.25rem)]">Thirty years in. Still loves it.</h2>
    <p class="max-w-xl text-lg/relaxed">
      Mariya Fishman trained at the Muscular Therapy Institute in Cambridge and has practiced massage
      therapy for over thirty years. Before that she was a mechanical engineer, which is probably why she
      likes figuring out what is actually going on in your back.
    </p>
    <blockquote class="max-w-xl border-l-4 border-apricot pl-5 font-display text-xl font-semibold">
      “My husband asked if maybe it was time to retire. I said no. I love my work.”
    </blockquote>
    <div>
      <Button variant="ghost" size="lg" href="/about" class="-ml-7 text-primary">
        Her story
        <ArrowRightIcon data-icon="inline-end" />
      </Button>
    </div>
  </div>
</section>

<!-- Visit -->
<section class="bg-leaf text-leaf-foreground">
  <div class="wrap grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:py-16">
    <div class="flex flex-col gap-3">
      <h2 class="label">Where</h2>
      <p class="font-display text-2xl font-bold">
        {site.address.street}<br />{site.address.city}, {site.address.state} {site.address.zip}
      </p>
      <p class="text-leaf-foreground/80">A private home with a dedicated studio room. Hudson, just off I-495.</p>
      <a class="font-semibold underline underline-offset-4" href={site.mapsUrl} target="_blank" rel="noopener"
        >Open in Maps</a
      >
    </div>
    <div class="flex flex-col gap-3">
      <h2 class="label">When</h2>
      <Hours class="text-lg" />
    </div>
    <div class="flex flex-col gap-3 sm:col-span-2 lg:col-span-1">
      <h2 class="label">How</h2>
      <p class="text-lg text-leaf-foreground/85">
        Book online, or call or text Mariya. New clients get a short intake form after booking.
      </p>
      <BookCta tone="onLeaf" class="mt-2" />
    </div>
  </div>
</section>
