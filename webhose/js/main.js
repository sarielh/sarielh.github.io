
$(document).ready(function(){

$.getJSON('countries.json', function(data) {
    console.log(data[0]);
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
//             console.log(movie)
//         })
//     } else {
//         console.log('error')
//     }
// }
//
// request.send();