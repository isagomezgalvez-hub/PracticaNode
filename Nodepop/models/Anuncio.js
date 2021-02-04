'use strict'
const mongoose = require('mongoose');


// Define Schema for the model
const anuncioSchema = mongoose.Schema({
	nombre: { type: String, index: true },
	venta: Boolean,
	precio: { type: Number, index: true },
	foto: String,
	tags: { type: [String], index: true }
}, {
	collection: 'anuncios'
});


anuncioSchema.statics.lista = function (filtro) {
	const query = Anuncio.find(filtro);
	return query.exec();
}

//Create the model
const Anuncio = mongoose.model('Anuncio', anuncioSchema);

//Export model
module.exports = Anuncio;