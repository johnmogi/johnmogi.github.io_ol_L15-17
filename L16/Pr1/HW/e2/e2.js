const stage = document.getElementById("stage")
const loginmein = document.getElementById("loginmein")
const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")
const rem = document.getElementById("rem")
const sub = document.getElementById("sub")
const inputs = document.getElementsByTagName("input")

sub.addEventListener("click", draw);

function draw(){
    function error(){
        stage.style.color = ("#f00");
        stage.innerText = ("One of the fields is empty, try again")
        return
    }

    if (input1.value == "" || input2.value == "") {
        error();   
           
} 

if (input1.value == "good" || input2.value == "day") {
    stage.style.color = ("#fff");
    stage.innerText = ("Good Day!") 
       
} 
else {
    stage.innerText = ("you can't go in....")
}
}
