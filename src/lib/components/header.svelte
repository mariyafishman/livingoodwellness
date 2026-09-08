<script lang="ts">
  import { page } from '$app/state';
  import * as Popover from '#lib/components/ui/popover/index.ts';
  import { Button, buttonVariants } from '#lib/components/ui/button/index.ts';
  import Logo from '#lib/assets/logo.svelte';
  import { site } from '#lib/config/site.ts';
  import { cn } from '#lib/utils.ts';

  const navLinks = [
    { title: 'Services', href: '/services' },
    { title: 'About', href: '/about' },
    { title: 'Contact', href: '/contact' }
  ];

  let mobileMenuOpen = $state(false);

  const isCurrent = (href: string) =>
    page.url.pathname === href || page.url.pathname.startsWith(`${href}/`);

  const focusRing =
    'rounded-sm outline-none focus-visible:ring-3 focus-visible:ring-ring/60 focus-visible:ring-offset-4 focus-visible:ring-offset-secondary';
</script>

<header class="bg-secondary text-secondary-foreground">
  <div class="wrap flex h-20 items-center justify-between gap-6 md:h-24">
    <a href="/" class={cn('flex items-center gap-2.5 md:gap-3', focusRing)} aria-label="{site.name}, home">
      <Logo class="size-8 md:size-10" />
      <span class="flex flex-col">
        <span class="font-display text-lg leading-none font-extrabold tracking-[-0.02em] md:text-xl">Livingood</span>
        <span
          class="mt-1 hidden font-display text-[0.5625rem] leading-tight font-semibold tracking-[0.18em] uppercase sm:block"
        >
          Wellness Center
        </span>
      </span>
    </a>

    <nav aria-label="Main" class="hidden items-center gap-8 text-[0.9375rem] font-medium md:flex">
      {#each navLinks as { title, href } (href)}
        <a
          {href}
          aria-current={isCurrent(href) ? 'page' : undefined}
          class={cn(
            'decoration-2 underline-offset-[6px] hover:underline aria-[current=page]:underline',
            focusRing
          )}
        >
          {title}
        </a>
      {/each}
    </nav>

    <div class="flex items-center gap-2">
      <Button href="/book" size="sm" class="max-md:hidden">Book a session</Button>
      <Button href="/book" size="sm" class="md:hidden">Book</Button>

      <Popover.Root bind:open={mobileMenuOpen}>
        <Popover.Trigger
          class={cn(buttonVariants({ variant: 'ghost', size: 'icon' }), 'md:hidden')}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <span class="relative block size-5" aria-hidden="true">
            <span
              class={[
                'absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-150',
                mobileMenuOpen ? 'top-[9px] -rotate-45' : 'top-1'
              ]}
            ></span>
            <span
              class={[
                'absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-150',
                mobileMenuOpen ? 'top-[9px] rotate-45' : 'top-3.5'
              ]}
            ></span>
          </span>
        </Popover.Trigger>
        <Popover.Content
          class="h-(--bits-popover-content-available-height) w-(--bits-popover-content-available-width) overflow-y-auto rounded-none bg-secondary p-0 text-secondary-foreground shadow-none ring-0"
          align="start"
          side="bottom"
          sideOffset={0}
          preventScroll
        >
          <nav aria-label="Main" class="wrap flex min-h-full flex-col gap-10 py-8">
            <ul class="flex flex-col gap-4">
              {#each navLinks as { title, href } (href)}
                <li>
                  <a
                    {href}
                    aria-current={isCurrent(href) ? 'page' : undefined}
                    class={cn(
                      'font-display text-[2.375rem] leading-none font-extrabold tracking-[-0.04em] aria-[current=page]:underline aria-[current=page]:decoration-4 aria-[current=page]:underline-offset-8 active:opacity-60',
                      focusRing
                    )}
                    onclick={() => (mobileMenuOpen = false)}
                  >
                    {title}
                  </a>
                </li>
              {/each}
            </ul>
            <div class="mt-auto flex flex-col gap-3">
              <Button href="/book" size="lg" onclick={() => (mobileMenuOpen = false)}>Book a session</Button>
              <Button href={site.phone.tel} variant="outline" size="lg">Call or text {site.phone.display}</Button>
            </div>
          </nav>
        </Popover.Content>
      </Popover.Root>
    </div>
  </div>
</header>
