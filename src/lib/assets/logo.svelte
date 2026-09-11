<script lang="ts">
  /**
   * The Livingood butterfly, after the watercolour one on the studio's
   * business card. A mirrored pair of wings on a thin body, tilted like the
   * card; each side is one continuous silhouette with scalloped margins and
   * faint veins. The left side runs from a dark orange forewing tip through
   * yellow, green and aqua into blue and a deep-blue hindwing; the right
   * side from teal through cyan and blue into a lavender-and-magenta
   * hindwing. The wings carry their own brand colours; the body and
   * antennae use `currentColor` so they follow the text around them.
   * Decorative by default; pass a `label` when it stands alone.
   */
  interface Props {
    class?: string;
    label?: string;
  }

  let { class: className, label }: Props = $props();

  // Gradient and wing ids must be unique per instance, since the logo is
  // rendered several times on one page.
  const uid = $props.id();
</script>

<svg
  class={className}
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 64 64"
  role={label ? 'img' : undefined}
  aria-label={label}
  aria-hidden={label ? undefined : 'true'}
>
  <defs>
    <linearGradient id="{uid}-lw" gradientUnits="userSpaceOnUse" x1="5" y1="12" x2="31" y2="31">
      <stop offset="0" stop-color="#A63F2A" />
      <stop offset="0.07" stop-color="#E2743A" />
      <stop offset="0.2" stop-color="#F0C346" />
      <stop offset="0.36" stop-color="#B9D24C" />
      <stop offset="0.52" stop-color="#6DBE5E" />
      <stop offset="0.68" stop-color="#8ED2C4" />
      <stop offset="0.84" stop-color="#4E9EDC" />
      <stop offset="1" stop-color="#2F6CC4" />
    </linearGradient>
    <linearGradient id="{uid}-lh" gradientUnits="userSpaceOnUse" x1="20" y1="31" x2="20" y2="51">
      <stop offset="0" stop-color="#4E9EDC" stop-opacity="0" />
      <stop offset="0.3" stop-color="#3F86D4" stop-opacity="0.9" />
      <stop offset="0.55" stop-color="#2F6CC4" />
      <stop offset="0.8" stop-color="#2A4EB2" />
      <stop offset="1" stop-color="#1D3585" />
    </linearGradient>
    <linearGradient id="{uid}-rw" gradientUnits="userSpaceOnUse" x1="59" y1="12" x2="33" y2="31">
      <stop offset="0" stop-color="#2E97A6" />
      <stop offset="0.2" stop-color="#5CC6D2" />
      <stop offset="0.45" stop-color="#84D9E2" />
      <stop offset="0.75" stop-color="#3F8ED4" />
      <stop offset="1" stop-color="#2F6CC4" />
    </linearGradient>
    <linearGradient id="{uid}-rh" gradientUnits="userSpaceOnUse" x1="44" y1="32" x2="44" y2="51">
      <stop offset="0" stop-color="#9AA0DE" stop-opacity="0" />
      <stop offset="0.25" stop-color="#9AA0DE" stop-opacity="0.9" />
      <stop offset="0.45" stop-color="#9C4FB3" />
      <stop offset="0.65" stop-color="#C2207F" />
      <stop offset="0.88" stop-color="#A5125E" />
      <stop offset="1" stop-color="#77204B" />
    </linearGradient>
    <radialGradient id="{uid}-edge" cx="0.5" cy="0.5" r="0.6">
      <stop offset="0.6" stop-color="#0B1440" stop-opacity="0" />
      <stop offset="1" stop-color="#0B1440" stop-opacity="0.3" />
    </radialGradient>
    <radialGradient id="{uid}-spot">
      <stop offset="0" stop-color="#fff" stop-opacity="0.45" />
      <stop offset="1" stop-color="#fff" stop-opacity="0" />
    </radialGradient>
    <!-- wing silhouettes, one continuous shape per side with scalloped margins -->
    <path id="{uid}-ls" d="M31.5 27.5 C26 20.5 14 12.5 3.5 11 Q1.8 12.5 2.5 15.5 Q1.5 17.4 3 20.5 Q2.4 22.6 4.5 25.5 Q4.1 27.3 6.5 29.5 Q6.4 31.2 9 33 C9.5 34 8.8 34.7 8.5 35.5 Q6.6 37.5 7.5 39 Q6.4 41.2 8 42.5 Q7.8 44.9 10 46 Q10.6 48.1 13.5 48.5 Q14.8 50 18 49.5 Q19.5 50.4 22.5 49 Q23.9 49.5 26.5 47.5 Q27.6 47.8 29.5 45.5 L31.5 44 Z" />
    <path id="{uid}-rs" d="M32.5 27.5 C38 20.5 50 12.5 60.5 11 Q62.2 12.5 61.5 15.5 Q62.5 17.4 61 20.5 Q61.6 22.6 59.5 25.5 Q59.9 27.3 57.5 29.5 Q57.6 31.2 55 33 C54.5 34 55.2 34.7 55.5 35.5 Q57.4 37.5 56.5 39 Q57.6 41.2 56 42.5 Q56.2 44.9 54 46 Q53.4 48.1 50.5 48.5 Q49.2 50 46 49.5 Q44.5 50.4 41.5 49 Q40.1 49.5 37.5 47.5 Q36.4 47.8 34.5 45.5 L32.5 44 Z" />
  </defs>
  <g transform="rotate(30 32 32) translate(32 32) scale(0.87) translate(-32 -32)">
    <!-- forewing colour along each wing -->
    <use href="#{uid}-ls" fill="url(#{uid}-lw)" />
    <use href="#{uid}-rs" fill="url(#{uid}-rw)" />
    <!-- hindwing colour, fading in below the forewing so there is no seam -->
    <use href="#{uid}-ls" fill="url(#{uid}-lh)" />
    <use href="#{uid}-rs" fill="url(#{uid}-rh)" />
    <!-- pooled watercolour edges -->
    <use href="#{uid}-ls" fill="url(#{uid}-edge)" />
    <use href="#{uid}-rs" fill="url(#{uid}-edge)" />
    <!-- veins -->
    <path d="M32 35 Q18 22.9 4 12 M32 35 Q17.5 25.6 3 17.5 M32 35 Q18 29.1 4 24.5 M32 35 Q19.2 31.9 6.5 30 M32 35 Q20.2 35.4 8.5 37 M32 35 Q20.5 38.4 9 43 M32 35 Q23.5 41.1 15 48.5 M32 35 Q27.5 41.1 23 48.5 M32 35 Q46 22.9 60 12 M32 35 Q46.5 25.6 61 17.5 M32 35 Q46 29.1 60 24.5 M32 35 Q44.8 31.9 57.5 30 M32 35 Q43.8 35.4 55.5 37 M32 35 Q43.5 38.4 55 43 M32 35 Q40.5 41.1 49 48.5 M32 35 Q36.5 41.1 41 48.5" fill="none" stroke="#0B1440" stroke-opacity="0.16" stroke-width="0.5" stroke-linecap="round" />
    <!-- lighter patches -->
    <g fill="url(#{uid}-spot)">
      <ellipse cx="17" cy="25" rx="5.5" ry="3.2" />
      <ellipse cx="16" cy="41" rx="4" ry="2.6" />
      <ellipse cx="50" cy="21" rx="4.5" ry="2.8" />
      <ellipse cx="47" cy="29" rx="3" ry="2" />
      <ellipse cx="41" cy="42" rx="3.4" ry="2.2" />
    </g>
    <g fill="#3A1030" opacity="0.45">
      <circle cx="40" cy="48" r="0.7" /><circle cx="44.5" cy="47" r="0.7" /><circle cx="48" cy="44.5" r="0.7" />
    </g>
    <!-- body -->
    <g stroke="currentColor" stroke-linecap="round" fill="none">
      <path d="M31.3 25c-1.8-3-4.2-6-7.3-8.2M32.7 25c1.8-3 4.2-6 7.3-8.2" stroke-width="0.8" />
      <line x1="32" y1="27" x2="32" y2="47" stroke-width="2" />
    </g>
    <circle cx="32" cy="26" r="1.6" fill="currentColor" />
  </g>
</svg>
