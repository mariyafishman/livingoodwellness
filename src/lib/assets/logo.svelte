<script lang="ts">
  /**
   * The Livingood butterfly: four discs for wings, a thin bar for the body, two arcs for antennae.
   * Colours come from CSS custom properties so the mark can sit on any surface:
   * set `--logo-wing`, `--logo-lower` and `--logo-body` on a parent to recolour it.
   */
  interface Props {
    class?: string;
    title?: string;
  }

  let { class: className, title = 'Livingood butterfly' }: Props = $props();
</script>

<svg class={className} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" role="img" aria-label={title}>
  <circle cx="20" cy="26" r="14" style="fill: var(--logo-wing, var(--color-shape))" />
  <circle cx="44" cy="26" r="14" style="fill: var(--logo-wing, var(--color-shape))" />
  <circle cx="23" cy="44" r="9" style="fill: var(--logo-lower, var(--color-ochre))" />
  <circle cx="41" cy="44" r="9" style="fill: var(--logo-lower, var(--color-ochre))" />
  <rect x="30.5" y="14" width="3" height="40" rx="1.5" style="fill: var(--logo-body, var(--color-foreground))" />
  <path
    d="M32 14 C 30 8, 26 6, 22 5"
    fill="none"
    stroke-width="1.6"
    stroke-linecap="round"
    style="stroke: var(--logo-body, var(--color-foreground))"
  />
  <path
    d="M32 14 C 34 8, 38 6, 42 5"
    fill="none"
    stroke-width="1.6"
    stroke-linecap="round"
    style="stroke: var(--logo-body, var(--color-foreground))"
  />
</svg>
