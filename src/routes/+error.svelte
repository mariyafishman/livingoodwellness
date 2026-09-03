<script lang="ts">
 import { page } from '$app/state';
 import { resolve } from '$app/paths';
 import Seo from '#lib/components/seo.svelte';
 import { Button } from '#lib/components/ui/button/index.js';
 import Logo from '#lib/assets/logo.svelte';
</script>
<Seo title={page.status === 404 ? 'Page not found' : 'Something went wrong'} description="Find your way back to Livingood Wellness Center in Hudson, MA." />
<section class="page-hero section-space"><div><p class="eyebrow">{page.status}</p><h1>Let’s find<br /><em>your way.</em></h1><p class="page-lead">{page.status === 404 ? 'That page isn’t here. You can return home or get in touch with Mariya.' : 'This page couldn’t load. Please try again in a moment.'}</p><Button href={resolve('/')}>Back to home</Button></div><div class="service-emblem" aria-hidden="true"><Logo /></div></section>
