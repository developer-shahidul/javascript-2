//ADD MONEY FUNCTION

document
  .getElementById("addMoney-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addMoneyInput = document.getElementById("add-money-input").value;
    const addMoney = parseFloat(addMoneyInput);

    const pinNumberInput = document.getElementById("pin-number-input").value;
    if (pinNumberInput === "1234") {
      const accountBalance =
        document.getElementById("acount-balance").innerText;
      console.log(accountBalance);

      const balance = parseFloat(accountBalance);

      const newBalance = balance + addMoney;
      console.log(newBalance);
      document.getElementById("acount-balance").innerText = newBalance;
    } else {
      alert("This pin not maching, pleace try again letter");
    }
  });
//CASHOUT FUNCTON
document
  .getElementById("cashout-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cashoutAmount = document.getElementById("cashout-amount-input").value;
    const cashoutNumber = parseFloat(cashoutAmount);
    const pinNumberInput = document.getElementById("cashout-pin").value;

    if (pinNumberInput === "1234") {
      const accountBalance =
        document.getElementById("acount-balance").innerText;
      const balance = parseFloat(accountBalance);
      const newBalance = balance - cashoutNumber;
      document.getElementById("acount-balance").innerText = newBalance;
    } else {
      alert("cashout pin not maching, pleace try again letter");
    }
  });

// show addmoney and cashout form

//remove cashout classlist hidden
//show cashout button
document
  .getElementById("show-cashout-button")
  .addEventListener("click", function () {
    document.getElementById("cashout-form").classList.remove("hidden");
    document.getElementById("addMoney-form").classList.add("hidden");
  });

// show addMoney button
document
  .getElementById("show-addMoney-button")
  .addEventListener("click", function () {
    document.getElementById("addMoney-form").classList.remove("hidden");
    document.getElementById("cashout-form").classList.add("hidden");
  });
