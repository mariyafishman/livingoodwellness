<script lang="ts">
	import SEO from '#lib/components/seo.svelte';
	import { Button } from '#lib/components/ui/button/index.ts';
	import { bookHow } from '#lib/config/content.ts';
	import { site } from '#lib/config/site.ts';
</script>

<SEO
	title="Book a session"
	description="Book a massage with Mariya Fishman in Hudson, MA on MassageBook, or call or text 978-493-6171. By appointment only."
/>

<section class="wrap grid items-start gap-12 pt-10 pb-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pt-14 lg:pb-20">
	<div>
		<p class="ticket">MassageBook · or a phone call</p>
		<h1 class="mt-4 text-4xl leading-[0.95] sm:text-5xl lg:text-6xl">
			Book a <span class="highlight">session.</span>
		</h1>
		<p class="mt-5 max-w-lg text-lg leading-relaxed">
			Pick a service and time on MassageBook. Pay online or in person. New clients get a short intake form by email before
			the visit.
		</p>
		<ol class="mt-8 flex flex-col gap-3">
			{#each bookHow as step, i (step)}
				<li class="flex gap-3 text-sm font-semibold sm:text-base">
					<span class="flex size-8 shrink-0 items-center justify-center rounded-full bg-lilac text-sm font-extrabold text-bottle"
						>{i + 1}</span
					>
					<span class="pt-1">{step}</span>
				</li>
			{/each}
		</ol>
		<div class="mt-8 flex flex-wrap items-center gap-3">
			<Button href={site.bookingUrl} size="lg" rel="noopener noreferrer" target="_blank">Continue to MassageBook</Button>
			<a class="text-sm font-bold text-bottle underline decoration-butter decoration-2 underline-offset-4" href={site.phoneHref}>
				Prefer to talk? Call or text {site.phone}
			</a>
		</div>
	</div>

	<aside class="rounded-[1.75rem] bg-mint p-6 sm:p-8">
		<h2 class="text-xl">By appointment only</h2>
		<p class="mt-3 leading-relaxed">
			{site.address.street}, {site.address.city}, {site.address.state} {site.address.zip}. {site.address.note}.
		</p>
		<div class="mt-6 flex flex-col gap-2 text-sm">
			{#each site.hours as { days, time } (days)}
				<div class="flex justify-between gap-4 border-b border-bottle/20 py-2">
					<span class="font-semibold">{days}</span>
					<span>{time}</span>
				</div>
			{/each}
		</div>
	</aside>
</section>
