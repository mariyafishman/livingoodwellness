<script lang="ts">
  import { resolve } from '$app/paths';
  import { page } from '$app/state';
  import { Button } from '#lib/components/ui/button/index.js';
  import Wordmark from '#lib/components/wordmark.svelte';
  import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';
  import Menu from '@lucide/svelte/icons/menu';
  import X from '@lucide/svelte/icons/x';
  let menuOpen = $state(false);
  let menuButton = $state<HTMLButtonElement | null>(null);
  const links = [
    { title: 'The care', href: '/' },
    { title: 'Sessions & rates', href: '/services' },
    { title: 'Meet Mariya', href: '/about' },
    { title: 'Visit', href: '/contact' },
  ] as const;
  function closeWithEscape(event: KeyboardEvent) {
    if (event.key === 'Escape' && menuOpen) {
      menuOpen = false;
      menuButton?.focus();
    }
  }
</script>
<svelte:window onkeydown={closeWithEscape} />
<header class="practice-header">
  <Wordmark />
  <nav class="desktop-nav" aria-label="Main navigation">
    {#each links as link (link.href)}
      <a href={resolve(link.href)} aria-current={page.url.pathname === resolve(link.href) ? 'page' : undefined}>{link.title}</a>
    {/each}
  </nav>
  <div class="header-actions">
    <Button href={resolve('/book')} size="sm" onclick={() => menuOpen = false}>Book a session <ArrowUpRight data-icon="inline-end" /></Button>
    <Button variant="outline" size="icon" class="mobile-menu-button" bind:ref={menuButton} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="mobile-nav" onclick={() => menuOpen = !menuOpen}>
      {#if menuOpen}<X />{:else}<Menu />{/if}
    </Button>
  </div>
</header>
<nav id="mobile-nav" class="mobile-nav" hidden={!menuOpen} aria-label="Mobile navigation">
  {#each links as link (link.href)}
    <a href={resolve(link.href)} aria-current={page.url.pathname === resolve(link.href) ? 'page' : undefined} onclick={() => menuOpen = false}>{link.title}</a>
  {/each}
  <Button href={resolve('/book')} onclick={() => menuOpen = false}>Book a session <ArrowUpRight data-icon="inline-end" /></Button>
</nav>
