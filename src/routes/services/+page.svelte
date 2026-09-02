<script lang="ts">
  import SEO from '#lib/components/seo.svelte';
  import BookCta from '#lib/components/book-cta.svelte';
  import { Button } from '#lib/components/ui/button/index.ts';
  import { Badge } from '#lib/components/ui/badge/index.ts';
  import { site, isExternal } from '#lib/config/site.ts';
  import {
    sessions,
    packages,
    packageSessions,
    membership,
    bemer,
    modalities,
    money,
    perSession
  } from '#lib/config/services.ts';

  const bookTarget = isExternal(site.bookingUrl) ? '_blank' : undefined;
</script>

<SEO
  title="Services and prices"
  description="Massage therapy sessions of 60, 90 and 120 minutes, six-session packages, an $80 monthly membership and Bemer circulation sessions. Home studio in Hudson, MA, by appointment."
/>

<!-- Page head -->
<section class="bg-pine text-pine-foreground">
  <div class="wrap flex flex-col gap-6 py-14 lg:py-20">
    <p class="label text-butter">Services</p>
    <h1 class="display max-w-4xl text-[clamp(2.75rem,8vw,6.5rem)]">Massage therapy, packages, membership.</h1>
    <p class="max-w-xl text-xl/relaxed text-pine-foreground/90">
      Every session is one-on-one with Mariya in her home studio in Hudson. By appointment.
    </p>
  </div>
</section>

