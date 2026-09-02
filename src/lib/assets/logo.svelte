<script lang="ts">
  /**
   * Placeholder butterfly mark. Mariya's real logo is a butterfly from her
   * business card; swap the paths below for it when the file arrives.
   * Two colors only: `currentColor` (upper wings, body) and the clay token
   * (lower wings). Plain paths, no gradients or filters.
   */
  interface Props {
    class?: string;
    /** Set when the mark is decorative and a nearby wordmark carries the name. */
    decorative?: boolean;
  }

  let { class: className, decorative = false }: Props = $props();
</script>

<svg
  class={className}
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 64 64"
  fill="none"
  role={decorative ? 'presentation' : 'img'}
  aria-hidden={decorative ? 'true' : undefined}
  aria-label={decorative ? undefined : 'Livingood Wellness Center butterfly'}
>
  <!-- upper wings: two mirrored leaves meeting at the axis -->
  <path
    d="M30.5 31C27 17 16 8 8.5 10.5 3 12.5 3 20 6.5 26.5 10 33 21 36 30.5 31Z"
    fill="currentColor"
  />
  <path
    d="M33.5 31C37 17 48 8 55.5 10.5 61 12.5 61 20 57.5 26.5 54 33 43 36 33.5 31Z"
    fill="currentColor"
  />
  <!-- lower wings: smaller, warmer -->
  <path
    d="M30.5 34.5C22 34 12.5 40 11.5 47.5 10.8 53 15.5 56.5 20.5 54.5 26.5 52 30 43 30.5 34.5Z"
    fill="var(--clay)"
  />
  <path
    d="M33.5 34.5C42 34 51.5 40 52.5 47.5 53.2 53 48.5 56.5 43.5 54.5 37.5 52 34 43 33.5 34.5Z"
    fill="var(--clay)"
  />
  <!-- body: the balance axis -->
  <rect x="31" y="24" width="2" height="30" rx="1" fill="currentColor" />
  <!-- antennae -->
  <path
    d="M31 24C29 18 25.5 14.5 21.5 12.5M33 24C35 18 38.5 14.5 42.5 12.5"
    stroke="currentColor"
    stroke-width="1.75"
    stroke-linecap="round"
  />
</svg>
