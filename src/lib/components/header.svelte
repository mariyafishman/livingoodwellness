<script lang="ts">
  import { page } from '$app/state';
  import * as DropdownMenu from '#lib/components/ui/dropdown-menu/index.ts';
  import * as Popover from '#lib/components/ui/popover/index.ts';
  import * as ToggleGroup from '#lib/components/ui/toggle-group/index.ts';
  import { Button, buttonVariants } from '#lib/components/ui/button/index.ts';
  import { mode, userPrefersMode } from 'mode-watcher';
  import SunIcon from '@lucide/svelte/icons/sun';
  import MoonIcon from '@lucide/svelte/icons/moon';
  import MonitorIcon from '@lucide/svelte/icons/monitor';
  import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
  import Logo from '#lib/assets/logo.svelte';
  import { site } from '#lib/config/site.ts';

  const navLinks = [
    { title: 'Services', href: '/services' },
    { title: 'About', href: '/about' },
    { title: 'Contact', href: '/contact' }
  ];

  let mobileMenuOpen = $state(false);

  const isActive = (href: string) => page.url.pathname === href || page.url.pathname.startsWith(`${href}/`);
</script>

<header class="wrap flex h-20 items-center justify-between gap-6 lg:h-24">
  <a class="flex items-center gap-3.5 rounded-md" href="/" aria-label="{site.name} home">
    <Logo class="size-9 lg:size-11" />
    <span class="flex flex-col gap-px">
      <span class="font-serif text-xl leading-none text-heading lg:text-2xl">{site.shortName}</span>
      <span class="text-[11px] uppercase tracking-[0.2em] text-muted-foreground max-lg:hidden">Wellness Center</span>
    </span>
  </a>

  <nav class="flex items-center gap-10 max-lg:hidden" aria-label="Main">
    {#each navLinks as { title, href } (href)}
      <a
        class={[
          'border-b-2 py-1.5 text-base font-medium text-foreground transition-colors hover:text-heading',
          isActive(href) ? 'border-ochre' : 'border-transparent'
        ]}
        aria-current={isActive(href) ? 'page' : undefined}
        {href}
      >
        {title}
      </a>
    {/each}

    <DropdownMenu.Root>
      <DropdownMenu.Trigger class={buttonVariants({ variant: 'outline', size: 'icon' })} aria-label="Change theme">
        {#if mode.current === 'dark'}
          <MoonIcon />
        {:else}
          <SunIcon />
        {/if}
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="end">
        <DropdownMenu.RadioGroup bind:value={userPrefersMode.current}>
          <DropdownMenu.RadioItem value="light"><SunIcon /> Light</DropdownMenu.RadioItem>
          <DropdownMenu.RadioItem value="dark"><MoonIcon /> Dark</DropdownMenu.RadioItem>
          <DropdownMenu.RadioItem value="system"><MonitorIcon /> System</DropdownMenu.RadioItem>
        </DropdownMenu.RadioGroup>
      </DropdownMenu.Content>
    </DropdownMenu.Root>

    <Button href="/book">Book a session <ArrowRightIcon data-icon="inline-end" /></Button>
  </nav>

  <div class="flex items-center gap-2 lg:hidden">
    <Button href="/book" size="sm">Book</Button>

    <Popover.Root bind:open={mobileMenuOpen}>
      <Popover.Trigger class={buttonVariants({ variant: 'ghost', size: 'icon' })} aria-label="Toggle menu">
        <span class="relative block size-5">
          <span
            class={[
              'absolute inset-x-0 block h-0.5 bg-foreground transition-all duration-150',
              mobileMenuOpen ? 'top-[9px] -rotate-45' : 'top-1'
            ]}
          ></span>
          <span
            class={[
              'absolute inset-x-0 block h-0.5 bg-foreground transition-all duration-150',
              mobileMenuOpen ? 'top-[9px] rotate-45' : 'top-3.5'
            ]}
          ></span>
        </span>
      </Popover.Trigger>
      <Popover.Content
        class="h-(--bits-popover-content-available-height) w-(--bits-popover-content-available-width) overflow-y-auto rounded-none border-none bg-background p-0 shadow-none ring-0"
        align="start"
        side="bottom"
        preventScroll
      >
        <div class="flex min-h-full flex-col gap-10 p-6">
          <nav class="flex flex-col" aria-label="Main">
            {#each navLinks as { title, href } (href)}
              <a
                class={[
                  'border-b border-border py-4 font-serif text-3xl text-heading active:opacity-60',
                  isActive(href) && 'text-eyebrow'
                ]}
                aria-current={isActive(href) ? 'page' : undefined}
                {href}
                onclick={() => (mobileMenuOpen = false)}
              >
                {title}
              </a>
            {/each}
          </nav>

          <div class="mt-auto flex flex-col gap-6">
            <Button href="/book" size="lg" onclick={() => (mobileMenuOpen = false)}>
              Book a session <ArrowRightIcon data-icon="inline-end" />
            </Button>
            <a class="text-center text-base font-medium text-heading" href="tel:{site.phone.tel}">
              Call or text {site.phone.display}
            </a>

            <ToggleGroup.Root
              type="single"
              bind:value={
                () => userPrefersMode.current,
                (value) => {
                  if (value) userPrefersMode.current = value as 'light' | 'dark' | 'system';
                }
              }
              class="inline-flex w-full rounded-md border border-border p-1"
              aria-label="Theme"
            >
              <ToggleGroup.Item value="light" class="flex-1 gap-1.5 data-[state=on]:bg-muted data-[state=on]:text-heading">
                <SunIcon /> Light
              </ToggleGroup.Item>
              <ToggleGroup.Item value="dark" class="flex-1 gap-1.5 data-[state=on]:bg-muted data-[state=on]:text-heading">
                <MoonIcon /> Dark
              </ToggleGroup.Item>
              <ToggleGroup.Item value="system" class="flex-1 gap-1.5 data-[state=on]:bg-muted data-[state=on]:text-heading">
                <MonitorIcon /> System
              </ToggleGroup.Item>
            </ToggleGroup.Root>
          </div>
        </div>
      </Popover.Content>
    </Popover.Root>
  </div>
</header>
