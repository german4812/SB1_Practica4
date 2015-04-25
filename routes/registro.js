var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('registro', { title: 'Express' });
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
	var nombre = req.body.name;
	var correo = req.body.email;
	var pass = req.body.password;
	connection.connect();
	//usuario, nombre, rol, correo, pass, telefono
	var query = 'INSERT INTO USUARIO VALUES (\''+nombre + '\', \'usr\', \''+ correo + '\', \'' + pass + '\', 12345) ;'; 
	connection.query(query, function(err, rows, fields){
		if (!err){
			connection.end();
			console.log('Exitooooo!!!');
		}else{
			connection.end();
			console.log('FAIL!!! x_x');
		}
	});

  res.render('registro', { title: 'Express' });
});

module.exports = router;
