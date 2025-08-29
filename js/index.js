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

    // 👉 নতুন সময় add
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


getElement("clear-history").addEventListener("click", function () {
  getElement("call-history-entries").innerHTML = "";
});


// copy help line number
const copyButtons = document.getElementsByClassName("btn");

for (let button of copyButtons) {
  if (button.innerText.includes("Copy")) {
    button.addEventListener("click", function () {
      const card = button.parentNode.parentNode;
      const number = card.children[1].children[2].innerText.trim();
      navigator.clipboard.writeText(number);
      alert("Number copied: " + number);
    });
  }
}
