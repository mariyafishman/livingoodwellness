<script lang="ts">
  import SEO from '#lib/components/seo.svelte';
  import { Button } from '#lib/components/ui/button/index.ts';
  import { inspiration, site } from '#lib/config/site.ts';
</script>

<SEO
  title="About Mariya"
  description="Mariya Fishman has practiced massage therapy for over 30 years. Mechanical engineer turned bodyworker, originally from Minsk, Belarus, trained at the Muscular Therapy Institute in Cambridge, working from her home studio in Hudson, MA. Sessions in English or Russian."
/>

<!-- Intro: the title on the paper, the portrait beside it. -->
<section class="wrap grid gap-8 pt-6 md:grid-cols-[1.4fr_1fr] md:gap-10 md:pt-10">
  <div class="flex flex-col items-start justify-center gap-7 md:gap-8 md:py-6">
    <h1 class="display-1">Meet Mariya</h1>
    <p class="lead max-w-[30rem]">
      Massage therapist for more than thirty years. Mechanical engineer for fifteen before that. Working alone from a
      calm room in her house in Hudson, in English or Russian, and in no hurry to stop.
    </p>
    <p class="statement max-w-[14ch] text-muted-foreground">{site.mission}</p>
  </div>
  <enhanced:img
    src="#lib/assets/mariya.jpg"
    sizes="(min-width: 48rem) 440px, 90vw"
    alt="{site.practitioner.name}, {site.practitioner.title}"
    fetchpriority="high"
    loading="eager"
    class="aspect-[4/5] w-full rounded-block object-cover object-[50%_35%] md:max-w-[440px] md:justify-self-end"
  />
</section>

<!-- Story, in her words -->
<article class="wrap section-gap grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-12 lg:gap-16">
  <div class="flex flex-col gap-4 md:sticky md:top-8 md:self-start">
    <h2 class="display-2">In my own words</h2>
    <p class="text-muted-foreground">{site.practitioner.name}, {site.practitioner.title}</p>
  </div>

  <div class="flex max-w-[38rem] flex-col items-start gap-5 text-lg leading-normal md:text-xl">
    <p>
      I have been a massage therapist for more than thirty years. Before that I was a mechanical engineer for fifteen
      years, and before that I was a girl in Minsk, Belarus, who wanted to be a doctor. I came to America thirty-six
      years ago, trained at the Muscular Therapy Institute in Cambridge and found the work I was meant to do: helping
      people feel at home in their bodies.
    </p>
    <p>
      Seven years ago I fell and broke my leg, my wrist and my back. For a long time I could not work. What brought me
      back was the same thing I now offer my clients: patient hands-on care, good circulation, and the belief that the
      body knows how to heal when you give it what it needs.
    </p>
    <blockquote class="mt-3 self-stretch rounded-lg bg-accent px-7 py-6 text-accent-foreground md:mt-5">
      <p class="statement-sm">My husband asked if maybe it was time to retire. I said no. I love my work.</p>
    </blockquote>

    <h3 class="display-3 mt-8 md:mt-10">Who I work with</h3>
    <p>
      Everyone from newborns to great-grandparents. My favorite clients are seniors who want to keep moving
      comfortably, athletes who want to recover faster and play longer, and parents who want to learn how to massage
      their babies. Every year I volunteer on the massage team at the Pan-Mass Challenge, working with cancer
      survivors.
    </p>

    <div class="mt-8 flex flex-col items-start gap-5 self-stretch rounded-block bg-secondary text-secondary-foreground block-pad md:mt-10">
      <h3 class="display-3">What "Livingood" means</h3>
      <p>
        Livingood is a name before it is a motto. While I was recovering from my fall I found
        <a href={inspiration.website} target="_blank" rel="noopener" class="text-link">{inspiration.name}</a>, and his
        teaching on real food, movement and letting the body heal itself gave me the push to get better and get back to
        work. When I opened the studio I named it after him, with gratitude.
      </p>
      <p>
        The name is also a reminder to live well, in balance: a healthy body, good food, and a clear mind. That balance
        is what I try to bring to every session.
      </p>
      <p class="mt-2 text-base text-muted-foreground">Follow Dr. Livingood for more of his work:</p>
      <ul class="flex flex-wrap gap-2">
        {#each inspiration.socials as social (social.href)}
          <li>
            <Button href={social.href} target="_blank" rel="noopener" variant="outline" size="sm">{social.label}</Button>
          </li>
        {/each}
      </ul>
    </div>

    <p class="mt-8 md:mt-10">
      Sessions are by appointment in my quiet home studio in Hudson, Massachusetts. We can talk in English or Russian,
      whichever is more comfortable for you. Call or text me at
      <a href={site.phone.tel} class="text-link whitespace-nowrap">{site.phone.display}</a>.
    </p>

    <div class="mt-3 flex flex-col gap-3 self-stretch sm:flex-row sm:self-start md:mt-5">
      <Button href="/book">Book a session</Button>
      <Button href="/services" variant="outline">See services</Button>
    </div>
  </div>
</article>
