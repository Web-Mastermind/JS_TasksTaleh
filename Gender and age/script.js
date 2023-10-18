let name = prompt("What's your Name?")
let gndr = prompt("What's your gender?")

if (gndr === "m" || gndr === "M"){
  document.write(`Hi Mr ${name}`)
}
else if (gndr === "f" || gndr === "F"){
  document.write(`Hi Ms ${name}`)
}
else {
  alert("please enter valid details")
}



// let name = prompt("What's your Name?")
// let gndr = prompt("What's your gender?")

// switch(gndr) {
//   case "m":
//   case "M":
//     document.write(`Hi Mr ${name}`)
//     break;
//   case "f":
//   case "F":
//     document.write(`Hi Mrs ${name}`)
//     break;
//   default: alert("please enter valid details")
// }