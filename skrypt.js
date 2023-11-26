const button = document.getElementById("changeColorButton");
const button2 = document.getElementById("changeColorButton2");
const body = document.body;
const colors = ["#FF5733", "#33FF57", "#5733FF", "#FF33E9", "#33D8FF"];

button.addEventListener("click", () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    body.style.backgroundColor = randomColor;
});
button2.addEventListener("click", () => {
    const randomColor = colors[0];
    body.style.backgroundColor = randomColor;
});

const inputElement = document.getElementById("myInput");

inputElement.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        alert("To jest komunikat ostrzeżenia!");
    }
});