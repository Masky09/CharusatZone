const mongoose = require('mongoose');

const booksTemp = new mongoose.Schema({
  booksemail: {
    type: String,
    required: true,
  },
  booksprice: {
    type: String,
    required: true,
  },
  booksdescription: {
    type: String,
    required: true,
  },
  // booksImage:{
  //     type:Image,
  //     required: true
  // }
});

const books = mongoose.model('books', booksTemp);
module.exports = books;
