const books = require('../models/books');

const createBook = async (req, res) => {
  try {
    const newBook = await books.create({
      booksemail: req.body.booksemail,
      booksprice: req.body.booksprice,
      booksdescription: req.body.booksdescription,
    });

    if (newBook) {
      res.json({ newBook });
    } else {
      throw new Error('Error posting book');
    }
  } catch (error) {
    console.log(error.message);
    res.json({ error: error.message });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const allBooks = await books.find({});
    res.json(allBooks);
  } catch (error) {
    console.log(error.message);
    res.json({ error: error.message });
  }
};

module.exports = { createBook, getAllBooks };
