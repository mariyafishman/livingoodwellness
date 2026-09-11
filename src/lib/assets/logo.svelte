<script lang="ts">
  /**
   * The Livingood butterfly, after the watercolour one on the studio's
   * business card. A mirrored pair of wings on a thin body, tilted like the
   * card, each wing in its own colour: the left forewing runs from a dark
   * orange tip through yellow, green and aqua into blue, the right forewing
   * is teal, the left hindwing deep blue and the right hindwing lavender
   * into magenta. The wings carry their own brand colours; the body and
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
    <linearGradient id="{uid}-lf" gradientUnits="userSpaceOnUse" x1="9" y1="7" x2="30" y2="35">
      <stop offset="0" stop-color="#A63F2A" />
      <stop offset="0.07" stop-color="#E2743A" />
      <stop offset="0.2" stop-color="#F0C346" />
      <stop offset="0.34" stop-color="#B9D24C" />
      <stop offset="0.48" stop-color="#6DBE5E" />
      <stop offset="0.62" stop-color="#8ED2C4" />
      <stop offset="0.8" stop-color="#4E9EDC" />
      <stop offset="1" stop-color="#2B5FBA" />
    </linearGradient>
    <linearGradient id="{uid}-rf" gradientUnits="userSpaceOnUse" x1="56" y1="9" x2="34" y2="35">
      <stop offset="0" stop-color="#2E97A6" />
      <stop offset="0.25" stop-color="#5CC6D2" />
      <stop offset="0.5" stop-color="#84D9E2" />
      <stop offset="0.75" stop-color="#3F8ED4" />
      <stop offset="1" stop-color="#2758B8" />
    </linearGradient>
    <linearGradient id="{uid}-lh" gradientUnits="userSpaceOnUse" x1="30" y1="37" x2="9" y2="50">
      <stop offset="0" stop-color="#57A6E4" />
      <stop offset="0.4" stop-color="#3B7DD6" />
      <stop offset="0.75" stop-color="#2A4EB2" />
      <stop offset="1" stop-color="#1D3585" />
    </linearGradient>
    <linearGradient id="{uid}-rh" gradientUnits="userSpaceOnUse" x1="34" y1="36" x2="52" y2="53">
      <stop offset="0" stop-color="#AEB8E8" />
      <stop offset="0.25" stop-color="#8E90D6" />
      <stop offset="0.44" stop-color="#9C4FB3" />
      <stop offset="0.6" stop-color="#C2207F" />
      <stop offset="0.85" stop-color="#A5125E" />
      <stop offset="1" stop-color="#77204B" />
    </linearGradient>
    <radialGradient id="{uid}-edge" cx="0.5" cy="0.5" r="0.62">
      <stop offset="0.55" stop-color="#0B1440" stop-opacity="0" />
      <stop offset="1" stop-color="#0B1440" stop-opacity="0.3" />
    </radialGradient>
    <radialGradient id="{uid}-spot">
      <stop offset="0" stop-color="#fff" stop-opacity="0.45" />
      <stop offset="1" stop-color="#fff" stop-opacity="0" />
    </radialGradient>
  </defs>
  <g transform="rotate(30 32 32) translate(32 32) scale(0.9) translate(-32 -32)">
    <!-- hindwings, tucked under the forewings and joined along the body -->
    <path id="{uid}-lhw" d="M32 32c-9-1-22 1-25 8-2 7 3 13 9 13 7 0 13-5 16-9Z" fill="url(#{uid}-lh)" />
    <path id="{uid}-rhw" d="M32 32c9-1 22 1 25 8 2 7-3 13-9 13-7 0-13-5-16-9Z" fill="url(#{uid}-rh)" />
    <!-- forewings -->
    <path id="{uid}-lfw" d="M32 24c-5-7-17-18-23-17-5 1-6 9-4 16 2 7 5 11 8 12 7 2 15 3 19 2Z" fill="url(#{uid}-lf)" />
    <path id="{uid}-rfw" d="M32 24c5-7 17-18 23-17 5 1 6 9 4 16-2 7-5 11-8 12-7 2-15 3-19 2Z" fill="url(#{uid}-rf)" />
    <!-- pooled watercolour edges -->
    <g fill="url(#{uid}-edge)">
      <use href="#{uid}-lhw" /><use href="#{uid}-rhw" /><use href="#{uid}-lfw" /><use href="#{uid}-rfw" />
    </g>
    <!-- lighter patches -->
    <g fill="url(#{uid}-spot)">
      <ellipse cx="14" cy="24" rx="5" ry="3.4" />
      <ellipse cx="50" cy="22" rx="4" ry="2.8" />
      <ellipse cx="45" cy="30" rx="3" ry="2" />
      <ellipse cx="15" cy="44" rx="3.2" ry="2.2" />
      <ellipse cx="47" cy="43" rx="3" ry="2" />
    </g>
    <g fill="#3A1030" opacity="0.45">
      <circle cx="49" cy="52.2" r="0.7" /><circle cx="53.5" cy="50" r="0.7" /><circle cx="56.5" cy="45.5" r="0.7" />
    </g>
    <!-- body -->
    <g stroke="currentColor" stroke-linecap="round" fill="none">
      <path d="M31.2 20c-1.8-3.2-4-6.2-6.7-8.6M32.8 20c1.8-3.2 4-6.2 6.7-8.6" stroke-width="0.8" />
      <line x1="32" y1="22" x2="32" y2="45" stroke-width="2" />
    </g>
    <circle cx="32" cy="21" r="1.6" fill="currentColor" />
  </g>
</svg>
