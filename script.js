const button = document.getElementById("button");
const body = document.querySelector("body");
const colorNum = document.querySelector(".color-num");
const colorCard = document.querySelector(".color-card");

const generarColor = () =>{
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);

    const rgbColor = `rgb(${r},${g},${b})`;
    return rgbColor;
};

const cambiarBg = () =>{
    const nuevoColor = generarColor();
    colorNum.innerHTML = nuevoColor
    body.style.backgroundColor = nuevoColor
}

button.addEventListener("click", cambiarBg);

