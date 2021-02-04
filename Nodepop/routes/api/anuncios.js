'use strict';

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const Anuncio = require('../../models/Anuncio');



/* GET API products listing. */
router.get('/', async function (req, res, next) {
	try {
		const resultado = await Anuncio.find();
		res.json(resultado)
	} catch (err) {
		next(err)
	}
});


/* POST /api/anuncios  (body) 
Ads products (ads) */
router.post('/', async (req, res, next) => {
	try {
		const AnuncioData = req.body;
		const anuncio = new Anuncio(AnuncioData)
		const productCreated = await anuncio.save();
		res.status(201).json({ result: productCreated });
	} catch (error) {
		next(error)
	}
})

/* GET /api/anuncios:id */
//Obtener un anuncio

router.get('/:id', async (req, res, next) => {
	try {
		const _id = req.params.id;
		const anuncio = await Anuncio.findOne({ _id: _id });
		if (!anuncio) {
			return res.status(404).json({ error: 'No found' });
		}
		res.json({ result: anuncio })
	} catch (error) {
		next(error)
	}
})

/* GET /api/anuncios filtros*/
router.get('/', async function (req, res, next) {
	try {
		const nombre = req.query.nombre;
		const filtro = {}
		if (nombre) {
			filtro.nombre = nombre
		}
		const resultado = await Anuncio.lista(filtro);
		console.log(resultado)
		res.json(resultado)
	} catch (err) {
		next(err)
	}
});



module.exports = router;