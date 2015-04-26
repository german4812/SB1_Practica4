var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('rutaxpunto', { title: 'Express' });
});

router.post('/', function(req, res, next) {
	console.log('Agregando Bus...');
	//INICIO DE REGISTRO DE USUARIO A LA BASE DE DATOS
	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host 	: 'localhost',
		user 	: 'root',
		password: 'tony201213189',
		database: 'velocity'
	});

	//CARGA DE VARIABLES
	var punto = req.body.placa;
	var ruta = req.body.modelo;
	var orden = req.body.orden;
	connection.connect();
	//usuario, nombre, rol, correo, pass, telefono
	var query = 'INSERT INTO PUNTOXRUTA(punto, ruta, orden) VALUES ('+punto + ', '+ ruta + ', ' + orden + ') ;'; 
	var msj = '';
	connection.query(query, function(err, rows, fields){
		if (!err){
			connection.end();
			console.log('Exitooooo!!!');
			mensaje = 'Bus Insertado';
		}else{
			connection.end();
			console.log('FAIL!!! x_x');
			mensaje = 'No se pudo insertar';
		}
	});

  res.render('rutaxpunto', { title: 'Express', mensaje: msj});
});

module.exports = router;
