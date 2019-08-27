
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
            alert("Tel Aviv is Here!")
        }

    });

});