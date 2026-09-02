<script lang="ts">
  import type { Photo } from '#lib/config/photos.ts';

  /**
   * A stock or client photo in the site's arch "doorway" window.
   * Pass `shape="round"` for the small circular thumbnails.
   */
  interface Props {
    photo: Photo;
    class?: string;
    position?: string;
    eager?: boolean;
    shape?: 'arch' | 'round' | 'rounded';
  }

  let { photo, class: className, position = '50% 50%', eager = false, shape = 'arch' }: Props = $props();

  const shapes = {
    arch: 'arch',
    round: 'rounded-full',
    rounded: 'rounded-3xl'
  };
</script>

<img
  src={photo.src}
  alt={photo.alt}
  class={['block size-full object-cover bg-muted', shapes[shape], className]}
  style:object-position={position}
  loading={eager ? 'eager' : 'lazy'}
  decoding="async"
  fetchpriority={eager ? 'high' : 'auto'}
/>
