<script lang="ts">
  import SEO from '#lib/components/seo.svelte';
  import Portrait from '#lib/components/portrait.svelte';
  import Photo from '#lib/components/photo.svelte';
  import BookCta from '#lib/components/book-cta.svelte';
  import { photos } from '#lib/config/photos.ts';

  const facts = [
    { big: '30+', small: 'years of massage therapy' },
    { big: 'MTI', small: 'Muscular Therapy Institute, Cambridge' },
    { big: 'PMC', small: 'Pan-Mass Challenge massage volunteer' },
    { big: 'LMT', small: 'Licensed in Massachusetts' }
  ];
</script>

<SEO
  title="About Mariya"
  description="Mariya Fishman, LMT, has practiced massage therapy for over 30 years. Engineer turned therapist, Pan-Mass Challenge volunteer, home studio in Hudson, MA."
/>

<!-- Intro -->
<section class="wrap grid items-center gap-10 py-12 lg:grid-cols-12 lg:gap-16 lg:py-16">
  <div class="mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none">
    <div class="aspect-4/5">
      <Portrait eager />
    </div>
  </div>
  <div class="flex flex-col gap-6 lg:col-span-7">
    <p class="label text-primary">About</p>
    <h1 class="display text-[clamp(2.25rem,5vw,4rem)]">Hi, I'm Mariya.</h1>
    <p class="max-w-xl text-lg/relaxed sm:text-xl/relaxed">
      I have been a massage therapist for more than thirty years. Before that I was a mechanical engineer,
      and before that I was a girl in Belarus who wanted to be a doctor.
    </p>
  </div>
</section>

<!-- Story -->
<section class="bg-butter text-butter-foreground">
  <div class="wrap grid gap-10 py-12 lg:grid-cols-12 lg:py-16">
    <div class="flex flex-col gap-10 lg:col-span-7">
      <div class="flex flex-col gap-3">
        <h2 class="display text-2xl sm:text-3xl">The work I was meant to do</h2>
        <p class="max-w-prose text-lg/relaxed">
          When I came to America I trained at the Muscular Therapy Institute in Cambridge and found it:
          helping people feel at home in their bodies.
        </p>
      </div>
      <div class="flex flex-col gap-3">
        <h2 class="display text-2xl sm:text-3xl">The fall, and getting up</h2>
        <p class="max-w-prose text-lg/relaxed">
          Seven years ago I fell and broke my leg, my wrist and my back. For a long time I could not work.
          What brought me back is what I offer my clients now: patient hands-on care, good circulation, and
          the belief that the body knows how to heal when you give it what it needs.
        </p>
        <blockquote class="mt-2 max-w-prose border-l-4 border-apricot pl-5 font-display text-xl font-semibold">
          My husband asked if maybe it was time to retire. I said no. I love my work.
        </blockquote>
      </div>
      <div class="flex flex-col gap-3">
        <h2 class="display text-2xl sm:text-3xl">Who I work with</h2>
        <p class="max-w-prose text-lg/relaxed">
          Everyone from newborns to great-grandparents. My favorites: seniors who want to keep moving
          comfortably, athletes who want to recover faster and play longer, and parents who want to learn
          how to massage their babies. Every year I volunteer on the massage team at the Pan-Mass
          Challenge, working with cancer survivors.
        </p>
      </div>
      <div class="flex flex-col gap-3">
        <h2 class="display text-2xl sm:text-3xl">What “Livingood” means</h2>
        <p class="max-w-prose text-lg/relaxed">
          Live well, in balance: a healthy body, good food, a clear mind. That is what I try to bring to
          every session.
        </p>
      </div>
    </div>
    <div class="flex flex-col gap-6 lg:col-span-4 lg:col-start-9">
      <div class="aspect-4/5">
        <Photo photo={photos.hands} position="50% 60%" />
      </div>
      <div class="aspect-4/5 max-lg:hidden">
        <Photo photo={photos.anyone} />
      </div>
    </div>
  </div>
</section>

<!-- Facts -->
<section class="bg-leaf text-leaf-foreground">
  <ul class="wrap grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:py-20">
    {#each facts as f (f.big)}
      <li class="flex flex-col gap-1 border-t border-leaf-foreground/25 pt-4">
        <span class="font-display text-4xl font-bold sm:text-5xl">{f.big}</span>
        <span class="text-leaf-foreground/85">{f.small}</span>
      </li>
    {/each}
  </ul>
</section>

<!-- CTA -->
<section class="bg-pine text-pine-foreground">
  <div class="wrap flex flex-col gap-8 py-12 lg:flex-row lg:items-end lg:justify-between lg:py-16">
    <h2 class="display max-w-2xl text-[clamp(1.875rem,4vw,3.25rem)]">Come see me. Sessions are by appointment.</h2>
    <BookCta tone="onPine" />
  </div>
</section>
