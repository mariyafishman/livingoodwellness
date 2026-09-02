<script lang="ts">
  import { Button } from '#lib/components/ui/button/index.ts';
  import Logo from '#lib/assets/logo.svelte';
  import PhoneIcon from '@lucide/svelte/icons/phone';
  import MessageIcon from '@lucide/svelte/icons/message-circle';
  import { site } from '#lib/config/site.ts';

  interface Props {
    title?: string;
    text?: string;
  }

  let {
    title = 'Ready to find your balance?',
    text = `Book online, or call or text Mariya at ${site.phone}. Sessions are by appointment in Hudson, MA.`
  }: Props = $props();
</script>

<section class="container-page py-12 sm:py-16" aria-labelledby="cta-heading">
  <div
    class="relative overflow-hidden rounded-3xl bg-primary px-6 py-12 text-primary-foreground sm:px-12 sm:py-16"
  >
    <Logo
      class="pointer-events-none absolute -top-10 -right-10 size-56 text-primary-foreground/10 sm:size-72 [&_path[fill='var(--clay)']]:fill-primary-foreground/10"
      decorative
    />
    <div class="relative flex max-w-2xl flex-col gap-6">
      <h2 id="cta-heading" class="text-3xl sm:text-4xl">{title}</h2>
      <p class="text-lg text-primary-foreground/85">{text}</p>
      <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button
          href={site.bookingUrl}
          size="lg"
          class="bg-background text-foreground hover:bg-background/90"
        >
          Book a session
        </Button>
        <Button
          href={site.phoneHref}
          size="lg"
          variant="outline"
          class="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
        >
          <PhoneIcon data-icon="inline-start" />
          Call {site.phone}
        </Button>
        <Button
          href={site.smsHref}
          size="lg"
          variant="outline"
          class="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
        >
          <MessageIcon data-icon="inline-start" />
          Text
        </Button>
      </div>
    </div>
  </div>
</section>
