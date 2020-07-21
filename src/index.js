import './styles.css';
import './components/modules-connection';
import openModal from './components/modal';

import refs from './components/refs';
import api from './components/apiService';
import makePicturesMarkup from './components/make-pictures-markup';

refs.searchForm.addEventListener('submit', e => {
  e.preventDefault();

  const form = e.currentTarget;
  api.query = form.elements.query.value;
  // console.log(api.query);

  refs.picturesContainer.innerHTML = '';

  api.resetPage();
  fetchPicturesCards();
  form.reset();
});

refs.loadMoreBtn.addEventListener('click', fetchPicturesCards);

function fetchPicturesCards(query) {
  refs.loadMoreBtn.classList.add('is-hidden');
  refs.spinner.classList.remove('is-hidden');

  api
    .fetchPictures()
    .then(pictures => {
      console.log(pictures);
      makePicturesMarkup(pictures);
      refs.loadMoreBtn.classList.remove('is-hidden');

      refs.picturesContainer.addEventListener('click', openModal);

      window.scrollTo({
        top: document.documentElement.offsetHeight,
        behavior: 'smooth',
      });
    })

    .finally(() => refs.spinner.classList.add('is-hidden'));
}

const toTopBtn = document.getElementById('toTopBtn');

window.onscroll = function () {
  scroll();
};

function scroll() {
  if (
    document.body.scrollTop > 130 ||
    document.documentElement.scrollTop > 130
  ) {
    toTopBtn.style.display = 'block';
  } else toTopBtn.style.display = 'none';
}

function topScroll() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

toTopBtn.addEventListener('click', topScroll);
