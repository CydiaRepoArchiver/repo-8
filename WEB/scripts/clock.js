/**** Version 1, 6/13/25 ****/
function data() {
    var d = new Date();
    //Arrays
    var a_mon = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var a_d = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    var a_month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var a_day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    //Day number, short name, full name
    var day = d.getDate();
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
    var m = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
    var s = d.getSeconds();
    /**** Format |1) HH:MM:SS |2) HH:MM |3)  HH:MM:SS AM |4) HH:MM AM |5) MM/DD/YY |6) Mon. Jan 1, 1970 |7) Monday. January 1, 1970
     **** ElementId |1) HMS |2) HM |3) HMSampm |4) HMampm |5)  numMDY |6) fullDateAbbrev |7) fullDateLong  ****/
    document.getElementById("HMampm").innerHTML = h + ":" + m + " " + ampm;
    document.getElementById("numMDY").innerHTML = month + "/" + day + "/" + year2D;
    //document.getElementById("fullDateAbbrev").innerHTML = weekDayAbbrev + ". " + monthAbbrev + " " + day + ", " + year;
    //document.getElementById("fullDateLong").innerHTML = weekDayFull + ". " + monthFull + " " + day + ", " + year;
}
setInterval(data, 1000);
data();

/**** Written by /u/S0MECoder. Modify the code all you want but please leave this comment intact. PM me on Reddit if you release this code or a modified version so I can check out what you've made! ****/