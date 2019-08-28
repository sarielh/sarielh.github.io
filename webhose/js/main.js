
$(document).ready(function(){

$.getJSON('http://country.io/names.json', function(data) {
    console.log(data);
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