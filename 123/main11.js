function showMessage() {
    setTimeout(() => {
        console.log("Повідомлення через 3 секунди!");
    }, 3000);
}
showMessage();

function greetUser(name) {
    setTimeout(() => {
        console.log(`Привіт, ${name}!`);
    }, 2000);
}
greetUser("Олег");

let counter = 1;
let interval = setInterval(() => {
    console.log(counter);
    counter++;
    if (counter > 10) {
        clearInterval(interval);
    }
}, 1000);

let number = 10;
let countdown = setInterval(() => {
    console.log(number);
    number--;
    if (number < 0) {
        console.log("Старт!");
        clearInterval(countdown);
    }
}, 1000);

function getCurrentDate() {
    const now = new Date();
    let day = String(now.getDate()).padStart(2, "0");
    let month = String(now.getMonth() + 1).padStart(2, "0");
    let year = now.getFullYear();
    console.log(`${day}.${month}.${year}`);
}
getCurrentDate();

function getAge(birthYear) {
    const now = new Date();
    return now.getFullYear() - birthYear;
}
console.log(getAge(2000));

function daysToNewYear() {
    const now = new Date();
    const newYear = new Date(now.getFullYear() + 1, 0, 1);
    const diff = newYear - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    console.log(`До Нового року залишилось ${days} днів`);
}
daysToNewYear();

function random100() {
    return Math.floor(Math.random() * 100) + 1;
}
console.log(random100());

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}
console.log(rollDice());

function maxOfThree(a, b, c) {
    return Math.max(a, b, c);
}
console.log(maxOfThree(10, 5, 7));

function countdownTo(date) {
    const target = new Date(date);

    setInterval(() => {
        const now = new Date();
        const diff = target - now;

        if (diff <= 0) {
            console.log("Час вийшов!");
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        console.log(`Залишилось: ${days} днів ${hours} годин ${minutes} хвилин ${seconds} секунд`);
    }, 1000);
}

countdownTo("2025-01-01");

setInterval(() => {
    const now = new Date();
    let h = String(now.getHours()).padStart(2, "0");
    let m = String(now.getMinutes()).padStart(2, "0");
    let s = String(now.getSeconds()).padStart(2, "0");
    console.log(`Годинник: ${h}:${m}:${s}`);
}, 1000);

let isRed = false;

setInterval(() => {
    const el = document.getElementById("blink");
    el.style.color = isRed ? "blue" : "red";
    isRed = !isRed;
}, 500);