countDown();
setInterval(countDown,1000);

function countDown() {
    const day = document.getElementById("day");
    const hour = document.getElementById("hour");
    const min = document.getElementById("min");
    const sec = document.getElementById("sec");
    const now = new Date();
    const openTime = new Date(2022, 11, 1, 0)
    const diff = openTime.getTime() - now.getTime();

    const calcDay = Math.floor(diff / 1000 / 60 / 60 / 60);
    const calcHour = Math.floor(diff / 1000 / 60 / 60) % 24;
    const calcMin = Math.floor(diff / 1000 / 60) % 60;
    const calcSec = Math.floor(diff / 1000) % 60;

    day.innerHTML = calcDay < 10 ? '0' + calcDay : calcDay;
    hour.innerHTML = calcHour < 10 ? '0' + calcHour : calcHour;
    min.innerHTML = calcMin < 10 ? '0' + calcMin : calcMin;
    sec.innerHTML = calcSec < 10 ? '0' + calcSec : calcSec;
}