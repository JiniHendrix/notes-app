const fs = require('fs');
const { NOTES_FILENAME } = require('./config');

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

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  
  fs.writeFileSync(NOTES_FILENAME, dataJSON);
}

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync(NOTES_FILENAME);
    const dataJSON = dataBuffer.toString();
    
    return JSON.parse(dataJSON);  
  } catch (e) {
    return [];
  }
}

module.exports = {
  getNotes,
  addNote
};