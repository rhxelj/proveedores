var express = require('express');
var router = express.Router();
var path = require('path');
var moment = require('moment');
var conexion = require('./conexion');

console.log('esta en agregamonedas I');
moment.locale('es');

//router = express();
conexion.connect(function(err) {
    if (!err) {
        console.log("base de datos conectada en monedas");
    } else {
        console.log("no se conecto");
    }
});
/* var formulario = '<form method="post" action="/agregamonedas">' +
    '<label for="idtipomonedas"> Tipo Moneda  </label>' +
    '<input type="text" name="idtipomonedas" id="idtipomonedas"/><BR>' +
    '<label for="tipomonedasdescripcion"> Descripción  </label>' +
    '<input type="text" name="tipomonedasdescripcion" id="tipomonedasdescripcion"/><BR>' +
    '<label for="tipomonedascotizacion"> Cotización  </label>' +
  //  '<input type="number" step="any" name="tipomonedascotizacion" id="tipomonedascotizacion"/><BR>' +
    '<input type="" name="tipomonedascotizacion" id="tipomonedascotizacion"/><BR>' +
    '<input type="submit" value="Enviar"/>' +
    '</form>';

var cabecera = '<h1>Ingresa Tipos de Monedas </h1>';

router.get('/', function(req, res, next) {
    res.send('<html><body>' +
        cabecera +
        formulario +
        '</html></body>'
    );

});
 */
console.log('esta en agregamonedas');

router.post('/', function(req, res) {

  var registro = {
    idTipoMonedas : req.body.idtipomonedas,
    TipoMonedasDescripcion : req.body.tipomonedasdescripcion,
    TipoMonedasCotizacion : req.body.tipomonedascotizacion

  }
    console.log(registro);
    var saludo = '';



        conexion.query('INSERT INTO TipoMonedas SET ?', registro, 
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