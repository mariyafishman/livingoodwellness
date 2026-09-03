<script lang="ts">
  import { mode, toggleMode } from 'mode-watcher';
  import { Button } from '#lib/components/ui/button/index.js';
  import Wordmark from '#lib/components/wordmark.svelte';
  import { site } from '#lib/config/site.js';
  import Sun from '@lucide/svelte/icons/sun';
  import Moon from '@lucide/svelte/icons/moon';
</script>
<footer class="practice-footer">
  <div class="footer-main"><Wordmark /><p>Find your balance.</p><a class="text-link" href="#top">Back to the top ↑</a></div>
  <div class="footer-contact"><address>{site.street}, {site.locality}</address><a href={site.phoneHref}>{site.phone}</a><p>Mon, Wed, Fri 9–7 · Tue, Thu 2–7 · Sat by appointment · Sun closed</p></div>
  <div class="footer-fine"><span>© {new Date().getFullYear()} {site.name}</span><span>Licensed Massage Therapist, MA License #____</span><span>By appointment only</span>
    <Button variant="outline" size="sm" onclick={toggleMode} aria-label={mode.current === 'dark' ? 'Use light theme' : 'Use dark theme'}>
      {#if mode.current === 'dark'}<Sun data-icon="inline-start" /> Light{:else}<Moon data-icon="inline-start" /> Dark{/if}
    </Button>
  </div>
</footer>
