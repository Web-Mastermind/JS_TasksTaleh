let fullName = prompt("Zəhmət olmasa, tam adınızı daxil edin (AD SOYAD formatında):");

let parts = fullName.split(' ');

if (parts.length === 2) {
  let lastName = parts[1];
  let firstName = parts[0];

  console.log("Tam adınız (SOYAD AD formatında):", lastName + " " + firstName);
} else {
  console.log("Yanlış formatda tam ad daxil edilib.");
}
