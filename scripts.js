const add = function(a, b){
    return a + b;
}

const sub = function(a, b){
    return a - b;
}

const multiply = function(a, b){
    return a * b;
}

const divide = function(a, b){
    return a / b;
}

const operate = {
    '+' : add,
    '-' : sub,
    '*' : multiply,
    '/' : divide
}

//buttons declaration
const btnNumbers = document.querySelectorAll(".numbers");
const btnOpp = document.querySelectorAll(".operators");


//loop to wait until two operation is used
let op = 0;

if(op = 0){
    btnNumbers.forEach((button) => {
        button.addEventListener("click", () => {
            alert(button.id);
        });
    });
}