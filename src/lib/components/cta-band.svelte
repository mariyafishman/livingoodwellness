<script lang="ts">
  import { Button } from '#lib/components/ui/button/index.ts';
  import Logo from '#lib/assets/logo.svelte';
  import PhoneIcon from '@lucide/svelte/icons/phone';
  import { site } from '#lib/config/site.ts';

  interface Props {
    title?: string;
    text?: string;
  }

  let {
    title = 'Ready when you are.',
    text = 'Book online in a couple of minutes, or call or text if you would rather talk to a person first.'
  }: Props = $props();
</script>

<section class="relative overflow-hidden bg-ink text-ink-foreground" aria-labelledby="cta-title">
  <Logo
    mono
    class="pointer-events-none absolute -top-16 -right-12 size-64 rotate-12 text-ink-foreground/[0.07] sm:-top-20 sm:size-80"
    title=""
  />
  <div class="container-page relative flex flex-col gap-8 py-20 lg:flex-row lg:items-center lg:justify-between lg:py-24">
    <div class="flex max-w-xl flex-col gap-4">
      <h2 id="cta-title" class="font-display text-4xl font-medium text-balance sm:text-5xl">{title}</h2>
      <p class="text-lg leading-relaxed text-ink-muted">{text}</p>
    </div>
    <div class="flex flex-col gap-3 sm:flex-row lg:shrink-0">
      <Button href="/book" variant="inverse" size="lg">Book a session</Button>
      <Button href="tel:{site.phone.tel}" variant="inverse-outline" size="lg">
        <PhoneIcon data-icon="inline-start" />
        {site.phone.display}
      </Button>
    </div>
  </div>
</section>
