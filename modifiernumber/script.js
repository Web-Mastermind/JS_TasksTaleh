let numbers = [1, 5, -7, 3, -9, 4, -6, 2];

let modifNumbers = numbers.map(function (res) {
  if (res < 0) {
    return -res;
  } 
  else {
    return res * 2;
  }
});

console.log(modifNumbers);