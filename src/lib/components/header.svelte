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
    'rounded-xs outline-none focus-visible:ring-3 focus-visible:ring-ring/60 focus-visible:ring-offset-4 focus-visible:ring-offset-background';
</script>

<!-- Sits straight on the paper: no band, just the badge, the name and the links. -->
<header class="wrap flex min-h-20 items-center justify-between gap-6 py-3 md:min-h-24 md:py-4">
  <a href="/" class={cn('flex items-center gap-3', focusRing)} aria-label="{site.name}, home">
    <Logo class="size-9 md:size-11" />
    <span class="text-[0.9375rem] leading-none font-semibold tracking-[-0.01em] whitespace-nowrap lg:text-lg">{site.name}</span>
  </a>

  <nav aria-label="Main" class="hidden items-center gap-6 text-base font-medium md:flex lg:gap-8">
    {#each navLinks as { title, href } (href)}
      <a
        {href}
        aria-current={isCurrent(href) ? 'page' : undefined}
        class={cn('decoration-[1.5px] underline-offset-[6px] hover:underline aria-[current=page]:underline', focusRing)}
      >
        {title}
      </a>
    {/each}
    <Button href="/book" size="sm">Book a session</Button>
  </nav>

  <div class="flex items-center gap-2 md:hidden">
    <Button href="/book" size="sm" class="max-sm:hidden">Book</Button>

    <Popover.Root bind:open={mobileMenuOpen}>
      <Popover.Trigger
        class={cn(buttonVariants({ variant: 'ghost', size: 'icon' }), '-mr-2.5')}
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
        class="h-(--bits-popover-content-available-height) w-(--bits-popover-content-available-width) overflow-y-auto rounded-none border-t bg-popover p-0 text-popover-foreground shadow-none ring-0"
        align="start"
        side="bottom"
        sideOffset={0}
        preventScroll
      >
        <nav aria-label="Main" class="wrap flex min-h-full flex-col gap-10 py-8">
          <ul class="flex flex-col gap-5">
            {#each navLinks as { title, href } (href)}
              <li>
                <a
                  {href}
                  aria-current={isCurrent(href) ? 'page' : undefined}
                  class={cn(
                    'font-display text-[2.5rem] leading-none font-medium tracking-[-0.025em] aria-[current=page]:underline aria-[current=page]:decoration-primary aria-[current=page]:decoration-2 aria-[current=page]:underline-offset-8 active:opacity-60',
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
            <Button href="/contact" variant="outline" size="lg" onclick={() => (mobileMenuOpen = false)}>Contact</Button>
          </div>
        </nav>
      </Popover.Content>
    </Popover.Root>
  </div>
</header>
