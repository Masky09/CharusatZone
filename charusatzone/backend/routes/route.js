const express = require('express');
const { match } = require('assert');
const protect = require('../middleware/login');
const { signup, login } = require('../controllers/userController');
const { createBook, getAllBooks } = require('../controllers/bookController');
const { createNote, getAllNotes } = require('../controllers/noteController');

const router = express.Router();

// User Authentication Routes
router.route('/signup').post(signup);
router.route('/login').post(login);

// Book Routes
router.route('/books').post(createBook).get(getAllBooks);

// Note Routes
router.route('/notes').post(createNote).get(getAllNotes);

module.exports = router;
