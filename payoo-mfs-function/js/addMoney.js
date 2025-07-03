document
  .getElementById("addmoney-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("add money button clicked");

    //getInputFeildValueById();
    //     const addMoney = getInputFeildValueById();
    //     console.log("addMoney value", addMoney);
    //     const addMoney = document.getElementById("add-money-input").value;
    //     const addMoneyNumber = parseFloat(addMoney);
    const addMoney = getInputFeildValueById("add-money-input");
    const pinNumber = getInputFeildValueById("pin-number-input");
    console.log("add money with parameter", addMoney, pinNumber);
  });
