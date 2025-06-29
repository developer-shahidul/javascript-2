//option: directly set on the set html element
console.log("This is sepharate JS file");

// Option: 2 add onclick function on the html element
//IMPORTANT:We will use this
//<button onclick="makeRad()">make Red</button>;
function makeRad() {
  document.body.style.backgroundColor = "red";
}

//3 add click function
function makeBlue() {
  document.body.style.backgroundColor = "blue";
}
const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makeBlue;

/////////////
const olublubutton = document.getElementById("olublu");
olublubutton.onclick = olublu;
function olublu() {
  document.body.style.backgroundColor = "green";
}

//option:3 another [we will use sometime]
const makePurpleButton = document.getElementById("make-purple");

makePurpleButton.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple";
};

//option : 4
const makePinkButton = document.getElementById("make-pink");
makePinkButton.addEventListener("click", makepink);
function makepink() {
  document.body.style.backgroundColor = "pink";
}

//option:4 another

const makeOrangeButton = document.getElementById("make-orange");
makeOrangeButton.addEventListener("click", function makeOrange() {
  document.body.style.backgroundColor = "orange";
});

// optin : 4 final
// importrant: we will use sometime
document
  .getElementById("make-goldenrod")
  .addEventListener("click", function () {
    document.body.style.backgroundColor = "goldenrod";
  });
