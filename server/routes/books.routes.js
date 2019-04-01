const express = require('express');
const router = express.Router();
const bookControllers = require('../controllers/books.controller');

router.get('/', bookControllers.getBooks);
router.get('/:id', bookControllers.getBook);
router.post('/', bookControllers.createBook);
router.put('/:id', bookControllers.editBookPut);
router.delete('/:id', bookControllers.deleteBook);
router.patch('/:id', bookControllers.editBookPatch);

module.exports = router;