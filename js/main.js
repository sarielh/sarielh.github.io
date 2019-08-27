
$(document).ready(function(){


    var availableTags = [
        "Tel-Aviv",
        "London",
        "Berlin",
        "New-York"
    ];
    $( "#cities" ).autocomplete({
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

        switch($('#cities').val()) {
            case 'Tel-Aviv':

                $("#MainWeatherWeeklyDiv").fadeOut(500, function() {});
                $("#MainWeatherWeeklyDiv").fadeIn(1000, function() {});

                setTimeout(function(){
                    $('#MainWeatherWeeklyDay1DetailsCityNameDiv').text('Tel-Aviv');
                    $('#MainWeatherWeeklyDay1DetailsTempDiv').text('33°');
                    $('#WeatherDay2TempDiv').text('35°/24');
                    $('#WeatherDailyImage1Div').css("background-image", "url(./images/016-sun.png)")
                    $('#WeatherDailyImage2Div').css("background-image", "url(./images/016-sun.png)");
                    $('#WeatherDailyImage3Div').css("background-image", "url(./images/011-cloudy.png)");
                    $('#WeatherDay3TempDiv').text('37°/25');
                    $('#WeatherDay4TempDiv').text('29°/21');
                    $('#WeatherDay2TempDesc').text('Sunny');
                    $('#WeatherDay3TempDesc').text('Sunny');
                    $('#WeatherDay4TempDesc').text('Cloudy');
                    $('#MainWeatherWeeklyDay1DetailsDescDiv').text('Sunny');


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

            case 'London':
                $("#MainWeatherWeeklyDiv").fadeOut(500, function() {});
                $("#MainWeatherWeeklyDiv").fadeIn(1000, function() {});

                setTimeout(function(){
                    $('#MainWeatherWeeklyDay1DetailsCityNameDiv').text('London');
                    $('#MainWeatherWeeklyDay1DetailsTempDiv').text('14°');
                    $('#MainWeatherWeeklyDay1DetailsDescDiv').text('Cloudy°');
                    $('#WeatherDay2TempDiv').text('21°/11');
                    $('#WeatherDay3TempDesc').text('Rain');
                    $('#WeatherDailyImage2Div').css("background-image", "url(./images/010-raining.png)");
                    $('#WeatherDay3TempDiv').text('19°/6');
                    $('#WeatherDailyImage3Div').css("background-image", "url(./images/011-cloudy.png)");
                    $('#WeatherDay4TempDiv').text('23°/12');
                    $('#WeatherDay4TempDesc').text('Cloudy');
                    $('#WeatherDailyImage1Div').css("background-image", "url(./images/010-raining.png");
                    $('#WeatherDay2TempDesc').text('Rain');
                }, 600);
                break;

            case 'New-York':
                $("#MainWeatherWeeklyDiv").fadeOut(500, function() {});
                $("#MainWeatherWeeklyDiv").fadeIn(1000, function() {});

                setTimeout(function(){
                    $('#MainWeatherWeeklyDay1DetailsCityNameDiv').text('New York');
                    $('#MainWeatherWeeklyDay1DetailsTempDiv').text('23°');
                    $('#MainWeatherWeeklyDay1DetailsDescDiv').text('Sunny°');
                    $('#WeatherDay2TempDiv').text('26°/19');
                    $('#WeatherDay2TempDesc').text('Sunny');
                    $('#WeatherDay2TempDiv').text('20°/12');
                    $('#WeatherDay2TempDesc').text('Rain');
                    $('#WeatherDay2TempDiv').text('14°/6');
                    $('#WeatherDay2TempDesc').text('Cloudy');
                    $('#WeatherDailyImage1Div').css("background-image", "url(./images/016-sun.png");
                    $('#WeatherDailyImage1D2v').css("background-image", "url(.images/010-raining.png");
                    $('#WeatherDailyImage3Div').css("background-image", "url(./images/011-cloudy.png)");

                }, 600);
                break;
            default:

        }

    });

    });