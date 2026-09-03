<script lang="ts">
  /** Concentric rings: a quiet motif for balance and circulation. Decorative only. */
  interface Props {
    class?: string;
    rings?: number;
  }

  let { class: className, rings = 6 }: Props = $props();
</script>

<svg class={className} viewBox="0 0 400 400" fill="none" aria-hidden="true" focusable="false">
  {#each Array.from({ length: rings }, (_, i) => i) as i (i)}
    <circle
      cx="200"
      cy="200"
      r={30 + i * (170 / rings)}
      stroke="currentColor"
      stroke-width="1.25"
      opacity={1 - i / (rings + 1)}
    />
  {/each}
</svg>
