var express = require('express');
var router = express.Router();
var path = require('path');
var moment = require('moment');
var conexion = require('./conexion');

console.log('esta en agregamonedas I');
moment.locale('es');

//router = express();
conexion.connect(function(err) {
    if (!err) {
        console.log("base de datos conectada en monedas");
    } else {
        console.log("no se conecto");
    }
});

router.post('/', function(req, res) {

  var registro = {
    idTipoMonedas : req.body.idTipoMonedas,
    TipoMonedasDescripcion : req.body.TipoMonedasDescripcion,
    TipoMonedasCotizacion : req.body.TipoMonedasCotizacion

  }
    console.log(registro);
    var saludo = '';



        conexion.query('INSERT INTO TipoMonedas SET ?', registro, 
        function(err, result) {
            if (err) {
                console.log('ERROR ');
                console.log(err);
            } else {
                res.json(result.rows);
            
            }
        });
});




module.exports = router;