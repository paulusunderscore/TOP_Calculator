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
let var1 = [];
let varOp = [];
let var2 = [];

console.log('oye');
btnNumbers.forEach((button) => {
    button.addEventListener("click", () => {
        if(op!=0){
            var2 = var2.concat(button.id);
            alert(button.id);
            console.log('var2: '+var2);
        }
        else {
            var1 = var1.concat(button.id);
            alert(button.id);
            console.log('var1: '+var1);
        }
    });
});

console.log('oye');
btnOpp.forEach((button) => {
    button.addEventListener("click", () => {
        varOp = varOp.concat(button.id);
        alert(button.id);
        console.log('varOp: '+varOp);
        //add operator count
        op += 1;
    });
});



