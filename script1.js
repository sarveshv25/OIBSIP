// script1.js

document.getElementById('convertButton').addEventListener('click', convertTemperature);

function convertTemperature() {
    const temperatureInput = document.getElementById('temperature');
    const unitSelect = document.getElementById('unit');
    const resultCelsiusSpan = document.getElementById('resultCelsius').querySelector('.result-value');
    const resultFahrenheitSpan = document.getElementById('resultFahrenheit').querySelector('.result-value');
    const resultKelvinSpan = document.getElementById('resultKelvin').querySelector('.result-value');

    const temperatureValue = parseFloat(temperatureInput.value);
    const selectedUnit = unitSelect.value;

    if (!isNaN(temperatureValue)) {
        let resultCelsius, resultFahrenheit, resultKelvin;

        switch (selectedUnit) {
            case 'celsius':
                resultCelsius = temperatureValue;
                resultFahrenheit = (temperatureValue * 9 / 5) + 32;
                resultKelvin = temperatureValue + 273.15;
                break;
            case 'fahrenheit':
                resultCelsius = (temperatureValue - 32) * 5 / 9;
                resultFahrenheit = temperatureValue;
                resultKelvin = (temperatureValue - 32) * 5 / 9 + 273.15;
                break;
            case 'kelvin':
                resultCelsius = temperatureValue - 273.15;
                resultFahrenheit = (temperatureValue - 273.15) * 9 / 5 + 32;
                resultKelvin = temperatureValue;
                break;
            default:
                break;
        }

        resultCelsiusSpan.textContent = resultCelsius.toFixed(2);
        resultFahrenheitSpan.textContent = resultFahrenheit.toFixed(2);
        resultKelvinSpan.textContent = resultKelvin.toFixed(2);
    }
}
