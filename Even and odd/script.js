const numbers = [1, 4, 7, 8, 3, 5, 0, 2, 4, 6, 12, 15, 18, 46, 45, 48, 97, 84];
let even = 0;
let odd = 0;

numbers.forEach(function (number) {
    if (number % 2 === 0) {
        odd++;
    } else {
        even++;
    }
});

console.log("Evens: " + even);
console.log("Odds: " + odd);
