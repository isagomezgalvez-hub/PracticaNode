'use strict'
const mongoose = require('mongoose');

//Definimos un Schema
const anuncioSchema = mongoose.Schema({
	nombre: String,
	venta: Boolean,
	precio: Number,
	foto: String,
	tags: [String]
});


//Creamos el modelo

const Anuncio = mongoose.model('Anuncio', anuncioSchema);

//Exportamos el modelo

module.exports = Anuncio;