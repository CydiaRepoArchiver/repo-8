function data() {
    var d = new Date(),
        h24 = d.getHours(),
        h12 = h24 > 12 ? h24 - 12 : h24,
        h = clock24Hours ? h24 : clockLeadingZero  && h12 < 10 ? h24 === 0 ? "0" : "0" + h12 : h12,
        mu = d.getMinutes(),
        m = mu < 10 ? "0" + mu : mu,
        days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        day = days[d.getDay()];
    document.getElementById("h").innerHTML = h;
    document.getElementById("d").innerHTML = day;
    document.getElementById("m").innerHTML = m;
}
setInterval(data, 1000);
data();
/**** Written by /u/S0MECoder. Modify the code all you want but please leave this comment intact. PM me on Reddit if you release this code or a modified version so I can check out what you've made! ****/