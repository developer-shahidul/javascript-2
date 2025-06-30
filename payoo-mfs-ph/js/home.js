// add money to the account

/***
 * 1....add event handler
 * prevent page reload after from submit
 *2.....get money to be added to the acount balance
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
  });
