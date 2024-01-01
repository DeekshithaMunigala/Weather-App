const form = document.getElementById("form");
const latitudeIp = document.getElementById("latitude");
const longitudeIp = document.getElementById("longitude");
const result = document.getElementById("result");
const aqiRes = document.getElementById("aqi");
const coRes = document.getElementById("co");
const no2Res = document.getElementById("no2");
const o3Res = document.getElementById("o3");
const pm2Res = document.getElementById("pm2");
const pm10Res = document.getElementById("pm10");
const so2Res = document.getElementById("so2");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const latitude = latitudeIp.value;
    const longitude = longitudeIp.value;

    const url = `https://air-quality.p.rapidapi.com/history/airquality?lon=${longitude}&lat=${latitude}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'Key here',
            'X-RapidAPI-Host': 'Host here'
        }
    };

    fetch(url, options)
        .then(response => response.json())
        .then(data => {
            let readings = data.data[0];
            console.log(readings);
            aqiRes.textContent = readings.aqi;
            coRes.textContent = readings.co;
            no2Res.textContent = readings.no2;
            o3Res.textContent = readings.o3;
            pm2Res.textContent = readings.pm2;
            pm10Res.textContent = readings.pm10;
            so2Res.textContent = readings.so2;
            result.style.display = 'flex';
        })
});
