<script lang="ts">
  /**
   * The Livingood butterfly. A solid, upright mark drawn in `currentColor`,
   * so it takes the colour of the text around it. Decorative by default;
   * pass a `label` when it stands alone.
   */
  interface Props {
    class?: string;
    label?: string;
  }

  let { class: className, label }: Props = $props();
</script>

<svg
  class={className}
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 64 64"
  fill="currentColor"
  role={label ? 'img' : undefined}
  aria-label={label}
  aria-hidden={label ? undefined : 'true'}
>
  <!-- antennae -->
  <path
    d="M31 24c-3-6-7-9-11-10M33 24c3-6 7-9 11-10"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
  />
  <circle cx="19.5" cy="13.5" r="2" />
  <circle cx="44.5" cy="13.5" r="2" />
  <!-- upper wings -->
  <path d="M31 29C25 15 5 12 4.5 25c-.5 9 12 15 26.5 15Z" />
  <path d="M33 29c6-14 26-17 26.5-4 .5 9-12 15-26.5 15Z" />
  <!-- lower wings, overlapping the upper pair at the body -->
  <path d="M31 37c-10 0-21 7-17.5 16 2.5 6.5 15 4 17.5-7Z" />
  <path d="M33 37c10 0 21 7 17.5 16-2.5 6.5-15 4-17.5-7Z" />
  <!-- body -->
  <rect x="29.75" y="23" width="4.5" height="30" rx="2.25" />
</svg>
