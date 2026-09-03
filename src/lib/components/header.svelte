<script lang="ts">
	import * as Popover from '#lib/components/ui/popover/index.ts';
	import { Button, buttonVariants } from '#lib/components/ui/button/index.ts';
	import Wordmark from '#lib/components/wordmark.svelte';
	import ThemeToggle from '#lib/components/theme-toggle.svelte';
	import { navLinks } from '#lib/config/site.ts';
	import { page } from '$app/state';

	let mobileMenuOpen = $state(false);

	const currentPath = $derived(page.url.pathname);
</script>

<header class="sticky top-0 z-50 bg-background/95 backdrop-blur-sm">
	<div class="wrap flex items-center justify-between gap-4 py-5">
		<Wordmark />

		<nav class="hidden items-center gap-7 text-sm font-semibold text-bottle lg:flex" aria-label="Primary">
			{#each navLinks as { title, href } (href)}
				<a
					class={[
						'underline-offset-4 decoration-2 decoration-butter hover:underline',
						currentPath === href && 'underline'
					]}
					{href}>{title}</a
				>
			{/each}
			<Button href="/book" variant="secondary">Book a session</Button>
			<ThemeToggle />
		</nav>

		<div class="flex items-center gap-2 lg:hidden">
			<Button href="/book" variant="secondary" size="sm">Book</Button>
			<Popover.Root bind:open={mobileMenuOpen}>
				<Popover.Trigger class={['lg:hidden', buttonVariants({ variant: 'ghost', size: 'icon' })]}>
					<div class="relative size-4">
						<span
							class={[
								'absolute inset-s-0 block h-0.5 w-4 bg-bottle transition-transform',
								mobileMenuOpen ? 'top-[0.4rem] -rotate-45' : 'top-1'
							]}
						></span>
						<span
							class={[
								'absolute inset-s-0 block h-0.5 w-4 bg-bottle transition-transform',
								mobileMenuOpen ? 'top-[0.4rem] rotate-45' : 'top-2.5'
							]}
						></span>
					</div>
					<span class="sr-only">Toggle menu</span>
				</Popover.Trigger>
				<Popover.Content
					class="h-(--bits-popover-content-available-height) w-(--bits-popover-content-available-width) rounded-none border-none bg-background p-0 ring-0"
					align="start"
					side="bottom"
					preventScroll
				>
					<div class="flex min-h-full flex-col gap-8 p-6">
						<nav class="flex flex-col gap-4" aria-label="Mobile">
							{#each navLinks as { title, href } (href)}
								<a
									class="text-2xl font-extrabold tracking-tight text-bottle"
									{href}
									onclick={() => (mobileMenuOpen = false)}
								>
									{title}
								</a>
							{/each}
						</nav>
						<div class="mt-auto flex flex-col gap-6">
							<Button href="/book" size="lg" onclick={() => (mobileMenuOpen = false)}>Book a session</Button>
							<ThemeToggle layout="group" />
						</div>
					</div>
				</Popover.Content>
			</Popover.Root>
		</div>
	</div>
</header>
