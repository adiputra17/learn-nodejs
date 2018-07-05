var connection  = require('../../config/dbConnection');  
var express     = require('express');
var router      = express.Router();
var bodyParser  = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post('/', function (req, res) {
    console.log("body : "+req.body);
    // Validate request
    if(!req.body.name) {
        return res.status(400).send({
            message: "Note name can not be empty"
        });
    }else{
        var names  = req.body.name;
        var query = "INSERT INTO user (name) VALUES ('"+names+"')";
        connection.query(query, function(err, result, fields){
        if(err)
            return res.json({
                status  :'400',
                message :'failed',
                result  :err
            });
        else
            return res.json({
                status  :'200',
                message :'insert success',
                result  :result
            });
        });
    }
});

// function Todo() {
router.get('/', function (req, res) {
    var query = 'SELECT * FROM user';
    connection.query(query, function(err, result, fields){
    if(err)
        return res.json({
            status  :'400',
            message :'failed',
            result  :err
        });
    else
        return res.json({
            status  :'200',
            message :'success',
            result  :result
        });
    });
});


// }
module.exports = router;
