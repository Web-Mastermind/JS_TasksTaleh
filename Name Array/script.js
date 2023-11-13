let names = ['Sam', 'Alan', 'Bill', 'Adam', 'Anna', 'George'];
let newNameArr = [];

names.forEach(function(name) {
  if (name.charAt(0) === 'A') {
    newNameArr.push(name);
  }
});

console.log(newNameArr);
