<script lang="ts">
  import SEO from '#lib/components/seo.svelte';
  import Duotone from '#lib/components/duotone.svelte';
  import Portrait from '#lib/components/portrait.svelte';
  import Stamp from '#lib/components/stamp.svelte';
  import BookCta from '#lib/components/book-cta.svelte';
  import { site } from '#lib/config/site.ts';
  import { photos } from '#lib/config/photos.ts';

  const margin = [
    ['Trained', 'Muscular Therapy Institute, Cambridge, MA'],
    ['Licensed', `Massachusetts LMT, #${site.licenseNumber}`],
    ['In practice', `${site.yearsInPractice} years`],
    ['Volunteers', 'Pan-Mass Challenge massage team, every summer'],
    ['Also', 'Trained in manual lymphatic drainage; certification in progress'],
    ['Studio', `${site.address.street}, ${site.address.city}, ${site.address.state}`]
  ];

  const history = [
    ['Belarus', 'A girl who wanted to be a doctor. Her parents steered her toward mechanical engineering, and she spent her first career developing machine tools in the early days of computer-aided design.'],
    ['Cambridge, Massachusetts', 'After emigrating, she trained at the Muscular Therapy Institute and became a licensed massage therapist. She found the work she was meant to do.'],
    ['Thirty-one years', 'Seniors, athletes, children and their parents, people sent by chiropractors and insurers after accidents. Every summer, cancer survivors at the Pan-Mass Challenge.'],
    ['The fall', 'Seven years ago she broke her leg, her wrist and her back, and could not work for a long time. Patient hands-on care and good circulation brought her back. So did refusing to retire.'],
    ['Hudson', 'A quiet treatment room in her own house on Marlboro Street, and a practice built again from the ground up.']
  ];
</script>

<SEO
  title="About Mariya"
  description="Mariya Fishman, LMT, has practiced massage therapy for 31 years. Trained at the Muscular Therapy Institute in Cambridge, she works with seniors, athletes and families from her home studio in Hudson, MA."
/>

<section class="sheet pt-10 pb-10 md:pt-16 md:pb-14">
  <div class="grid gap-10 md:grid-cols-12 md:gap-12">
    <div class="md:col-span-5">
      <Portrait class="aspect-[4/5]" eager />
      <p class="label mt-2">Fig. 1 — Mariya Fishman, LMT</p>
    </div>
    <div class="md:col-span-7">
      <p class="label">About</p>
      <h1 class="mt-5 text-5xl leading-[0.98] sm:text-6xl md:text-7xl lg:text-8xl">Meet Mariya.</h1>
      <div class="mt-8 max-w-prose space-y-5 text-lg leading-relaxed md:text-xl">
        <p>
          I have been a massage therapist for more than thirty years. Before that I was a mechanical engineer, and before that I was a girl in Belarus who wanted to be a doctor. When I came to America I trained at the Muscular Therapy Institute in Cambridge and found the work I was meant to do: helping people feel at home in their bodies.
        </p>
        <p>
          Seven years ago I fell and broke my leg, my wrist and my back. For a long time I could not work. What brought me back was the same thing I now offer my clients: patient hands-on care, good circulation, and the belief that the body knows how to heal when you give it what it needs. My husband asked if maybe it was time to retire. I said no. I love my work.
        </p>
      </div>
    </div>
  </div>
</section>

<section class="sheet rule py-14 md:py-20">
  <div class="grid gap-10 md:grid-cols-12 md:gap-12">
    <div class="md:col-span-7">
      <h2 class="text-4xl sm:text-5xl">Who I work with</h2>
      <div class="mt-6 max-w-prose space-y-5 text-lg leading-relaxed md:text-xl">
        <p>
          Everyone from newborns to great-grandparents. My favorite clients are seniors who want to keep moving comfortably, athletes who want to recover faster and play longer, and parents who want to learn how to massage their babies. Every year I volunteer on the massage team at the Pan-Mass Challenge, working with cancer survivors.
        </p>
      </div>

      <h2 class="mt-14 text-4xl sm:text-5xl">What “Livingood” means</h2>
      <div class="mt-6 max-w-prose space-y-5 text-lg leading-relaxed md:text-xl">
        <p>
          The name is a reminder to live well, in balance: a healthy body, good food, and a clear mind. That balance is what I try to bring to every session.
        </p>
        <p>
          Sessions are by appointment in my quiet home studio in Hudson, Massachusetts. Call or text me at
          <a href={site.phoneHref} class="font-mono underline decoration-sun decoration-[3px] underline-offset-4">{site.phone}</a>.
        </p>
      </div>
    </div>
    <aside class="md:col-span-5">
      <dl class="rule-strong">
        {#each margin as [term, detail] (term)}
          <div class="rule grid grid-cols-[6.5rem_1fr] gap-4 py-3 text-base">
            <dt class="label pt-1">{term}</dt>
            <dd>{detail}</dd>
          </div>
        {/each}
      </dl>
      <Stamp class="mx-auto mt-12 size-44" text="Find your balance · Livingood Wellness Center · Hudson, MA · " />
    </aside>
  </div>
</section>

<section class="sheet rule py-14 md:py-20">
  <p class="label"><span class="text-foreground">§ 02</span> — A short history</p>
  <h2 class="mt-3 text-4xl sm:text-5xl md:text-6xl">How she got here.</h2>
  <ol class="mt-10">
    {#each history as [place, story], i (place)}
      <li class="rule grid gap-2 py-6 md:grid-cols-12 md:gap-6">
        <span class="label md:col-span-1 md:pt-2">{String(i + 1).padStart(2, '0')}</span>
        <h3 class="font-display text-2xl md:col-span-4 md:text-3xl">{place}</h3>
        <p class="text-muted-foreground md:col-span-7">{story}</p>
      </li>
    {/each}
  </ol>
  <figure class="mt-12 md:mt-16">
    <Duotone src={photos.walk.src} alt={photos.walk.alt} class="aspect-[16/9] md:aspect-[21/9]" position="50% 60%" />
    <figcaption class="label mt-2">Fig. 2 — Keep moving</figcaption>
  </figure>
</section>

<div class="sheet">
  <BookCta title="Come say hello." lede="The first visit starts with a conversation. Book a session, or call or text Mariya with a question." />
</div>
