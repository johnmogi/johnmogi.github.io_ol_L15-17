
const cats = document.getElementById("cats")
const inputCat = document.getElementById("inputCat")
const value= inputCat.value
const sub = document.forms.cats.sub 
// const sub = document.getElementById("sub")
const stage = document.getElementById("stage")

// sub.addEventListener("click", function(){
    sub.addEventListener("click", calculCat)

    function calculCat(){ 
    stage.innerHTML = "<h1> This is the number of unwanted cats:</h1>"
    stage.append(value)
    localStorage.setItem('catnumber', JSON.stringify(value));
}
// });


function loadwin(){
    inputCat.value = "";
    // Retrieve the object from storage
var retrievedObject = localStorage.getItem('catnumber');

stage.append(JSON.parse(value))
// console.log('retrievedObject: ', JSON.parse(value));
}
loadwin();