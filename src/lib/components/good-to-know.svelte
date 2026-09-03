<script lang="ts">
  import { goodToKnow } from '#lib/config/services.ts';
</script>

<section class="bg-secondary" aria-labelledby="good-to-know-heading">
  <div class="wrap flex flex-col gap-8 py-14 lg:gap-12 lg:py-28">
    <h2 id="good-to-know-heading" class="eyebrow">Good to know</h2>
    <ol class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
      {#each goodToKnow as { title, body }, i (title)}
        <li class="flex flex-col gap-3 border-t border-border pt-6">
          <span class="font-serif text-[22px] text-eyebrow" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
          <h3 class="font-sans text-[19px] font-medium text-foreground">{title}</h3>
          <p class="text-base leading-relaxed text-muted-foreground">{body}</p>
        </li>
      {/each}
    </ol>
  </div>
</section>
