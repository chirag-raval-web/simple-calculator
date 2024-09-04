let result = document.getElementById("result");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let del = document.getElementById("delete");

// Clear the result when clicking on the C button
clear.onclick = () => (result.value = 0);

// Perform the operation when clicking on the = button
equal.onclick = () => {
    try {
        result.value = eval(result.value);
    } catch {
        result.value = "Error";
    }
};

// Remove the last character by clicking the delete icon
del.onclick = () => {
    result.value = result.value.slice(0, -1);
    if (result.value === '') {
        result.value = '0';
    }
};

// Get the button value by clicking
document.querySelector(".key").addEventListener("click", (event) => {
    let key = event.target;
  
    let operators = key.classList.contains("operators");
    let digits = key.classList.contains("digits");
    
    if (key) {
        if (operators || digits) {
            if (result.value == 0 && digits) {
                result.value = key.textContent;
            } else if (result.value !== 0 && operators) {
                let lastChar = result.value[result.value.length - 1];
                if (["+","-","*","/"].includes(lastChar)) {
                    result.value = result.value.slice(0, -1) + key.textContent;
                } else {
                    result.value += key.textContent;
                }
            } else if (result.value !== 0 && digits) {
                result.value += key.textContent;
            }
        }
    }
});
