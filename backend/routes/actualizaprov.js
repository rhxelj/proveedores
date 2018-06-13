var express = require('express');
var router = express.Router();
var path = require('path');
var conexion = require('./conexion');
//var mysql = require('mysql');

console.log('esta 1');
//var router = express();
conexion.connect(function(err) {
    if (!err) {
        console.log("base de datos conectada");
    } else {
        console.log("no se conecto");
    }
});
var router = express();

console.log('jdjdjdjd');
router.get('/?:id', function(req, res, next) {
    indice = req.params.id;
    conexion.query('Select * from Proveedores where idProveedores = ' + indice,
    function(err, result) {
        if (err) {
            console.log(err);
        } else {
            //   res.json(result.rows);
            var nombreres = JSON.stringify(result.rows);
            var nombrepar = JSON.parse(nombreres);
            console.log(nombrepar[0]);
}})});

router.post('/', function(req, res) {
    //indice = req.params.id;
    console.log('indice  ', indice);
    var provdesc = req.query.provdesc || '';
  
    var provtipo =  req.query.provtipo || '';
    
    var provcuit = req.query.provcuit || '';
    
    var provcalle = req.query.provcalle || '';
  
    var provnrocalle = req.query.provnrocalle || '';
 
    var provpiso = req.query.provpiso || '';
   
    var provdto = req.query.provdto || '';

    var provcodpostal = req.query.provcodpostal || '';

    var provlocalidad = req.query.provlocalidad || '';
 
    var provprovincia = req.query.provprovincia || '';

    var provtelefono = req.query.provtelefono || '';

    var provcontacto = req.query.provcontacto || '';

    var provmail = req.query.provmail || '';

    var provpagweb = req.query.provpagweb || '';

    var provcodmon = req.query.provcodmon || '';
    
  conexion.query('update Proveedores set ProveedoresDesc = "' + provdesc + 
                                        '" , ProveedoresTipo = ' + provtipo + 
                                        ' ,  ProveedoresCUIT = "' + provcuit + 
                                        '" , ProveedoresCalle = "' + provcalle + 
                                        '" , ProveedoresNroCalle = ' + provnrocalle + 
                                         ' , ProveedoresPiso = "' + provpiso +
                                        '" , ProveedoresDto = "' + provdto +
                                        '" , ProveedoresCodPos = "' + provcodpostal +
                                        '" , ProveedoresLoc = "' + provlocalidad +
                                        '" , ProveedoresPcia = "' + provprovincia +
                                        '" , ProveedoresTel = "' + provtelefono +
                                        '" , ProveedoresContacto = "' + provcontacto +
                                        '" , ProveedoresMail = "' + provmail +
                                        '" , ProveedoresWeb = "' + provpagweb +
                                       '" , ProveedoresCodMon = "' + provcodmon + 
                                        ' , ProveedoresCodMon = "' + provcodmon + 
                                         '" where idProveedores = ' + indice, 
                                         function(err, result) {
                                            if (err) {
                                                console.log(err);
                                            } else {
                                                res.json(result.rows);
                                            }
                                        }); 
                                       
                                    });   

module.exports = router;
