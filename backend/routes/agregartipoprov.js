var express = require('express');
var router = express.Router();
var path = require('path');
var moment = require('moment');
var conexion = require('./conexion');


moment.locale('es');

//router = express();
conexion.connect(function(err) {
    if (!err) {
        console.log("base de datos conectada en tipoprov");
    } else {
        console.log("no se conecto");
    }
});



router.post('/', function(req, res) {
console.log('ieie  ', req.body.TipoMonedasCotizacion);
  var registro = {
    idTipoProveed : req.body.idTipoProveed,
    TipoProveedDesc : req.body.TipoProveedDesc,
   

  }
    console.log(registro);
    var saludo = '';



        conexion.query('INSERT INTO TipoProveed SET ?', registro, 
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