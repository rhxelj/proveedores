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


router.post('/?:id', function(req, res, next) {
 indice = req.params.id;
 
 descr = req.body.StkGrupoDesc;
 abrev = req.body.StkGrupoAbr;
 contRubro = req.body.StkGrupoContRubro;
 
 
console.log('indice  ', indice);
   // conexion.query('Select * from TipoMonedas where idTipoMonedas = "' + indice + '"',
    conexion.query('UPDATE StkGrupo SET StkGrupoDesc = "' + descr + '", StkGrupoAbr = "' + abrev + '", StkGrupoContRubro = '+ contRubro + ' WHERE idStkGrupo = "' + indice + '"',
        function(err, result) {
            if (err) {
                if (err.errno == 1062) 
                        {
                        return res.status(409).send({message : "Abreviatura de Grupo existente"});
                        }
                    else
                console.log(err);
            } else {
                res.json(result);
                };
            });
        });


module.exports = router;