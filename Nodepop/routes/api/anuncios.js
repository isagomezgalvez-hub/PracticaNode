'use strict';

var express = require('express');
var router = express.Router();
const Anuncio = require('../../models/Anuncio');


/* GET users listing. */
router.get('/', async function (req, res, next) {
	try {
		const resultado = await Anuncio.find();
		res.json(resultado)
	} catch (err) {
		next(err)
	}
});


module.exports = router;