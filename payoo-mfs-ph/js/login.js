// //search: from submit reloading the page
// // step:1....set event handler
// document
//   .getElementById("login-button")
//   .addEventListener("click", function (event) {
//     // step:2......prevent defult behavior(prevent reloding browser)
//     event.preventDefault(); ////.......bejal to beginners
//     console.log("login button");

//     //step: 3.......get the phone number and the pin number
//     const phoneNumber = document.getElementById("phone-number").value;
//     const pinNumber = document.getElementById("pin-number").value;
//     console.log(phoneNumber);
//     console.log(pinNumber);

//     // step:...validate phone or phine
//     //this is temporary you should do like this
//     if (phoneNumber === "5" && pinNumber === "1234") {
//       console.log("you are log in");
//     } else {
//       alert("wrong phon number or pin");
//     }
//   });
document
  .getElementById("login-button")
  .addEventListener("click", function (event) {
    event.preventDefault();

    //get phone number or pin
    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;
    console.log(phoneNumber, pinNumber);

    //bad way to validate
    if (phoneNumber === "5" && pinNumber === "12345") {
      console.log("you are logged in");
      window.location.href = "/home.html";
    } else {
      alert("wrong phone number or pin");
    }
  });
