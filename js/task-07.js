const inputEl = document.getElementById("font-size-control");
const textEl = document.getElementById("text");
inputEl.addEventListener("input", resizeText)

function resizeText() {
    textEl.style.fontSize = inputEl.value + "px";
};

resizeText()