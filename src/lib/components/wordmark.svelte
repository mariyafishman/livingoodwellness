<script lang="ts">
  import Logo from '#lib/assets/logo.svelte';

  interface Props {
    class?: string;
    /** Larger mark and type, used in the footer. */
    size?: 'default' | 'lg';
  }

  let { class: className, size = 'default' }: Props = $props();
</script>

<span class={['inline-flex items-center', size === 'lg' ? 'gap-3' : 'gap-2.5', className]}>
  <Logo class={size === 'lg' ? 'size-12 shrink-0 text-primary' : 'size-9 shrink-0 text-primary'} decorative />
  <span class="flex flex-col leading-none">
    <span
      class={[
        'font-serif font-semibold tracking-tight text-foreground',
        size === 'lg' ? 'text-2xl' : 'text-xl'
      ]}
    >
      Livingood
    </span>
    <span
      class={[
        'mt-1 font-medium tracking-[0.18em] whitespace-nowrap text-muted-foreground uppercase',
        size === 'lg' ? 'text-xs' : 'text-[0.66rem]'
      ]}
    >
      Wellness Center
    </span>
  </span>
</span>
