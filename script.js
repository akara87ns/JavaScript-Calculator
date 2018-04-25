let results = document.getElementById("results");
let calculations = document.getElementById("calculations");

window.onload = function() {
    results.value = "";
    calculations.value = "";
}

let buttons = document.getElementsByClassName("nums&ops");
// console.log(buttons);

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
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

        if (equalRes === true) {
            if (lastChar >= 0 && lastChar <= 9) {
                results.value = lastChar;
                equalRes = false;
                calculations.value = "";
                return equalRes;
            } else if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/" || lastChar === ".") {
                equalRes = false;
                calculations.value = "";
                return equalRes;
            }
        }

        calcOperations = results.value;
        // console.log(calcOperations);
    });
}

document.getElementById("clear").addEventListener("click", function() {
    results.value = "";
    calculations.value = "";
});

document.getElementById("delete").addEventListener("click", function() {
    results.value = results.value.slice(0, -1);
});

let equalRes = false;
document.getElementById("equals").addEventListener("click", function() {
    let equalsOperation = eval(results.value);
    // let equalsOperation = parseFloat(eval(results.value)).toFixed(2);
    results.value = equalsOperation;

    calculations.value = calcOperations;

    equalRes = true;
    return equalRes;
});


