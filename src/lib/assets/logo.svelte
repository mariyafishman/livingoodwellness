<script lang="ts">
  let { variant = 'fieldnotes', class: className = '' }: { variant?: string; class?: string } = $props();
</script>

<svg class={className} viewBox="0 0 80 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  {#if variant === 'company'}
    <path d="M38 31C17-6-7 9 9 31c5 7 15 9 23 8C9 39 15 64 30 54c5-4 8-12 10-18 2 6 5 14 10 18 15 10 21-15-2-15 8 1 18-1 23-8C87 9 63-6 42 31Z" fill="currentColor" />
    <path d="M40 34v17m0-22-5-13m5 13 5-13" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
  {:else if variant === 'stillwater'}
    <path d="M40 32C33 17 18 7 7 8c0 16 11 28 29 27C14 33 12 46 19 55c13 0 20-9 21-20 1 11 8 20 21 20 7-9 5-22-17-20C62 36 73 24 73 8 62 7 47 17 40 32Z" stroke="currentColor" stroke-width="1.4" />
    <path d="M40 30v22M36 21l4 9 4-9M13 13l23 20M67 13 44 33" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" />
  {:else}
    <path d="M38 33C24 11 11 6 6 11 1 21 16 41 36 36 10 31 9 53 23 55c9 1 14-11 17-19 3 8 8 20 17 19 14-2 13-24-13-19C64 41 79 21 74 11 69 6 56 11 42 33" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" />
    <path d="M40 29v25m0-25-6-14m6 14 6-14M12 16l21 15M68 16 47 31M20 48l13-9M60 48l-13-9" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" />
  {/if}
</svg>
