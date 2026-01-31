const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const timer = document.getElementById('timer');
const landing = document.getElementById('landing');

const targetDate = new Date('2026-07-04T16:00:00');
let finished = false;

function tick(el) {
    el.parentElement.classList.remove('tick');
    void el.offsetWidth;
    el.parentElement.classList.add('tick');
}

function updateTimer() {
    const now = new Date();
    const remainingTime = targetDate - now;

    if (remainingTime <= 0 && !finished) {
        finished = true;

        landing.classList.add('fade-out');

        setTimeout(() => {
            window.location.href = "https://noragroup.github.io/flcflix/";
        }, 1500);

        return;
    }

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
    const seconds = Math.floor((remainingTime / 1000) % 60);

    daysElement.textContent = String(days).padStart(2, '0');
    hoursElement.textContent = String(hours).padStart(2, '0');
    minutesElement.textContent = String(minutes).padStart(2, '0');
    secondsElement.textContent = String(seconds).padStart(2, '0');

    tick(secondsElement);
}

updateTimer();
setInterval(updateTimer, 1000);
