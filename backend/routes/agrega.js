var express = require('express');
var router = express.Router();
var pg = require('pg');
var path = require('path');
var moment = require('moment');

moment.locale('es');

//router = express();




var conString = "postgres://sandra:123456@localhost/stocks";
var articulo = new pg.Client(conString);
articulo.connect();

var formulario = '<form method="post" action="/agrega">' +
    '<label for="nombre">Nombre del artículo  </label>' +
    '<input type="text" name="nombre" id="nombre"/><BR>' +
    '<label for="descripcion">Descripcion del artículo  </label>' +
    '<input type="text" name="descripcion" id="descripcion"/><BR>' +
    '<label for="fecha"> Fecha de ingreso  </label>' +
    '<input type="date" name="fecha" id="fecha"/><BR>' +
    '<label for="Importe"> Importe  </label>' +
    '<input type="number" step="any" name="importe" id="importe"/><BR>' +
    '<input type="submit" value="Enviar"/>' +
    '</form>';

var cabecera = '<h1>Ingresa Datos de art</h1>';

router.get('/', function(req, res, next) {
    res.send('<html><body>' +
        cabecera +
        formulario +
        '</html></body>'
    );

});

router.post('/', function(req, res) {
    var nombre = req.body.nombre || '';
    var descripcion = req.body.descripcion || '';
    var fecha = req.body.fecha || '';
    var importe = req.body.importe || '';
    var saludo = '';


    /*  if (nombre != '')
        saludo = "El artículo " + nombre + "  es un  " + descripcion;

    res.send('<html><body>' +
        cabecera +
        '<p>' + saludo + '</p>' +
        formulario +
        '</html></body>'
    );
 */

    articulo.query('INSERT INTO articulos (nombre, descripcion, fecha, importe) VALUES ( $1, $2, $3, $4)', [nombre, descripcion, fecha, importe],

        function(err, result) {
            if (err) {
                console.log('erorororo  ');
                console.log(err);
            } else {
                res.json(result.rows);
                console.log(result.rows[0]);
            }
        });

});



module.exports = router;