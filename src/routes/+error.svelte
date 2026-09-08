<script lang="ts">
  import { page } from '$app/state';
  import SEO from '#lib/components/seo.svelte';
  import PageIntro from '#lib/components/page-intro.svelte';
  import { Button } from '#lib/components/ui/button/index.ts';

  const notFound = $derived(page.status === 404);
  const title = $derived(notFound ? 'Page not found' : 'Something went wrong');
  const lead = $derived(
    notFound
      ? 'That page is not here, but the studio still is.'
      : 'Please try again in a moment, or get in touch with Mariya directly.'
  );
</script>

<SEO {title} description={lead} />

<PageIntro {title} {lead}>
  <div class="mt-8 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:gap-4 md:mt-10">
    <Button href="/">Back to the home page</Button>
    <Button href="/contact" variant="outline">Contact</Button>
  </div>
</PageIntro>

<section class="wrap section-gap grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
  <h2 class="display-2">Looking for something?</h2>
  <ul class="border-t">
    {#each [['Services and rates', '/services'], ['About Mariya', '/about'], ['Book a session', '/book'], ['Contact', '/contact']] as [label, href] (href)}
      <li class="border-b">
        <a
          {href}
          class="row-title block rounded-sm py-3.5 outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background md:py-5"
        >
          {label}
        </a>
      </li>
    {/each}
  </ul>
</section>
