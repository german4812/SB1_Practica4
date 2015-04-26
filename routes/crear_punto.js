var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('crear_punto', { title: 'Express' });
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
	var latitud = req.body.latitud;
	var longitud = req.body.longitud;
	var nombre = req.body.nombre;
	var precio = req.body.precio;
	connection.connect();
	//usuario, nombre, rol, correo, pass, telefono
	var query = 'INSERT INTO PUNTO(latitud, longitud, nombre, precio) VALUES(' + latitud+ ', '+ longitud+ ', \''+nombre + '\', '+precio+ ');'
	connection.query(query, function(err, rows, fields){
		if (!err){
			connection.end();
			console.log('Exitooooo!!!');
			res.render('crear_punto', { title: 'Express', mensaje: 'Se ingreso el punto exitosamente'});
		}else{
			connection.end();
			console.log('FAIL!!! x_x');
			console.log(query);
			res.render('crear_punto', { title: 'Express', mensaje: 'No se pudo ingresar el punto deseado'});
		}
	});
});

module.exports = router;

