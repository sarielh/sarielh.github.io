
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

    var coverage_request = {Email : client_email, Domain: client_domain, SourceType: source_type, Reason:reason};


    all_coverage_request.push(coverage_request);

    // console.log(all_coverage_request);

    var table_request = "<table><tr>";
    table_request += "<th>Email</th>";
    table_request += "<th>Domain</th>";
    table_request += "<th>Source Type</th>";
    table_request += "<th>Reason</th>";
    table_request += "</tr><tr>";


    for (const [key, value] of Object.entries(all_coverage_request)) {
        console.log(key, value);
        var value_test = value;
        connsole.log(value_test);
        table_request += "<td>'+ value +'</td>";
    }

    table_request += "</tr></table>";

    $('#MainDiv').append(table_request);
});



});
