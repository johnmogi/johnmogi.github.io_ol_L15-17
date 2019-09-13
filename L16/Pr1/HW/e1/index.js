// elements
const firstNumber = document.getElementById("firstNumber");
const secondNumber = document.getElementById("secondNumber");
const innerMessage = document.getElementById("innerMessage");
const calulator = document.getElementById("calulator");
// buttons
const but1Sum = document.getElementById("but1Sum");
const but1Div = document.getElementById("but1Div");
const but1Mul = document.getElementById("but1Mul");
const but1Part = document.getElementById("but1Part");
//values

let fVal = firstNumber.value 
let sVal = secondNumber.value   

//function: validate, initialse, calculate, generate- draw
function init(){
    calulator.reset();
}
function validate(){
if (fVal == "" || sVal == "")  { 
innerMessage.innerText = ("Please check the fields again")
// firstNumber.style.border= ("1px solid red")
// init()
return
}
}
// deploy button events
but1Sum.addEventListener("click", sum);
but1Div.addEventListener("click", div);
but1Mul.addEventListener("click", mul);
but1Part.addEventListener("click", par);


function draw(){
    let fVal = parseInt(firstNumber.value)
    let sVal = parseInt(secondNumber.value)
    validate();
    console.log(fVal, sVal)
}

function sum(){
    validate();
    let fVal = parseInt(firstNumber.value)
    let sVal = parseInt(secondNumber.value)
    innerMessage.innerText = (fVal+sVal)

}

function div(){
    validate();
    let fVal = parseInt(firstNumber.value)
    let sVal = parseInt(secondNumber.value)
    innerMessage.innerText = (fVal-sVal)

}
function mul(){
    validate();
    let fVal = parseInt(firstNumber.value)
    let sVal = parseInt(secondNumber.value)
    innerMessage.innerText = (fVal*sVal)

}
function par(){
    validate();
    let fVal = parseInt(firstNumber.value)
    let sVal = parseInt(secondNumber.value)
    innerMessage.innerText = (fVal/sVal)

}




