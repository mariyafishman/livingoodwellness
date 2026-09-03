<script lang="ts">
  import { resolve } from '$app/paths';
  import type { Direction } from './content';
  let { direction, name, width, scale, dark }: { direction: Direction; name: string; width: number; scale: number; dark: boolean } = $props();
  let height = $state(800);

  function observeFrame(frame: HTMLIFrameElement, isDark: boolean) {
    let observer: ResizeObserver | undefined;
    function connect() {
      observer?.disconnect();
      const doc = frame.contentDocument;
      if (!doc?.body) return;
      doc.documentElement.classList.toggle('dark', isDark);
      doc.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
      const measure = () => { height = Math.ceil(doc.body.getBoundingClientRect().height); };
      observer = new ResizeObserver(measure);
      observer.observe(doc.body);
      void doc.fonts.ready.then(measure);
      measure();
    }
    frame.addEventListener('load', connect);
    if (frame.contentDocument?.readyState === 'complete') connect();
    return () => { frame.removeEventListener('load', connect); observer?.disconnect(); };
  }
</script>

<div class="artboard" style:width={`${width * scale}px`}>
  <div class="artboard-label"><span>{name} / {width === 390 ? 'Mobile' : 'Desktop'}</span><span>{width} px</span></div>
  <div class="artboard-surface" style:width={`${width * scale}px`} style:height={`${height * scale}px`}>
    <iframe title={`${name} ${width === 390 ? 'mobile' : 'desktop'} home page`} src={resolve('/concepts/[direction]', { direction })} {width} {height} style:transform={`scale(${scale})`} {@attach (frame) => observeFrame(frame, dark)}></iframe>
  </div>
</div>

<style>
  .artboard { flex: 0 0 auto; }
  .artboard-label { display: flex; align-items: center; justify-content: space-between; gap: 10px; color: var(--canvas-muted); font-size: 10px; margin-bottom: 14px; white-space: nowrap; }
  .artboard-surface { background: var(--canvas-paper); box-shadow: 0 10px 35px var(--canvas-shadow); }
  iframe { display: block; border: 0; transform-origin: top left; background: var(--canvas-paper); }
</style>
