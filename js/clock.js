const clockTitle = document.querySelector(".js-clock");

function chClock() {
    const today = new Date();
    const hours = String(today.getHours()).padStart(2, "0");
    const minutes = String(today.getMinutes()).padStart(2, "0");
    const seconds = String(today.getSeconds()).padStart(2, "0");
    clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}
chClock();

setInterval(chClock, 1000);