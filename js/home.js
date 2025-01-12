const hamburger = document.querySelector(".hamburger");
const dropdownMenu = document.querySelector(".dropdown-menu");
const closeButton = document.querySelector(".close-button");

hamburger.addEventListener("click", () => {
  dropdownMenu.style.display = "block";
});

closeButton.addEventListener("click", () => {
  dropdownMenu.style.display = "none";
});
document
  .querySelector(".home_content p")
  .addEventListener("click", function () {
    this.classList.toggle("expanded");
  });

//carousel
const carousel = document.querySelector(".carousel");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
let currentIndex = 0;

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

nextButton.addEventListener("click", () => {
  if (currentIndex < carousel.children.length - 1) {
    currentIndex++;
    updateCarousel();
  }
});

function updateCarousel() {
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

//carousel tab landscape
const carousell = document.querySelector(".carousell");
const prevButtonn = document.querySelector(".prevv");
const nextButtonn = document.querySelector(".nextt");
let currentIndexx = 0;

carousell.style.transform = `translateX(0)`;

prevButtonn.addEventListener("click", () => {
  if (currentIndexx > 0) {
    currentIndexx--;
    updateCarousel();
  }
});

nextButtonn.addEventListener("click", () => {
  if (currentIndexx < carousell.children.length - 1) {
    currentIndexx++;
    updateCarousel();
  }
});

function updateCarousel() {
  carousell.style.transform = `translateX(-${currentIndexx * 100}%)`;
}
