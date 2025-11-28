function compareStringsLength(str1, str2) {
    if (str1.length > str2.length) {
        return 1;
    } else if (str1.length < str2.length) {
        return -1;
    } else {
        return 0;
    }
}

function capitalizeFirstChar(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

function countVowels(str) {
    const vowels = "aeiouаеєиіїоуюяAEIOUАЕЄИІЇОУЮЯ";
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

console.log(compareStringsLength("Hello", "Hi"));
console.log(capitalizeFirstChar("hello"));
console.log(countVowels("Привіт"));