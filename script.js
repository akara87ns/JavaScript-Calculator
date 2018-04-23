let results = document.getElementById("results");

window.onload = function() {
    results.value = "";
}

let buttons = document.querySelectorAll("button");
console.log(buttons);

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(e) {
        results.value += this.value;

        let lastChar = results.value.substr((results.value.length-1), 1);
        let oneBeforeLastChar = results.value.substr((results.value.length-2), 1);

        if (lastChar === oneBeforeLastChar) {
            if (lastChar === "+") {
                results.value = results.value.slice(0,-1);
            } else if (lastChar === "-") {
                results.value = results.value.slice(0,-1);
            }
            else if (lastChar === "*") {
                results.value = results.value.slice(0,-1);
            }
            else if (lastChar === "/") {
                results.value = results.value.slice(0,-1);
            }
            else if (lastChar === ".") {
                results.value = results.value.slice(0,-1);
            }
        }
    });
}

document.getElementById("clear").addEventListener("click", function() {
    results.value = "";
});

document.getElementById("delete").addEventListener("click", function() {
    results.value = results.value.slice(0, -1);
});

document.getElementById("equals").addEventListener("click", function() {
    let equalsOperation = eval(results.value);
    results.value = equalsOperation;
});

