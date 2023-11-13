function kebabToSnake(str) {
  let snakeCase = str.replace("_", '-');
  return snakeCase.toUpperCase();
}

function snakeToKebab(str) {
  let kebabCase = str.replaceAll("-", '_');
  return kebabCase.toLowerCase();
}

console.log(kebabToSnake('web_mastermind'));
console.log(snakeToKebab('JAVASCRIPT-IS-HELL')); 