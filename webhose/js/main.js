
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
        var error_valid_element = $("#errorEmailValid");

        function validateEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }

        if ((!valid && !validateEmail(element.value) || !valid && validateEmail(element.value))) {
            error_element.removeClass("error").addClass("error_show");
            error_valid_element.removeClass("error_show").addClass("error");
            error_free = false;

        } else if (!validateEmail(element.value)){
            error_valid_element.removeClass("error").addClass("error_show");
            error_element.removeClass("error_show").addClass("error");
            error_free = false;
        } else {
            error_element.removeClass("error_show").addClass("error");
            error_valid_element.removeClass("error_show").addClass("error");
        }
    }

    var form_data = $("#MainForm").serializeArray();
    // var error_free = true;
    for (var input in form_data) {
        var element = document.getElementById("Domain");
        var valid = true;
        (element && element.value) ? valid = true : valid = false;

        var error_element = $("#errorDomain");
        var error_valid_element = $("#errorDomainValid");

        function CheckIsValidDomain(domain) {
            var re = new RegExp(/^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/);
            return domain.match(re);
        }

        if ((!valid && !CheckIsValidDomain(element.value) || !valid && validateEmail(element.value))) {
            error_element.removeClass("error").addClass("error_show");
            error_valid_element.removeClass("error_show").addClass("error");
            error_free = false;

        } else if (!CheckIsValidDomain(element.value)){
            error_valid_element.removeClass("error").addClass("error_show");
            error_element.removeClass("error_show").addClass("error");
            error_free = false;
        } else {
            error_element.removeClass("error_show").addClass("error");
            error_valid_element.removeClass("error_show").addClass("error");
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
        table_request += "<th></th>";
        table_request += "<th>Email</th>";
        table_request += "<th>Domain</th>";
        table_request += "<th>Source Type</th>";
        table_request += "<th>Source Country</th>";
        table_request += "<th>Reason</th>";
        table_request += "</tr>";

        var index_delete = 0;

        for(let user of all_coverage_request){
            // console.log(user.Email, user.Domain, user.SourceType,user.SourceCountry, user.Reason)
            table_request += '<tr><th><div class="DeleteButton" id="'+ index_delete +'"></div></th>';
            table_request += '<th>'+ user.Email +'</th>';
            table_request += '<th>'+ user.Domain +'</th>';
            table_request += '<th>'+ user.SourceType +'</th>';
            table_request += '<th>'+ user.SourceCountry +'</th>';
            table_request += '<th>'+ user.Reason +'</th></tr>';
            index_delete++;
        }


        table_request += "</table>";

        $("#coverage_request").remove();
        $('#MainDiv').append(table_request);

        $('#Email')[0].value = '';
        $('#Domain')[0].value = '';
        $('#SourceType')[0].value = '0';
        $('#SourceCountry')[0].value = '0';
        $('#Reason')[0].value= '';
    }



});

    $(document).on('click', '.DeleteButton', function(){

        // var index = all_coverage_request.indexOf(5);
        //
        // all_coverage_request.splice(index, this.id);

        all_coverage_request.splice(this.id, 1);


        var table_request = "<table id='coverage_request'><tr>";
        table_request += "<th></th>";
        table_request += "<th>Email</th>";
        table_request += "<th>Domain</th>";
        table_request += "<th>Source Type</th>";
        table_request += "<th>Source Country</th>";
        table_request += "<th>Reason</th>";
        table_request += "</tr>";

        var index_delete = 0;

        for(let user of all_coverage_request){
            table_request += '<tr><th><div class="DeleteButton" id="'+ index_delete +'"></div></th>';
            table_request += '<th>'+ user.Email +'</th>';
            table_request += '<th>'+ user.Domain +'</th>';
            table_request += '<th>'+ user.SourceType +'</th>';
            table_request += '<th>'+ user.SourceCountry +'</th>';
            table_request += '<th>'+ user.Reason +'</th></tr>';
            index_delete++;
        }

        $("#coverage_request").remove();
        $('#MainDiv').append(table_request);

        // console.log(all_coverage_request);
        // console.log(this.id);

    });



});
