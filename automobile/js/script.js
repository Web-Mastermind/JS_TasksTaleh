let animation;
let car = document.getElementById("car");

car.style.position = 'relative';
car.style.left = '0px';

document.getElementById("start").addEventListener("click", move);
document.getElementById("stop").addEventListener("click", stop);

function move() {
  car.style.left = parseInt(car.style.left) + 10 + 'px';
  animation = setTimeout(move, 20);
}

function stop() {
  clearTimeout(animation);
}