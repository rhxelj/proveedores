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

var formulario = '<form method="post" action="/agregacol">' +
    '<label for="descripcion">Descripción del color  </label>' +
    '<input type="text" name="descripcion" id="descripcion"/><BR>' +
    '<label for="codart">Código de artículo  </label>' +
    '<input type="number" name="codart" id="codart"/><BR>' +
    '<input type="submit" value="Enviar"/>' +
    '<BR>' + '<BR>' + '<BR>' +
    '<input type="text" name="avisoerror" id="avisoerror">' +
    '</form>';

var cabecera = '<h1>Ingresa Datos de Color</h1>';

router.get('/', function(req, res, next) {
    res.send('<html><body>' +
        cabecera +
        formulario +
        '</html></body>'
    );

});

router.post('/', function(req, res) {
    var descripcion = req.body.descripcion || '';
    var codart = req.body.codart || '';
    var avisoerror = req.body.avisoerror || '';

    articulo.query('INSERT INTO colores (descripcion, codart) VALUES ( $1, $2)', [descripcion, codart],

        function(err, result) {
            if (err.code === '23503') {
                console.log('esta aca');
                avisoerror = 'error en el codigo de articulo';
                console.log(avisoerror);
                return res.status(400).send(err);
                // .render('avisoerror', { avisoerror: 'error en el artículo' });
                //  err.render('avisoerror',)
            } else
            if (err.code != '23503') {
                console.log('err.code   ' + err.code);
                console.log(err);
            } else {
                res.json(result.rows);
                console.log(result.rows[0]);
            }
        });

});



module.exports = router;