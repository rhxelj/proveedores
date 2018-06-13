var express = require('express');
var body_parser = require('body-parser');
var router = express.Router();
var pg = require('pg');
var path = require('path');
var moment = require('moment');

var router = express();
router.use(body_parser.urlencoded({ extended: true }));




var conString = "postgres://sandra:123456@localhost/stocks";
var articulo = new pg.Client(conString);
articulo.connect();


var cabecera = '<h1> Muesta Datos de artículos </h1>';



router.get('/', function(req, res, next) {

    articulo.query('Select * from articulos',
        function(err, result) {
            if (err) {
                console.log(err);
            } else {
                //  res.json(result.rows);
                var nombreres = JSON.stringify(result.rows);
                var nombrepar = JSON.parse(nombreres);
                var fechabd = moment(nombrepar[0].fecha).format('YYYY-MM-DD');

                var formulario = '<form method="post" action="/borra">' +
                    '<label for="nombre">Código del artículo  </label>' +
                    '<input type="text" name="codigo" id="codigo" value=' + nombrepar[0].id + '><BR>' +

                    '<label for="nombre">Nombre del artículo  </label>' +
                    '<input type="text" name="nombre" id="nombre" value=' + nombrepar[0].nombre + '><BR>' +
                    '<label for="descripcion">Descripcion del artículo  </label>' +
                    '<input type="text" name="descripcion" id="descripcion" value = ' + nombrepar[0].descripcion + '><BR>' +
                    '<label for="fecha"> Fecha de ingreso  </label>' +
                    '<input type="date" name="fecha" id="fecha" value="' + fechabd + '"><BR>' +
                    '<label for="Importe"> Importe  </label>' +
                    '<input type="number" step="any" name="importe" id="importe" value = ' + nombrepar[0].importe + ' ><BR>' +
                    '<input type="submit" value="Borrar"/>' +
                    '</form>';
                res.send('<html><body>' +
                    cabecera +
                    formulario +
                    '</html></body>');

            }
        });
});






module.exports = router;