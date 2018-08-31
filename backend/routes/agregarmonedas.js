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
        console.log("no se conecto");
    }
});



router.post('/', function(req, res, next) {

  var registro = {
    idTipoMonedas : req.body.idTipoMonedas,
    TipoMonedasDescripcion : req.body.TipoMonedasDescripcion,
    TipoMonedasCotizacion : req.body.TipoMonedasCotizacion

  }
    var saludo = '';



        conexion.query('INSERT INTO TipoMonedas SET ?', registro, 
        function(err, result) {
            if (err) {
                if (err.errno == 1062) 
                     {
                         return res.status(409).send({message : "error clave duplicada"});
                        }
                  else 
                  if (err.errno == 1406) 
                     {
                         return res.status(410).send({message : "error clave duplicada"});
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