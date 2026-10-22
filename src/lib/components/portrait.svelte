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

<div class={cn('aspect-square w-[15rem] max-w-full rounded-full border-[6px] border-gold bg-background p-2 md:w-[18.75rem]', className)}>
  <!-- The ring is at most 300px wide; sizes lets the build pick widths for it. -->
  <enhanced:img
    src="#lib/assets/mariya.jpg"
    sizes="(min-width: 48rem) 272px, 212px"
    alt="{site.practitioner.name}, {site.practitioner.title}"
    class="size-full rounded-full object-cover object-[50%_35%]"
    fetchpriority={priority ? 'high' : undefined}
    loading={priority ? 'eager' : 'lazy'}
  />
</div>
