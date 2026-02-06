const display = document.getElementById("display");

function append(val) {
    display.value += val;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function toggleDegree() {
    isDegree = !isDegree;
    alert(isDegree ? "Degree Mode" : "Radian Mode");
}

function calculate() {
    try {
        let expr = sanitizeExpression(display.value);
        let result = Function("return " + expr)();
        display.value = Number.isFinite(result) ? result : "Error";
    } catch {
        display.value = "Error";
    }
}

document.addEventListener("keydown", e => {
    if ("0123456789+-*/().".includes(e.key)) append(e.key);
    if (e.key === "Enter") calculate();
    if (e.key === "Backspace") deleteLast();
    if (e.key === "Escape") clearDisplay();
});
