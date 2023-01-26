let search = document.getElementById("searchWord");
let searchbtn = document.getElementById("submitSearch");
let feedbackEle = document.getElementById("feedback");
let img = document.querySelector("img");

searchbtn.addEventListener('click', () => {
    fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=OQykoV775syAmzUmQG1fQUvOkD63vwq6&s=${search.value}`
)
.then((response) => response.json())
.then((res) => {
    feedbackEle.textContent = "";
    img.src = res.data.images.original.url;
    search.value = "";
    })
    .catch((err) => {
      console.error(err);
      feedbackEle.textContent = err.message;
    });

});

