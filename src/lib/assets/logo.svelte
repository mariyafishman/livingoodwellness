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
    d="M31 23c-3-6-7-9-11-10M33 23c3-6 7-9 11-10"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
  />
  <circle cx="19.5" cy="12.5" r="2" />
  <circle cx="44.5" cy="12.5" r="2" />
  <!-- upper wings -->
  <path d="M30.5 31C26 17 8 12 5 24c-2.5 10 11 16 25.5 12.5Z" />
  <path d="M33.5 31C38 17 56 12 59 24c2.5 10-11 16-25.5 12.5Z" />
  <!-- lower wings -->
  <path d="M30.5 39C19 39 8 47 12 56c3 6.5 16 3 18.5-8.5Z" />
  <path d="M33.5 39C45 39 56 47 52 56c-3 6.5-16 3-18.5-8.5Z" />
  <!-- body -->
  <rect x="29.75" y="23" width="4.5" height="30" rx="2.25" />
</svg>
