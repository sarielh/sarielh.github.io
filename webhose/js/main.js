
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

    var form_data = $("#MainForm").serializeArray();
    var error_free = true;
    for (var input in form_data) {
        var element = document.getElementById("Email");
        var valid = true;
        (element && element.value) ? valid = true : valid = false;
        var error_element = $("#errorEmail");
        if (!valid) {
            error_element.removeClass("error").addClass("error_show");
            error_free = false;

        } else {
            error_element.removeClass("error_show").addClass("error");
        }
    }

    var form_data = $("#MainForm").serializeArray();
    // var error_free = true;
    for (var input in form_data) {
        var element = document.getElementById("Domain");
        var valid = true;
        (element && element.value) ? valid = true : valid = false;
        var error_element = $("#errorDomain");
        if (!valid) {
            error_element.removeClass("error").addClass("error_show");
            error_free = false;

        } else {
            error_element.removeClass("error_show").addClass("error");
        }
    }

    var form_data = $("#MainForm").serializeArray();
    // var error_free = true;
    for (var input in form_data) {
        var element = document.getElementById("SourceType");
        var valid = true;
        (element.value != "0") ? valid = true : valid = false;
        var error_element = $("#errorSource");
        if (!valid) {
            error_element.removeClass("error").addClass("error_show");
            error_free = false;

        } else {
            error_element.removeClass("error_show").addClass("error");
        }
    }

    var form_data = $("#MainForm").serializeArray();
    // var error_free = true;
    for (var input in form_data) {
        var element = document.getElementById("SourceCountry");
        var valid = true;
        (element.value != "0") ? valid = true : valid = false;
        var error_element = $("#errorCountry");
        if (!valid) {
            error_element.removeClass("error").addClass("error_show");
            error_free = false;

        } else {
            error_element.removeClass("error_show").addClass("error");
        }
    }

    if (!error_free) {
        event.preventDefault();
    } else {
        event.preventDefault();

        var client_email = $('#Email')[0].value;
        var client_domain = $('#Domain')[0].value;
        var source_type = $('#SourceType').val();
        // var source_country = $('#SourceCountry')[0].innerText;
        var source_country = $("select#SourceCountry option").filter(":selected").text();
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
    }

});



});
