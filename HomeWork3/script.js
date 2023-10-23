const currentpassword = 123456;

let userpassword = +prompt("Parolı daxil edin");

while (userpassword !== currentpassword) {
  userpassword = +prompt("Parol yanlışdır, Parolı daxil edin");
 
}

if (userpassword == currentpassword) {
  document.write("Parol Doğrudur")
}
