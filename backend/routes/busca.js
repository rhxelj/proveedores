var express = require('express');
var router = express.Router();
var pg = require('pg');
var path = require('path');




var conString = "postgres://sandra:123456@localhost/stocks";
var articulo = new pg.Client(conString);
articulo.connect();


router.get('/?:id', function(req, res, next) {
    var indice = req.params.id;
    articulo.query('Select * from articulos where id = ' + indice,
        function(err, result) {
            if (err) {
                console.log(err);
            } else {
                res.json(result.rows);
                console.log(result.rows[0]);
            }
        });
});



/* router.get('/', function(req, res, next) {



    articulo.query('Select * from articulos',
        function(err, result) {
            if (err) {
                console.log(err);
            } else {
                res.json(result.rows);
                console.log(result.rows[0]);
            }
        });
});
 */

module.exports = router;