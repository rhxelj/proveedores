var express = require('express');
var router = express.Router();
var path = require('path');
var conexion = require('./conexion');
var mysql = require('mysql');

var router = express();
conexion.connect(function(err) {
    if (!err) {
        console.log("base de datos conectada en borrarproveedor");
    } else {
        console.log("no se conecto en borrarproveedor");
    }
});

var formulario = '<form method="post" action="/borraprov">' +
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

    var cabecera = '<h1>Borra Datos de proveedores</h1>';


router.get('/?:id', function(req, res, next) {
    indice = req.params.id;
    conexion.query('Select * from Proveedores where idProveedores = ' + indice, 
            function(err, result) {
                    if (err) {
                        console.log(err);
                    } else {
                        res.json.toString(result);
                   //   res.send(result);
                       console.log(result[0].ProveedoresDesc);
                           var formulario = '<form method="post" action="/borraprov">' + 
                            '<label for="provdesc"> Descripción  </label>' +
                             '<input type="text" name="provdesc" id="provdesc" value = ' + result[0].ProveedoresDesc + '><BR>' +
                             '<label for="provtipo"> Tipo  </label>' +
                            '<input type="number"  name="provtipo" id="provtipo" value = ' + result[0].ProveedoresTipo + '><BR>' +
                           '<label for="cuit"> C.U.I.T. </label>' +
                            '<input type="text" name="provcuit" id="provcuit" value = ' + result[0].ProveedoresCUIT + '><BR>' +
                            '<label for="provcalle"> Calle  </label>' +
                            '<input type="text" name="provcalle" id="provcalle" value = ' + result[0].ProveedoresCalle + '><BR>' +
                            '<label for="provnrocalle"> Nro  </label>' +
                            '<input type="number" name="provnrocalle" id="provnrocalle" value = ' + result[0].ProveedoresNroCalle + '><BR>' +
                            '<label for="provpiso"> Piso  </label>' +
                            '<input type="text" name="provpiso" id="provpiso" value = ' + result[0].ProveedoresPiso + '><BR>' +
                            '<label for="provdto"> Dto  </label>' +
                            '<input type="text" name="provdto" id="provdto" value = ' + result[0].ProveedoresDto + '><BR>' +
                            '<label for="provcodpostal"> Código Postal  </label>' +
                            '<input type="text" name="provcodpostal" id="provcodpostal" value = ' + result[0].ProveedoresCodPos + '><BR>' +
                            '<label for="provlocalidad"> Localidad  </label>' +
                            '<input type="text" name="provlocalidad" id="provlocalidad" value = ' + result[0].ProveedoresLocalidad + '><BR>' +
                            '<label for="provprovincia"> Provincia  </label>' +
                            '<input type="text" name="provprovincia" id="provprovincia" value = ' + result[0].ProveedoresPcia + '><BR>' +
                            '<label for="provtelefono"> Teléfono  </label>' +
                            '<input type="text" name="provtelefono" id="provtelefono" value = ' + result[0].ProveedoresTel + '><BR>' +
                            '<label for="provcontacto"> Contacto </label>' +
                            '<input type="text" name="provcontacto" id="provcontacto" value = ' + result[0].ProveedoresContacto + '><BR>' +
                            '<label for="provmail"> mail  </label>' +
                            '<input type="text" name="provmail" id="provmail" value = ' + result[0].ProveedoresMail + '><BR>' +
                            '<label for="provpagweb"> Página Web  </label>' +
                            '<input type="text" name="provpagweb" id="provpagweb" value = ' + result[0].ProveedoresWeb + '><BR>' +
                            '<label for="provcodmon"> Moneda  </label>' +
                             '<input type="text" name="provcodmon" id="provcodmon" value = ' + result[0].ProveedoresCodMon + '><BR>' +
                             '<input type="submit" value="Borrar"/> ' +
                             '</form>'
                    
                    }
    res.send('<html><body>' +
        cabecera +
        formulario +
        '</html></body>'
    );

});
});

router.post('/', function(req, res) {

  conexion.query('delete from Proveedores where idProveedores = ' + indice, 
                                         function(err, result) {
                                            if (err) {
                                                console.log(err);
                                            } else {
                                                res.json(result.rows);
                                            }
                                        }); 
                                    });   

module.exports = router;
