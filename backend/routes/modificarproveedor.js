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

/* 

router.get('/?:id', function(req, res, next) {
    console.log('no anda');
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
 */
router.post('/?:id', function(req, res) {
    //indice = req.params.id;
    indice = req.params.id;
    console.log('provee id  ', indice);
   
    var provdesc = req.body.ProveedoresDesc;
  console.log('provee  ', provdesc);
  console.log('provee  ', req.query.ProveedoresDesc);
    var provtipo =  req.body.ProveedoresTipo;
    
    var provcuit = req.body.ProveedoresCUIT;
    
    var provcalle = req.body.ProveedoresCalle;
  
    var provnrocalle = req.body.ProveedoresNroCalle;
 
    var provpiso = req.body. ProveedoresPiso;
   
    var provdto = req.body.ProveedoresDto;

    var provcodpostal = req.body.ProveedoresCodPos;

    var provlocalidad = req.body.ProveedoresLoc;
 
    var provprovincia = req.body.ProveedoresPcia;

    var provtelefono = req.body.ProveedoresTel;

    var provcontacto = req.body.ProveedoresContacto;

    var provmail = req.body.ProveedoresMail;

    var provpagweb = req.body.ProveedoresWeb;

    var provcodmon = "DLS";
    // req.body.ProveedoresCodMon;
    
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
