
$(document).ready(function(){

$.getJSON('countries.json', function(data) {
    console.log(data);

    // const test = {a: 1, b: 2, c: 3};

    for (const [key, value] of Object.entries(data)) {
        console.log(key, value);
    }
    // var data2 = JSON.parse(data);
    // console.log(data2);
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