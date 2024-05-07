function addition(a, b){
    return a + b;
}

function subtraction(a, b){
    return a - b;
}

function multiplication(a, b){
    return a * b;
}

function division(a, b){
    return a / b;
}


//buttons declaration
const btn = document.querySelectorAll(".buttons");
const equalBtn = document.querySelector(".equal");
const display = document.querySelector(".calc-display");
const clrBtn = document.querySelector("#clear");

//loop to wait until two operation is used
let op = [];
let var1;
let var2;
let result;
let userInput;
let data;

display.textContent = '0';

btn.forEach((button) => {
    button.addEventListener("click", () => {
        if(display.textContent == '0' || isNaN(var1)){
            display.textContent = '';
            var1 = null;
            userInput = '';
        }
        userInput += String(button.id);
        //console.log(userInput);
        //check if user used multiply or divide symbol for better visual
        if(button.id == '*'){
            display.textContent += 'x';
        }
        else if(button.id == '/'){
            display.textContent += ':';
        }
        else if(button.id == '~'){
            display.textContent += '-';
        }
        else {
            display.textContent += button.id;
        }
    })
});

equalBtn.addEventListener("click", () => {
    
    //regex code to join multiple numbers as one and separate the operator
    //update old regex to new ones that will split dotted decimal and negative numbers as one element
    //data = userInput.match(/[0-9]+|[^0-9]/g);
    //data = userInput.match(/(-?\d+(\.\d+)?|\D)/g);
    data = userInput.match(/(-?\d+(\.\d+)?(?:e\+\d+)?|\D)/g);
    //console.log('data : ', data);
    //console.log('userInput : ', userInput);

    for(let i = 0; i < data.length; i++){
        if(i == 0 || i % 2 == 0){
            if(var1 == null){
                var1 = Number(data[i]);
                //console.log('var1 : ', var1);
            }
            var2 = Number(data[i+2]);
            //console.log('var2 : ', var2);
                             
        }

        if(i % 2 != 0){
            op = data[i];

            //switch case:
            switch(op){
                case '+':
                    var1 = addition(var1, var2);
                    break;
                
                case '~':
                    var1 = subtraction(var1, var2);
                    break;
                
                case '*':
                    var1 = multiplication(var1, var2);
                    break;

                case '/':
                    var1 = division(var1, var2);
                    break;

                default:
                    var1 = NaN;
                    
            }
        }
    }
    if(isNaN(var1)){
        display.textContent = 'Syntax Error';
    }
    else{
        display.textContent = String(var1);
    }
    //console.log('result : ', var1);
    userInput = String(var1);
    return var1;
    
});

clrBtn.addEventListener("click", () => {
    userInput = '';
    var1 = null;
    display.textContent = '0';
});




