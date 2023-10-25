// -----------------------------------------------------FUNCTION DECLARATION-----------------------------------------------------//
const getnumber1 = +prompt("Enter first number")
const getnumber2 = +prompt("Enter second number")

function usernumber (number1, number2) {
  if (number1 > number2){
    return `${number2}`
  }
  else {
    return `${number1}`
  }

}

document.write(usernumber(getnumber1, getnumber2))
console.log(usernumber(getnumber1, getnumber2))

// -----------------------------------------------------FUNCTION EXPRESSION-----------------------------------------------------//
// const getnumber1 = +prompt("Enter first number")
// const getnumber2 = +prompt("Enter second number")

// const getnumber = function usernumber (number1, number2) {
//   if (number1 > number2){
//     return `${number2}`
//   }
//   else {
//     return `${number1}`
//   }

// }

// document.write(getnumber(getnumber1, getnumber2))
// console.log(getnumber(getnumber1, getnumber2))

// -----------------------------------------------------ARROW FUNCTION-----------------------------------------------------//
// const getnumber1 = +prompt("Enter first number")
// const getnumber2 = +prompt("Enter second number")

// const usernumber = (number1, number2) => {
//   if (number1 > number2){
//     return `${number2}`
//   }
//   else {
//     return `${number1}`
//   }

// }

// document.write(usernumber(getnumber1, getnumber2))
// console.log(usernumber(getnumber1, getnumber2))
