<script lang="ts">
  import { resolve } from '$app/paths';
  import { Button } from '#lib/components/ui/button/index.js';
  import * as ToggleGroup from '#lib/components/ui/toggle-group/index.js';
  import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';
  import Moon from '@lucide/svelte/icons/moon';
  import Sun from '@lucide/svelte/icons/sun';
  import Artboard from '#lib/design/Artboard.svelte';
  import Logo from '#lib/assets/logo.svelte';
  import { directions, references } from '#lib/design/content.js';

  let filter = $state('all');
  let zoom = $state('fit');
  let canvasWidth = $state(1280);
  let dark = $state(false);
  let scale = $derived(zoom === 'fit' ? Math.min(.7, Math.max(.18, (canvasWidth - 56) / 1874)) : Number(zoom));
  let shown = $derived(filter === 'all' || !filter ? directions : directions.filter(item => item.id === filter));

  function measureCanvas(node: HTMLElement) {
    const observer = new ResizeObserver(([entry]) => { canvasWidth = entry.contentRect.width; });
    observer.observe(node);
    return () => observer.disconnect();
  }
  function toggleTheme() {
    dark = !dark;
    document.documentElement.classList.toggle('dark', dark);
    document.documentElement.style.colorScheme = dark ? 'dark' : 'light';
  }
</script>

<svelte:head><title>Three ways to find your balance — Livingood Wellness Center</title><meta name="robots" content="noindex" /></svelte:head>

<div class="design-canvas">
  <header class="canvas-header"><a href="#canvas-top" class="canvas-brand"><Logo /><span>Livingood <small>WELLNESS CENTER</small></span></a><span class="canvas-title">Home page explorations <span> / </span> September 2026</span><span class="canvas-status">Three directions. One practice.</span></header>
  <div class="canvas-introduction" id="canvas-top"><div><p class="canvas-eyebrow">A PERSONAL PRACTICE. A DISTINCTIVE PRESENCE.</p><h1>Three ways to find your balance.</h1></div><p>Same story, three personalities.<br />Explore the full desktop and mobile pages, then choose the one that feels like Mariya.</p></div>
  <div class="canvas-toolbar"><div class="direction-picker"><ToggleGroup.Root type="single" bind:value={filter} aria-label="Design direction"><ToggleGroup.Item value="all">All directions</ToggleGroup.Item>{#each directions as direction (direction.id)}<ToggleGroup.Item value={direction.id}>{direction.number} <span>{direction.name}</span></ToggleGroup.Item>{/each}</ToggleGroup.Root></div><div class="canvas-tools"><label for="zoom">Zoom</label><select id="zoom" bind:value={zoom}><option value="fit">Fit pair</option><option value="0.35">35%</option><option value="0.5">50%</option><option value="0.75">75%</option><option value="1">100%</option></select><Button variant="ghost" size="icon-lg" aria-label={dark ? 'Show light palettes' : 'Show dark palettes'} onclick={toggleTheme}>{#if dark}<Sun />{:else}<Moon />{/if}</Button></div></div>
  <main class="canvas-workspace" {@attach measureCanvas}>
    {#each shown as direction (direction.id)}
      <section class="direction-group" id={direction.id} aria-labelledby={`${direction.id}-title`}>
        <div class="direction-description" data-direction={direction.id}>
          <div class="direction-name"><span class="direction-number">{direction.number}</span><div><h2 id={`${direction.id}-title`}>{direction.name}</h2><p>{direction.mood}</p></div><Logo variant={direction.id} /></div>
          <p class="direction-note">{direction.note}</p>
          <dl class="direction-tokens"><div><dt>Palette</dt><dd><span class="swatches"><i></i><i></i><i></i></span>{direction.palette}</dd></div><div><dt>Type</dt><dd>{direction.type}</dd></div><div><dt>Rhythm</dt><dd>{direction.rhythm}</dd></div></dl>
          <a class="open-concept" href={resolve('/concepts/[direction]', { direction: direction.id })} target="_blank" rel="noreferrer">Open full size <ArrowUpRight size={16} /></a>
        </div>
        <div class="artboard-scroll"><div class="artboard-pair"><Artboard direction={direction.id} name={direction.name} width={1440} {scale} {dark} /><Artboard direction={direction.id} name={direction.name} width={390} {scale} {dark} /></div></div>
      </section>
    {/each}
  </main>
  <footer class="canvas-research"><div><p class="canvas-eyebrow">RESEARCH & DESIGN NOTES</p><h2>Human first. Clear by design.</h2><p>Studied across 11 Mobbin searches: healthcare, wellness, beauty, spa, and independent service brands. The common thread is a visible person, expressive type, clear rates, and one easy next step.</p><p>Client testimonials were not supplied; the quote is Mariya’s own. All prices are the provided draft. Each butterfly is an original placeholder.</p></div><div class="reference-list">{#each references as reference (reference.url)}<a href={reference.url} target="_blank" rel="noreferrer"><strong>{reference.name} ↗</strong><span>{reference.focus}</span></a>{/each}</div><div class="photo-credits">Photography: Mariya’s supplied portrait · <a href="https://www.pexels.com/photo/hands-clenched-on-a-naked-arm-10853733/" target="_blank" rel="noreferrer">Therapeutic touch, Julia Kondratovskaya / Pexels</a> · <a href="https://unsplash.com/photos/green-leaves-on-tree-branches-with-sunlight-AqheXWT-08E" target="_blank" rel="noreferrer">Sunlit leaves / Unsplash</a></div></footer>
</div>
