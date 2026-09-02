<script lang="ts">
  /**
   * Placeholder butterfly mark until Mariya's real logo arrives.
   * Four soft petal wings: the upper pair takes the current text colour,
   * the lower pair is apricot, so the mark reads on green, white and dark.
   */
  interface Props {
    class?: string;
    title?: string;
  }

  let { class: className, title = 'Livingood Wellness Center butterfly' }: Props = $props();
</script>

<svg
  class={className}
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 64 64"
  fill="none"
  role="img"
  aria-label={title}
>
  <!-- lower wings -->
  <ellipse cx="21" cy="43" rx="9.5" ry="11.5" transform="rotate(24 21 43)" fill="var(--color-apricot)" />
  <ellipse cx="43" cy="43" rx="9.5" ry="11.5" transform="rotate(-24 43 43)" fill="var(--color-apricot)" />
  <!-- upper wings -->
  <ellipse cx="18" cy="26" rx="13" ry="16.5" transform="rotate(-28 18 26)" fill="currentColor" />
  <ellipse cx="46" cy="26" rx="13" ry="16.5" transform="rotate(28 46 26)" fill="currentColor" />
  <!-- wing windows -->
  <ellipse cx="17" cy="25" rx="4" ry="6" transform="rotate(-28 17 25)" fill="var(--color-background)" opacity="0.55" />
  <ellipse cx="47" cy="25" rx="4" ry="6" transform="rotate(28 47 25)" fill="var(--color-background)" opacity="0.55" />
  <!-- body -->
  <rect x="30.25" y="17" width="3.5" height="31" rx="1.75" fill="currentColor" />
  <!-- antennae -->
  <path d="M31 17c-1-4-4-7-8-9M33 17c1-4 4-7 8-9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
  <circle cx="22.6" cy="7.6" r="1.7" fill="var(--color-apricot)" />
  <circle cx="41.4" cy="7.6" r="1.7" fill="var(--color-apricot)" />
</svg>
