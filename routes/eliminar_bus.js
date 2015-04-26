var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('eliminar_bus', { title: 'Express' });
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
	var placa = req.body.placa;
	connection.connect();
	//usuario, nombre, rol, correo, pass, telefono
	var query = 'DELETE FROM BUS WHERE bus='+placa + ';'; 
	var msj = '';
	connection.query(query, function(err, rows, fields){
		if (!err){
			connection.end();
			console.log('Exitooooo!!!');
			res.render('eliminar_bus', { title: 'Express', mensaje: 'Bus eliminado correctamente' });
		}else{
			connection.end();
			console.log('FAIL!!! x_x');
			res.render('eliminar_bus', { title: 'Express', mensaje: 'No se encontro ningun bus'});
		}
	});

  
});

module.exports = router;
