const parentElement = document.getElementById("parentElement");
const showMessage = document.getElementById("showMessage");
const changeColor = document.body.style;
const shayariBox = document.createElement("div");
shayariBox.classList.add("shayari-box");
shayariBox.style.display = "none";
document.body.appendChild(shayariBox);

// For the "Yes Forever!" button
const showShayari = () => {
  parentElement.style.display = "none"; // Hide the initial content
  document.querySelector(".propose-day").style.display = "none"; // Hide header
  shayariBox.innerHTML = `
  <p class="shayari">
  "Teri ek muskurahat, meri duniya roshan kar jaaye,<br>
  Tere bina yeh dil, jaise bin chaand ka aasmaan lag jaaye. ✨<br>
  Bas ek baar keh de, tu bhi sirf meri hai,<br>
  Phir zindagi bhar ke liye, yeh dil sirf tera ho jaaye! ❤️"
</p>

<p class="shayari">
  "Tere saath chalna, ek khwab jaisa lagta hai,<br>
  Har din ek naya afsana, har raat ek naya fasana lagta hai. 💫<br>
  Agar tu haan kar de, toh bas...<br>
  Yeh dil, yeh saansein, sab sirf tere naam ho jaaye! ❤️"
</p>

<p class="shayari">
  "Main hoon tera junoon, tu meri deewangi hai,<br>
  Tere bina adhuri, meri har zindagi ki kahani hai. 💖<br>
  Bas tu haan karde, aur main sirf tera ho jaaun,<br>
  Phir mohabbat ki har misaal, humari kahani ho jaaye! 🔥"
</p>
    <button class="btn btn-light" onclick="showInitialMessage()">Back</button>
  `;
  shayariBox.style.display = "block"; // Show the Shayari content
  // Background for Shayari page
  changeColor.background =
    "linear-gradient(116.82deg, #ff94e7 0%, #27cbff 100%)";
};

// For the "Back to Initial" button
const showInitialMessage = () => {
  shayariBox.style.display = "none"; // Hide the Shayari box
  parentElement.style.display = "block"; // Show the initial content
  document.querySelector(".propose-day").style.display = "block"; // Show header
  // Reset background
  changeColor.background =
    "linear-gradient(116.82deg, #ff94e7 0%, #27cbff 100%)";
};

// Center the robo properly
document.querySelector("lottie-player").style.marginTop = "0px";
// For the "Yes | Gift?" button
const showLoveMessage = () => {
  showMessage.style.display = "block"; // Show the final "I Love You" message
  parentElement.style.display = "none"; // Hide initial content
  shayariBox.style.display = "none"; // Hide Shayari box
  // Set background color for gift page
  // Hide "Today is Propose Day" from the gift page
  document.querySelector(".propose-day").style.display = "none";
  changeColor.background =
    "linear-gradient(116.82deg, #ffd700 0%, #ff6b6b 100%)";
  document.querySelector("#showMessage h1").innerHTML = "I Love You 💝"; // Display love message
};

// For the "Yes Gift?" button, directly show the full page "I Love You"
document
  .querySelectorAll(".btn-primary")[1]
  .addEventListener("click", showLoveMessage);
