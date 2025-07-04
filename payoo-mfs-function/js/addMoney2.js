document
  .getElementById("addmoney-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addMoney = getInputFeildValueById("add-money-input");
    const pinNumber = getInputFeildValueById("pin-number-input");

    if (isNaN(addMoney)) {
      alert("failed to add money");
      return; // return korle NAN dekhabe na
    }

    //wrong way to varify pin , do not try it at your serioua website
    if (pinNumber === 1234) {
      const balance = getTextFeildValueById("account-balance");

      const newBalance = balance + addMoney;
      document.getElementById("account-balance").innerText = newBalance;

      // add to transaction history
      const p = document.createElement("p");
      p.innerText = `added: ${addMoney} taka. New Balance: ${newBalance} `;
      console.log(p);

      //should be a common function
      document.getElementById("transactions-container").appendChild(p);
    } else {
      alert("failed to add the money.");
    }
  });
/////////////////
///paragraph , div ,header, span , button agulur khetre hobe ======.innerText
//inputfeild , textarea, select, aer jonno hobe====== .value
