function append(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function backspace() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch {
        document.getElementById("display").value = "Error";
    }
}

/* Keyboard Support 🔥 */
document.addEventListener("keydown", function(event) {
    if (!isNaN(event.key) || ['+', '-', '*', '/', '.', '%'].includes(event.key)) {
        append(event.key);
    } else if (event.key === "Enter") {
        calculate();
    } else if (event.key === "Backspace") {
        backspace();
    } else if (event.key === "Escape") {
        clearDisplay();
    }
});