const express = require('express');
const router = express.Router();
const bookControllers = require('../controllers/books.controller');

router.get('/', bookControllers.getBooks);



module.exports = router;