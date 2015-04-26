var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
	console.log('Iniciando Login...');
	//INICIO DE REGISTRO DE USUARIO A LA BASE DE DATOS
	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host 	: 'localhost',
		user 	: 'root',
		password: 'tony201213189',
		database: 'velocity'
	});
	console.log('Cargando Variables...');
	//CARGA DE VARIABLES
	var correo = req.body.usr;
	var pass = req.body.pass;
	connection.connect();
	//usuario, nombre, rol, correo, pass, telefono
	var query = 'SELECT correo, rol FROM USUARIO WHERE correo =\''+correo + '\' AND pass = \''+ pass + '\';'; 
	connection.query(query, function(err, rows, fields){
	console.log('Analizando Respuesta...');
	if (!err){
		if (rows.length == 1){
			console.log('Flag 1...');
			if (rows[0].rol == 'admin'){
				console.log('Cargando sesion Admin...');
				res.render('sesion_admin', {title: 'Express'});
			}else{
				console.log('Cargando sesion Cliente...');
				res.render('sesion_cliente', {title: 'Express'});
			}
		}else{
			res.render('index', { title: 'Express' });
		}
		connection.end();
	}else{
		connection.end();
		console.log('Error autenticando a '+ correo);
		res.render('index', { title: 'Express' });
	}
	});
});

module.exports = router;
