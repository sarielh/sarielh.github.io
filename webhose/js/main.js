
$(document).ready(function(){

// $.getJSON('http://country.io/names.json', function(data) {
//     console.log(data);
// });

    var url = 'http://country.io/names.json';

    $.ajax({
        type: "Get",
        url: "https://country.io/names.json",
        dataType: "json",
        success: function(data) {
            console.log(data);
        },
        error: function(){
            alert("json not found");
        }
    });


});

// var request = new XMLHttpRequest()
//
// request.open('GET', 'http://country.io/names.json', true)
// request.onload = function() {
//     // Begin accessing JSON data here
//     var data = JSON.parse(this.response)
//
//     if (request.status >= 200 && request.status < 400) {
//         data.forEach(movie => {
//             console.log(movie.title)
//         })
//     } else {
//         console.log('error')
//     }
// }
//
// request.send();