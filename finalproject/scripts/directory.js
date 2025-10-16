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
        <div class="name"><strong>${member.name}</strong></div>
        <div class="birth"><strong>Birth Date:</strong> ${member.birthDate}</div>
        <div class="age"><strong>Age:</strong> ${member.age}</div>
        <div class="phone"><strong>Phone:</strong> ${member.phone}</div>
        <div class="email"><strong>Email:</strong> ${member.email}</div>
      </div>
    `;
    membersSection.appendChild(card);
  });
}

getMembers();
