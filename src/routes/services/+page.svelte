<script lang="ts">
	import SEO from '#lib/components/seo.svelte';
	import { Button } from '#lib/components/ui/button/index.ts';
	import RateList from '#lib/components/rate-list.svelte';
	import MembershipBand from '#lib/components/membership-band.svelte';
	import BemerNote from '#lib/components/bemer-note.svelte';
	import ModalityPills from '#lib/components/modality-pills.svelte';
	import { copy, who } from '#lib/config/content.ts';
</script>

<SEO
	title="Services"
	description="Massage therapy sessions, packages and membership in Hudson, MA. Swedish, deep tissue, sports, gentle work for seniors, infant-massage instruction and Bemer circulation."
/>

<section class="wrap pt-10 pb-8 lg:pt-14">
	<p class="ticket">By appointment</p>
	<h1 class="mt-4 max-w-xl text-4xl leading-[0.95] sm:text-5xl lg:text-6xl">
		Hands-on care, at a <span class="highlight">steady pace.</span>
	</h1>
	<p class="mt-5 max-w-xl text-lg leading-relaxed">
		Swedish and relaxation, deep tissue and therapeutic, sports and recovery, gentle massage for seniors, infant-massage
		instruction for parents, and lymphatic drainage. For seniors, athletes, children and parents, chronic pain, post-injury
		recovery, and relaxation.
	</p>
	<div class="mt-7">
		<Button href="/book" size="lg">Book a session</Button>
	</div>
</section>

<section class="wrap grid gap-12 py-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-14" aria-labelledby="rates-heading">
	<div>
		<p class="font-serif text-bottle italic">A session</p>
		<h2 id="rates-heading" class="mt-2 text-3xl">Session rates</h2>
		<p class="mt-3 text-sm text-muted-foreground">{copy.payNote}</p>
	</div>
	<RateList />
</section>

<section class="wrap flex flex-col gap-5 pb-12 lg:pb-16" aria-labelledby="modalities-heading">
	<h2 id="modalities-heading" class="text-2xl">Modalities</h2>
	<ModalityPills />
	<div class="flex flex-wrap gap-2.5 pt-2">
		{#each who as person, i (person.title)}
			<article
				class={[
					'min-w-[10rem] flex-1 rounded-[1.25rem] p-5',
					person.tone === 'butter' && 'bg-butter',
					person.tone === 'lilac' && 'rounded-[1.75rem] bg-lilac',
					person.tone === 'mint' && 'bg-mint',
					i === 1 && 'sm:flex-[1.2]'
				]}
			>
				<h3 class="eyebrow">{person.title}</h3>
				<p class="mt-2 text-sm leading-snug font-semibold">{person.body}</p>
			</article>
		{/each}
	</div>
</section>

<section class="wrap pb-12 lg:pb-16">
	<MembershipBand allPackages />
</section>

<section class="wrap pb-12 lg:pb-16">
	<BemerNote />
</section>

<section class="wrap pb-16 lg:pb-20" aria-labelledby="know-heading">
	<h2 id="know-heading" class="text-2xl">Good to know</h2>
	<ul class="mt-5 flex max-w-xl list-disc flex-col gap-2 pl-5 leading-relaxed">
		{#each copy.goodToKnow as item (item)}
			<li>{item}</li>
		{/each}
	</ul>
</section>
