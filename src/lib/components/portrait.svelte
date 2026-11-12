<script lang="ts">
  import { site } from '#lib/config/site.ts';
  import { cn } from '#lib/utils.ts';

  /**
   * Mariya's portrait in a gold ring, as on the business card: a circle with a
   * 6px gold border and a thin paper gap before the photo.
   */
  interface Props {
    priority?: boolean;
    class?: string;
  }

  let { priority = false, class: className }: Props = $props();
</script>

<!--
  The photo is taken out of flow so the ring's height comes only from its
  aspect ratio; left in flow, the photo's own 3:4 shape stretches the ring
  into an oval inside a flex column.
-->
<div
  class={cn(
    'relative aspect-square w-[15rem] max-w-full shrink-0 rounded-full border-[6px] border-gold bg-background md:w-[18.75rem]',
    className
  )}
>
  <!-- The ring is at most 300px wide; sizes lets the build pick widths for it. -->
  <enhanced:img
    src="#lib/assets/mariya.jpg"
    sizes="(min-width: 48rem) 272px, 212px"
    alt="{site.practitioner.name}, {site.practitioner.title}"
    class="absolute top-2 left-2 size-[calc(100%-1rem)] rounded-full object-cover object-[50%_35%]"
    fetchpriority={priority ? 'high' : undefined}
    loading={priority ? 'eager' : 'lazy'}
  />
</div>
