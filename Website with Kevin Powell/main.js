const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

// navToggle.addEventListener("click", () => {
//   primaryNav.classList.toggle("opened");
// });
// Toggling a class

navToggle.addEventListener("click", () => {
  primaryNav.toggleAttribute("data-visible");
});
// Toggling an attribute
