var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var button = document.getElementById('randomizer');

function setGradient(){
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

function randomRGBtoHex(){
	r = Math.floor(Math.random()*256);
	g = Math.floor(Math.random()*256);
	b = Math.floor(Math.random()*256);
	return rgbToHex(r, g, b);
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function componentToHex(c) {
  let hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function randomizeGradient() {
	var hex1 = randomRGBtoHex().toString();
	var hex2 = randomRGBtoHex().toString();
	color1.value = hex1;
	color2.value = hex2;
	setGradient();
}


color1.addEventListener('input', setGradient)
color2.addEventListener('input', setGradient)
button.addEventListener('click', randomizeGradient)
setGradient();




