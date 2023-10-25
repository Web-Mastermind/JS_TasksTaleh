// -----------------------------------------------------FUNCTION DECLARATION-----------------------------------------------------//
const getnumber1 = +prompt ('Enter the first number: ');  
const getoperator = prompt('Enter operator to perform the calculation ( +, -, * or / ): '); 
const getnumber2 = +prompt ('Enter the second number: ');  

let result;

function calc (number1, number2, operator) {

  if (operator == '+') {   
    result = number1 + number2;  
  }  
  else if (operator == '-') { 
    result = number1 - number2;  
  }  
  else if (operator == '*') { 
    result = number1 * number2;  
  }  
  else {  
    result = number1 / number2;   
  }  
  
}
calc(getnumber1, getnumber2, getoperator)
document.write(result)

// -----------------------------------------------------FUNCTION EXPRESSION-----------------------------------------------------//
// const getnumber1 = +prompt ('Enter the first number: ');  
// const getoperator = prompt('Enter operator to perform the calculation ( +, -, * or / ): '); 
// const getnumber2 = +prompt ('Enter the second number: ');  

// let result;

// const getcalc = function calc (number1, number2, operator) {

//   if (operator == '+') {   
//     result = number1 + number2;  
//   }  
//   else if (operator == '-') { 
//     result = number1 - number2;  
//   }  
//   else if (operator == '*') { 
//     result = number1 * number2;  
//   }  
//   else {  
//     result = number1 / number2;   
//   }  
  
// }

// getcalc(getnumber1, getnumber2, getoperator)
// document.write(result)

// -----------------------------------------------------ARROW FUNCTION-----------------------------------------------------//
// const getnumber1 = +prompt ('Enter the first number: ');  
// const getoperator = prompt('Enter operator to perform the calculation ( +, -, * or / ): '); 
// const getnumber2 = +prompt ('Enter the second number: ');  

// let result;

// calc = (number1, number2, operator) => {

//   if (operator == '+') {   
//     result = number1 + number2;  
//   }  
//   else if (operator == '-') { 
//     result = number1 - number2;  
//   }  
//   else if (operator == '*') { 
//     result = number1 * number2;  
//   }  
//   else {  
//     result = number1 / number2;   
//   }  
  
// }

// calc(getnumber1, getnumber2, getoperator)
// document.write(result)