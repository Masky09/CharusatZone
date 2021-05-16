const mongoose = require('mongoose');

const notesTemp = new mongoose.Schema({
  notesSemester: {
    type: String,
    required: true,
  },
  notesBranch: {
    type: String,
    required: true,
  },
  notesSubject: {
    type: String,
    required: true,
  },
  notesDescription: {
    type: String,
    // required: true,
  },
  notesLink: {
    type: String,
    required: true,
  },
});

const notes = mongoose.model('notes', notesTemp);
module.exports = notes;
