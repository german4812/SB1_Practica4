var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('sesion_admin', { title: 'Express' });
});

router.post('/', function(req, res, next) {
	console.log('Iniciando Registro...');

  res.render('sesion_admin', { title: 'Express' });
});

module.exports = router;
