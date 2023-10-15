document.addEventListener("DOMContentLoaded", function () {
  const profileButton = document.getElementById("profile-button");
  const menu = document.querySelector(".menu");

  profileButton.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent the click event from reaching the body

    if (menu.style.visibility === "hidden" || menu.style.visibility === "") {
      menu.style.visibility = "visible";
      menu.style.opacity = "1";
    } else {
      menu.style.visibility = "hidden";
      menu.style.opacity = "0";
    }
  });

  // Close the menu when clicking outside of it
  document.body.addEventListener("click", function () {
    menu.style.visibility = "hidden";
    menu.style.opacity = "0";
  });

  menu.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent the click event from closing the menu
  });
});
