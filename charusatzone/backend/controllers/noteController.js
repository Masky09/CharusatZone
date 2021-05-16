const notes = require('../models/notes');

// create a new note
const createNote = async (req, res) => {
  try {
    const newNote = await notes.create({
      notesSemester: req.body.notesSemester,
      notesBranch: req.body.notesBranch,
      notesSubject: req.body.notesSubject,
      notesLink: req.body.notesLink,
    });

    if (newNote) {
      res.json({ note: newNote });
    } else {
      throw new Error('Error posting note');
    }
  } catch (error) {
    console.log(error.message);
    res.json({ error: error.message });
  }
};

// get all notes
const getAllNotes = async (req, res) => {
  try {
    const allNotes = await notes.find({});
    res.json({ notes: allNotes });
  } catch (error) {
    console.log(error.message);
    res.json({ error: error.message });
  }
};

module.exports = { createNote, getAllNotes };
