// Listen for messages from the main page
window.addEventListener("message", function (event) {
  if (event.data.openPopup) {
    // Add your code here to display the content within the iframe
    // Ensure the iframe content is correctly displayed
  }
});

const closePopupButton = document.getElementById("close-popup");
closePopupButton.addEventListener("click", function () {
  // Send a message to the parent window to request the closure of the iframe
  parent.postMessage({ closePopup: true }, "*");
});
