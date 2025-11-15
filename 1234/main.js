function compareNumbers(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}

function factorial(n) {
    if (n < 0) return undefined;
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

function makeNumber(a, b, c) {
    return a * 100 + b * 10 + c;
}

function rectangleArea(width, height) {
    if (height === undefined) {
        return width * width; 
    }
    return width * height;
}

function isPerfectNumber(n) {
    if (n <= 1) return false;

    let sum = 0;
    for (let i = 1; i <= n / 2; i++) {
        if (n % i === 0) sum += i;
    }
    return sum === n;
}

function showPerfectInRange(min, max) {
    let arr = [];
    for (let i = min; i <= max; i++) {
        if (isPerfectNumber(i)) {
            arr.push(i);
        }
    }
    return arr;
}

function formatTime(h, m = 0, s = 0) {
    function addZero(x) {
        return x < 10 ? '0' + x : x;
    }
    return addZero(h) + ':' + addZero(m) + ':' + addZero(s);
}

function toSeconds(h, m, s) {
    return h * 3600 + m * 60 + s;
}

function fromSeconds(totalSeconds) {
    let h = Math.floor(totalSeconds / 3600);
    let m = Math.floor((totalSeconds % 3600) / 60);
    let s = totalSeconds % 60;

    return formatTime(h, m, s);
}

function timeDifference(h1, m1, s1, h2, m2, s2) {
    let t1 = toSeconds(h1, m1, s1);
    let t2 = toSeconds(h2, m2, s2);

    let diff = Math.abs(t1 - t2);

    return fromSeconds(diff);
}

console.log("1) compareNumbers(3, 7) →", compareNumbers(3, 7));
console.log("   compareNumbers(10, 2) →", compareNumbers(10, 2));
console.log("   compareNumbers(5, 5) →", compareNumbers(5, 5));

console.log("\n2) factorial(5) →", factorial(5));

console.log("\n3) makeNumber(1, 4, 9) →", makeNumber(1, 4, 9));

console.log("\n4) rectangleArea(5, 10) →", rectangleArea(5, 10));
console.log("   rectangleArea(7) (квадрат) →", rectangleArea(7));

console.log("\n5) isPerfectNumber(28) →", isPerfectNumber(28));
console.log("   isPerfectNumber(12) →", isPerfectNumber(12));

console.log("\n6) showPerfectInRange(1, 10000) →", showPerfectInRange(1, 10000));

console.log("\n7) formatTime(5, 7, 9) →", formatTime(5, 7, 9));
console.log("   formatTime(12) →", formatTime(12));

console.log("\n8) toSeconds(1, 1, 1) →", toSeconds(1, 1, 1));

console.log("\n9) fromSeconds(3661) →", fromSeconds(3661));

console.log("\n10) timeDifference(12,30,15, 10,10,10) →", timeDifference(12,30,15, 10,10,10));