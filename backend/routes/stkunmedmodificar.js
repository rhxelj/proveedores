var express = require('express');
var router = express.Router();
var path = require('path');
var conexion = require('./conexion');


conexion.connect(function(err) {
    if (!err) {
        console.log("base de datos conectada StkUnMed");
    } else {
        console.log("no se conecto en StkUnMed");
    }
});



var router = express();



var router = express();

router.post('/?:id', function(req, res, next) {
let indice = " ";
indice = req.params.id;

 descr = req.body.StkUnMedDesc;
 
 conexion.query ('UPDATE StkUnMed SET StkUnMedDesc = "' + descr + '" WHERE idStkUnMed = "' + indice + '"',

        function(err, result) {
            if (err) {
                    if (err.errno == 1406) 
                        {
                        return res.status(410).send({message : "El campo alfanumérico dígitos de los que corresponde"});
                        }
                    else
                    console.log(err);
                }
            
            else {
                res.json(result);
                };
            });
        });


module.exports = router;