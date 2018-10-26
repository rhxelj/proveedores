var express = require('express');
var router = express.Router();
var path = require('path');
var moment = require('moment');
var conexion = require('./conexion');


moment.locale('es');

//router = express();
conexion.connect(function(err) {
    if (!err) {
        console.log("base de datos conectada en monedas");
    } else {
        console.log("no se conecto en monedas");
    }
});



router.post('/', function(req, res, next) {

  var registro = {
    idStkMonedas  : req.body.idStkMonedas ,
    StkMonedasDescripcion : req.body.StkMonedasDescripcion,
    StkMonedasCotizacion : req.body.StkMonedasCotizacion

  }
    var saludo = '';



        conexion.query('INSERT INTO StkMonedas SET ?', registro, 
        function(err, result) {
            if (err) {
                if (err.errno == 1062) 
                     {
                         return res.status(409).send({message : "error clave duplicada"});
                        }
                  else 
                  if (err.errno == 1406 || err.errno == 1264) 
                     {
                         return res.status(410).send({message : "Código con más de cuatro letras"});
                        }
                    {
                        console.log (err.errno);
                    }
                }
           
            
            else {
                res.json(result.rows);
        };
    });
});





module.exports = router;