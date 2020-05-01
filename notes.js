const fs = require('fs');
const { NOTES_FILENAME } = require('./config');

const getNotes = () => 'Your notes...';

const addNote = function (title, body) {
  const notes = loadNotes();
  
  notes.push({
    title,
    body
  });

  saveNotes(notes);
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