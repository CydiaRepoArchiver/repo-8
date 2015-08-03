var open;
function data() {
    var d = new Date();
    //Arrays
    var a_mon = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var a_d = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    var a_month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var a_day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    //Day number, short name, full name
    var day = d.getDay();
    var date = d.getDate();
    var weekDayAbbrev = a_d[day];
    var weekDayFull = a_day[day];
    //Month number, short name, full name
    var month = d.getMonth();
    var monthAbbrev = a_mon[month];
    var monthFull = a_month[month];
    //Year 4 digits, Year 2 digits
    var year = d.getFullYear();
    var year2D = year - 2000;
    //24h Hour, AM or PM, 12h Hour, Minutes, Seconds
    var h24 = d.getHours();
    var ampm = h24 > 12 ? "PM" : "AM";
    var h12 = h24 > 12 ? ( h24 = 0 ? 12 : h24 - 12 ) : h24;
    var h = clockLeadingZero ? ( h12 < 10 ? "0" + h12 : h12 ) : h12;
    h = (h == 0) ? 12 : h;
    var m = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
    var hm = h + ":" + m;
    /**** Format |1) HH:MM:SS |2) HH:MM |3)  HH:MM:SS AM |4) HH:MM AM |5) MM/DD/YY |6) Mon. Jan 1, 1970 |7) Monday. January 1, 1970
     **** ElementId |1) HMS |2) HM |3) HMSampm |4) HMampm |5)  numMDY |6) fullDateAbbrev |7) fullDateLong  ****/
    document.getElementById("time").innerHTML = open ? "" : hm;
    document.getElementById("info").innerHTML = open ? "<div><a href = 'javascript:clickedClose()'><img align = 'left' src = 'x.png' height = '15' width = '15'></a><div align = 'right' style = 'margin-right:5%;font-size:19px;font-family:RR'>" + hm + "</div><table style = 'color:" + textColorInfo + ";border-top: 1px solid " + textColorInfo + ";'><tr><td colspan = '3' style = 'text-align: center'>" + weekDayAbbrev + ". " + monthAbbrev + " " + date + ", " + year + "</td></tr>" + html + "</div>": "";
}
setInterval(data, 1000);
data();

function clickedOpen() {
    var container = document.getElementById("container").style;
    var time = document.getElementById("time").style;
    var info = document.getElementById("info").style;
    container.backgroundColor = backgroundColorInfo;
    container.width = 200;
    container.height = 150;
    time.opacity = 0.0;
    info.opacity = 1.0;
    open = true;
}
function clickedClose() {
    var container = document.getElementById("container").style;
    var time = document.getElementById("time").style;
    var info = document.getElementById("info").style;
    container.backgroundColor = backgroundColorTime;
    container.width = 105;
    container.height = 40;
    time.opacity = 1.0;
    info.opacity = 0.0;
    open = false;
}

function init() {
    open = false;
    applyPrefs();
}
function applyPrefs() {
    var container = document.getElementById("container").style;
    var time = document.getElementById("time").style;
    var info = document.getElementById("info").style;
    container.marginTop = position;
    container.borderRadius = borderRadius;
    container.boxShadow = boxShadow;
    container.backgroundColor = backgroundColorTime;
    time.color = textColorTime;
    info.color = textColorInfo;
    time.textShadow = textShadowTime;
    info.textShadow = textShadowInfo;
}

/**** Written by /u/S0MECoder. Modify the code all you want but please leave this comment intact. PM me on Reddit if you release this code or a modified version so I can check out what you've made! ****/