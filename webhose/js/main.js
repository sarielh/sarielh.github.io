
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

var all_coverage_request = [];

$("#SubmitBtn").click(function(){

    var client_email = $('#Email')[0].value;
    var client_domain = $('#Domain')[0].value;
    var source_type = $('#SourceType').val();
    var source_country = $('#SourceCountry')[0].innerText;
    var reason = $('#Reason')[0].value;

    var coverage_request = {Email : client_email, Domain: client_domain, SourceType: source_type, SourceCountry: source_country, Reason:reason};


    all_coverage_request.push(coverage_request);

    console.log(all_coverage_request);

    var table_request = "<table id='coverage_request'><tr>";
    table_request += "<th>Email</th>";
    table_request += "<th>Domain</th>";
    table_request += "<th>Source Type</th>";
    table_request += "<th>Source Country</th>";
    table_request += "<th>Reason</th>";
    table_request += "</tr>";

    for(let user of all_coverage_request){
        console.log(user.Email, user.Domain, user.SourceType,user.SourceCountry, user.Reason)
        table_request += '<tr></tr><th>'+ user.Email +'</th>';
        table_request += '<th>'+ user.Domain +'</th>';
        table_request += '<th>'+ user.SourceType +'</th>';
        table_request += '<th>'+ user.SourceCountry +'</th>';
        table_request += '<th>'+ user.Reason +'</th></tr>';

    }

    // for (const [key, value] of Object.entries(all_coverage_request)) {
    //     console.log(key, value);
    // }


    table_request += "</table>";

    $("#coverage_request").remove();
    $('#MainDiv').append(table_request);
});



});
