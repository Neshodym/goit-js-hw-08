
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);


const galleryMarkup = document.querySelector('.gallery');

const galleryRef = galleryItems.map(({ preview, description, original }) => 
    `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
        </a>
    </div>`).join('');

galleryMarkup.insertAdjacentHTML('beforeend', galleryRef)

const lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 200, captionPosition: "bottom", });