//switch styles
//delete and add sub pages
//auth users

function deleteSubPage(page){
    //admin only
}

function addSubPage(page){
    //admin only
}

function loadAboutData(title) {
    request.open('GET', 'http://localhost:8000/contentwithyourcontent/frontend/about.php?title='+title);
    request.onload = loadComplete;
    request.send();
  }
  