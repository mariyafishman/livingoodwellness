<script lang="ts">
  import { page } from '$app/state';
  import SEO from '#lib/components/seo.svelte';
  import { Button } from '#lib/components/ui/button/index.ts';
  import Logo from '#lib/assets/logo.svelte';
  import { site } from '#lib/config/site.ts';

  const notFound = $derived(page.status === 404);
</script>

<SEO title={notFound ? 'Page not found' : 'Something went wrong'} />

<section class="section">
  <div class="container-site flex flex-col items-start gap-6">
    <Logo class="size-16 text-foreground" />
    <p class="eyebrow text-muted-foreground">{page.status}</p>
    <h1 class="text-5xl sm:text-6xl">
      {notFound ? 'That page has flown off.' : 'Something went wrong.'}
    </h1>
    <p class="max-w-lg text-lg text-muted-foreground">
      {notFound
        ? 'The link may be old or mistyped. Everything you need is a click away, or a call or text to '
        : 'Please try again in a moment, or call or text '}
      <a class="font-semibold text-foreground underline decoration-accent decoration-2 underline-offset-4" href={site.phoneHref}>{site.phone}</a>.
    </p>
    <div class="flex flex-col gap-3 sm:flex-row">
      <Button href="/" variant="accent" size="lg">Back to home</Button>
      <Button href="/book" variant="outline" size="lg">Book a session</Button>
    </div>
  </div>
</section>
