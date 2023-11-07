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

//iframe

window.addEventListener("message", function (event) {
  if (event.data.closePopup) {
    // Hide the iframe containing the popup profile
    const profilePopupIframe = document.getElementById("profile-popup-iframe");
    profilePopupIframe.style.display = "none";
  }
});

//SLIDESHOW
let slideIndex = 1; // Initialize the slide index

// Display the initial slide
showSlides(slideIndex);

// Function to navigate to the next or previous slide
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Function to navigate to a specific slide
function currentSlide(n) {
  showSlides((slideIndex = n));
}

// Function to display the slide with the given index
function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides"); // Get all slide elements
  const dots = document.getElementsByClassName("dot"); // Get all navigation dots

  // Ensure the slide index is within valid bounds
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Hide all slides and remove the "active" class from navigation dots
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Display the current slide and mark the corresponding dot as "active"
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}

// PAGINATION
const itemsPerPage = 3;
const gallery = document.querySelector(".gallery");
const paginationItems = document.querySelectorAll(".pagination li");

function showPage(page) {
  const images = gallery.querySelectorAll(`.page-${page}`);
  images.forEach((image) => {
    image.style.display = "block";
  });

  const allImages = gallery.querySelectorAll("img");
  allImages.forEach((image) => {
    if (!image.classList.contains(`page-${page}`)) {
      image.style.display = "none";
    }
  });

  paginationItems.forEach((item) => {
    item.classList.remove("active");
  });
  paginationItems[page - 1].classList.add("active");
}

function changePage(page) {
  showPage(page);
}

// Initially show the first page
// showPage(1);

//800px+
function applyPagination() {
  if (window.innerWidth > 800) {
    showPage(1);
  } else {
    gallery.style.display = "none";
  }
}

applyPagination();

// Listen for window resize events
window.addEventListener("resize", applyPagination);

// CARDS
// const seasonButtons = document.querySelectorAll('input[name="season"]');
// const cards = document.querySelectorAll(".card");

// seasonButtons.forEach((button) => {
//   button.addEventListener("change", () => {
//     const selectedSeason = button.value;

//     cards.forEach((card) => {
//       card.classList.remove("active");

//       if (card.classList.contains(selectedSeason)) {
//         card.classList.add("active");
//       }
//     });
//   });
// });

// Show the current season
const seasonButtons = document.querySelectorAll('input[name="season"]');
const cards = document.querySelectorAll(".card");

function getCurrentSeason() {
  const currentDate = new Date();
  const month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
  let season = "";

  if (month >= 3 && month <= 5) {
    season = "spring";
  } else if (month >= 6 && month <= 8) {
    season = "summer";
  } else if (month >= 9 && month <= 11) {
    season = "autumn";
  } else {
    season = "winter";
  }

  return season;
}
const currentSeason = getCurrentSeason();

seasonButtons.forEach((button) => {
  if (button.value === currentSeason) {
    button.checked = true;
    button.dispatchEvent(new Event("change")); // Manually trigger the change event
  }

  button.addEventListener("change", () => {
    const selectedSeason = button.value;

    cards.forEach((card) => {
      card.classList.remove("active");

      if (card.classList.contains(selectedSeason)) {
        card.classList.add("active");
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const currentSeason = getCurrentSeason();

  seasonButtons.forEach((button) => {
    if (button.value === currentSeason) {
      button.checked = true;
    }
    button.addEventListener("change", () => {
      const selectedSeason = button.value;

      cards.forEach((card) => {
        card.classList.remove("active");

        if (card.classList.contains(selectedSeason)) {
          card.classList.add("active");
        }
      });
    });
  });

  // Trigger the change event for the initially checked season button
  const checkedButton = document.querySelector('input[name="season"]:checked');
  if (checkedButton) {
    checkedButton.dispatchEvent(new Event("change"));
  }
});

// fix gallery big imgs -> sometimes don't have time to load?

// Buy -> OWN
// FOCUS
// // Get all elements with the class "button"
// const buttons = document.querySelectorAll(".button");

// // Function to reset all buttons to their default state
// function resetButtons() {
//   buttons.forEach((button) => {
//     button.textContent = "Buy";
//     button.classList.remove("active");
//   });
// }

// // Iterate through each button
// buttons.forEach((button) => {
//   // Add a click event listener to each button
//   button.addEventListener("click", function () {
//     resetButtons(); // Reset all buttons
//     button.textContent = "Own"; // Set the clicked button to "Own"
//     button.classList.add("active");
//   });
// });

// HOVER
// // Get all elements with the class "button"
// const button = document.querySelectorAll(".button");

// // Function to handle the hover effect
// function handleHover(button) {
//   button.addEventListener("mouseenter", function () {
//     button.textContent = "Own";
//   });
//   button.addEventListener("mouseleave", function () {
//     button.textContent = "Buy";
//   });
// }

// // Iterate through each button and apply the hover effect
// button.forEach((button) => {
//   handleHover(button);
// });

// IF USER BUYS A BOOK -> ADD CLASS OWNED
//change the bnt name

//BUYING
// Function to open the modal
function openModal() {
  // Show the modal container
  const modalContainer = document.getElementById("buying-popup");
  modalContainer.classList.add("show-modal");

  // Send a message to the iframe to open its content
  const iframe = document.getElementById("buying-popup-iframe");
  iframe.contentWindow.postMessage({ openPopup: true }, "*");
}

// Add a click event listener to the Buy button
const buyButtons = document.querySelectorAll(".button");
buyButtons.forEach(function (button) {
  button.addEventListener("click", openModal);
});

// When it's clicked out of the field -> close + btn and try esc btn
window.addEventListener("message", function (event) {
  if (event.data.closePopup) {
    // Hide the iframe containing the popup profile
    const profilePopupIframe = document.getElementById("buying-popup");
    profilePopupIframe.style.display = "none";
  }
});

//a try
