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
  // ⏱️ Set timestamp for form submission
  const timestampField = document.getElementById("timestamp");
  if (timestampField) {
    timestampField.value = new Date().toISOString();
  }

  fetch("members.json")
    .then((response) => response.json())
    .then((members) => {
      const container = document.querySelector(".membership-cards");
      if (!container) return;

      const levels = {
        1: "NP Membership",
        2: "Silver Membership",
        3: "Gold Membership"
      };

      const grouped = {};
      members.forEach((member) => {
        const level = member.membership;
        if (!grouped[level]) grouped[level] = [];
        grouped[level].push(member);
      });

      Object.entries(grouped).forEach(([level, members], i) => {
        const card = document.createElement("div");
        card.className = "card";
        card.style.opacity = 0;
        card.style.transform = "translateY(20px)";
        setTimeout(() => {
          card.style.transition = "opacity 1s ease, transform 1s ease";
          card.style.opacity = 1;
          card.style.transform = "translateY(0)";
        }, 300 * i);

        card.innerHTML = `
          <h3>${levels[level]}</h3>
          <ul>
            ${members.map(m => `<li><strong>${m.name}</strong>: ${m.description}</li>`).join("")}
          </ul>
        `;
        container.appendChild(card);
      });
    })
    .catch((error) => {
      console.error("Error loading members.json:", error);
    });
});
