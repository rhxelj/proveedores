var express = require('express');
var router = express.Router();
var path = require('path');
var conexion = require('./conexion');


conexion.connect(function(err) {
    if (!err) {
        console.log("base de datos conectada stktipoproveed");
    } else {
        console.log("no se conecto");
    }
});



var router = express();



var router = express();
console.log('estamos aca');

router.post('/?:id', function(req, res, next) {
 indice = req.params.id;

 descr = req.body.StkTipoProveedDesc;
 

   // conexion.query('Select * from TipoMonedas where idTipoMonedas = "' + indice + '"',
    conexion.query('UPDATE StkTipoProveed SET StkTipoProveedDesc = "' + descr + '" WHERE idStkTipoProveed = ' + indice ,
        function(err, result) {
            if (err) {
                console.log(err);
            } else {
                res.json(result);
                };
            });
        });


module.exports = router;