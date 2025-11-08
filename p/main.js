function minNumber(a, b) {
    return (a < b) ? a : b;
}

console.log("Min of 5 and 10:", minNumber(5, 10));

function powerNumber(base, exponent) {
    return Math.pow(base, exponent);
}

console.log("2^5 =", powerNumber(2, 5));

function calculate(a, b, operator) {
    switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': 
            if (b !== 0) return a / b;
            else return "Error: division by zero";
        default: return "Error: unknown operator";
    }
}

console.log("5 + 3 =", calculate(5, 3, '+'));
console.log("10 / 0 =", calculate(10, 0, '/'));
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log("Is 7 prime?", isPrime(7));
console.log("Is 12 prime?", isPrime(12));

function multiplicationTable(n) {
    console.log(`Multiplication table for ${n}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
    console.log('');
}

for (let i = 2; i <= 9; i++) {
    multiplicationTable(i);
}