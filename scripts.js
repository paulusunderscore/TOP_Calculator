//test: vtes = ['4', '+', '10', '-', '7']

const operate = {
    '+' : (a, b) => a + b,
    '-' : (a, b) => a - b,
    '*' : (a, b) => a * b,
    '/' : (a, b) => a / b,

    //To use: operate['+'](2,3) = 5
}


//buttons declaration
const btn = document.querySelectorAll(".buttons");
const equalBtn = document.querySelector(".equal");
const display = document.querySelector(".calc-display");

//loop to wait until two operation is used
let op = [];
let var1;
let var2;
let result;
let userInput = '';
let displayText = '';
let data = [];

btn.forEach((button) => {
    button.addEventListener("click", () => {
        userInput += String(button.id);
        console.log(userInput);
        //check if user used multiply or divide symbol for better visual
        if(button.id == '*'){
            display.textContent += 'x';
        }
        else if(button.id == '/'){
            display.textContent += ':';
        }
        else {
            display.textContent += button.id;
        }
    })
});

equalBtn.addEventListener("click", () => {
    data = userInput.match(/[0-9]+|[^0-9]/g);

    for(let i = 0; i < data.length; i++){
        if(i == 0 || i % 2 == 0){
            if(var1 == null){
                var1 = Number(data[i]);
                console.log('var1 : ', var1);
            }
            var2 = Number(data[i+2]);
            console.log('var2 : ', var2);
                             
        }

        if(i % 2 != 0){
            op = data[i];
            console.log('op : ', op);
            var1 = operate[op](var1, var2);
            console.log(var1, op, var2);
        }
    }
    console.log('result : ', var1);
    return var1;
    
});

console.log('oye');
/*btn.forEach((button) => {
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
        if(op == 2){
            var1 = operate[varOp[op-2]](Number(var1.join('')), Number(var2.join('')));
            alert(var1);
            var2 = [];
        }
        else if(op > 2){
            var1 = operate[varOp[op-2]](var1, Number(var2.join('')));
            var2 = [];
            alert(var1);
            
        }
        console.log('varOp : ' + varOp);
        
    });
});
*/


