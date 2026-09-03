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
  import PhoneIcon from '@lucide/svelte/icons/phone';
  import Logo from '#lib/assets/logo.svelte';
  import { site } from '#lib/config/site.ts';
  import { cn } from '#lib/utils.ts';

  const navLinks = [
    { title: 'Services', href: '/services' },
    { title: 'About', href: '/about' },
    { title: 'Contact', href: '/contact' }
  ];

  let mobileMenuOpen = $state(false);

  const isActive = (href: string) => page.url.pathname === href || page.url.pathname.startsWith(`${href}/`);
</script>

<header class="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
  <div class="container-page flex h-18 items-center justify-between gap-6">
    <a
      class="group flex items-center gap-3 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
      href="/"
      aria-label="{site.name} home"
    >
      <Logo class="size-10 text-primary transition-transform duration-300 group-hover:-rotate-6" />
      <span class="flex flex-col leading-none">
        <span class="font-display text-[1.375rem] font-medium tracking-tight text-foreground">{site.shortName}</span>
        <span class="mt-1 text-[0.625rem] font-semibold tracking-[0.22em] uppercase text-muted-foreground"
          >Wellness Center</span
        >
      </span>
    </a>

    <nav class="hidden items-center gap-1 lg:flex" aria-label="Primary">
      {#each navLinks as { title, href } (href)}
        <a
          {href}
          aria-current={isActive(href) ? 'page' : undefined}
          class={cn(
            'relative rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring',
            'after:absolute after:bottom-1 after:left-1/2 after:h-1 after:w-1 after:-translate-x-1/2 after:rounded-full after:bg-highlight after:opacity-0 after:transition-opacity',
            isActive(href) && 'text-foreground after:opacity-100'
          )}
        >
          {title}
        </a>
      {/each}
    </nav>

    <div class="flex items-center gap-2">
      <a
        href="tel:{site.phone.tel}"
        class="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-foreground/80 outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring xl:flex"
      >
        <PhoneIcon class="size-4 text-primary" aria-hidden="true" />
        {site.phone.display}
      </a>

      <div class="hidden items-center gap-2 lg:flex">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger class={buttonVariants({ variant: 'ghost', size: 'icon-sm' })}>
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

        <Button href="/book" size="sm" class="px-5">Book a session</Button>
      </div>

      <Popover.Root bind:open={mobileMenuOpen}>
        <Popover.Trigger class={['lg:hidden', buttonVariants({ variant: 'outline', size: 'icon-sm' })]}>
          <span class="relative block size-4" aria-hidden="true">
            <span
              class={[
                'absolute left-0 block h-0.5 w-4 rounded-full bg-foreground transition-all duration-150',
                mobileMenuOpen ? 'top-[0.45rem] -rotate-45' : 'top-[0.2rem]'
              ]}
            ></span>
            <span
              class={[
                'absolute left-0 block h-0.5 w-4 rounded-full bg-foreground transition-all duration-150',
                mobileMenuOpen ? 'top-[0.45rem] rotate-45' : 'top-[0.7rem]'
              ]}
            ></span>
          </span>
          <span class="sr-only">Toggle menu</span>
        </Popover.Trigger>
        <Popover.Content
          class="no-scrollbar h-(--bits-popover-content-available-height) w-(--bits-popover-content-available-width) overflow-y-auto rounded-none border-none bg-background/95 p-0 shadow-none ring-0 backdrop-blur"
          align="start"
          side="bottom"
          preventScroll
        >
          <div class="container-page flex min-h-full flex-col gap-10 py-8">
            <nav class="flex flex-col" aria-label="Mobile">
              {#each navLinks as { title, href } (href)}
                <a
                  class={cn(
                    'flex items-center justify-between border-b border-border py-4 font-display text-3xl font-medium tracking-tight outline-none active:opacity-60 focus-visible:text-primary',
                    isActive(href) && 'text-primary'
                  )}
                  {href}
                  aria-current={isActive(href) ? 'page' : undefined}
                  onclick={() => (mobileMenuOpen = false)}
                >
                  {title}
                  {#if isActive(href)}
                    <span class="size-2 rounded-full bg-highlight" aria-hidden="true"></span>
                  {/if}
                </a>
              {/each}
            </nav>

            <div class="flex flex-col gap-3">
              <Button href="/book" size="lg" onclick={() => (mobileMenuOpen = false)}>Book a session</Button>
              <Button href="tel:{site.phone.tel}" size="lg" variant="outline">
                <PhoneIcon data-icon="inline-start" />
                Call or text {site.phone.display}
              </Button>
            </div>

            <div class="mt-auto flex flex-col gap-4">
              <p class="text-sm text-muted-foreground">
                {site.address.street}, {site.address.city}, {site.address.state}. By appointment only.
              </p>
              <ToggleGroup.Root
                type="single"
                bind:value={
                  () => userPrefersMode.current,
                  (value) => {
                    if (value) userPrefersMode.current = value as 'light' | 'dark' | 'system';
                  }
                }
                class="inline-flex w-full rounded-full bg-muted p-1 text-muted-foreground"
                aria-label="Theme"
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
