<script lang="ts">
 import Seo from '#lib/components/seo.svelte';
 import Logo from '#lib/assets/logo.svelte';
 import Portrait from '#lib/components/site/portrait.svelte';
 import VisitPanel from '#lib/components/site/visit-panel.svelte';
</script>
<Seo title="Meet Mariya Fishman" description="Meet Mariya Fishman, a Licensed Massage Therapist with over 30 years of experience. Personal, hands-on care from her quiet home studio in Hudson, MA." />
<section class="about-hero page-hero section-space">
 <div><p class="eyebrow">The person behind the practice</p><h1>Hi, I’m<br /><em>Mariya.</em></h1><p class="page-lead">A massage therapist for more than thirty years.<br />And I love my work.</p><div class="credential">Mariya Fishman<br /><span>Licensed Massage Therapist</span></div></div>
 <div class="about-portrait"><Portrait class="mariya-portrait" eager /><div class="bio-butterfly"><Logo /></div></div>
</section>
<section class="story-section section-space">
 <div class="story-aside"><p class="eyebrow">My story</p><h2>Finding the work<br />I was <em>meant to do.</em></h2></div>
 <div class="prose"><p>I have been a massage therapist for more than thirty years. Before that I was a mechanical engineer, and before that I was a girl in Belarus who wanted to be a doctor. When I came to America I trained at the Muscular Therapy Institute in Cambridge and found the work I was meant to do: helping people feel at home in their bodies.</p><p>Seven years ago I fell and broke my leg, my wrist and my back. For a long time I could not work. What brought me back was patient hands-on care. That experience is part of what I bring to my work today.</p><p>I love my work.</p></div>
</section>
<section class="about-quote"><Logo /><blockquote>“Helping people feel<br />at home in their bodies.”</blockquote><p>— Mariya</p></section>
<section class="story-section section-space"><div class="story-aside"><p class="eyebrow">Who I work with</p><h2>From newborns to<br /><em>great-grandparents.</em></h2></div><div class="prose"><p>Everyone from newborns to great-grandparents. My favorite clients are seniors who want to keep moving comfortably, athletes who want to recover faster and play longer, and parents who want to learn how to massage their babies.</p><p>Every year I volunteer on the massage team at the Pan-Mass Challenge, working with cancer survivors.</p></div></section>
<section class="meaning-panel section-space"><div><p class="eyebrow">What “Livingood” means</p><h2>A reminder to<br /><em>live well.</em></h2></div><div class="prose"><p>The name is a reminder to live well, in balance: a healthy body, good food, and a clear mind. That balance is what I try to bring to every session.</p><p>Sessions are by appointment in my quiet home studio in Hudson, Massachusetts.</p></div></section>
<VisitPanel />
