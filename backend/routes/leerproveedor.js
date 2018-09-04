var express = require('express');
var router = express.Router();
var path = require('path');
var conexion = require('./conexion');



conexion.connect(function(err) {
    if (!err) {
        console.log("base de datos conectada en leerproveedor");
    } else {
        console.log("no se conecto en leerproveedor");
    }
});




var router = express();

router.get('/', function(req, res, next) {

      conexion.query('SELECT idProveedores, ProveedoresDesc, ProveedoresTipo, ProveedoresCUIT, ProveedoresCalle, ProveedoresNroCalle, ProveedoresPiso, ProveedoresDto, ProveedoresCodPos, ProveedoresLoc, ProveedoresPcia, ProveedoresTel, ProveedoresContacto, ProveedoresMail, ProveedoresWeb, ProveedoresCodMon, TipoProveedDesc, TipoProveed.TipoProveedDesc FROM BasesGenerales.Proveedores JOIN BasesGenerales.TipoProveed where Proveedores.ProveedoresTipo = TipoProveed.idTipoProveed',

  
        function(err, result) {
            if (err) {
                console.log(err);
            } else {
                res.json(result);
            }
        });
        
});

module.exports = router;