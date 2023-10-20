const secretnumber = 23;

let usernumber = +prompt("Ürəyimdə tutuduğum rəqəmi tapın: 0-50 arasi");
let usercount = 1;

while (usernumber !== secretnumber) {
  usercount++;
  usernumber = +prompt("Cavab sehvdi, Ürəyimdə tutuduğum rəqəmi tap: 0-50 arasi");
}

if (usercount === 1) {
  document.write("Cavab doğrudur: Kapital Bank Hesabınıza 1000AZN köçürüldü")
}
else if (usercount > 1 && usercount <= 5 ) {
  document.write("Cavab doğrudur: Kapital Bank Hesabınıza 750AZN köçürüldü")
}
else if (usercount >5 && usercount <=9) {
  document.write("Cavab doğrudur: Kapital Bank Hesabınıza 250AZN köçürüldü")
}
else {
  document.write("Kapital Bank Hesabınızdan -250AZN bizim hesabımıza köçürüldü")
}