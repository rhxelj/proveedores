var express = require('express');
var router = express.Router();
var path = require('path');
var conexion = require('./conexion');
var mysql = require('mysql');

var router = express();
conexion.connect(function(err) {
    if (!err) {
        console.log("base de datos conectada");
    } else {
        console.log("no se conecto");
    }
});


router.delete('/?:id', function(req, res, next) {
    indice = req.params.id;
//DELETE FROM `BasesGenerales`.`TipoMonedas` WHERE `idTipoMonedas`='ee';

  conexion.query('delete from TipoMonedas where idTipoMonedas = "' + indice + '"', 
                                         function(err, result) {
                                            if (err) {
                                                console.log(err);
                                            } else {
                                                res.json(result.rows);
                                            }
                                        }); 
                                    });   

module.exports = router;