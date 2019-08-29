
$(document).ready(function(){

$.getJSON('countries.json', function(data) {
    console.log(data);

    var option_country;

    for (const [key, value] of Object.entries(data)) {
        console.log(key, value);
        option_country += '<option>'+ value +'</option>';
    }

    $('SourceCountry').append(option_country);

}); 

// $('#MainDiv').append('<div>Sariel Hadas is here!</div>');


});
