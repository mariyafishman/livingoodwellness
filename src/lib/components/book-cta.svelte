<script lang="ts">
  import { Button } from '#lib/components/ui/button/index.ts';
  import CalendarIcon from '@lucide/svelte/icons/calendar-check';
  import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
  import { site, isExternal } from '#lib/config/site.ts';

  /**
   * The pair of actions that appears on every page: book (MassageBook) and
   * a link to the contact page. `tone` picks the button colours for the band it sits on.
   */
  interface Props {
    tone?: 'onPine' | 'onLight' | 'onButter' | 'onLeaf';
    class?: string;
  }

  let { tone = 'onLight', class: className }: Props = $props();

  const bookVariant = $derived(tone === 'onButter' || tone === 'onLight' ? 'default' : 'secondary');
  const external = isExternal(site.bookingUrl);
</script>

<div class={['flex flex-wrap gap-3', className]}>
  <Button variant={bookVariant} size="lg" href={site.bookingUrl} target={external ? '_blank' : undefined}>
    <CalendarIcon data-icon="inline-start" />
    Book a session
  </Button>
  <Button variant="outline" size="lg" href="/contact">
    Contact
    <ArrowRightIcon data-icon="inline-end" />
  </Button>
</div>
