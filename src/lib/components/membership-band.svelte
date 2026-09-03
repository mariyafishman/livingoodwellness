<script lang="ts">
	import { packages, membership } from '#lib/config/content.ts';

	interface Props {
		allPackages?: boolean;
	}

	let { allPackages = false }: Props = $props();

	const shown = $derived(allPackages ? packages : [packages[0], packages[1], packages[3]]);
</script>

<div class="rounded-[1.75rem] bg-butter px-6 py-7 text-bottle-deep sm:px-8">
	<div class="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
		<div>
			<div class="eyebrow">Membership</div>
			<div class="mt-1.5 text-3xl font-extrabold tracking-tight sm:text-4xl">{membership.price}</div>
			<p class="mt-2 text-sm leading-relaxed">{membership.detail}</p>
		</div>
		<div>
			<div class="eyebrow">Six-session packages</div>
			<div class="mt-3 flex flex-col gap-2">
				{#each shown as item (item.mins)}
					<div class="flex justify-between gap-3 text-sm font-semibold">
						<span>{item.mins}</span>
						<span>
							{item.price}
							<span class="font-extrabold"> save {item.save}</span>
						</span>
					</div>
				{/each}
			</div>
			{#if !allPackages}
				<a class="mt-4 inline-block text-sm font-extrabold underline decoration-bottle underline-offset-4" href="/services"
					>All packages</a
				>
			{/if}
		</div>
	</div>
	<p class="mt-5 text-sm font-semibold">
		Bought on MassageBook with membership. <a class="underline decoration-bottle underline-offset-4" href="/book">Book a session</a>
	</p>
</div>
