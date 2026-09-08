<script lang="ts">
  import Logo from '#lib/assets/logo.svelte';
  import { site } from '#lib/config/site.ts';
  import { cn } from '#lib/utils.ts';

  /**
   * Mariya's portrait in a lilac circle, with her hand-written note and a
   * butterfly. Used in the hero and on the About page.
   */
  interface Props {
    note?: string;
    priority?: boolean;
    class?: string;
  }

  let { note = "Hello, I'm Mariya.", priority = false, class: className }: Props = $props();
</script>

<div class={cn('relative aspect-square w-full max-w-[35rem]', className)}>
  <div class="absolute inset-0 rounded-full bg-accent" aria-hidden="true"></div>
  <!-- The circle is at most 448px wide (80% of 35rem); sizes lets the build pick widths for it. -->
  <enhanced:img
    src="#lib/assets/mariya.jpg"
    sizes="(min-width: 48rem) 448px, 80vw"
    alt="{site.practitioner.name}, {site.practitioner.title}"
    class="absolute top-[10%] left-[10%] aspect-square w-[80%] rounded-full object-cover object-[50%_38%]"
    fetchpriority={priority ? 'high' : undefined}
    loading={priority ? 'eager' : 'lazy'}
  />
  <p class="note absolute -left-1 bottom-[12%] -rotate-6 md:-left-4" aria-hidden="true">{note}</p>
  <Logo class="absolute -top-2 -right-2 w-[19%] rotate-12 md:-top-6 md:-right-6 md:w-[20%]" />
</div>
