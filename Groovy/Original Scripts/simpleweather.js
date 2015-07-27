$(document).ready(
    function() 
    {  
        getWeather();
        setInterval(getWeather, 600000);
    }
);

function getWeather() {
  $.simpleWeather({
    location: cityName,
    unit: tempUnits,
    success: function(weather) {
        document.getElementById("temp").innerHTML = weather.temp + "&deg"+weather.units;
        document.getElementById("conditions").innerHTML = weather.currently;
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
}
