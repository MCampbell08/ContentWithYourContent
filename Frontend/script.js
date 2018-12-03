var data;
var request = new XMLHttpRequest();

function deletePage() {
    var page = document.getElementById("pageID").value;
    
    var node = grabPage(page);

    node.parentNode.style["display"] = "none";
    
    hidePage(node.id);
}

function addPage() {
    var page = document.getElementById("pageID").value;

    var node = grabPage(page);

    node.parentNode.style["display"] = "inline";
    
    unhidePage(node.id);
}

function grabPage(page){
    var nav = document.getElementById("nav");
    var child = null;

    for(var i = 0; i < nav.children.length; i++){
        if(nav.children[i].firstChild.id === page) {
            child = nav.children[i].firstChild;
        }
    }
    return child;
}

function unhidePage(title) {
    request.open('UPDATE', 'http://localhost/contentwithyourcontent/backend/add_page.php?title=' + title);
    request.onload = null;
    request.send();
}

function hidePage(title) {
    request.open('UPDATE', 'http://localhost/contentwithyourcontent/backend/hide_page.php?title=' + title);
    request.onload = null;
    request.send();
}

function checkShownPages() {
    request.open('GET', 'http://localhost/contentwithyourcontent/backend/all_pages.php');
    request.onload = loadShownPages;
    request.send();
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

function loadUpdatedPage(evt) {
    data = JSON.parse(request.responseText);
}

function loadShownPages(evt) {
    data = JSON.parse(request.responseText);
    var pages = document.getElementsByTagName('a');

    title = document.getElementById(data[0][0]["title"].replace('.html', ''));
    for(var i = 0; i < pages.length; i++) {
        for(var j = 0; j < data[0].length; j++) {
            if(data[0][j]["title"].replace('.html','') === pages[i].id) {
                var x = document.getElementById(pages[i].id).parentNode;
                console.log(x)
                document.getElementById(pages[i].id).parentNode.style["display"] = (data[0][j]["shown"] === 1) ? "inline" : "none";
            }
        }
    }
}

function loadEndSessionComplete(evt) {
    data = JSON.parse(request.responseText);
    console.log(data);
    document.getElementById("logoutButton").style.visibility = "hidden";
    document.getElementById("loginButton").style.visibility = "visible";
}

function loadSessionComplete(evt) {
    data = JSON.parse(request.responseText);
    if(data.length > 0) {
        document.getElementById("loginButton").style.visibility = "visible";
        document.getElementById("logoutButton").style.visibility = "hidden";
    }
    else {
        document.getElementById("loginButton").style.visibility = "hidden";
        document.getElementById("logoutButton").style.visibility = "visible";
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