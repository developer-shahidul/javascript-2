document
  .getElementById("cashout-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cashoutAmount = getInputFeildValueById("cashout-input");
    const pinNumber = getInputFeildValueById("cashout-pin-number");
    if (pinNumber === 1234) {
      const balance = getTextFeildValueById("account-balance");
      const newBalance = balance - cashoutAmount;
      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("No money for you.......DGM");
    }
  });
