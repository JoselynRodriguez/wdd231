const yearSpan = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

const lastModified = document.getElementById("lastModified");
lastModified.textContent = `Last Modified: ${document.lastModified}`;

const navButton = document.querySelector('#navbutton');
const navBar = document.querySelector('#navbar');

navButton.addEventListener('click', () => {
  navButton.classList.toggle('show');
  navBar.classList.toggle('show');
});

const gridBtn = document.querySelector('#grid');
const listBtn = document.querySelector('#list');
const membersSection = document.querySelector('#members');

gridBtn.addEventListener('click', () => {
  membersSection.classList.add('grid');
  membersSection.classList.remove('list');
});

listBtn.addEventListener('click', () => {
  membersSection.classList.add('list');
  membersSection.classList.remove('grid');
});

const url = 'data/members.json'; 

async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data);
}
  
function displayMembers(members) {

  members.forEach(member => {
    const card = document.createElement('div');
    card.classList.add('member-card');

    card.innerHTML = `
      <img src="${member.image}" alt="Logo de ${member.name}" loading="lazy">
      <h3>${member.name}</h3>
      <p><strong>Dirección:</strong> ${member.address}</p>
      <p><strong>Teléfono:</strong> ${member.phone}</p>
      <a href="${member.website}" target="_blank">"${member.website}"</a>
      <p class="membership">Membresía: ${getMembershipLevel(member.membership)}</p>
      <p><strong>Descripción:</strong> ${member.description}</p>
    `;
    membersSection.appendChild(card);
  });
}
function getMembershipLevel(level) {
  switch (level) {
    case 1: return "Member";
    case 2: return "Silver";
    case 3: return "Gold";
  }
}

getMembers();