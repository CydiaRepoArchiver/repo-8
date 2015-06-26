/**** Version 1, 6/13/15 ****/
function data() {
    var stats = new XMLHttpRequest();
    stats.open("GET", "file:///var/mobile/Library/Stats/BatteryStats.txt", true);
    if (stats.readyState === 4 && (stats.status === 0 || stats.status === 200))
    {
        var text = stats.responseText;
        var splitLine = text.split("/n");
        var splitText = text.split(": ")[1];
        var percent = splitLine[0].splitText;
        var plugged = splitLine[1].splitText;
        document.getElementById("Percent").innerHTML = percent + "%";
        document.getElementById("Plugged").innerHTML = plugged;
    }
    stats.send();
}
setInterval(data, 1000);
data();

/**** Written by /u/S0MECoder. Modify the code all you want but please leave this comment intact. PM me on Reddit if you redistribute this code or a modified version so I can check out what you've made! ****/