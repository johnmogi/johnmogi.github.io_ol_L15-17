
// https://restcountries.eu/rest/v2/all?fields=capital

// filter data array + populate select

const smallCities = cities.slice(241) 
let result = smallCities.map(a => a.capital);

// for (let ii = 0; ii < result.length; ii++) {
//     inputCity.innerHTML= ("option" + result[ii])

// } NVM- try again later

for(var i = 0; i < result.length; i++)
{
    var option = document.createElement("OPTION"),
        txt = document.createTextNode(result[i]);
    option.appendChild(txt);
    option.setAttribute("value",result[i]);
    inputCity.insertBefore(option,inputCity.lastChild);
}

// clean the slate
function init(){
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = ""
    }
}
// start buttons
window.addEventListener("load", init)
// sub.addEventListener("click", draw);



sub.addEventListener("click", draw);

function memory(){
    if (autoSizingCheck2.checked == true){
        h5[0].innerText = ("I got you in my memory- Have a nice day")

        if (input1.value == "" || input2.value == "") {
       return 
               
    } 

    localStorage.setItem( 'inputs', JSON.stringify( arr ) );
    // localStorage.setItem('userName', inputs[0].value, );
    // localStorage.setItem('PassWord', inputs[1].value, );

        
    }
}
//generate
function draw(){

    // for (let i = 0; i < inputs.length; i++) {
       
    //     if (inputs[i].value == ""){
    //         return
    //     }
    //     else{
    //         window.location.assign("success.html")
    //     }
        
    // }
// inputName inputAge inputCity inputAdress inputGender inputHobbies

if (
    inputName.value == "" ||
    inputAge.value == "" ||
    inputCity.value == "" ||
    inputAdress.value == "" ||
    inputGender.value == "" ||
    inputHobbies.value == "" 
)
{return} else{ 
    window.location.assign("success.html")

// console.log("full")
}
}