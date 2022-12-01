// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
console.log(galleryContainer);

const gallaryImg = createGallaryCards(galleryItems);
galleryContainer.innerHTML = gallaryImg;

function createGallaryCards(images) {
    return images
        .map(({ preview, original, description }) => {
            return `<a class="gallery__item" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                alt="${description}"
                />
            </a>`;
    })
        .join("");   
};

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: '250',});

