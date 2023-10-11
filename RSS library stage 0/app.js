// hamburger menu

document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamburger-menu");

  const nav = document.querySelector(".nav-menu ul");

  // toggle
  hamburgerMenu.addEventListener("click", function () {
    nav.classList.toggle("active");
  });
});
