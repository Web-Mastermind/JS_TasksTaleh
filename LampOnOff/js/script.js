let lampIsOn = false;

function lampchange() {
  const lamp = document.getElementById('lamp');
  const button = document.getElementById('button');

  if (lampIsOn) {
    lamp.style.backgroundColor = 'gray';
    button.innerText = 'On';
  } else {
    lamp.style.backgroundColor = 'yellow';
    button.innerText = 'Off';
  }

  lampIsOn = !lampIsOn;
}

const duymeElementi = document.getElementById('button');
duymeElementi.addEventListener('click', lampchange);
