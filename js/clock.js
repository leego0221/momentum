const clock = document.querySelector("h2#clock");
// h2#clock처럼 id 앞에 태그를 바로 붙여서 써도 되네?

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
  // 아니 함수 뒤에 괄호를 안 붙이는 건 뭔...
}

getClock();
setInterval(getClock, 1000);
