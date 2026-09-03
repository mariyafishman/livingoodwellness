<script lang="ts">
	import SEO from '#lib/components/seo.svelte';
	import { Button } from '#lib/components/ui/button/index.ts';
	import Portrait from '#lib/components/portrait.svelte';
	import RateList from '#lib/components/rate-list.svelte';
	import MembershipBand from '#lib/components/membership-band.svelte';
	import BemerNote from '#lib/components/bemer-note.svelte';
	import ModalityPills from '#lib/components/modality-pills.svelte';
	import { copy, who } from '#lib/config/content.ts';
	import { site } from '#lib/config/site.ts';

	const ticketTone = {
		butter: 'bg-butter',
		lilac: 'bg-lilac rounded-[1.75rem]',
		mint: 'bg-mint'
	} as const;
</script>

<SEO />

<section class="wrap grid items-center gap-10 pt-6 pb-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:pt-8 lg:pb-20">
	<div>
		<p class="ticket">Hudson, MA · by appointment</p>
		<h1 class="mt-5 text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
			Find your
			<br />
			<span class="highlight">balance.</span>
		</h1>
		<p class="mt-6 max-w-md text-lg leading-relaxed">{copy.oneLiner}</p>
		<div class="mt-8 flex flex-wrap items-center gap-3">
			<Button href="/book" size="lg">Book a session</Button>
			<a class="text-sm font-bold text-bottle underline decoration-butter decoration-2 underline-offset-4" href={site.phoneHref}>
				Call or text {site.phone}
			</a>
		</div>
	</div>
	<Portrait class="mx-auto w-full max-w-md lg:max-w-none" />
</section>

<section class="wrap flex flex-col gap-6 pb-8 lg:pb-10" aria-labelledby="who-heading">
	<h2 id="who-heading" class="sr-only">Who I work with</h2>
	<div class="flex flex-wrap gap-2.5">
		{#each who as person, i (person.title)}
			<article
				class={[
					'flex-1 rounded-[1.25rem] p-5 sm:p-6',
					ticketTone[person.tone],
					i === 1 ? 'min-w-[11.5rem] sm:flex-[1.2]' : 'min-w-[10rem]'
				]}
			>
				<h3 class="eyebrow">{person.title}</h3>
				<p class="mt-2 text-[0.95rem] leading-snug font-semibold text-foreground">{person.body}</p>
			</article>
		{/each}
	</div>
	<ModalityPills />
</section>

<section class="wrap grid gap-12 py-12 lg:grid-cols-2 lg:gap-16 lg:py-16" aria-labelledby="meet-heading">
	<div>
		<p class="font-serif text-[0.95rem] text-bottle italic">Meet Mariya</p>
		<h2 id="meet-heading" class="mt-2.5 text-2xl leading-snug sm:text-3xl">{copy.meetLead}</h2>
		<p class="mt-4 leading-relaxed">{copy.meetShort}</p>
		<a class="mt-4 inline-block font-extrabold text-bottle" href="/about">Read her story →</a>
	</div>
	<div>
		<p class="font-serif text-[0.95rem] text-bottle italic">A session</p>
		<div class="mt-3">
			<RateList />
		</div>
		<p class="mt-3 text-sm text-muted-foreground">{copy.payNote}</p>
	</div>
</section>

<section class="wrap pb-12 lg:pb-16">
	<MembershipBand />
</section>

<section class="wrap pb-16 lg:pb-20">
	<BemerNote />
</section>
