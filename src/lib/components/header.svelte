<script lang="ts">
  import * as Sheet from '#lib/components/ui/sheet/index.ts';
  import * as DropdownMenu from '#lib/components/ui/dropdown-menu/index.ts';
  import * as ToggleGroup from '#lib/components/ui/toggle-group/index.ts';
  import { Button, buttonVariants } from '#lib/components/ui/button/index.ts';
  import { Separator } from '#lib/components/ui/separator/index.ts';
  import { mode, userPrefersMode } from 'mode-watcher';
  import { page } from '$app/state';
  import SunIcon from '@lucide/svelte/icons/sun';
  import MoonIcon from '@lucide/svelte/icons/moon';
  import MonitorIcon from '@lucide/svelte/icons/monitor';
  import PhoneIcon from '@lucide/svelte/icons/phone';
  import MessageIcon from '@lucide/svelte/icons/message-circle';
  import MenuIcon from '@lucide/svelte/icons/menu';
  import Wordmark from './wordmark.svelte';
  import { site, nav } from '#lib/config/site.ts';

  let menuOpen = $state(false);

  const isActive = (href: string) => page.url.pathname === href;
</script>

<header
  class="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/80"
>
  <div class="container-page flex h-18 items-center justify-between gap-3">
    <a href="/" class="rounded-lg outline-none focus-visible:ring-3 focus-visible:ring-ring/50">
      <Wordmark />
      <span class="sr-only">{site.name}, home</span>
    </a>

    <nav class="hidden items-center gap-1 lg:flex" aria-label="Main">
      {#each nav as { title, href } (href)}
        <a
          {href}
          aria-current={isActive(href) ? 'page' : undefined}
          class={[
            'rounded-lg px-4 py-2 text-[1.0625rem] font-medium transition-colors hover:bg-accent hover:text-accent-foreground',
            isActive(href) ? 'text-primary underline decoration-2 underline-offset-8' : 'text-foreground'
          ]}
        >
          {title}
        </a>
      {/each}
    </nav>

    <div class="flex items-center gap-2">
      <!-- Phone number stays visible at every width; many clients call rather than book online. -->
      <a
        href={site.phoneHref}
        class={[buttonVariants({ variant: 'outline', size: 'lg' }), 'px-3 sm:px-5']}
        aria-label={`Call ${site.phone}`}
      >
        <PhoneIcon data-icon="inline-start" />
        <span class="tabular-nums">{site.phone}</span>
      </a>

      <div class="hidden items-center gap-2 lg:flex">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger
            class={buttonVariants({ variant: 'ghost', size: 'icon-lg' })}
            aria-label="Change color theme"
          >
            {#if mode.current === 'dark'}
              <MoonIcon />
            {:else}
              <SunIcon />
            {/if}
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

        <Button href={site.bookingUrl} size="lg">Book a session</Button>
      </div>

      <Sheet.Root bind:open={menuOpen}>
        <Sheet.Trigger
          class={[buttonVariants({ variant: 'ghost', size: 'icon-lg' }), 'lg:hidden']}
          aria-label="Open menu"
        >
          <MenuIcon />
        </Sheet.Trigger>
        <Sheet.Content side="right" class="w-[min(100vw,22rem)] gap-0 p-0">
          <Sheet.Header class="border-b px-6 py-5">
            <Sheet.Title class="sr-only">Menu</Sheet.Title>
            <Wordmark />
          </Sheet.Header>

          <nav class="flex flex-col gap-1 px-4 py-4" aria-label="Main">
            {#each nav as { title, href } (href)}
              <a
                {href}
                aria-current={isActive(href) ? 'page' : undefined}
                onclick={() => (menuOpen = false)}
                class={[
                  'rounded-xl px-4 py-3.5 font-serif text-2xl font-medium transition-colors hover:bg-accent',
                  isActive(href) ? 'bg-secondary text-secondary-foreground' : 'text-foreground'
                ]}
              >
                {title}
              </a>
            {/each}
          </nav>

          <Separator />

          <div class="flex flex-col gap-3 px-6 py-6">
            <Button href={site.bookingUrl} size="lg" onclick={() => (menuOpen = false)}>
              Book a session
            </Button>
            <div class="grid grid-cols-2 gap-3">
              <Button href={site.phoneHref} variant="outline" size="lg">
                <PhoneIcon data-icon="inline-start" />
                Call
              </Button>
              <Button href={site.smsHref} variant="outline" size="lg">
                <MessageIcon data-icon="inline-start" />
                Text
              </Button>
            </div>
            <p class="text-center text-base text-muted-foreground tabular-nums">{site.phone}</p>
          </div>

          <div class="mt-auto border-t px-6 py-5">
            <p class="mb-2 text-sm font-medium text-muted-foreground">Appearance</p>
            <ToggleGroup.Root
              type="single"
              aria-label="Color theme"
              bind:value={
                () => userPrefersMode.current,
                (value) => {
                  if (value) userPrefersMode.current = value as 'light' | 'dark' | 'system';
                }
              }
              class="inline-flex w-full rounded-xl bg-muted p-1 text-muted-foreground"
            >
              <ToggleGroup.Item
                value="light"
                class="h-11 flex-1 gap-1.5 rounded-lg! border-0 bg-transparent data-[state=on]:bg-background data-[state=on]:text-foreground data-[state=on]:shadow-sm"
              >
                <SunIcon /> Light
              </ToggleGroup.Item>
              <ToggleGroup.Item
                value="dark"
                class="h-11 flex-1 gap-1.5 rounded-lg! border-0 bg-transparent data-[state=on]:bg-background data-[state=on]:text-foreground data-[state=on]:shadow-sm"
              >
                <MoonIcon /> Dark
              </ToggleGroup.Item>
              <ToggleGroup.Item
                value="system"
                class="h-11 flex-1 gap-1.5 rounded-lg! border-0 bg-transparent data-[state=on]:bg-background data-[state=on]:text-foreground data-[state=on]:shadow-sm"
              >
                <MonitorIcon /> Auto
              </ToggleGroup.Item>
            </ToggleGroup.Root>
          </div>
        </Sheet.Content>
      </Sheet.Root>
    </div>
  </div>
</header>
