/***
 *step 1: add event listener to the add money button (from submit)
 *        make sure to preventDefult so that page doesn't reloads
 *step 2: get the money user wants to add
 *        also, get the pin number provided
 *step 3: varify the pin number. for , wrong pin number ==> failed to added
 *        for right pin number, allow to added number to the acount balanec
 *step 4: get the current balance
 *
 *step 5: add money to be added with the current balance
 *
 *step 0: displaly/update the balance in the DOM/UI
 *
 */

document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault(); //defult achoron bondo kora hoice

    // get money and the pin number
    const addMoneyInput = document.getElementById("input-ad-money").value;
    const pinNumberInput = document.getElementById("pin-number-input").value;

    // console.log(addMoneyInput, pinNumberInput);
    if (pinNumberInput === "1234") {
      //add money to the acount
      const balance = document.getElementById("acount-balance").innerText;
      const balanceNumber = parseFloat(balance); // punno sonkha dekhabe / number a convert korbe
      const addMoney = parseFloat(addMoneyInput);
      const newBalance = balanceNumber + addMoney;

      console.log(newBalance);
      //  update the DOM with update balance
      document.getElementById("acount-balance").innerText = newBalance;
    } else {
      alert("Fail to add money, please try again to letter");
    }
  });
