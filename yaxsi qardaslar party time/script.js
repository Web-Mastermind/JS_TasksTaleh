let name = prompt("enter your name")
let age = +prompt("enter your age")
let gender = prompt("enter your gender")

if ( ( gender === "m" || gender === "M" ) && age >= 18 ) {
  document.write( `Mr. ${ name }, welcome to yaxşı qardaşlar and gözəl xanımlar PARTY` );
}
else if ( ( gender === "f" || gender === "F" ) && age >= 18 ) {
  document.write( `Ms. ${ name }, weclome to yaxşı qardaşlar and gözəl xanımlar PARTY` );
}
else {
  alert( "I'm sorry but you won't be allowed in yaxşı qardaşlar and gözəl xanımlar PARTY" );
}

// let name = prompt("enter your name")
// let age = +prompt("enter your age")
// let gender = prompt("enter your gender")
// const result = age >=18 ? "Yes" : "No"

// if(result === "Yes") {
//   if ( (gender === "m" || gender === "M") ){
//     document.write( `Mr. ${ name }, welcome to yaxşı qardaşlar and gözəl xanımlar PARTY` );
//   }
//   else if ((gender === "f" || gender === "F")) {
//     document.write( `Ms. ${ name }, welcome to yaxşı qardaşlar and gözəl xanımlar PARTY` );
//   }
//   else {
//     alert( "Information is not valid" );
//   }
  
//   }
// else {
//   alert( "I'm sorry but you won't be allowed in yaxşı qardaşlar and gözəl xanımlar PARTY" );
// }
