//app.js
var mysql = require('mysql');

/**
* Setting opsi dari connection, 
* lihat https://github.com/felixge/node-mysql/
*/
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
});

//Membuka koneksi ke database MySQL
connection.connect(function(err){
    if(err) {
        console.log(err);
    } else {
        console.log('Koneksi dengan id '+ connection.threadId);
    }
});

//Query bisa dilakukan di sini
//Create Database
var create_db = 'CREATE DATABASE IF NOT EXISTS nodejs'
connection.query(create_db, function(err, result){
    if(err){
      console.log(err);
    } else {
      console.log(result);
    }
});

//Create Table
var create_tbl = 'CREATE TABLE IF NOT EXISTS nodejs.person (id int, name varchar(100));'
connection.query(create_tbl, function(err, result){
    if(err){
      console.log(err);
    } else {
      console.log(result);
    }
});

//Insert Data
var person = {
    name: 'Adiputra',
}
var insert_sql = 'INSERT INTO nodejs.person SET ?';
connection.query(insert_sql, person, function(err, result){
    err ? console.log(err): console.log(result);
})

//Menutup koneksi
connection.end(function(err){
   if(err) {
       console.log(err);
    } else {
       console.log('koneksi ditutup!');
   }
});