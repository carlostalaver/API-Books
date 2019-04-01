const express = require('express');
const app =  express();
const  morgan = require('morgan');
const bookModel = require('./models/bookModels')
const {mongoose} = require('./database')

//#region CONFIGURACION
  app.set('port', process.env.PORT || 4000);
//#endregion

//#region MIDDLEWARE
	app.use(morgan('dev'))
  app.use(express.json())
  app.use('/book/:id', (req, res, next) => {
    const {id} = req.params;
    console.log('middleware en el index')
    
     bookModel.findById(id, (err, book) => {
        if (err) {
            return res.send(err)
        }
         if (book){
             req.book = book;
             return next();
         }
         return res.sendStatus(404);
    })    
 });
//#endregion

//#region ROUTES
  app.use('/api/book',require('./routes/books.routes'))  
//#endregion

app.listen(app.get('port'), () => {
    console.log(`Servidor corriendo por el puerto ${app.get('port')}`);
})