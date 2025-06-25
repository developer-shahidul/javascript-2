// where to add
const placesList = document.getElementById("places-list");
// what to be added
const li = document.createElement("li");

li.innerText = "pahar toli bon g";
//add the child
placesList.appendChild(li);

//........2

//where to add
const mainContainer = document.getElementById("main-container");

//what to be added
const section = document.createElement("section");
const h1 = document.createElement("h1");
h1.innerText = "My food list";
section.appendChild(h1);
mainContainer.appendChild(section);

const ul = document.createElement("ul");
const li1 = document.createElement("li");
const li3 = document.createElement("li");
li3.innerText = "salat de";
li1.innerText = "kacchi biriyani";
section.appendChild(ul);
ul.appendChild(li1);
ul.appendChild(li3);

//set innertext directly
const sectionDress = document.createElement("section");
sectionDress.innerHTML = `<h1>My dres section</h1>
<ul>
  <li>lungi</li>
  <li>Shirt</li>
  <li>juta</li>
  <li>puta</li>
</ul>`;
mainContainer.appendChild(sectionDress);

//practic
const teaStall = document.createElement("section");
const h = document.createElement("h1");
h.innerText = "tea is the best solution";
const ul3 = document.createElement("ul");
const li7 = document.createElement("li");
const li8 = document.createElement("li");
li7.innerText = "blac tea";
li8.innerText = "blac tea";
mainContainer.appendChild(section);
section.appendChild(h);
section.appendChild(ul3);
ul3.appendChild(li7);
ul3.appendChild(li8);

const bucachuda = document.createElement("section");
bucachuda.innerHTML = `
<h1>rukon bucachuda</h1>
<ul>
<li>rukon pro max</li>
<li>rukon bucachuda</li>
</ul>
`;
mainContainer.appendChild(bucachuda);
section.style.backgroundColor = "red";
bucachuda.style.backgroundColor = "blue";
