
const newBody = document.getElementById("newBody")


// iterate localStorage
for (var i = 0; i < localStorage.length; i++) {

  // set iteration key name
  var key = localStorage.key(i);

  // use key name to retrieve the corresponding value
  var value = localStorage.getItem(key);

  // console.log the iteration key and value
  newBody.innerHTML +=(  key + ": "  + value  + '<br/>');  

}






