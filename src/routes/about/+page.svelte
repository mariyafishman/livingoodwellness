<script lang="ts">
	import SEO from '#lib/components/seo.svelte';
	import { Button } from '#lib/components/ui/button/index.ts';
	import Portrait from '#lib/components/portrait.svelte';
	import { about, copy } from '#lib/config/content.ts';
	import { site } from '#lib/config/site.ts';
</script>

<SEO
	title="About"
	description="Mariya Fishman, Licensed Massage Therapist, has practiced for over 30 years. Engineer turned bodyworker, working from a home studio in Hudson, MA."
/>

<section class="wrap grid items-start gap-12 pt-10 pb-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:pt-14 lg:pb-20">
	<Portrait class="mx-auto w-full max-w-sm lg:max-w-none" />

	<div>
		<p class="font-serif text-bottle italic">Meet Mariya</p>
		<h1 class="mt-3 text-4xl leading-[0.95] sm:text-5xl">
			The work I was <span class="highlight">meant to do.</span>
		</h1>
		<div class="mt-8 flex flex-col gap-5 text-lg leading-relaxed">
			{#each about.meet as para (para)}
				<p>{para}</p>
			{/each}
		</div>
	</div>
</section>

<section class="wrap grid gap-10 pb-16 lg:grid-cols-2 lg:gap-16 lg:pb-20">
	<div class="rounded-[1.75rem] bg-lilac p-6 sm:p-8">
		<h2 class="text-2xl">Who I work with</h2>
		<p class="mt-4 leading-relaxed">{about.who}</p>
	</div>
	<div class="rounded-[1.75rem] bg-butter p-6 text-bottle-deep sm:p-8">
		<h2 class="text-2xl text-bottle-deep">What “Livingood” means</h2>
		<p class="mt-4 leading-relaxed">{copy.livingood}</p>
		<p class="mt-4 leading-relaxed">{copy.studio} Call or text me at {site.phone}.</p>
	</div>
</section>

<section class="wrap pb-16 lg:pb-20">
	<div class="flex flex-wrap items-center gap-3">
		<Button href="/book" size="lg">Book a session</Button>
		<a class="text-sm font-bold text-bottle underline decoration-butter decoration-2 underline-offset-4" href={site.phoneHref}>
			Call or text {site.phone}
		</a>
	</div>
</section>
