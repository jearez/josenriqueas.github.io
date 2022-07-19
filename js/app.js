const daysUI = document.getElementById('days');
const hoursUI = document.getElementById('hours');
const minutesUI = document.getElementById('minutes');
const secondsUI = document.getElementById('seconds');


const countDownDate = new Date('Aug 02, 2022 00:00:00').getTime();

let now = new Date().getTime();
let time = calcRemainingTime(now);

if (!time.isExpired) {
  outputCountDown(time.days, time.hours, time.minutes, time.seconds);
  
  var x = setInterval(function() {
    now = new Date().getTime();

    time = calcRemainingTime(now);
  
    outputCountDown(time.days, time.hours, time.minutes, time.seconds);
  }, 1000);
} else {
  clearInterval(x);
  document.getElementById('countdown').innerHTML = '<h2 class="text-uppercase text-danger display-4">Trolleado</h2>';
}


function calcRemainingTime(date) {
  let distance = countDownDate - date;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  let isExpired = false;
  if (distance < 0) {
    isExpired = true;
  }

  return {
    distance,
    isExpired,
    days,
    hours,
    minutes,
    seconds
  };
}

function outputCountDown(days, hours, minutes, seconds) {
  daysUI.innerText = days;
  hoursUI.innerText = hours;
  minutesUI.innerText = minutes;
  secondsUI.innerText = seconds;
}
