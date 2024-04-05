const red_renge = document.getElementById("red");
const green_renge = document.getElementById("green");
const blue_renge = document.getElementById("blue");
const hexadezimal_value = document.getElementById("hexadezimal-value");

const main_field = document.getElementById("main");

let background_color = "#ff69b4";

function render() {
  main_field.style.backgroundColor = background_color;
  hexadezimal_value.textContent = background_color;
}

render();

function update() {
  background_color =
    "#" +
    Number(red_renge.value).toString(16) +
    Number(green_renge.value).toString(16) +
    Number(blue_renge.value).toString(16);
}

red_renge.addEventListener(
  "input",
  () => {
    update();
    render();
  },
  false
);

green_renge.addEventListener(
  "input",
  () => {
    update();
    render();
  },
  false
);

blue_renge.addEventListener(
  "input",
  () => {
    update();
    render();
  },
  false
);
