//click korle text poriborton hobe
function handleOnClick() {
  const handlerStatus = document.getElementById("handler-status");
  handlerStatus.innerText =
    "handler by function by attend on onclick attribute";
}

//   option: 2
document
  .getElementById("event-listener")
  .addEventListener("click", function () {
    const handlerStatus = document.getElementById("handler-status");
    handlerStatus.innerText = "text updated by add event listener  button";
  });
