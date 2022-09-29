const express = require('express');
const router = express.Router();
const bookControllers = require('../controllers/bookControllers');
const auth = require('../middleware/auth');

router.get('/', bookControllers.getAllBooks);
router.post('/', auth, bookControllers.addBook);
router.put('/:id', auth, bookControllers.modifyBook);
router.get('/:id', bookControllers.getOneBook);
router.delete('/:id', auth, bookControllers.deleteBook);

module.exports = router;
