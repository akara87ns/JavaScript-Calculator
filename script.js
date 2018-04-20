let results = document.getElementById("results");

window.onload = function() {
    results.value = "";
}

let buttons = document.querySelectorAll("button");
console.log(buttons);

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        results.value += this.value;
    });
}

document.getElementById("clear").addEventListener("click", function() {
    results.value = "";
});

let equalsOperation;
document.getElementById("equals").addEventListener("click", function() {
    equalsOperation = eval(results.value);
    results.value = equalsOperation;
    // console.log(results.value);
});