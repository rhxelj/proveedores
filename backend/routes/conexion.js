var mysql = require('mysql');
var express = require('express');


var conexion = mysql.createConnection({
    user: 'root',
    password: 'password',
    host: 'localhost',
    database: 'BasesGenerales'
});



module.exports = conexion;
