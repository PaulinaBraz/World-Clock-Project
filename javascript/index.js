function updateTime() {
  // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let lostAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM	Do YYYY");
    lostAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let portoElement = document.querySelector("#porto");
  if (portoElement) {
    let portoDateElement = portoElement.querySelector(".date");
    let portoTimeElement = portoElement.querySelector(".time");
    let portoTime = moment().tz("Europe/Porto");

    portoDateElement.innerHTML = portoTime.format("MMMM	Do YYYY");
    portoTimeElement.innerHTML = portoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let opoleElement = document.querySelector("#opole");
  if (opoleElement) {
    let opoleDateElement = opoleElement.querySelector(".date");
    let opoleTimeElement = opoleElement.querySelector(".time");
    let opoleTime = moment().tz("Europe/Opole");

    opoleDateElement.innerHTML = opoleTime.format("MMMM	Do YYYY");
    opoleTimeElement.innerHTML = opoleTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}

updateTime();
setInterval(updateTime, 100);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
