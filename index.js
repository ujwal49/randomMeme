function newMEME() {
  let image = document.getElementById("random-image");
  let oops = document.getElementById("oops");
  let para = document.getElementById("oops-para");
  if (image.style.display == "none") {
    image.style.display = "block";
  }
  fetch("https://meme-api.herokuapp.com/gimme")
    .then((meme) => meme.json())
    .then((data) => {
      let meme = data.url;
      console.log(meme);

      image.src = meme;
    })
    .catch((err) => {
      image.style.display = "none";

      oops.innerHTML = "OOPS :(";
      oops.style.color = "white";
      para.innerHTML = "Try again later";
      para.style.color = "white";
    });
}
