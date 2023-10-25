// -----------------------------------------------------FUNCTION DECLARATION-----------------------------------------------------//
const getnumber1 = +prompt("Enter first number")
const getnumber2 = +prompt("Enter second number")
const getnumber3 = +prompt("Enter third number")

function usernumber (number1, number2, number3) {
  if (number1 > number2 && number1 > number3){
    return `${number1}`
  }
  else if (number2 > number1 && number2 > number3){
    return `${number2}`
  }
  else {
    return `${number3}`
  }  
  
}
document.write(usernumber(getnumber1, getnumber2, getnumber3))
console.log(usernumber(getnumber1, getnumber2, getnumber3))

// -----------------------------------------------------FUNCTION EXPRESSION-----------------------------------------------------//
// const getnumber1 = +prompt("Enter first number")
// const getnumber2 = +prompt("Enter second number")
// const getnumber3 = +prompt("Enter third number")

// const getnumber = function usernumber (number1, number2, number3) {
//   if (number1 > number2 && number1 > number3){
//     return `${number1}`
//   }
//   else if (number2 > number1 && number2 > number3){
//     return `${number2}`
//   }
//   else {
//     return `${number3}`
//   }  
  
// }
// document.write(getnumber(getnumber1, getnumber2, getnumber3))
// console.log(getnumber(getnumber1, getnumber2, getnumber3))

// -----------------------------------------------------ARROW FUNCTION-----------------------------------------------------//
// const getnumber1 = +prompt("Enter first number")
// const getnumber2 = +prompt("Enter second number")
// const getnumber3 = +prompt("Enter third number")

// const usernumber = (number1, number2, number3) => {
//   if (number1 > number2 && number1 > number3){
//     return `${number1}`
//   }
//   else if (number2 > number1 && number2 > number3){
//     return `${number2}`
//   }
//   else {
//     return `${number3}`
//   }  
  
// }
// document.write(usernumber(getnumber1, getnumber2, getnumber3))
// console.log(usernumber(getnumber1, getnumber2, getnumber3))
