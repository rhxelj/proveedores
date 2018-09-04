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
var formulario = '<form method="post" action="/agregaprov">' +
    '<label for="provdesc"> Descripción  </label>' +
    '<input type="text" name="provdesc" id="provdesc"/><BR>' +
    '<label for="provtipo"> Tipo  </label>' +
    '<input type="number" step="any" name="provtipo" id="provtipo"/><BR>' +
    '<label for="cuit"> C.U.I.T. </label>' +
    '<input type="text" name="provcuit" id="provcuit"/><BR>' +
    '<label for="provcalle"> Calle  </label>' +
    '<input type="text" name="provcalle" id="provcalle"/><BR>' +
    '<label for="provnrocalle"> Nro  </label>' +
    '<input type="number" step="any" name="provnrocalle" id="provnrocalle"/><BR>' +
    '<label for="provpiso"> Piso  </label>' +
    '<input type="text" name="provpiso" id="provpiso"/><BR>' +
    '<label for="provdto"> Dto  </label>' +
    '<input type="text" name="provdto" id="provdto"/><BR>' +
    '<label for="provcodpostal"> Código Postal  </label>' +
    '<input type="text" name="provcodpostal" id="provcodpostal"/><BR>' +
    '<label for="provlocalidad"> Localidad  </label>' +
    '<input type="text" name="provlocalidad" id="provlocalidad"/><BR>' +
    '<label for="provprovincia"> Provincia  </label>' +
    '<input type="text" name="provprovincia" id="provprovincia"/><BR>' +
    '<label for="provtelefono"> Teléfono  </label>' +
    '<input type="text" name="provtelefono" id="provtelefono"/><BR>' +
    '<label for="provcontacto"> Contacto </label>' +
    '<input type="text" name="provcontacto" id="provcontacto"/><BR>' +
    '<label for="provmail"> mail  </label>' +
    '<input type="text" name="provmail" id="provmail"/><BR>' +
    '<label for="provpagweb"> Página Web  </label>' +
    '<input type="text" name="provpagweb" id="provpagweb"/><BR>' +
    '<label for="provcodmon"> Moneda  </label>' +
    '<input type="text" name="provcodmon" id="provcodmon"/><BR>' +
    '<input type="submit" value="Enviar"/>' +
    '</form>';

var cabecera = '<h1>Ingresa Datos de proveedores</h1>';

router.get('/', function(req, res, next) {
    res.send('<html><body>' +
        cabecera +
        formulario +
        '</html></body>'
    );

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