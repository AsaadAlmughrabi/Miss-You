// script.js

// Function to handle button click events
function selectOption(option) {
  // Check which option was clicked
  if (option === "yes") {
    // Flash rainbow colors
    flashRainbowColors(function () {
      document.getElementById("question").style.display = "none"; // Hide the question
      displayCatHeart(); // Display the cat-heart.gif
    });
  } else if (option === "no") {
    // Change text on the "No" button to "You sure?"
    document.getElementById("no-button").innerText = "You sure?";
    // Increase font size of "Yes" button
    var yesButton = document.getElementById("yes-button");
    var currentFontSize = window
      .getComputedStyle(yesButton)
      .getPropertyValue("font-size");
    var newSize = parseFloat(currentFontSize) * 2; // Increase font size by  * 2px
    yesButton.style.fontSize = newSize + "px";
  } else {
    // If neither "Yes" nor "No" was clicked, show an alert message
    alert("Invalid option!");
  }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
  var colors = [
    "#ff0000",
    "#ff7f00",
    "#ffff00",
    "#00ff00",
    "#0000ff",
    "#4b0082",
    "#9400d3",
  ];
  var i = 0;
  var interval = setInterval(function () {
    document.body.style.backgroundColor = colors[i];
    i = (i + 1) % colors.length;
  }, 200); // Change color every 200 milliseconds
  setTimeout(function () {
    clearInterval(interval);
    document.body.style.backgroundColor = ""; // Reset background color
    if (callback) {
      callback();
    }
  }, 800); // Flash colors for 2 seconds
}

// Function to display the cat.gif initially
function displayCat() {
  // Get the container where the image will be displayed
  var imageContainer = document.getElementById("image-container");
  // Create a new Image element for the cat
  var catImage = new Image();
  // Set the source (file path) for the cat image
  catImage.src =
    "https://media0.giphy.com/media/tmQxSprev7vUkjJ5bs/giphy.gif?cid=6c09b952onh3mcbexeasml7cg8evxcsstr3ngwiptwhv4ly8&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s"; // Assuming the cat image is named "cat.gif"
  // Set alternative text for the image (for accessibility)
  catImage.alt = "Cat";
  // When the cat image is fully loaded, add it to the image container
  catImage.onload = function () {
    imageContainer.appendChild(catImage);
  };
}

// Function to display the cat-heart.gif
// Function to display the cat-heart.gif
function displayCatHeart() {
  // Clear existing content in the image container
  var imageContainer = document.getElementById("image-container");
  imageContainer.innerHTML = "";

  // Add the "i miss youuuuuu" message
  var messageMissYou = document.createElement("div");
  messageMissYou.textContent = "i miss youuuuuu";
  messageMissYou.style.fontSize = "5rem";
  messageMissYou.style.fontFamily = "'Sacramento', cursive";
  messageMissYou.style.textTransform = "uppercase";
  imageContainer.appendChild(messageMissYou);

  // Create a new Image element for the cat-heart
  var catHeartImage = new Image();
  // Set the source (file path) for the cat-heart image
  catHeartImage.src = "cat-heart.gif"; // Assuming the cat-heart image is named "cat-heart.gif"
  // Set alternative text for the image (for accessibility)
  catHeartImage.alt = "Cat Heart";

  // When the cat-heart image is fully loaded, add it to the image container
  catHeartImage.onload = function () {
    imageContainer.appendChild(catHeartImage);

    // Add the "let's talk" message
    var messageLetsTalk = document.createElement("div");
    messageLetsTalk.textContent = "let's talk";
    messageLetsTalk.style.fontSize = "5rem";
    messageLetsTalk.style.fontFamily = "'Sacramento', cursive";
    messageLetsTalk.style.textTransform = "uppercase";
    imageContainer.appendChild(messageLetsTalk);

    // Add the Instagram icon as a clickable button
    var instagramButton = document.createElement("a");
    instagramButton.href = "https://www.instagram.com/asaad_almughrabi/"; // Replace "your_username" with your actual Instagram username
    instagramButton.target = "_blank"; // Open the link in a new tab
    var instagramIcon = document.createElement("i");
    instagramIcon.className = "fab fa-instagram fa-2xl";
    instagramIcon.style.color = "rgb(142 117 120)";
    instagramIcon.style.fontSize = "55px";
    instagramButton.appendChild(instagramIcon);
    imageContainer.appendChild(instagramButton);

    // Hide the options container
    document.getElementById("options").style.display = "none";
  };
}

// Display the cat.gif initially
displayCat();
