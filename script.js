function showTabInfo(tabName) {
    var i;
    var x = document.getElementsByClassName("content");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    document.getElementById(tabName).style.display = "block";  
}

$(document).ready(function() {
    $("#weatherSubmit").click(function(e) {
        e.preventDefault();
        var value = $("#weatherInput").val();
        var myurl= "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&appid=fcee3bd35c8aa28397d5fe3b55ed3e76";
        $.ajax({
            url : myurl,
            dataType : "json",
            success : function(json) {
                console.log(JSON.stringify(json));
                var results = "";
                results += '<h2>Weather in ' + json.name + "</h2>";
                for (var i=0; i<json.weather.length; i++) {
                    results += '<p><img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/><p>';
                }
                results += '<h2>' + json.main.temp + " &deg;F</h2>"
                results += "<p>"
                for (var i=0; i<json.weather.length; i++) {
                    results += json.weather[i].description
                    if (i !== json.weather.length - 1)
                    results += ", "
                }
                results += "</p>";
                results += "<p>Visibility: " + json.visibility + "</p>";
                results += "<p>Expected High: " + json.main.temp_max + " &deg;F</p>";
                results += "<p>Expected Low: " + json.main.temp_min + " &deg;F</p>";
                results += "<p>Wind Speed: " + json.wind.speed + " mph</p>";
                $("#weatherResults").html(results);
            }
        });
    });

    $("#questionSubmit").click(function(e) {
        e.preventDefault();
        var value = $("#questionInput").val();
        var myurl= "https://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle="+ value + "&site=stackoverflow";
        $.ajax({
            url : myurl,
            dataType : "json",
            success : function(json) {
                var results = "";
                for (var i=0; i<json.items.length; i++) {
                    results += "<p><a href=\"" + json.items[i].link + "\">Question: " + json.items[i].title + "</a></p>";
                }
                $("#questionResults").html(results);
            }
        });
    });    
});

