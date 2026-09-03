<script lang="ts">
	import * as DropdownMenu from '#lib/components/ui/dropdown-menu/index.ts';
	import * as ToggleGroup from '#lib/components/ui/toggle-group/index.ts';
	import { buttonVariants } from '#lib/components/ui/button/index.ts';
	import { mode, userPrefersMode } from 'mode-watcher';
	import SunIcon from '@lucide/svelte/icons/sun';
	import MoonIcon from '@lucide/svelte/icons/moon';
	import MonitorIcon from '@lucide/svelte/icons/monitor';

	interface Props {
		layout?: 'menu' | 'group';
	}

	let { layout = 'menu' }: Props = $props();
</script>

{#if layout === 'group'}
	<ToggleGroup.Root
		type="single"
		bind:value={
			() => userPrefersMode.current,
			(value) => {
				if (value) userPrefersMode.current = value as 'light' | 'dark' | 'system';
			}
		}
		class="inline-flex w-full rounded-full bg-mint p-1 text-muted-foreground"
	>
		<ToggleGroup.Item
			value="light"
			class="flex-1 gap-1.5 rounded-full! border-0 bg-transparent data-[state=on]:bg-paper data-[state=on]:text-bottle"
		>
			<SunIcon /> Light
		</ToggleGroup.Item>
		<ToggleGroup.Item
			value="dark"
			class="flex-1 gap-1.5 rounded-full! border-0 bg-transparent data-[state=on]:bg-paper data-[state=on]:text-bottle"
		>
			<MoonIcon /> Dark
		</ToggleGroup.Item>
		<ToggleGroup.Item
			value="system"
			class="flex-1 gap-1.5 rounded-full! border-0 bg-transparent data-[state=on]:bg-paper data-[state=on]:text-bottle"
		>
			<MonitorIcon /> System
		</ToggleGroup.Item>
	</ToggleGroup.Root>
{:else}
	<DropdownMenu.Root>
		<DropdownMenu.Trigger class={buttonVariants({ variant: 'ghost', size: 'icon' })}>
			{#if mode.current === 'dark'}
				<MoonIcon />
			{:else}
				<SunIcon />
			{/if}
			<span class="sr-only">Toggle theme</span>
		</DropdownMenu.Trigger>
		<DropdownMenu.Content align="end">
			<DropdownMenu.RadioGroup bind:value={userPrefersMode.current}>
				<DropdownMenu.RadioItem value="light">
					<SunIcon />
					Light
				</DropdownMenu.RadioItem>
				<DropdownMenu.RadioItem value="dark">
					<MoonIcon />
					Dark
				</DropdownMenu.RadioItem>
				<DropdownMenu.RadioItem value="system">
					<MonitorIcon />
					System
				</DropdownMenu.RadioItem>
			</DropdownMenu.RadioGroup>
		</DropdownMenu.Content>
	</DropdownMenu.Root>
{/if}
