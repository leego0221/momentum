const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const header = document.querySelector("#header");

const _clock = document.querySelector("#clock");
const _todoHeader = document.querySelector("#todo-header");
const _todoForm = document.querySelector("#todo-form");
const _todoList = document.querySelector("#todo-list");
const _quote = document.querySelector("#quote");
const _weather = document.querySelector("#weather");
// 확인용

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
/* 일반적으로 string만 포함된 변수는 대문자로 표기
 * string을 저장하고 싶을 때 사용 (중복 사용 시 오타 방지와 에러 잡기 위함) */

function addContents() {
  _clock.className = "log-in";
  _todoHeader.classList.remove(HIDDEN_CLASSNAME);
  _todoForm.classList.remove(HIDDEN_CLASSNAME);
  _todoList.classList.remove(HIDDEN_CLASSNAME);
  _quote.classList.remove(HIDDEN_CLASSNAME);
  _weather.classList.remove(HIDDEN_CLASSNAME);
}

function removeContents() {
  _clock.className = "log-out";
  _todoHeader.classList.add(HIDDEN_CLASSNAME);
  _todoForm.classList.add(HIDDEN_CLASSNAME);
  _todoList.classList.add(HIDDEN_CLASSNAME);
  _quote.classList.add(HIDDEN_CLASSNAME);
  _weather.classList.add(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event) {
  event.preventDefault();
  header.classList.add(HIDDEN_CLASSNAME);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  addContents();
  greeting.innerText = `Nice to meet you, ${username}.`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  removeContents();
  header.classList.remove(HIDDEN_CLASSNAME);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
