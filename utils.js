const fs = require('fs');
const { NOTES_FILENAME } = require('./config');

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
  saveNotes,
  loadNotes
}