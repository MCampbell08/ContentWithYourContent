var button = document.getElementById("submit");
button.addEventListener("click", authUser);

function authUser(){
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;

    //query db with user and pass
}