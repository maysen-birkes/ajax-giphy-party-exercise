const formInput = document.querySelector("#search");
const submitBtn = document.querySelector("#searchGiphy");
const gifArea = document.querySelector(".gifArea");
const deleteBtn = document.querySelector("#remove");
const form = document.querySelector("#form");

const gifAPI = () => {
  return `http://api.giphy.com/v1/gifs/search?q=${formInput.value}&api_key=khx0RlFHPangxvTFp9pGOeIgiGnrmyCZ`};

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  async function getGif() {
    try {
      const response = await fetch(gifAPI());
      if (response.ok) {
        const data = await response.json();
        const giphyURL = data.data[0].images.original.url;
        console.log(giphyURL);
        const newGif = document.createElement("img");
        newGif.setAttribute("src", giphyURL);
        gifArea.append(newGif);
        console.log(newGif);
      } 
    } catch {

    }
  }
  getGif();
  form.reset();
})

deleteBtn.addEventListener("click", function (e) {
  e.preventDefault()
  const img = document.querySelectorAll('img');

  for (let i = 0; i < img.length; i++) {
    img[i].remove();
  }
  console.log(img);
});


