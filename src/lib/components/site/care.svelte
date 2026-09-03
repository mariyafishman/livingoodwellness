<script lang="ts">
 import { resolve } from '$app/paths';
 import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';
 let { onServices = false }: { onServices?: boolean } = $props();
 import { modalities } from '#lib/config/content.js';
</script>
    <section id="care" class="care-section section-space">
      <div class="section-intro">
        <p class="eyebrow">01 / The care</p>
        <h2>Care for the<br />life you <em>live.</em></h2>
        <p>For seniors, athletes, children and parents. For chronic pain, post-injury recovery, or simply a little time to relax.</p>
        <a href={onServices ? '#sessions' : resolve('/services')} class="text-link">Find your session <ArrowUpRight size={18} /></a>
        
      </div>
      <div class="modality-list">
        {#each modalities as modality, i (modality.name)}
          <div class="modality"><span class="modality-number">0{i + 1}</span><div><h3>{modality.name}</h3><p>{modality.detail}</p></div><span class="modality-mark" aria-hidden="true">✳</span></div>
        {/each}
      </div>
    </section>

