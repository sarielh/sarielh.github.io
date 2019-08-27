
$(document).ready(function(){


    var availableTags = [
        "Tel-Aviv",
        "London",
        "Berlin",
    ];
    $( "#tags" ).autocomplete({
        source: availableTags
    });



    $( "#ui-id-1" ).click(function() {

        // if($('#tags').val() == 'Tel Aviv'){
        //     // alert("Tel Aviv is Here!")
        //     $('#MainWeatherWeeklyDay1DetailsCityNameDiv').text('Tel-Aviv');
        //     $('#MainWeatherWeeklyDay1DetailsTempDiv').text('33°');
        //     $('#WeatherDay2TempDiv').text('35°/24');
        //     $('#WeatherDailyImage2Div').css("background-image", "url(./images/016-sun.png)");
        //     $('#WeatherDay3TempDiv').text('37°/25');
        //     $('#WeatherDay4TempDiv').text('29°/21');
        //     $('#WeatherDay3TempDesc').text('Sunny');
        // }

        switch($('#tags').val()) {
            case 'Tel-Aviv':

                $("#MainWeatherWeeklyDiv").fadeOut(500, function() {});
                $("#MainWeatherWeeklyDiv").fadeIn(1000, function() {});

                setTimeout(function(){
                    $('#MainWeatherWeeklyDay1DetailsCityNameDiv').text('Tel-Aviv');
                    $('#MainWeatherWeeklyDay1DetailsTempDiv').text('33°');
                    $('#WeatherDay2TempDiv').text('35°/24');
                    $('#WeatherDailyImage2Div').css("background-image", "url(./images/016-sun.png)");
                    $('#WeatherDay3TempDiv').text('37°/25');
                    $('#WeatherDay4TempDiv').text('29°/21');
                    $('#WeatherDay3TempDesc').text('Sunny');
                }, 600);
                break;

            case 'Berlin':
                $("#MainWeatherWeeklyDiv").fadeOut(500, function() {});
                $("#MainWeatherWeeklyDiv").fadeIn(1000, function() {});

                setTimeout(function(){
                    $('#MainWeatherWeeklyDay1DetailsCityNameDiv').text('Berlin');
                    $('#MainWeatherWeeklyDay1DetailsTempDiv').text('24°');
                    $('#MainWeatherWeeklyDay1DetailsDescDiv').text('Cloudy°');
                    $('#WeatherDay2TempDiv').text('17°/7');
                    $('#WeatherDay3TempDesc').text('Storm');
                    $('#WeatherDailyImage2Div').css("background-image", "url(./images/005-storm-1.png)");
                    $('#WeatherDay3TempDiv').text('12°/3');
                    $('#WeatherDailyImage3Div').css("background-image", "url(./images/010-raining.png)");
                    $('#WeatherDay4TempDiv').text('29°/21');
                    $('#WeatherDay4TempDesc').text('Rain');
                    $('#WeatherDailyImage1Div').css("background-image", "url(./images/011-cloudy.png");
                    $('#WeatherDay2TempDesc').text('Cloudy');
                }, 600);


                break;
            default:

        }

    });

    });