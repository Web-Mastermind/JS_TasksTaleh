let lampIsOn = false;
const button = document.getElementById('button');

function lampchange() {
  const lamp = document.getElementById('lamp');

  if (lampIsOn) {
    lamp.style.backgroundColor = 'gray';
    button.innerText = 'Turn On';
  } else {
    lamp.style.backgroundColor = 'yellow';
    button.innerText = 'Turn Off';
  }

  lampIsOn = !lampIsOn;
}

button.addEventListener('click', lampchange);