var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('editar_bus', { title: 'Express' });
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
	var modelo = req.body.modelo;
	var tipo = req.body.lista;
	connection.connect();
	//usuario, nombre, rol, correo, pass, telefono
	var query = 'UPDATE BUS SET modelo = '+modelo+', tipo_bus = '+ tipo +' WHERE bus = '+ placa + ';'
	var msj = '';
	connection.query(query, function(err, rows, fields){
		if (!err){
			connection.end();
			console.log('Exitooooo!!!');
			res.render('editar_bus', { title: 'Express', mensaje: 'Datos editados exitosamente' });
		}else{
			connection.end();
			console.log('FAIL!!! x_x');
			console.log(query);
			res.render('editar_bus', { title: 'Express', mensaje: 'No se encontro el bus' });
		}
	});

});

module.exports = router;

