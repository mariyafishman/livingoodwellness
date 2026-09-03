<script lang="ts">
  /**
   * Placeholder butterfly mark for Livingood Wellness Center.
   * Built from circles and one line, in the Bauhaus spirit: upper wings take the
   * current text color, lower wings take the marigold highlight.
   * Replace when the real logo file arrives.
   */
  interface Props {
    class?: string;
    title?: string;
    /** Single-color version (lower wings follow currentColor). For watermarks. */
    mono?: boolean;
  }

  let { class: className, title = 'Livingood Wellness Center butterfly', mono = false }: Props = $props();
</script>

<svg
  class={className}
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 64 64"
  fill="none"
  role="img"
  aria-label={title}
>
  <title>{title}</title>
  <!-- antennae -->
  <path
    d="M32 20c-2-5-5-9-9-11M32 20c2-5 5-9 9-11"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
  />
  <circle cx="22.5" cy="8.5" r="2" fill="currentColor" />
  <circle cx="41.5" cy="8.5" r="2" fill="currentColor" />
  <!-- upper wings -->
  <ellipse cx="19.5" cy="27" rx="14" ry="11.5" transform="rotate(-18 19.5 27)" fill="currentColor" />
  <ellipse cx="44.5" cy="27" rx="14" ry="11.5" transform="rotate(18 44.5 27)" fill="currentColor" />
  <!-- lower wings -->
  <ellipse cx="23" cy="44" rx="9.5" ry="8" transform="rotate(20 23 44)" class={mono ? 'fill-current' : 'fill-highlight'} />
  <ellipse cx="41" cy="44" rx="9.5" ry="8" transform="rotate(-20 41 44)" class={mono ? 'fill-current' : 'fill-highlight'} />
  <!-- body -->
  <rect x="29.75" y="18" width="4.5" height="34" rx="2.25" fill="currentColor" />
</svg>
