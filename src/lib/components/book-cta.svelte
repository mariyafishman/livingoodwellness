<script lang="ts">
  import { Button } from '#lib/components/ui/button/index.ts';
  import PhoneIcon from '@lucide/svelte/icons/phone';
  import CalendarIcon from '@lucide/svelte/icons/calendar-check';
  import { site, isExternal } from '#lib/config/site.ts';

  /**
   * The pair of actions that appears on every page: book (MassageBook) and
   * call/text. `tone` picks the button colours for the band it sits on.
   */
  interface Props {
    tone?: 'onPine' | 'onLight' | 'onButter' | 'onLeaf';
    class?: string;
  }

  let { tone = 'onLight', class: className }: Props = $props();

  const bookVariant = $derived(tone === 'onButter' ? 'default' : 'secondary');
  const external = isExternal(site.bookingUrl);
</script>

<div class={['flex flex-wrap gap-3', className]}>
  <Button variant={bookVariant} size="lg" href={site.bookingUrl} target={external ? '_blank' : undefined}>
    <CalendarIcon data-icon="inline-start" />
    Book a session
  </Button>
  <Button variant="outline" size="lg" href={site.phoneHref}>
    <PhoneIcon data-icon="inline-start" />
    Call or text {site.phone}
  </Button>
</div>
