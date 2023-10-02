// Define the function outside window.onload to make it globally accessible
// create a function to update the date and time
// create a new `Date` object
// get the current date and time as a string
// update the `textContent` property of the `span` element with the `id` of `datetime`
// call the `updateDateTime` function every second
// Run every second thereafter

//Function to display the date and time
function updateDateTime() {
  //event.preventDefault(); // Prevent the default behavior that causes page reload
  const now = new Date();
  const currentDateTime = now.toLocaleString();
  document.querySelector("#datetime").textContent = currentDateTime;
}

// Set an interval to update the date and time every second
// Add an event listener to the document for the "DOMContentLoaded" event
document.addEventListener("DOMContentLoaded", function () {
  setInterval(updateDateTime, 1000);
});

//Function to display city input
// Function to handle form submission
function searchButton(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-input");
  let h2 = document.querySelector("#city-display");
  let city = searchInput.value.trim();

  if (city && weatherData.hasOwnProperty(city)) {
    h2.innerHTML = `${city}`;
    // You can add more code here to display temperature, humidity, etc.
  } else {
    alert("City not found or data unavailable");
  }
}
document.addEventListener("DOMContentLoaded", function () {
  let form = document.querySelector("#search-form");
  form.addEventListener("submit", searchButton); // This line associates the submit event with searchButton
});

// **Eventually will display temperature, humidity, or other data as needed
// For example:
// document.querySelector(".temp-value").textContent = weatherData[city].temperatureF;
// document.querySelector(".unit").textContent = "°F";

let weatherData = {
  Paris: {
    temperatureF: "69.5°F",
    temperatureC: "20.3°C",
    humidity: "80%"
  },
  Tokyo: {
    temperatureF: "59.9°F",
    temperatureC: "15.4°C",
    humidity: "50%"
  },
  Lisbon: {
    temperatureF: "83.3°F",
    temperatureC: "28.7°C",
    humidity: "20%"
  },
  "San Francisco": {
    temperatureF: "75.2°F",
    temperatureC: "24.8°C",
    humidity: "100%"
  },
  Chicago: {
    temperatureF: "74.6°F",
    temperatureC: "24.5°C",
    humidity: "77%"
  }
};

//Function to convert C&F temps
function convertToFahrenheit2(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 6;
}
function convertToCelsius2(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 19;
}
let fahrenheitLink2 = document.querySelector("#fahrenheit-link");
fahrenheitLink2.addEventListener("click", convertToFahrenheit2);

let celsiusLink2 = document.querySelector("#celsius-link");
celsiusLink2.addEventListener("click", convertToCelsius2);

//Function to display C&F temps
function converttoFahrenheit(event) {
  event.preventDefault();
  let displayFahrenheit = document.querySelector("#temp-value-F");

  displayFahrenheit.innerHTML = 63;
}

function converttoCelsius(event) {
  event.preventDefault();
  let displayCelsius = document.querySelector("#temp-value-C");
  displayCelsius.innerHTML = 17;
}

let fahrenheitLink = document.querySelector("#temp-value-F");
fahrenheitLink.addEventListener("click", converttoFahrenheit);

let celsiusLink = document.querySelector("#temp-value-C");
celsiusLink.addEventListener("click", converttoCelsius);
