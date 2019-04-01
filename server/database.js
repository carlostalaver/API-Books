const mongoose = require('mongoose');

const URI = 'mongodb://localhost/bookAPI';

mongoose.connect(URI)
    .then(db => console.log(`Conectado a la BBDD bookAPI `))
    .catch(err => console.log(`Ocurrio un ERROR al conectarse a la BBDD ${err}`));

module.exports = mongoose;