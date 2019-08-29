
$(document).ready(function(){

$.getJSON('countries.json', function(data) {
    // console.log(data);

    var option_country = '';

    for (const [key, value] of Object.entries(data)) {
        // console.log(key, value);
        option_country += '<option value="'+ key +'" >'+ value +'</option>';
    }

    $('#SourceCountry').append(option_country);

});


$("#SubmitBtn").click(function(){

    var client_email = $('#Email')[0].value;
    var client_domain = $('#Domain')[0].value;
    var source_type = $('#SourceType').val();
    var source_country = $('#SourceCountry')[0].innerText;
    var reason = $('#Reason')[0].value;



    console.log(reason);
});



});
