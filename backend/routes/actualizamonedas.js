var express = require('express');
var router = express.Router();
var path = require('path');
var conexion = require('./conexion');
var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded());

conexion.connect(function(err) {
    if (!err) {
        console.log("base de datos conectada");
    } else {
        console.log("no se conecto");
    }
});



var router = express();
// var formulario = '<form method="post" action="/actualizamonedas">' +
//     '<label for="codigo">Código  </label>' +
//     '<input type="text" name="idtipomonedas" id="idtipomonedas"/><BR>' +
//     '<label for="descripcion">Descripción  </label>' +
//     '<input type="text" name="tipomonedadesc" id="tipomonedadesc"/><BR>' +
//     '<input type="submit" value="Enviar"/>' +
//     '</form>';

//     var cabecera = '<h1> Muesta Datos de artículos </h1>';
// router.get('/?:id', function(req, res, next) {
//     indice = req.params.id;
// //    conexion.query('Select * from TipoMonedas order by idTipoMonedas ' ,
//    conexion.query('Select idTipoMonedas, TipoMonedasDescripcion from TipoMonedas where idTipoMonedas = "' + indice + '"' ,
//         function(err, result) {
//             if (err) {
//                 console.log(err);
//             } else {
//        /*          tipomonedadesc = JSON.stringify(result.rows);
//                 var tipomon = JSON.parse(tipomonedadesc);
//                 idtipomonedas = tipomon[0].idtipomonedas;
//                 tipomonedadesc = tipomon[0].tipomonedadesc;
//                 res.send('<html><body>' +
//                 cabecera +
//                     formulario +
//                     '</html></body>'); */
//                  res.json(result);
                

//             }
//         });
//     });
console.log('estamos aca');

router.post('/?id', function(req, res, next) {
 
  var  indice = req.params.id;
    console.log(indice);
  //  var registro = {
      // var TipoMonDes = req.body.tipomonedadesc;
        //,precio: req.body.precio}
        var TipoMonDes = tipomonedadesc;
 //   conexion.query('Select * from TipoMonedas where idTipoMonedas = "' + indice ,
  //UPDATE `BasesGenerales`.`TipoMonedas` SET `TipoMonedasDescripcion`='ujuju' WHERE `idTipoMonedas`='ddd';

   conexion.query('UPDATE TipoMonedas SET TipoMonedasDescripcion = ' + "lindos" + ' WHERE idTipoMonedas= "' + indice + '"', 
         function(err, result) {
            if (err) {
                console.log(err);
            } else {
                res.json(result);
       
                };
              
    

            });
        });


module.exports = router;