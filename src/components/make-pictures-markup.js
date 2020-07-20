import refs from './refs';
import picturesTpl from '../templates/pictures.hbs';

function makePicturesMarkup(pictures) {
  const markup = picturesTpl(pictures);
  refs.picturesContainer.insertAdjacentHTML('beforeend', markup);
}

export default makePicturesMarkup;
