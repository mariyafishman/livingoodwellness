<script lang="ts">
  import { page } from '$app/state';
  import SEO from '#lib/components/seo.svelte';
  import Rings from '#lib/components/decor/rings.svelte';
  import { Button } from '#lib/components/ui/button/index.ts';
  import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';

  const notFound = $derived(page.status === 404);
</script>

<SEO title={notFound ? 'Page not found' : 'Something went wrong'} />

<section class="relative overflow-hidden" aria-labelledby="error-title">
  <Rings class="pointer-events-none absolute -top-64 left-1/2 size-[44rem] -translate-x-1/2 text-moss-soft/20" rings={9} />
  <div class="wrap relative flex flex-col items-center gap-6 py-24 text-center sm:py-32">
    <span class="eyebrow">{page.status}</span>
    <h1 id="error-title" class="text-display-xl">
      {#if notFound}
        Nothing <span class="display-italic">here.</span>
      {:else}
        Something <span class="display-italic">slipped.</span>
      {/if}
    </h1>
    <p class="max-w-md text-lg text-muted-foreground">
      {#if notFound}
        That page does not exist, or it moved. The things people usually want are one tap away.
      {:else}
        An unexpected error happened. Try again, or head back to the start.
      {/if}
    </p>
    <div class="flex flex-col gap-3 sm:flex-row">
      <Button href="/" size="lg">Back to home</Button>
      <Button href="/book" size="lg" variant="outline">
        Book a session
        <ArrowRightIcon data-icon="inline-end" />
      </Button>
    </div>
  </div>
</section>
