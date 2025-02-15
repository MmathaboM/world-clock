function updateTime() {

  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let userTimeElement = document.querySelector("#user-time");
  if (userTimeElement) {
    let userTime = moment();
    userTimeElement.innerHTML = `
            <h2>Your Local Time</h2>
            <div class="date">${userTime.format("MMMM Do YYYY")}</div>
            <div class="time">${userTime.format(
              "h:mm:ss"
            )} <small>${userTime.format("A")}</small></div>
        `;
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (!cityTimeZone) return;

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = `
        <div class="city">
            <div>
                <h2>${cityName}</h2>
                <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
            </div>
            <div class="time">${cityTime.format(
              "h:mm:ss"
            )} <small>${cityTime.format("A")}</small></div>
        </div>
        <button id="home-button">Back to Home</button>
    `;

  document.querySelector("#home-button").addEventListener("click", resetCities);
}

function resetCities() {
  document.querySelector("#cities").innerHTML = `
        <div class="city" id="los-angeles">
            <div>
                <h2>Los Angeles</h2>
                <div class="date"></div>
            </div>a
            <div class="time"></div>
        </div>
        <div class="city" id="paris">
            <div>
                <h2>Paris</h2>
                <div class="date"></div>
            </div>
            <div class="time"></div>
        </div>
        <div id="user-time"></div>
    `;
  updateTime();
}

updateTime();
setInterval(updateTime, 1000);
document.querySelector("#city").addEventListener("change", updateCity);
