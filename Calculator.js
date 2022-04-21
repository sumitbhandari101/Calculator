class Calculator{
    constructor(previousOperandTextElement,currentOperandTextElement){
this.previousOperandTextElement = previousOperandTextElement;
this.currentOperandTextElement = currentOperandTextElement;
this.clear();
    }

//clear
    clear(){
        this.previousOperand="";
this.currentOperand="";
this.operation = undefined;

    }

//delete
    delete(){
this.currentOperand = this.currentOperand.toString().slice(0,-1);
    }
//append number
    appendNumber(number){
        if(number ==="." && this.currentOperand.includes(".")) return;
this.currentOperand = this.currentOperand.toString() + number.toString();
    }
//select operation
    chooseOperation(operation){
if(this.currentOperand === "") return;
if(this.currentOperand !==""){
    this.compute();
}
this.operation = operation;
this.previousOperand = this.currentOperand;
this.currentOperand = "";
    }

    compute(){

        let result;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if(isNaN(prev) || isNaN(current)) return;
        switch(this.operation){
            case"+":
            result = prev + current;
            break;

            case"-":
            result = prev - current;
            break;

            case"*":
            result = prev * current;
            break;

            case"÷":
            result = prev / current;
            break;

            default:
            break;

        }

        this.currentOperand = result;
        this.operation = undefined;
        this.previousOperand = "";

    }
/*
getDisplayNumber(number){
    return parseFloat(number).toLocaleString("en");
}*/
//display values
    updateDisplay(){
this.currentOperandTextElement.innerText = this.currentOperand;
if(this.operation != null){
    this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation}`;
}else{
    this.previousOperandTextElement.innerText = this.previousOperand;
}

    }
}
const numButtons = document.querySelectorAll("[data-number]");
const operationBtns = document.querySelectorAll("[data-operation]");
const equalButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearBtn = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector("[data-previous-operand]");
const currentOperandTextElement = document.querySelector("[data-current-operand]");

document.addEventListener("DOMContentLoaded",()=>{
const calc = new Calculator(previousOperandTextElement,
    currentOperandTextElement);

    numButtons.forEach((button) => {
        button.addEventListener("click",()=>{
            calc.appendNumber(button.innerText);
            calc.updateDisplay();
            
        });
    });

        operationBtns.forEach((button) => {
            button.addEventListener("click",()=>{
                calc.chooseOperation(button.innerText);
                calc.updateDisplay();
            });
        
        
    });
    equalButton.addEventListener("click",()=>{
        calc.compute();
        calc.updateDisplay();

    });
    deleteButton.addEventListener("click",()=>{
        calc.delete();
        calc.updateDisplay();

    });
    allClearBtn.addEventListener("click",()=>{
        calc.clear();
        calc.updateDisplay();
    });
    });
