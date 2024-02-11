// SimpleLightbox library https://simplelightbox.com/
import SimpleLightbox from 'simplelightbox';
// Additional styles import
import 'simplelightbox/dist/simple-lightbox.min.css';
import '/css/01-gallery.css';

// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line

const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML('afterbegin', createMarkup(galleryItems));

const lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  overlayOpacity: 0.84,
  navText: ['⟨', '⟩'],
  captionsData: 'alt',
  captionDelay: 250,
  closeText: '✕',
  heightRatio: 0.9,
  disableRightClick: true,
  download: '⤓ Download this image',
  maxZoom: 4,
  scrollZoomFactor: 0.15,
});

lightbox.on('error.simplelightbox', function (error) {
  console.log(error);
});

/**
 * * Generates markup of gallery items.
 * @param {object[]} objArr Array of gallery item objects.
 * @returns {string} Gallery items markup in text format.
 */
function createMarkup(objArr) {
  return objArr
    .map(
      ({ preview, original, description }) => `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}">
          </a>
        </li>
      `
    )
    .join('');
}
