const hamburger = document.querySelector(".hamburger");
const dropdownMenu = document.querySelector(".dropdown-menu");
const closeButton = document.querySelector(".close-button");

hamburger.addEventListener("click", () => {
  dropdownMenu.style.display = "block";
});

closeButton.addEventListener("click", () => {
  dropdownMenu.style.display = "none";
});
