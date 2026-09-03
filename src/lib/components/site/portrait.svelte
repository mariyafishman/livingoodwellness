<script lang="ts">
 import Logo from '#lib/assets/logo.svelte';
 let { class: className = '', eager = false }: { class?: string; eager?: boolean } = $props();
 let failed = $state(false);
 const portraits = import.meta.glob<string>('/src/lib/assets/mariya.jpg', { eager: true, query: '?url', import: 'default' });
 const portrait = portraits['/src/lib/assets/mariya.jpg'];
</script>
<div class={className}>
 {#if portrait && !failed}
  <img src={portrait} alt="Mariya Fishman, Licensed Massage Therapist" width="1200" height="1600" loading={eager ? 'eager' : 'lazy'} fetchpriority={eager ? 'high' : 'auto'} onerror={() => failed = true} />
 {:else}
  <div class="portrait-fallback"><Logo /><span>Mariya Fishman</span><small>Licensed Massage Therapist</small></div>
 {/if}
</div>
