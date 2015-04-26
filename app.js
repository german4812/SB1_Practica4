var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


//DECLARACION DE RUTAS
var routes = require('./routes/index');
var users = require('./routes/users');
var registro = require('./routes/registro');
var acercade = require('./routes/acercade');
var sesion_admin = require('./routes/sesion_admin');
var sesion_cliente = require('./routes/sesion_cliente');
var agregar_bus = require('./routes/agregar_bus');
var eliminar_bus = require('./routes/eliminar_bus');
var editar_bus = require('./routes/editar_bus');
var crear_punto = require('./routes/crear_punto');
var crear_ruta = require('./routes/crear_ruta');
var rutaxpunto = require('./routes/rutaxpunto');
var rutaxbus = require('./routes/rutaxbus');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

//INSTANCIACION DE RUTAS
app.use('/', routes);
app.use('/users', users);
app.use('/registro', registro);
app.use('/acercade', acercade);
app.use('/sesion_admin', sesion_admin);
app.use('/sesion_cliente', sesion_cliente);
app.use('/agregar_bus', agregar_bus);
app.use('/eliminar_bus', eliminar_bus);
app.use('/editar_bus', editar_bus);
app.use('/crear_punto', crear_punto);
app.use('/crear_ruta', crear_ruta);
app.use('/rutaxpunto', rutaxpunto);
app.use('/rutaxbus', rutaxbus);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
