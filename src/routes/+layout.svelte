<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';
	import { ModeWatcher } from 'mode-watcher';
	import Header from '#lib/components/header.svelte';
	import Footer from '#lib/components/footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} type="image/svg+xml" />
	<meta name="theme-color" content="#1E4738" />
</svelte:head>

<ModeWatcher defaultMode="light" />

<a
	href="#main"
	class="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
>
	Skip to content
</a>

<div class="flex min-h-svh flex-col">
	<Header />

	<main id="main" class="flex-1">
		{@render children()}
	</main>

	<Footer />
</div>
