
/* Script to clean and load data into the Database */

//Load connectMongoose module and models
const mongoose = require('mongoose');
const Anuncio = require('../models/Anuncio');


const { nextTick } = require('process');
const { read, readFile, readFileSync } = require('fs');


require('./connectMongoose');

//Iniciar el proceso
mongoose.connection.once('open', async (req, res, next) => {
	try {

		// Clear the data from the database
		mongoose.connection.dropDatabase();

		//Read ad data.json
		const newData = readFileSync('files/anuncios.json');
		const anuncio = JSON.parse(newData);


		//Inserts the data in the Database
		await Anuncio.insertMany(anuncio.anuncios);

	} catch (error) {
		next(error);
	}
});

