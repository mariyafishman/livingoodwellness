<script lang="ts">
  import Logo from '#lib/assets/logo.svelte';
  import { site } from '#lib/config/site.ts';

  const currentYear = new Date().getFullYear();
</script>

<footer class="bg-footer text-footer-foreground">
  <div class="wrap flex flex-col gap-10 py-14 lg:gap-16 lg:py-20">
    <div class="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
      <div
        class="flex flex-col gap-4 lg:col-span-5 [--logo-body:var(--color-footer-foreground)] [--logo-wing:var(--color-footer-foreground)]"
      >
        <div class="flex items-center gap-3.5">
          <Logo class="size-10" />
          <span class="font-serif text-2xl lg:text-[28px]">{site.name}</span>
        </div>
        <p class="font-serif text-xl text-footer-muted">{site.tagline}</p>
      </div>

      <div class="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7 lg:grid-cols-7">
        <div class="flex flex-col gap-2.5 lg:col-span-3">
          <h2 class="font-sans text-xs tracking-[0.16em] uppercase text-footer-muted">Visit</h2>
          <p class="text-base leading-relaxed">
            {site.address.street}<br />
            {site.address.city}, {site.address.state} {site.address.zip}<br />
            By appointment only
          </p>
        </div>
        <div class="flex flex-col gap-2.5 lg:col-span-2">
          <h2 class="font-sans text-xs tracking-[0.16em] uppercase text-footer-muted">Talk</h2>
          <p class="text-base leading-relaxed">
            <a class="text-footer-foreground hover:text-ochre" href="tel:{site.phone.tel}">{site.phone.display}</a><br />
            Call or text
          </p>
        </div>
        <div class="flex flex-col gap-2.5 lg:col-span-2">
          <h2 class="font-sans text-xs tracking-[0.16em] uppercase text-footer-muted">Hours</h2>
          <p class="text-base leading-relaxed">
            {#each site.hoursSummary as line (line)}
              {line}<br />
            {/each}
          </p>
        </div>
      </div>
    </div>

    <div
      class="flex flex-col gap-2 border-t border-footer-line pt-6 text-[13px] text-footer-muted sm:flex-row sm:justify-between"
    >
      <p>{site.practitioner.name}, {site.practitioner.title} · {site.practitioner.license}</p>
      <p>&copy; {currentYear} {site.name}</p>
    </div>
  </div>
</footer>
