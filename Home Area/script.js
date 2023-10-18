let area = +prompt("Enter House Area")
let price = prompt("Enter Apartment Price")
let exchange = prompt("Enter Currency")

if (area >= 2000 && price === "99.999" && ( exchange == "azn" || exchange === "AZN" || exchange === "Azn" || exchange === "aZn" || exchange === "azN" )) {
  document.write("Xeyirli olsun, sağlığnan oturasan")
}
else {
  alert("I am not interested")
}
