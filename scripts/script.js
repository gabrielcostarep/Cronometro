let hour = 0;
let minute = 0;
let seconds = 0;
let time = 1000;
let stopwatch;
let onStart = false;
let text = document.querySelector('#counter');

function startCount() {
  if (!onStart) {
    stopwatch = setInterval(timer, time);
    onStart = true;
  } else {
    return;
  }
}

function pauseCount() {
  if (onStart) {
    clearInterval(stopwatch);
    onStart = false;
  } else {
    return;
  }
}

function clearCount() {
  clearInterval(stopwatch);
  hour = 0;
  minute = 0;
  seconds = 0;
  onStart = false;
  text.innerText = '00:00:00';
}

function count(element) {
  return element < 10 ? `0${element}` : element;
}

function timer() {
  seconds++;

  if (seconds == 60) {
    seconds = 0;
    minute++;
  }

  if (minute == 60) {
    minute = 00;
    hour++;
  }

  let format = `${count(hour)}:${count(minute)}:${count(seconds)}`;
  text.innerText = format;
}
