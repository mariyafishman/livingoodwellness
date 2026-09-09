<script lang="ts">
  import SEO from '#lib/components/seo.svelte';
  import PageIntro from '#lib/components/page-intro.svelte';
  import ServiceList from '#lib/components/service-list.svelte';
  import SessionCards from '#lib/components/session-cards.svelte';
  import { Button } from '#lib/components/ui/button/index.ts';
  import { massage, packages, membership, bemer, goodToKnow } from '#lib/config/site.ts';
</script>

<SEO
  title="Services and rates"
  description="Massage therapy from $90, six-session packages, an $80 monthly membership and Bemer circulation sessions. By appointment in Mariya Fishman's home studio in Hudson, MA."
/>

<PageIntro
  title="Services"
  lead="Massage therapy and Bemer circulation sessions, by appointment in a quiet home studio in Hudson, MA."
/>

<!-- Massage therapy -->
<section class="section-gap band-pad bg-warm text-warm-foreground" aria-labelledby="massage-title">
  <div class="wrap grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
    <div>
      <h2 id="massage-title" class="display-2">Massage therapy</h2>
      <p class="lead mt-4 max-w-[24rem] md:mt-6">
        Every session is one-on-one with Mariya, shaped around what your body needs that day. Choose the length; she
        chooses the approach with you.
      </p>
      <h3 class="mt-8 font-display text-lg font-extrabold tracking-[-0.02em] md:mt-10">Who it's for</h3>
      <ul class="mt-3 flex flex-wrap gap-2">
        {#each massage.audiences as audience (audience)}
          <li class="rounded-full border bg-background/40 px-4 py-2 text-sm md:text-[0.9375rem]">{audience}</li>
        {/each}
      </ul>
    </div>
    <ServiceList />
  </div>
</section>

<!-- Sessions -->
<section class="wrap section-gap" aria-labelledby="sessions-title">
  <h2 id="sessions-title" class="display-2">Sessions and rates</h2>
  <p class="lead mt-4 max-w-[30rem] md:mt-6">Choose the time that suits you. Every length is the same care.</p>
  <div class="mt-6 md:mt-10">
    <SessionCards />
  </div>
</section>

<!-- Packages and membership -->
<section class="wrap section-gap grid gap-3 md:grid-cols-[1.2fr_0.8fr] md:gap-5" aria-labelledby="packages-title">
  <div id="packages" class="scroll-mt-8 rounded-[1rem] bg-cool p-5 text-cool-foreground md:rounded-lg md:p-8">
    <div class="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
      <h2 id="packages-title" class="display-3 md:text-[2rem]">Six-session packages</h2>
      <p class="text-sm md:text-[0.9375rem]">{packages.note}</p>
    </div>
    <table class="mt-5 w-full border-t text-left md:mt-7">
      <caption class="sr-only">Package prices by session length</caption>
      <thead class="sr-only">
        <tr><th scope="col">Length</th><th scope="col">Price</th><th scope="col">Savings</th></tr>
      </thead>
      <tbody>
        {#each packages.items as { duration, price, savings } (duration)}
          <tr class="border-b">
            <th scope="row" class="py-3 font-display text-lg font-extrabold tracking-[-0.02em] md:py-4 md:text-2xl">
              {duration}
            </th>
            <td class="py-3 font-display text-lg font-extrabold tracking-[-0.02em] md:py-4 md:text-2xl">{price}</td>
            <td class="py-3 text-right text-sm md:py-4 md:text-base">{savings}</td>
          </tr>
        {/each}
      </tbody>
    </table>
    <p class="mt-4 text-sm leading-normal md:mt-5 md:text-[0.9375rem]">
      Packages are prepaid and bought on the booking page.
    </p>
    <Button href="/book" size="sm" class="mt-5">Buy a package</Button>
  </div>
  <div class="flex flex-col rounded-[1rem] bg-accent p-5 text-accent-foreground md:rounded-lg md:p-8">
    <h2 class="display-3 md:text-[2rem]">Monthly membership</h2>
    <p class="mt-4 font-display text-[3rem] leading-none font-extrabold tracking-[-0.04em] md:mt-6 md:text-[4rem]">
      {membership.price}<span class="font-sans text-lg font-normal tracking-normal"> / {membership.period}</span>
    </p>
    <p class="mt-4 text-sm leading-normal md:text-[0.9375rem]">{membership.description}</p>
    <p class="mt-3 text-sm leading-normal md:text-[0.9375rem]">
      A good fit if you like to keep a regular rhythm. Join on the booking page.
    </p>
    <Button href="/book" size="sm" class="mt-6 self-start">Join</Button>
  </div>
</section>

<!-- Bemer -->
<section class="wrap section-gap" aria-labelledby="bemer-title">
  <div
    class="grid gap-6 rounded-[1.5rem] bg-primary p-6 text-primary-foreground md:grid-cols-[1.1fr_0.9fr] md:gap-16 md:rounded-block md:p-14"
  >
    <div>
      <h2 id="bemer-title" class="display-2">{bemer.name}</h2>
      <p class="mt-4 font-display text-[2.5rem] leading-none font-extrabold tracking-[-0.04em] md:mt-6 md:text-[3rem]">
        {bemer.price}<span class="font-sans text-lg font-normal tracking-normal"> / {bemer.duration}</span>
      </p>
    </div>
    <div class="flex flex-col justify-between gap-6">
      <div>
        <p class="lead">{bemer.description}</p>
        <p class="lead mt-4">A calm half hour on the mat. Often booked alongside a massage, or on its own between sessions.</p>
        <Button href="/book" variant="secondary" size="sm" class="mt-6">Book a Bemer session</Button>
      </div>
      <p class="text-xs leading-snug opacity-80">{bemer.disclaimer}</p>
    </div>
  </div>
</section>

<!-- Good to know -->
<section class="section-gap band-pad bg-cool text-cool-foreground" aria-labelledby="know-title">
  <div class="wrap grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
    <div>
      <h2 id="know-title" class="display-2">Good to know</h2>
      <Button href="/book" class="mt-7 max-md:hidden">Book a session</Button>
    </div>
    <div>
      <ul class="border-t">
        {#each goodToKnow as item, i (item)}
          <li
            class={[
              'border-b px-4 py-3.5 text-base leading-normal md:px-6 md:py-5 md:text-lg',
              i % 2 === 0 ? 'bg-background/45' : 'bg-accent/45'
            ]}
          >{item}</li>
        {/each}
      </ul>
      <Button href="/book" class="mt-6 w-full md:hidden">Book a session</Button>
    </div>
  </div>
</section>
