<script lang="ts">
 import { resolve } from '$app/paths';
 import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';
 const book = resolve('/book');
</script>
    <section class="bemer-section" aria-labelledby="bemer-title">
      <div class="bemer-symbol" aria-hidden="true"><span></span><span></span><span></span></div>
      <div class="bemer-copy"><p class="eyebrow">Also at the studio</p><h2 id="bemer-title">Bemer circulation sessions</h2><p>A pulsed electromagnetic (PEMF) session that temporarily improves local blood circulation and supports muscle recovery.</p><p class="disclaimer">BEMER is not intended to diagnose, treat, cure or prevent any disease. Individual results vary.</p></div>
      <div class="bemer-action"><strong>$250 <span>/ 30 min</span></strong><a href={book} class="text-link">Book a session <ArrowUpRight size={18} /></a></div>
    </section>

