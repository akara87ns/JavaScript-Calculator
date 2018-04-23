let results = document.getElementById("results");

window.onload = function() {
    results.value = "";
}

let buttons = document.querySelectorAll("button");
console.log(buttons);

// let calcArray = [];
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(e) {
        results.value += this.value;
        // console.log(results.value.length);
        // console.log(results.value[results.value.length - 1]);


        // let calcArray = [];
        // calcArray.push(this.value);
        // console.log(calcArray);

        let lastChar = results.value.substr((results.value.length-1), 1);
        let oneBeforeLastChar = results.value.substr((results.value.length-2), 1);

        console.log("last number: " + lastChar);
        console.log("one before last number: " +oneBeforeLastChar);

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
            // console.log("same input operation");
            // e.target.disabled = false;
            // results.value--;
        }
        

        // if (lastCharacter === oneBeforeLastCharacter) {
        //     if (lastCharacter === "+"  ||
        //         lastCharacter === "-"  ||
        //         lastCharacter === "*"  ||
        //         lastCharacter === "/"  ||
        //         lastCharacter === ".") {
        //             e.preventDefault();
        //         }
        // }
    });
}

document.getElementById("clear").addEventListener("click", function() {
    results.value = "";
    // calcArray = [];
});

document.getElementById("equals").addEventListener("click", function() {
    let equalsOperation = eval(results.value);
    results.value = equalsOperation;
    // console.log(results.value);

    // calcArray.join();
    // console.log(calcArray);
});

//Preventing input of some characters more than once
// console.log(results.value);