const chalk = require('chalk');
const { loadNotes, saveNotes } = require('./utils');

const readNote = (title) => {
  const note = loadNotes().find(note => note.title === title);

  if (note) {
    console.log(chalk.inverse.green(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.inverse.red('Note not found!'))
  }
}

const listNotes = () => {
  const notes = loadNotes();
  
  console.log(chalk.inverse.green('Your notes:'));
  notes.forEach(({ title, body }) => {
    console.log(title);
  });
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(note => note.title === title);

  if (!duplicateNotes.length) {
    notes.push({
      title,
      body
    });
  
    saveNotes(notes);
    console.log(chalk.inverse.green('New note added!'));
  } else {
    console.log(chalk.inverse.red('Note title taken!'));
  }
}

const removeNote = title => {
  const notes = loadNotes();
  const filteredNotes = notes.filter(note => note.title !== title);

  if (filteredNotes.length !== notes.length) {
    saveNotes(filteredNotes);
    console.log(chalk.green.inverse(`Removed note with title '${title}'`));
  } else {
    console.log(chalk.inverse.red('Note not found!'));
  }
}

module.exports = {
  readNote,
  listNotes,
  addNote,
  removeNote
};