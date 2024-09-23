//gallery
import lightGallery from 'lightgallery';

// Plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
import lgVideo from 'lightgallery/plugins/video'

lightGallery(document.getElementById('gallery-body'), {
  plugins: [lgZoom, lgThumbnail],
  speed: 500,
  thumbnail: true,
  showZoomInOutIcons: true,
});

lightGallery(document.getElementById('projects-gallery'), {
  plugins: [lgZoom, lgThumbnail, lgVideo],
  speed: 500,
  thumbnail: true,
  showZoomInOutIcons: true,
});