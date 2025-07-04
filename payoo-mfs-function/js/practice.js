// utilites function
function getInputFeildValueById(id) {
  const inputValue = document.getElementById(id).value;
  const inputNumber = parseFloat(inputValue);
  return inputNumber;
}
function getElementNumberTextById(id) {
  const textValue = document.getElementById(id).innerText;
  const textNumber = parseFloat(textValue);
  return textNumber;
}
// show addMoney button and show cashout button utilities

function showSectionById(id) {
  const addMoneysection = document
    .getElementById("add-money-form")
    .classList.add("hidden");
  const cashoutsection = document
    .getElementById("cash-out-form")
    .classList.add("hidden");
  const transactions = document
    .getElementById("transactions-section")
    .classList.add("hidden");

  // show the section with the id as parameter
  document.getElementById(id).classList.remove("hidden");
}

//////////
// fetures
document
  .getElementById("show-addmoney-form")
  .addEventListener("click", function () {
    showSectionById("add-money-form");
  });
document
  .getElementById("show-cashout-form")
  .addEventListener("click", function () {
    showSectionById("cash-out-form");
  });
document
  .getElementById("show-transaction-button")
  .addEventListener("click", function () {
    showSectionById("transactions-section");
  });

/////////////////////////////////////////
////////////////////////////////////////
// add money function
document
  .getElementById("addmoney-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addMoney = getInputFeildValueById("add-money-input");
    const pinNumber = getInputFeildValueById("pin-number-input");

    // validation
    if (isNaN(addMoney)) {
      alert("failed to add money");
      return; // return korle NAN dekhabe na
    }

    if (pinNumber === 1234) {
      const balance = getElementNumberTextById("account-balance");
      const newBalance = balance + addMoney;
      document.getElementById("account-balance").innerText = newBalance;

      ///add to transaction history
      const p = document.createElement("p");
      p.innerText = ` added : ${addMoney} tk. newBalance ${newBalance}`;

      // should be common function
      document.getElementById("transactions-container").appendChild(p);
    } else {
      alert("Your pin not maching, please try again letter");
    }
  });

// cash-out function
document
  .getElementById("cashout-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cashoutInput = getInputFeildValueById("cashout-input");
    const pinNumber = getInputFeildValueById("cashout-pin-number");

    // validation
    if (isNaN(cashoutInput)) {
      alert("failed to add money");
      return; // return korle NAN dekhabe na
    }

    if (pinNumber === 1234) {
      const balance = getElementNumberTextById("account-balance");

      if (cashoutInput > balance) {
        alert("You do not have enough money to cashout");
        return;
      }

      const newBalance = balance - cashoutInput;
      document.getElementById("account-balance").innerText = newBalance;

      ///add to transaction history
      //add to transaction history
      const div = document.createElement("div");
      div.innerHTML = `<h4 class='text-2xl font-bold'> cashout </h4>
      <p class='bg-orange-200' > ${cashoutInput} withdrow. newBalance ${newBalance} </p>`;
      document.getElementById("transactions-container").appendChild(div);
    } else {
      alert("Your pin not maching, please try again letter");
    }
  });
