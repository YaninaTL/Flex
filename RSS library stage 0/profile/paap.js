const copyText = document.getElementById("copy-text");
const copyButton = document.getElementById("copy-button");

// Add a click event listener to the copy button
copyButton.addEventListener("click", function () {
  // Select the text in the input field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Use the Clipboard API to copy the selected text to the clipboard
  navigator.clipboard
    .writeText(copyText.value)
    .then(function () {
      // Change the button text to indicate that the text has been copied
      copyButton.textContent = "Copied!";
    })
    .catch(function (error) {
      console.error("Failed to copy text: ", error);
    });
});

// Reset the button text when the user clicks outside the input field
copyText.addEventListener("blur", function () {
  copyButton.textContent = "Copy";
});
