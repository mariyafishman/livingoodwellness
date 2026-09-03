<script lang="ts">
	import Logo from '#lib/assets/logo.svelte';
	import { site } from '#lib/config/site.ts';

	interface Props {
		class?: string;
		compact?: boolean;
	}

	let { class: className, compact = false }: Props = $props();
</script>

<a class={['flex items-center gap-2.5 text-bottle', className]} href="/">
	<Logo class={compact ? 'size-7' : 'size-9'} />
	<span class="flex flex-col leading-none">
		<span class="text-[15px] font-extrabold tracking-tight">{site.shortName}</span>
		<span class="eyebrow text-muted-foreground">Wellness Center</span>
	</span>
</a>
