// -----------------------------------------------------FUNCTION EXPRESSION-----------------------------------------------------//
// const getName = function username (name) {
//   document.write(`${name} is active now  <br />`)
// }

// getName("Alionore") 
// getName("Leonid") 
// getName("Leon") 

// -----------------------------------------------------FUNCTION DECLARATION-----------------------------------------------------//
function username (name) {
  document.write(`${name} is active now  <br />`)
}

username("Alionore") 
username("Leonid") 
username("Leon") 

// -----------------------------------------------------ARROW FUNCTION-----------------------------------------------------//
// const username = (name) => {
//   console.log(`${name} is active now`)
// }
// username("Alionore")
// username("Leonid")
// username("Leon")

// -----------------------------------------------------CALLBACK FUNCTION (FUNCTION EXPRESSION)-----------------------------------------------------//
// const username = "Taleh"
// const getusername = prompt("Enter your Name")

// const namefunc = function(answer, correctanswer, correct, wronganswer) {
//   if (correctanswer == answer) {
//     correct()
//   }else {
//     wronganswer()
//   }
  
// }

// namefunc(
//   username,
//   getusername,
//   function() {document.write(`${username} is active now`)},
//   function() {document.write(`Wrong username`)} 
//    )