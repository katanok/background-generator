let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let rnd = document.querySelector("button");

body.style.background= "linear-gradient(to right, rgb(83, 234, 203), rgb(237, 90, 232))";
css.textContent = body.style.background + ";";

function setGradient() {
  body.style.background = "linear-gradient(to right, "
  + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + ";";
}

function randomRGB() {
  let r = Math.floor(Math.random()*256);
  let g = Math.floor(Math.random()*256);
  let b = Math.floor(Math.random()*256);

  return [r, g, b];
}

function rgbHex() {
  let [r, g, b] = randomRGB();
  let rh = r.toString(16).padStart(2, "0");
  let gh = g.toString(16).padStart(2, "0");
  let bh = b.toString(16).padStart(2, "0");

  return "#" + rh + gh + bh;
}

function assignRGB() {
  color1.value = rgbHex();
  color2.value = rgbHex();
  setGradient();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
rnd.addEventListener("click", assignRGB);
