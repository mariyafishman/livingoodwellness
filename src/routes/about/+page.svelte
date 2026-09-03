<script lang="ts">
  import SEO from '#lib/components/seo.svelte';
  import Mark from '#lib/components/mark.svelte';
  import CtaBand from '#lib/components/cta-band.svelte';
  import Logo from '#lib/assets/logo.svelte';
  import portrait from '#lib/assets/mariya.jpg';
  import { site } from '#lib/config/site.ts';

  const balance = [
    { mark: 'disc', title: 'A healthy body', markClass: 'text-ochre' },
    { mark: 'half', title: 'Good food', markClass: 'text-band-foreground' },
    { mark: 'rings', title: 'A clear mind', markClass: 'text-ochre' }
  ] as const;
</script>

<SEO
  title="Meet Mariya"
  description="Mariya Fishman has practiced massage therapy for over 30 years. Trained engineer turned bodyworker, she works with seniors, athletes, children and everyone in between from her home studio in Hudson, MA."
/>

<!-- Title and portrait -->
<section class="wrap grid grid-cols-1 gap-10 pt-6 pb-12 lg:grid-cols-12 lg:items-end lg:gap-8 lg:pt-14 lg:pb-24">
  <div class="flex flex-col gap-5 lg:col-span-6">
    <p class="eyebrow">About</p>
    <h1 class="text-[52px] leading-none tracking-[-0.02em] lg:text-h1">Meet Mariya</h1>
    <p class="max-w-[480px] text-body text-muted-foreground lg:text-[19px] lg:leading-normal">
      {site.practitioner.name}, {site.practitioner.title}. Trained engineer turned bodyworker, more than thirty years
      in.
    </p>
  </div>
  <div class="flex justify-end lg:col-span-5 lg:col-start-8">
    <img
      class="aspect-[11/13] w-full max-w-[440px] rounded-t-full rounded-b-md bg-tint object-cover"
      src={portrait}
      alt="Mariya Fishman"
      width="1200"
      height="1600"
      fetchpriority="high"
    />
  </div>
</section>

<!-- Story -->
<section class="wrap grid grid-cols-1 gap-10 pb-16 lg:grid-cols-12 lg:gap-8 lg:pb-28" aria-label="Mariya's story">
  <aside class="flex flex-col gap-5 lg:sticky lg:top-10 lg:col-span-3 lg:self-start">
    <Logo class="size-16 lg:size-18" title="" />
    <p class="text-[15px] leading-relaxed text-muted-foreground">
      Every year Mariya volunteers on the massage team at the Pan-Mass Challenge, working with cancer survivors.
    </p>
  </aside>
  <div class="flex flex-col gap-5 text-[19px] leading-[1.65] text-foreground lg:col-span-7 lg:col-start-5">
    <p>
      I have been a massage therapist for more than thirty years. Before that I was a mechanical engineer, and before
      that I was a girl in Belarus who wanted to be a doctor. When I came to America I trained at the Muscular Therapy
      Institute in Cambridge and found the work I was meant to do: helping people feel at home in their bodies.
    </p>
    <p>
      Seven years ago I fell and broke my leg, my wrist and my back. For a long time I could not work. What brought me
      back was the same thing I now offer my clients: patient hands-on care, good circulation, and the belief that the
      body knows how to heal when you give it what it needs.
    </p>
    <blockquote class="my-4 border-y border-border py-8 font-serif text-[30px] leading-[1.15] text-heading lg:text-[40px]">
      My husband asked if maybe it was time to retire. I said no. I love my work.
    </blockquote>
    <h2 class="mt-2 text-[28px] leading-tight lg:mt-6 lg:text-[34px]">Who I work with</h2>
    <p>
      Everyone from newborns to great-grandparents. My favorite clients are seniors who want to keep moving
      comfortably, athletes who want to recover faster and play longer, and parents who want to learn how to massage
      their babies. Every year I volunteer on the massage team at the Pan-Mass Challenge, working with cancer survivors.
    </p>
    <h2 class="mt-2 text-[28px] leading-tight lg:mt-6 lg:text-[34px]">What “Livingood” means</h2>
    <p>
      The name is a reminder to live well, in balance: a healthy body, good food, and a clear mind. That balance is what
      I try to bring to every session.
    </p>
    <p>
      Sessions are by appointment in my quiet home studio in Hudson, Massachusetts. Call or text me at
      <a class="border-b-[1.5px] border-ochre text-heading hover:text-eyebrow" href="tel:{site.phone.tel}">{site.phone.display}</a>.
    </p>
  </div>
</section>

<!-- Balance -->
<section class="bg-band text-band-foreground" aria-label="Balance">
  <div class="wrap grid grid-cols-1 gap-6 py-14 sm:grid-cols-3 lg:gap-8 lg:py-24">
    {#each balance as { mark, title, markClass } (title)}
      <div class="flex flex-col gap-5 border-t border-band-line pt-6">
        <Mark kind={mark} class={['size-12', markClass]} />
        <h2 class="text-2xl text-band-foreground lg:text-h3">{title}</h2>
      </div>
    {/each}
  </div>
</section>

<CtaBand />
