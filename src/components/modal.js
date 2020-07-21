import * as basicLightbox from 'basiclightbox';
import refs from './refs';
import api from './apiService';

const instance = basicLightbox.create(document.querySelector('template'));
const modalImage = document.querySelector('.lightbox__image');

function openModal(e) {
  e.preventDefault();

  console.dir(e.target);

  if (e.target.nodeName !== 'IMG') {
    console.log('Кликнули не по картинке!');
    return;
  }

  const instance = basicLightbox.create(
    `
    <img src=${e.target.dataset.large} height="800">
`,
  );

  instance.show();
}

export default openModal;
