function showTabInfo(tabName) {
    var i;
    var x = document.getElementsByClassName("canvas");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}

$(document).ready(function() {
    $("#Button-Random").click(function(e) {
        e.preventDefault();

        console.log("button get click");

        var value = Math.floor((Math.random() * 614) + 1);
        var myurl= "http://xkcd.com/" + value +"/info.0.json" ;
        //console.log(myurl);
        // $.ajax({
        //     url : myurl,
        //     dataType : "json",
        //     success : function(json) {
        //
        //         // var results = "";
        //         // results += "<h2>" + jsonp.safe_title + "</h2>";
        //         // results += "<img src="+ jsonp.img +"></img>";
        //         // results += "<p>" + jsonp.alt + "</p>";
        //         // results += "<h3>" + jsonp.year + "</h3>";
        //         $("#xkcdResults").html(results);
        //     }
        // });

        // $.getJSON(myurl, (json) => {
        //   console.log(json);
        //   var results = "";
        //   results += "<h2>" + json.safe_title + "</h2>";
        //   results += "<img src="+ json.img +"></img>";
        //   results += "<p>" + json.alt + "</p>";
        //   results += "<h3>" + json.year + "</h3>";
        //   $("#xkcdResults").html(results);
        // });

        function getComic(json){
          console.log(json);
        }

        $.ajax({
          url : myurl,
          dataType : "jsonp",
          jsonpCallback: "getComic"
        });
    });

    $("#chuck-Random").click(function(e) {
        e.preventDefault();
        var myurl= "https://api.chucknorris.io/jokes/random";
        $.ajax({
            url : myurl,
            dataType : "json",
            success : function(json) {
                console.log(JSON.stringify(json));
                var results = "";
                results += "<p>" + json.value + "</p>";
                $("#cnResults").html(results);
            }
        });
    });

});
