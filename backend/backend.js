var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var articulos = require('./routes/articulos');
var busca = require('./routes/busca');
var agrega = require('./routes/agrega');
var actualiza = require('./routes/actualiza');
var borra = require('./routes/borra');
var muestra = require('./routes/muestra');
var agregacol = require('./routes/agregacol');


var indexprov = require('./routes/indexprov');
var agregaprov = require('./routes/agregaprov');
var actualizaprov = require('./routes/actualizaprov');
var borraprov = require('./routes/borraprov');
var buscaprov = require('./routes/buscaprov');
var indextipoprov = require('./routes/indextipoprov');
var indexmonedas = require('./routes/indexmonedas');
var agregamonedas = require('./routes/agregamonedas');
var actualizamonedas = require('./routes/actualizamonedas');
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

app.use('/', index);
app.use('/busca', busca);
app.use('/agrega', agrega);
app.use('/actualiza', actualiza);
app.use('/borra', borra);
app.use('/muestra', muestra);
app.use('/api/articulos', articulos);


app.use('/agregacol', agregacol);
// catch 404 and forward to error handler



app.use('/indexprov', indexprov);
app.use('/agregaprov', agregaprov);
app.use('/actualizaprov', actualizaprov);
app.use('/borraprov', borraprov);
app.use('/buscaprov', buscaprov);
app.use('/indextipoprov', indextipoprov);
app.use('/indexmonedas', indexmonedas);
app.use('/agregamonedas', agregamonedas);
app.use('/actualizamonedas', actualizamonedas);

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