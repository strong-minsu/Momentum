const API_KEY = "0ee916d7764ca82dddcfddc70deb51e3";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data =>{
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");

        weather.innerText = data.name;
        city.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}



function onGeoError(){
    alert("Can's find you. No weather for you.");
}



navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);