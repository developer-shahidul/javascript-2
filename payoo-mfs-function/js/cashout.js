document
  .getElementById("cashout-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cashoutAmount = getInputFeildValueById("cashout-input");
    const pinNumber = getInputFeildValueById("cashout-pin-number");

    if (isNaN(cashoutAmount)) {
      alert("failed to add money");
      return; // return korle NAN dekhabe na
    }

    if (pinNumber === 1234) {
      const balance = getTextFeildValueById("account-balance");

      if (cashoutAmount > balance) {
        alert("You do not have enough money to cashout");
        return;
      }

      const newBalance = balance - cashoutAmount;
      document.getElementById("account-balance").innerText = newBalance;

      //add to transaction history
      const div = document.createElement("div");
      div.innerHTML = ` <h4 class='text-2xl font-bold'> cashout </h4>
      <p class='bg-orange-200' > ${cashoutAmount} withdrow. newBalance ${newBalance} </p>`;
      document.getElementById("transactions-container").appendChild(div);
    } else {
      alert("No money for you.......DGM");
    }
  });
