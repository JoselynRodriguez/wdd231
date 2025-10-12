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
  document.querySelectorAll(".open-button").forEach(button => {
    button.addEventListener("click", () => {
      const modalId = button.nextElementSibling.id;
      const modal = document.getElementById(modalId);
      modal.showModal();
    });
  });

  document.querySelectorAll(".close-button").forEach(button => {
    button.addEventListener("click", () => {
      const modal = button.closest("dialog");
      modal.close();
    });
  });
    
});
