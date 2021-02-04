var express = require('express');
var router = express.Router();
const { query, param, validationResult } = require('express-validator');


const mongoose = require('mongoose');
const Anuncio = require('../models/Anuncio');


/* GET home page listing  */
router.get('/', async function (req, res, next) {

  const anuncios = await Anuncio.find((error, result) => {
    if (error) {
      next(error);
      return;
    }
    res.render('index', { anuncios: result });
  });
});


module.exports = router;
