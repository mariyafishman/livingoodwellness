<script lang="ts">
  import SEO from '#lib/components/seo.svelte';
  import Portrait from '#lib/components/portrait.svelte';
  import { Button } from '#lib/components/ui/button/index.ts';
  import { site } from '#lib/config/site.ts';
</script>

<SEO
  title="About Mariya"
  description="Mariya Fishman has practiced massage therapy for over 30 years. Mechanical engineer turned bodyworker, originally from Minsk, Belarus, trained at the Muscular Therapy Institute in Cambridge, working from her home studio in Hudson, MA. Sessions in English or Russian."
/>

<!-- Intro -->
<section class="bg-secondary text-secondary-foreground">
  <div class="wrap grid items-center gap-9 pt-6 pb-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16 md:pt-14 md:pb-20">
    <div>
      <h1 class="display-1">Meet Mariya</h1>
      <p class="lead mt-5 max-w-[29rem] md:mt-8">
        Massage therapist for more than thirty years. Mechanical engineer for fifteen before that. Working alone
        from a calm room in her house in Hudson, in English or Russian, and in no hurry to stop.
      </p>
    </div>
    <Portrait priority note="Hello, I'm Mariya." class="mx-auto md:justify-self-end" />
  </div>
</section>

<!-- Story, in her words -->
<article class="wrap section-gap grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
  <div class="md:sticky md:top-8 md:self-start">
    <h2 class="display-2">In my own words</h2>
    <p class="mt-4 text-sm text-muted-foreground md:mt-6 md:text-base">
      {site.practitioner.name}, {site.practitioner.title}
    </p>
  </div>

  <div class="max-w-[38rem] text-lg leading-normal md:text-xl">
    <p>
      I have been a massage therapist for more than thirty years. Before that I was a mechanical engineer for
      fifteen years, and before that I was a girl in Minsk, Belarus, who wanted to be a doctor. I came to America
      thirty-six years ago, trained at the Muscular Therapy Institute in Cambridge and found the work I was meant
      to do: helping people feel at home in their bodies.
    </p>
    <p class="mt-5">
      Seven years ago I fell and broke my leg, my wrist and my back. For a long time I could not work. What
      brought me back was the same thing I now offer my clients: patient hands-on care, good circulation, and the
      belief that the body knows how to heal when you give it what it needs. My husband asked if maybe it was
      time to retire. I said no. I love my work.
    </p>

    <h3 class="display-3 mt-12 md:mt-16">Who I work with</h3>
    <p class="mt-4">
      Everyone from newborns to great-grandparents. My favorite clients are seniors who want to keep moving
      comfortably, athletes who want to recover faster and play longer, and parents who want to learn how to
      massage their babies. Every year I volunteer on the massage team at the Pan-Mass Challenge, working with
      cancer survivors.
    </p>

    <h3 class="display-3 mt-12 md:mt-16">What "Livingood" means</h3>
    <p class="mt-4">
      The name is a reminder to live well, in balance: a healthy body, good food, and a clear mind. That balance
      is what I try to bring to every session.
    </p>

    <p class="mt-12 md:mt-16">
      Sessions are by appointment in my quiet home studio in Hudson, Massachusetts. We can talk in English or
      Russian, whichever is more comfortable for you. Call or text me at
      <a
        href={site.phone.tel}
        class="rounded-sm font-display font-bold underline decoration-2 underline-offset-4 outline-none hover:opacity-80 focus-visible:ring-3 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        {site.phone.display}
      </a>.
    </p>

    <div class="mt-8 flex flex-col gap-2.5 sm:flex-row sm:gap-4 md:mt-10">
      <Button href="/book">Book a session</Button>
      <Button href="/services" variant="outline">See services</Button>
    </div>
  </div>
</article>
