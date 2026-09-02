<script lang="ts">
  import * as DropdownMenu from '#lib/components/ui/dropdown-menu/index.ts';
  import * as Popover from '#lib/components/ui/popover/index.ts';
  import * as ToggleGroup from '#lib/components/ui/toggle-group/index.ts';
  import { Button, buttonVariants } from '#lib/components/ui/button/index.ts';
  import { mode, userPrefersMode } from 'mode-watcher';
  import { page } from '$app/state';
  import SunIcon from '@lucide/svelte/icons/sun';
  import MoonIcon from '@lucide/svelte/icons/moon';
  import MonitorIcon from '@lucide/svelte/icons/monitor';
  import PhoneIcon from '@lucide/svelte/icons/phone';
  import Logo from '#lib/assets/logo.svelte';
  import { site, isExternal } from '#lib/config/site.ts';

  const navLinks = [
    { title: 'Services', href: '/services' },
    { title: 'About', href: '/about' },
    { title: 'Contact', href: '/contact' }
  ];

  let mobileMenuOpen = $state(false);

  const bookTarget = $derived(isExternal(site.bookingUrl) ? '_blank' : undefined);
</script>

<header class="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
  <div class="wrap flex h-18 items-center justify-between gap-4">
    <a class="flex min-w-0 items-center gap-2.5 font-display text-xl font-bold tracking-tight" href="/">
      <Logo class="size-9 shrink-0" />
      <span class="truncate">
        <span class="sm:hidden">{site.shortName}</span>
        <span class="max-sm:hidden">{site.name}</span>
      </span>
    </a>

    <nav class="flex items-center gap-1 max-lg:hidden" aria-label="Main">
      {#each navLinks as { title, href } (href)}
        <Button
          variant="ghost"
          {href}
          class="text-base"
          aria-current={page.url.pathname.startsWith(href) ? 'page' : undefined}
        >
          {title}
        </Button>
      {/each}
    </nav>

    <div class="flex items-center gap-2">
      <!-- The phone number stays visible on every screen size: many clients call. -->
      <Button variant="outline" href={site.phoneHref} class="border-border max-sm:px-3">
        <PhoneIcon data-icon="inline-start" />
        <span class="max-sm:sr-only">{site.phone}</span>
        <span class="tabular-nums sm:hidden">Call</span>
      </Button>

      <div class="flex items-center gap-2 max-lg:hidden">
        <Button variant="secondary" href={site.bookingUrl} target={bookTarget}>Book a session</Button>

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
                <SunIcon class="mr-2" />
                Light
              </DropdownMenu.RadioItem>
              <DropdownMenu.RadioItem value="dark">
                <MoonIcon class="mr-2" />
                Dark
              </DropdownMenu.RadioItem>
              <DropdownMenu.RadioItem value="system">
                <MonitorIcon class="mr-2" />
                System
              </DropdownMenu.RadioItem>
            </DropdownMenu.RadioGroup>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>

      <Popover.Root bind:open={mobileMenuOpen}>
        <Popover.Trigger class={['lg:hidden', buttonVariants({ variant: 'ghost', size: 'icon' })]}>
          <div class="relative size-5">
            <span
              class={[
                'absolute inset-s-0 block h-0.5 w-5 rounded-full bg-foreground transition-all duration-150',
                mobileMenuOpen ? 'top-[0.55rem] -rotate-45' : 'top-1'
              ]}
            ></span>
            <span
              class={[
                'absolute inset-s-0 block h-0.5 w-5 rounded-full bg-foreground transition-all duration-150',
                mobileMenuOpen ? 'top-[0.55rem] rotate-45' : 'top-3.5'
              ]}
            ></span>
          </div>
          <span class="sr-only">Toggle menu</span>
        </Popover.Trigger>
        <Popover.Content
          class="no-scrollbar h-(--bits-popover-content-available-height) w-(--bits-popover-content-available-width) overflow-y-auto rounded-none border-none bg-background p-0 shadow-none ring-0"
          align="start"
          side="bottom"
          preventScroll
        >
          <div class="flex min-h-full flex-col gap-10 p-6">
            <nav class="flex flex-col" aria-label="Main">
              {#each navLinks as { title, href } (href)}
                <a
                  class="border-b border-border py-4 font-display text-4xl font-bold tracking-tight active:opacity-60"
                  {href}
                  onclick={() => (mobileMenuOpen = false)}
                >
                  {title}
                </a>
              {/each}
            </nav>

            <div class="mt-auto flex flex-col gap-4">
              <Button
                variant="secondary"
                size="lg"
                href={site.bookingUrl}
                target={bookTarget}
                onclick={() => (mobileMenuOpen = false)}
              >
                Book a session
              </Button>
              <Button variant="outline" size="lg" href={site.phoneHref}>
                <PhoneIcon data-icon="inline-start" />
                Call or text {site.phone}
              </Button>

              <ToggleGroup.Root
                type="single"
                bind:value={
                  () => userPrefersMode.current,
                  (value) => {
                    if (value) userPrefersMode.current = value as 'light' | 'dark' | 'system';
                  }
                }
                class="inline-flex w-full rounded-full bg-muted p-1 text-muted-foreground"
              >
                <ToggleGroup.Item
                  value="light"
                  class="flex-1 gap-1.5 rounded-full! border-0 bg-transparent data-[state=on]:bg-background data-[state=on]:text-foreground data-[state=on]:shadow-sm"
                >
                  <SunIcon /> Light
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="dark"
                  class="flex-1 gap-1.5 rounded-full! border-0 bg-transparent data-[state=on]:bg-background data-[state=on]:text-foreground data-[state=on]:shadow-sm"
                >
                  <MoonIcon /> Dark
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="system"
                  class="flex-1 gap-1.5 rounded-full! border-0 bg-transparent data-[state=on]:bg-background data-[state=on]:text-foreground data-[state=on]:shadow-sm"
                >
                  <MonitorIcon /> System
                </ToggleGroup.Item>
              </ToggleGroup.Root>
            </div>
          </div>
        </Popover.Content>
      </Popover.Root>
    </div>
  </div>
</header>
