
$(document).ready(function(){


    var availableTags = [
        "Tel Aviv",
        "London",
        "Berlin",
    ];
    $( "#tags" ).autocomplete({
        source: availableTags
    });



    $( "#ui-id-1" ).click(function() {

        if($('#tags').val() == 'Tel Aviv'){
            // alert("Tel Aviv is Here!")
            $('#MainWeatherWeeklyDay1DetailsCityNameDiv').text('Tel-Aviv');
            $('#MainWeatherWeeklyDay1DetailsTempDiv').text('33°');
            $('#WeatherDay2TempDiv').text('35°/24');
            $('#WeatherDailyImage2Div').css("background-image", "url(./images/016-sun.png)");
            $('#WeatherDay3TempDiv').text('37°/25');
            $('#WeatherDay4TempDiv').text('29°/21');
            $('#WeatherDay3TempDesc').text('Sunny');
        }

    });

    });