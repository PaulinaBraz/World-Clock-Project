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
updateTime();
setInterval(updateTime, 1000);
