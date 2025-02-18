$(function () {
  let timer = document.querySelector('.timer__timer');
  let time = 600;
  let startTime = 600;

  function countDown() {
    if (window.innerWidth >= 767) {
      let hours = Math.floor(time / 3600);
      let minutes = Math.floor((time % 3600) / 60);
      let seconds = time % 60;

      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      timer.innerHTML = `${hours} : ${minutes} : ${seconds}`;

      if (time > 0) {
        time--;
      } else if (time === 0) {
        time = startTime;
      }
    }
  }
  countDown();
  setInterval(countDown, 1000)
  window.addEventListener('resize', countDown);
});