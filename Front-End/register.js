function register3(event){
    event.preventDefault();
    let registerform = document.getElementById("register2")
    var user = registerform.elements["user3"].value
    var pass = registerform.elements["password3"].value
     var email = registerform.elements["email2"].value

    if(user=="" || pass==""){
        alert("You need to enter both a username and password")
    }else{
        registerform.submit();
        //alert(`go away, ${user}! YOU ARE NOT A VALID USER`)
    }
}