
//1. Cargar módulo connectMongoose y modelos
const mongoose = require('mongoose');
const Anuncio = require('../models/Anuncio');

const { nextTick } = require('process');
const { read, readFile, readFileSync } = require('fs');


//2. Iniciar el proceso con conn.once('open', () => {
mongoose.connection.once('open', async (req, res, next) => {
	try {

		// Limpia los datos de la Base de datos
		mongoose.connection.dropDatabase();

		//Lee los datos de anuncios.json
		const newData = readFileSync('files/anuncios.json');
		const anuncio = JSON.parse(newData);


		//Inserta los datos en la Base de datos
		await Anuncio.insertMany(anuncio.anuncios);

	} catch (error) {
		next(error);
	}
});

