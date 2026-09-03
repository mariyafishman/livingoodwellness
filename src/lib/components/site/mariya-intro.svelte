<script lang="ts">
 import { resolve } from '$app/paths';
 import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';
 import Logo from '#lib/assets/logo.svelte';
 import Portrait from './portrait.svelte';
</script>
    <section id="mariya" class="mariya-section section-space">
      <div class="mariya-visual">
        <Portrait class="mariya-portrait" />
        <div class="portrait-label"><span>Mariya Fishman</span><span>Licensed Massage Therapist</span></div>
        <div class="bio-butterfly"><Logo /></div>
      </div>
      <div class="mariya-copy"><p class="eyebrow">03 / The person behind the practice</p><h2>Meet <em>Mariya.</em></h2>
        <blockquote>“Helping people feel<br />at home in their bodies.”</blockquote>
        <p>Mariya Fishman has practiced massage therapy for over 30 years. She works with seniors, athletes, children and everyone in between from her home studio in Hudson, MA, and offers Bemer circulation sessions to support recovery.</p>
        <p>Trained at the Muscular Therapy Institute in Cambridge. A volunteer on the Pan-Mass Challenge massage team, working with cancer survivors.</p>
        <a class="text-link story" href={resolve('/about')}>A little more of my story <ArrowUpRight size={18} /></a>
      </div>
    </section>

