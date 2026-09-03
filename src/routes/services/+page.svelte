<script lang="ts">
 import { resolve } from '$app/paths';
 import Seo from '#lib/components/seo.svelte';
 import { Button } from '#lib/components/ui/button/index.js';
 import Logo from '#lib/assets/logo.svelte';
 import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';
 import Care from '#lib/components/site/care.svelte';
 import SessionRates from '#lib/components/site/session-rates.svelte';
 import Bemer from '#lib/components/site/bemer.svelte';
 import VisitPanel from '#lib/components/site/visit-panel.svelte';
</script>
<Seo title="Services & rates" description="Massage with Mariya in Hudson: 60 minutes $90, 90 minutes $120, or 120 minutes $160. Explore six-session packages, membership and Bemer sessions." />
<section class="page-hero section-space">
 <div><p class="eyebrow">Sessions & rates · Hudson, MA</p><h1>Make a little<br /><em>room for you.</em></h1><p class="page-lead">Massage therapy with Mariya. For your active days, your recovery days, and the days you just need to slow down.</p><Button href={resolve('/book')}>Book a session <ArrowUpRight data-icon="inline-end" /></Button></div>
 <div class="service-emblem" aria-hidden="true"><Logo /><span>Care at<br /><em>your pace.</em></span></div>
</section>
<Care onServices /><SessionRates /><Bemer />
<section class="good-to-know section-space"><p class="eyebrow">Good to know</p><div class="three-notes"><div><h2>A quiet place.</h2><p>Sessions are by appointment in a dedicated studio in Mariya’s home in Hudson.</p></div><div><h2>A little about you.</h2><p>New clients receive a short intake form from MassageBook after booking.</p></div><div><h2>Pay your way.</h2><p>Pay online when booking, or in person with cash, Venmo or card. Packages and membership are purchased on MassageBook.</p></div></div></section>
<VisitPanel />
