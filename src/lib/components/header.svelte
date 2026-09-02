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
  import MessageSquareIcon from '@lucide/svelte/icons/message-square';
  import Logo from '#lib/assets/logo.svelte';
  import { site, isExternal } from '#lib/config/site.ts';

  const navLinks = [
    { title: 'Services', href: '/services' },
    { title: 'About', href: '/about' },
    { title: 'Contact', href: '/contact' }
  ];

  const bookingExternal = isExternal(site.bookingUrl);

  let mobileMenuOpen = $state(false);

  const isActive = (href: string) => page.url.pathname === href || page.url.pathname.startsWith(`${href}/`);
</script>

<!-- Masthead line, like the top of a printed sheet -->
<div class="rule hidden md:block">
  <div class="sheet flex h-9 items-center justify-between">
    <p class="label">Massage therapy · Hudson, Massachusetts · By appointment</p>
    <p class="label">{site.hoursSummary}</p>
  </div>
</div>

<header class="sticky top-0 z-50 border-y border-border bg-background/95 backdrop-blur-sm">
  <div class="sheet flex h-16 items-center justify-between gap-3 md:h-[4.5rem]">
    <a class="flex shrink-0 items-center gap-2 font-display text-xl leading-none whitespace-nowrap sm:gap-2.5 md:text-[1.35rem]" href="/">
      <Logo class="size-9 shrink-0 md:size-10" />
      <span>
        {site.shortName}<span class="hidden sm:inline">&nbsp;Wellness Center</span>
      </span>
    </a>

    <nav class="hidden items-center gap-1 lg:flex" aria-label="Main">
      {#each navLinks as { title, href } (href)}
        <a
          {href}
          aria-current={isActive(href) ? 'page' : undefined}
          class={[
            'inline-flex h-11 items-center px-4 text-base underline-offset-[0.4em] transition-colors hover:text-foreground',
            isActive(href) ? 'underline decoration-sun decoration-[3px]' : 'text-muted-foreground'
          ]}
        >
          {title}
        </a>
      {/each}
    </nav>

    <div class="flex items-center gap-1.5 sm:gap-2">
      <!-- Phone number stays visible at every size; many clients call rather than book online. -->
      <a
        href={site.phoneHref}
        class="inline-flex h-11 items-center gap-2 rounded-md px-2 font-mono text-sm whitespace-nowrap tabular-nums hover:bg-muted sm:px-3"
        aria-label="Call {site.phone}"
      >
        <PhoneIcon class="hidden size-[1.1rem] sm:block" />
        <span>{site.phone}</span>
      </a>

      <div class="hidden items-center gap-2 lg:flex">
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
              <DropdownMenu.RadioItem value="light"><SunIcon class="mr-2" /> Light</DropdownMenu.RadioItem>
              <DropdownMenu.RadioItem value="dark"><MoonIcon class="mr-2" /> Dark</DropdownMenu.RadioItem>
              <DropdownMenu.RadioItem value="system"><MonitorIcon class="mr-2" /> System</DropdownMenu.RadioItem>
            </DropdownMenu.RadioGroup>
          </DropdownMenu.Content>
        </DropdownMenu.Root>

        <Button
          href={site.bookingUrl}
          target={bookingExternal ? '_blank' : undefined}
          rel={bookingExternal ? 'noopener' : undefined}
        >
          Book a session
        </Button>
      </div>

      <Popover.Root bind:open={mobileMenuOpen}>
        <Popover.Trigger class={['lg:hidden', buttonVariants({ variant: 'ghost', size: 'icon' })]}>
          <div class="relative size-5">
            <span
              class={[
                'absolute inset-x-0 block h-0.5 bg-foreground transition-all duration-150',
                mobileMenuOpen ? 'top-[0.55rem] -rotate-45' : 'top-1'
              ]}
            ></span>
            <span
              class={[
                'absolute inset-x-0 block h-0.5 bg-foreground transition-all duration-150',
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
          <div class="sheet flex min-h-full flex-col gap-10 py-8">
            <nav class="flex flex-col" aria-label="Main">
              {#each navLinks as { title, href } (href)}
                <a
                  class="rule flex items-baseline justify-between py-4 font-display text-4xl active:opacity-60"
                  {href}
                  aria-current={isActive(href) ? 'page' : undefined}
                  onclick={() => (mobileMenuOpen = false)}
                >
                  {title}
                  {#if isActive(href)}
                    <span class="label text-foreground">You are here</span>
                  {/if}
                </a>
              {/each}
            </nav>

            <div class="mt-auto flex flex-col gap-4">
              <Button
                href={site.bookingUrl}
                size="lg"
                class="h-14 text-lg"
                target={bookingExternal ? '_blank' : undefined}
                rel={bookingExternal ? 'noopener' : undefined}
                onclick={() => (mobileMenuOpen = false)}
              >
                Book a session
              </Button>
              <div class="grid grid-cols-2 gap-3">
                <Button href={site.phoneHref} variant="outline" size="lg" class="h-14">
                  <PhoneIcon /> Call
                </Button>
                <Button href={site.smsHref} variant="outline" size="lg" class="h-14">
                  <MessageSquareIcon /> Text
                </Button>
              </div>
              <p class="label text-center">{site.phone} · {site.hoursSummary}</p>

              <ToggleGroup.Root
                type="single"
                bind:value={
                  () => userPrefersMode.current,
                  (value) => {
                    if (value) userPrefersMode.current = value as 'light' | 'dark' | 'system';
                  }
                }
                class="inline-flex w-full rounded-md bg-muted p-1 text-muted-foreground"
              >
                <ToggleGroup.Item
                  value="light"
                  class="h-11 flex-1 gap-1.5 rounded-sm! border-0 bg-transparent data-[state=on]:bg-background data-[state=on]:text-foreground"
                >
                  <SunIcon /> Light
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="dark"
                  class="h-11 flex-1 gap-1.5 rounded-sm! border-0 bg-transparent data-[state=on]:bg-background data-[state=on]:text-foreground"
                >
                  <MoonIcon /> Dark
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="system"
                  class="h-11 flex-1 gap-1.5 rounded-sm! border-0 bg-transparent data-[state=on]:bg-background data-[state=on]:text-foreground"
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
