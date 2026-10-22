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
  <div class="flex flex-col gap-3 self-stretch sm:flex-row sm:self-start">
    <Button href={site.bookingUrl} target="_blank" rel="noopener">
      Book on MassageBook
      <ArrowUpRightIcon data-icon="inline-end" aria-hidden="true" />
    </Button>
    <Button href={site.phone.tel} variant="outline">Call or text {site.phone.display}</Button>
  </div>
</PageIntro>

<!-- How it works -->
<section class="wrap section-gap flex flex-col gap-8 md:gap-10" aria-labelledby="how-title">
  <div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-10">
    <h2 id="how-title" class="display-2">How it works</h2>
    <p class="lead-sm max-w-[26rem] text-muted-foreground">
      Sessions, packages and membership are all booked and paid for on MassageBook. Mariya sees every booking as it
      comes in.
    </p>
  </div>
  <ol class="grid gap-x-12 md:grid-cols-3">
    {#each howItWorks as { title, text } (title)}
      <li class="flex flex-col gap-3 border-t pt-6 pb-4 md:pb-0">
        <span class="row-title">{title}</span>
        <p class="text-muted-foreground">{text}</p>
      </li>
    {/each}
  </ol>
</section>

<!-- Main action and the alternative -->
<section class="wrap section-gap grid gap-5 md:grid-cols-2" aria-labelledby="ready-title">
  <div class="flex flex-col items-start gap-6 rounded-block bg-secondary text-secondary-foreground block-pad">
    <h2 id="ready-title" class="display-2">Ready when you are.</h2>
    <p class="lead-sm max-w-[26rem]">Pick a service and a time. Pay online now or in person on the day with cash, Venmo, or card.</p>
    <Button href={site.bookingUrl} target="_blank" rel="noopener" class="mt-auto max-sm:w-full">
      Book on MassageBook
      <ArrowUpRightIcon data-icon="inline-end" aria-hidden="true" />
    </Button>
  </div>
  <div class="flex flex-col items-start gap-6 rounded-block bg-accent text-accent-foreground block-pad">
    <h2 class="display-2">Prefer to talk?</h2>
    <p class="lead-sm max-w-[26rem]">Call or text Mariya. She will find a time with you, and answer any question before you book.</p>
    <div class="mt-auto flex flex-col gap-3 self-stretch sm:flex-row sm:self-start">
      <Button href={site.phone.tel} variant="outline">Call {site.phone.display}</Button>
      <Button href={site.phone.sms} variant="outline">Text</Button>
    </div>
  </div>
</section>

<!-- Reminders -->
<section class="wrap section-gap grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-12 lg:gap-16" aria-labelledby="remember-title">
  <div class="flex flex-col gap-4">
    <h2 id="remember-title" class="display-2">Before you come</h2>
    <p class="lead-sm max-w-[24rem] text-muted-foreground">
      By appointment only, in a private home with a dedicated studio at {site.address.street}, {site.address.city}.
    </p>
  </div>
  <div class="flex flex-col gap-4">
    <h3 class="text-xl font-semibold">Studio hours</h3>
    <dl class="border-t">
      {#each hours as { days, time } (days)}
        <div class="flex items-baseline justify-between gap-6 border-b py-4">
          <dt class="font-semibold">{days}</dt>
          <dd class="text-muted-foreground">{time}</dd>
        </div>
      {/each}
    </dl>
    <p class="text-muted-foreground">
      Receipts provided for insurance reimbursement or HSA/FSA. New clients receive a short intake form from MassageBook
      after booking.
    </p>
  </div>
</section>
