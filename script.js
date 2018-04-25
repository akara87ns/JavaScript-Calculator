let results = document.getElementById("results");

window.onload = function() {
    results.value = "";
}

let buttons = document.querySelectorAll("button");
console.log(buttons);

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
            console.log("Now it is true");
            let lastNum = lastChar;
            console.log(lastNum);
            if (lastNum >= 0 && lastNum <= 9) {
                results.value = lastNum;
                equalRes = false;
                return equalRes;
            } else if (lastNum === "+" || lastNum === "-" || lastNum === "*" || lastNum === "/" || lastNum === ".") {
                // results.value += lastNum;
                equalRes = false;
                return equalRes;
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

// let equal = false;
let equalRes = false;
document.getElementById("equals").addEventListener("click", function() {
    let equalsOperation = eval(results.value);
    results.value = equalsOperation;

    equalRes = true;
    console.log("Now it's false");
    // console.log(results.value);
    return equalRes;
    
    // console.log(equalsOperation);
    

    // if (equalsOperation != results.value) {
    //     console.log("not equal");
    // } else {
    //     console.log("equal");
    // }

    // equal = true;
    // return equal;

    // let equals = true;

    // if (equals === true && this.lastChar >= 0) {
    //     console.log("not a number");
    //     let equals = false;
    //     console.log(equalsOperation);
    // } else {
    //     console.log("number");
    //     let equals = false;
    //     console.log(equalsOperation);
    // }
});
// console.log(equal);


