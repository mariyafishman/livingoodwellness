<script lang="ts">
  import SEO from '#lib/components/seo.svelte';
  import PageHeader from '#lib/components/page-header.svelte';
  import HoursTable from '#lib/components/hours-table.svelte';
  import { Button } from '#lib/components/ui/button/index.ts';
  import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
  import { site } from '#lib/config/site.ts';

  const steps = [
    { title: 'Pick a service and a time', body: 'Choose a session length and a slot that suits you on MassageBook.' },
    { title: 'Pay online or in person', body: 'Card online when you book, or cash, Venmo or card at the studio.' },
    { title: 'A short intake form', body: 'New clients receive one by email before the first visit.' }
  ];
</script>

<SEO
  title="Book a session"
  description="Book massage therapy with Mariya Fishman in Hudson, MA on MassageBook, or call or text 978-493-6171. By appointment in a quiet home studio."
/>

<PageHeader
  eyebrow="Booking"
  title="Book a session"
  intro="Booking, payment, packages and membership all happen on MassageBook. It takes about two minutes."
/>

<section class="wrap grid grid-cols-1 gap-10 pb-16 lg:grid-cols-12 lg:gap-8 lg:pb-28">
  <div class="grid grid-cols-1 content-start gap-4 md:grid-cols-3 md:gap-6 lg:col-span-8">
    <h2 class="sr-only">How it works</h2>
    {#each steps as { title, body }, i (title)}
      <div class="flex flex-col gap-4 rounded-md border border-border bg-card p-6 lg:p-8">
        <span
          class="inline-flex size-11 items-center justify-center rounded-full bg-shape font-serif text-xl text-background"
          aria-hidden="true"
        >
          {i + 1}
        </span>
        <h3 class="text-2xl leading-tight lg:text-[28px]">{title}</h3>
        <p class="text-body text-muted-foreground">{body}</p>
      </div>
    {/each}

    <div
      class="mt-2 flex flex-col gap-6 rounded-md bg-band p-6 text-band-foreground md:col-span-3 lg:mt-4 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:p-10"
    >
      <div class="flex flex-col gap-2">
        <p class="font-serif text-[28px] text-band-foreground lg:text-[34px]">Book on MassageBook</p>
        <p class="text-[15px] text-band-muted">Opens in a new tab.</p>
      </div>
      <Button href={site.bookingUrl} variant="ochre" size="lg" target="_blank" rel="noopener">
        Open MassageBook <ArrowRightIcon data-icon="inline-end" />
      </Button>
    </div>
  </div>

  <aside class="flex flex-col gap-8 lg:col-span-3 lg:col-start-10">
    <div class="flex flex-col gap-3 rounded-md bg-cta p-6 lg:p-7">
      <h2 class="text-[26px] leading-tight">Prefer to talk?</h2>
      <p class="text-base leading-relaxed text-muted-foreground">Call or text and we will find a time together.</p>
      <a class="text-[22px] font-medium text-heading hover:text-eyebrow" href="tel:{site.phone.tel}">{site.phone.display}</a>
    </div>
    <div class="flex flex-col gap-3">
      <h2 class="eyebrow">Reminders</h2>
      <p class="text-base leading-relaxed text-foreground">
        By appointment only, in a home studio at {site.address.street}, {site.address.city}.
      </p>
      <HoursTable compact />
    </div>
  </aside>
</section>
