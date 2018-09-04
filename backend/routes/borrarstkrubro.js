var express = require('express');
var router = express.Router();
var path = require('path');
var conexion = require('./conexion');
var mysql = require('mysql');

var router = express();
conexion.connect(function(err) {
    if (!err) {
        console.log("base de datos conectada sktrubro");
    } else {
        console.log("no se conecto sktrubro");
    }
});


router.delete('/?:rubro/?:grupo', function(req, res, next) {
    idrubro = req.params.rubro;
    idgrupo = req.params.grupo;

  conexion.query('delete from StkRubro where idStkRubro = ' + idrubro + ' StkRubroCodGrp = ' + idgrupo, 
                                         function(err, result) {
                                            if (err) {
                                                console.log(err);
                                            } else {
                                                res.json(result.rows);
                                            }
                                        }); 
                                    });   

module.exports = router;
