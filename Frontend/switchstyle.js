var style = 1;
var map = {};
onkeydown = onkeyup = function(e){
    e = e || event;
    map[e.keyCode] = e.type == 'keydown';
    console.log(map);
    if(map[16] && map[18] && map[67]){

        if(style == 3){
            style = 1;
        }else{
            style++;
        }
        changeCSS("style"+style+".css",0);
    }
}

function changeCSS(cssFile, cssLinkIndex) {
    //admin only
    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}