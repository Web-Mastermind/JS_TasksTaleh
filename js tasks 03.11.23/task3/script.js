let sum = 0;

for (let i = 10; i <= 99; i++) {
  if (i % 2 !== 0) {
    sum += i;
  }
}

console.log(`The sum of all two-digit odd numbers is: ${sum}`);
