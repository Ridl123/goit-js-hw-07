import { galleryItems } from "./gallery-items.js";
// Change code below this line

const imagesMenuEl = document.querySelector(".gallery");

function createImages(image) {
  return image
    .map(
      ({ preview, original, description }) =>
        //marcajul elementelor din galerie (sablon)
        `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        </li>`
    )
    .join("");
}

imagesMenuEl.insertAdjacentHTML("beforeend", createImages(galleryItems));
const delayInMs = 250;
const lightbox = new SimpleLightbox(".gallery__link", {
  captionDelay: delayInMs,
  captionsData: "alt",
});
