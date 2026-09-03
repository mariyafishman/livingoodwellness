<script lang="ts">
  /**
   * Stands in for a stock photo that has not been chosen yet: a tint panel with the
   * line-drawn frond from the canvas and a small label saying what belongs there.
   */
  import type { ClassValue } from 'svelte/elements';

  interface Props {
    label: string;
    class?: ClassValue;
  }

  let { label, class: className }: Props = $props();
</script>

<div class={['relative flex items-center justify-center overflow-hidden rounded-md bg-tint text-tint-foreground', className]}>
  <svg
    class="h-[60%] w-auto opacity-55"
    viewBox="0 0 200 260"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M100 250 C 100 180, 100 110, 100 20" />
    <path d="M100 60 C 80 50, 60 52, 44 66 C 66 70, 86 70, 100 60" />
    <path d="M100 60 C 120 50, 140 52, 156 66 C 134 70, 114 70, 100 60" />
    <path d="M100 100 C 76 88, 52 90, 34 108 C 60 112, 84 112, 100 100" />
    <path d="M100 100 C 124 88, 148 90, 166 108 C 140 112, 116 112, 100 100" />
    <path d="M100 142 C 74 130, 46 134, 28 154 C 56 158, 82 156, 100 142" />
    <path d="M100 142 C 126 130, 154 134, 172 154 C 144 158, 118 156, 100 142" />
    <path d="M100 186 C 78 176, 54 180, 40 198 C 64 200, 86 198, 100 186" />
    <path d="M100 186 C 122 176, 146 180, 160 198 C 136 200, 114 198, 100 186" />
  </svg>
  <span class="absolute top-3 right-3.5 rounded-md bg-background px-2.5 py-1.5 text-xs tracking-[0.08em] uppercase">
    {label}
  </span>
</div>
