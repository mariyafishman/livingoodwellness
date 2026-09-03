<script lang="ts">
 import { resolve } from '$app/paths';
 import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';
 import { visits } from '#lib/config/content.js';
 const book = resolve('/book');
</script>
    <section class="first-visit section-space" aria-labelledby="first-visit-title">
      <div class="section-heading"><div><p class="eyebrow">04 / Your first visit</p><h2 id="first-visit-title">Let’s keep it <em>simple.</em></h2></div><a href={book} class="text-link">Book a session <ArrowUpRight size={18} /></a></div>
      <div class="visit-steps">{#each visits as step, i (step.title)}<div class="visit-step"><span class="step-number">0{i + 1}</span><h3>{step.title}</h3><p>{step.text}</p></div>{/each}</div>
    </section>

