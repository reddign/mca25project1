function register3(event){
    event.preventDefault();
    let registerform = document.getElementById("register")
    var user = registerform.elements["user"].value
    var pass = registerform.elements["password"].value
     var email = registerform.elements["email"].value

    if(user=="" || pass==""){
        alert("You need to enter both a username and password")
    }else{
        registerform.submit();
        //alert(`go away, ${user}! YOU ARE NOT A VALID USER`)
    }
}