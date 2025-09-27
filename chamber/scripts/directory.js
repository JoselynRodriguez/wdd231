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
      <div class="member-row">
        <img src="${member.image}" alt="Logo de ${member.name}" loading="lazy">
        <div class="name">${member.name}</div>
        <div class="address">${member.address}</div>
        <div class="phone">${member.phone}</div>
        <div class="link"><a href="${member.website}" target="_blank">"${member.website}"</a></div>
        <div class="membership">${getMembershipLevel(member.membership)}</div>
        <div class="description">${member.description}</div>
      </div>
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