// toggle
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

/*navToggle.addEventListener("click", function () {
  linksContainer.classList.toggle("show-links");
});*/

// KNOWN height, so, it's added to css and this works in js
// if we add one more link -> doesn't work, so, it's not DYNAMIC

navToggle.addEventListener("click", function () {
  const containerHeight = linksContainer.getBoundingClientRect().height;
  //height = 0 by default as we hide it
  const linksHeight = links.getBoundingClientRect().height;

  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});
// height AUTO to links-container in css!
//height = 150 as we have 3 links, so, if we change the quantity the height will be autocalculated

// fixed navbar

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.scrollY;
  const navHeight = document
    .querySelector(".navbar")
    .getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    document.querySelector(".navbar").classList.add("fixed-nav");
  } else {
    document.querySelector(".navbar").classList.remove("fixed-nav");
  }
});

//date
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// profile dropdown menu

// document.addEventListener("DOMContentLoaded", function () {
//   const profileButton = document.getElementById("profile-button");
//   const menu = document.querySelector(".menu");

//   // Replace this with your own logic to check if the user is logged in
//   const isUserLoggedIn = true; // Change this based on your authentication system

//   if (isUserLoggedIn) {
//     // User is logged in, modify the menu
//     const profileLink = document.createElement("li");
//     profileLink.innerHTML = '<a href="#">My Profile</a>'; // "My Profile" for logged-in users
//     menu.querySelector("ul").innerHTML = ""; // Clear the existing menu items
//     menu.querySelector("ul").appendChild(profileLink); // Add the new menu item

//     const logoutLink = document.createElement("li");
//     logoutLink.innerHTML = '<a href="#">Log Out</a>'; // "Log Out" for logged-in users
//     menu.querySelector("ul").appendChild(logoutLink); // Add the new menu item

//     // Add more menu items for logged-in users if needed
//   } else {
//     // User is not logged in
//     // Add menu items for logged-out users
//     const loginLink = document.createElement("li");
//     loginLink.innerHTML =
//       '<a href="./login/login.html" target="_blank">Log In</a>';
//     menu.querySelector("ul").appendChild(loginLink);

//     const registerLink = document.createElement("li");
//     registerLink.innerHTML =
//       '<a href="./reg/reg.html" target="_blank">Register</a>';
//     menu.querySelector("ul").appendChild(registerLink);
//   }

//   profileButton.addEventListener("click", function (event) {
//     event.stopPropagation(); // Prevent the click event from reaching the body

//     if (menu.style.visibility === "hidden" || menu.style.visibility === "") {
//       menu.style.visibility = "visible";
//       menu.style.opacity = "1";
//     } else {
//       menu.style.visibility = "hidden";
//       menu.style.opacity = "0";
//     }
//   });

//   // Close the menu when clicking outside of it
//   document.body.addEventListener("click", function () {
//     menu.style.visibility = "hidden";
//     menu.style.opacity = "0";
//   });

//   menu.addEventListener("click", function (event) {
//     event.stopPropagation(); // Prevent the click event from closing the menu
//   });
// });

//popup profile
document.addEventListener("DOMContentLoaded", function () {
  const profileButton = document.getElementById("profile-button");
  const menu = document.querySelector(".menu");

  // Replace this with your own logic to check if the user is logged in
  const isUserLoggedIn = true; // Change this based on your authentication system

  if (isUserLoggedIn) {
    // User is logged in, modify the menu
    const profileLink = document.createElement("li");
    profileLink.innerHTML = '<a href="#" id="my-profile-link">My Profile</a>'; // "My Profile" for logged-in users
    menu.querySelector("ul").innerHTML = ""; // Clear the existing menu items
    menu.querySelector("ul").appendChild(profileLink); // Add the new menu item

    const logoutLink = document.createElement("li");
    logoutLink.innerHTML = '<a href="#">Log Out</a>'; // "Log Out" for logged-in users
    menu.querySelector("ul").appendChild(logoutLink); // Add the new menu item

    // Add more menu items for logged-in users if needed
  } else {
    // User is not logged in
    // Add menu items for logged-out users
    const loginLink = document.createElement("li");
    loginLink.innerHTML =
      '<a href="./login/login.html" target="_blank">Log In</a>';
    menu.querySelector("ul").appendChild(loginLink);

    const registerLink = document.createElement("li");
    registerLink.innerHTML =
      '<a href="./reg/reg.html" target="_blank">Register</a>';
    menu.querySelector("ul").appendChild(registerLink);
  }

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

  // Handle the "My Profile" link click event
  const myProfileLink = document.getElementById("my-profile-link");
  myProfileLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the link from navigating to a new page

    // Show the profile popup
    const profilePopup = document.querySelector(
      "#profile-popup-container iframe"
    );
    profilePopup.classList.add("active");
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
