var html;
$(document).ready(
    function() 
    {  
        getWeather();
        setInterval(getWeather, 10000);
    }
);

function getWeather() {
  $.simpleWeather({
    location: cityName,
    unit: tempUnits,
    success: function(weather) {
        html = '<tr> <td id = "info" colspan = "2">' + weather.city + '</td> <td id = "info" style = "text-align:right">' + weather.temp + '&deg' + weather.units.temp + '</td> </tr> <tr> <td id = "info" colspan = "3" style = "text-align: right;">' + weather.currently + '</td></tr><tr><td colspan = "2">Battery</td> <td id = "info" style = "text-align:right;">' + Math.round(100 * .98/*groovyAPI.getBatteryLevel()*/)+ "%" + '</td> </tr></table>';
    },
    error: function(error) {
        html = '"<p>"+error+"</p>"';
    }
  });
}
