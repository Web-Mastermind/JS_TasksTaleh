let userInput = prompt("Tarixi YYYY.MM.DD formatında daxil edin:");


let parts = userInput.split('.');
if (parts.length !== 3 || parts[0].length !== 4 || parts[1].length !== 2 || parts[2].length !== 2) {
  console.log("Yanlış dəyər daxil edilib.");
} else {
  let year = parts[0];
  let month = parts[1];
  let day = parts[2];

  // Ayları təsvir etmək üçün array
  const months = ['yanvar', 'fevral', 'mart', 'aprel', 'may', 'iyun', 'iyul', 'avqust', 'sentyabr', 'oktyabr', 'noyabr', 'dekabr'];

  // Formatı təsvir et
  let description = `${parseInt(day)} ${months[parseInt(month) - 1]} ${year}-ci il`;
  console.log(description);
}
