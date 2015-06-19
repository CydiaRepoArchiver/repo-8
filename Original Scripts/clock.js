/**** Version 2, 6/18/25 ****/
function data() {
    var d = new Date();
    //Arrays
    var a_mon = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var a_d = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var a_month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var a_day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    //Day number, short name, full name
    var day = d.getDay();
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
    var h12 = h24 > 12 ? h24 - 12 : h24;
    var h = h12 <= 0 ? 12 : h12;
    h = clock24Hours ? h24 : h;
    h = clockLeadingZero ? (h < 10 ? "0" + h : h) : h;
    var m = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
    var s = d.getSeconds();
    //document.getElementById("HMS").innerHTML = h + ":" + m + ":" + s;
    //document.getElementById("HM").innerHTML = h + ":" + m;
    //document.getElementById("HMSampm").innerHTML = h + ":" + m + ":" + s + " " + ampm;
    //document.getElementById("HMampm").innerHTML = h + ":" + m + " " + ampm;
    //document.getElementById("numMDY").innerHTML = month + "/" + day + "/" + year2D;
    //document.getElementById("fullDateAbbrev").innerHTML = weekDayAbbrev + ". " + monthAbbrev + " " + day + ", " + year;
    //document.getElementById("fullDateLong").innerHTML = weekDayFull + ". " + monthFull + " " + day + ", " + year;
    //document.getElementById("day").innerHTML = weekDayFull;
    
}
setInterval(data, 1000);
data();

/**** Written by /u/S0MECoder. Modify the code all you want but please leave this comment intact. PM me on Reddit if you release this code or a modified version so I can check out what you've made! ****/