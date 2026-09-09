<script lang="ts">
  import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
  import { massage } from '#lib/config/site.ts';
  import { cn } from '#lib/utils.ts';

  /**
   * The three massage "stamps": peach, lilac, green. Each card is one link
   * to the book page.
   */
  const tones = [
    'bg-warm text-warm-foreground',
    'bg-accent text-accent-foreground',
    'bg-primary text-primary-foreground'
  ];

  const focusRing =
    'outline-none focus-visible:ring-3 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background';
</script>

<ul class="grid gap-3 md:grid-cols-3 md:gap-5">
  {#each massage.sessions as { duration, price }, i (duration)}
    {@const minutes = duration.replace(/\D/g, '')}
    <li class="flex">
      <a
        href="/book"
        class={cn(
          'group flex w-full flex-col rounded-[1rem] p-5 transition-opacity hover:opacity-90 md:rounded-lg md:px-8 md:pt-7 md:pb-6',
          tones[i % tones.length],
          focusRing
        )}
      >
        <span class="flex items-center justify-between text-xs font-medium md:text-[0.8125rem]">
          Massage therapy
          <ArrowRightIcon class="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
        <span
          class="mt-5 font-display text-[3.75rem] leading-none font-extrabold tracking-[-0.05em] md:mt-9 md:text-[6rem]"
        >
          {minutes}<span
            class="ml-2 font-sans text-[0.8125rem] font-medium tracking-normal md:ml-2.5 md:text-[0.9375rem]"
          >
            minutes
          </span>
        </span>
        <span class="mt-4 flex items-baseline justify-between border-t border-current pt-3 md:mt-7 md:pt-4">
          <span class="font-display text-[1.625rem] font-extrabold tracking-[-0.03em] md:text-[2rem]">{price}</span>
          <span class="text-xs font-medium underline-offset-4 group-hover:underline md:text-[0.8125rem]">
            Book your time &rarr;
          </span>
        </span>
      </a>
    </li>
  {/each}
</ul>
