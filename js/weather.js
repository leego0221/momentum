const API_KEY = "057b0709617e8781a68c9d86d571cb19";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  // 이 url 안에 날씨 정보들이 json 파일로 있음
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = `${data.weather[0].main} / ${data.main.temp} ℃`;
      city.innerText = data.name;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
// 이 함수로 내 위치(위도, 경도)를 받아올 수 있음

/* openweathermap api를 활용하여 내 위치와 날씨와 온도 등을 받아올 수 있음
 * json 파일이 아직 익숙하지 않고, fetch()와 then 같은 것도 있어서
 * 일단은 api 활용이 이런 식으로 가능하구나 이해만 하고,
 * 세부 내용은 차근차근 알아가도록 하겠음 */
