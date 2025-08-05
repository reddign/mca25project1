function login3(event){
    event.preventDefault();
    let loginform = document.getElementById("login2")
    var user = loginform.elements["user2"].value;
    var pass = loginform.elements["password2"].value;

    if(user=="" || pass==""){
        alert("You need to enter both a username and password")
    }else{
        loginform.submit();

        //alert(`go away, ${user}! YOU ARE NOT A VALID USER`)
    }
}