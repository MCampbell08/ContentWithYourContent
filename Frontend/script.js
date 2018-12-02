var data;
var request = new XMLHttpRequest();

function deletePage() {
    var page = document.getElementById("pageID").innerText;
    
}

function addPage() {
    var page = document.getElementById("pageID").innerText;
    
}

function checkSession(){
    request.open('GET', 'http://localhost/contentwithyourcontent/backend/session_check.php');
    request.onload = loadSessionComplete;
    request.send();
}

function endSession() {
    request.open('GET', 'http://localhost/contentwithyourcontent/backend/logout.php');
    request.onload = loadEndSessionComplete;
    request.send();
}

function loadLoginData(user, pass) {
    request.open('GET', 'http://localhost/contentwithyourcontent/backend/login.php?user=' + user + '&pass=' + pass);
    request.onload = loadLoginComplete;
    request.send();
}

function loadAboutData(title) {
    request.open('GET', 'http://localhost/contentwithyourcontent/backend/about.php?title=' + title);
    request.onload = loadComplete;
    request.send();
}

function loadContactData(title) {
    request.open('GET', 'http://localhost/contentwithyourcontent/backend/contact.php?title=' + title);
    request.onload = loadComplete;
    request.send();
}

function loadEmailData(title) {
    request.open('GET', 'http://localhost/contentwithyourcontent/backend/email.php?title=' + title);
    request.onload = loadComplete;
    request.send();
}

function loadHistoryData(title) {
    request.open('GET', 'http://localhost/contentwithyourcontent/backend/history.php?title=' + title);
    request.onload = loadComplete;
    request.send();
}

function loadHomeData(title) {
    request.open('GET', 'http://localhost/contentwithyourcontent/backend/index.php?title=' + title);
    request.onload = loadComplete;
    request.send();
}

function loadLocationsData(title) {
    request.open('GET', 'http://localhost/contentwithyourcontent/backend/locations.php?title=' + title);
    request.onload = loadComplete;
    request.send();
}

function loadMissionData(title) {
    request.open('GET', 'http://localhost/contentwithyourcontent/backend/mission.php?title=' + title);
    request.onload = loadComplete;
    request.send();
}

function loadEndSessionComplete(evt) {
    data = JSON.parse(request.responseText);
    console.log(data)
    document.getElementById("logoutButton").style.visibility = "hidden";
    document.getElementById("loginButton").style.visibility = "visible";
}

function loadSessionComplete(evt) {
    data = JSON.parse(request.responseText);
    if(data.length > 0) {
        document.getElementById("loginButton").style.visibility = "hidden";
        document.getElementById("logoutButton").style.visibility = "visible";
    }
    else {
        document.getElementById("loginButton").style.visibility = "visible";
        document.getElementById("logoutButton").style.visibility = "hidden";
    }
}

function loadComplete(evt) {
    data = JSON.parse(request.responseText);

    var body = document.getElementsByTagName('body')[0];
    var element = document.createElement('div');

    element.innerHTML = data[0][0].content;
    body.appendChild(element);

    checkSession();
}

function loadLoginComplete(evt) {
    data = JSON.parse(request.responseText);
    window.location = 'index';    
}