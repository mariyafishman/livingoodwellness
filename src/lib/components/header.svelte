<script lang="ts">
  import { page } from '$app/state';
  import { afterNavigate } from '$app/navigation';
  import * as ToggleGroup from '#lib/components/ui/toggle-group/index.ts';
  import { Button } from '#lib/components/ui/button/index.ts';
  import { userPrefersMode } from 'mode-watcher';
  import SunIcon from '@lucide/svelte/icons/sun';
  import MoonIcon from '@lucide/svelte/icons/moon';
  import MonitorIcon from '@lucide/svelte/icons/monitor';
  import PhoneIcon from '@lucide/svelte/icons/phone';
  import Logo from '#lib/assets/logo.svelte';
  import ThemeToggle from '#lib/components/theme-toggle.svelte';
  import { site } from '#lib/config/site.ts';

  const navLinks = [
    { title: 'Services', href: '/services' },
    { title: 'About', href: '/about' },
    { title: 'Contact', href: '/contact' }
  ];

  let mobileMenuOpen = $state(false);

  const isActive = (href: string) => page.url.pathname === href || page.url.pathname.startsWith(href + '/');

  afterNavigate(() => {
    mobileMenuOpen = false;
  });

  $effect(() => {
    document.documentElement.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.documentElement.style.overflow = '';
    };
  });
</script>

<svelte:window onkeydown={(e) => e.key === 'Escape' && (mobileMenuOpen = false)} />

<header class="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
  <div class="wrap flex h-[4.25rem] items-center justify-between gap-6">
    <a class="group flex min-w-0 items-center gap-2.5 text-foreground" href="/" aria-label="{site.name} home">
      <Logo class="size-9 shrink-0 text-primary transition-transform duration-300 ease-(--ease-out-soft) group-hover:-translate-y-px" />
      <span class="truncate font-display text-[1.3rem] leading-none tracking-[-0.01em]">
        Livingood<span class="max-sm:hidden">&nbsp;Wellness Center</span>
      </span>
    </a>

    <nav class="hidden items-center gap-1 lg:flex" aria-label="Primary">
      {#each navLinks as { title, href } (href)}
        <a
          {href}
          aria-current={isActive(href) ? 'page' : undefined}
          class="relative rounded-full px-3.5 py-2 text-[0.95rem] font-medium text-foreground/80 transition-colors hover:text-foreground aria-[current=page]:text-foreground after:absolute after:inset-x-3.5 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-honey after:opacity-0 after:transition-opacity aria-[current=page]:after:opacity-100"
        >
          {title}
        </a>
      {/each}
    </nav>

    <div class="flex items-center gap-1.5 sm:gap-2">
      <Button
        href={site.phoneHref}
        variant="ghost"
        size="sm"
        class="hidden text-foreground/80 xl:inline-flex"
      >
        <PhoneIcon data-icon="inline-start" />
        {site.phone}
      </Button>
      <ThemeToggle class="max-lg:hidden" />
      <Button href="/book" size="sm">Book<span class="max-sm:hidden">&nbsp;a session</span></Button>

      <button
        type="button"
        class="inline-flex size-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary/60 lg:hidden"
        aria-expanded={mobileMenuOpen}
        aria-controls="mobile-menu"
        onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
      >
        <span class="relative block h-3 w-5" aria-hidden="true">
          <span
            class={[
              'absolute inset-x-0 block h-0.5 rounded-full bg-current transition-all duration-200',
              mobileMenuOpen ? 'top-[5px] rotate-45' : 'top-0'
            ]}
          ></span>
          <span
            class={[
              'absolute inset-x-0 block h-0.5 rounded-full bg-current transition-all duration-200',
              mobileMenuOpen ? 'top-[5px] -rotate-45' : 'top-[10px]'
            ]}
          ></span>
        </span>
        <span class="sr-only">{mobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
      </button>
    </div>
  </div>
</header>

{#if mobileMenuOpen}
  <div
    id="mobile-menu"
    class="fixed inset-x-0 top-[4.25rem] bottom-0 z-40 overflow-y-auto bg-background lg:hidden"
  >
    <div class="wrap flex min-h-full flex-col gap-10 py-8">
      <nav class="flex flex-col" aria-label="Primary">
        {#each navLinks as { title, href } (href)}
          <a
            {href}
            aria-current={isActive(href) ? 'page' : undefined}
            class="flex items-center justify-between border-b border-border/70 py-4 font-display text-3xl text-foreground aria-[current=page]:text-primary"
          >
            {title}
            {#if isActive(href)}
              <span class="size-2 rounded-full bg-honey" aria-hidden="true"></span>
            {/if}
          </a>
        {/each}
      </nav>

      <div class="flex flex-col gap-3">
        <Button href="/book" size="lg" class="w-full">Book a session</Button>
        <Button href={site.phoneHref} variant="outline" size="lg" class="w-full">
          <PhoneIcon data-icon="inline-start" />
          Call or text {site.phone}
        </Button>
      </div>

      <div class="mt-auto flex flex-col gap-2">
        <span class="eyebrow">Appearance</span>
        <ToggleGroup.Root
          type="single"
          bind:value={
            () => userPrefersMode.current,
            (value) => {
              if (value) userPrefersMode.current = value as 'light' | 'dark' | 'system';
            }
          }
          class="inline-flex w-full rounded-full bg-secondary/60 p-1"
        >
          <ToggleGroup.Item value="light" class="flex-1 gap-1.5 rounded-full! border-0 bg-transparent data-[state=on]:bg-background data-[state=on]:text-foreground data-[state=on]:shadow-sm">
            <SunIcon /> Light
          </ToggleGroup.Item>
          <ToggleGroup.Item value="dark" class="flex-1 gap-1.5 rounded-full! border-0 bg-transparent data-[state=on]:bg-background data-[state=on]:text-foreground data-[state=on]:shadow-sm">
            <MoonIcon /> Dark
          </ToggleGroup.Item>
          <ToggleGroup.Item value="system" class="flex-1 gap-1.5 rounded-full! border-0 bg-transparent data-[state=on]:bg-background data-[state=on]:text-foreground data-[state=on]:shadow-sm">
            <MonitorIcon /> System
          </ToggleGroup.Item>
        </ToggleGroup.Root>
      </div>
    </div>
  </div>
{/if}
