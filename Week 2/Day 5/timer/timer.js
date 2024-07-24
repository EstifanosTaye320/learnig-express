const keeper = document.getElementById("time-keeper");
const start = document.getElementById("start-button");
const restart = document.getElementById("restart-button");
const pause = document.getElementById("pause-button");
let counter;

function updateUI(current_time) {
  keeper.textContent = current_time;
}

function clearoutTimer() {
  clearInterval(counter);
}

function timer() {
  let start_time = parseInt(prompt("Give me a start time"));

  if (isNaN(start_time)) {
    alert("please enter a number greater than 0");
    timer();
  }

  updateUI(start_time);

  start.onclick = function () {
    counter = setInterval(function () {
      start_time -= 1;
      updateUI(start_time);

      if (start_time === 0) {
        clearoutTimer();
        alert("Time's Up");
      }
    }, 1000);
  };

  pause.onclick = clearoutTimer;

  restart.onclick = function () {
    clearoutTimer();
    timer();
  };
}

timer();
