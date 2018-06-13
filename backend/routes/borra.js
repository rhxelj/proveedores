var express = require('express');
var router = express.Router();
var pg = require('pg');
var path = require('path');
var moment = require('moment');
var indice;



var conString = "postgres://sandra:123456@localhost/stocks";
var articulo = new pg.Client(conString);
articulo.connect();


//articulo.query('update items set nombre = ($1), descripcion= ($2) where id = ($3)', [nombre, descripcion, id]);





router.get('/?:id', function(req, res, next) {
    indice = req.params.id;
    articulo.query('Select * from articulos where id = ' + indice,
        function(err, result) {
            if (err) {
                console.log(err);
            } else {
                //   res.json(result.rows);
                var nombreres = JSON.stringify(result.rows);
                var nombrepar = JSON.parse(nombreres);
                var fechabd = moment(nombrepar[0].fecha).format('YYYY-MM-DD');

                console.log(nombrepar[0]);

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


                var cabecera = '<h1> Actualiza Datos de art</h1>';

                res.send('<html><body>' +
                    cabecera +
                    formulario +
                    '</html></body>'
                );

                //});
            }
        });
});

router.post('/', function(req, res) {

    /* var nombre = req.body.nombre || '';
    var descripcion = req.body.descripcion || '';
    var fecha = req.body.fecha || '';
    var importe = req.body.importe || '';
    var saludo = '';
 */
    // console.log('indice  ' + indice + '  nombre   ' + nombre + '  fecha  ' + fecha);
    articulo.query('Delete from articulos where id = ($1)', [indice],

        function(err, result) {
            if (err) {
                console.log(err);
            } else {
                res.json(result.rows);
            }
        });

});

module.exports = router;