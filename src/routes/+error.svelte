<script lang="ts">
  import { page } from '$app/state';
  import SEO from '#lib/components/seo.svelte';
  import { Button } from '#lib/components/ui/button/index.ts';
  import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
  import { site } from '#lib/config/site.ts';

  const notFound = $derived(page.status === 404);
</script>

<SEO title={notFound ? 'Page not found' : 'Something went wrong'} />

<section class="wrap flex flex-col gap-6 py-16 lg:max-w-[760px] lg:py-28">
  <p class="eyebrow">{page.status}</p>
  <h1 class="text-[52px] leading-none tracking-[-0.02em] lg:text-h1">
    {notFound ? 'That page is not here.' : 'Something went wrong.'}
  </h1>
  <p class="text-body text-muted-foreground lg:text-[19px]">
    {notFound
      ? 'The link may be old, or the address mistyped. Everything on this site is a click away from the home page.'
      : 'Please try again in a moment, or call or text and we will sort it out together.'}
  </p>
  <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
    <Button href="/">Back to home <ArrowRightIcon data-icon="inline-end" /></Button>
    <Button href="tel:{site.phone.tel}" variant="outline">Call or text {site.phone.display}</Button>
  </div>
</section>
