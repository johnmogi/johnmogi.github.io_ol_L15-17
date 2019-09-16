const clicky = document.getElementById("clicky");
const wins = []

function openwin(){
    wins.push(window.open(",", "newWindow", "width=200,height=300"))
    wins[wins.length-1].document.write('<p> Hello World </p>')


}
setTimeout(() => {
    
}, 5000);

setInterval(() => {
    console.log("i")
}, 500);
clicky.addEventListener("click", openwin)


