var express = require('express');
var router = express.Router();
var path = require('path');
var moment = require('moment');
var conexion = require('./conexion');


moment.locale('es');

//router = express();
conexion.connect(function(err) {
    if (!err) {
        console.log("base de datos conectada en stkrubro");
    } else {
        console.log("no se conecto");
    }
});



router.post('/', function(req, res) {

  var registro = {
  //  idStkGrupo : req.body.idStkGrupo,
   
    idStkRubro : req.body.idStkRubro,
    StkRubroCodGrp : req.body.StkRubroCodGrp,
    StkRubroDesc : req.body.StkRubroDesc,
    StkRubroAbr : req.body.StkRubroAbr,
    StkRubroProv : req.body.StkRubroProv,
    StkRubroAncho : req.body.StkRubroAncho,
    StkRubroPres : req.body.StkRubroPres,
    StkRubroUM : req.body.StkRubroUM,
    StkRubroCosto : req.body.StkRubroCosto,
    StkRubroTM : req.body.StkRubroTM
   
  }
  console.log(registro);

        conexion.query('INSERT INTO StkRubro SET ?', registro, 
        function(err, result) {
            if (err) {
                console.log('ERROR ');
                console.log(err);
            } else {
                res.json(result.rows);
            
            }
        });
});




module.exports = router;