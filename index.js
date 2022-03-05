function newMEME() {
  let image = document.getElementById("random-image");

  fetch("https://meme-api.herokuapp.com/gimme")
    .then((meme) => meme.json())
    .then((data) => {
      let meme = data.url;
      console.log(meme);

      image.src = meme;
    });
}
