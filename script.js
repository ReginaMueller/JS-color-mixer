const red_renge = document.getElementById("red");
const green_renge = document.getElementById("green");
const blue_renge = document.getElementById("blue");
const hexadezimal_value = document.getElementById("hexadezimal-value");
const random_btn = document.getElementById("random");

const main_field = document.getElementById("main");

let background_color = "#ff69b4";

function render() {
  main_field.style.backgroundColor = background_color;
  hexadezimal_value.textContent = background_color;
}

function updateRenderByColor(color) {
  red_renge.value = parseInt(color.substring(1, 3), 16);
  green_renge.value = parseInt(color.substring(3, 5), 16);
  blue_renge.value = parseInt(color.substring(5, 7), 16);
}

function updateColorByRender() {
  const red =
    Number(red_renge.value).toString(16).length < 2
      ? 0 + Number(red_renge.value).toString(16)
      : Number(red_renge.value).toString(16);
  const green =
    Number(green_renge.value).toString(16).length < 2
      ? 0 + Number(green_renge.value).toString(16)
      : Number(green_renge.value).toString(16);
  const blue =
    Number(blue_renge.value).toString(16).length < 2
      ? 0 + Number(blue_renge.value).toString(16)
      : Number(blue_renge.value).toString(16);
  background_color = "#" + red + green + blue;
}

red_renge.addEventListener(
  "input",
  () => {
    updateColorByRender();
    render();
  },
  false
);

green_renge.addEventListener(
  "input",
  () => {
    updateColorByRender();
    render();
  },
  false
);

blue_renge.addEventListener(
  "input",
  () => {
    updateColorByRender();
    render();
  },
  false
);

random_btn.addEventListener("click", () => {
  fetch("https://dummy-apis.netlify.app/api/color")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      background_color = data.color;
      updateRenderByColor(background_color);
      render();
    });
});

render();
