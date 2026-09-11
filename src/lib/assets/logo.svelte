<script lang="ts">
  /**
   * The Livingood butterfly, redrawn from the watercolour mark on Mariya's
   * business card: wings washed from magenta through blue and teal into green
   * and amber, body and antennae in `currentColor` so they take the colour of
   * the text around them. Decorative by default; pass a `label` when it stands
   * alone.
   */
  interface Props {
    class?: string;
    label?: string;
  }

  let { class: className, label }: Props = $props();

  // One gradient per instance, so several butterflies on a page stay valid.
  const uid = $props.id();
  const wash = `butterfly-wash-${uid}`;
</script>

<svg
  class={className}
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 64 64"
  role={label ? 'img' : undefined}
  aria-label={label}
  aria-hidden={label ? undefined : 'true'}
>
  <defs>
    <!-- One wash across the whole insect, so the colour runs wing to wing. -->
    <linearGradient id={wash} gradientUnits="userSpaceOnUse" x1="26" y1="6" x2="42" y2="58">
      <stop offset="0" stop-color="#B4276F" />
      <stop offset="0.12" stop-color="#8A4C9E" />
      <stop offset="0.26" stop-color="#3C5FA6" />
      <stop offset="0.42" stop-color="#2C82B6" />
      <stop offset="0.56" stop-color="#2E9FA8" />
      <stop offset="0.7" stop-color="#4FA663" />
      <stop offset="0.84" stop-color="#A8AE38" />
      <stop offset="1" stop-color="#E8952A" />
    </linearGradient>
  </defs>
  <g fill="url(#{wash})">
    <!-- upper wings -->
    <path d="M31 30c-1.5-7.5-4-14-8-18-4.5-4.5-13-4-16.5 1.5-3.5 5.5-.5 13 5.5 16.5 5 3 13 4 19 4Z" />
    <path
      d="M31 30c-1.5-7.5-4-14-8-18-4.5-4.5-13-4-16.5 1.5-3.5 5.5-.5 13 5.5 16.5 5 3 13 4 19 4Z"
      transform="translate(64 0) scale(-1 1)"
    />
    <!-- lower wings -->
    <path d="M30.5 34.5c-6.5.5-14 3-17.5 8-3.5 5-1.5 13 4 14.5 5.5 1.5 11.5-7 13.5-17.5Z" />
    <path
      d="M30.5 34.5c-6.5.5-14 3-17.5 8-3.5 5-1.5 13 4 14.5 5.5 1.5 11.5-7 13.5-17.5Z"
      transform="translate(64 0) scale(-1 1)"
    />
  </g>
  <g fill="currentColor">
    <!-- body -->
    <path d="M32 17c1.1 1.7 1.7 5.4 1.7 11 0 8.5-.6 17-1.7 24-1.1-7-1.7-15.5-1.7-24 0-5.6.6-9.3 1.7-11Z" />
    <!-- antennae -->
    <path
      d="M31.5 19C29 13.5 25.5 10 22 8.5M32.5 19c2.5-5.5 6-9 9.5-10.5"
      fill="none"
      stroke="currentColor"
      stroke-width="1.4"
      stroke-linecap="round"
    />
    <circle cx="21.4" cy="8" r="1.7" />
    <circle cx="42.6" cy="8" r="1.7" />
  </g>
</svg>
