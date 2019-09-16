
/*
    event canceling example
    < a href="page1.html" onclick="return false;" > to Page 1 </a>
    < a href="page2.html" onclick="event.returnValue=false;" > to Page 2 </a> 
*/

// global param - start block

function validateIntNum(lengthInputID) {
    // length input value
    // use parseFloat - in order to check the input value,as a complete number ()
    // check parseFloat("10.0000") => 10
    const value = parseFloat(document.getElementById(lengthInputID).value);

    return  !isNaN(value) &&
            Number.isInteger(value) && 
            parseInt(value) >= 1 
            ? value : -1; 
}

// helper - function to create a line 
function createLineOfAstrixsByLength(len) {

    let x= 10;
    let y = 50;

    var lineStr = new String();
    for(var i=0;i<len;i++) {
        // lineStr += "*";
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.font = "30px Arial";
        lineStr += ctx.strokeText("*", x++,  y++);
        // lineStr += ctx.strokeText("*", x* i, y * i);
        
    }
    return lineStr;
}

function showLengthTrin(myCanvas,lengthInputID) {

    var validateIntNumVar = validateIntNum(lengthInputID);
    // validateIntNumVar = 4;
    
    if(validateIntNumVar >0) {
        // trin of astrixs string
        var trinStr = ""; 
        // usage helper function
        const lineOfAst = createLineOfAstrixsByLength(validateIntNumVar);
                
        for(var i=0;i<=validateIntNumVar;i++) {
            // trinStr += "<br/>"+ lineOfAst.substr(0,i);
           
            trinStr += "<br/>"+ lineOfAst;
        }
        

        document.getElementById(myCanvas).innerHTML = trinStr;
    } else {
        alert("input is not valid");
        // clean elem id content
        document.getElementById(myCanvas).innerHTML = "";
    }
    
}

//end block