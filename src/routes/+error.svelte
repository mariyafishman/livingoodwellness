<script lang="ts">
	import { page } from '$app/state';
	import SEO from '#lib/components/seo.svelte';
	import { Button } from '#lib/components/ui/button/index.ts';

	const notFound = $derived(page.status === 404);
</script>

<SEO title={notFound ? 'Page not found' : 'Something went wrong'} />

<section class="wrap flex flex-col items-start gap-6 py-20 lg:py-28">
	<p class="ticket">{page.status}</p>
	<h1 class="max-w-xl text-4xl leading-[0.95] sm:text-5xl lg:text-6xl">
		{#if notFound}
			Nothing <span class="highlight">here.</span>
		{:else}
			Something <span class="highlight">slipped.</span>
		{/if}
	</h1>
	<p class="max-w-md text-lg leading-relaxed">
		{#if notFound}
			That page does not exist, or it moved. Home, services and booking are still right here.
		{:else}
			An unexpected error happened. Try again, or head back to the start.
		{/if}
	</p>
	<div class="flex flex-wrap gap-3">
		<Button href="/" size="lg">Back to home</Button>
		<Button href="/book" size="lg" variant="outline">Book a session</Button>
	</div>
</section>
