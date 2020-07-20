import './styles.css';
import './components/modules-connection';

import refs from './components/refs';
import fetchPictures from './components/apiService';
import makePicturesMarkup from './components/make-pictures-markup';

refs.searchForm.addEventListener('submit', e => {
  e.preventDefault();

  const form = e.currentTarget;
  const searchQuery = form.elements.query.value;
  console.log(searchQuery);

  refs.picturesContainer.innerHTML = '';
  form.reset();

  fetchPictures(searchQuery).then(makePicturesMarkup);
});
