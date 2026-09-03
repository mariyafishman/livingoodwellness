<script lang="ts">
  interface Props {
    eyebrow: string;
    title: string;
    intro: string;
  }

  let { eyebrow, title, intro }: Props = $props();
</script>

<section class="wrap grid grid-cols-1 gap-6 pt-6 pb-12 lg:grid-cols-12 lg:items-end lg:gap-8 lg:pt-14 lg:pb-18">
  <div class="flex flex-col gap-4 lg:col-span-7 lg:gap-5">
    <p class="eyebrow">{eyebrow}</p>
    <h1 class="text-[52px] leading-none tracking-[-0.02em] lg:text-h1">{title}</h1>
  </div>
  <p class="text-body text-muted-foreground lg:col-span-4 lg:col-start-9 lg:text-[19px] lg:leading-normal">{intro}</p>
</section>
