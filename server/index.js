const express = require('express');
const app =  express();
const  morgan = require('morgan');
const {mongoose} = require('./database')

//#region CONFIGURACION
  app.set('port', process.env.PORT || 4000);
//#endregion

//#region MIDDLEWARE
	app.use(morgan('dev'))
	app.use(express.json())
//#endregion

//#region ROUTES
  app.use('/api/book',require('./routes/books.routes'))
  
//#endregion

app.listen(app.get('port'), () => {
    console.log(`Servidor corriendo por el puerto ${app.get('port')}`);
})