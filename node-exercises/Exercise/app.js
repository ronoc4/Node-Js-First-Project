/**
 * Created by conor.budge on 1/10/2017.
 */

var express = require('express');
var app = express();

app.get('/cheer.txt', function (request, response) {
   response.end('You have nice eyes.');
});

app.get('/jeer.txt', function (request, response) {
   response.end("Your mother was a hamster");
});

var server = app.listen(8080, function() {
    console.log('Listening on port 8080');
});