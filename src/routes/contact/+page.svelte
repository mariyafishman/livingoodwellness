<script lang="ts">
	import SEO from '#lib/components/seo.svelte';
	import { Button } from '#lib/components/ui/button/index.ts';
	import { site } from '#lib/config/site.ts';
</script>

<SEO
	title="Contact"
	description="Visit Livingood Wellness Center at 157 Marlboro Street, Hudson, MA. Call or text Mariya Fishman at 978-493-6171. By appointment only."
/>

<section class="wrap pt-10 pb-8 lg:pt-14">
	<p class="ticket">Hudson, Massachusetts</p>
	<h1 class="mt-4 max-w-xl text-4xl leading-[0.95] sm:text-5xl lg:text-6xl">
		Come by the <span class="highlight">studio.</span>
	</h1>
	<p class="mt-5 max-w-lg text-lg leading-relaxed">
		A private home with a dedicated studio. Sessions are by appointment only — call, text, or book online.
	</p>
</section>

<section class="wrap grid gap-6 pb-16 lg:grid-cols-3 lg:pb-20">
	<div class="rounded-[1.75rem] bg-lilac p-6 sm:p-7">
		<h2 class="eyebrow">Address</h2>
		<p class="mt-3 text-lg leading-snug font-extrabold tracking-tight">
			{site.address.street}<br />
			{site.address.city}, {site.address.state} {site.address.zip}
		</p>
		<p class="mt-3 text-sm">{site.address.note}</p>
		<a class="mt-4 inline-block text-sm font-extrabold underline decoration-bottle underline-offset-4" href={site.mapsHref}
			>Open in Maps</a
		>
	</div>

	<div class="rounded-[1.75rem] bg-butter p-6 text-bottle-deep sm:p-7">
		<h2 class="eyebrow text-bottle-deep">Hours</h2>
		<div class="mt-3 flex flex-col gap-2 text-sm">
			{#each site.hours as { days, time } (days)}
				<div class="flex justify-between gap-3">
					<span class="font-semibold">{days}</span>
					<span>{time}</span>
				</div>
			{/each}
		</div>
	</div>

	<div class="rounded-[1.75rem] bg-mint p-6 sm:p-7">
		<h2 class="eyebrow">Reach Mariya</h2>
		<a class="mt-3 block text-2xl font-extrabold tracking-tight" href={site.phoneHref}>{site.phone}</a>
		<p class="mt-1 text-sm font-semibold">Call or text</p>
		<a class="mt-4 block text-sm font-bold underline decoration-butter decoration-2 underline-offset-4" href="mailto:{site.email}"
			>{site.email}</a
		>
		<Button class="mt-6" href="/book">Book a session</Button>
	</div>
</section>
