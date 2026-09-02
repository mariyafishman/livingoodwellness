<script lang="ts">
  import { Button } from '#lib/components/ui/button/index.ts';
  import { site, isExternal } from '#lib/config/site.ts';
  import PhoneIcon from '@lucide/svelte/icons/phone';
  import MessageSquareIcon from '@lucide/svelte/icons/message-square';

  interface Props {
    title?: string;
    lede?: string;
    class?: string;
  }

  let {
    title = 'Ready when you are.',
    lede = 'Book online, or call or text Mariya directly. Sessions are by appointment in her home studio in Hudson.',
    class: className
  }: Props = $props();

  const external = isExternal(site.bookingUrl);
</script>

<section class={['rule-strong py-14 md:py-20', className]}>
  <div class="grid gap-8 md:grid-cols-12 md:gap-6">
    <div class="md:col-span-7">
      <h2 class="text-5xl sm:text-6xl md:text-7xl">{title}</h2>
      <p class="mt-5 max-w-prose text-lg text-muted-foreground">{lede}</p>
    </div>
    <div class="flex flex-col gap-3 md:col-span-5 md:items-end">
      <Button
        href={site.bookingUrl}
        size="lg"
        class="h-14 w-full px-8 text-base md:w-auto"
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener' : undefined}
      >
        Book a session
      </Button>
      <div class="flex w-full gap-3 md:w-auto">
        <Button href={site.phoneHref} variant="outline" size="lg" class="h-14 flex-1 px-6 text-base md:flex-none">
          <PhoneIcon class="size-5" /> Call
        </Button>
        <Button href={site.smsHref} variant="outline" size="lg" class="h-14 flex-1 px-6 text-base md:flex-none">
          <MessageSquareIcon class="size-5" /> Text
        </Button>
      </div>
      <p class="font-mono text-sm text-muted-foreground">{site.phone} · {site.hoursSummary}</p>
    </div>
  </div>
</section>
