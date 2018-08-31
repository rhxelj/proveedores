var mysql = require('mysql');
var express = require('express');


var conexion = mysql.createConnection({
    user: 'root',
    password: 'MySQL!!!',
    host: 'localhost',
    database: 'BasesGenerales'
});



module.exports = conexion;
