<script lang="ts">
	interface Props {
		class?: string;
	}

	let { class: className }: Props = $props();
</script>

<svg
	class={className}
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 64 64"
	fill="none"
	aria-hidden="true"
>
	<ellipse cx="22" cy="28" rx="16" ry="14" fill="var(--color-butter)" />
	<ellipse cx="42" cy="28" rx="16" ry="14" fill="var(--color-lilac)" />
	<ellipse cx="20" cy="44" rx="11" ry="10" fill="var(--color-lilac)" />
	<ellipse cx="44" cy="44" rx="11" ry="10" fill="var(--color-butter)" />
	<ellipse cx="32" cy="36" rx="5" ry="14" fill="var(--color-bottle)" />
	<circle cx="30" cy="20" r="2.2" fill="var(--color-bottle)" />
	<circle cx="34" cy="20" r="2.2" fill="var(--color-bottle)" />
	<path d="M30 20 C26 10 22 8 18 10" stroke="var(--color-bottle)" stroke-width="1.6" />
	<path d="M34 20 C38 10 42 8 46 10" stroke="var(--color-bottle)" stroke-width="1.6" />
</svg>
