//Donate for Flood at Noakhali, Bangladesh
document.getElementById("food-donate").addEventListener("click", function () {
  const addDonateConin = getInputFeildValueById("flood-donate-input");
  const balance = getElementValueById("balance-coin");
  const floodBalance = getElementValueById("food-balance");

  if (
    !isNaN(addDonateConin) &&
    balance >= addDonateConin &&
    addDonateConin > 0
  ) {
    const newFloodBalance = addDonateConin + floodBalance;
    document.getElementById("food-balance").innerText = newFloodBalance;

    const newBalance = balance - addDonateConin;
    document.getElementById("balance-coin").innerText = newBalance;

    // history add
    const foodDonate = document.getElementById(
      "flood-donate-district"
    ).innerText;

    addDonationHistory(addDonateConin, foodDonate);
  } else {
    alert("your balance  is low,please add balance and try again");
  }
});

// Donate for Flood Relief in Feni,Bangladesh
document
  .getElementById("flood2-donate-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const flood2InputAmmount = getInputFeildValueById("flood2-input-ammount");
    const balance = getElementValueById("balance-coin");
    const flood2Balance = getElementValueById("flood2-coin");
    if (
      !isNaN(flood2InputAmmount) &&
      balance >= flood2InputAmmount &&
      flood2InputAmmount > 0
    ) {
      const newFlood2Balance = flood2InputAmmount + flood2Balance;
      document.getElementById("flood2-coin").innerText = newFlood2Balance;

      const newBalance = balance - flood2InputAmmount;
      document.getElementById("balance-coin").innerText = newBalance;

      const floodTitle = document.getElementById("flood2-title").innerText;

      addDonationHistory(flood2InputAmmount, floodTitle);
    } else {
      alert("your balance  is low,please add balance and try again");
    }
  });

//Aid for Injured in the Quota Movement
document
  .getElementById("quota-donate-btn")
  .addEventListener("click", function () {
    const quotaInputBalanceAdd = getInputFeildValueById("guota-input-balance");
    const balance = getElementValueById("balance-coin");
    const quotaBalance = getElementValueById("guota-coin");
    if (
      !isNaN(quotaInputBalanceAdd) &&
      quotaInputBalanceAdd > 0 &&
      balance >= quotaInputBalanceAdd
    ) {
      const newquotaBalance = quotaBalance + quotaInputBalanceAdd;
      document.getElementById("guota-coin").innerText = newquotaBalance;

      const newBalance = balance - quotaInputBalanceAdd;
      document.getElementById("balance-coin").innerText = newBalance;

      // history
      const quotaTitle = document.getElementById("quota-title").innerText;

      addDonationHistory(quotaInputBalanceAdd, quotaTitle);
    } else {
      alert("your balance  is low,please add balance and try again");
    }
  });
