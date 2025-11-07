let age = +prompt("Введіть ваш вік:");
if (age >= 0 && age < 12) {
  alert("Ви дитина");
} else if (age < 18) {
  alert("Ви підліток");
} else if (age < 60) {
  alert("Ви дорослий");
} else if (age >= 60) {
  alert("Ви пенсіонер");
} else {
  alert("Некоректно введено вік");
}

let num = prompt("Введіть число від 0 до 9:");
switch (num) {
  case "0": alert(")"); break;
  case "1": alert("!"); break;
  case "2": alert("@"); break;
  case "3": alert("#"); break;
  case "4": alert("$"); break;
  case "5": alert("%"); break;
  case "6": alert("^"); break;
  case "7": alert("&"); break;
  case "8": alert("*"); break;
  case "9": alert("("); break;
  default: alert("Некоректне число");
}

let threeNum = prompt("Введіть тризначне число:");
if (
  threeNum.length === 3 &&
  (threeNum[0] === threeNum[1] ||
   threeNum[0] === threeNum[2] ||
   threeNum[1] === threeNum[2])
) {
  alert("Є однакові цифри");
} else {
  alert("Усі цифри різні");
}

let year = +prompt("Введіть рік:");
if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
  alert("Рік високосний");
} else {
  alert("Рік не високосний");
}

let fiveNum = prompt("Введіть п'ятизначне число:");
let palindrome = fiveNum === fiveNum.split('').reverse().join('');
alert(palindrome ? "Це паліндром" : "Це не паліндром");

let usd = +prompt("Введіть суму в USD:");
let currency = prompt("У яку валюту конвертувати? (EUR, UAN, AZN)").toUpperCase();
let rate;
switch (currency) {
  case "EUR": rate = 0.9; break;
  case "UAN": rate = 42; break;
  case "AZN": rate = 1.7; break;
  default: alert("Невідома валюта"); rate = null;
}
if (rate) alert(`${usd} USD = ${(usd * rate).toFixed(2)} ${currency}`);

let sum = +prompt("Введіть суму покупки:");
let discount =
  sum >= 500 ? 7 :
  sum >= 300 ? 5 :
  sum >= 200 ? 3 : 0;
alert(`Ваша знижка ${discount}%. До сплати: ${(sum * (1 - discount / 100)).toFixed(2)}`);

let circleLength = +prompt("Введіть довжину кола:");
let squarePerimeter = +prompt("Введіть периметр квадрата:");
let circleDiameter = circleLength / Math.PI;
let squareSide = squarePerimeter / 4;
alert(circleDiameter <= squareSide ? "Коло поміститься" : "Коло не поміститься");

let score = 0;
let q1 = prompt("Яка столиця України? (Київ, Львів, Харків)");
if (q1 == "Київ") score += 2;
let q2 = prompt("Скільки буде 2+2? (3, 4, 5)");
if (q2 == "4") score += 2;
let q3 = prompt("Який колір не є в спектрі? (Червоний, Зелений, Рожевий)");
if (q3 == "Рожевий") score += 2;
alert(`Ви набрали ${score} балів`);

let day = +prompt("Введіть день:");
let month = +prompt("Введіть місяць:");
let yearDate = +prompt("Введіть рік:");

let date = new Date(yearDate, month - 1, day);
date.setDate(date.getDate() + 1);
alert(`Наступна дата: ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`);