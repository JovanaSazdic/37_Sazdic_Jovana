var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Indeks telesne mase- BMI kalkulator' });

});

module.exports = router;
