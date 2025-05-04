function toggleDetails(card) {
  // Collapse all cards
  const cards = document.querySelectorAll(".project-card");
  cards.forEach((c) => {
    if (c !== card) {
      c.classList.remove("active");
    }
  });

  // Toggle clicked card
  card.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const nav = document.querySelector("nav");

  // Toggle menu on click
  menuIcon.addEventListener("click", function (e) {
    e.stopPropagation(); // Prevent the click from bubbling up
    nav.classList.toggle("active");
  });

  // Hide menu when clicking outside
  document.addEventListener("click", function (e) {
    if (
      nav.classList.contains("active") &&
      !nav.contains(e.target) &&
      !menuIcon.contains(e.target)
    ) {
      nav.classList.remove("active");
    }
  });

  document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });
});
