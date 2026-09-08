<script lang="ts">
  import * as ToggleGroup from '#lib/components/ui/toggle-group/index.ts';
  import { userPrefersMode } from 'mode-watcher';
  import SunIcon from '@lucide/svelte/icons/sun';
  import MoonIcon from '@lucide/svelte/icons/moon';
  import MonitorIcon from '@lucide/svelte/icons/monitor';

  type Mode = 'light' | 'dark' | 'system';

  const options: { value: Mode; label: string; icon: typeof SunIcon }[] = [
    { value: 'light', label: 'Light', icon: SunIcon },
    { value: 'dark', label: 'Dark', icon: MoonIcon },
    { value: 'system', label: 'System', icon: MonitorIcon }
  ];
</script>

<ToggleGroup.Root
  type="single"
  spacing={1}
  aria-label="Colour theme"
  class="rounded-full border border-current/30 p-1"
  bind:value={
    () => userPrefersMode.current,
    (value) => {
      if (value) userPrefersMode.current = value as Mode;
    }
  }
>
  {#each options as { value, label, icon: Icon } (value)}
    <ToggleGroup.Item {value} aria-label={label}>
      <Icon />
      <span class="max-sm:sr-only">{label}</span>
    </ToggleGroup.Item>
  {/each}
</ToggleGroup.Root>
