var express = require('express');
var router = express.Router();
var path = require('path');
var moment = require('moment');
var conexion = require('./conexion');




moment.locale('es');

//router = express();
conexion.connect(function(err) {
    if (!err) {
        console.log("base de datos conectada en agregarproveedor");
    } else {
        console.log("no se conecto en agregarproveedor");
    }
});


router.post('/', function(req, res) {
 
  var registro = {
    ProveedoresDesc : req.body.provdesc,
    ProveedoresTipo : req.body.provtipo,
    ProveedoresCUIT : req.body.provcuit,
    ProveedoresCalle  : req.body.provcalle,
    ProveedoresNroCalle : req.body.provnrocalle,
    ProveedoresPiso : req.body.provpiso,
    ProveedoresDto : req.body.provdto,
    ProveedoresCodPos : req.body.provcodpostal,
    ProveedoresLoc : req.body.provlocalidad,
    ProveedoresPcia : req.body.provprovincia,
    ProveedoresTel : req.body.provtelefono,
    ProveedoresContacto : req.body.provcontacto,
    ProveedoresMail : req.body.provmail,
    ProveedoresWeb : req.body.provpagweb,
    ProveedoresCodMon : req.body.provcodmon
  }
    console.log(registro);
    var saludo = '';



        conexion.query('INSERT INTO Proveedores SET ?', registro, 
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