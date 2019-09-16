
// https://restcountries.eu/rest/v2/all?fields=capital

// filter data array + populate select
function populate(){ 
const smallCities = cities.slice(241) 
let result = smallCities.map(a => a.capital);

for(var i = 0; i < result.length; i++)
{
    var option = document.createElement("option"),
    txt = document.createTextNode(result[i]);
    option.appendChild(txt);
    option.setAttribute("value",result[i]);
    inputCity.insertBefore(option,inputCity.lastChild);
}
}

populate();
// clean the slate
function init(){
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = ""
    }
}
function lsClear(){
    localStorage.clear();

}
sub.addEventListener("click", draw);

//generate
function draw(){
    lsClear();

if (
    inputName.value == "" ||
    inputAge.value == "" ||
    inputCity.value == "" ||
    inputAdress.value == "" ||
    inputGender.value == "" ||
    inputHobbies.value == "" 
)
{return} else{ 
        localStorage.setItem('userName', inputs[0].value, );
        for (let i = 0; i < inputs.length; i++) {
            localStorage.setItem('', inputs[i].value, );            
        }
        // localStorage.setItem('inputs', JSON.stringify(a));
    // localStorage.setItem('inputs', JSON.stringify(a));
    // let arr = [];
    // localStorage.setItem( 'inputs', JSON.stringify(arr));
    // console.log(inputs)
    // // let arr = [];
    // for (let i = 0; i < inputs.length; i++) {
    //     // localStorage.setItem( 'inputs', JSON.stringify());

    //     // Storage.prototype.setObj = function(key, obj) {
    //     //     return this.setItem(key, JSON.stringify(obj))
    //     }
        // localStorage.setItem( 'inputs', JSON.stringify());
        
    }
    // window.location.assign("success.html")

// console.log("full")
}
