const cardBtn = document.getElementsByClassName("call-button");

// Function to get element by ID
function getElement(id) {
  return document.getElementById(id);
}

// Add call history
for (let cardButton of cardBtn) {
  cardButton.addEventListener("click", function () {
    const serviceTitle =
      cardButton.parentNode.parentNode.children[1].children[0].innerText;
    const subtitle =
      cardButton.parentNode.parentNode.children[1].children[1].innerText;
    const contactNumber =
      cardButton.parentNode.parentNode.children[1].children[2].innerText;

    // 👉 Alert showing service title + number
    alert(`Service: ${serviceTitle}\nNumber: ${contactNumber}`);

    const now = new Date();
    const time = now.toLocaleTimeString();

    const entriesContainer = getElement("call-history-entries");
    const callList = document.createElement("div");
    callList.className = "call-entry"; // For easy removal
    callList.innerHTML = `
      <div class="bg-gray-200 rounded-xl p-4 my-2">
        <h3 class="font-bold">${serviceTitle}</h3>
        <p>${subtitle}</p>
        <span>${contactNumber}</span>
        <small class="text-gray-500 block">Time: ${time}</small>
      </div>
    `;
    entriesContainer.append(callList);
  });
}

//clear history
getElement("clear-history").addEventListener("click", function () {
  getElement("call-history-entries").innerHTML = "";
});

const headerCoin = getElement("coin-count");


// Call buttons
const callButtons = document.getElementsByClassName("call-button");
for (let button of callButtons) {
  button.addEventListener("click", function () {
    let coins = parseInt(headerCoin.innerText);
    coins -= 20;
    if (coins < 0) coins = 0;
    headerCoin.innerText = coins;
  });
}

// Heart icons
const headerHeart = document.getElementById("heart-count");
const heartIcons = document.getElementsByClassName("card-heart-icon");

for (let heart of heartIcons) {
  heart.addEventListener("click", function () {
    headerHeart.innerText = parseInt(headerHeart.innerText) + 1;

    // Fill icon pink color
    const icon = heart.querySelector("i");
    icon.classList.remove("fa-regular");
    icon.classList.add("fa-solid");
    icon.style.color = "pink";
    setTimeout(() => {
      icon.classList.remove("fa-solid");
      icon.classList.add("fa-regular");
      icon.style.color = "";
    }, 1000);
  });
}

// copy help line number
const copyButtons = document.getElementsByClassName("btn");
const copyCount = getElement("copy-count"); 

for (let button of copyButtons) {
  if (button.innerText.includes("Copy")) {
    button.addEventListener("click", function () {
      const card = button.parentNode.parentNode;
      const number = card.children[1].children[2].innerText.trim();
      navigator.clipboard.writeText(number);
      alert("Number copied: " + number);
      copyCount.innerText = parseInt(copyCount.innerText) + 1;
    });
  }
}
