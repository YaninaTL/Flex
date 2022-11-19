const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

// navToggle.addEventListener("click", () => {
//   primaryNav.classList.toggle("opened");
// });
// Toggling a class

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
});
// Toggling an attribute

// to check
// primaryNav.hasAttribute("data-visible")
//   ? console.log("true")
//   : console.log("false");
