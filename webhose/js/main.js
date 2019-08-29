
$(document).ready(function(){

$.getJSON('countries.json', function(data) {
    console.log(data);

    var option_country = '';

    for (const [key, value] of Object.entries(data)) {
        // console.log(key, value);
        option_country += '<option value="'+ key +'" >'+ value +'</option>';
    }

    $('#SourceCountry').append(option_country);

});

    $("#SubmitBtn").click(function(){
        alert("Sariel Hadas is Here!");
    });



});
