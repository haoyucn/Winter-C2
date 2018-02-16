$(document).ready(function() {

  var yurl= "https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke";
  console.log("getCalled");
  $.ajax({
      url : yurl,
      dataType : "json",
      success : function(json) {

          var nresults = "";
          nresults += "<h2>" + json.setup + "</h2>";
          nresults += "<p id=\"Result\" style=\"display:none\">" + json.punchline + "</p>";
          $("#xkcdResults").html(nresults);
      }
  });

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

  $("#xkcd-button").click(function(e) {
      e.preventDefault();

      console.log("button get click");

      var myurl= "https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke";
      $.ajax({
          url : myurl,
          dataType : "json",
          success : function(json) {
              var results = "";
              results += "<h2>" + json.setup + "</h2>";
              results += "<p id=\"Result\" style=\"display:none\">" + json.punchline + "</p>";
              $("#xkcdResults").html(results);
          }
      });

  });



    $("#Button-Random").click(function(e) {
        e.preventDefault();

        console.log("button get click");

        var myurl= "https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke";
        $.ajax({
            url : myurl,
            dataType : "json",
            success : function(json) {
                var results = "";
                results += "<h2>" + json.setup + "</h2>";
                results += "<p id=\"Result\" style=\"display:none\">" + json.punchline + "</p>";
                $("#xkcdResults").html(results);
            }
        });
    });

    $("#Button-Random").click(function(e) {
        e.preventDefault();
        var display = $("#other-button").css( "display" , "block");
    });

    $("#other-button").click(function(e) {
        e.preventDefault();
        var display = $("#Result").css( "display" , "block");
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
