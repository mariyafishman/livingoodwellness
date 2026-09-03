<script lang="ts">
	import { modalities } from '#lib/config/content.ts';
</script>

<div class="flex flex-wrap gap-2">
	{#each modalities as item (item)}
		<span class="rounded-full border-[1.5px] border-bottle px-3 py-1.5 text-xs font-semibold text-bottle">{item}</span>
	{/each}
</div>
