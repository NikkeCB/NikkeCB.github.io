const Days = document.getElementById('days');
const Hours = document.getElementById('hours');
const Minutes = document.getElementById('minutes');

const targetDate = new Date("December 12 2026 00:00").getTime();

function timer (){
    const currentDate = new Date().getTime();
    const distance = targetDate - currentDate;

    const days = Math.floor(distance /1000 / 60 / 60 / 24);
    const hours = Math.floor(distance /1000 / 60 / 60) % 24;
    const minutes = Math.floor(distance /1000 / 60) % 60;


    console.log(days + ":" + hours + ":" + minutes);

    Days.innerHTML = days;
    Hours.innerHTML = hours;
    Minutes.innerHTML = minutes;
}

setInterval(timer, 1000);