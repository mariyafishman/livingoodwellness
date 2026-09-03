<script lang="ts">
	import mariya from '#lib/assets/mariya.jpg';
	import { site } from '#lib/config/site.ts';

	interface Props {
		caption?: boolean;
		class?: string;
	}

	let { caption = true, class: className }: Props = $props();
</script>

<div class={['relative pr-7 pb-8', className]}>
	<div class="absolute inset-0 translate-x-6 translate-y-6 rounded-[2rem] bg-lilac sm:translate-x-7 sm:translate-y-7"></div>
	<div class="relative overflow-hidden rounded-[1.75rem] bg-sage">
		<img
			src={mariya}
			alt="{site.practitioner.name}, {site.practitioner.title}"
			width="800"
			height="1000"
			class="aspect-3/4 w-full object-cover object-[center_18%]"
		/>
	</div>
	{#if caption}
		<div
			class="absolute right-2 -bottom-2 rounded-full border-2 border-bottle bg-background px-3.5 py-2 text-xs font-bold text-bottle sm:right-3"
		>
			{site.practitioner.name} · LMT
		</div>
	{/if}
</div>
