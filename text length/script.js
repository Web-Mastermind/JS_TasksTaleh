// -----------------------------------------------------FUNCTION DECLARATION-----------------------------------------------------//
let gettxt = prompt("Mətni daxil edin")

function words(text){
  return text.length
}

document.write(words(gettxt))
console.log(words(gettxt))

// -----------------------------------------------------FUNCTION EXPRESSION-----------------------------------------------------//
// let gettxt = prompt("Mətni daxil edin")

// const gettext = function words(text){
//   return text.length
// }

// document.write(gettext(gettxt))
// console.log(gettext(gettxt))

// -----------------------------------------------------ARROW FUNCTION-----------------------------------------------------//
// let gettxt = prompt("Mətni daxil edin")

// const gettext = (text) => {
//   return text.length
// }

// document.write(gettext(gettxt))
// console.log(gettext(gettxt))