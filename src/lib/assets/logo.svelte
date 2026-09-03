<script lang="ts">
  import type { SVGAttributes } from 'svelte/elements';
  let { ...props }: SVGAttributes<SVGSVGElement> = $props();
</script>
<svg viewBox="0 0 80 64" fill="none" aria-hidden="true" {...props}>
  <path d="M38 31C17-6-7 9 9 31c5 7 15 9 23 8C9 39 15 64 30 54c5-4 8-12 10-18 2 6 5 14 10 18 15 10 21-15-2-15 8 1 18-1 23-8C87 9 63-6 42 31Z" fill="currentColor" />
  <path d="M40 34v17m0-22-5-13m5 13 5-13" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
</svg>
