const navButton = document.querySelector('#navbutton');
const navBar = document.querySelector('#navbar');

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navBar.classList.toggle('show');
});

const yearSpan = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

const lastModified = document.getElementById("lastModified");
lastModified.textContent = `Last Modified: ${document.lastModified}`;

import { places } from "../data/places.mjs";

console.log(places);

document.addEventListener("DOMContentLoaded", () => {
  const showHere = document.querySelector(".allplaces");

  function displayItems(places) {
    places.forEach(x => {
      const thecard = document.createElement('div');
      const thephoto = document.createElement('img');
      thephoto.src = x.image;
      thephoto.alt = x.name;
      thecard.appendChild(thephoto);

      const thetitle = document.createElement('h2');
      thetitle.innerText = x.name;
      thecard.appendChild(thetitle);

      const theaddress = document.createElement('address');
      theaddress.innerText = x.address;
      thecard.appendChild(theaddress);

      const thedesc = document.createElement('p');
      thedesc.innerText = x.description;
      thecard.appendChild(thedesc);

      showHere.appendChild(thecard);
    });
  }

  displayItems(places);
});

