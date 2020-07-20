function fetchPictures(searchQuery) {
  const apiKey = '17555689-e3a38662af6719ca5a1675e73';
  const page = 1;
  const per_page = 12;
  const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=${per_page}&key=${apiKey}`;
  //   const options = {
  //     headers: {
  //       Authorization: apiKey,
  //     },
  //   };

  return fetch(url)
    .then(res => res.json())
    .then(data => data.hits)
    .catch(error => console.log(error));
}

export default fetchPictures;
