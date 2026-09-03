<script lang="ts">
  import * as DropdownMenu from '#lib/components/ui/dropdown-menu/index.ts';
  import { buttonVariants } from '#lib/components/ui/button/index.ts';
  import { mode, userPrefersMode } from 'mode-watcher';
  import SunIcon from '@lucide/svelte/icons/sun';
  import MoonIcon from '@lucide/svelte/icons/moon';
  import MonitorIcon from '@lucide/svelte/icons/monitor';

  interface Props {
    class?: string;
  }

  let { class: className }: Props = $props();
</script>

<DropdownMenu.Root>
  <DropdownMenu.Trigger
    class={[buttonVariants({ variant: 'ghost', size: 'icon-sm' }), 'text-muted-foreground', className]}
    aria-label="Change color theme"
  >
    {#if mode.current === 'dark'}
      <MoonIcon />
    {:else}
      <SunIcon />
    {/if}
  </DropdownMenu.Trigger>
  <DropdownMenu.Content align="end" class="min-w-36">
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
