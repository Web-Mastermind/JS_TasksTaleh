// -----------------------------------------------------FUNCTION DECLARATION-----------------------------------------------------//
const getdollar = +prompt("Dolların sayını daxil edin")
const getrubl = +prompt("Rubl sayını daxil edin")

function userexchange (dollar, rubl) {
  return "Bütün depozitlər üzrə məbləğ:" + (rubl+(dollar*75))+ "rublnuz var"
}
document.write(userexchange(getdollar, getrubl))

// -----------------------------------------------------FUNCTION EXPRESSION-----------------------------------------------------//
// const getdollar = +prompt("Dolların sayını daxil edin")
// const getrubl = +prompt("Rubl sayını daxil edin")

// const exchange = function userexchange (dollar, rubl) {
//   return "Bütün depozitlər üzrə məbləğ:" + (rubl+(dollar*75))+ "rublnuz var"
// }


// document.write(exchange(getdollar, getrubl))
// -----------------------------------------------------ARROW FUNCTION-----------------------------------------------------//
// const getdollar = +prompt("Dolların sayını daxil edin")
// const getrubl = +prompt("Rubl sayını daxil edin")

// const userexchange = (dollar, rubl) => {
//   return "Bütün depozitlər üzrə məbləğ:" + (rubl+(dollar*75))+ "rublnuz var"
// }

// document.write(userexchange(getdollar, getrubl))

