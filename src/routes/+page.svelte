<script lang="ts">
 import { resolve } from '$app/paths';
 import { Button } from '#lib/components/ui/button/index.js';
 import Seo from '#lib/components/seo.svelte';
 import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';
 import ArrowRight from '@lucide/svelte/icons/arrow-right';
 import Logo from '#lib/assets/logo.svelte';
 import Portrait from '#lib/components/site/portrait.svelte';
 import Care from '#lib/components/site/care.svelte';
 import SessionRates from '#lib/components/site/session-rates.svelte';
 import MariyaIntro from '#lib/components/site/mariya-intro.svelte';
 import Bemer from '#lib/components/site/bemer.svelte';
 import VisitSteps from '#lib/components/site/visit-steps.svelte';
 import VisitPanel from '#lib/components/site/visit-panel.svelte';
</script>
<Seo title="Massage therapy in Hudson, MA" />
<section class="hero opening" aria-label="Welcome to Livingood">
 <div class="hero-copy">
  <p class="eyebrow">Massage therapy · Hudson, Massachusetts</p>
  <h1>Find your <em>balance.</em></h1>
  <p class="hero-description">Over 30 years of experience with seniors, athletes, children and everyone in between.</p>
  <div class="hero-actions"><Button href={resolve('/book')}>Book a session <ArrowUpRight data-icon="inline-end" /></Button><a href={resolve('/about')} class="text-link">Meet Mariya <ArrowRight size={18} /></a></div>
  <p class="hero-footnote">One therapist. A quiet home studio. Time for you.</p>
 </div>
 <div class="company-collage"><div class="company-shape"></div><Portrait class="hero-portrait" eager /><div class="hello-note">Hello, I’m Mariya.</div><div class="company-butterfly"><Logo /></div><span class="portrait-caption">Your therapist, every time.</span></div>
</section>
<div class="care-ribbon"><span>For every stage of life.</span><Logo /><span>For the way you move.</span><Logo /><span>For a little more balance.</span></div>
<Care /><SessionRates /><MariyaIntro /><Bemer /><VisitSteps /><VisitPanel />
