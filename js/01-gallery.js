import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

const createGallerry = galleryItems.map(({ preview, description, original }) =>
    `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src='${preview}'
      alt='${description}'
      data-source='${original}'
    />
  </a>
</div>`
).join('');

galleryRef.insertAdjacentHTML('afterbegin', createGallerry);

galleryRef.addEventListener('click', onGalleryClick);

let instance;

function onGalleryClick(event) {
  
  event.preventDefault();
  
  if (event.target.nodeName !== 'IMG'){
    return
  }

  instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`,
  );

  document.addEventListener('keydown', pressToCloseModal);

  instance.show()
}

function pressToCloseModal (e) {
  if (e.code === 'Escape') {
    instance.close();
  }
}


