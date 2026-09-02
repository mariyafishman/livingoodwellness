<script lang="ts">
  /**
   * A photo printed in the site's two inks. See `.duotone` in layout.css.
   * Give it a size with classes (aspect-*, h-*, w-*); the image fills it.
   */
  interface Props {
    src: string;
    alt: string;
    class?: string;
    /** CSS object-position, e.g. "50% 30%" to keep a face in frame. */
    position?: string;
    eager?: boolean;
  }

  let { src, alt, class: className, position = '50% 50%', eager = false }: Props = $props();
</script>

<div class={['duotone', className]}>
  <img
    {src}
    {alt}
    style:object-position={position}
    loading={eager ? 'eager' : 'lazy'}
    fetchpriority={eager ? 'high' : undefined}
    decoding="async"
  />
</div>
