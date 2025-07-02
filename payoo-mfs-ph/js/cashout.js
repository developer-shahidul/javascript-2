document
  .getElementById("btn-cashout")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const inputCashout = document.getElementById("input-cashout").value;
    const inputCashoutNumber = parseFloat(inputCashout);
    const pinNumber = document.getElementById("cashout-pin").value;

    //wrong way to varify the pin number
    if (pinNumber === "1234") {
      const balance = document.getElementById("acount-balance").innerText;
      const balanceNumber = parseFloat(balance);

      //   reduce the balance
      const newBalance = balanceNumber - inputCashoutNumber;
      document.getElementById("acount-balance").innerText = newBalance;
      console.log(balance);
      console.log(newBalance);
    } else {
      alert("Fail to cashout, please try again letter");
    }
  });
// prothome button ke dore click korte hobe
// event handler function add korte hobe
// event parameter jug kore event.preventDefault / defult achoron bondo korte hobe
// cashout input value ke dorte hobe abong ta sonkhai rupantor korte hobe
// pin value dorte hobe
// pin aer jonno if conditon dite hobe
// bitore main balance.innertext kore ta number a rupantor
// new balance = mut balance - inputCashoutNumber
