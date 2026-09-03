<script lang="ts">
  import Logo from '#lib/assets/logo.svelte';
  import { site } from '#lib/config/site.ts';
  import { cn } from '#lib/utils.ts';

  /*
    Mariya's portrait in the leaf shape. The file is optional: if
    src/lib/assets/mariya.jpg is missing, a quiet sage panel with the
    butterfly takes its place so the layout never breaks.
  */
  const portraits = import.meta.glob('/src/lib/assets/mariya.jpg', {
    eager: true,
    query: '?url',
    import: 'default'
  }) as Record<string, string>;
  const src = Object.values(portraits)[0];

  interface Props {
    shape?: 'leaf' | 'leaf-alt';
    priority?: boolean;
    class?: string;
  }

  let { shape = 'leaf', priority = false, class: className }: Props = $props();
</script>

<div
  class={cn(
    'relative aspect-[4/5] w-full overflow-hidden bg-secondary',
    shape === 'leaf' ? 'rounded-leaf' : 'rounded-leaf-alt',
    className
  )}
>
  {#if src}
    <img
      {src}
      alt="{site.practitioner.name}, {site.practitioner.title}, in her studio in {site.address.city}"
      class="size-full object-cover"
      width="1200"
      height="1600"
      loading={priority ? 'eager' : 'lazy'}
      fetchpriority={priority ? 'high' : 'auto'}
      decoding="async"
    />
  {:else}
    <div class="flex size-full items-center justify-center" role="img" aria-label="Butterfly mark">
      <Logo class="size-1/2 text-primary" title="" />
    </div>
  {/if}
</div>
