<script lang="ts">
  import Logo from '#lib/assets/logo.svelte';
  import { site } from '#lib/config/site.ts';
  import { photos } from '#lib/config/photos.ts';

  const currentYear = new Date().getFullYear();
  const credits = Object.values(photos);
</script>

<footer class="bg-pine text-pine-foreground">
  <div class="wrap grid gap-12 py-16 lg:grid-cols-12 lg:gap-8">
    <div class="flex flex-col gap-4 lg:col-span-5">
      <a class="flex items-center gap-3 font-display text-2xl font-bold tracking-tight" href="/">
        <Logo class="size-12 text-butter" />
        {site.name}
      </a>
      <p class="display max-w-sm text-4xl text-butter">{site.tagline}</p>
      <p class="max-w-sm text-pine-foreground/80">
        Massage therapy by {site.owner}, {site.ownerTitle}, in a quiet home studio in Hudson,
        Massachusetts.
      </p>
    </div>

    <div class="grid gap-8 sm:grid-cols-3 lg:col-span-7">
      <div class="flex flex-col gap-2">
        <h2 class="label text-butter">Call or text</h2>
        <a class="text-lg font-semibold underline-offset-4 hover:underline" href={site.phoneHref}>
          {site.phone}
        </a>
        <a class="break-all underline-offset-4 hover:underline" href="mailto:{site.email}">{site.email}</a>
      </div>
      <div class="flex flex-col gap-2">
        <h2 class="label text-butter">Visit</h2>
        <a class="underline-offset-4 hover:underline" href={site.mapsUrl} target="_blank" rel="noopener">
          {site.address.street}<br />
          {site.address.city}, {site.address.state} {site.address.zip}
        </a>
        <p class="text-pine-foreground/80">Home studio. By appointment.</p>
      </div>
      <div class="flex flex-col gap-2">
        <h2 class="label text-butter">Hours</h2>
        <ul class="flex flex-col gap-0.5">
          <li>Mon, Wed, Fri 9–7</li>
          <li>Tue, Thu 2–7</li>
          <li>Sat by appointment</li>
          <li class="text-pine-foreground/80">Sun closed</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="border-t border-pine-foreground/15">
    <div class="wrap flex flex-col gap-3 py-6 text-sm text-pine-foreground/75 sm:flex-row sm:items-center sm:justify-between">
      <p>
        {site.owner}, {site.ownerTitle} · MA License #{site.licenseNumber}
      </p>
      <p>&copy; {currentYear} {site.name}</p>
    </div>
    <div class="wrap pb-6 text-xs text-pine-foreground/55">
      <p>
        Photos:
        {#each credits as photo, i (photo.src)}
          <a class="underline-offset-2 hover:underline" href={photo.creditUrl} target="_blank" rel="noopener"
            >{photo.credit}</a
          >{i < credits.length - 1 ? ', ' : ''}
        {/each}
        on Unsplash.
      </p>
    </div>
  </div>
</footer>
