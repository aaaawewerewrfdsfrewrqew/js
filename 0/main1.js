const car = {
    manufacturer: "Toyota",
    model: "Corolla",
    year: 2018,
    averageSpeed: 90
};

function showCarInfo(car) {
    console.log(`Виробник: ${car.manufacturer}
Модель: ${car.model}
Рік випуску: ${car.year}
Середня швидкість: ${car.averageSpeed} км/год`);
}

function calculateTravelTime(car, distance) {
    const pureTime = distance / car.averageSpeed;
    const breaks = Math.floor(pureTime / 4);
    return pureTime + breaks;
}

showCarInfo(car);
console.log("Час у дорозі:", calculateTravelTime(car, 450), "год.");

const fraction = (numerator, denominator) => ({ numerator, denominator });

function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function simplify(fr) {
    const divisor = gcd(fr.numerator, fr.denominator);
    return fraction(fr.numerator / divisor, fr.denominator / divisor);
}

function add(fr1, fr2) {
    const num = fr1.numerator * fr2.denominator + fr2.numerator * fr1.denominator;
    const den = fr1.denominator * fr2.denominator;
    return simplify(fraction(num, den));
}

function subtract(fr1, fr2) {
    const num = fr1.numerator * fr2.denominator - fr2.numerator * fr1.denominator;
    const den = fr1.denominator * fr2.denominator;
    return simplify(fraction(num, den));
}

function multiply(fr1, fr2) {
    const num = fr1.numerator * fr2.numerator;
    const den = fr1.denominator * fr2.denominator;
    return simplify(fraction(num, den));
}

function divide(fr1, fr2) {
    const num = fr1.numerator * fr2.denominator;
    const den = fr1.denominator * fr2.numerator;
    return simplify(fraction(num, den));
}

const a = fraction(1, 3);
const b = fraction(1, 6);

console.log("Сума:", add(a, b));
console.log("Різниця:", subtract(a, b));
console.log("Добуток:", multiply(a, b));
console.log("Частка:", divide(a, b));

const time = {
    hours: 20,
    minutes: 30,
    seconds: 45
};

function showTime(t) {
    console.log(
        `${String(t.hours).padStart(2, '0')}:` +
        `${String(t.minutes).padStart(2, '0')}:` +
        `${String(t.seconds).padStart(2, '0')}`
    );
}

function normalize(t) {
    t.minutes += Math.floor(t.seconds / 60);
    t.seconds = t.seconds % 60;

    t.hours += Math.floor(t.minutes / 60);
    t.minutes = t.minutes % 60;

    t.hours = t.hours % 24;

    return t;
}

function addSeconds(t, sec) {
    t.seconds += sec;
    return normalize(t);
}

function addMinutes(t, min) {
    t.minutes += min;
    return normalize(t);
}

function addHours(t, hrs) {
    t.hours += hrs;
    return normalize(t);
}

showTime(time);                
addSeconds(time, 30);
showTime(time);

addMinutes(time, 40);          
showTime(time);

