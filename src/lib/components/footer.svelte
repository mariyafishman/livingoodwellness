<script lang="ts">
  import Logo from '#lib/assets/logo.svelte';
  import { site, isExternal } from '#lib/config/site.ts';

  const currentYear = new Date().getFullYear();
  const bookingExternal = isExternal(site.bookingUrl);

  const pages = [
    { title: 'Home', href: '/' },
    { title: 'Services & prices', href: '/services' },
    { title: 'About Mariya', href: '/about' },
    { title: 'Contact', href: '/contact' }
  ];
</script>

<footer class="rule-strong mt-16">
  <div class="sheet grid gap-10 py-12 md:grid-cols-12 md:gap-8 md:py-16">
    <div class="md:col-span-5">
      <a href="/" class="inline-flex items-center gap-3 font-display text-2xl">
        <Logo class="size-10" />
        {site.name}
      </a>
      <p class="mt-4 max-w-sm text-muted-foreground">
        {site.tagline} Massage therapy from one experienced therapist, in a quiet home studio in Hudson, Massachusetts.
      </p>
      <p class="label mt-6">
        {site.owner}, {site.ownerTitle} · MA LMT License #{site.licenseNumber}
      </p>
    </div>

    <div class="md:col-span-3">
      <p class="label">Visit</p>
      <address class="mt-3 not-italic leading-relaxed">
        <a href={site.mapsUrl} target="_blank" rel="noopener" class="underline-offset-4 hover:underline">
          {site.address.street}<br />
          {site.address.city}, {site.address.state} {site.address.zip}
        </a>
      </address>
      <p class="mt-3 text-muted-foreground">Home studio, by appointment.</p>
      <ul class="mt-3 font-mono text-sm leading-relaxed">
        <li>Mon, Wed, Fri 9–7</li>
        <li>Tue, Thu 2–7</li>
        <li>Sat by request</li>
      </ul>
    </div>

    <div class="md:col-span-2">
      <p class="label">Reach</p>
      <ul class="mt-3 leading-relaxed">
        <li><a href={site.phoneHref} class="font-mono underline-offset-4 hover:underline">{site.phone}</a></li>
        <li><a href={site.smsHref} class="underline-offset-4 hover:underline">Send a text</a></li>
        <li><a href="mailto:{site.email}" class="break-all underline-offset-4 hover:underline">Email</a></li>
        <li>
          <a
            href={site.bookingUrl}
            target={bookingExternal ? '_blank' : undefined}
            rel={bookingExternal ? 'noopener' : undefined}
            class="underline decoration-sun decoration-[3px] underline-offset-4"
          >
            Book a session
          </a>
        </li>
      </ul>
    </div>

    <div class="md:col-span-2">
      <p class="label">Pages</p>
      <ul class="mt-3 leading-relaxed">
        {#each pages as { title, href } (href)}
          <li><a {href} class="underline-offset-4 hover:underline">{title}</a></li>
        {/each}
      </ul>
    </div>
  </div>

  <div class="rule">
    <div class="sheet flex flex-col gap-2 py-5 md:flex-row md:items-center md:justify-between">
      <p class="label">&copy; {currentYear} {site.name}</p>
      <p class="label">Serving {site.serviceArea.join(', ')}</p>
    </div>
  </div>
</footer>
