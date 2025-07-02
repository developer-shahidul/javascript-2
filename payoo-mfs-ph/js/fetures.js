//show the cashout form
document
  .getElementById("button-show-cashout")
  .addEventListener("click", function () {
    // show cashout button clicked
    console.log("show cashout button clicked");
    document.getElementById("cashout-form").classList.remove("hidden");
    //container aer bitor koto gulu class ace sob gule theke hidden remove

    // hide the add money form
    document.getElementById("addMoney-form").classList.add("hidden");
  });

//show add money form and hide the cashout form
document
  .getElementById("button-show-addMoney")
  .addEventListener("click", function () {
    document.getElementById("addMoney-form").classList.remove("hidden");
    document.getElementById("cashout-form").classList.add("hidden");
  });
