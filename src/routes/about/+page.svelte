<script lang="ts">
  import SEO from '#lib/components/seo.svelte';
  import CtaBand from '#lib/components/cta-band.svelte';
  import Rings from '#lib/components/decor/rings.svelte';
  import Logo from '#lib/assets/logo.svelte';
  import { Button } from '#lib/components/ui/button/index.ts';
  import PhoneIcon from '@lucide/svelte/icons/phone';
  import { site } from '#lib/config/site.ts';
  import portrait from '#lib/assets/mariya.jpg';

  const facts = [
    { label: 'Practice', value: 'Over 30 years of massage therapy' },
    { label: 'Trained at', value: 'Muscular Therapy Institute, Cambridge' },
    { label: 'Before that', value: 'Mechanical engineer' },
    { label: 'Every year', value: 'Pan-Mass Challenge massage team volunteer' },
    { label: 'Studio', value: 'Quiet home studio in Hudson, MA' }
  ];
</script>

<SEO
  title="About Mariya"
  description="Mariya Fishman has practiced massage therapy for over 30 years. Engineer turned bodyworker, she works with seniors, athletes, children and everyone in between from her home studio in Hudson, MA."
/>

<section class="relative overflow-hidden" aria-labelledby="about-title">
  <Rings class="pointer-events-none absolute -top-64 -right-64 size-[44rem] text-moss-soft/25" rings={9} />
  <div class="wrap relative grid gap-12 pt-14 pb-16 sm:pt-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] lg:gap-20 lg:py-24">
    <!-- Portrait and facts -->
    <aside class="flex flex-col gap-8 lg:sticky lg:top-24 lg:self-start">
      <div class="arch relative mx-auto aspect-[4/5] w-full max-w-sm bg-sage lg:mx-0">
        <img
          src={portrait}
          alt="Mariya Fishman, Licensed Massage Therapist"
          class="size-full object-cover object-[50%_20%] saturate-[0.9]"
          width="1200"
          height="1500"
        />
      </div>
      <dl class="mx-auto flex w-full max-w-sm flex-col divide-y divide-border rounded-3xl border border-border bg-card px-6 lg:mx-0">
        {#each facts as { label, value } (label)}
          <div class="flex flex-col gap-0.5 py-3.5">
            <dt class="text-xs font-semibold tracking-[0.12em] text-moss-soft uppercase">{label}</dt>
            <dd>{value}</dd>
          </div>
        {/each}
      </dl>
    </aside>

    <!-- Approved copy, in her voice -->
    <article class="flex max-w-2xl flex-col gap-10">
      <header class="flex flex-col gap-4">
        <span class="eyebrow">About</span>
        <h1 id="about-title" class="text-display-xl">Meet <span class="display-italic">Mariya.</span></h1>
      </header>

      <div class="flex flex-col gap-5 text-lg leading-relaxed">
        <p>
          I have been a massage therapist for more than thirty years. Before that I was a mechanical engineer, and
          before that I was a girl in Belarus who wanted to be a doctor. When I came to America I trained at the
          Muscular Therapy Institute in Cambridge and found the work I was meant to do: helping people feel at home in
          their bodies.
        </p>
        <p>
          Seven years ago I fell and broke my leg, my wrist and my back. For a long time I could not work. What
          brought me back was the same thing I now offer my clients: patient hands-on care, good circulation, and the
          belief that the body knows how to heal when you give it what it needs. My husband asked if maybe it was time
          to retire. I said no. I love my work.
        </p>
      </div>

      <div class="flex flex-col gap-4">
        <h2 class="text-display-md">Who I work with</h2>
        <p class="text-lg leading-relaxed">
          Everyone from newborns to great-grandparents. My favorite clients are seniors who want to keep moving
          comfortably, athletes who want to recover faster and play longer, and parents who want to learn how to
          massage their babies. Every year I volunteer on the massage team at the Pan-Mass Challenge, working with
          cancer survivors.
        </p>
      </div>

      <div class="flex flex-col gap-4 rounded-3xl bg-sage p-6 text-sage-foreground sm:p-8">
        <div class="flex items-center gap-3">
          <Logo class="size-9 text-primary" />
          <h2 class="text-display-md">What “Livingood” means</h2>
        </div>
        <p class="text-lg leading-relaxed">
          The name is a reminder to live well, in balance: a healthy body, good food, and a clear mind. That balance
          is what I try to bring to every session.
        </p>
      </div>

      <div class="flex flex-col gap-5">
        <p class="text-lg leading-relaxed">
          Sessions are by appointment in my quiet home studio in Hudson, Massachusetts. Call or text me at
          <a href={site.phoneHref} class="font-semibold text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary">{site.phone}</a>.
        </p>
        <div class="flex flex-col gap-3 sm:flex-row">
          <Button href="/book" size="lg">Book a session</Button>
          <Button href={site.phoneHref} size="lg" variant="outline">
            <PhoneIcon data-icon="inline-start" />
            Call or text
          </Button>
        </div>
      </div>
    </article>
  </div>
</section>

<CtaBand title="Come find your balance." text="Sessions are by appointment. Book online, or call or text and we can find a time together." />
