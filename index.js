console.log('Script loaded.');

function paint(color) {
  console.log('Clicked ' + color);
  const circle = document.getElementById('circleID');
  circle.style = `background-color:${color}`;
}

function paintRan() {
  const rgbVal = genRanRgbColor();
  console.log('Clicked ' + rgbVal);
  const circle = document.getElementById('circleID');
  circle.style.backgroundColor = rgbVal;
}

function genRanRgbColor() {
  const valLimit = 256;
  const rVal = Math.floor(Math.random() * valLimit);
  const gVal = Math.floor(Math.random() * valLimit);
  const bVal = Math.floor(Math.random() * valLimit);
  return `rgb(${rVal}, ${gVal}, ${bVal})`;
}

