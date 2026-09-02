<script lang="ts">
  import SEO from '#lib/components/seo.svelte';
  import CtaBand from '#lib/components/cta-band.svelte';
  import Logo from '#lib/assets/logo.svelte';
  import mariya from '#lib/assets/mariya.jpg';
  import { Button } from '#lib/components/ui/button/index.ts';
  import * as Card from '#lib/components/ui/card/index.ts';
  import PhoneIcon from '@lucide/svelte/icons/phone';
  import MessageIcon from '@lucide/svelte/icons/message-circle';
  import { site } from '#lib/config/site.ts';

  const specialties = [
    'Gentle massage for seniors',
    'Sports massage and recovery for athletes',
    'Therapeutic and deep tissue work',
    'Infant massage instruction for parents',
    'Trained in manual lymphatic drainage',
    'Bemer circulation sessions'
  ];
</script>

<SEO
  title="About Mariya"
  description="Mariya Fishman, Licensed Massage Therapist in Hudson, MA. Over 30 years of practice, Muscular Therapy Institute graduate, Pan-Mass Challenge volunteer. Seniors, athletes, parents and children."
/>

<!-- Intro -->
<section class="container-page pt-12 sm:pt-20" aria-labelledby="about-heading">
  <div class="grid gap-10 lg:grid-cols-[2fr_3fr] lg:gap-16">
    <img
      src={mariya}
      alt="Mariya Fishman, Licensed Massage Therapist, smiling in her Hudson studio"
      width="1200"
      height="1600"
      class="mx-auto aspect-[3/4] w-full max-w-md rounded-3xl object-cover lg:sticky lg:top-24 lg:max-w-none"
      fetchpriority="high"
    />

    <div class="flex flex-col gap-10">
      <div class="flex flex-col gap-4">
        <p class="text-sm font-semibold tracking-[0.14em] text-clay uppercase">
          {site.ownerTitle} · Hudson, MA
        </p>
        <h1 id="about-heading" class="text-4xl sm:text-5xl lg:text-6xl">Meet Mariya</h1>
        <div class="flex flex-col gap-5 text-lg sm:text-xl">
          <p>
            I have been a massage therapist for more than thirty years. Before that I was a mechanical
            engineer, and before that I was a girl in Belarus who wanted to be a doctor. When I came to
            America I trained at the Muscular Therapy Institute in Cambridge and found the work I was
            meant to do: helping people feel at home in their bodies.
          </p>
          <p>
            Seven years ago I fell and broke my leg, my wrist and my back. For a long time I could not
            work. What brought me back was the same thing I now offer my clients: patient hands-on care,
            good circulation, and the belief that the body knows how to heal when you give it what it
            needs. My husband asked if maybe it was time to retire. I said no. I love my work.
          </p>
        </div>
      </div>

      <div class="flex flex-col gap-4">
        <h2 class="text-3xl sm:text-4xl">Who I work with</h2>
        <p class="text-lg sm:text-xl">
          Everyone from newborns to great-grandparents. My favorite clients are seniors who want to keep
          moving comfortably, athletes who want to recover faster and play longer, and parents who want
          to learn how to massage their babies. Every year I volunteer on the massage team at the
          Pan-Mass Challenge, working with cancer survivors.
        </p>
      </div>

      <Card.Root class="bg-card">
        <Card.Header>
          <Card.Title class="font-serif text-2xl font-medium">Specialties</Card.Title>
        </Card.Header>
        <Card.Content>
          <ul class="grid gap-x-6 gap-y-3 text-lg sm:grid-cols-2">
            {#each specialties as item (item)}
              <li class="flex items-start gap-3">
                <span class="mt-2.5 size-2 shrink-0 rounded-full bg-clay" aria-hidden="true"></span>
                <span>{item}</span>
              </li>
            {/each}
          </ul>
        </Card.Content>
      </Card.Root>
    </div>
  </div>
</section>

<!-- What Livingood means -->
<section class="container-page py-14 sm:py-20" aria-labelledby="name-heading">
  <div
    class="grid items-center gap-10 rounded-3xl bg-sage px-6 py-12 text-sage-foreground sm:px-12 sm:py-16 lg:grid-cols-[auto_1fr] lg:gap-16"
  >
    <Logo class="mx-auto size-40 text-primary sm:size-52" />
    <div class="flex flex-col gap-4">
      <h2 id="name-heading" class="text-3xl sm:text-4xl">What “Livingood” means</h2>
      <p class="text-lg sm:text-xl">
        The name is a reminder to live well, in balance: a healthy body, good food, and a clear mind.
        That balance is what I try to bring to every session. The butterfly is for transformation, the
        kind that comes slowly, with care.
      </p>
      <p class="text-lg sm:text-xl">
        Sessions are by appointment in my quiet home studio in Hudson, Massachusetts. Call or text me at
        <a href={site.phoneHref} class="font-medium text-primary underline-offset-4 hover:underline tabular-nums"
          >{site.phone}</a
        >.
      </p>
      <div class="mt-2 flex flex-col gap-3 sm:flex-row">
        <Button href={site.phoneHref} size="lg" class="bg-clay text-clay-foreground hover:bg-clay/90">
          <PhoneIcon data-icon="inline-start" />
          Call Mariya
        </Button>
        <Button href={site.smsHref} size="lg" variant="outline" class="bg-background">
          <MessageIcon data-icon="inline-start" />
          Send a text
        </Button>
      </div>
    </div>
  </div>
</section>

<CtaBand title="Come find your balance." />
