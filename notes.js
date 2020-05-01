const { loadNotes, saveNotes } = require('./utils');

const getNotes = () => 'Your notes...';

const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });

  if (!duplicateNotes.length) {
    notes.push({
      title,
      body
    });
  
    saveNotes(notes);
    console.log('New note added!');
  } else {
    console.log('Note title taken!');
  }
}

const removeNote = function (title) {
  const notes = loadNotes();
  const filteredNotes = notes.filter(function (note) {
    return note.title !== title;
  });

  if (filteredNotes.length !== notes.length) {
    saveNotes(filteredNotes);
    console.log(`Removed note with title '${title}'`);
  } else {
    console.log('Note not found!');
  }
}

module.exports = {
  getNotes,
  addNote,
  removeNote
};