document.querySelectorAll(".dropDown .title").forEach((title) => {
  title.addEventListener("click", function () {
    this.parentElement.classList.toggle("active");
  });
});

document.querySelectorAll(".dot").forEach((dot) => {
  dot.addEventListener("click", function () {
    const slideIndex = this.getAttribute("data-slide");
    const carousel = this.closest(".dropCarousel").querySelector(".carousel");
    const items = carousel.querySelectorAll("figure");
    items.forEach((item, index) => {
      item.classList.toggle("active", index == slideIndex);
    });
    this.parentElement
      .querySelectorAll(".dot")
      .forEach((dot) => dot.classList.remove("active"));
    this.classList.add("active");
  });
});

document.querySelectorAll(".carousel").forEach((carousel) => {
  carousel.querySelector("figure").classList.add("active");
});
document.querySelectorAll('.dot[data-slide="0"]').forEach((dot) => {
  dot.classList.add("active");
});

const hamburger = document.querySelector(".hamburger");
const dropdownMenu = document.querySelector(".dropdown-menu");
const closeButton = document.querySelector(".close-button");

hamburger.addEventListener("click", () => {
  dropdownMenu.style.display = "block";
});

closeButton.addEventListener("click", () => {
  dropdownMenu.style.display = "none";
});
