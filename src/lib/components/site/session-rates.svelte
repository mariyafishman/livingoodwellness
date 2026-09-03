<script lang="ts">
 import { resolve } from '$app/paths';
 import { Button } from '#lib/components/ui/button/index.js';
 import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';
 import { sessions, packages } from '#lib/config/content.js';
 const book = resolve('/book');
</script>
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

