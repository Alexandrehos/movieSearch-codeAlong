const form = document.querySelector("#searchForm");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const urlAPI = "http://api.tvmaze.com/search/shows";
  const searchTerm = form.nextElementSibling.querySelector.value;
  const config = { params: { q: searchTerm } };
  const res = await axios.get(urlAPI, config);
  makeImages(res.data);
  form.nextElementSibling.querySelector.value = "";
});

const makeImages = (shows) => {
  for (let result of shows) {
    if (result.shows.image) {
      const img = document.createElement("img");
      img.src = result.shows.image.medium;
      document.body.append(img);
    }
  }
};
