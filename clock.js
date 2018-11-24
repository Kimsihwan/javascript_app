const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`; // 삼항 연산자 세컨즈가 10보다 작으면 `0${seconds}` 실행 그렇지 않으면 seconds 실행
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
