//switch styles
//delete and add sub pages
//auth users
var data;
var request = new XMLHttpRequest();

function deleteSubPage(page){
    //admin only
}

function addSubPage(page){
    //admin only
}

function loadAboutData(title) {
    request.open('GET', 'http://localhost/contentwithyourcontent/backend/about.php?title='+title);
    request.onload = loadComplete;
    request.send();
}
  
function loadContactData(title) {
    request.open('GET', 'http://localhost/contentwithyourcontent/backend/contact.php?title='+title);
    request.onload = loadComplete;
    request.send();
}
  
function loadEmailData(title) {
    request.open('GET', 'http://localhost/contentwithyourcontent/backend/email.php?title='+title);
    request.onload = loadComplete;
    request.send();
}
  
function loadHistoryData(title) {
    request.open('GET', 'http://localhost/contentwithyourcontent/backend/history.php?title='+title);
    request.onload = loadComplete;
    request.send();
}
  
function loadHomeData(title) {
    request.open('GET', 'http://localhost/contentwithyourcontent/backend/index.php?title='+title);
    request.onload = loadComplete;
    request.send();
}
  
function loadLocationsData(title) {
    request.open('GET', 'http://localhost/contentwithyourcontent/backend/locations.php?title='+title);
    request.onload = loadComplete;
    request.send();
}
  
function loadMissionData(title) {
    request.open('GET', 'http://localhost/contentwithyourcontent/backend/mission.php?title='+title);
    request.onload = loadComplete;
    request.send();
}
  
function loadComplete(evt) {
    data = JSON.parse(request.responseText);
    console.log(data);
}