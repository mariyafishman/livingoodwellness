<script lang="ts">
  import SEO from '#lib/components/seo.svelte';
  import CtaBand from '#lib/components/cta-band.svelte';
  import Portrait from '#lib/components/portrait.svelte';
  import { Button } from '#lib/components/ui/button/index.ts';
  import PhoneIcon from '@lucide/svelte/icons/phone';
  import { site } from '#lib/config/site.ts';

  const facts = [
    { label: 'Practicing', value: '30+ years' },
    { label: 'Trained at', value: 'Muscular Therapy Institute, Cambridge' },
    { label: 'Volunteers with', value: 'Pan-Mass Challenge massage team' },
    { label: 'Studio', value: `${site.address.city}, ${site.address.state}` }
  ];
</script>

<SEO
  title="About Mariya"
  description="Mariya Fishman has practiced massage therapy for over 30 years. Trained engineer turned bodyworker, she works with seniors, athletes, children and everyone in between from her home studio in Hudson, MA."
/>

<section class="border-b">
  <div class="container-page grid gap-12 py-14 lg:grid-cols-12 lg:gap-16 lg:py-24">
    <article class="flex flex-col gap-10 lg:col-span-7">
      <header class="flex flex-col gap-4">
        <p class="eyebrow">About</p>
        <h1 class="font-display text-5xl font-medium sm:text-6xl lg:text-7xl">Meet Mariya</h1>
      </header>

      <div class="prose-brand">
        <p>
          I have been a massage therapist for more than thirty years. Before that I was a mechanical engineer, and
          before that I was a girl in Belarus who wanted to be a doctor. When I came to America I trained at the
          Muscular Therapy Institute in Cambridge and found the work I was meant to do: helping people feel at home
          in their bodies.
        </p>
        <p>
          Seven years ago I fell and broke my leg, my wrist and my back. For a long time I could not work. What
          brought me back was the same thing I now offer my clients: patient hands-on care, good circulation, and
          the belief that the body knows how to heal when you give it what it needs. My husband asked if maybe it
          was time to retire. I said no. I love my work.
        </p>
      </div>

      <div class="flex flex-col gap-4">
        <h2 class="font-display text-3xl font-medium sm:text-4xl">Who I work with</h2>
        <div class="prose-brand">
          <p>
            Everyone from newborns to great-grandparents. My favorite clients are seniors who want to keep moving
            comfortably, athletes who want to recover faster and play longer, and parents who want to learn how to
            massage their babies. Every year I volunteer on the massage team at the Pan-Mass Challenge, working with
            cancer survivors.
          </p>
        </div>
      </div>

      <div class="flex flex-col gap-4">
        <h2 class="font-display text-3xl font-medium sm:text-4xl">What “Livingood” means</h2>
        <div class="prose-brand">
          <p>
            The name is a reminder to live well, in balance: a healthy body, good food, and a clear mind. That
            balance is what I try to bring to every session.
          </p>
          <p>
            Sessions are by appointment in my quiet home studio in {site.address.city}, Massachusetts. Call or text
            me at <a href="tel:{site.phone.tel}">{site.phone.display}</a>.
          </p>
        </div>
      </div>

      <div class="flex flex-col gap-3 sm:flex-row">
        <Button href="/book" size="lg">Book a session</Button>
        <Button href="tel:{site.phone.tel}" size="lg" variant="outline">
          <PhoneIcon data-icon="inline-start" />
          {site.phone.display}
        </Button>
      </div>
    </article>

    <aside class="flex flex-col gap-6 lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
      <div class="relative mx-auto w-full max-w-sm lg:max-w-none">
        <div class="absolute -right-8 -bottom-10 size-36 rounded-full bg-secondary sm:-right-10 sm:size-48" aria-hidden="true"></div>
        <div class="absolute -top-5 -left-5 size-12 rotate-45 bg-highlight" aria-hidden="true"></div>
        <Portrait shape="leaf-alt" priority class="relative" />
      </div>
      <dl class="relative grid grid-cols-1 gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-2">
        {#each facts as fact (fact.label)}
          <div class="flex flex-col gap-1 bg-card p-5">
            <dt class="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">{fact.label}</dt>
            <dd class="font-display text-lg leading-snug font-medium">{fact.value}</dd>
          </div>
        {/each}
      </dl>
    </aside>
  </div>
</section>

<CtaBand title="Come find your balance." text="Sessions are by appointment in Hudson. Book online, or call or text and we will find a time." />
