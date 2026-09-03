<script lang="ts">
  import { Button } from '#lib/components/ui/button/index.ts';
  import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
  import { site } from '#lib/config/site.ts';
</script>

<section class="bg-cta" aria-labelledby="cta-heading">
  <div class="wrap grid grid-cols-1 gap-8 py-16 lg:grid-cols-12 lg:items-center lg:py-28">
    <div class="flex flex-col gap-4 lg:col-span-7">
      <h2 id="cta-heading" class="text-[44px] leading-[1.02] lg:text-[64px] lg:tracking-[-0.015em]">Ready when you are.</h2>
      <p class="text-body text-muted-foreground lg:text-[19px]">
        Pick a time on MassageBook, or call or text and we will find one together.
      </p>
    </div>
    <div class="flex flex-col gap-3.5 lg:col-span-4 lg:col-start-9 lg:items-start">
      <Button href="/book">Book a session <ArrowRightIcon data-icon="inline-end" /></Button>
      <Button href="tel:{site.phone.tel}" variant="outline">Call or text {site.phone.display}</Button>
    </div>
  </div>
</section>
