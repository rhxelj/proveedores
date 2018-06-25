var express = require('express');
var router = express.Router();
var path = require('path');
var conexion = require('./conexion');


conexion.connect(function(err) {
    if (!err) {
        console.log("base de datos conectada");
    } else {
        console.log("no se conecto");
    }
});



var router = express();



var router = express();
console.log('estamos aca');

router.post('/?:id', function(req, res, next) {
 indice = req.params.id;

 descr = req.body.TipoMonedasDescripcion;
 cotiz = req.body.TipoMonedasCotizacion;


   // conexion.query('Select * from TipoMonedas where idTipoMonedas = "' + indice + '"',
    conexion.query('UPDATE TipoMonedas SET TipoMonedasDescripcion = "' + descr + '", TipoMonedasCotizacion = '+ cotiz + ' WHERE idTipoMonedas = "' + indice + '"',
        function(err, result) {
            if (err) {
                console.log(err);
            } else {
                res.json(result);
                };
            });
        });




module.exports = router;