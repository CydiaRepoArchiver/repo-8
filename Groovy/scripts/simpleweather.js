var html;
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
        html = '<table><tr> <td colspan = "2">' + weather.city + '</td> <td>' + weather.temp + '&deg' + weather.units.temp + '</td> </tr> <tr> <td colspan = "2">' + weather.currently + '</td> <td>' + groovyapi.getBatteryLevel + '</td> </tr></table>';
    },
    error: function(error) {
        html = '"<p>"+error+"</p>"';
    }
  });
}
