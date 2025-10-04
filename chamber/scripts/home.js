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

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/forecast?lat={12.0467}&lon={77.0431}&appid={dce3be4c106bea03439971ce1c3d3201}';



async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); 
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp.toFixed(1)}&deg;C`;

  const iconCode = data.weather[0].icon;
  const iconsrc = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  let desc = data.weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = `${desc}`;
}

apiFetch();


async function loadSpotlights() {
  try {
    const response = await fetch('data/members.json');
    const members = await response.json();

    const goldSilver = members.filter(m => m.membership === 2 || m.membership === 3);

    const selected = goldSilver.sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 2) + 2);

    const container = document.getElementById('spotlight-container');
    container.innerHTML = selected.map(member => `
      <div class="card">
        <img src="${member.image}" alt="${member.name} logo" />
        <h3>${member.name}</h3>
        <p>${member.description}</p>
        <p><strong>Phone:</strong> ${member.phone}</p>
        <p><strong>Address:</strong> ${member.address}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
        <p class="membership"><strong>Membership Level:</strong> ${member.membership === 3 ? 'Gold' : 'Silver'}</p>
      </div>
    `).join('');
  } catch (error) {
    console.error('Error loading spotlight members:', error);
  }
}

loadSpotlights();
