var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('agregar_bus', { title: 'Express' });
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
	var placa = req.body.placa;
	var modelo = req.body.modelo;
	var tipo = req.body.lista;
	connection.connect();
	//usuario, nombre, rol, correo, pass, telefono
	var query = 'INSERT INTO BUS(bus, modelo, tipo_bus) VALUES ('+placa + ', \''+ modelo + '\', ' + tipo + ') ;'; 
	var msj = '';
	connection.query(query, function(err, rows, fields){
		if (!err){
			connection.end();
			console.log('Exitooooo!!!');
			res.render('agregar_bus', { title: 'Express', mensaje: 'Bus insertado'});
		}else{
			connection.end();
			console.log('FAIL!!! x_x');
			console.log(query);
			res.render('agregar_bus', { title: 'Express', mensaje: 'La placa ya ha sido registrada'});
		}
	});
});

module.exports = router;
