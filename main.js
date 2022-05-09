//#region Pogoda
let weather = {
  apiKey: "9a505c0928a4e9b25c0f26454664bbce",
  fetchWeather: function (city) {
    //#region Funkcja fetch
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&lang=pl&appid=" +
        this.apiKey
    )
      //#endregion
      //#region Dane z API
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    //#endregion
    //#region Logi z API
    console.log(name, icon, description, temp, humidity, speed);
    //#endregion
    //#region Wyswietlanie pogody na stronie
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerHTML = description;

    // Sprawdzanie poziomu temperatury
    document.querySelector(".temp").innerHTML =
      "Temperatura: " + Math.round(temp) + "°C";
    // Sprawdzanie poziomu wilgotnosci
    document.querySelector(".humidity").innerHTML =
      "Wilgotność powietrza: " + humidity + "%";
    // Sprawdzanie prędkości wiatru
    document.querySelector(".wind").innerHTML =
      "Prędkość wiatru: " + Math.round(speed) + " km/h";
  },
  //#endregion
};

//#endregion

//#region Zegar
function aktualizacjaCzasu() {
  var czasDzis = new Date();
  let addZeroes = (num) => {
    return num < 10 ? `0${num}` : num;
  };
  let godzina = addZeroes(czasDzis.getHours());
  let minuta = addZeroes(czasDzis.getMinutes());
  let sekunda = addZeroes(czasDzis.getSeconds());

  document.querySelector(
    ".czas"
  ).textContent = `${godzina}:${minuta}:${sekunda}`;
}

setInterval(aktualizacjaCzasu, 500);

// #endregion

// #region Ukrywanie Zawartosci

const panel = document.querySelector(".panel");
const region = document.querySelector(".region");

document.body.onclick = (event) => {
  if (event.target === document.body) {
    console.log("body click");
    panel.style.visibility = "hidden";
  } else {
    console.log("not body click");
    panel.style.visibility = "visible";
  }
};

// #endregion

// #region Dark/Light mode

const toggleTheme = document.querySelector("#toggleTheme");
const themeLink = document.querySelector("#themeLink");

toggleTheme.addEventListener("click", function () {
  if (themeLink.getAttribute("href") == "light.css") {
    themeLink.href = "dark.css";
  } else {
    themeLink.href = "light.css";
  }
});

// #endregion

// #region Zastepowanie tekstu

function nazwaWojewodztwa(wojewodztwo) {
  document.querySelector(".city").innerText = wojewodztwo;
}

// #endregion
