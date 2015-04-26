var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {/*
	var strbus = '';
	var strpts = '';
	var mysql2 = require('mysql');
	var connection2 = mysql2.createConnection({
		host 	: 'localhost',
		user 	: 'root',
		password: 'tony201213189',
		database: 'velocity'
	});
	var query = 'SELECT * FROM BUS;';
	connection2.query(query, function(err, rows, fields){
		if (!err){
			connection.end();
			for(var i; )
		}
	});
	var mysql3 = require('mysql');
	query = 'SELECT * FROM RUTA;'
	var connection3 = mysql3.createConnection({
		host 	: 'localhost',
		user 	: 'root',
		password: 'tony201213189',
		database: 'velocity'
	});
	connection3.query(query, function(err, rows, fields){
		if (!err){
			
		}
	});*/
  res.render('rutaxbus', { title: 'Express' });
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
	var bus = req.body.bus;
	var ruta = req.body.ruta;
	connection.connect();
	//usuario, nombre, rol, correo, pass, telefono
	var query = 'UPDATE BUS SET ruta='+ ruta+' WHERE bus= '+bus+';'; 
	var msj = '';
	connection.query(query, function(err, rows, fields){
		if (!err){
			connection.end();
			console.log('Exitooooo!!!');
			mensaje = 'Bus Editado';
		}else{
			connection.end();
			console.log('FAIL!!! x_x');
			mensaje = 'No se encontro el bus';
		}
	});

  res.render('rutaxbus', { title: 'Express', mensaje: msj});
});

module.exports = router;
