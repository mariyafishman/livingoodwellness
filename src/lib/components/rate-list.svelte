<script lang="ts">
	import { rates } from '#lib/config/content.ts';

	interface Props {
		emphasized?: string;
	}

	let { emphasized = '60 min' }: Props = $props();
</script>

<div class="border-t-2 border-bottle">
	{#each rates as rate (rate.mins)}
		<div
			class={[
				'flex items-baseline justify-between px-3 py-3.5',
				'border-b-2 border-bottle',
				rate.mins === emphasized && 'bg-primary text-primary-foreground'
			]}
		>
			<span class="font-bold">{rate.mins}</span>
			<span class="text-xl font-extrabold tracking-tight">{rate.price}</span>
		</div>
	{/each}
</div>
