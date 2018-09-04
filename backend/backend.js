var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var leerproveedor = require('./routes/leerproveedor');
var agregarproveedor = require('./routes/agregarproveedor');
// var actualizaprov = require('./routes/actualizaprov');
var borrarproveedor = require('./routes/borrarproveedor');
var modificarproveedor = require('./routes/modificarproveedor');
var indextipoprov = require('./routes/indextipoprov');


var leermonedas = require('./routes/leermonedas');
var agregarmonedas = require('./routes/agregarmonedas');
var modificarmonedas = require('./routes/modificarmonedas');
var borrarmonedas = require('./routes/borrarmonedas');

var leertipoprov = require('./routes/leertipoprov');
var agregartipoprov = require('./routes/agregartipoprov');
var modificartipoprov = require('./routes/modificartipoprov');
var borrartipoprov = require('./routes/borrartipoprov');

var leerrubromerc = require('./routes/leerrubromerc');
var agregarrubromerc = require('./routes/agregarrubromerc');
var modificarrubromerc = require('./routes/modificarrubromerc');
var borrarrubromerc = require('./routes/borrarrubromerc');

var leerstkgrupo = require('./routes/leerstkgrupo');
var agregarstkgrupo = require('./routes/agregarstkgrupo');
var modificarstkgrupo = require('./routes/modificarstkgrupo');
var borrarstkgrupo = require('./routes/borrarstkgrupo');

var leerstkrubro = require('./routes/leerstkrubro');
var agregarstkrubro = require('./routes/agregarstkrubro');
var modificarstkrubro = require('./routes/modificarstkrubro');
var borrarstkrubro = require('./routes/borrarstkrubro');

// function agregada por el error CROS
function perimitirCrossDomain(req, res, next) {
    //en vez de * se puede definir SÓLO los orígenes que permitimos
    res.header('Access-Control-Allow-Origin', '*'); 
    //metodos http permitidos para CORS
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE'); 
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  }


var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(perimitirCrossDomain);



app.use('/', leerproveedor);

// app.use('/leerproveedor', leerproveedor);
// app.use('/agregarproveedor', agregarproveedor);
// app.use('/modificarproveedor', modificarproveedor);
// app.use('/borrarproveedor', borrarproveedor);




 app.use('/leermonedas', leermonedas);
app.use('/agregarmonedas', agregarmonedas);
app.use('/modificarmonedas', modificarmonedas);
app.use('/borrarmonedas', borrarmonedas);




app.use('/leertipoprov', leertipoprov);
app.use('/agregartipoprov', agregartipoprov);
app.use('/modificartipoprov', modificartipoprov);
app.use('/borrartipoprov', borrartipoprov);


app.use('/leerrubromerc', leerrubromerc);
app.use('/agregarrubromerc', agregarrubromerc);
app.use('/modificarrubromerc', modificarrubromerc);
app.use('/borrarrubromerc', borrarrubromerc);

app.use('/leerstkgrupo', leerstkgrupo);
app.use('/agregarstkgrupo', agregarstkgrupo);
app.use('/modificarstkgrupo', modificarstkgrupo);
app.use('/borrarstkgrupo', borrarstkgrupo);

app.use('/leerstkrubro', leerstkrubro);
app.use('/agregarstkrubro', agregarstkrubro);
app.use('/modificarstkrubro', modificarstkrubro);
app.use('/borrarstkrubro', borrarstkrubro);

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');

   
});
  
module.exports = app;