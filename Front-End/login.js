function login3(event){
    event.preventDefault();
    let loginform = document.getElementById("login")
    var user = loginform.elements["user"].value
    var pass = loginform.elements["password"].value

    if(user=="" || pass==""){
        alert("You need to enter both a username and password")
    }else{
        loginform.submit();

        //alert(`go away, ${user}! YOU ARE NOT A VALID USER`)
    }
}