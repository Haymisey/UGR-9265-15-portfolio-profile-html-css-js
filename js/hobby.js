// Play or pause audio when the image is clicked
document.querySelectorAll(".play_audio").forEach((img) => {
  img.addEventListener("click", () => {
    const audio = img.previousElementSibling;
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  });
});

// radio button for the hero slide
const slides = document.querySelector(".slides");
const dots = document.querySelectorAll(".dot");

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    slides.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((d) => d.classList.remove("active"));
    dot.classList.add("active");
  });
});

// Set the first dot as active by default
dots[0].classList.add("active");

const travelCards = document.querySelector(".travel_cards");
const prevButton = document.querySelector(".prevv");
const nextButton = document.querySelector(".nextt");
const viewDetailsButtons = document.querySelectorAll(".view_details");

let currentIndex = 0;
const cardWidth = travelCards.children[0].offsetWidth; // Adjust for padding
console.log(cardWidth);
prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

nextButton.addEventListener("click", () => {
  if (currentIndex < travelCards.children.length - 1) {
    currentIndex++;
    updateCarousel();
  }
});

function updateCarousel() {
  travelCards.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  console.log(currentIndex * cardWidth);
}

viewDetailsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const details = button.previousElementSibling;
    if (details.style.display === "none" || details.style.display === "") {
      details.style.display = "block";
      button.textContent = "Hide Details";
    } else {
      details.style.display = "none";
      button.textContent = "View Details";
    }
  });
});

const slidess = document.querySelector(".slides");
const prevvButton = document.querySelector(".prev");
const nexttButton = document.querySelector(".next");

let currenttIndex = 0;

prevvButton.addEventListener("click", () => {
  if (currenttIndex > 0) {
    currenttIndex--;
    updateSlides();
  }
});

nexttButton.addEventListener("click", () => {
  if (currenttIndex < slidess.children.length - 1) {
    currenttIndex++;
    updateSlides();
  }
});

function updateSlides() {
  slidess.style.transform = `translateX(-${currenttIndex * 100}%)`;
}

const hamburger = document.querySelector(".hamburger");
const dropdownMenu = document.querySelector(".dropdown-menu");
const closeButton = document.querySelector(".close-button");

hamburger.addEventListener("click", () => {
  dropdownMenu.style.display = "block";
});

closeButton.addEventListener("click", () => {
  dropdownMenu.style.display = "none";
});
