<script lang="ts">
  interface Props {
    class?: string;
    /** Use a single color (currentColor) instead of the brand palette. */
    mono?: boolean;
  }

  let { class: className, mono = false }: Props = $props();

  const upper = $derived(mono ? 'currentColor' : 'var(--primary)');
  const lower = $derived(mono ? 'currentColor' : 'var(--accent)');
</script>

<!-- Placeholder butterfly built from Bauhaus circles. Real logo pending. -->
<svg
  class={className}
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 64 64"
  fill="none"
  aria-hidden="true"
  focusable="false"
>
  <!-- upper wings -->
  <circle cx="19" cy="26" r="14" fill={upper} />
  <circle cx="45" cy="26" r="14" fill={upper} />
  <!-- lower wings -->
  <circle cx="22.5" cy="45" r="9" fill={lower} />
  <circle cx="41.5" cy="45" r="9" fill={lower} />
  <!-- wing spots -->
  <circle cx="15" cy="23" r="3.5" fill="var(--background)" />
  <circle cx="49" cy="23" r="3.5" fill="var(--background)" />
  <!-- body -->
  <rect x="29.5" y="16" width="5" height="38" rx="2.5" fill="currentColor" />
  <!-- antennae -->
  <path d="M31 17 C 30 11, 26 8, 22 6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" />
  <path d="M33 17 C 34 11, 38 8, 42 6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" />
</svg>
