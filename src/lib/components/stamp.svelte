<script lang="ts">
  import Logo from '#lib/assets/logo.svelte';

  interface Props {
    text?: string;
    class?: string;
  }

  let {
    text = 'Livingood Wellness Center · Hudson, Massachusetts · By appointment · ',
    class: className
  }: Props = $props();

  const pathId = $props.id();
</script>

<div class={['relative grid place-items-center', className]} aria-hidden="true">
  <svg
    viewBox="0 0 200 200"
    class="size-full animate-[spin_60s_linear_infinite] motion-reduce:animate-none"
  >
    <defs>
      <path id={pathId} d="M100,100 m-82,0 a82,82 0 1,1 164,0 a82,82 0 1,1 -164,0" />
    </defs>
    <text class="fill-current font-mono text-[12.5px] uppercase tracking-[0.22em]">
      <textPath href="#{pathId}">{text}</textPath>
    </text>
  </svg>
  <Logo class="absolute size-[42%]" />
</div>
