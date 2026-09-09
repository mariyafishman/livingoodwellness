<script lang="ts">
  import ArrowUpRightIcon from '@lucide/svelte/icons/arrow-up-right';
  import SEO from '#lib/components/seo.svelte';
  import PageIntro from '#lib/components/page-intro.svelte';
  import { Button } from '#lib/components/ui/button/index.ts';
  import { site, hours, howItWorks } from '#lib/config/site.ts';
</script>

<SEO
  title="Book a session"
  description="Book massage therapy or a Bemer session with Mariya Fishman in Hudson, MA. Pick a service and time on MassageBook, or call or text 978-493-6171. By appointment only."
/>

<PageIntro title="Book a session" lead="Booking takes a minute. Everything else happens at the studio.">
  <div class="mt-8 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:gap-4 md:mt-10">
    <Button href={site.bookingUrl} target="_blank" rel="noopener">
      Book on MassageBook
      <ArrowUpRightIcon data-icon="inline-end" aria-hidden="true" />
    </Button>
    <Button href={site.phone.tel} variant="outline">Call or text {site.phone.display}</Button>
  </div>
</PageIntro>

<!-- How it works -->
<section class="section-gap band-pad bg-warm text-warm-foreground" aria-labelledby="how-title">
  <div class="wrap grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
    <div>
      <h2 id="how-title" class="display-2">How it works</h2>
      <p class="lead mt-4 max-w-[24rem] md:mt-6">
        Sessions, packages and membership are all booked and paid for on MassageBook. Mariya sees every booking as it
        comes in.
      </p>
    </div>
    <ol class="border-t">
      {#each howItWorks as { title, text }, i (title)}
        <li
          class={[
            'grid gap-x-6 border-b px-4 py-3.5 md:grid-cols-[3rem_1fr_1.2fr] md:items-baseline md:px-6 md:py-5',
            i % 2 === 0 ? 'bg-background/45' : 'bg-accent/45'
          ]}
        >
          <span class="hidden font-display text-xs font-bold md:block">{String(i + 1).padStart(2, '0')}</span>
          <span class="row-title">{title}</span>
          <span class="mt-1 text-sm leading-normal opacity-80 md:mt-0 md:text-base">{text}</span>
        </li>
      {/each}
    </ol>
  </div>
</section>

<!-- Main action and the alternative -->
<section class="wrap section-gap grid gap-3 md:grid-cols-2 md:gap-5" aria-labelledby="ready-title">
  <div class="flex flex-col rounded-[1.5rem] bg-primary p-6 text-primary-foreground md:rounded-block md:p-12">
    <h2 id="ready-title" class="display-2">Ready when you are.</h2>
    <p class="lead mt-4 max-w-[26rem] md:mt-6">
      Pick a service and a time. Pay online now or in person on the day with cash, Venmo, or card.
    </p>
    <Button href={site.bookingUrl} target="_blank" rel="noopener" variant="secondary" class="mt-7 max-md:w-full md:mt-auto md:pt-0 md:self-start">
      Book on MassageBook
      <ArrowUpRightIcon data-icon="inline-end" aria-hidden="true" />
    </Button>
  </div>
  <div class="flex flex-col rounded-[1.5rem] bg-accent p-6 text-accent-foreground md:rounded-block md:p-12">
    <h2 class="display-2">Prefer to talk?</h2>
    <p class="lead mt-4 max-w-[26rem] md:mt-6">
      Call or text Mariya. She will find a time with you, and answer any question before you book.
    </p>
    <div class="mt-7 flex flex-col gap-2.5 sm:flex-row sm:gap-3 md:mt-auto md:pt-6">
      <Button href={site.phone.tel} variant="outline">Call {site.phone.display}</Button>
      <Button href={site.phone.sms} variant="outline">Text</Button>
    </div>
  </div>
</section>

<!-- Reminders -->
<section class="section-gap band-pad bg-cool text-cool-foreground" aria-labelledby="remember-title">
  <div class="wrap grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
    <div>
      <h2 id="remember-title" class="display-2">Before you come</h2>
      <p class="lead mt-4 max-w-[24rem] md:mt-6">
        By appointment only, in a private home with a dedicated studio at {site.address.street}, {site.address.city}.
      </p>
    </div>
    <div>
      <h3 class="font-display text-lg font-extrabold tracking-[-0.02em] md:text-[1.375rem]">Studio hours</h3>
      <dl class="mt-3 border-t">
        {#each hours as { days, time }, i (days)}
          <div
            class={[
              'flex items-baseline justify-between gap-6 border-b px-4 py-3.5 md:px-6 md:py-4',
              i % 2 === 0 ? 'bg-background/45' : 'bg-accent/45'
            ]}
          >
            <dt class="row-title text-base md:text-xl">{days}</dt>
            <dd class="text-sm opacity-80 md:text-base">{time}</dd>
          </div>
        {/each}
      </dl>
      <p class="mt-4 text-sm opacity-75 md:text-base">
        Receipts provided for insurance reimbursement or HSA/FSA. New clients receive a short intake form from
        MassageBook after booking.
      </p>
    </div>
  </div>
</section>
