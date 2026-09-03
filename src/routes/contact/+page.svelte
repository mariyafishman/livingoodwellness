<script lang="ts">
 import Seo from '#lib/components/seo.svelte';
 import Logo from '#lib/assets/logo.svelte';
 import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';
 import { site } from '#lib/config/site.js';
 import VisitPanel from '#lib/components/site/visit-panel.svelte';
</script>
<Seo title="Contact & visit" description="Call or text Mariya at 978-493-6171. Livingood Wellness Center is at 157 Marlboro Street, Hudson, MA 01749. Quiet home studio, by appointment only." />
<section class="page-hero contact-hero section-space"><div><p class="eyebrow">Contact · Hudson, Massachusetts</p><h1>A little hello.<br /><em>A good start.</em></h1><p class="page-lead">Have a question about a session? Get in touch with Mariya.</p></div><div class="contact-illustration" aria-hidden="true"><Logo /><p>Hello,<br /><em>neighbor.</em></p></div></section>
<section class="contact-methods section-space" aria-label="Ways to reach Mariya"><a href={site.phoneHref}><span class="eyebrow">01 / Call</span><h2>{site.phone}</h2><span>Talk with Mariya <ArrowUpRight size={22} /></span></a><a href={site.textHref}><span class="eyebrow">02 / Text</span><h2>A quick hello.</h2><span>Send a text <ArrowUpRight size={22} /></span></a><a href={'mailto:'+site.email}><span class="eyebrow">03 / Email</span><h2>Drop a note.</h2><span class="contact-email">{site.email} <ArrowUpRight size={22} /></span></a></section>
<VisitPanel />
