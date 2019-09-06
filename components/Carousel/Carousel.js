/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function carouselCreator() {
  const carouselEl = document.createElement("div");
  const leftBtn = document.createElement("div");
  const img1 = document.createElement("img");
  const img2 = document.createElement("img");
  const img3 = document.createElement("img");
  const img4 = document.createElement("img");
  const rightBtn = document.createElement("div");

  carouselEl.classList.add("carousel");
  leftBtn.classList.add("left-button");
  rightBtn.classList.add("right-button");
  leftBtn.textContent = "\u29CF";
  rightBtn.textContent = "\u29D0";
  img1.src = "./assets/carousel/mountains.jpeg";
  img2.src = "./assets/carousel/computer.jpeg";
  img3.src = "./assets/carousel/trees.jpeg";
  img4.src = "./assets/carousel/turntable.jpeg";

  carouselEl.appendChild(leftBtn);
  carouselEl.appendChild(img1);
  carouselEl.appendChild(img2);
  carouselEl.appendChild(img3);
  carouselEl.appendChild(img4);
  carouselEl.appendChild(rightBtn);

  return carouselEl;
}

const carousel = document.querySelector(".carousel-container");
carousel.appendChild(carouselCreator());

function showSlides(n) {
  const imgs = document.querySelectorAll(".carousel img");
  if (n > imgs.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = imgs.length;
  }
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.display = "none";
  }

  imgs[slideIndex - 1].style.display = "block";
}

let slideIndex = 1;
showSlides(slideIndex);

function changeSlides(n) {
  showSlides((slideIndex += n));
}

const leftBtnEl = document.querySelector(".left-button");
const rightBtnEl = document.querySelector(".right-button");
leftBtnEl.addEventListener("click", () => changeSlides(-1));
rightBtnEl.addEventListener("click", () => changeSlides(1));
