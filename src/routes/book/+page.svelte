<script lang="ts">
  import { resolve } from '$app/paths';
  import { Button } from '#lib/components/ui/button/index.js';
  import Logo from '#lib/assets/logo.svelte';
  import { site } from '#lib/config/site.js';
  import { hours, visits } from '#lib/design/content.js';
</script>
<svelte:head><title>Book a session — Livingood Wellness Center</title><meta name="robots" content="noindex" /></svelte:head>
<main class="concept-page booking-page" data-direction="fieldnotes">
  <a class="booking-brand" href={resolve('/')}><Logo /><span>Livingood Wellness Center</span></a>
  <p class="eyebrow">Massage therapy in Hudson, Massachusetts</p>
  <h1>Book a <em>session.</em></h1>
  <div class="booking-steps">{#each visits as step (step.title)}<section><h2>{step.title}</h2><p>{step.text}</p></section>{/each}</div>
  {#if site.bookingUrl}
    <Button variant="practice" size="practice" href={site.bookingUrl} target="_blank" rel="noreferrer">Continue to MassageBook ↗</Button>
  {:else}
    <p class="booking-status">Online booking is coming soon. Please call or text Mariya to arrange your visit.</p>
  {/if}
  <a class="text-link booking-phone" href={site.phoneHref}>Call {site.phone} ↗</a>
  <a class="text-link" href="sms:+19784936171">Text Mariya ↗</a>
  <div class="booking-location"><p>{site.address}<br />Quiet home studio · By appointment only</p><dl>{#each hours as [day,time] (day)}<div><dt>{day}</dt><dd>{time}</dd></div>{/each}</dl></div>
  <a class="text-link" href={resolve('/')}>← Back to the design canvas</a>
</main>
<style>
  .booking-page { min-height: 100vh; padding: 55px max(24px, calc((100vw - 920px)/2)); }
  .booking-brand { display: flex; align-items: center; gap: 12px; font-size: 15px; margin-bottom: 70px; }
  .booking-brand :global(svg) { width: 48px; }
  h1 { font-size: clamp(56px, 8vw, 95px) !important; }
  .booking-steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 35px; margin: 45px 0; }
  .booking-steps h2 { font-size: 26px; margin-bottom: 18px; }
  .booking-steps p, .booking-status { font-size: 15px; }
  .booking-status { background: var(--surface); padding: 22px; margin-bottom: 20px; }
  .booking-phone { margin-right: 32px; }
  .booking-location { border-top: 1px solid var(--line); padding-top: 35px; display: grid; grid-template-columns: 1fr 1fr; gap: 35px; margin: 45px 0; font-size: 14px; }
  dl { margin: 0; } dl div { display: flex; justify-content: space-between; gap: 20px; margin-bottom: 12px; }
  @media(max-width:700px) { .booking-steps, .booking-location { grid-template-columns: 1fr; } }
</style>

