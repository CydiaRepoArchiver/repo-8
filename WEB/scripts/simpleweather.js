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
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
}
