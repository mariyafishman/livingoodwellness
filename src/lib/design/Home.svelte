<script lang="ts">
  import { asset, resolve } from '$app/paths';
  import { Button } from '#lib/components/ui/button/index.js';
  import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';
  import ArrowRight from '@lucide/svelte/icons/arrow-right';
  import Menu from '@lucide/svelte/icons/menu';
  import X from '@lucide/svelte/icons/x';
  import Logo from '#lib/assets/logo.svelte';
  import { site } from '#lib/config/site.js';
  import { modalities, sessions, packages, hours, visits, type Direction } from './content';

  let { variant = 'fieldnotes' }: { variant?: Direction } = $props();
  let menuOpen = $state(false);
  let portraitFailed = $state(false);
  // A missing portrait must not prevent a static build or leave a broken image.
  const portraits = import.meta.glob<string>('/src/lib/assets/mariya.jpg', { eager: true, query: '?url', import: 'default' });
  const portrait = portraits['/src/lib/assets/mariya.jpg'];
  const book = resolve('/book');
</script>

{#snippet portraitImage(className: string, eager = false)}
  <div class={className}>
    {#if portrait && !portraitFailed}
      <img src={portrait} alt="Mariya Fishman, Licensed Massage Therapist" width="1200" height="1600" loading={eager ? 'eager' : 'lazy'} onerror={() => portraitFailed = true} />
    {:else}
      <div class="portrait-fallback"><Logo {variant} /><span>Mariya Fishman</span><small>Licensed Massage Therapist</small></div>
    {/if}
  </div>
{/snippet}

{#snippet brand()}
  <a href="#top" class="wordmark" aria-label="Livingood Wellness Center home">
    <Logo {variant} />
    <span><strong>Livingood</strong><small>Wellness Center</small></span>
  </a>
{/snippet}

{#snippet heroCopy()}
  <div class="hero-copy">
    <p class="eyebrow">Massage therapy · Hudson, Massachusetts</p>
    <h1>Find your <em>balance.</em></h1>
    <p class="hero-description">Over 30 years of experience with seniors, athletes, children and everyone in between.</p>
    <div class="hero-actions">
      <Button variant="practice" size="practice" href={book}>Book a session <ArrowUpRight data-icon="inline-end" /></Button>
      <a href="#mariya" class="text-link">Meet Mariya <ArrowRight size={18} /></a>
    </div>
    <p class="hero-footnote">One therapist. A quiet home studio. Time for you.</p>
  </div>
{/snippet}

<div class="concept-page" data-direction={variant} id="top">
  <a class="skip-link" href="#care">Skip to content</a>
  <div class="opening">
    <header class="practice-header">
      {@render brand()}
      <nav class="desktop-nav" aria-label="Main navigation">
        <a href="#care">The care</a><a href="#sessions">Sessions & rates</a><a href="#mariya">Meet Mariya</a><a href="#visit">Visit</a>
      </nav>
      <div class="header-actions">
        <Button variant="practice" size="practice" href={book}>Book a session <ArrowUpRight data-icon="inline-end" /></Button>
        <Button variant="practiceGhost" size="icon-lg" class="mobile-menu-button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="mobile-nav" onclick={() => menuOpen = !menuOpen}>
          {#if menuOpen}<X />{:else}<Menu />{/if}
        </Button>
      </div>
    </header>
    {#if menuOpen}
      <nav id="mobile-nav" class="mobile-nav" aria-label="Mobile navigation">
        <a href="#care" onclick={() => menuOpen = false}>The care</a><a href="#sessions" onclick={() => menuOpen = false}>Sessions & rates</a><a href="#mariya" onclick={() => menuOpen = false}>Meet Mariya</a><a href="#visit" onclick={() => menuOpen = false}>Visit</a>
      </nav>
    {/if}

    <section class="hero" aria-label="Welcome to Livingood">
      {#if variant === 'stillwater'}
        <img class="atmosphere-image" src={asset('images/sunlit-leaves.jpg')} alt="" width="1800" height="2700" fetchpriority="high" />
        <div class="atmosphere-shade"></div>
        <div class="hero-butterfly"><Logo {variant} /></div>
        {@render heroCopy()}
        <div class="hero-bottom"><span>Personal care. Practiced hands.</span><a href="#care">Take a moment <span aria-hidden="true">↓</span></a><span>By appointment only</span></div>
      {:else if variant === 'company'}
        {@render heroCopy()}
        <div class="company-collage">
          <div class="company-shape"></div>
          {@render portraitImage('hero-portrait', true)}
          <div class="hello-note">Hello, I’m Mariya.</div>
          <div class="company-butterfly"><Logo {variant} /></div>
          <span class="portrait-caption">Your therapist, every time.</span>
        </div>
      {:else}
        {@render heroCopy()}
        <figure class="touch-figure">
          <img src={asset('images/therapeutic-touch.jpg')} alt="Close-up of hands giving a therapeutic shoulder massage" width="1400" height="2100" fetchpriority="high" />
          <div class="experience-seal"><span>Practiced hands</span><strong>30+</strong><span>Years of experience</span></div>
          <figcaption>Care, in the most human sense.</figcaption>
        </figure>
      {/if}
    </section>
  </div>

  <div class="care-ribbon"><span>For every stage of life.</span><Logo {variant} /><span>For the way you move.</span><Logo {variant} /><span>For a little more balance.</span></div>

  <main>
    <section id="care" class="care-section section-space">
      <div class="section-intro">
        <p class="eyebrow">01 / The care</p>
        <h2>Care for the<br />life you <em>live.</em></h2>
        <p>For seniors, athletes, children and parents. For chronic pain, post-injury recovery, or simply a little time to relax.</p>
        <a href="#sessions" class="text-link">Find your session <ArrowUpRight size={18} /></a>
        {#if variant === 'stillwater'}
          <img class="care-detail-photo" src={asset('images/therapeutic-touch.jpg')} alt="Hands applying focused massage pressure" width="1400" height="2100" loading="lazy" />
        {/if}
      </div>
      <div class="modality-list">
        {#each modalities as modality, i (modality.name)}
          <div class="modality"><span class="modality-number">0{i + 1}</span><div><h3>{modality.name}</h3><p>{modality.detail}</p></div><span class="modality-mark" aria-hidden="true">{variant === 'company' ? '✳' : '↗'}</span></div>
        {/each}
      </div>
    </section>

    <section id="sessions" class="sessions-section section-space">
      <div class="section-heading"><div><p class="eyebrow">02 / Sessions & rates</p><h2>A little time.<br /><em>All for you.</em></h2></div><p>Choose the time that suits you.<br />Massage therapy with Mariya.</p></div>
      <div class="session-grid">
        {#each sessions as session (session.minutes)}
          <a class="session-option" href={book} aria-label={`Book a ${session.minutes}-minute massage for $${session.price}`}>
            <div class="session-top"><span>Massage therapy</span><ArrowUpRight size={22} /></div>
            <div class="session-duration"><strong>{session.minutes}</strong><span>minutes</span></div>
            <div class="session-bottom"><span>${session.price}</span><span>Book your time <span aria-hidden="true">↗</span></span></div>
          </a>
        {/each}
      </div>
      <div class="regular-care">
        <div class="package-option"><p class="eyebrow">Make room for regular care</p><h3>Six-session packages</h3><p>Prepaid sessions, from $350.</p><details><summary>View package rates <span aria-hidden="true">+</span></summary><div class="package-rates">{#each packages as pack (pack.minutes)}<a href={book}><span>6 × {pack.minutes} min</span><strong>${pack.price}</strong><span>Save ${pack.savings}</span></a>{/each}</div></details><a class="text-link" href={book}>Explore packages <ArrowUpRight size={18} /></a></div>
        <div class="membership-option"><div><p class="eyebrow">A little balance, every month</p><h3>Monthly membership</h3><p>One 60-minute massage each month.<br />Extra sessions at the member rate.</p><a class="text-link" href={book}>Explore membership <ArrowUpRight size={18} /></a></div><div class="member-price">$80<span>/ month</span></div></div>
      </div>
      <p class="receipt-note">Receipts provided for insurance reimbursement or HSA/FSA.</p>
    </section>

    <section id="mariya" class="mariya-section section-space">
      <div class="mariya-visual">
        {@render portraitImage('mariya-portrait')}
        <div class="portrait-label"><span>Mariya Fishman</span><span>Licensed Massage Therapist</span></div>
        {#if variant === 'company'}<div class="bio-butterfly"><Logo {variant} /></div>{/if}
      </div>
      <div class="mariya-copy"><p class="eyebrow">03 / The person behind the practice</p><h2>Meet <em>Mariya.</em></h2>
        <blockquote>“Helping people feel<br />at home in their bodies.”</blockquote>
        <p>Mariya Fishman has practiced massage therapy for over 30 years. She works with seniors, athletes, children and everyone in between from her home studio in Hudson, MA, and offers Bemer circulation sessions to support recovery.</p>
        <p>Trained at the Muscular Therapy Institute in Cambridge. A volunteer on the Pan-Mass Challenge massage team, working with cancer survivors.</p>
        <details class="story"><summary>A little more of my story <span aria-hidden="true">+</span></summary><p>“Before that I was a mechanical engineer, and before that I was a girl in Belarus who wanted to be a doctor. When I came to America I trained at the Muscular Therapy Institute in Cambridge and found the work I was meant to do: helping people feel at home in their bodies.”</p><p>— Mariya</p></details>
      </div>
    </section>

    <section class="bemer-section" aria-labelledby="bemer-title">
      <div class="bemer-symbol" aria-hidden="true"><span></span><span></span><span></span></div>
      <div class="bemer-copy"><p class="eyebrow">Also at the studio</p><h2 id="bemer-title">Bemer circulation sessions</h2><p>A pulsed electromagnetic (PEMF) session that temporarily improves local blood circulation and supports muscle recovery.</p><p class="disclaimer">BEMER is not intended to diagnose, treat, cure or prevent any disease. Individual results vary.</p></div>
      <div class="bemer-action"><strong>$250 <span>/ 30 min</span></strong><a href={book} class="text-link">Book a session <ArrowUpRight size={18} /></a></div>
    </section>

    <section class="first-visit section-space" aria-labelledby="first-visit-title">
      <div class="section-heading"><div><p class="eyebrow">04 / Your first visit</p><h2 id="first-visit-title">Let’s keep it <em>simple.</em></h2></div><a href={book} class="text-link">Book a session <ArrowUpRight size={18} /></a></div>
      <div class="visit-steps">{#each visits as step, i (step.title)}<div class="visit-step"><span class="step-number">0{i + 1}</span><h3>{step.title}</h3><p>{step.text}</p></div>{/each}</div>
    </section>

    <section id="visit" class="contact-section section-space">
      <div class="contact-invitation"><p class="eyebrow">A quiet home studio in Hudson, MA</p><h2>A good place<br />to <em>begin.</em></h2><Button variant="practice" size="practice" href={book}>Book a session <ArrowUpRight data-icon="inline-end" /></Button><p>Prefer to talk? Call or text<br /><a class="phone-link" href={site.phoneHref}>{site.phone}</a></p></div>
      <div class="contact-details"><div class="address-block"><Logo {variant} /><h3>Come on over.</h3><address>157 Marlboro Street<br />Hudson, MA 01749</address><p>A private home with a dedicated studio.<br />By appointment only.</p><a class="text-link" href="https://www.google.com/maps/search/?api=1&query=157+Marlboro+Street+Hudson+MA+01749" target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={18} /></a></div><div class="hours-block"><h3>Studio hours</h3><dl>{#each hours as [day, time] (day)}<div><dt>{day}</dt><dd>{time}</dd></div>{/each}</dl><a class="email-link" href={`mailto:${site.email}`}>{site.email}</a></div></div>
    </section>
  </main>

  <footer class="practice-footer"><div class="footer-main">{@render brand()}<p>Find your balance.</p><a href="#top" class="text-link">Back to the top ↑</a></div><div class="footer-fine"><span>© {new Date().getFullYear()} Livingood Wellness Center</span><span>Licensed Massage Therapist, MA License #____</span><span>Hudson, Massachusetts · By appointment</span></div></footer>
</div>


