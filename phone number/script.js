// -----------------------------------------------------FUNCTION DECLARATION-----------------------------------------------------//
let getcountry = +prompt("Enter Country code")
let getusernumber = prompt("Enter phone number")

function checknumber(code, number) {
  if (code === +7 && number.length === 9) {
    return true;
  }
    
  else {
    return false;
  }
}

document.write(checknumber(getcountry, getusernumber))
console.log(checknumber(getcountry, getusernumber))
// -----------------------------------------------------FUNCTION EXPRESSION-----------------------------------------------------//

// let getcountry = +prompt("Enter Country code")
// let getusernumber = prompt("Enter phone number")


// const phone = function checknumber(code, number) {
//   if (code === +7 && number.length === 11) {
//     return true;
//   }
    
//   else {
//     return false;
//   }
// }

// document.write(phone(getcountry, getusernumber))
// console.log(phone(getcountry, getusernumber))
// -----------------------------------------------------ARROW FUNCTION-----------------------------------------------------//
// let getcountry = +prompt("Enter Country code")
// let getusernumber = prompt("Enter phone number")

// const phone = (code, number) => {
//   if (code === +7 && number.length === 11) {
//     return true;
//   }
    
//   else {
//     return false;
//   }
// }

// document.write(phone(getcountry, getusernumber))
// console.log(phone(getcountry, getusernumber))
