const apiKey = "e0727c9630ec4a5b94b60551262501";

async function getWeather() {
    const cityInput = document.getElementById("cityInput");
    const city = cityInput.value.trim() || "London";

    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        // 🔴 Error handling
        if (data.error) {
            alert("❌ City not found. Please enter a valid city name.");
            return;
        }

        document.getElementById("cityName").innerText = data.location.name;
        document.getElementById("temp").innerText = data.current.temp_c + " °C";
        document.getElementById("condition").innerText = data.current.condition.text;
        document.getElementById("humidity").innerText = data.current.humidity;
        document.getElementById("wind").innerText = data.current.wind_kph;
        document.getElementById("weatherIcon").src =
            "https:" + data.current.condition.icon;

    } catch (error) {
        alert("⚠️ Network error. Check your internet connection.");
    }
}

// Load default city
getWeather();
