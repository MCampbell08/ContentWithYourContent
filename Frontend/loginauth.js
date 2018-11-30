function authUser(){
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    
    loadLoginData(user, pass);
}