let results = document.getElementById("results");
let calculations = document.getElementById("calculations");

window.onload = function() {
    results.value = "";
    calculations.value = "";
}

let buttons = document.getElementsByClassName("nums&ops");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        results.value += this.value;

        let lastChar = results.value.substr((results.value.length-1), 1);
        let oneBeforeLastChar = results.value.substr((results.value.length-2), 1);

        //Disabling input of two or more same adjacent operation signs 
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

        //Changing adjacent arithmetic sign to the last one that was clicked
        if (oneBeforeLastChar === "+" || oneBeforeLastChar === "-" || oneBeforeLastChar === "*" || oneBeforeLastChar === "/") {
            if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
                if (oneBeforeLastChar !== lastChar) {
                    results.value = results.value.slice(0, -2) + results.value.slice(-1);
                }
            }
        }

        //Resetting results if a number is clicked or continuing if an operation button is clicked
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
document.getElementById("equals").addEventListener("click", function equalsFunction() {
    let equalsOperation = eval(results.value);
    // let equalsOperation = parseFloat(eval(results.value)).toFixed(2);
    results.value = equalsOperation;

    //If a user decides to devide with zero
    if (results.value === "NaN" || results.value === "Infinity") {
        results.value = "Operation not allowed";
    }

    calculations.value = calcOperations + "=";

    equalRes = true;
    return equalRes;
});
