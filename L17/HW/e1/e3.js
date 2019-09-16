
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
registrator.addEventListener("submit", draw);

//generate
function draw(e){
    // lsClear();

    for (let ii = 0; ii < inputs.length; ii++) {
        if (
            inputs[ii].value == ""
        )
        {return}         
else{ 
        // localStorage.setItem('userName', inputs[0].value, );
        for (let i = 0; i < inputs.length; i++) {
            localStorage.setItem(inputs[i].name, inputs[i].value );            
        }
      
        
    }
    window.location.assign("success.html")

// console.log("full")
}
}