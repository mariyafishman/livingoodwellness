<script lang="ts">
 import Seo from '#lib/components/seo.svelte';
 import { Button } from '#lib/components/ui/button/index.js';
 import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';
 import Logo from '#lib/assets/logo.svelte';
 import { site, hours } from '#lib/config/site.js';
 import VisitSteps from '#lib/components/site/visit-steps.svelte';
</script>
<Seo title="Book a session" description="Book massage therapy with Mariya Fishman in Hudson, MA. Choose a service and time on MassageBook, or call or text 978-493-6171." />
<section class="booking-hero page-hero section-space">
 <div><p class="eyebrow">A little time, all for you</p><h1>Book a<br /><em>session.</em></h1><p class="page-lead">Choose a service and a time. Mariya will take it from there.</p><p class="quiet-note">By appointment only · Hudson, Massachusetts</p></div>
 <div class="booking-card"><Logo /><h2>Let’s find<br /><em>your time.</em></h2>
 {#if site.bookingUrl}
  <p>Continue to MassageBook to choose your appointment. You can also purchase packages and membership there.</p>
  <Button href={site.bookingUrl} target="_blank" rel="noreferrer">Continue to MassageBook <ArrowUpRight data-icon="inline-end" /></Button>
  <p class="quiet-note">Opens MassageBook in a new tab.</p>
 {:else}
  <p>Online booking is coming soon. For now, call or text Mariya to arrange your session.</p>
  <Button disabled aria-describedby="booking-note">MassageBook coming soon</Button>
  <p id="booking-note" class="quiet-note">Please book directly with Mariya below.</p>
 {/if}
 <div class="booking-alternative"><p>Prefer to talk?</p><a class="phone-link" href={site.phoneHref}>{site.phone}</a><div class="inline-links"><a class="text-link" href={site.phoneHref}>Call Mariya <ArrowUpRight size={16} /></a><a class="text-link" href={site.textHref}>Text Mariya <ArrowUpRight size={16} /></a></div></div>
 </div>
</section>
<VisitSteps onBook />
<section class="booking-details section-space"><div><p class="eyebrow">Your visit</p><h2>A quiet<br /><em>home studio.</em></h2><address>{site.street}<br />{site.locality}</address><p>A private home with a dedicated studio.<br />By appointment only.</p><a class="text-link" href={site.directionsUrl} target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={18} /></a></div><div class="hours-block"><h2>Studio hours</h2><dl>{#each hours as [day,time] (day)}<div><dt>{day}</dt><dd>{time}</dd></div>{/each}</dl><p>Pay online when booking or in person with cash, Venmo or card. Receipts are provided for insurance reimbursement or HSA/FSA.</p></div></section>
