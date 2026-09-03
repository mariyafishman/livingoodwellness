<script lang="ts">
  import { Button } from '#lib/components/ui/button/index.ts';
  import PhoneIcon from '@lucide/svelte/icons/phone';
  import { site } from '#lib/config/site.ts';

  interface Props {
    title?: string;
    text?: string;
  }

  let {
    title = 'Ready when you are.',
    text = 'Pick a time on MassageBook, or call or text if you would rather talk it through first.'
  }: Props = $props();
</script>

<section class="relative overflow-hidden border-t-2 border-ink bg-forest text-forest-foreground">
  <!-- Bauhaus shapes -->
  <div class="pointer-events-none absolute -top-16 -right-16 size-64 rounded-full bg-primary/40 sm:size-80" aria-hidden="true"></div>
  <div class="pointer-events-none absolute -bottom-24 left-1/3 h-48 w-96 rounded-t-full bg-accent/25" aria-hidden="true"></div>

  <div class="container-site section relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
    <div class="flex max-w-xl flex-col gap-3">
      <h2 class="text-4xl sm:text-5xl">{title}</h2>
      <p class="text-lg text-forest-foreground/80">{text}</p>
    </div>
    <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
      <Button href="/book" variant="accent" size="lg">Book a session</Button>
      <Button href={site.phoneHref} variant="outline" size="lg" class="bg-forest text-forest-foreground">
        <PhoneIcon data-icon="inline-start" aria-hidden="true" />
        {site.phone}
      </Button>
    </div>
  </div>
</section>
