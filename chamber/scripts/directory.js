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

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("members");
  const gridBtn = document.getElementById("grid");
  const listBtn = document.getElementById("list");

  async function loadMembers() {
    const response = await fetch("data/members.json");
    const members = await response.json();
    displayMembers(members);
  }

  function displayMembers(members) {
    container.innerHTML = "";
    members.forEach(member => {
      const card = document.createElement("div");
      card.classList.add("member-card");

      card.innerHTML = `
        <img src="${member.image}" alt="${member.name} logo" />
        <h3>${member.name}</h3>
        <p>${member.description}</p>
        <p><strong>Address:</strong> ${member.address}</p>
        <p><strong>Phone:</strong> ${member.phone}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
        <p class="membership level-${member.membership}">Membership Level: ${member.membership}</p>
      `;
      container.appendChild(card);
    });
  }

  gridBtn.addEventListener("click", () => {
    container.classList.add("grid");
    container.classList.remove("list");
  });

  listBtn.addEventListener("click", () => {
    container.classList.add("list");
    container.classList.remove("grid");
  });

  loadMembers();
});
