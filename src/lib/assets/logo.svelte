<script lang="ts">
  /**
   * Placeholder butterfly mark. Outline and upper wings follow `currentColor`;
   * the lower wings take the honey accent. Replace when the real logo arrives.
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
  viewBox="0 0 48 48"
  fill="none"
  stroke="currentColor"
  stroke-width="1.6"
  stroke-linecap="round"
  stroke-linejoin="round"
  role="img"
  aria-label={title}
>
  <!-- upper wings -->
  <path d="M22.6 22.4C19.2 10.6 7 6.4 4.4 12.2c-2.2 4.9 3.6 12.3 12.8 13.4 2.4.3 4.4-.2 5.4-3.2Z" fill="currentColor" fill-opacity="0.16" />
  <path d="M25.4 22.4C28.8 10.6 41 6.4 43.6 12.2c2.2 4.9-3.6 12.3-12.8 13.4-2.4.3-4.4-.2-5.4-3.2Z" fill="currentColor" fill-opacity="0.16" />
  <!-- lower wings -->
  <path d="M22.6 26.2c-4.6-1.3-12.6.6-13.2 6.8-.5 5.4 6.2 8.2 10.4 4.2 2-1.9 3-5.6 2.8-11Z" fill="var(--honey)" stroke="currentColor" />
  <path d="M25.4 26.2c4.6-1.3 12.6.6 13.2 6.8.5 5.4-6.2 8.2-10.4 4.2-2-1.9-3-5.6-2.8-11Z" fill="var(--honey)" stroke="currentColor" />
  <!-- body and antennae -->
  <path d="M24 17.5v20" stroke-width="2.4" />
  <circle cx="24" cy="15" r="1.7" fill="currentColor" stroke="none" />
  <path d="M23 13.4c-.8-2.6-2.6-4.4-5.2-5.2M25 13.4c.8-2.6 2.6-4.4 5.2-5.2" />
</svg>
