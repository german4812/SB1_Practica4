var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('acercade', { title: 'Express' });
});

router.post('/', function(req, res, next) {
	var correo = req.body.usr;
	var pass = req.body.pass;
	console.log('Hola ' + correo + ' - ' + pass);
  res.render('acercade', { title: 'Express' });
});

module.exports = router;
