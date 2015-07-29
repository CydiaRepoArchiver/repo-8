function clickedGo() {
    var query = document.getElementById("search").value,
        url = "http" + engine + query;
    document.getElementById("search").value = "";
    query = query.replace(" ", "+");
    window.open(url);
}

function textFocused(focused) {
    if (focused){
    document.getElementById("widget").style.top = "5%";
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    } else {
    document.getElementById("widget").style.top = position + "%";
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
}