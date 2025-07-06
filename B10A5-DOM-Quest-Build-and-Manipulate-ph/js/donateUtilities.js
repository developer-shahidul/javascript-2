function getInputFeildValueById(id) {
  const inputValue = document.getElementById(id).value;
  const inputNumber = parseFloat(inputValue);
  return inputNumber;
}
function getElementValueById(id) {
  const textValue = document.getElementById(id).innerText;
  const textNumber = parseFloat(textValue);
  return textNumber;
}

// Toggle button home button and block button
const toggleBtn = document.getElementById("block-btn");
const homeSection = document.getElementById("home-section");
const blockSection = document.getElementById("block-container");
toggleBtn.addEventListener("click", function () {
  if (homeSection.classList.contains("hidden")) {
    homeSection.classList.remove("hidden");
    blockSection.classList.add("hidden");
    toggleBtn.innerText = "block";
  } else {
    homeSection.classList.add("hidden");
    blockSection.classList.remove("hidden");
    toggleBtn.innerText = "Home";
  }
});
// button click to button bg-color chanege function
function showBgColorButton(event) {
  const showDonateButton = document.getElementById("show-donate-btn");
  const showHistoryButton = document.getElementById("show-history-btn");

  // Reset background color of both buttons
  showDonateButton.style.backgroundColor = "";
  showHistoryButton.style.backgroundColor = "";

  event.target.style.backgroundColor = "#b4f461";
}

// Set default background color on page load
document.getElementById("show-donate-btn").style.backgroundColor = "#b4f461";

// button bg-color  change
document
  .getElementById("show-donate-btn")
  .addEventListener("click", showBgColorButton);
document
  .getElementById("show-history-btn")
  .addEventListener("click", showBgColorButton);

//   show-donate or history button function

function showDonateElement(id) {
  document.getElementById("donate-AllCard").classList.add("hidden");
  document.getElementById("History-container").classList.add("hidden");

  document.getElementById(id).classList.remove("hidden");
}

//All card call history add

document
  .getElementById("show-donate-btn")
  .addEventListener("click", function () {
    showDonateElement("donate-AllCard");
  });
document
  .getElementById("show-history-btn")
  .addEventListener("click", function () {
    showDonateElement("History-container");
  });

//card two history add
function addDonationHistory(amount, title) {
  const div = document.createElement("div");
  div.className = "history-list-container";
  div.innerHTML = `
    <h3>${amount} Taka is ${title}</h3>
    <p>Date: ${new Date()}</p>
  `;
  document.getElementById("History-container").appendChild(div);
}
