'use strict';

const mongoose = require('mongoose');

// Conectar con la Base de Datos
mongoose.connection.on('error', err => {
	console.log('Error de conexión', err);
	process.exit(1);
});

mongoose.connect('mongodb://localhost/nodepop', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

//Conecta correctamente Base Datos
console.log('Conectado a MongoDB en', mongoose.connection.name)


module.exports = mongoose.connection;

