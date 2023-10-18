let day = +prompt("Həftənin gününü daxil edin: 1,2,3,4,5,6,7");

if(day == 1) {
  document.write("Bazarertəsi");
}
else if(day == 2) {
  document.write("Çərşənbə axşamı");
}
else if(day == 3) {
  document.write("Çərşənbə");
}
else if(day == 4) {
  document.write("Cümə axşamı");
}
else if(day == 5) {
  document.write("Cümə");
}
else if(day == 6) {
  document.write("Şənbə");
}
else if(day == 7) {
  document.write("Bazar");
}
else if(day > 7 || day < 1) {
  document.write ("daxil etdiyiniz dəyər yanlışdır");
}
else {
  alert("daxil etdiyiniz dəyər rəqəm deyil")
}



// let day = +prompt("Həftənin gününü daxil edin: 1,2,3,4,5,6,7");

// switch(day) {
//   case 1:
//     document.write("Bazarertəsi")
//     break;
//   case 2:
//     document.write("Çərşənbə axşamı")
//     break;
//   case 3:
//     document.write("Çərşənbə")
//     break;
//   case 4:
//     document.write("Cümə axşamı")
//     break;
//   case 5:
//     document.write("Cümə")
//     break;
//   case 6:
//     document.write("Şənbə")
//     break;
//   case 7:
//     document.write("Bazar")
//     break;
//   default: alert ("daxil etdiyiniz dəyər yanlışdır")
// }