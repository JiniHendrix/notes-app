const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

// Set yargs version
yargs.version('1.1.0');

// Register Add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler({ title, body }) {
    notes.addNote(title, body);
  }
})

// Register Remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Title of note',
      demandOption: true,
      type: 'string',
    }
  },
  handler({ title }) {
    notes.removeNote(title)
  }
})

// Register list command
yargs.command({
  command: 'list',
  describe: 'list notes',
  handler() {
    notes.listNotes();
  }
})

// Register read command
yargs.command({
  command: 'read',
  describe: 'read note',
  builder: {
    title: {
      describe: 'Title of note',
      demandOption: true,
      type: 'string',
    }
  },
  handler({ title }) {
    notes.readNote(title);
  }
})

yargs.parse()