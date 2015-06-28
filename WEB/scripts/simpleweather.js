$(document).ready(
    function() 
    {  
        getWeather();
        setInterval(getWeather, 60000);
    }
);

function getWeather() {
  $.simpleWeather({
    location: cityName,
    unit: tempUnits,
    success: function(weather) {
        document.getElementById("temp").innerHTML = weather.temp + "&deg"+ weather.units.temp +" "+ weather.currently;
        var w = weather.currently;
        var c = w.indexOf("loud") !== -1 ? "#a9a9a9" : w.indexOf("unn") !== -1 ? "#fada5e" : "#ccccff";
        document.getElementById("temp").style.backgroundColor = c;
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
}
