<script lang="ts">
 import { resolve } from '$app/paths';
 import { Button } from '#lib/components/ui/button/index.js';
 import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';
 import Logo from '#lib/assets/logo.svelte';
 import { site, hours } from '#lib/config/site.js';
 const book = resolve('/book');
</script>
    <section id="visit" class="contact-section section-space">
      <div class="contact-invitation"><p class="eyebrow">A quiet home studio in Hudson, MA</p><h2>A good place<br />to <em>begin.</em></h2><Button href={book}>Book a session <ArrowUpRight data-icon="inline-end" /></Button><p>Prefer to talk?<br /><a class="phone-link" href={site.phoneHref}>{site.phone}</a><br /><a class="text-link" href={site.textHref}>Text Mariya <ArrowUpRight size={18} /></a></p></div>
      <div class="contact-details"><div class="address-block"><Logo /><h3>Come on over.</h3><address>157 Marlboro Street<br />Hudson, MA 01749</address><p>A private home with a dedicated studio.<br />By appointment only.</p><a class="text-link" href={site.directionsUrl} target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={18} /></a></div><div class="hours-block"><h3>Studio hours</h3><dl>{#each hours as [day, time] (day)}<div><dt>{day}</dt><dd>{time}</dd></div>{/each}</dl><a class="email-link" href={`mailto:${site.email}`}>{site.email}</a></div></div>
    </section>
