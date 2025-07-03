function getInputFeildValueById(id) {
  const inputValue = document.getElementById(id).value;
  const inputNumber = parseFloat(inputValue);
  return inputNumber;
}

function getTextFeildValueById(id) {
  const textValue = document.getElementById(id).innerText;
  const textNumber = parseFloat(textValue);
  return textNumber;
}

function showSectionById(id) {
  //hide all section
  document.getElementById("add-money-form").classList.add("hidden");
  document.getElementById("cash-out-form").classList.add("hidden");
  document.getElementById("transactions-section").classList.add("hidden");

  //show the section with the provide id as parameter
  document.getElementById(id).classList.remove("hidden");
}
// sob gulu id ke lukano hoice , jeta te click kora hobe take sudu show kora hobe
