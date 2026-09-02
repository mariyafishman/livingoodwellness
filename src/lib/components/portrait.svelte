<script lang="ts">
  import Duotone from '#lib/components/duotone.svelte';
  import Logo from '#lib/assets/logo.svelte';
  import { site } from '#lib/config/site.ts';

  /**
   * Mariya's portrait. The file is optional: if `src/lib/assets/mariya.*`
   * is missing, a printed placeholder with the butterfly takes its place.
   */
  interface Props {
    class?: string;
    position?: string;
    eager?: boolean;
  }

  let { class: className, position = '50% 28%', eager = false }: Props = $props();

  const files = import.meta.glob('/src/lib/assets/mariya.{jpg,jpeg,png,webp}', {
    eager: true,
    import: 'default'
  }) as Record<string, string>;

  const src = Object.values(files)[0];
</script>

{#if src}
  <Duotone
    {src}
    alt="{site.owner}, {site.ownerTitle}, in her studio"
    class={className}
    {position}
    {eager}
  />
{:else}
  <div
    class={['grid place-items-center gap-3 bg-card text-muted-foreground', className]}
    role="img"
    aria-label="Portrait of {site.owner} coming soon"
  >
    <Logo class="size-20 text-foreground" />
    <span class="label">Portrait to follow</span>
  </div>
{/if}
