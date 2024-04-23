const operate = {
    '+' : (a, b) => a + b,
    '-' : (a, b) => a - b,
    '*' : (a, b) => a * b,
    '/' : (a, b) => a / b,

    //To use: operate['+'](2,3) = 5
}


//buttons declaration
const btnNumbers = document.querySelectorAll(".numbers");
const btnOpp = document.querySelectorAll(".operators");


//loop to wait until two operation is used
let op = 0;
let var1 = [];
let varOp = [];
let var2 = [];
let result;

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
        //add operator count
        op += 1;
        varOp = varOp.concat(button.id);
        if(op == 1){
            alert(button.id);
            console.log('varOp: ' + varOp);
        }
        else if(op == 2){
            var1 = operate[varOp[op-1]](Number(var1.join('')), Number(var2.join('')));
            alert(var1);
        }
        else {
            var1 = operate[varOp[op-1]](var1, Number(var2.join('')));
        }
        
    });
});



