var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('crear_ruta', { title: 'Express' });
});

router.post('/', function(req, res, next) {
	console.log('Iniciando Registro...');
	//INICIO DE REGISTRO DE USUARIO A LA BASE DE DATOS
	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host 	: 'localhost',
		user 	: 'root',
		password: 'tony201213189',
		database: 'velocity'
	});

	//CARGA DE VARIABLES
	var nombre = req.body.nombre;
	connection.connect();
	//usuario, nombre, rol, correo, pass, telefono
	var query = 'INSERT INTO RUTA(nombre) VALUES(\''+nombre+ '\');'
	var msj = '';
	connection.query(query, function(err, rows, fields){
		if (!err){
			connection.end();
			console.log('Exitooooo!!!');
			res.render('crear_ruta', { title: 'Express', mensaje: 'Ruta creada exitosamente' });
		}else{
			connection.end();
			console.log('FAIL!!! x_x');
			console.log(query);
			res.render('crear_ruta', { title: 'Express', mensaje: 'No se pudo crear la ruta' });
		}
	});
});

module.exports = router;

