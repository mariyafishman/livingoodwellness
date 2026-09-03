<script lang="ts">
  import SEO from '#lib/components/seo.svelte';
  import PageHeader from '#lib/components/page-header.svelte';
  import HoursTable from '#lib/components/hours-table.svelte';
  import { site } from '#lib/config/site.ts';
</script>

<SEO
  title="Contact"
  description="Call or text Mariya Fishman at 978-493-6171, or visit the home studio at 157 Marlboro Street, Hudson, MA 01749. By appointment only."
/>

<PageHeader
  eyebrow="Contact"
  title="Say hello"
  intro="A private home with a dedicated studio. Sessions are by appointment, so call or text first and I will let you know where to park."
/>

<section class="wrap grid grid-cols-1 gap-10 pb-16 lg:grid-cols-12 lg:gap-8 lg:pb-28">
  <div class="flex flex-col lg:col-span-5">
    <div class="flex flex-col gap-2.5 border-t border-border py-6 lg:py-7">
      <h2 class="font-sans text-xs tracking-[0.16em] uppercase text-muted-foreground">Call or text</h2>
      <a class="font-serif text-[26px] leading-tight text-heading hover:text-eyebrow lg:text-[28px]" href="tel:{site.phone.tel}">
        {site.phone.display}
      </a>
    </div>
    <div class="flex flex-col gap-2.5 border-t border-border py-6 lg:py-7">
      <h2 class="font-sans text-xs tracking-[0.16em] uppercase text-muted-foreground">Email</h2>
      <a class="font-serif text-[17px] leading-tight text-heading [overflow-wrap:anywhere] hover:text-eyebrow sm:text-xl lg:text-[22px]" href="mailto:{site.email}">
        {site.email}
      </a>
    </div>
    <div class="flex flex-col gap-2.5 border-t border-border py-6 lg:py-7">
      <h2 class="font-sans text-xs tracking-[0.16em] uppercase text-muted-foreground">Studio</h2>
      <p class="font-serif text-[26px] leading-tight text-heading lg:text-[28px]">
        {site.address.street}<br />
        {site.address.city}, {site.address.state} {site.address.zip}
      </p>
    </div>
    <div class="flex flex-col gap-3 border-t border-border pt-6 lg:pt-7">
      <h2 class="eyebrow">Hours · by appointment</h2>
      <HoursTable />
    </div>
  </div>

  <a
    class="group relative block aspect-square overflow-hidden rounded-md bg-tint text-tint-foreground lg:col-span-6 lg:col-start-7 lg:aspect-auto lg:h-[560px]"
    href={site.mapsUrl}
    target="_blank"
    rel="noopener"
    aria-label="Open {site.address.street}, {site.address.city} in Google Maps"
  >
    <svg
      class="size-full"
      viewBox="0 0 560 560"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      stroke="currentColor"
      stroke-opacity="0.35"
      stroke-width="2"
      aria-hidden="true"
    >
      <path d="M0 140 L560 100" />
      <path d="M0 300 L560 260" />
      <path d="M0 460 L560 420" />
      <path d="M120 0 L160 560" />
      <path d="M300 0 L340 560" />
      <path d="M440 0 L480 560" />
      <path d="M0 220 C 200 200, 360 240, 560 180" stroke-width="6" stroke-opacity="0.2" />
    </svg>
    <span
      class="absolute top-1/2 left-1/2 size-7 -translate-1/2 rounded-full border-4 border-background bg-ochre transition-transform group-hover:scale-110"
      aria-hidden="true"
    ></span>
    <span class="absolute bottom-3.5 left-4 rounded-md bg-background px-2.5 py-1.5 text-xs tracking-[0.08em] uppercase">
      Open in Google Maps
    </span>
  </a>
</section>
