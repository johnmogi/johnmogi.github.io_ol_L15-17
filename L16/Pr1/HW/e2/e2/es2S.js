

    // localStorage.getItem('userName' );
    // console.log()

    for(var i=0;i<inputs.length; i++) {
        var key = inputs.key( i );
        var item = JSON.parse( localStorage.getItem( key ) );
      }
      
      stage.innerText = (
        "your username is: "  
        +
        localStorage.userName
        +
        " & Your Password is: "
        +
        localStorage.PassWord 
      )
        
    // h5.innerText = JSON.stringify(localStorage, userName, PassWord);
// h5.innerTEXT = (localStorage.getItem(Parse('userName' )))

