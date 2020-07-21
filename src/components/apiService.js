const apiKey = '17555689-e3a38662af6719ca5a1675e73';

export default {
  searchQuery: '',
  page: 1,
  cardsOnPage: 12,

  fetchPictures() {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=${this.cardsOnPage}&key=${apiKey}`;

    return fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data.hits);
        this.nextPage();

        return data.hits;
      });
  },

  resetPage() {
    this.page = 1;
  },

  nextPage() {
    this.page += 1;
  },

  get query() {
    return this.searchQuery;
  },

  set query(value) {
    this.searchQuery = value;
  },
};
