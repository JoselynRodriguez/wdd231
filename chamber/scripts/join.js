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
  const timestampField = document.getElementById("timestamp");
  if (timestampField) {
    timestampField.value = new Date().toISOString();
  }
});
  
document.addEventListener("DOMContentLoaded", () => {
  // Open modal when button is clicked
  document.querySelectorAll(".open-button").forEach(button => {
    button.addEventListener("click", () => {
      const modalId = button.nextElementSibling.id;
      const modal = document.getElementById(modalId);
      modal.showModal();
    });
  });

  // Close modal when ❌ is clicked
  document.querySelectorAll(".close-button").forEach(button => {
    button.addEventListener("click", () => {
      const modal = button.closest("dialog");
      modal.close();
    });
  });

  // Optional: Close modal with Escape key
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll("dialog").forEach(modal => {
        if (modal.open) modal.close();
      });
    }
  });
});
