var express 	= require('express');
// var logger 	= require('morgan');
// var bodyParser 	= require('body-parser');
// var user 		= require('./app/routes/user'); 
//var connection 	= require('./config/dbConnection');

var app = express();

//connection.init();

// user.configure(app);
// app.use(logger('dev'));
// app.use(express.bodyParser())
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json());

// app.post('/', (req, res) => {
//     console.log(req.body.name);
//     res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
// });
var UserController = require('./app/controllers/user');
app.use('/user', UserController);

module.exports = app;