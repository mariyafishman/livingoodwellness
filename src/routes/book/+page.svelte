<script lang="ts">
  import SEO from '#lib/components/seo.svelte';
  import HoursTable from '#lib/components/hours-table.svelte';
  import { Button } from '#lib/components/ui/button/index.ts';
  import ExternalLinkIcon from '@lucide/svelte/icons/external-link';
  import PhoneIcon from '@lucide/svelte/icons/phone';
  import MessageSquareIcon from '@lucide/svelte/icons/message-square';
  import { site } from '#lib/config/site.ts';

  const steps = [
    {
      title: 'Pick a service and a time',
      text: 'On MassageBook, choose a massage length, a package, a membership or a Bemer session, and a time that suits you.'
    },
    {
      title: 'Pay online or in person',
      text: 'Pay when you book, or in the studio by cash, Venmo or card. Receipts are provided for insurance or HSA/FSA.'
    },
    {
      title: 'A short intake form',
      text: 'New clients get one by email before the visit. It takes a few minutes and means the first session starts with a conversation.'
    }
  ];
</script>

<SEO
  title="Book a session"
  description="Book a massage or Bemer session with Mariya Fishman, LMT, in Hudson, MA. Pick a time on MassageBook, or call or text 978-493-6171. By appointment only."
/>

<section class="border-b">
  <div class="container-page grid gap-12 py-14 lg:grid-cols-12 lg:gap-16 lg:py-24">
    <div class="flex flex-col gap-10 lg:col-span-7">
      <header class="flex flex-col gap-4">
        <p class="eyebrow">Booking</p>
        <h1 class="font-display text-5xl font-medium sm:text-6xl lg:text-7xl">Book a session</h1>
        <p class="max-w-prose text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Booking happens on MassageBook and takes a couple of minutes. Here is how it works.
        </p>
      </header>

      <ol class="flex flex-col divide-y divide-border">
        {#each steps as step, i (step.title)}
          <li class="grid grid-cols-[3.5rem_1fr] gap-4 py-6 first:pt-0 sm:grid-cols-[5rem_1fr]">
            <span class="font-display text-4xl leading-none font-light text-primary tabular-nums sm:text-5xl" aria-hidden="true">
              0{i + 1}
            </span>
            <div class="flex flex-col gap-1.5">
              <h2 class="font-display text-2xl font-medium">{step.title}</h2>
              <p class="max-w-prose leading-relaxed text-muted-foreground">{step.text}</p>
            </div>
          </li>
        {/each}
      </ol>

      <div class="flex flex-col gap-5 rounded-xl bg-secondary/60 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div class="flex flex-col gap-1">
          <p class="font-display text-2xl font-medium">Ready? Pick your time.</p>
          <p class="text-sm text-muted-foreground">Opens MassageBook in a new tab.</p>
        </div>
        <Button href={site.bookingUrl} size="lg" target="_blank" rel="noopener noreferrer" class="shrink-0">
          Book on MassageBook
          <ExternalLinkIcon data-icon="inline-end" />
        </Button>
      </div>
    </div>

    <aside class="flex flex-col gap-6 lg:col-span-5">
      <div class="flex flex-col gap-5 rounded-xl border bg-card p-6 sm:p-8">
        <div class="flex flex-col gap-1">
          <p class="eyebrow">Prefer to talk?</p>
          <p class="font-display text-2xl font-medium">Call or text Mariya.</p>
        </div>
        <a
          href="tel:{site.phone.tel}"
          class="w-fit rounded-sm font-display text-4xl font-light tracking-tight outline-none hover:text-primary focus-visible:ring-2 focus-visible:ring-ring"
        >
          {site.phone.display}
        </a>
        <div class="flex flex-col gap-3 sm:flex-row">
          <Button href="tel:{site.phone.tel}" variant="outline">
            <PhoneIcon data-icon="inline-start" />
            Call
          </Button>
          <Button href="sms:{site.phone.tel}" variant="outline">
            <MessageSquareIcon data-icon="inline-start" />
            Text
          </Button>
        </div>
        <p class="text-sm leading-relaxed text-muted-foreground">
          If she is with a client she will get back to you between sessions.
        </p>
      </div>

      <div class="flex flex-col gap-5 rounded-xl border bg-card p-6 sm:p-8">
        <p class="eyebrow">Good to remember</p>
        <ul class="flex flex-col gap-3 text-sm leading-relaxed">
          <li class="flex items-start gap-3">
            <span class="mt-2 size-1.5 shrink-0 rounded-full bg-highlight" aria-hidden="true"></span>
            <span>By appointment only. No walk-ins.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="mt-2 size-1.5 shrink-0 rounded-full bg-highlight" aria-hidden="true"></span>
            <span>
              A quiet home studio at {site.address.street}, {site.address.city}, {site.address.state}. The address
              and directions come with your confirmation.
            </span>
          </li>
          <li class="flex items-start gap-3">
            <span class="mt-2 size-1.5 shrink-0 rounded-full bg-highlight" aria-hidden="true"></span>
            <span>Packages and membership are set up on MassageBook too.</span>
          </li>
        </ul>
        <div class="flex flex-col gap-3 border-t pt-5">
          <p class="eyebrow">Hours</p>
          <HoursTable />
        </div>
      </div>
    </aside>
  </div>
</section>
