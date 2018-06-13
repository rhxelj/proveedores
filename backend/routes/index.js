var express = require('express');
var router = express.Router();
var pg = require('pg');
var path = require('path');


//router = express();




var conString = "postgres://sandra:123456@localhost/stocks";
var articulo = new pg.Client(conString);
articulo.connect();




router.get('/', function(req, res, next) {

    articulo.query('Select * from articulos',
        function(err, result) {
            if (err) {
                console.log(err);
            } else {
                res.json(result.rows);
            }
        });
});






module.exports = router;