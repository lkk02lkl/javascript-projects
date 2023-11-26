const imgEl = document.querySelector(".image-container");

const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () => {
  imageNum = 9;
  addNewImg();
});

function addNewImg() {
  for (let i = 0; i < imageNum; i++) {
    const newImgEl = document.createElement("img");
    newImgEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
    imgEl.appendChild(newImgEl);
    
  }

  
}  