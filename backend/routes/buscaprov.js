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


router.get('/?:id', function(req, res, next) {
        letbus = req.params.id;  
        console.log(letbus);
        var cantidad = 0;
        conexion.query('select count(*) as total from Proveedores where ProveedoresDesc like "%'+letbus+'%"',
        function(err, result) {
            if (err) {
                console.log(err);
            } else {
                cantidad = result[0].total;
               
            }
        });
        conexion.query('select * from Proveedores where ProveedoresDesc like "%'+letbus+'%"' ,
        function(err, result) {
             if (err) {
                 console.log(err);
            } else { 
                if (result != '') {
                    for (i=0; i < cantidad; i++) {
                    console.log((JSON.parse(JSON.stringify(result[i].ProveedoresDesc))));
                    }
                }
                else
                {
                    console.log('no hay proveedores con esa descripción');
                }
            }
     
        });

});

module.exports = router;