const calculate = {
  num1: +prompt("Enter the first number:"),
  num2: +prompt("Enter the second number:"),
  add: function () {
    console.log(this.num1 + this.num2);
  },
  subtract: function () {
    console.log(this.num1 - this.num2);
  },
  multiply: function () {
    console.log(this.num1 * this.num2);
  },
  divide: function () {
    if(this.num2 !== 0) {
      console.log(this.num1 / this.num2);
    }
    else {
      console.log("Error: Division by zero");
    }
  }
}

calculate.add()
calculate.subtract()
calculate.multiply()
calculate.divide()

// const calculate = {
//   num1: +prompt("Enter the first number:"),
//   num2: +prompt("Enter the second number:"),
//   add:  () => {
//     console.log(calculate.num1 + calculate.num2);
//   },
//   subtract:  () => {
//     console.log(calculate.num1 - calculate.num2);
//   },
//   multiply:  () => {
//     console.log(calculate.num1 * calculate.num2);
//   },
//   divide:  () => {
//     if (calculate.num2 !== 0) {
//       console.log(calculate.num1 / calculate.num2);
//     }
//     else {
//       console.log("Error: Division by zero");
//   }
//   }
// }

// calculate.add()
// calculate.subtract()
// calculate.multiply()
// calculate.divide()
