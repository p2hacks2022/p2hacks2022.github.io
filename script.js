applyRandomHeroBackgroundColor();
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

function applyRandomHeroBackgroundColor(){
    const hero = document.getElementsByClassName("hero-image");
    switch(getRandomInt(8)){
        case 0:
            hero[0].classList.add("hero-red-bg");
            break;
        case 1:
            hero[0].classList.add("hero-green-bg");
            break;
        case 2:
            hero[0].classList.add("hero-blue-bg");
            break;
        case 3:
            hero[0].classList.add("hero-purple-bg");
            break;
        default:
            hero[0].classList.add("hero-black-bg");
            break;
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}