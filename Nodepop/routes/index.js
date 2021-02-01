var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  const segundoActual = (new Date().getSeconds());
  res.locals.anuncios = [
    { name: 'Smith' },
    { name: 'Pedro' },
    { name: 'Juan' }
  ]
  res.render('index');

});


module.exports = router;
