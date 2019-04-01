const bookModel = require('../models/bookModels')
const booksCtrl = {};

booksCtrl.getBooks = async ( req, res) => {
    console.log('la peticion es :> ', req);
    
   const books = await bookModel.find();
    res.json(books);

}

booksCtrl.createBook = async ( req, res) => {
    console.log(req.body);
    const new_book = new bookModel(req.body);
     const book_save = await new_book.save();
    res.json(book_save);    
}


booksCtrl.getEmployee =  async ( req, res) => {
    console.log(req.params);
    const emp =   await Employee.findById(req.param.id, (err, res) =>{
         err ? console.error('No se encontraron el documento') : console.error('Consulta realizada')
    })
    res.json(emp)
}

booksCtrl.editEmployee = async ( req, res) => {
    const {id} = req.params;
    const emplo_edit = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    } 

    const emp_ed = await Employee.findByIdAndUpdate(id, {$set:emplo_edit}, {new: true});
    res.json('actualizado');
}

booksCtrl.deleteEmployee = async ( req, res) => {
    await Employee.findByIdAndDelete(req.params.id);
    res.json('Eliminado')
}

module.exports = booksCtrl;