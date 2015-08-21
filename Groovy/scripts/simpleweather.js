$(document).ready(
    function() 
    {  
        getWeather();
        setInterval(getWeather, 10000);
    }
);

function getWeather() {
  $.simpleWeather({
    location: city1,
    unit: tempUnits,
    success: function(weather) {
        var t = "&deg" + weather.units.temp;
        document.getElementById("city1").innerHTML = weather.city.match(/[A-Z]/g).join('');
        document.getElementById("temp1").innerHTML = weather.temp + t + "&nbsp<sup>H" + weather.high + "</sup>&frasl;<sub>L" + weather.low + "</sub>";
        document.getElementById("word1").innerHTML = weather.currently;
    },
    error: function(error) {
    }
  });
    
$.simpleWeather({
    location: city2,
    unit: tempUnits,
    success: function(weather) {
        var t = "&deg" + weather.units.temp;
        document.getElementById("city2").innerHTML = weather.city.match(/[A-Z]/g).join('');
        document.getElementById("temp2").innerHTML = "<sup>H" + weather.high + "</sup>&frasl;<sub>L" + weather.low + "</sub>&nbsp" + weather.temp + t;
        document.getElementById("word2").innerHTML = weather.currently;
    },
    error: function(error) {
    }
  });
}
