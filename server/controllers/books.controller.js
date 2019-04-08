const bookModel = require("../models/bookModels");
const booksCtrl = {};

booksCtrl.getBooks = async (req, res) => {
  const books = await bookModel.find();
  res.json(books);
};

booksCtrl.getBook = async (req, res) => {
  const { id } = req.params;
  const emp = await bookModel.findById(id, (err, book) => {
    err
      ? console.error("No se encontraron el documento")
      : console.error("Consulta realizada", book);
  });
  res.json(emp);
};

booksCtrl.createBook = async (req, res) => {
  const new_book = new bookModel(req.body);
  const book_save = await new_book.save();
  res.status(201).json(book_save);
};

booksCtrl.editBookPut = async (req, res) => {
  const { id } = req.params;
  const book_edit = {
    read: req.body.read,
    title: req.body.title,
    genre: req.body.genre,
    author: req.body.author
  };
  const book_edited = await bookModel.findByIdAndUpdate(
    id,
    { $set: book_edit },
    { new: true }
  );
  res.json(book_edited);
};

booksCtrl.deleteBook = async (req, res) => {
  const bookDelete = await bookModel.findByIdAndDelete(req.params.id);
  res.json({ Eliminado: bookDelete });
};
booksCtrl.editBookPatch = async (req, res) => {
  const { id } = req.params;
  let book_edited = await bookModel.findById(id, (err, book) => {
    if (err) {
      console.error("No se encontraron el documento");
      res.status(404);
    }
  });

  Object.entries(req.body).forEach(item => {
    const key = item[0];
    const value = item[1];
    book_edited[key] = value;
  });
  res.json(await book_edited.save());
};

module.exports = booksCtrl;
