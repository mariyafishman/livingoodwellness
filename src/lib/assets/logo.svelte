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
    <path id="{uid}-ls" d="M31.5 27.5 C26 21 15 13.5 5 12.5 Q3.6 14 4.5 17 Q3.7 18.9 5.5 22 Q4.7 23.9 6.5 26.5 Q5.9 28.3 8 30.5 Q7.6 31.7 10 33 C10.5 34 9.5 34.5 9 35.5 Q7.1 37.8 8 39.5 Q7.2 42 9 43.5 Q9.1 46 11.5 47 Q12.2 49.3 15 49.8 Q16.4 51.6 19.5 51.3 Q21.1 52.6 24 51.5 L31.5 45.5 Z" />
    <path id="{uid}-rs" d="M32.5 27.5 C38 21 49 13.5 59 12.5 Q60.4 14 59.5 17 Q60.3 18.9 58.5 22 Q59.3 23.9 57.5 26.5 Q58.1 28.3 56 30.5 Q56.4 31.7 54 33 C53.5 34 54.5 34.5 55 35.5 Q56.9 37.8 56 39.5 Q56.8 42 55 43.5 Q54.9 46 52.5 47 Q51.8 49.3 49 49.8 Q47.6 51.6 44.5 51.3 Q42.9 52.6 40 51.5 L32.5 45.5 Z" />
  </defs>
  <g transform="rotate(30 32 32) translate(32 32) scale(0.94) translate(-32 -32)">
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
    <path d="M30 29 Q18 20 6 14 M30 29 Q17.8 23 5.5 20 M30 29 Q18.5 26.2 7 26.5 M30 29 Q19.8 29 9.5 32 M30 40 Q19.8 39.8 9.5 37.5 M30 40 Q20 43.2 10 44.5 M30 40 Q23 46 16 50 M30 40 Q26.5 46.5 23 51 M34 29 Q46 20 58 14 M34 29 Q46.2 23 58.5 20 M34 29 Q45.5 26.2 57 26.5 M34 29 Q44.2 29 54.5 32 M34 40 Q44.2 39.8 54.5 37.5 M34 40 Q44 43.2 54 44.5 M34 40 Q41 46 48 50 M34 40 Q37.5 46.5 41 51" fill="none" stroke="#0B1440" stroke-opacity="0.16" stroke-width="0.5" stroke-linecap="round" />
    <!-- lighter patches -->
    <g fill="url(#{uid}-spot)">
      <ellipse cx="17" cy="25" rx="5.5" ry="3.2" />
      <ellipse cx="16" cy="41" rx="4" ry="2.6" />
      <ellipse cx="50" cy="21" rx="4.5" ry="2.8" />
      <ellipse cx="47" cy="29" rx="3" ry="2" />
      <ellipse cx="41" cy="42" rx="3.4" ry="2.2" />
    </g>
    <g fill="#3A1030" opacity="0.45">
      <circle cx="39.5" cy="49" r="0.7" /><circle cx="44" cy="48" r="0.7" /><circle cx="47.5" cy="45" r="0.7" />
    </g>
    <!-- body -->
    <g stroke="currentColor" stroke-linecap="round" fill="none">
      <path d="M31.3 25c-1.8-3-4.2-6-7.3-8.2M32.7 25c1.8-3 4.2-6 7.3-8.2" stroke-width="0.8" />
      <line x1="32" y1="27" x2="32" y2="47" stroke-width="2" />
    </g>
    <circle cx="32" cy="26" r="1.6" fill="currentColor" />
  </g>
</svg>