<!-- Single sessions -->
<section class="wrap py-16 lg:py-24">
  <div class="grid gap-10 lg:grid-cols-12">
    <div class="flex flex-col gap-4 lg:col-span-4">
      <p class="label text-primary">Single sessions</p>
      <h2 class="display text-[clamp(2.25rem,5vw,4rem)]">Pick a length.</h2>
      <p class="text-lg/relaxed text-muted-foreground">
        Tell Mariya what hurts and how much pressure you like. The rest is her job.
      </p>
    </div>
    <ul class="border-t lg:col-span-8">
      {#each sessions as s (s.minutes)}
        <li class="grid items-center gap-x-6 gap-y-3 border-b py-6 sm:grid-cols-[auto_1fr_auto_auto]">
          <span class="font-display text-4xl font-bold whitespace-nowrap sm:w-44 sm:text-5xl">{s.minutes} min</span>
          <span class="text-muted-foreground">{s.note}</span>
          <span class="font-display text-3xl font-bold tabular-nums sm:text-4xl">{money(s.price)}</span>
          <Button href={site.bookingUrl} target={bookTarget} class="justify-self-start sm:justify-self-end"
            >Book</Button
          >
        </li>
      {/each}
    </ul>
  </div>

  <!-- Modalities -->
  <div class="mt-16 grid gap-8 lg:grid-cols-12">
    <p class="label text-primary lg:col-span-4">Kinds of massage</p>
    <ul class="grid gap-x-10 gap-y-5 sm:grid-cols-2 lg:col-span-8">
      {#each modalities as m (m.name)}
        <li class="flex gap-3">
          <span class="mt-2.5 size-3 shrink-0 rounded-full bg-apricot" aria-hidden="true"></span>
          <div>
            <h3 class="font-display text-xl font-bold">{m.name}</h3>
            <p class="text-muted-foreground">{m.note}</p>
          </div>
        </li>
      {/each}
    </ul>
  </div>
</section>

<!-- Packages -->
<section class="bg-butter text-butter-foreground">
  <div class="wrap grid gap-10 py-16 lg:grid-cols-12 lg:py-24">
    <div class="flex flex-col gap-4 lg:col-span-4">
      <p class="label">Packages</p>
      <h2 class="display text-[clamp(2.25rem,5vw,4rem)]">Six sessions, prepaid.</h2>
      <p class="text-lg/relaxed text-butter-foreground/80">
        For people who know they are coming back. Bought and tracked on MassageBook.
      </p>
    </div>
    <div class="overflow-x-auto lg:col-span-8">
      <table class="w-full border-t border-butter-foreground/25 text-left">
        <thead class="label text-butter-foreground/70">
          <tr>
            <th class="py-3 pr-3 font-semibold whitespace-nowrap sm:pr-4">Length</th>
            <th class="py-3 pr-3 font-semibold whitespace-nowrap sm:pr-4">{packageSessions} sessions</th>
            <th class="py-3 pr-3 font-semibold whitespace-nowrap sm:pr-4">Each</th>
            <th class="py-3 font-semibold whitespace-nowrap">You save</th>
          </tr>
        </thead>
        <tbody>
          {#each packages as p (p.minutes)}
            <tr class="border-t border-butter-foreground/25">
              <td class="py-4 pr-3 font-display text-xl font-bold whitespace-nowrap sm:pr-4 sm:text-3xl">{p.minutes} min</td>
              <td class="py-4 pr-3 font-display text-xl font-bold tabular-nums sm:pr-4 sm:text-3xl">{money(p.price)}</td>
              <td class="py-4 pr-3 tabular-nums sm:pr-4">{perSession(p)}</td>
              <td class="py-4 tabular-nums">{money(p.save)}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
</section>

<!-- Membership -->
<section class="bg-leaf text-leaf-foreground">
  <div class="wrap grid items-center gap-10 py-16 lg:grid-cols-12 lg:py-24">
    <div class="flex flex-col gap-4 lg:col-span-7">
      <p class="label">Membership</p>
      <h2 class="display text-[clamp(2.75rem,8vw,7rem)]">
        {money(membership.price)}<span class="text-[0.4em]"> a month</span>
      </h2>
      <ul class="flex flex-col gap-1.5 text-lg">
        <li>{membership.includes}</li>
        <li>{membership.extra}</li>
        <li>Billed and managed on MassageBook.</li>
      </ul>
    </div>
    <div class="lg:col-span-5 lg:justify-self-end">
      <BookCta tone="onLeaf" />
    </div>
  </div>
</section>

<!-- Bemer -->
<section class="wrap py-16 lg:py-24">
  <div class="grid gap-10 rounded-4xl bg-card p-6 sm:p-10 lg:grid-cols-12 lg:p-14">
    <div class="flex flex-col gap-4 lg:col-span-7">
      <div class="flex flex-wrap items-center gap-3">
        <p class="label text-primary">Also offered</p>
        <Badge variant="secondary">Not a massage</Badge>
      </div>
      <h2 class="display text-[clamp(2rem,4.5vw,3.5rem)]">{bemer.name}</h2>
      <p class="text-lg/relaxed">{bemer.description}</p>
      <p class="text-sm text-muted-foreground">{bemer.disclaimer}</p>
    </div>
    <div class="flex flex-col gap-4 lg:col-span-5 lg:items-end lg:text-right">
      <p class="font-display text-5xl font-bold tabular-nums">{money(bemer.price)}</p>
      <p class="text-muted-foreground">{bemer.minutes} minutes</p>
      <Button variant="outline" href={site.bookingUrl} target={bookTarget}>Ask about Bemer</Button>
    </div>
  </div>
</section>

<!-- Good to know -->
<section class="wrap pb-20 lg:pb-28">
  <div class="grid gap-8 lg:grid-cols-12">
    <h2 class="label text-primary lg:col-span-4">Good to know</h2>
    <ul class="grid gap-x-10 gap-y-4 text-lg sm:grid-cols-2 lg:col-span-8">
      <li>Everything is by appointment, in a quiet home studio in Hudson.</li>
      <li>New clients get a short intake form after booking, so your first session is all session.</li>
      <li>Pay with {site.paymentMethods.join(', ').toLowerCase()}.</li>
      <li>Receipts on request for insurance reimbursement or HSA/FSA claims.</li>
    </ul>
  </div>
</section>
