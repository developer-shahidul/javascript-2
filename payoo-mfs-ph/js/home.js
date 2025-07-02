// add money to the account

/***
 * 1....add event handler
 * prevent page reload after from submit
 * 2.....get money to be added to the acount balance
 * get the pin number
 * 3....verify the pin number
 * 
 * 

 */
//add an event handler to the add money button inside the form
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    // prevent page relode after from submit
    event.preventDefault();

    //get money to be added to the acount
    const addMoneyInput = document.getElementById("input-ad-money").value;
    console.log(addMoneyInput);

    //get the pin number provided
    const pinNumberInput = document.getElementById("pin-number-input").value;
    console.log(pinNumberInput);

    //step: 3 varify the pin number
    //wrong way to validate pin number
    if (pinNumberInput === "12345") {
      // step: 4. get the current balance

      const balance = document.getElementById("acount-balance").innerText;

      console.log(typeof balance);

      //step:5 add addMoneyInput with balance
      //string ke number a rupantor

      const addMoneyNumber = parseFloat(addMoneyInput);
      const balanceNumber = parseFloat(balance);
      const newBalance = addMoneyNumber + balanceNumber;
      console.log(newBalance);

      //step:6..update the balance in the ui/dom
      document.getElementById("acount-balance").innerText = newBalance;
    } else {
      alert("failed the add money! pleace try again");
    }
  });
