<script lang="ts">
  /**
   * Flat geometric marks from the canvas: disc, half-disc, quarter-circle, bar, six dots,
   * concentric rings. They take their colour from `currentColor`, so set a text colour class.
   */
  import type { ClassValue } from 'svelte/elements';

  export type MarkKind = 'disc' | 'half' | 'quarter' | 'bar' | 'dots' | 'rings';

  interface Props {
    kind: MarkKind;
    class?: ClassValue;
  }

  let { kind, class: className = 'size-14' }: Props = $props();
</script>

<svg class={className} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  {#if kind === 'disc'}
    <circle cx="32" cy="32" r="26" fill="currentColor" />
  {:else if kind === 'half'}
    <path d="M6 40 A 26 26 0 0 1 58 40 Z" fill="currentColor" />
  {:else if kind === 'quarter'}
    <path d="M8 56 L8 8 A 48 48 0 0 1 56 56 Z" fill="currentColor" />
  {:else if kind === 'bar'}
    <rect x="10" y="26" width="44" height="12" rx="2" fill="currentColor" />
  {:else if kind === 'dots'}
    <g fill="currentColor">
      <circle cx="14" cy="20" r="8" />
      <circle cx="32" cy="20" r="8" />
      <circle cx="50" cy="20" r="8" />
      <circle cx="14" cy="44" r="8" />
      <circle cx="32" cy="44" r="8" />
      <circle cx="50" cy="44" r="8" />
    </g>
  {:else if kind === 'rings'}
    <g fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="32" cy="32" r="8" />
      <circle cx="32" cy="32" r="17" />
      <circle cx="32" cy="32" r="26" />
    </g>
  {/if}
</svg>
