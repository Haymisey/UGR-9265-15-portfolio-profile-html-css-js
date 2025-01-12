// filtering for tab landscape
document.querySelectorAll(".skill_filter").forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const selectedSkills = Array.from(
      document.querySelectorAll(".skill_filter:checked")
    ).map((cb) => cb.value);
    document.querySelectorAll(".project_card").forEach((card) => {
      const cardSkills = card.getAttribute("data-skills");
      if (cardSkills) {
        const skillsArray = cardSkills.split(" ");
        const isVisible = selectedSkills.every((skill) =>
          skillsArray.includes(skill)
        );
        card.style.display =
          isVisible || selectedSkills.length === 0 ? "block" : "none";
      }
    });
  });
});

// carousel for desktop
const carousel = document.querySelector(".carousel");
const items = document.querySelectorAll(".carousel-item");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let currentIndex = 0;
function updateCarousel() {
  const width = items[0].offsetWidth;
  carousel.style.transform = `translateX(-${currentIndex * width}px)`;
}
prev.addEventListener("click", () => {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
  updateCarousel();
});
next.addEventListener("click", () => {
  currentIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
  updateCarousel();
});
window.addEventListener("resize", updateCarousel);

const hamburger = document.querySelector('.hamburger');
const dropdownMenu = document.querySelector('.dropdown-menu');
const closeButton = document.querySelector('.close-button');

hamburger.addEventListener('click', () => {
  dropdownMenu.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  dropdownMenu.style.display = 'none';
});

