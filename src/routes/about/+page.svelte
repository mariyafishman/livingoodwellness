<script lang="ts">
  import SEO from '#lib/components/seo.svelte';
  import CtaBand from '#lib/components/cta-band.svelte';
  import Logo from '#lib/assets/logo.svelte';
  import { Button } from '#lib/components/ui/button/index.ts';
  import PhoneIcon from '@lucide/svelte/icons/phone';
  import mariya from '#lib/assets/mariya.jpg';
  import { site } from '#lib/config/site.ts';
</script>

<SEO
  title="About Mariya Fishman"
  description="Mariya Fishman has practiced massage therapy for over 30 years. A trained engineer turned bodyworker, she works with seniors, athletes, children and everyone in between from her home studio in Hudson, MA."
/>

<!-- Intro -->
<section class="relative overflow-hidden border-b-2 border-ink">
  <div class="container-site grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
    <div class="relative mx-auto w-full max-w-sm">
      <div class="absolute -top-6 -right-6 size-36 rounded-full bg-secondary" aria-hidden="true"></div>
      <div class="absolute -bottom-6 -left-6 h-24 w-48 rounded-b-full bg-accent" aria-hidden="true"></div>
      <img
        src={mariya}
        alt="Mariya Fishman, Licensed Massage Therapist"
        width="1200"
        height="1600"
        fetchpriority="high"
        class="relative aspect-[3/4] w-full rounded-xl border-2 border-ink object-cover shadow-hard-lg"
      />
    </div>
    <div class="flex flex-col gap-6">
      <p class="eyebrow flex items-center gap-2 text-muted-foreground">
        <span class="inline-block size-2.5 rounded-full bg-accent ring-2 ring-ink" aria-hidden="true"></span>
        About
      </p>
      <h1 class="text-5xl sm:text-6xl lg:text-7xl">Meet Mariya.</h1>
      <div class="flex flex-col gap-5 text-lg">
        <p>
          I have been a massage therapist for more than thirty years. Before that I was a mechanical engineer,
          and before that I was a girl in Belarus who wanted to be a doctor. When I came to America I trained at
          the Muscular Therapy Institute in Cambridge and found the work I was meant to do: helping people feel
          at home in their bodies.
        </p>
        <p>
          Seven years ago I fell and broke my leg, my wrist and my back. For a long time I could not work. What
          brought me back was the same thing I now offer my clients: patient hands-on care, good circulation,
          and the belief that the body knows how to heal when you give it what it needs. My husband asked if
          maybe it was time to retire. I said no. I love my work.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Who I work with -->
<section class="section border-b-2 border-ink bg-secondary text-secondary-foreground">
  <div class="container-site grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
    <div class="flex flex-col gap-4">
      <p class="eyebrow flex items-center gap-2 text-secondary-foreground/70">
        <span class="inline-block size-2.5 rounded-full bg-accent ring-2 ring-ink" aria-hidden="true"></span>
        Who I work with
      </p>
      <h2 class="text-4xl sm:text-5xl">Everyone from newborns to great-grandparents.</h2>
    </div>
    <div class="flex flex-col gap-5 text-lg">
      <p>
        My favorite clients are seniors who want to keep moving comfortably, athletes who want to recover
        faster and play longer, and parents who want to learn how to massage their babies.
      </p>
      <p>Every year I volunteer on the massage team at the Pan-Mass Challenge, working with cancer survivors.</p>
      <ul class="mt-2 grid gap-3 sm:grid-cols-2">
        {#each ['Seniors', 'Athletes', 'Parents and babies', 'People recovering from injury'] as who, i (who)}
          <li class="flex items-center gap-3 rounded-lg border-2 border-ink bg-card px-4 py-3 font-semibold text-card-foreground shadow-hard">
            <span
              class={[
                'size-5 shrink-0',
                i === 0 && 'rounded-full bg-primary',
                i === 1 && 'rounded-t-full bg-accent',
                i === 2 && 'rounded-tr-full bg-leaf',
                i === 3 && 'rounded-full border-4 border-primary'
              ]}
              aria-hidden="true"
            ></span>
            {who}
          </li>
        {/each}
      </ul>
    </div>
  </div>
</section>

<!-- What Livingood means -->
<section class="section">
  <div class="container-site grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
    <div class="flex flex-col gap-6">
      <p class="eyebrow flex items-center gap-2 text-muted-foreground">
        <span class="inline-block size-2.5 rounded-full bg-accent ring-2 ring-ink" aria-hidden="true"></span>
        The name
      </p>
      <h2 class="text-4xl sm:text-5xl">What “Livingood” means.</h2>
      <p class="text-lg">
        The name is a reminder to live well, in balance: a healthy body, good food, and a clear mind. That
        balance is what I try to bring to every session.
      </p>
      <p class="text-lg">
        Sessions are by appointment in my quiet home studio in Hudson, Massachusetts. Call or text me at
        <a class="font-semibold underline decoration-accent decoration-2 underline-offset-4" href={site.phoneHref}>{site.phone}</a>.
      </p>
      <div class="flex flex-col gap-3 sm:flex-row">
        <Button href="/book" variant="accent" size="lg">Book a session</Button>
        <Button href={site.smsHref} variant="outline" size="lg">
          <PhoneIcon data-icon="inline-start" aria-hidden="true" />
          Text Mariya
        </Button>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center gap-6 rounded-xl border-2 border-ink bg-card p-8 text-center shadow-hard-lg">
      <Logo class="size-28 text-card-foreground" />
      <dl class="grid w-full grid-cols-3 gap-2 border-t-2 border-ink pt-6">
        <div class="flex flex-col">
          <dt class="eyebrow text-muted-foreground">Body</dt>
          <dd class="font-display text-lg font-semibold">healthy</dd>
        </div>
        <div class="flex flex-col">
          <dt class="eyebrow text-muted-foreground">Food</dt>
          <dd class="font-display text-lg font-semibold">good</dd>
        </div>
        <div class="flex flex-col">
          <dt class="eyebrow text-muted-foreground">Mind</dt>
          <dd class="font-display text-lg font-semibold">clear</dd>
        </div>
      </dl>
    </div>
  </div>
</section>

<CtaBand title="Come see for yourself." text="One experienced therapist with time for you. Book a session or call or text to talk first." />
