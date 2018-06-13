var express = require('express');
var router = express.Router();
var path = require('path');
var moment = require('moment');
var conexion = require('./conexion');




moment.locale('es');

//router = express();
conexion.connect(function(err) {
    if (!err) {
        console.log("base de datos conectada");
    } else {
        console.log("no se conecto");
    }
});


console.log('esto es lo que hay');

router.post('/', function(req, res) {
    console.log('esto es lo que hay II');
  var registro = {
    TipoProveedDesc : 'oye'
    //req.body.tipoprovdesc,
  }
    console.log(registro);
    var saludo = '';



        conexion.query('INSERT INTO TipoProveed TipoProveedDesc VALUES ', registro, 
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