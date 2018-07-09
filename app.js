var express = require('express');
var app     = express();
var path    = require("path");
var request = require('request');

app.set('view engine', 'ejs');

var UserController = require('./app/controllers/user');
app.use('/user', UserController);

var itemController = require('./app/controllers/itemController');
app.use('/item', itemController);

app.get('/', function(req, res){
    request('http://localhost:3000/item', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var jsonContent = JSON.parse(response.body);
            // console.log(jsonContent.result);
            res.render('index', { data: JSON.stringify(response.body) });
        }
    })
});

app.get('/detail-item/:id', function(req, res){
    var id = req.params.id;
    request('http://localhost:3000/item/'+id+'', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var jsonContent = JSON.parse(response.body);
            // console.log(jsonContent.result);
            res.render('detail', { data: JSON.stringify(response.body) });
        }
    })
});


module.exports = app;