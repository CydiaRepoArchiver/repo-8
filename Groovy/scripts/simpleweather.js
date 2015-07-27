$(document).ready(
    function() 
    {  
        getWeather();
        setInterval(getWeather, 1000);
    }
);

function getWeather() {
  $.simpleWeather({
    location: cityName,
    unit: tempUnits,
    success: function(weather) {
        document.getElementById("below").innerHTML = weather.temp + "&deg" + weather.units.temp + "&nbsp";// + groovyapi.getBatteryLevel() + "%";
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
}
