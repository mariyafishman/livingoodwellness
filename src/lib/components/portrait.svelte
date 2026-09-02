<script lang="ts">
  import Logo from '#lib/assets/logo.svelte';
  import { site } from '#lib/config/site.ts';

  /**
   * Mariya's portrait in an arch. The file is optional: if
   * `src/lib/assets/mariya.*` is missing, a butter-yellow arch with the
   * butterfly takes its place so the layout never breaks.
   */
  interface Props {
    class?: string;
    position?: string;
    eager?: boolean;
  }

  let { class: className, position = '50% 30%', eager = false }: Props = $props();

  const files = import.meta.glob('/src/lib/assets/mariya.{jpg,jpeg,png,webp}', {
    eager: true,
    import: 'default'
  }) as Record<string, string>;

  const src = Object.values(files)[0];
</script>

{#if src}
  <img
    {src}
    alt="{site.owner}, {site.ownerTitle}"
    class={['arch block size-full object-cover bg-muted', className]}
    style:object-position={position}
    loading={eager ? 'eager' : 'lazy'}
    decoding="async"
  />
{:else}
  <div
    class={['arch grid size-full place-items-center bg-butter text-butter-foreground', className]}
    role="img"
    aria-label="Portrait of {site.owner} coming soon"
  >
    <Logo class="size-1/3" />
  </div>
{/if}
