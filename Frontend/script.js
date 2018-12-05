var data;
var userData;
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
    var nav = document.getElementsByTagName("ul");
    var child = null;

    for(var i = 0; i < nav[0].children.length; i++){
        if(nav[0].children[i].firstChild.id === page) {
            child = nav[0].children[i].firstChild;
        }
    }

    return child;
}

function updatePageContent(title, content) {
    request.open('UPDATE', 'http://localhost/contentwithyourcontent/backend/add_page.php?title=' + title + '&content=' + encodeURIComponent(content.innerHTML));
    request.onload = loadUpdatePageContentComplete;
    request.send();
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
    var parent, row;

    for(var i = 0; i < pages.length; i++) {
        for(var j = 0; j < data[0].length; j++) {
            row = data[0][j];
            if(row["title"].replace('.html','') === pages[i].id) {
                parent = document.getElementById(pages[i].id).parentNode;
                parent.style["display"] = (row["shown"] === "1") ? "inline": "none";
            }
        }
    }
}

function loadEndSessionComplete(evt) {
    data = JSON.parse(request.responseText);

    document.getElementById("logoutButton").style.visibility = "hidden";
    document.getElementById("loginButton").style.visibility = "visible";

    
    if(userData[2] === "admin") {
        document.getElementById("addButton").style.visibility = "hidden";
        document.getElementById("deleteButton").style.visibility = "hidden";
        document.getElementById("pageID").style.visibility = "hidden";
        userData = [];
    }
}

function loadSessionComplete(evt) {
    userData = JSON.parse(request.responseText);

    if(userData.length !== 0) {
        document.getElementById("loginButton").style.visibility = "hidden";
        document.getElementById("logoutButton").style.visibility = "visible";
        document.getElementById("logoutButton").onclick = endSession;

        if(userData[2] === "admin") {
            document.getElementById("addButton").style.visibility = "visible";
            document.getElementById("deleteButton").style.visibility = "visible";
            document.getElementById("pageID").style.visibility = "visible";
        }

        console.log(userData[2])

        if(userData[2] === 'admin' || userData[2] === 'content_editor'){
            var dom = document.getElementById("databaseContent");
            
            dom.addEventListener("focusout", contentEditableListener);
            dom.contentEditable = true;
        }
    }
    else {
        document.getElementById("loginButton").style.visibility = "visible";
        document.getElementById("logoutButton").style.visibility = "hidden";
    }

    checkShownPages();
}

function loadComplete(evt) {
    data = JSON.parse(request.responseText);

    var body = document.getElementsByTagName('body')[0];
    var element = document.createElement('div');

    element.innerHTML = data[0][0].content;
    element.id = "databaseContent";

    body.appendChild(element);

    checkSession();
}

function loadLoginComplete(evt) {
    data = JSON.parse(request.responseText);

    window.location = 'index';
}

function loadUpdatePageContentComplete() {
    data = JSON.parse(request.responseText);
}

function contentEditableListener() {
    var content = document.getElementById("databaseContent");
    var title = window.location.pathname.split("/").pop();

    updatePageContent(title, content);
}
