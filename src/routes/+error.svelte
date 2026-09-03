<script lang="ts">
  import { page } from '$app/state';
  import SEO from '#lib/components/seo.svelte';
  import Logo from '#lib/assets/logo.svelte';
  import { Button } from '#lib/components/ui/button/index.ts';
  import { site } from '#lib/config/site.ts';

  const notFound = $derived(page.status === 404);
  const title = $derived(notFound ? 'Page not found' : 'Something went wrong');
</script>

<SEO {title} description={site.description} />

<section class="container-page flex flex-col items-start gap-8 py-20 lg:py-32">
  <Logo class="size-16 text-primary" title="" />
  <div class="flex flex-col gap-4">
    <p class="eyebrow">{page.status}</p>
    <h1 class="font-display text-5xl font-medium sm:text-6xl">{title}</h1>
    <p class="max-w-prose text-lg leading-relaxed text-muted-foreground">
      {#if notFound}
        That page has moved or never existed. Everything on this site is one click from the menu.
      {:else}
        Please try again in a moment. If it keeps happening, call or text {site.phone.display}.
      {/if}
    </p>
  </div>
  <div class="flex flex-col gap-3 sm:flex-row">
    <Button href="/" size="lg">Back to the home page</Button>
    <Button href="/book" size="lg" variant="outline">Book a session</Button>
  </div>
</section>
