const daysEl  = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minEl   = document.getElementById('min');
const seconEl = document.getElementById('secon');

const newYears = '1 Jan 2024';

function countdown () {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSecond = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSecond / 3600 / 24);
    const hours = Math.floor(totalSecond / 3600) % 24;
    const minutes = Math.floor(totalSecond / 60) % 60;
    const seconds = Math.floor(totalSecond) % 60
    
    daysEl.innerHTML = days
    hoursEl.innerHTML = formatTime(hours)
    minEl.innerHTML = formatTime(minutes)
    seconEl.innerHTML = formatTime(seconds)
}

function formatTime(time) {
    return time < 10 ? ( `0${time}`) : time;
}
countdown();

setInterval(countdown,1000)