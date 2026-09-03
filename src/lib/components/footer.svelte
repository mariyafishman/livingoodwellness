<script lang="ts">
	import Logo from '#lib/assets/logo.svelte';
	import { Button } from '#lib/components/ui/button/index.ts';
	import { site } from '#lib/config/site.ts';

	const currentYear = new Date().getFullYear();
</script>

<footer class="bg-field text-on-field">
	<div class="wrap grid gap-10 py-12 lg:grid-cols-3 lg:gap-12">
		<div class="flex flex-col gap-4">
			<div class="flex items-center gap-2.5">
				<Logo class="size-8" />
				<span class="font-extrabold tracking-tight">{site.name}</span>
			</div>
			<p class="text-sm leading-relaxed text-on-field/80">
				{site.address.street}<br />
				{site.address.city}, {site.address.state} {site.address.zip}<br />
				{site.address.note}
			</p>
		</div>

		<div>
			<div class="eyebrow text-on-field/70">Hours</div>
			<div class="mt-3 flex flex-col gap-2 text-sm">
				{#each site.hours as { days, time } (days)}
					<div class="flex justify-between gap-4">
						<span>{days}</span>
						<span>{time}</span>
					</div>
				{/each}
			</div>
		</div>

		<div>
			<div class="eyebrow text-on-field/70">Visit</div>
			<a class="mt-3 block text-lg font-extrabold tracking-tight" href={site.phoneHref}>{site.phone}</a>
			<p class="mt-1 text-sm text-on-field/80">
				Call or text ·
				<a class="underline decoration-butter underline-offset-4" href="mailto:{site.email}">{site.email}</a>
			</p>
			<Button class="mt-5" href="/book" variant="secondary">Book on MassageBook</Button>
		</div>
	</div>
	<div class="border-t border-on-field/15">
		<div class="wrap flex flex-wrap justify-between gap-3 py-3 text-xs text-on-field/70">
			<span>{site.practitioner.title}, {site.practitioner.license}</span>
			<span>&copy; {currentYear} {site.name}</span>
		</div>
	</div>
</footer>
