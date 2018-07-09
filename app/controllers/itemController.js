var connection  = require('../../config/dbConnection');  
var express     = require('express');
var router      = express.Router();
var bodyParser  = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post('/', function (req, res) {
    // Validate request
    var nama    = req.body.nama;
    var harga   = req.body.harga;
    var gambar  = req.body.gambar;
    var desk    = req.body.desk;
    console.log("body : "+nama+" "+harga+" "+gambar+" "+desk);
    if(!(nama || harga || gambar || desk)) {
        return res.status(400).send({
            message: "Can not be empty"
        });
    }else{
        var query = "INSERT INTO item (nama,harga,gambar,deskripsi) VALUES ('"+nama+"',"+harga+",'"+gambar+"','"+desk+"')";
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
                message :'insert item success!',
                result  :result
            });
        });
    }
});

// function Todo() {
router.get('/', function (req, res) {
    var query = 'SELECT * FROM item';
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
        console.log(result);
    });
});

router.get('/:id', function (req, res) {
    var id = req.params.id;
    console.log(id);
    var query = "SELECT * FROM item WHERE id = "+id+"";
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
        // console.log(result);
    });
});

router.delete('/:id', function (req, res) {
    var id = req.params.id;
    console.log(id);
    var query = "DELETE FROM item WHERE id = "+id+"";
    connection.query(query, function(err, result, fields){
    if(err)
        return res.json({
            status  :'400',
            message :'failed',
        });
    else
        return res.json({
            status  :'200',
            message :'success',
        });
    });
});

// }
module.exports = router;
