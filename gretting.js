const form = document.querySelector(".js-form"),
  input = document.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSumbit(event) {
  event.preventDefault(); // 엔터를 눌렀을때 정보가 안사라짐
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSumbit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName(); // 유저가 없을경우
  } else {
    paintGreeting(currentUser); // 유저가 있을경우
  }
}

function init() {
  loadName();
}

init();
