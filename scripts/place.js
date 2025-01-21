// WEATHER
function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 50 && windSpeed > 3) {
        const windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
        return windChill.toFixed(2);
    } else {
        return "N/A";
    }
}

const temperatureElement = document.getElementById("temperature");
const conditionsElement = document.getElementById("conditions");
const windElement = document.getElementById("wind");
const windChillElement = document.getElementById("windChill");

temperatureElement.textContent = 0;
conditionsElement.textContent = 0;
windElement.textContent = 0;
windChillElement.textContent = `${calculateWindChill(23.5, 9)} C`;

// MODIFY FOOTER
const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const yearElement = document.getElementById("year");
const lastModifiedElement = document.getElementById("lastModified");

yearElement.textContent = currentYear;
lastModifiedElement.textContent = document.lastModified;