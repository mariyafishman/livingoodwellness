<script lang="ts">
  import { Button } from '#lib/components/ui/button/index.ts';
  import Rings from '#lib/components/decor/rings.svelte';
  import PhoneIcon from '@lucide/svelte/icons/phone';
  import { site } from '#lib/config/site.ts';

  interface Props {
    title?: string;
    text?: string;
  }

  let {
    title = 'Ready when you are.',
    text = 'Pick a service and a time on MassageBook, or call or text if you would rather talk it through first.'
  }: Props = $props();
</script>

<section class="grain relative overflow-hidden bg-canvas-deep text-canvas-deep-foreground" aria-labelledby="cta-title">
  <Rings class="pointer-events-none absolute -top-40 -right-32 size-[34rem] text-canvas-deep-foreground/25 sm:-top-48 sm:size-[44rem]" rings={8} />
  <div class="wrap section relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
    <div class="flex max-w-xl flex-col gap-4">
      <span class="eyebrow text-canvas-deep-muted">Book a session</span>
      <h2 id="cta-title" class="text-display-lg">{title}</h2>
      <p class="text-lg text-canvas-deep-muted">{text}</p>
    </div>
    <div class="flex flex-col gap-3 sm:flex-row sm:items-center lg:shrink-0">
      <Button href="/book" size="lg" variant="inverse">Book a session</Button>
      <Button href={site.phoneHref} size="lg" variant="ghost" class="text-canvas-deep-foreground hover:bg-canvas-deep-foreground/10">
        <PhoneIcon data-icon="inline-start" />
        Call or text {site.phone}
      </Button>
    </div>
  </div>
</section>
