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
  import { site, nav } from '#lib/config/site.ts';

  let mobileMenuOpen = $state(false);

  const isActive = (href: string) => page.url.pathname === href || page.url.pathname.startsWith(`${href}/`);
</script>

<header class="sticky top-0 z-50 border-b-2 border-ink bg-background">
  <div class="container-site flex h-16 items-center justify-between gap-6 sm:h-[4.5rem]">
    <a class="group flex items-center gap-2.5 rounded-md text-foreground" href="/" aria-label="{site.name}, home">
      <Logo class="size-9 transition-transform duration-300 group-hover:-rotate-6" />
      <span class="flex flex-col leading-none">
        <span class="font-display text-[1.35rem] font-semibold tracking-tight">Livingood</span>
        <span class="eyebrow mt-0.5 text-[0.6rem] text-muted-foreground">Wellness Center</span>
      </span>
    </a>

    <nav class="hidden items-center gap-1 lg:flex" aria-label="Main">
      {#each nav as { title, href } (href)}
        <a
          {href}
          aria-current={isActive(href) ? 'page' : undefined}
          class={[
            'rounded-md px-3.5 py-2 text-sm font-semibold tracking-tight transition-colors hover:bg-muted',
            isActive(href) ? 'underline decoration-accent decoration-[3px] underline-offset-[6px]' : 'text-foreground/80 hover:text-foreground'
          ]}
        >
          {title}
        </a>
      {/each}
    </nav>

    <div class="flex items-center gap-2">
      <div class="hidden items-center gap-2 lg:flex">
        <a
          href={site.phoneHref}
          class="flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-semibold tracking-tight text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
        >
          <PhoneIcon class="size-4" aria-hidden="true" />
          {site.phone}
        </a>

        <DropdownMenu.Root>
          <DropdownMenu.Trigger class={buttonVariants({ variant: 'outline', size: 'icon' })}>
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

        <Button href="/book" variant="accent">Book a session</Button>
      </div>

      <Popover.Root bind:open={mobileMenuOpen}>
        <Popover.Trigger class={['lg:hidden', buttonVariants({ variant: 'outline', size: 'icon' })]}>
          <div class="relative size-4" aria-hidden="true">
            <span
              class={[
                'absolute inset-s-0 block h-0.5 w-4 rounded bg-foreground transition-all duration-150',
                mobileMenuOpen ? 'top-[0.45rem] -rotate-45' : 'top-0.5'
              ]}
            ></span>
            <span
              class={[
                'absolute inset-s-0 block h-0.5 w-4 rounded bg-foreground transition-all duration-150',
                mobileMenuOpen ? 'top-[0.45rem] rotate-45' : 'top-[0.85rem]'
              ]}
            ></span>
          </div>
          <span class="sr-only">Toggle menu</span>
        </Popover.Trigger>
        <Popover.Content
          class="no-scrollbar h-(--bits-popover-content-available-height) w-(--bits-popover-content-available-width) overflow-y-auto rounded-none border-0 border-t-2 border-ink bg-background p-0 shadow-none ring-0"
          align="start"
          side="bottom"
          sideOffset={0}
          preventScroll
        >
          <div class="container-site flex min-h-full flex-col gap-10 py-8">
            <nav class="flex flex-col" aria-label="Mobile">
              {#each nav as { title, href } (href)}
                <a
                  class={[
                    'border-b-2 border-ink py-4 font-display text-3xl font-medium tracking-tight active:opacity-60',
                    isActive(href) && 'text-primary'
                  ]}
                  {href}
                  aria-current={isActive(href) ? 'page' : undefined}
                  onclick={() => (mobileMenuOpen = false)}
                >
                  {title}
                </a>
              {/each}
              <a
                class="flex items-center gap-2 py-4 text-lg font-semibold"
                href={site.phoneHref}
                onclick={() => (mobileMenuOpen = false)}
              >
                <PhoneIcon class="size-5" aria-hidden="true" />
                Call or text {site.phone}
              </a>
            </nav>

            <div class="mt-auto flex flex-col gap-6">
              <Button href="/book" variant="accent" size="lg" onclick={() => (mobileMenuOpen = false)}>
                Book a session
              </Button>

              <ToggleGroup.Root
                type="single"
                bind:value={
                  () => userPrefersMode.current,
                  (value) => {
                    if (value) userPrefersMode.current = value as 'light' | 'dark' | 'system';
                  }
                }
                class="inline-flex w-full rounded-lg border-2 border-ink bg-muted p-1 text-muted-foreground"
                aria-label="Theme"
              >
                <ToggleGroup.Item
                  value="light"
                  class="flex-1 gap-1.5 rounded-md! border-0 bg-transparent data-[state=on]:bg-background data-[state=on]:text-foreground"
                >
                  <SunIcon class="mr-2" /> Light
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="dark"
                  class="flex-1 gap-1.5 rounded-md! border-0 bg-transparent data-[state=on]:bg-background data-[state=on]:text-foreground"
                >
                  <MoonIcon class="mr-2" /> Dark
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="system"
                  class="flex-1 gap-1.5 rounded-md! border-0 bg-transparent data-[state=on]:bg-background data-[state=on]:text-foreground"
                >
                  <MonitorIcon class="mr-2" /> System
                </ToggleGroup.Item>
              </ToggleGroup.Root>
            </div>
          </div>
        </Popover.Content>
      </Popover.Root>
    </div>
  </div>
</header>
