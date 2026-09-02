<script lang="ts">
  /**
   * Placeholder butterfly mark, drawn as a two-ink riso print:
   * a sunflower fill printed slightly out of register under an ink outline.
   * The ink follows `currentColor`, so it flips with the theme.
   * Replace with the real butterfly from Mariya's business card when it arrives.
   */
  interface Props {
    class?: string;
    /** Hide from assistive tech when the mark sits next to the wordmark. */
    decorative?: boolean;
  }

  let { class: className, decorative = true }: Props = $props();

  const wings = [
    // upper left
    'M31 33C26 22 14 12 8 16C3 20 8 31 20 36C24 37 29 36 31 33Z',
    // upper right
    'M33 33C38 22 50 12 56 16C61 20 56 31 44 36C40 37 35 36 33 33Z',
    // lower left
    'M31 36C26 39 16 43 14 50C13 56 20 58 25 54C29 50 31 43 31 36Z',
    // lower right
    'M33 36C38 39 48 43 50 50C51 56 44 58 39 54C35 50 33 43 33 36Z'
  ];
</script>

<svg
  class={className}
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 64 64"
  fill="none"
  aria-hidden={decorative ? 'true' : undefined}
  role={decorative ? undefined : 'img'}
>
  {#if !decorative}
    <title>Livingood Wellness Center butterfly</title>
  {/if}
  <!-- second ink, printed a hair out of register -->
  <g class="fill-sun" transform="translate(1.6 1.8)">
    {#each wings as d (d)}
      <path {d} />
    {/each}
  </g>
  <!-- first ink: outline and body -->
  <g stroke="currentColor" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round">
    {#each wings as d (d)}
      <path {d} />
    {/each}
    <path d="M32 30C30 25 27 22 24 19" />
    <path d="M32 30C34 25 37 22 40 19" />
  </g>
  <g fill="currentColor">
    <rect x="30.4" y="28" width="3.2" height="27" rx="1.6" />
    <circle cx="23.4" cy="18.4" r="1.4" />
    <circle cx="40.6" cy="18.4" r="1.4" />
  </g>
</svg>
